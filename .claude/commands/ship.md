---
description: Verify, ship and confirm a portfolio deploy
argument-hint: "<commit message>" [/path ...]
---

Run `scripts/ship.sh $ARGUMENTS` from the project root, once.

The script owns the whole sequence: typecheck, lint, build, commit, push, then
it waits until the live pages actually serve the new version. Do not run those
steps by hand, do not push separately, do not work around a failure.

Pass the pages the change touches as extra arguments, so the deploy is proved
on what changed rather than on the home page alone. Example:

    scripts/ship.sh "Add the Episource case study" /episource /

Relay the script's output exactly as printed, never a recalculated summary. If
it exits non-zero, say which step failed and stop.

The working tree is committed whole, so check `git status` first if anything
unrelated is lying around.
