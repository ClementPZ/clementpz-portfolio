#!/usr/bin/env bash
# What "done" means for this project. Called by the vault Stop hook after a turn
# that wrote files here. Types first, they catch the breakages that matter, then
# lint. Both are incremental and the pair runs in about three seconds.
set -uo pipefail
cd "$(dirname "$0")/.."
fail=0
npx --no-install tsc --noEmit || fail=1
npx --no-install eslint || fail=1
exit $fail
