#!/usr/bin/env bash

set -e

CYAN="\033[36m"
RESET="\033[0m"

SCRIPTS_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
REPO_DIR="${SCRIPTS_DIR}/.."
PACKAGES_DIR="${REPO_DIR}/packages"
ROOT_DIST="${REPO_DIR}/dist"

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
compile() {
  log "Compiling TypeScript (CJS)..."
  yarn run tsc -p tsconfig.build.cjs.json
  log "✨ Copiled CJS!"
  log "Compiling TypeScript (ESM)..."
  yarn run tsc -p tsconfig.build.es.json
  log "✨ Compiled ESM!"
}

# ----------------------------------------------------
# 2) Pack files based on package.json "files"
# ----------------------------------------------------
packPackage() {
  local dir=$1
  local dirname=$2
  local pkg_json=$3

  log "🦋 Packing $dirname"

  cd "$dir"

  local pkg_dist="$dir/dist"
  local target_dist="$ROOT_DIST/$dirname"

  rm -rf "$pkg_dist"
  mkdir -p "$pkg_dist"

  local files
  files=$(jq -r '.files[]?' package.json || true)

  if [[ -z "$files" ]]; then
    log "× No files field found in $dirname → skipping"
    return
  fi

  while read -r file; do
    [[ -z "$file" ]] && continue

    if [[ -e "$file" ]]; then
      mkdir -p "$(dirname "$pkg_dist/$file")"
      cp "$file" "$pkg_dist/$file"
      log "✓ Moved: $file → dist/$file"
    else
      log "× Missing: $file (ignored)"
    fi
  done <<< "$files"

  cp package.json "$pkg_dist/package.json"
  [[ -f CHANGELOG.md ]] && cp CHANGELOG.md "$pkg_dist/CHANGELOG.md"

  rm -rf "$target_dist"
  mkdir -p "$ROOT_DIST"
  mv "$pkg_dist" "$target_dist"

  log "🦋 Final artifact: dist/$dirname"
}

# ----------------------------------------------------
# 3) Normalize the root dist folder structure with es/ and lib/
# ----------------------------------------------------
normaliseEsAndLibInDist() {
  local dir=$1
  local dirname=$2
  local pkg_json=$3

  log "...Normalizing dist for $dirname"

  local pkg_root="$ROOT_DIST/$dirname"

  mkdir -p "$pkg_root"

  for format in es lib; do
    local src="$ROOT_DIST/$format/$dirname"
    local dest="$pkg_root/$format"

    if [[ -d "$src" ]]; then
      rm -rf "$dest"
      mkdir -p "$pkg_root"
      mv "$src" "$dest"
      log "✓ dist/$format/$dirname → dist/$dirname/$format"
    else
      log "× dist/$format/$dirname (ignored)"
    fi
  done

  log "✨ Normalised!"
}

# ----------------------------------------------------
# 4) Run pipeline
# ----------------------------------------------------

log "Starting build pipeline..."

compile
forEachPackage packPackage
forEachPackage normaliseEsAndLibInDist

rm -rf ./dist/es ./dist/lib

log "✨ Done!"
