#!/usr/bin/env bash
# Verify, ship, then prove it landed.
#
#   scripts/ship.sh "commit message" [/path ...]
#
# The three checks run BEFORE the commit, so nothing broken ever enters the
# history. Vercel builds from the push, so a green local build is the only
# thing standing between a commit and the live site.
#
# The paths are the pages the change touches. Their ETag is read before the
# push and polled after it. An ETag that flips is proof the new version is
# actually served, where a 200 only proves the site answers. A brand new page
# has no ETag before, and gains one after, which reads as a change too.

set -o pipefail

SITE="https://clementpz.com"
TIMEOUT=180

MSG="$1"
if [ -z "$MSG" ]; then
  echo "ship: a commit message is required" >&2
  exit 1
fi
shift

PATHS=("$@")
if [ ${#PATHS[@]} -eq 0 ]; then
  PATHS=("/")
fi

cd "$(dirname "$0")/.." || exit 1

branch=$(git branch --show-current)
if [ "$branch" != "main" ]; then
  echo "ship: on '$branch', but the deploy runs from main" >&2
  exit 1
fi
if [ -z "$(git status --porcelain)" ]; then
  echo "ship: nothing to commit" >&2
  exit 1
fi

step() { printf '\n== %s\n' "$1"; }

step "types"
npx tsc --noEmit || exit 1

step "lint"
npm run lint || exit 1

step "build"
if ! npm run build >/dev/null 2>&1; then
  echo "ship: build failed. Run 'npm run build' to read it." >&2
  exit 1
fi

etag() { curl -sI --max-time 10 "$SITE$1" | awk 'tolower($1)=="etag:"{print $2}'; }

BEFORE=()
for p in "${PATHS[@]}"; do
  BEFORE+=("$(etag "$p")")
done

step "about to commit"
git status --short

step "ship"
git add -A || exit 1
git commit -qm "$MSG" || exit 1
git push -q origin main || exit 1
echo "pushed $(git rev-parse --short HEAD)"

step "waiting for the deploy"
started=$SECONDS
pending=1
while [ $pending -eq 1 ] && [ $((SECONDS - started)) -lt $TIMEOUT ]; do
  pending=0
  for i in "${!PATHS[@]}"; do
    now=$(etag "${PATHS[$i]}")
    if [ -z "$now" ] || [ "$now" = "${BEFORE[$i]}" ]; then
      pending=1
    fi
  done
  if [ $pending -eq 1 ]; then sleep 6; fi
done

rc=0
for i in "${!PATHS[@]}"; do
  now=$(etag "${PATHS[$i]}")
  if [ -n "$now" ] && [ "$now" != "${BEFORE[$i]}" ]; then
    echo "live   $SITE${PATHS[$i]}"
  else
    echo "STALE  $SITE${PATHS[$i]} is still serving the old version" >&2
    rc=1
  fi
done

if [ $rc -eq 0 ]; then
  echo "deployed in $((SECONDS - started))s"
else
  echo "ship: the push landed, the deploy did not show up in ${TIMEOUT}s. Check Vercel." >&2
fi
exit $rc
