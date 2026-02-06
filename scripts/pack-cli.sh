#!/usr/bin/env bash

set -euo pipefail

DIRNAME=$1

PKG_DIST="./dist"

if [[ ! -d "$PKG_DIST" ]]; then
  echo "[FAIL] Missing build output for $DIRNAME (expected $PKG_DIST)"
  exit 1
fi

OUTPUT_PKG_JSON="${PKG_DIST}/package.json"

jq '
  .main = "index.js"
  | .types = "index.d.ts"
  | (if .bin then
      (if (.bin | type)=="object" then
        .bin |= with_entries(.value="index.js")
      else
        .bin = "index.js"
      end)
    else
      .
    end)
  | (if .exports then
      (if (.exports | type)=="object" then
        .exports = {".":"./index.js","./package.json":"./package.json"}
      else
        .
      end)
    else
      .
    end)
  | del(.files)
  | del(.devDependencies)
' package.json > "$OUTPUT_PKG_JSON"

[[ -f CHANGELOG.md ]] && cp CHANGELOG.md "$PKG_DIST/CHANGELOG.md"
[[ -f README.md ]] && cp README.md "$PKG_DIST/README.md"

SCRIPTS_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
REPO_DIR="${SCRIPTS_DIR}/.."

if [[ -f "$REPO_DIR/LICENSE" ]]; then
  cp "$REPO_DIR/LICENSE" "$PKG_DIST/LICENSE"
elif [[ -f "$REPO_DIR/LICENSE.md" ]]; then
  cp "$REPO_DIR/LICENSE.md" "$PKG_DIST/LICENSE.md"
fi

chmod +x "$PKG_DIST/index.js" 2>/dev/null || true
