#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const configPath = process.argv[2] || path.join(__dirname, '..', 'config', 'log-suppress.json');
let suppress = [];

try {
  const raw = fs.readFileSync(configPath, 'utf8');
  const parsed = JSON.parse(raw);
  if (Array.isArray(parsed)) suppress = parsed;
} catch (err) {
  console.log(err);
}

const suppressSet = new Set(suppress);

let buffer = '';
process.stdin.setEncoding('utf8');

function flush(lines) {
  for (const line of lines) {
    if (line === '') {
      process.stdout.write('\n');
      continue;
    }
    if (!suppressSet.has(line)) {
      process.stdout.write(line + '\n');
    }
  }
}

process.stdin.on('data', (chunk) => {
  buffer += chunk;
  const parts = buffer.split(/\r?\n/);
  buffer = parts.pop() || '';
  flush(parts);
});

process.stdin.on('end', () => {
  if (buffer.length > 0) {
    flush([buffer]);
  }
});
