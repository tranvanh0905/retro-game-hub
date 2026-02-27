import fs from 'fs';
import path from 'path';
import https from 'https';

const ROMS_DIR = path.resolve('public/roms/nes');
const IMAGES_DIR = path.resolve('public/images/nes');
const REPO = 'libretro-thumbnails/Nintendo_-_Nintendo_Entertainment_System';
const BRANCH = 'master';
const FOLDER = 'Named_Snaps';

// Region mapping: GoodNES -> No-Intro possible matches
const REGION_MAP = {
  'W':  ['World'],
  'U':  ['USA', 'USA, Europe', 'USA, Europe, Korea'],
  'E':  ['Europe', 'USA, Europe'],
  'J':  ['Japan', 'Japan, USA', 'Japan, Europe'],
  'JU': ['Japan, USA', 'USA'],
  'UE': ['USA, Europe', 'Europe'],
  'JE': ['Japan, Europe'],
  'G':  ['Germany'],
  'F':  ['France'],
  'S':  ['Spain'],
  'I':  ['Italy'],
  'SW': ['Sweden'],
  'NL': ['Netherlands'],
  'FC': ['Japan'],
  'Unl': ['USA', 'World', 'Japan'],
  'As':  ['Asia', 'Japan', 'Taiwan'],
  'K':  ['Korea'],
  'A':  ['Australia'],
  'C':  ['Canada'],
  'PC10': ['USA'],
  'GC': ['Japan', 'USA'],
  'VS': ['USA'],
  'PAL': ['Europe'],
};

// Fetch JSON from HTTPS
function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'retro-hub-script' } }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(new Error(`JSON parse error: ${e.message}`)); }
      });
    }).on('error', reject);
  });
}

// Download file
function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'retro-hub-script' } }, res => {
      if (res.statusCode === 302 || res.statusCode === 301) {
        file.close();
        fs.unlinkSync(dest);
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(dest);
        return resolve(false);
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(true); });
    }).on('error', () => { file.close(); try { fs.unlinkSync(dest); } catch {} resolve(false); });
  });
}

// Normalize a title for matching
function normalize(str) {
  return str
    .toLowerCase()
    .replace(/[''`]/g, "'")
    .replace(/[^a-z0-9' ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Extract title from ROM filename (GoodNES format)
function extractRomTitle(filename) {
  const base = filename.replace('.zip', '');
  const match = base.match(/^(.+?)(?:\s*[\(\[]|$)/);
  return match ? match[1].trim() : base;
}

// Extract regions from ROM filename
function extractRegions(filename) {
  const base = filename.replace('.zip', '');
  const regions = [];
  const re = /\(([^)]+)\)/g;
  let m;
  while ((m = re.exec(base)) !== null) {
    regions.push(m[1]);
  }
  return regions;
}

// Extract title from thumbnail filename (No-Intro format)
function extractThumbTitle(filename) {
  const base = filename.replace('.png', '');
  const match = base.match(/^(.+?)(?:\s*\(|$)/);
  return match ? match[1].trim() : base;
}

async function main() {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });

  // Step 1: Get all thumbnail filenames from GitHub API (recursive tree)
  console.log('Fetching thumbnail list from GitHub...');
  const treeUrl = `https://api.github.com/repos/${REPO}/git/trees/${BRANCH}?recursive=1`;
  const tree = await fetchJSON(treeUrl);

  if (!tree.tree) {
    console.error('Failed to fetch tree. Response:', JSON.stringify(tree).substring(0, 300));
    process.exit(1);
  }

  // Filter only Named_Snaps/*.png
  const thumbFiles = tree.tree
    .filter(t => t.path.startsWith(`${FOLDER}/`) && t.path.endsWith('.png'))
    .map(t => t.path.replace(`${FOLDER}/`, ''));

  console.log(`Found ${thumbFiles.length} thumbnails in ${FOLDER}/`);

  // Step 2: Build lookup map: normalized title -> [thumbnail filenames]
  const thumbMap = new Map();
  for (const tf of thumbFiles) {
    const title = normalize(extractThumbTitle(tf));
    if (!thumbMap.has(title)) thumbMap.set(title, []);
    thumbMap.get(title).push(tf);
  }
  console.log(`Unique thumbnail titles: ${thumbMap.size}`);

  // Step 3: Read ROM files and match
  const romFiles = fs.readdirSync(ROMS_DIR).filter(f => f.endsWith('.zip'));
  console.log(`ROM files to match: ${romFiles.length}`);

  let matched = 0;
  let failed = 0;
  let skipped = 0;

  for (let i = 0; i < romFiles.length; i++) {
    const romFile = romFiles[i];
    const romTitle = extractRomTitle(romFile);
    const normalizedRomTitle = normalize(romTitle);

    // Output filename = slug of rom file
    const slug = romFile.replace('.zip', '')
      .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    const destFile = path.join(IMAGES_DIR, `${slug}.png`);

    // Skip if already downloaded
    if (fs.existsSync(destFile)) {
      skipped++;
      continue;
    }

    // Find matching thumbnails by normalized title
    const candidates = thumbMap.get(normalizedRomTitle);
    if (!candidates || candidates.length === 0) {
      failed++;
      if (failed <= 20) console.log(`  ✗ No match: ${romFile}`);
      continue;
    }

    // Pick best candidate: try to match region
    const regions = extractRegions(romFile);
    let bestThumb = candidates[0]; // default: first match

    if (regions.length > 0 && candidates.length > 1) {
      const regionCode = regions[0];
      const possibleRegions = REGION_MAP[regionCode] || [];
      for (const pr of possibleRegions) {
        const found = candidates.find(c => c.includes(`(${pr})`));
        if (found) { bestThumb = found; break; }
      }
    }

    // Download
    const encodedPath = bestThumb.split('/').map(encodeURIComponent).join('/');
    const url = `https://raw.githubusercontent.com/${REPO}/${BRANCH}/${FOLDER}/${encodedPath}`;

    const ok = await downloadFile(url, destFile);
    if (ok) {
      matched++;
      if (matched % 100 === 0) console.log(`  ✓ Downloaded ${matched}... (${romFile})`);
    } else {
      failed++;
      if (failed <= 20) console.log(`  ✗ Download failed: ${bestThumb}`);
    }

    // Small delay to avoid hammering GitHub
    if (i % 10 === 0) await new Promise(r => setTimeout(r, 50));
  }

  console.log(`\nDone! Matched: ${matched}, Failed: ${failed}, Skipped (already exist): ${skipped}`);
  console.log(`Total images in ${IMAGES_DIR}: ${fs.readdirSync(IMAGES_DIR).filter(f => f.endsWith('.png')).length}`);
}

main().catch(console.error);
