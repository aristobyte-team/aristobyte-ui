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
FAILED=false

for dir in "${PACKAGES_DIR}"/*; do
  dirname=$(basename "$dir")
  if [ $# != 0 ] && ! [[ " ${@} " =~ " ${dirname} " ]]; then
    continue
  fi
  log_info "Testing ${dirname}"
  if ! yarn test --runInBand --passWithNoTests "packages/${dirname}/"; then
    FAILED=true
    log_err "Tests failed for ${dirname}"
  else
    log_ok "Tests passed for ${dirname}"
  fi
done

if [ "${FAILED}" == "true" ]; then
  exit 1
fi

log_ok "All tests completed"
