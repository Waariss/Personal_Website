#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const REPORT_PATH = path.join(ROOT, '.lighthouse-report.json');
const TARGET_URL = process.env.LIGHTHOUSE_URL || 'https://waris-damkham.netlify.app/';
const MIN_SCORE = Number(process.env.LIGHTHOUSE_MIN_SCORE || 0.85);

if (process.env.LIGHTHOUSE_SKIP === '1') {
  console.log('lighthouse-check: skipped (LIGHTHOUSE_SKIP=1)');
  process.exit(0);
}

const run = spawnSync(
  'npx',
  [
    '--yes',
    'lighthouse',
    TARGET_URL,
    '--quiet',
    '--chrome-flags=--headless=new --no-sandbox',
    '--only-categories=performance,accessibility,best-practices,seo',
    '--output=json',
    `--output-path=${REPORT_PATH}`,
  ],
  {
    cwd: ROOT,
    stdio: 'inherit',
    env: process.env,
  }
);

if (run.status !== 0) {
  console.error('ERROR: lighthouse-check failed to run.');
  process.exit(run.status || 1);
}

if (!fs.existsSync(REPORT_PATH)) {
  console.error('ERROR: lighthouse report file not found.');
  process.exit(1);
}

const report = JSON.parse(fs.readFileSync(REPORT_PATH, 'utf8'));
const categories = report.categories || {};
const names = ['performance', 'accessibility', 'best-practices', 'seo'];
let hasFailure = false;

for (const name of names) {
  const score = categories[name]?.score;
  const pct = typeof score === 'number' ? Math.round(score * 100) : null;
  if (pct === null) {
    console.error(`ERROR: missing Lighthouse category score: ${name}`);
    hasFailure = true;
    continue;
  }

  console.log(`${name}: ${pct}`);
  if (score < MIN_SCORE) {
    console.error(`ERROR: ${name} score ${pct} is below threshold ${Math.round(MIN_SCORE * 100)}`);
    hasFailure = true;
  }
}

if (hasFailure) {
  process.exit(1);
}

console.log('lighthouse-check: OK');
