# CADENCE & METRIK — ritme kerja dan cara mengukur kesehatan sistem

**Versi:** 0.1 | **Tanggal:** 2026-08-10 | **Status:** DIAJUKAN — menunggu ratifikasi HOTL
*(Nomor 05 dicadangkan untuk rencana tes QA PRD-001.)*

> Prinsip: manusia bekerja dengan **kalender**, agen bekerja dengan **kejadian**.
> HOTL punya ritme; spesialis punya pemicu.

---

## A. Ritme HOTL (kalender — total ± 2 jam/minggu)

| Ritme | Seberapa sering | Isinya | Batas waktu |
|---|---|---|---|
| **Kosongkan antrean** | Harian | Buka bagian 2 `STATUS.md`; putuskan yang menunggumu (GO/NO-GO/PERBAIKI); cek notifikasi PR | 10 menit |
| **Tinjau kesehatan** | Mingguan | Lihat 4 angka metrik (Bagian C) + retro mini: tahap mana yang paling sering macet | 30 menit |
| **Kalibrasi** | Bulanan | Tinjau angka `[KALIBRASI]` vs data nyata; ratifikasi perubahan bar (lewat PR) | 60 menit |
| **Darurat** | Kapan pun sistem "berbunyi" | Stop-loss aktif / SLA putusan 24 jam lewat / insiden berat | segera |

> SLA putusan HOTL: **24 jam** [KALIBRASI]. Lewat itu sistem wajib menagih.

## B. Ritme spesialis (kejadian — tanpa rapat)

Tidak ada standup, tidak ada rapat review. Yang ada adalah rantai pemicu:

```
artefak hulu masuk → baca kartu peranmu → godok dengan seluruh ilmumu
→ serahkan artefak hilir + jejak pakar + tanda tangan → gerbang menilai
→ HOTL memutuskan → artefak jadi bahan mentah stasiun berikutnya
```

Aturan sinkronisasi satu-satunya: **sebelum mulai dan setelah selesai, baca & perbarui `STATUS.md`** (Protokol Bangun & Tutup Sesi). Dua spesialis tidak boleh mengubah artefak yang sama bersamaan; yang memegang tertulis di tabel pelacakan.

## C. Metrik kesehatan (cara mengukur sistemnya, bukan orangnya)

**4 angka dasar (DORA-lite):**

| Metrik | Cara mencatat (sederhana) | Ambang awal [KALIBRASI] |
|---|---|---|
| Waktu ide → rilis | tanggal PRD → tanggal rilis, di STATUS.md | tren turun; lonjakan 2× = bahas |
| Bug lolos ke produksi | temuan setelah G3 | > 1/bulan → stop-loss |
| Jumlah rollback | kejadian rollback | > 1/bulan → retro wajib |
| Frekuensi rilis | jumlah rilis/bulan | dipakai untuk tangga kepercayaan |

**2 metrik khas sistem ini:**

| Metrik | Sumber | Tanda bahaya |
|---|---|---|
| Rasio canary tertangkap | laporan auditor (berkas rekam jejak, folder `spesialis/`) | < 100% → investigasi lapisan yang loloskan |
| Skor jejak pakar tiap spesialis | verifikasi reviewer di berkas rekam jejak (folder `spesialis/`) | jejak berpola topeng (halaman penuh, proses kosong) → rumuskan ulang kartu |

Pencatatan: hasil tiap rilis ditambahkan ke bagian 6 `STATUS.md` ("Hasil kalibrasi") oleh agen yang bertugas menutup rilis.

## D. Lampu kesehatan (kapan sistem dinyatakan "sakit")

- **HIJAU:** antrean < SLA, 4 angka dalam ambang, canary 100%.
- **KUNING:** satu ambang dilanggar → bahas di tinjauan mingguan.
- **MERAH:** stop-loss (checklist di `01-Checklist-Gerbang.md`) → pipeline membekukan diri, HOTL dipanggil.

> Catatan jujur: angka baru mulai terisi setelah rilis dry run pertama. Sampai saat itu, ambang adalah asumsi konservatif — itulah gunanya tanda `[KALIBRASI]` dan ritme bulanan.
