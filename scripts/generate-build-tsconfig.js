#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const repoDir = path.resolve(__dirname, '..');
const packagesDir = path.join(repoDir, 'packages');
const outputPath = path.join(repoDir, 'tsconfig.build.json');

const isDir = (p) => {
  try {
    return fs.statSync(p).isDirectory();
  } catch {
    return false;
  }
};

const readJson = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));

const getPackageDirs = () =>
  fs
    .readdirSync(packagesDir)
    .map((name) => path.join(packagesDir, name))
    .filter(isDir);

const getDeps = (pkgJson) => {
  const fields = ['dependencies', 'peerDependencies', 'optionalDependencies'];
  const deps = new Set();
  for (const field of fields) {
    const entries = pkgJson[field] || {};
    for (const depName of Object.keys(entries)) {
      deps.add(depName);
    }
  }
  return Array.from(deps);
};

const isInternal = (name) => name.startsWith('@aristobyte-ui/');

const packageInfo = [];
const nameToInfo = new Map();

for (const dir of getPackageDirs()) {
  const pkgJsonPath = path.join(dir, 'package.json');
  const tsconfigPath = path.join(dir, 'tsconfig.json');
  if (!fs.existsSync(pkgJsonPath) || !fs.existsSync(tsconfigPath)) {
    continue;
  }

  const pkgJson = readJson(pkgJsonPath);
  const name = pkgJson.name;
  if (!name) {
    continue;
  }

  const info = {
    name,
    dir,
    tsconfigPath,
    deps: getDeps(pkgJson).filter(isInternal),
  };
  packageInfo.push(info);
  nameToInfo.set(name, info);
}

const nodes = packageInfo.map((info) => info.name);
const depsMap = new Map();

for (const name of nodes) {
  depsMap.set(name, new Set());
}

for (const info of packageInfo) {
  const internalDeps = info.deps.filter((dep) => nameToInfo.has(dep));
  depsMap.set(info.name, new Set(internalDeps));
}

const depthMemo = new Map();
const visiting = new Set();

const getDepth = (name) => {
  if (depthMemo.has(name)) {
    return depthMemo.get(name);
  }
  if (visiting.has(name)) {
    throw new Error(`Dependency cycle detected at ${name}`);
  }
  visiting.add(name);
  const deps = Array.from(depsMap.get(name) || []);
  let depth = 0;
  for (const dep of deps) {
    depth = Math.max(depth, getDepth(dep) + 1);
  }
  visiting.delete(name);
  depthMemo.set(name, depth);
  return depth;
};

for (const name of nodes) {
  getDepth(name);
}

const ordered = nodes.slice().sort((a, b) => {
  const depthA = depthMemo.get(a) || 0;
  const depthB = depthMemo.get(b) || 0;
  if (depthA !== depthB) {
    return depthA - depthB;
  }
  return a.localeCompare(b);
});

const references = ordered
  .map((name) => nameToInfo.get(name))
  .filter(Boolean)
  .map((info) => ({
    path: path.relative(repoDir, info.tsconfigPath).replace(/\\/g, '/'),
  }));

const output = {
  files: [],
  references,
};

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2) + '\n', 'utf8');

process.stdout.write(`Generated tsconfig.build.json with ${references.length} references.\n`);
