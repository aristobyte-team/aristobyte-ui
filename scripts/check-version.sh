#!/usr/bin/env bash
set -e

COLOR_LIGHT_CYAN="\033[1;36m"
COLOR_LIGHT_GREEN="\033[1;32m"
COLOR_GREY="\033[90m"
COLOR_RESET="\033[0m"

CHANGESET_FILE=".changeset/ci-release.md"
LAST_COMMIT_MSG=$(git log -1 --pretty=%s)

case "$LAST_COMMIT_MSG" in
  feat*|feature*)
    BUMP_TYPE="minor"
    ;;
  fix*|chore*|docs*)
    BUMP_TYPE="patch"
    ;;
  ref*|refactor*)
    BUMP_TYPE="major"
    ;;
  *)
    BUMP_TYPE="patch"
    ;;
esac

echo -e "🦋 Last commit message: \"${COLOR_GREY}$LAST_COMMIT_MSG${COLOR_RESET}\""
echo -e "🦋 Detected bump type: \"${COLOR_LIGHT_GREEN}$BUMP_TYPE${COLOR_RESET}\""
echo -e "🦋 Change set file: \"${COLOR_LIGHT_CYAN}$CHANGESET_FILE${COLOR_RESET}\""

echo "---" > $CHANGESET_FILE

for pkg in packages/*; do
  if [ -d "$pkg" ]; then
    NAME=$(jq -r '.name' "$pkg/package.json")
    echo "\"$NAME\": $BUMP_TYPE" >> $CHANGESET_FILE
  fi
done

echo "---" >> $CHANGESET_FILE
echo "Automated release from scripts/version.sh" >> $CHANGESET_FILE
echo -e "${COLOR_LIGHT_GREEN}✓ Successfully generated changeset version file${COLOR_RESET}"
