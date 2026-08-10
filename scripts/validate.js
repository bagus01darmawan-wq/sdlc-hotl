// scripts/validate.js
// Pemeriksa tata kelola SDLC-HOTL — dijalankan oleh CI (workflow: gerbang-tata-kelola).
// Mesin ini menjaga prinsip konstitusi:
//   - artefak wajib sistem selalu ada (Pasal 3)
//   - PRD mengikuti struktur G0 dan punya acceptance criteria teruji (Pasal 4)
//   - ingatan STATUS.md selalu segar (Protokol Tutup Sesi, AGENTS.md)
//   - tidak ada referensi antardokumen yang patah (keberaksaraan)
// Tanpa dependensi eksternal; cukup: node scripts/validate.js

const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');

const failures = [];
const warnings = [];
const infos = [];

const exists = (rel) => fs.existsSync(path.join(root, rel));
const read = (rel) => fs.readFileSync(path.join(root, rel), 'utf8');

// 1. Berkas wajib sistem
const WAJIB = [
  'AGENTS.md',
  'STATUS.md',
  'README.md',
  '00-Konstitusi-HOTL.md',
  '01-Checklist-Gerbang.md',
  '02-Template-PRD.md',
];
for (const f of WAJIB) {
  if (!exists(f)) failures.push(`berkas wajib hilang: ${f}`);
}

// 2. Referensi antardokumen tidak boleh patah
//    Pengecualian: berkas yang memang sengaja lokal-saja (tidak pernah diunggah).
const LOKAL_SAJA = new Set(['PRIBADI-JANGAN-DIUNGGAH.md']);
const mdFiles = fs.readdirSync(root).filter((f) => f.endsWith('.md'));
for (const f of mdFiles) {
  const text = read(f);
  const refs = new Set();
  for (const m of text.matchAll(/`([^`]+\.md)`/g)) refs.add(m[1]);
  for (const m of text.matchAll(/\]\(([^)]+\.md)\)/g)) refs.add(m[1]);
  for (const r of refs) {
    if (LOKAL_SAJA.has(r)) continue;
    if (!exists(r)) failures.push(`${f}: referensi patah -> ${r}`);
  }
}

// 3. Struktur PRD mengikuti template / checklist G0
const prdFiles = mdFiles.filter((f) => /\d+-PRD-\d+/i.test(f));
for (const f of prdFiles) {
  const t = read(f);
  const bagianWajib = ['## 1. Masalah', '## 4. Ukuran sukses', '## 5. Non-goals', '## 6. Acceptance criteria'];
  for (const b of bagianWajib) {
    if (!t.includes(b)) failures.push(`${f}: bagian wajib PRD hilang -> "${b}"`);
  }
  const jumlahAC = (t.match(/\|\s*AC-\d+/g) || []).length;
  if (jumlahAC === 0) failures.push(`${f}: tidak punya acceptance criteria`);
  else infos.push(`${f}: ${jumlahAC} acceptance criteria`);
  const menungguIsi = (t.match(/\[ISI:/g) || []).length;
  if (menungguIsi > 0) warnings.push(`${f}: ${menungguIsi} isian [ISI:] masih menunggu HOTL`);
}

// 4. Ingatan harus segar & decision log utuh
if (exists('STATUS.md') && !/Terakhir diperbarui:\**\s*20\d{2}-\d{2}-\d{2}/.test(read('STATUS.md'))) {
  failures.push('STATUS.md: tanggal "Terakhir diperbarui" tidak valid (YYYY-MM-DD)');
}
if (exists('00-Konstitusi-HOTL.md')) {
  const k = read('00-Konstitusi-HOTL.md');
  if (!k.includes('Decision Log')) failures.push('konstitusi: decision log tidak ditemukan');
  infos.push(`konstitusi: ${(k.match(/\[KALIBRASI\]/g) || []).length} parameter [KALIBRASI] terdaftar`);
}

// 5. Kebersihan data pribadi (repo ini PUBLIK — pasal keamanan khusus)
if (!exists('.gitignore') || !read('.gitignore').includes('PRIBADI-JANGAN-DIUNGGAH.md')) {
  failures.push('.gitignore tidak mengecualikan PRIBADI-JANGAN-DIUNGGAH.md');
}
if (process.env.CI === 'true' && exists('PRIBADI-JANGAN-DIUNGGAH.md')) {
  failures.push('KEBOCORAN: PRIBADI-JANGAN-DIUNGGAH.md ikut ter-commit ke repo publik');
}

// Laporan akhir
for (const i of infos) console.log(`INFO      : ${i}`);
for (const w of warnings) console.log(`PERINGATAN: ${w}`);
for (const g of failures) console.log(`GAGAL     : ${g}`);
if (failures.length) {
  console.log(`\nGERBANG TATA KELOLA: MERAH (${failures.length} pelanggaran) — fail-closed, tidak boleh digabung.`);
  process.exit(1);
}
console.log('\nGERBANG TATA KELOLA: HIJAU.');
