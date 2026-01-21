#!/usr/bin/env node
'use strict';

const { execSync } = require('child_process');
const { readFileSync } = require('fs');

const output = execSync(
  'for file in $( find packages/ -type f -name "package.json" ); do echo "$file"; done'
).toString();

const packageJsonFiles = output
  .split('\n')
  .filter(Boolean)
  .filter((x) => !x.includes('/node_modules/'));

const actualVersion = JSON.parse(readFileSync(packageJsonFiles[0])).version;

console.info(`Actual My Account version: ${actualVersion}`);

const inconsistentVersions = packageJsonFiles.reduce((acc, x) => {
  const json = JSON.parse(readFileSync(x));
  const deps = json.dependencies || {};
  const aristobyteUIDeps = Object.entries(deps).filter(([name]) => name.startsWith('@aristobyte-ui/'));
  if (aristobyteUIDeps.some(([, version]) => version !== actualVersion)) {
    acc.push(x);
  }
  return acc;
}, []);

if (inconsistentVersions.length) {
  console.error(`There are inconsistent @aristobyte-ui/... versions in:\n- ${inconsistentVersions.join('\n- ')}`);
  process.exit(1);
}

console.info('@aristobyte-ui/... versions are consistent in all packages');
