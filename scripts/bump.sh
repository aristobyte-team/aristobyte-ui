#!/bin/bash
# =========================================== #
#       AristoByte UI - Bumping Script        #
# =========================================== #

BUMP_TYPE=$1 
if [ -z "$BUMP_TYPE" ]; then
  echo "Usage: sh ./scripts/bump.sh <patch|feat|fix>"
  exit 1
fi

bump_version() {
  PACKAGE_JSON=$1
  CURRENT_VERSION=$(jq -r '.version' "$PACKAGE_JSON")
  IFS='.' read -r MAJOR MINOR PATCH <<< "$CURRENT_VERSION"

  case "$BUMP_TYPE" in
    patch)
      MAJOR=$((MAJOR + 1))
      MINOR=0
      PATCH=0
      ;;
    feat)
      MINOR=$((MINOR + 1))
      PATCH=0
      ;;
    fix)
      PATCH=$((PATCH + 1))
      ;;
    *)
      echo "Invalid type: $BUMP_TYPE. Use patch, feat, or fix."
      exit 1
      ;;
  esac

  NEW_VERSION="$MAJOR.$MINOR.$PATCH"
  echo "Bumping $PACKAGE_JSON from $CURRENT_VERSION to $NEW_VERSION"

  jq --arg ver "$NEW_VERSION" '.version = $ver' "$PACKAGE_JSON" > "$PACKAGE_JSON.tmp" && mv "$PACKAGE_JSON.tmp" "$PACKAGE_JSON"
}

# Bump root package.json
bump_version "./package.json"

# Bump packages inside packages/*
for pkg in packages/*; do
  PACKAGE_JSON="$pkg/package.json"
  if [ ! -f "$PACKAGE_JSON" ]; then
    echo "Skipping $pkg - no package.json found"
    continue
  fi

  bump_version "$PACKAGE_JSON"
done
