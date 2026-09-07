#!/usr/bin/env bash
# Installs dependencies when a session starts here and they are missing, so
# node_modules/next/dist/docs exists before any Next.js-breaking edit. Skips
# silently when already installed, so a warm session pays nothing.
set -euo pipefail
cd "$(dirname "$0")/../.."
if [ ! -d node_modules/next ]; then
  npm install
fi
