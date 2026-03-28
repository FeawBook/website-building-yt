import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';
const dir = path.join(decodeURIComponent(path.dirname(new URL(import.meta.url).pathname)), 'temporary screenshots');

if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

// Find next available number
const existing = fs.readdirSync(dir).filter(f => f.startsWith('screenshot-'));
let n = 1;
for (const f of existing) {
  const match = f.match(/^screenshot-(\d+)/);
  if (match) n = Math.max(n, parseInt(match[1]) + 1);
}

const filename = label ? `screenshot-${n}-${label}.png` : `screenshot-${n}.png`;
const filepath = path.join(dir, filename);

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
await page.screenshot({ path: filepath, fullPage: true });
await browser.close();

console.log(`Screenshot saved: ${filepath}`);
