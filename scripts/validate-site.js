#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

function walkFiles(dir) {
  const out = [];
  const stack = [dir];
  while (stack.length) {
    const cur = stack.pop();
    let entries;
    try {
      entries = fs.readdirSync(cur, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const ent of entries) {
      const p = path.join(cur, ent.name);
      if (ent.isDirectory()) stack.push(p);
      else if (ent.isFile()) out.push(p);
    }
  }
  return out;
}

function readText(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function findLineCol(text, idx) {
  const pre = text.slice(0, idx);
  const lines = pre.split('\n');
  const line = lines.length;
  const col = lines[lines.length - 1].length + 1;
  return { line, col };
}

function fail(msg) {
  console.error(`ERROR: ${msg}`);
  process.exitCode = 1;
}

function assertNoDSStore() {
  const publicDir = path.join(ROOT, 'public');
  const hits = walkFiles(publicDir).filter((p) => path.basename(p) === '.DS_Store');
  if (hits.length) {
    for (const p of hits) fail(`Found .DS_Store under public/: ${path.relative(ROOT, p)}`);
  }
}

function assertNoHardcodedInternalDomain() {
  const srcDir = path.join(ROOT, 'src');
  const domain = 'https://waris-damkham.netlify.app/';
  const files = walkFiles(srcDir).filter((p) => /\.(js|jsx|ts|tsx|css|scss|md)$/.test(p));
  for (const filePath of files) {
    const text = readText(filePath);
    let idx = text.indexOf(domain);
    while (idx !== -1) {
      const { line, col } = findLineCol(text, idx);
      fail(`Hardcoded internal domain in ${path.relative(ROOT, filePath)}:${line}:${col}`);
      idx = text.indexOf(domain, idx + 1);
    }
  }
}

function assertSitemapRoutes() {
  const sitemapPath = path.join(ROOT, 'public', 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    fail('Missing public/sitemap.xml');
    return;
  }
  const xml = readText(sitemapPath);
  const locs = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  for (let m; (m = re.exec(xml)); ) locs.push(m[1].trim());

  const expected = new Set([
    'https://waris-damkham.netlify.app/',
    'https://waris-damkham.netlify.app/htb',
    'https://waris-damkham.netlify.app/p5project',
    'https://waris-damkham.netlify.app/8ksec-AI',
  ]);

  const actual = new Set(locs);
  for (const u of actual) {
    if (!expected.has(u)) fail(`Unexpected sitemap route: ${u}`);
  }
  for (const u of expected) {
    if (!actual.has(u)) fail(`Missing sitemap route: ${u}`);
  }
  if (xml.includes('/pdf') || xml.includes('/PDF')) fail('Sitemap should not contain /pdf or /PDF routes');
}

function extractPdfIdsFromSrc() {
  const srcDir = path.join(ROOT, 'src');
  const files = walkFiles(srcDir).filter((p) => /\.(js|jsx|ts|tsx)$/.test(p));

  const ids = new Set();
  // Only match literal strings to avoid false positives in comments / URLs.
  const re = /['"`]\/pdf\/([A-Za-z0-9-]+)['"`]/g;

  for (const filePath of files) {
    const text = readText(filePath);
    for (let m; (m = re.exec(text)); ) ids.add(m[1]);
  }
  return ids;
}

function extractPdfIdsFromViewer() {
  const viewerPath = path.join(ROOT, 'src', 'PDFViewer.js');
  if (!fs.existsSync(viewerPath)) {
    fail('Missing src/PDFViewer.js (needed to validate /pdf/:id mapping)');
    return new Set();
  }
  const text = readText(viewerPath);
  const ids = new Set();
  const caseRe = /case\s+['"]([^'"]+)['"]\s*:/g;
  const mapUseRe = /PDF_CONTENT_MAP\s*\[\s*pdfId\s*\]/;
  const mapFilePath = path.join(ROOT, 'src', 'data', 'pdfContentMap.js');

  for (let m; (m = caseRe.exec(text)); ) ids.add(m[1]);

  if (ids.size === 0 && mapUseRe.test(text) && fs.existsSync(mapFilePath)) {
    const mapText = readText(mapFilePath);
    const mapKeyRe = /^ {2}(['"]?)([A-Za-z0-9-]+)\1\s*:/gm;
    for (let m; (m = mapKeyRe.exec(mapText)); ) ids.add(m[2]);
  }

  return ids;
}

function assertPdfIdCoverage() {
  const referenced = extractPdfIdsFromSrc();
  const supported = extractPdfIdsFromViewer();
  for (const id of referenced) {
    if (!supported.has(id)) fail(`Referenced /pdf/${id} but no matching case in src/PDFViewer.js`);
  }
}

function assertNoopenerForTargetBlank() {
  const srcDir = path.join(ROOT, 'src');
  const files = walkFiles(srcDir).filter((p) => /\.(js|jsx|ts|tsx)$/.test(p));

  for (const filePath of files) {
    const text = readText(filePath);
    let idx = text.indexOf('target="_blank"');
    while (idx !== -1) {
      // Approximate: capture the JSX/HTML tag attributes in a single <...> region.
      const start = text.lastIndexOf('<', idx);
      const end = text.indexOf('>', idx);
      if (start !== -1 && end !== -1) {
        const tag = text.slice(start, end + 1);
        const hasRel = /rel\s*=\s*['"][^'"]*['"]/.test(tag);
        const hasNoopener = /rel\s*=\s*['"][^'"]*noopener[^'"]*['"]/.test(tag);
        const hasNoreferrer = /rel\s*=\s*['"][^'"]*noreferrer[^'"]*['"]/.test(tag);
        if (!hasRel || !hasNoopener || !hasNoreferrer) {
          const { line, col } = findLineCol(text, idx);
          fail(`target="_blank" without rel="noopener noreferrer" in ${path.relative(ROOT, filePath)}:${line}:${col}`);
        }
      }
      idx = text.indexOf('target="_blank"', idx + 1);
    }
  }
}

function main() {
  assertNoDSStore();
  assertNoHardcodedInternalDomain();
  assertSitemapRoutes();
  assertPdfIdCoverage();
  assertNoopenerForTargetBlank();

  if (process.exitCode) process.exit(process.exitCode);
  console.log('validate-site: OK');
}

main();
