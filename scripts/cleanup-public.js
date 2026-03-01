#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public');

function walk(dir, visitor) {
  let entries = [];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, visitor);
      continue;
    }
    visitor(fullPath);
  }
}

const removed = [];

walk(PUBLIC_DIR, (filePath) => {
  if (path.basename(filePath) !== '.DS_Store') return;
  fs.unlinkSync(filePath);
  removed.push(path.relative(ROOT, filePath));
});

if (removed.length) {
  console.log(`cleanup-public: removed ${removed.length} macOS metadata file(s)`);
  for (const filePath of removed) console.log(` - ${filePath}`);
} else {
  console.log('cleanup-public: nothing to remove');
}
