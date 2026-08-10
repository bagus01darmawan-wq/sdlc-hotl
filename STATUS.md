# STATUS SISTEM — ingatan SDLC-HOTL

**Terakhir diperbarui:** 2026-08-10 (wajib diperbarui di akhir setiap sesi — lihat Protokol Tutup Sesi di `AGENTS.md`)

> **Ringkas untuk agen yang baru bangun:** Konstitusi v0.1 sudah diratifikasi. Kita sedang menyiapkan dry run pertama: Website LAZISNU (PRD-001), status draf, menunggu ratifikasi G0 oleh HOTL. Trust level 0 = semua langkah menunggu putusan HOTL.

---

## 1. Di mana kita sekarang

- **Fase:** F0 (konstitusi) — SELESAI. Menuju **F1 (dry run end-to-end)**.
- **Trust level:** 0 (Magang / HITL penuh)
- **Proyek dry run:** Website Identitas LAZISNU — lihat `03-PRD-001-Website-LAZISNU.md`
- **Alat tersedia:** opencode, Trae IDE, Antigravity IDE, hermes agent
- **Infra tata kelola:** repo git + CI khusus hidup di https://github.com/bagus01darmawan-wq/sdlc-hotl (private); CI `gerbang-tata-kelola` HIJAU (run pertama: 31347985091). Repo proyek website LAZISNU menyusul saat tahap P2.
- **Pemetaan peran awal:** builder = opencode; reviewer = Antigravity/Trae (beda sesi+model); auditor = hermes agent (diputuskan final saat G1)

## 2. Yang menunggu putusan HOTL

| # | Hal | Sejak | Tergantung jawaban HOTL tentang |
|---|---|---|---|
| 1 | Ratifikasi PRD-001 (G0): koreksi + isi semua [ISI:] | 2026-08-10 | — |
| 2 | Pertanyaan kunci PRD: angka dana tercatat di mana hari ini? (menentukan desain AC-06) | 2026-08-10 | sumber pencatatan dana |
| 3 | Unit LAZISNU yang mana (PBNU/PWNU/PCNU) + domain situs | 2026-08-10 | identitas lembaga |

## 3. Pekerjaan aktif (cermin tabel pelacakan)

| ID | Pekerjaan | Tahap | Pemegang saat ini | Menunggu HOTL sejak | Status |
|---|---|---|---|---|---|
| PRD-001 | Website Identitas LAZISNU | G0 | HOTL | 2026-08-10 | Menunggu ratifikasi |

## 4. Langkah berikutnya (siapa melakukan apa)

1. **HOTL:** baca & koreksi PRD-001, isi [ISI:], putuskan GO/NO-GO di G0.
2. **PM-agent (sesi berikutnya):** revisi draf sesuai koreksi HOTL.
3. **Architect:** setelah G0 GO — susun ringkasan desain 1 halaman bahasa awam + task breakdown + jawaban Pertanyaan Uji Standar.
4. **QA-agent:** setelah G1 — tulis tes dari AC-01 s.d. AC-10 **sebelum** pembangunan dimulai.

## 5. Pelajaran tercatat

- 2026-08-10 — Sistem harus hidup di **berkas, bukan sesi**. Maka lahir `AGENTS.md` + `STATUS.md` + tiga protokol (Bangun, Tutup Sesi, Tumbuh).
- 2026-08-10 — Konstitusi kini **ditegakkan mesin**: CI `gerbang-tata-kelola` memeriksa setiap perubahan (fail-closed). Janji jadi bukti.

## 6. Hasil kalibrasi

(belum ada — menunggu data dry run pertama; target angka ada di Apendiks A konstitusi)
