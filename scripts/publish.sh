#!/usr/bin/env bash
set -euo pipefail

FG_CYAN="\033[36m"
FG_GREEN="\033[32m"
FG_YELLOW="\033[33m"
FG_RED="\033[31m"
FG_GRAY="\033[90m"
RESET="\033[0m"

log_info() { printf "%b[INFO]%b %s\n" "$FG_CYAN" "$RESET" "$*"; }
log_ok() { printf "%b[OK]%b %b✓%b %s\n" "$FG_GREEN" "$RESET" "$FG_GREEN" "$RESET" "$*"; }
log_warn() { printf "%b[WARN]%b %b!%b %s\n" "$FG_YELLOW" "$RESET" "$FG_YELLOW" "$RESET" "$*"; }
log_err() { printf "%b[FAIL]%b %b×%b %s\n" "$FG_RED" "$RESET" "$FG_RED" "$RESET" "$*"; }
log_muted() { printf "%b%s%b\n" "$FG_GRAY" "$*" "$RESET"; }

SCRIPTS_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
REPO_DIR="${SCRIPTS_DIR}/.."
PACKAGES_DIR="${REPO_DIR}/packages"

log_info "Publish scope: ${SCOPE:-<unset>}"

if [[ -z "${SCOPE:-}" ]]; then
  log_err "SCOPE env variable not set. Use: NPM | GITHUB_PACKAGES"
  exit 1
fi

if [[ -z "${NODE_AUTH_TOKEN:-}" && "$SCOPE" == "GITHUB_PACKAGES" ]]; then
  log_err "NODE_AUTH_TOKEN is required for GitHub Packages publish"
  exit 1
fi

for pkg_dir in "$PACKAGES_DIR"/*; do
  [ -d "$pkg_dir" ] || continue

  if [[ ! -f "$pkg_dir/dist/package.json" ]]; then
    log_warn "Skipping (no dist package.json): $(basename "$pkg_dir")"
    continue
  fi

  cd "$pkg_dir/dist"

  name=$(jq -r '.name' "./package.json")
  private=$(jq -r '.private // false' "./package.json")
  dirname=$(basename "$pkg_dir")

  if [[ "$private" == "true" ]]; then
    log_warn "Skipping private package: $dirname"
    continue
  fi

  if [[ "$SCOPE" == "GITHUB_PACKAGES" ]]; then
    log_info "Publishing $name to GitHub Packages"
    npm publish \
      --access public \
      --registry https://npm.pkg.github.com/ \
      --//npm.pkg.github.com/:_authToken=$NODE_AUTH_TOKEN
    log_ok "GitHub Packages publish completed"
  fi

  if [[ "$SCOPE" == "NPM" ]]; then
    log_info "Publishing $name to NPM registry"
    npm publish \
      --access public \
      --registry https://registry.npmjs.org/
    log_ok "NPM publish completed"
  fi

done
