import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';
import { lookup } from 'mime-types';

const ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const ACCESS_KEY = process.env.R2_ACCESS_KEY;
const SECRET_KEY = process.env.R2_SECRET_KEY;
const BUCKET = 'retro-game-hub';
const PUBLIC_DIR = join(process.cwd(), 'public');
const CONCURRENCY = 30;

const s3 = new S3Client({
  region: 'auto',
  endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: { accessKeyId: ACCESS_KEY, secretAccessKey: SECRET_KEY },
});

function walk(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) files.push(...walk(full));
    else files.push(full);
  }
  return files;
}

const romFiles = walk(join(PUBLIC_DIR, 'roms'));
const imgFiles = walk(join(PUBLIC_DIR, 'images'));
const allFiles = [...romFiles, ...imgFiles];

console.log(`📦 Uploading ${allFiles.length} files to R2...`);

let done = 0;
let errors = 0;

async function upload(filePath) {
  const key = relative(PUBLIC_DIR, filePath);
  const body = readFileSync(filePath);
  const ct = lookup(filePath) || 'application/octet-stream';
  try {
    await s3.send(new PutObjectCommand({
      Bucket: BUCKET, Key: key, Body: body, ContentType: ct,
    }));
    done++;
    if (done % 100 === 0 || done === allFiles.length) {
      console.log(`  ✅ ${done}/${allFiles.length} uploaded`);
    }
  } catch (e) {
    errors++;
    console.error(`  ❌ ${key}: ${e.message}`);
  }
}

// Upload in batches of CONCURRENCY
for (let i = 0; i < allFiles.length; i += CONCURRENCY) {
  const batch = allFiles.slice(i, i + CONCURRENCY);
  await Promise.all(batch.map(upload));
}

console.log(`\n🎉 Done! ${done} uploaded, ${errors} errors.`);
