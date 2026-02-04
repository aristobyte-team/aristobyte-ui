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

CHANGESET_FILE=".changeset/ci-release.md"
LAST_COMMIT_MSG=$(git log -1 --pretty=%s)

case "$LAST_COMMIT_MSG" in
  feat*|feature*) BUMP_TYPE="minor" ;;
  fix*|chore*|docs*) BUMP_TYPE="patch" ;;
  ref*|refactor*) BUMP_TYPE="major" ;;
  *) BUMP_TYPE="patch" ;;
esac

log_info "Last commit: \"${LAST_COMMIT_MSG}\""
log_info "Detected bump type: ${BUMP_TYPE}"
log_info "Changeset file: ${CHANGESET_FILE}"

{
  echo "---"
  for pkg in packages/*; do
    if [ -d "$pkg" ]; then
      NAME=$(jq -r '.name' "$pkg/package.json")
      echo "\"$NAME\": $BUMP_TYPE"
    fi
  done
  echo "---"
  echo "Automated release from scripts/check-version.sh"
} > "$CHANGESET_FILE"

log_ok "Changeset file generated"
