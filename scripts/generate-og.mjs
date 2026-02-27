import { createCanvas } from '@napi-rs/canvas';
import { writeFileSync } from 'fs';
import { join } from 'path';

const W = 1200, H = 630;
const canvas = createCanvas(W, H);
const ctx = canvas.getContext('2d');

/* ── Background: dark gradient ── */
const bg = ctx.createLinearGradient(0, 0, W, H);
bg.addColorStop(0, '#0a0a1a');
bg.addColorStop(0.5, '#0f1628');
bg.addColorStop(1, '#0a0a1a');
ctx.fillStyle = bg;
ctx.fillRect(0, 0, W, H);

/* ── Grid pattern overlay ── */
ctx.strokeStyle = 'rgba(0,255,136,0.06)';
ctx.lineWidth = 1;
for (let x = 0; x < W; x += 40) {
  ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
}
for (let y = 0; y < H; y += 40) {
  ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
}

/* ── Decorative scanlines ── */
ctx.fillStyle = 'rgba(0,0,0,0.15)';
for (let y = 0; y < H; y += 4) {
  ctx.fillRect(0, y, W, 2);
}

/* ── Glow circles (decorative) ── */
const drawGlow = (cx, cy, r, color) => {
  const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
  g.addColorStop(0, color);
  g.addColorStop(1, 'transparent');
  ctx.fillStyle = g;
  ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
};
drawGlow(200, 500, 250, 'rgba(0,255,136,0.08)');
drawGlow(1000, 150, 300, 'rgba(0,100,255,0.06)');

/* ── Pixel-art controller icon (simplified) ── */
const drawController = (ox, oy, s) => {
  ctx.fillStyle = 'rgba(0,255,136,0.2)';
  // Body
  ctx.fillRect(ox, oy, s * 10, s * 6);
  // Grips
  ctx.fillRect(ox - s * 2, oy + s * 2, s * 2, s * 4);
  ctx.fillRect(ox + s * 10, oy + s * 2, s * 2, s * 4);
  // D-pad
  ctx.fillStyle = 'rgba(0,255,136,0.5)';
  ctx.fillRect(ox + s * 2, oy + s * 1.5, s, s * 3);
  ctx.fillRect(ox + s * 1, oy + s * 2.5, s * 3, s);
  // Buttons
  ctx.fillStyle = 'rgba(255,80,80,0.5)';
  ctx.beginPath(); ctx.arc(ox + s * 7.5, oy + s * 2, s * 0.7, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = 'rgba(80,80,255,0.5)';
  ctx.beginPath(); ctx.arc(ox + s * 8.8, oy + s * 3, s * 0.7, 0, Math.PI * 2); ctx.fill();
};
drawController(880, 380, 8);

/* ── Joystick emoji (large) ── */
ctx.font = '80px serif';
ctx.fillText('🕹️', 90, 520);

/* ── Main title ── */
ctx.fillStyle = '#00ff88';
ctx.font = 'bold 72px "Segoe UI", "Helvetica Neue", Arial, sans-serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

// Text shadow / glow
ctx.shadowColor = 'rgba(0,255,136,0.6)';
ctx.shadowBlur = 30;
ctx.fillText('RETRO GAME HUB', W / 2, 200);
ctx.shadowBlur = 0;

/* ── Subtitle ── */
ctx.fillStyle = '#ffffff';
ctx.font = '600 32px "Segoe UI", "Helvetica Neue", Arial, sans-serif';
ctx.fillText('Play Classic NES & PS1 Games Online', W / 2, 290);

/* ── Stats bar ── */
ctx.fillStyle = 'rgba(0,255,136,0.15)';
const barY = 350, barH = 60, barW = 700;
const barX = (W - barW) / 2;
ctx.fillRect(barX, barY, barW, barH);
ctx.strokeStyle = 'rgba(0,255,136,0.3)';
ctx.lineWidth = 1;
ctx.strokeRect(barX, barY, barW, barH);

ctx.fillStyle = '#00ff88';
ctx.font = 'bold 26px "Segoe UI", "Helvetica Neue", Arial, sans-serif';
ctx.fillText('2000+ Games  •  Free  •  No Download  •  Browser Play', W / 2, barY + barH / 2);

/* ── Bottom tagline ── */
ctx.fillStyle = 'rgba(255,255,255,0.5)';
ctx.font = '22px "Segoe UI", "Helvetica Neue", Arial, sans-serif';
ctx.fillText('retro-hub.games', W / 2, 560);

/* ── Top accent line ── */
const topLine = ctx.createLinearGradient(0, 0, W, 0);
topLine.addColorStop(0, 'transparent');
topLine.addColorStop(0.3, '#00ff88');
topLine.addColorStop(0.7, '#00ff88');
topLine.addColorStop(1, 'transparent');
ctx.fillStyle = topLine;
ctx.fillRect(0, 0, W, 4);

/* ── Bottom accent line ── */
ctx.fillRect(0, H - 4, W, 4);

/* ── Export ── */
const buf = canvas.toBuffer('image/png');
const outPath = join(process.cwd(), 'public', 'og-image.png');
writeFileSync(outPath, buf);
console.log(`✅ OG image saved: ${outPath} (${(buf.length / 1024).toFixed(0)} KB)`);
