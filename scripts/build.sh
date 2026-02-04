#!/usr/bin/env bash

set -e

CYAN="\033[36m"
RESET="\033[0m"

SCRIPTS_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
REPO_DIR="${SCRIPTS_DIR}/.."
PACKAGES_DIR="${REPO_DIR}/packages"
ROOT_DIST="${REPO_DIR}/dist"
ASSETS_EXTENSIONS="scss,svg,png,json"

log() {
  echo -e "${CYAN}🦋 $1${RESET}"
}

forEachPackage() {
  local callback=$1
  for dir in "${PACKAGES_DIR}"/*; do
    [ -d "$dir" ] || continue

    local pkg_json="$dir/package.json"
    local name=$(jq -r '.name' "$pkg_json")
    local private=$(jq -r '.private // false' "$pkg_json")
    local dirname=$(basename "$dir")

    if [[ "$private" == "true" ]]; then
      log "...Skipping private package: $dirname"
      continue
    fi

    log "🦋 Package: $dirname ($name)"
    (cd "$dir" && "$callback" "$dir" "$dirname" "$pkg_json")
  done
}

# ----------------------------------------------------
# 1) Compile TS → dist inside each package
# ----------------------------------------------------
compileAll() {
  log "⚙️ Compiling monorepo..."

  rm -rf packages/*/es
  rm -rf packages/*/lib
  yarn tsc -b tsconfig.build.json

  log "✨ Compilation done!"
}

# ----------------------------------------------------
# 2) Copy assets (scss,svg,png,json) to proper locations
# ----------------------------------------------------
copyAssets() {
  local dir=$1
  local dirname=$2
  local pkg_json=$3

  log "Copying assets for $dir"

  yarn copyfiles --up=2 "src/main/**/*.{${ASSETS_EXTENSIONS}}" es
  yarn copyfiles --up=2 "src/main/**/*.{${ASSETS_EXTENSIONS}}" lib

  log "✓ Assets copied into es + lib for $dirname"
}

# ----------------------------------------------------
# 3) Pack files based on package.json "files"
# ----------------------------------------------------
packPackage() {
  local dir=$1
  local dirname=$2
  local pkg_json=$3

  log "Packing $dirname"

  rm -rf "./dist"
  mkdir -p "./dist"

  local files
  files=$(jq -r '.files[]?' package.json || true)

  if [[ -z "$files" ]]; then
    log "× No files field found in $dirname → skipping"
    return
  fi

  while read -r file; do
    [[ -z "$file" ]] && continue

    if [[ -e "$file" ]]; then
      cp -r "./$file" "./dist/$file"
      log "✓ Moved: $file → dist/$file"
    else
      log "× Missing: $file (ignored)"
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
  log "🦋 Final artifact: $dirname/dist"
}

# ----------------------------------------------------
# 4) Execute
# ----------------------------------------------------
log "Starting build pipeline..."

rm -rf dist

compileAll
forEachPackage copyAssets
forEachPackage packPackage

log "✨ Done!"
