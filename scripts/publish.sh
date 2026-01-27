#!/usr/bin/env bash
set -e

SCRIPTS_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
REPO_DIR="${SCRIPTS_DIR}/.."
PACKAGES_DIR="${REPO_DIR}/packages"

CYAN="\033[36m"
RESET="\033[0m"

log() {
  echo -e "${CYAN}🦋 $1${RESET}"
}
echo "🚀 Publish scope: $SCOPE"

if [[ -z "${SCOPE:-}" ]]; then
  echo "❌ SCOPE env variable not set. Use: NPM | GITHUB_PACKAGES"
  exit 1
fi

if [[ -z "${NODE_AUTH_TOKEN:-}" && "$SCOPE" == "GITHUB_PACKAGES" ]]; then
  echo "❌ NODE_AUTH_TOKEN is required for GitHub Packages publish"
  exit 1
fi

for pkg_dir in "$PACKAGES_DIR"/*; do
  [ -d "$pkg_dir" ] || continue

  cd "$pkg_dir/dist"

  if [[ ! -f "./package.json" ]]; then
    log "Skipping (no package.json): $(basename "$pkg_dir")"
    continue
  fi

  name=$(jq -r '.name' "./package.json")
  private=$(jq -r '.private // false' "./package.json")
  dirname=$(basename "$pkg_dir")

  if [[ "$private" == "true" ]]; then
    log "Skipping private package: $dirname"
    continue
  fi

  # ----------------------------------------------------
  # GitHub Packages publish from dist/
  # ----------------------------------------------------
  if [[ "$SCOPE" == "GITHUB_PACKAGES" ]]; then
    log "Publishing \"$pkg_dir\" to GitHub Packages registry..."
    npm publish \
      --access public \
      --registry https://npm.pkg.github.com/ \
      --//npm.pkg.github.com/:_authToken=$NODE_AUTH_TOKEN
    log "✨ GitHub Packages publish completed!"
  fi

  # ----------------------------------------------------
  # NPM publish via Changesets (root workflow)
  # ----------------------------------------------------
  if [[ "$SCOPE" == "NPM" ]]; then
    log "Publishing \"$pkg_dir\" to NPM registry..."
    npm publish \
      --access public \
      --registry https://registry.npmjs.org/
    log "✨ NPM publish completed!"
  fi
done
