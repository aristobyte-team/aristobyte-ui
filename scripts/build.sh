#!/usr/bin/env bash

set -euo pipefail

FG_CYAN="\033[36m"
FG_GREEN="\033[32m"
FG_YELLOW="\033[33m"
FG_RED="\033[31m"
FG_GRAY="\033[90m"
RESET="\033[0m"

log_info() { printf "%b[INFO]%b %s\n" "$FG_CYAN" "$RESET" "$*"; }
log_step() { printf "%b[STEP]%b %s\n" "$FG_CYAN" "$RESET" "$*"; }
log_ok() { printf "%b[OK]%b %b✓%b %s\n" "$FG_GREEN" "$RESET" "$FG_GREEN" "$RESET" "$*"; }
log_warn() { printf "%b[WARN]%b %b!%b %s\n" "$FG_YELLOW" "$RESET" "$FG_YELLOW" "$RESET" "$*"; }
log_err() { printf "%b[FAIL]%b %b×%b %s\n" "$FG_RED" "$RESET" "$FG_RED" "$RESET" "$*"; }
log_muted() { printf "%b%s%b\n" "$FG_GRAY" "$*" "$RESET"; }

SCRIPTS_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
REPO_DIR="${SCRIPTS_DIR}/.."
PACKAGES_DIR="${REPO_DIR}/packages"
ROOT_DIST="${REPO_DIR}/dist"
ASSETS_EXTENSIONS="scss,svg,png,json"

forEachPackage() {
  local callback=$1
  for dir in "${PACKAGES_DIR}"/*; do
    [ -d "$dir" ] || continue

    local pkg_json="$dir/package.json"
    local name
    name=$(jq -r '.name' "$pkg_json")
    local private
    private=$(jq -r '.private // false' "$pkg_json")
    local dirname
    dirname=$(basename "$dir")

    if [[ "$private" == "true" ]]; then
      log_warn "Skipping private package: $dirname"
      continue
    fi

    log_info "Package: $dirname ($name)"
    (cd "$dir" && "$callback" "$dir" "$dirname" "$pkg_json")
  done
}

# ----------------------------------------------------
# 1) Compile TS → dist inside each package
# ----------------------------------------------------
compileAll() {
  log_step "Compiling monorepo"

  log_info "Generating tsconfig.build.json"
  yarn generate-build-tsconfig

  rm -rf packages/*/es
  rm -rf packages/*/lib
  yarn compile

  log_ok "Compilation done"
}

# ----------------------------------------------------
# 2) Copy assets (scss,svg,png,json) to proper locations
# ----------------------------------------------------
copyAssets() {
  local dir=$1
  local dirname=$2

  log_info "Copying assets for $dir"

  yarn copyfiles --up=2 "src/main/**/*.{${ASSETS_EXTENSIONS}}" es
  yarn copyfiles --up=2 "src/main/**/*.{${ASSETS_EXTENSIONS}}" lib

  log_ok "Assets copied into es + lib for $dirname"
}

# ----------------------------------------------------
# 3) Pack files based on package.json "files"
# ----------------------------------------------------
packPackage() {
  local dirname=$2

  log_info "Packing $dirname"

  rm -rf "./dist"
  mkdir -p "./dist"

  local files
  files=$(jq -r '.files[]?' package.json || true)

  if [[ -z "$files" ]]; then
    log_warn "No files field found in $dirname; skipping"
    return
  fi

  while read -r file; do
    [[ -z "$file" ]] && continue

    if [[ -e "$file" ]]; then
      cp -r "./$file" "./dist/$file"
      log_ok "Moved $file → dist/$file"
    else
      log_warn "Missing: $file (ignored)"
    fi
  done <<< "$files"

  [[ -f package.json ]] && cp package.json ./dist/package.json
  [[ -f CHANGELOG.md ]] && cp CHANGELOG.md ./dist/CHANGELOG.md
  [[ -f README.md ]] && cp README.md ./dist/README.md

  if [[ -f LICENSE ]]; then
    cp LICENSE ./dist/LICENSE
  elif [[ -f LICENSE.md ]]; then
    cp LICENSE.md ./dist/LICENSE.md
  fi

  rm -rf ./es ./lib
  log_ok "Final artifact: $dirname/dist"
}

# ----------------------------------------------------
# 4) Execute
# ----------------------------------------------------
log_step "Starting build pipeline"

rm -rf "$ROOT_DIST"

compileAll
forEachPackage copyAssets
forEachPackage packPackage

log_ok "Build complete"
