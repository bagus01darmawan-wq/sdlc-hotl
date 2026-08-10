# STATUS SISTEM — ingatan SDLC-HOTL

**Terakhir diperbarui:** 2026-08-10 (wajib diperbarui di akhir setiap sesi — lihat Protokol Tutup Sesi di `AGENTS.md`)

> **Ringkas untuk agen yang baru bangun:** Konstitusi v0.1 sudah diratifikasi. Kita sedang menyiapkan dry run pertama: Website LAZISNU (PRD-001), status draf, menunggu ratifikasi G0 oleh HOTL. Trust level 0 = semua langkah menunggu putusan HOTL.

---

## 1. Di mana kita sekarang

- **Fase:** **F1 (dry run)** — PRD-001 lolos P0 ✅ dan P1 ✅ (2026-08-10). Kini di **P2 — builder = hermes** membangun (tes QA v1.1 diratifikasi; aturan: tes merah dulu, builder dilarang menyentuh tes).
- **Trust level:** 0 (Magang / HITL penuh)
- **Proyek dry run:** Website Identitas LAZISNU — lihat `03-PRD-001-Website-LAZISNU.md`
- **Alat tersedia:** opencode, Trae IDE, Antigravity IDE, hermes agent
- **Infra tata kelola:** repo git + CI khusus hidup di https://github.com/bagus01darmawan-wq/sdlc-hotl — kini **PUBLIK + branch protection**: `main` hanya berubah lewat PR dengan CI hijau (admin pun tunduk). Data sensitif lembaga ditampung `PRIBADI-JANGAN-DIUNGGAH.md` (lokal, gitignored). Repo proyek website LAZISNU menyusul saat tahap P2.
- **Pemetaan peran awal:** builder = opencode; reviewer = Antigravity/Trae (beda sesi+model); auditor = hermes agent (diputuskan final saat G1)

## 2. Yang menunggu putusan HOTL

| # | Hal | Sejak | Tergantung jawaban HOTL tentang |
|---|---|---|---|
| 1 | Jalankan hermes dengan surat tugas (berkas 07) — pantau: repo website lahir, tes MERAH dulu, lalu hijau bertahap | 2026-08-10 | — |

## 3. Pekerjaan aktif (cermin tabel pelacakan)

| ID | Pekerjaan | Tahap | Pemegang saat ini | Menunggu HOTL sejak | Status |
|---|---|---|---|---|---|
| PRD-001 | Website Identitas LAZISNU | P2 — builder membangun (Fase B0) | hermes | — | **Tes QA DIRATIFIKASI** 2026-08-10 |

## 4. Langkah berikutnya (siapa melakukan apa)

1. **QA-agent (sesi ini):** tulis rencana tes (berkas 05; merah dulu / failing-first; kasus gagal sebelum kasus senang).
2. **HOTL:** jalankan prompt reviewer atas berkas 05 (sesi baru) → tempel hasilnya → ratifikasi.
3. **Builder (opencode):** implementasi T1–T12 hingga tes QA hijau — **dilarang menyentuh berkas tes**.
4. **Reviewer:** vonis G2 (hasil bangunan) dengan bukti demo per AC.

## 5. Pelajaran tercatat

- 2026-08-10 — Sistem harus hidup di **berkas, bukan sesi**. Maka lahir `AGENTS.md` + `STATUS.md` + tiga protokol (Bangun, Tutup Sesi, Tumbuh).
- 2026-08-10 — Konstitusi kini **ditegakkan mesin**: CI `gerbang-tata-kelola` memeriksa setiap perubahan (fail-closed). Janji jadi bukti.
- 2026-08-10 — Proteksi diuji dengan memakainya: pencatatan proteksi dilakukan lewat **PR pertama** yang dijaga CI (self-test).
- 2026-08-10 — Kritik HOTL "klaim spesialisasi belum terbukti" melahirkan doktrin spesialis: pakar harus **berkontrak dan meninggalkan jejak**, bukan dipercaya begitu saja.
- 2026-08-10 — Insiden **bukti basi**: vonis reviewer ke-3 menilai versi lama G1 (kutipannya cocok dengan v1.0/v1.1, bukan v1.2). Pasal 4 membuktikan diri: bukti kedaluwarsa tidak sah. Antibodi: setiap artefak yang dinilai wajib punya **penanda versi**, dan setiap vonis wajib mengutipnya.
- 2026-08-10 — Desain lolos lewat lintasan **5 vonis** (2 GAGAL sah, 1 tak sah, 2 bersyarat-lunas). Gerbang yang berputar adalah fitur: keamanan dibeli dengan perbaikan dokumen, bukan dengan insiden produksi.

## 6. Hasil kalibrasi

(belum ada — menunggu data dry run pertama; target angka ada di Apendiks A konstitusi)
