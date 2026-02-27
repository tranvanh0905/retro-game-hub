import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://retro-hub.games';
const OUTPUT = path.resolve('public/sitemap.xml');

// Read game slugs from ROM directories
const systems = [
  { id: 'nes', dir: 'public/roms/nes', exts: ['.zip'] },
  { id: 'ps1', dir: 'public/roms/ps1', exts: ['.7z', '.zip', '.chd', '.pbp', '.bin', '.iso'] },
];

const slugs = [];
for (const sys of systems) {
  const dir = path.resolve(sys.dir);
  if (!fs.existsSync(dir)) continue;
  const files = fs.readdirSync(dir).filter(f => sys.exts.some(e => f.toLowerCase().endsWith(e)));
  for (const f of files) {
    const ext = sys.exts.find(e => f.toLowerCase().endsWith(e)) || '';
    const base = ext ? f.slice(0, -ext.length) : f;
    const slug = base.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    slugs.push(slug);
  }
}

const today = new Date().toISOString().split('T')[0];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
`;

for (const slug of slugs) {
  xml += `  <url>
    <loc>${SITE_URL}/play/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
}

xml += `</urlset>
`;

fs.writeFileSync(OUTPUT, xml, 'utf-8');
console.log(`Sitemap generated: ${slugs.length + 1} URLs → ${OUTPUT}`);
