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

TARGET="${1:-all}"

case "$TARGET" in
  docs)
    log_step "Starting dev (docs)"
    log_muted "  yarn workspace @aristobyte-ui/docs dev"
    yarn workspace @aristobyte-ui/docs dev
    ;;
  # cli)
  #   log_step "Starting dev (cli)"
  #   log_muted "  yarn workspace @aristobyte-ui/cli dev"
  #   yarn workspace @aristobyte-ui/cli dev
  #   ;;
  sandbox)
    log_step "Starting dev (sandbox)"
    log_muted "  yarn workspace @aristobyte-ui/sandbox dev"
    yarn workspace @aristobyte-ui/sandbox dev
    ;;
  *)
    log_err "Unknown target: $TARGET"
    log_info "Use: all | docs | cli | sandbox"
    exit 1
    ;;
esac

log_ok "Dev server exited"
