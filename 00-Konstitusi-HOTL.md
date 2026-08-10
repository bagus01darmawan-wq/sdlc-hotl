# KONSTITUSI SDLC-HOTL

**Versi:** 0.1 — status: **DIRATIFIKASI HOTL** pada 2026-08-10
**Tanggal:** 2026-08-10

> **Kalimat emas:** HOTL memegang "apa" dan "mengapa"; sistem memegang "bagaimana" dan "bukti".
>
> **Tujuan desain:** sistem di mana tidak ada klaim yang bisa hidup tanpa bukti — kebohongan mahal, kejujuran murah.

---

## Pasal 1 — Kedudukan HOTL

1. HOTL memegang veto mutlak atas setiap rilis dan setiap perubahan konstitusi ini.
2. Veto tanpa alasan teknis tetap sah. Kewajiban merumuskan definisi "layak" ada pada **sistem**, bukan pada HOTL.
3. Ketiadaan putusan = **TIDAK LOLOS**. Tidak ada mekanisme "dianggap setuju jika diam".
4. HOTL tidak pernah diwajibkan menilai kode. HOTL menilai kesesuaian antara *yang diminta* dan *yang terbukti*.
5. Keabsahan HOTL terkonsentrasi di G0 (niat) dan G4 (hasil nyata); di G1–G3 HOTL meratifikasi berdasarkan bukti dan vonis pemeriksa independen.

## Pasal 2 — Pemisahan Empat Kuasa

| Kuasa | Isi | Pemilik |
|---|---|---|
| **Kehendak** | Apa & mengapa | HOTL |
| **Rancangan** | Bagaimana mewujudkan | Agen perancang |
| **Bukti** | Terbukti atau belum | Pemeriksa independen + mesin (tes/CI) |
| **Putusan** | Go / No-Go | HOTL, menerapkan bar yang sudah diratifikasi |

**Larangan tetap:** perancang dilarang meratifikasi rancangannya sendiri; pembangun dilarang membuktikan karyanya sendiri.

## Pasal 3 — Pipeline & Gerbang

```
P0 PRD → [G0] → P1 Desain+Breakdown → [G1] → P2 Pembangunan oleh agen → [G2]
       → P3 Rilis bertahap → [G3] → P4 Pemantauan → [G4] → iterasi
```

- **G0 Niat** — kompetensi penuh HOTL
- **G1 Rancangan** — vonis teknis oleh reviewer independen, ratifikasi HOTL
- **G2 Hasil bangunan** — vonis oleh reviewer + pemeriksaan otomatis, ratifikasi HOTL
- **G3 Rilis** — syarat otomatis + audit, ratifikasi HOTL
- **G4 Hasil nyata** — kompetensi penuh HOTL

Detail bar, bukti wajib, dan formulir tiap gerbang: **`01-Checklist-Gerbang.md`**.

**Batas skala:** sistem ini valid untuk 1–3 pipeline aktif. Melampaui itu, butuh amandemen lapisan delegasi.

## Pasal 4 — Keberaksaraan

Setiap keputusan yang diajukan ke HOTL **wajib** disajikan dalam format vonis 4 baris:

```
1. BAR    : (satu kalimat bahasa awam)
2. BUKTI  : (lampiran + tanggal; kedaluwarsa: 7 hari atau setelah ada perubahan kode [KALIBRASI])
3. VONIS  : LULUS / GAGAL + alasan satu kalimat, dari pemeriksa independen
4. PILIHAN: [GO] [NO-GO] [KEMBALIKAN UNTUK DIPERBAIKI]
```

Tahap yang tidak bisa disajikan dalam format ini dinyatakan **belum layak masuk pipeline** — bukan HOTL yang diwajibkan naik kelas.

## Pasal 5 — Aturan Keselamatan (non-negotiable)

1. **Fail-closed:** ragu atau ambigu = tidak lolos. Tidak ada "jalan dulu sambil diperbaiki".
2. **Segregasi tugas:** pembangun ≠ penguji ≠ perilis; beda sesi, idealnya beda model.
3. **Bukti atau tidak terjadi:** klaim tanpa artefak dianggap tidak sah.
4. **Stop-loss otomatis:** pipeline **membekukan dirinya sendiri** dan memanggil HOTL bila:
   - 2 rilis gagal beruntun, atau
   - 1 insiden berat di produksi, atau
   - metrik kesehatan di bawah ambang [KALIBRASI].
5. **Laporan 5 kalimat:** setiap kegagalan rilis wajib dijelaskan dalam bahasa awam — apa yang rusak, siapa terdampak, kenapa bisa lolos, apa yang berubah agar tidak berulang.
6. Beku berarti beku: tidak ada pekerjaan baru masuk pipeline sampai HOTL membuka kembali secara eksplisit.

## Pasal 6 — Definisi Insiden Berat (awal, [KALIBRASI])

Salah satu dari:
- (a) data hilang atau rusak;
- (b) layanan tidak bisa dipakai pengguna lebih dari 30 menit;
- (c) aksi yang tidak bisa dibatalkan terjadi secara keliru;
- (d) informasi privat bocor.

## Pasal 7 — Tangga Kepercayaan (HITL → HOTL)

| Level | Nama | Aturan main | Syarat naik | Syarat turun |
|---|---|---|---|---|
| 0 | Magang (HITL) | Setiap langkah menunggu putusan HOTL | 3 rilis bermakna bersih | — |
| 1 | Gerbang saja | Putusan hanya di G0–G4 | 10 rilis bermakna bersih, 0 insiden berat | — |
| 2 | By-exception | G1–G2 auto-lolos bila hijau tanpa bendera; HOTL pegang G0, G3, G4 | 1 kuartal bersih | 1 insiden berat → Level 1 |
| 3 | HOTL penuh | Semua otomatis; HOTL memantau dashboard, pegang tombol merah | — | 1 insiden berat → Level 1 |

- Minimal **4 minggu per level** — tidak bisa di-speedrun. [KALIBRASI]
- "Rilis bermakna" = rilis yang lolos G4 (dinilai HOTL), bukan sekadar rilis yang hijau secara teknis.

## Pasal 8 — Uji Detektor & Anti-Manipulasi

1. **Canary defect:** berkala, sistem menyisipkan kesalahan kecil yang sudah diketahui ke dalam pekerjaan. Jika lapisan review gagal menangkapnya → trust level turun otomatis + investigasi lapisan review.
2. **Anti-Goodhart:** promosi level hanya menghitung rilis bermakna (lolos G4), bukan jumlah lampu hijau.
3. **Audit acak:** agen-auditor (sesi/model berbeda dari builder & reviewer) memeriksa sampel acak artefak, termasuk memeriksa kelonggaran bar itu sendiri.
4. **Anti-stempel-karet:** bukti yang basi (kedaluwarsa) membuat vonis otomatis tidak sah.

## Pasal 9 — Amendemen

1. Konstitusi ini **beku**: hanya bisa diubah dengan ratifikasi eksplisit HOTL, satu perubahan per keputusan.
2. Agen yang mengusulkan perubahan wajib menyertakan: alasan, analisis risiko, dan jawaban atas pertanyaan *"siapa diuntungkan atau dicelakakan oleh perubahan ini?"*
3. Setiap perubahan dicatat di decision log (apendiks B).

---

## Apendiks A — Tabel Angka [KALIBRASI]

| Parameter | Nilai awal | Dikalibrasi setelah |
|---|---|---|
| SLA putusan HOTL | 24 jam | dry run pertama |
| Kedaluwarsa bukti | 7 hari / perubahan kode | dry run pertama |
| Ambang stop-loss (metrik) | bug lolos produksi > 1/bulan | data 1 kuartal |
| Minimal waktu per level | 4 minggu | data 1 kuartal |
| Definisi insiden berat (b) | 30 menit | sesuai konteks produk |

## Apendiks B — Decision Log

| Tanggal | Keputusan | Dasar / bar | Status | Tautan bukti |
|---|---|---|---|---|
| 2026-08-10 | Konstitusi v0.1 disusun | — | Selesai | dokumen ini |
| 2026-08-10 | Ratifikasi Konstitusi v0.1 — **GO tanpa ganjalan** | Pasal 1 ayat 1 | **Diratifikasi** | konfirmasi lisan HOTL, sesi ini |
| 2026-08-10 | Pemilihan proyek dry run: Website LAZISNU | G0 (niat HOTL) | Sah sebagai kandidat PRD-001 | `03-PRD-001-Website-LAZISNU.md` |
| 2026-08-10 | Sistem diberi organ keabadian: `AGENTS.md` (protokol Bangun/Tutup/Tumbuh) + `STATUS.md` (ingatan) — atas permintaan HOTL agar sistem hidup di sesi mana pun | Kebutuhan portabilitas | Berlaku | `AGENTS.md`, `STATUS.md` |
| 2026-08-10 | Repo git + CI khusus dibangun atas permintaan HOTL: github.com/bagus01darmawan-wq/sdlc-hotl (private); CI `gerbang-tata-kelola` hijau (run 31347985091) | Pasal 5 (bukti atau tidak terjadi) | Berlaku | hasil run CI |
