#!/usr/bin/env bash

set -euo pipefail

SCRIPTS_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
REPO_DIR="${SCRIPTS_DIR}/.."
PKG_DIR="${REPO_DIR}/packages/cli"

cd "$PKG_DIR"

yarn -s tsc -p tsconfig.build.json &
TSC_PID=$!

cleanup() {
  kill "$TSC_PID" 2>/dev/null || true
}
trap cleanup EXIT

# Wait for first build
for _ in $(seq 1 100); do
  [[ -f "$PKG_DIR/dist/index.js" ]] && break
  sleep 0.1
done

node "$PKG_DIR/dist/index.js" "$@"
