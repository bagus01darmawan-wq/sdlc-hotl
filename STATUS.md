# STATUS SISTEM — ingatan SDLC-HOTL

**Terakhir diperbarui:** 2026-08-10 (wajib diperbarui di akhir setiap sesi — lihat Protokol Tutup Sesi di `AGENTS.md`)

> **Ringkas untuk agen yang baru bangun:** Konstitusi v0.1 sudah diratifikasi. Kita sedang menyiapkan dry run pertama: Website LAZISNU (PRD-001), status draf, menunggu ratifikasi G0 oleh HOTL. Trust level 0 = semua langkah menunggu putusan HOTL.

---

## 1. Di mana kita sekarang

- **Fase:** **F1 (dry run) sedang berjalan** — PRD-001 lolos P0 ✅ (G0 diratifikasi 2026-08-10), kini di P1 (desain, menuju G1).
- **Trust level:** 0 (Magang / HITL penuh)
- **Proyek dry run:** Website Identitas LAZISNU — lihat `03-PRD-001-Website-LAZISNU.md`
- **Alat tersedia:** opencode, Trae IDE, Antigravity IDE, hermes agent
- **Infra tata kelola:** repo git + CI khusus hidup di https://github.com/bagus01darmawan-wq/sdlc-hotl — kini **PUBLIK + branch protection**: `main` hanya berubah lewat PR dengan CI hijau (admin pun tunduk). Data sensitif lembaga ditampung `PRIBADI-JANGAN-DIUNGGAH.md` (lokal, gitignored). Repo proyek website LAZISNU menyusul saat tahap P2.
- **Pemetaan peran awal:** builder = opencode; reviewer = Antigravity/Trae (beda sesi+model); auditor = hermes agent (diputuskan final saat G1)

## 2. Yang menunggu putusan HOTL

| # | Hal | Sejak | Tergantung jawaban HOTL tentang |
|---|---|---|---|
| 1 | Ratifikasi **G1** (desain + pecahan tugas PRD-001), setelah paket G1 diajukan architect dan divonis reviewer independen | 2026-08-10 | — |

## 3. Pekerjaan aktif (cermin tabel pelacakan)

| ID | Pekerjaan | Tahap | Pemegang saat ini | Menunggu HOTL sejak | Status |
|---|---|---|---|---|---|
| PRD-001 | Website Identitas LAZISNU | P1 (menuju G1) | Architect | — | **G0 DIRATIFIKASI** 2026-08-10 |

## 4. Langkah berikutnya (siapa melakukan apa)

1. **Architect (sesi ini):** susun paket G1 (dokumen desain baru): ringkasan awam 1 halaman + desain + task breakdown + jawaban Pertanyaan Uji Standar + rencana tes QA.
2. **HOTL:** jalankan prompt reviewer (tersedia di bawah) di Antigravity/Trae — model berbeda — untuk vonis independen G1.
3. **HOTL:** ratifikasi G1 (GO/NO-GO) dengan bukti vonis reviewer.
4. **QA-agent:** setelah G1 GO — tulis tes eksekutor dari AC-01 s.d. AC-10 **sebelum** builder mulai (P2).

## 5. Pelajaran tercatat

- 2026-08-10 — Sistem harus hidup di **berkas, bukan sesi**. Maka lahir `AGENTS.md` + `STATUS.md` + tiga protokol (Bangun, Tutup Sesi, Tumbuh).
- 2026-08-10 — Konstitusi kini **ditegakkan mesin**: CI `gerbang-tata-kelola` memeriksa setiap perubahan (fail-closed). Janji jadi bukti.
- 2026-08-10 — Proteksi diuji dengan memakainya: pencatatan proteksi dilakukan lewat **PR pertama** yang dijaga CI (self-test).

## 6. Hasil kalibrasi

(belum ada — menunggu data dry run pertama; target angka ada di Apendiks A konstitusi)
