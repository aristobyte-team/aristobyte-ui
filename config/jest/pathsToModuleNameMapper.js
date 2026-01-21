'use strict';

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '../..');
const PACKAGES_DIR = path.join(ROOT_DIR, 'packages');

function pathsToModuleNameMapper() {
  const packageDirs = fs.readdirSync(PACKAGES_DIR);
  return packageDirs
    .map((dirName) => {
      const packageJson = require(path.join(PACKAGES_DIR, dirName, 'package.json'));
      if (packageJson.private) {
        return null;
      }
      return { [`^${packageJson.name.replace('-', '\\-')}$`]: `<rootDir>/packages/${dirName}/src/main` };
    })
    .filter(Boolean)
    .reduce(
      (acc, it) => ({
        ...acc,
        ...it,
      }),
      {}
    );
}

module.exports = {
  pathsToModuleNameMapper,
};
