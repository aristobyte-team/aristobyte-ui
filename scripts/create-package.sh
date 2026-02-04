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

# ----------------------------------------
# Input validation
# ----------------------------------------

PACKAGE_NAME="${1:-}"

if [[ -z "$PACKAGE_NAME" ]]; then
  log_err "PACKAGE_NAME is required (e.g. message-box)"
  exit 1
fi

if [[ ! "$PACKAGE_NAME" =~ ^[a-z0-9]+(-[a-z0-9]+)*$ ]]; then
  log_err "Invalid package name. Use kebab-case only."
  exit 1
fi

# ----------------------------------------
# Derived variables
# ----------------------------------------

COMPONENT_NAME="$(
  echo "$PACKAGE_NAME" \
  | awk -F'-' '{ for (i=1; i<=NF; i++) $i=toupper(substr($i,1,1)) substr($i,2) }1' \
  | tr -d ' '
)"

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PKG_DIR="$ROOT_DIR/packages/$PACKAGE_NAME"
UTILS_PKG_JSON="$ROOT_DIR/packages/utils/package.json"
BASE_VERSION="1.0.0"
TEMPLATE_DIR="$ROOT_DIR/config/templates/package"

if [[ -f "$UTILS_PKG_JSON" ]]; then
  BASE_VERSION="$(jq -r '.version' "$UTILS_PKG_JSON")"
fi

if [[ -d "$PKG_DIR" ]]; then
  log_err "Package already exists: packages/$PACKAGE_NAME"
  exit 1
fi

log_step "Provisioning package"
log_muted "  package   : $PACKAGE_NAME"
log_muted "  component : $COMPONENT_NAME"

# ----------------------------------------
# Directory structure
# ----------------------------------------

log_step "Creating directory structure"
log_muted "  -> packages/$PACKAGE_NAME"
mkdir -p "$PKG_DIR"
log_ok "Base folder created"

# ----------------------------------------
# Template files
# ----------------------------------------

log_step "Copying template files"
log_muted "  -> $TEMPLATE_DIR"
cp -R "$TEMPLATE_DIR"/. "$PKG_DIR"
log_ok "Template files staged"

# ----------------------------------------
# Replace template placeholders and component folder name.
log_step "Applying template variables"
log_muted "  -> package.json"
log_muted "  -> README.md"
log_muted "  -> CHANGELOG.md"
log_muted "  -> tsconfig.build.json"
log_muted "  -> tsconfig.build.es.json"
log_muted "  -> tsconfig.build.cjs.json"
log_muted "  -> tsconfig.json"
log_muted "  -> src/main/index.ts"
log_muted "  -> src/main/components/index.ts"
log_muted "  -> src/main/components/$COMPONENT_NAME/index.tsx"
log_muted "  -> src/main/components/$COMPONENT_NAME/$COMPONENT_NAME.scss"
find "$PKG_DIR" -type f -print0 | xargs -0 perl -pi -e \
  "s/__PACKAGE_NAME__/$PACKAGE_NAME/g; s/__COMPONENT_NAME__/$COMPONENT_NAME/g; s/__BASE_VERSION__/$BASE_VERSION/g"

mv "$PKG_DIR/src/main/components/__COMPONENT_NAME__" "$PKG_DIR/src/main/components/$COMPONENT_NAME"
mv "$PKG_DIR/src/main/components/$COMPONENT_NAME/__COMPONENT_NAME__.scss" "$PKG_DIR/src/main/components/$COMPONENT_NAME/$COMPONENT_NAME.scss"

log_ok "Package files ready"

# ----------------------------------------
# Done
# ----------------------------------------

log_ok "Package created: packages/$PACKAGE_NAME"
