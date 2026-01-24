#!/usr/bin/env bash
set -e

SCRIPTS_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
REPO_DIR="${SCRIPTS_DIR}/.."
DIST_DIR="${REPO_DIR}/dist"

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

log "Publishing packages from dist/ to GitHub Packages..."

for pkg_dir in "$DIST_DIR"/*; do
  [ -d "$pkg_dir" ] || continue

  pkg_json="$pkg_dir/package.json"

  if [[ ! -f "$pkg_json" ]]; then
    log "Skipping (no package.json): $(basename "$pkg_dir")"
    continue
  fi

  name=$(jq -r '.name' "$pkg_json")
  private=$(jq -r '.private // false' "$pkg_json")
  dirname=$(basename "$pkg_dir")

  if [[ "$private" == "true" ]]; then
    log "Skipping private package: $dirname"
    continue
  fi

  log "Publishing $name from dist/$dirname"

  # ----------------------------------------------------
  # GitHub Packages publish from dist/
  # ----------------------------------------------------
  if [[ "$SCOPE" == "GITHUB_PACKAGES" ]]; then
    npm publish "$pkg_dir" \
      --access public \
      --registry https://npm.pkg.github.com/ \
      --//npm.pkg.github.com/:_authToken=$NODE_AUTH_TOKEN
  fi

  # ----------------------------------------------------
  # NPM publish via Changesets (root workflow)
  # ----------------------------------------------------
  if [[ "$SCOPE" == "NPM" ]]; then
    npm publish "$pkg_dir" \
      --access public \
      --registry https://registry.npmjs.org/
  fi
done

log "✨ GitHub Packages publish completed!"
exit 0

