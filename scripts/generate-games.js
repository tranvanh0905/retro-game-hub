import fs from 'fs';
import path from 'path';

const SYSTEMS = [
  { id: 'nes', name: 'NES', full: 'Nintendo Entertainment System', core: 'nes', color: '#e74c3c', icon: '🎮', ext: '.nes', romExts: ['.zip'] },
  { id: 'ps1', name: 'PS1', full: 'PlayStation 1', core: 'psx', color: '#3498db', icon: '🎯', ext: '.bin', romExts: ['.7z', '.zip', '.chd', '.pbp', '.bin', '.iso'] },
];

const OUTPUT = path.resolve('src/data/games.js');

function parseFilename(filename, exts) {
  const ext = exts.find(e => filename.toLowerCase().endsWith(e)) || '';
  const base = ext ? filename.slice(0, -ext.length) : filename;
  const titleMatch = base.match(/^(.+?)(?:\s*[\(\[]|$)/);
  let title = titleMatch ? titleMatch[1].trim() : base;

  const regions = [];
  const parenRegex = /\(([^)]+)\)/g;
  let m;
  while ((m = parenRegex.exec(base)) !== null) {
    regions.push(m[1]);
  }

  const regionStr = regions.length > 0 ? ` (${regions.join(', ')})` : '';
  const displayTitle = title + regionStr;

  const slug = base
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return { title: displayTitle, slug, romFile: filename };
}

let globalId = 0;
const allGames = [];
const stats = {};

for (const sys of SYSTEMS) {
  const romsDir = path.resolve(`public/roms/${sys.id}`);
  const imagesDir = path.resolve(`public/images/${sys.id}`);

  if (!fs.existsSync(romsDir)) {
    console.log(`Skipping ${sys.name}: no roms directory at ${romsDir}`);
    continue;
  }

  const files = fs.readdirSync(romsDir)
    .filter(f => sys.romExts.some(ext => f.toLowerCase().endsWith(ext)))
    .sort();

  const imageFiles = new Set(
    fs.existsSync(imagesDir)
      ? fs.readdirSync(imagesDir).filter(f => f.endsWith('.png')).map(f => f.replace('.png', ''))
      : []
  );

  let withImg = 0;
  for (const f of files) {
    globalId++;
    const { title, slug, romFile } = parseFilename(f, sys.romExts);
    const hasImage = imageFiles.has(slug);
    const game = { id: globalId, title, slug, system: sys.id, romFile };
    if (hasImage) { game.img = true; withImg++; }
    allGames.push(game);
  }

  stats[sys.id] = { total: files.length, withImg };
  console.log(`${sys.name}: ${files.length} games (${withImg} with thumbnails)`);
}

const statsLine = Object.entries(stats).map(([id, s]) => `${s.total} ${id.toUpperCase()}`).join(', ');
const totalImg = Object.values(stats).reduce((a, s) => a + s.withImg, 0);

const systemsObj = {};
for (const sys of SYSTEMS) {
  systemsObj[sys.id] = { name: sys.name, full: sys.full, core: sys.core, color: sys.color, icon: sys.icon, ext: sys.ext };
}

const output = `// Auto-generated from ROM files — ${allGames.length} games (${statsLine}) (${totalImg} with thumbnails)
// Generated on ${new Date().toISOString()}

export const SYSTEMS = ${JSON.stringify(systemsObj, null, 2)};

export function romUrl(game) {
  return \`/roms/\${game.system}/\${game.romFile}\`;
}

export function imgUrl(game) {
  if (!game.img) return null;
  return \`/images/\${game.system}/\${game.slug}.png\`;
}

export const GAMES = ${JSON.stringify(allGames, null, 2)};
`;

fs.writeFileSync(OUTPUT, output, 'utf-8');
console.log(`\nGenerated ${allGames.length} total games → ${OUTPUT}`);
