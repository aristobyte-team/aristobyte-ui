#!/usr/bin/env bash
# =========================================== #
#   AristoByte UI - Package Bumping Script    #
# =========================================== #

PACKAGE_NAME=$1
PACKAGE_VERSION=$2

if [ -z "$PACKAGE_NAME" ] || [ -z "$PACKAGE_VERSION" ]; then
  echo "Usage: $0 <package-name> <version>"
  exit 1
fi

for pkg in packages/*; do
  if [ ! -f "$pkg/package.json" ]; then
    echo "Skipping $pkg – no package.json found"
    continue
  fi

  if grep -q "\"$PACKAGE_NAME\"" "$pkg/package.json"; then
    echo "Updating $PACKAGE_NAME to $PACKAGE_VERSION in $pkg"
    cd "$pkg" || exit
    yarn add "$PACKAGE_NAME@$PACKAGE_VERSION"
    cd - > /dev/null || exit
  else
    echo "Skipping $pkg – $PACKAGE_NAME not found in package.json"
  fi
done
