# SURAT TUGAS — BUILDER (hermes) · PRD-001 Website LAZISNU

**Tanggal:** 2026-08-10 | **Versi:** **v1.0** (terbit pertama) | **Penanda kesegaran:** baris Versi ini + daftar aturan keras A–F
**Pemberi tugas:** HOTL (via sistem SDLC-HOTL) | **Pelaksana:** **hermes agent**
**Acuan wajib (baca dulu, urut):** `AGENTS.md` → `spesialis/builder.md` (kartu = kontrak kerjamu) → `03-PRD-001-Website-LAZISNU.md` (niat) → `04-G1-Desain-Website-LAZISNU.md` (rancangan v1.3 final) → `05-Rencana-Tes-PRD-001.md` (ujianmu)

---

## 1. Misi

Bangun website Inkremen 1 sesuai tugas **T1–T12** (dokumen 04, Bagian C) hingga **seluruh tes QA (berkas 05) hijau** — dengan perubahan paling kecil yang jujur (kartu builder). Hasil akhir dinilai reviewer independen di G2, bukan olehmu.

## 2. Aturan keras (pelanggaran = GAGAL otomatis + laporan 5 kalimat)

- **A.** DILARANG mengubah berkas tes / spesifikasi tes mana pun (`05` dan kode tes di repo website). Tes yang tak kamu sukai = tes yang wajib kamu hijaukan.
- **B.** Repo website `website-lazisnu` (publik) = **kode murni**. Data lembaga (rekening, kontak, profil, legalitas) **TIDAK BOLEH masuk commit** — semuanya hidup di database, dimasukkan lewat form admin (B6).
- **C.** `service_role key` Supabase **dilarang dipakai sama sekali**. Hanya anon key + Supabase Auth untuk 2 admin. Skema & RLS persis kontrak `04` (Bagian B9/F.2 + Skema data).
- **D.** **Merah dulu:** sebelum menulis implementasi sebuah fitur, jalankan tesnya, catat MERAH awalnya (tanggal+waktu+output), baru membuatnya hijau. Merah-awal adalah bukti wajib di jejak pakarmu.
- **E.** Setiap AC yang kamu klaim selesai wajib punya **bukti tontonan** (video/tangkapan layar/langkah ulang) yang bisa dinilai HOTL tanpa membaca kode.
- **F.** Ragu = berhenti, tanyakan HOTL (fail-closed). Menebak niat = pelanggaran.

## 3. Urutan kerja (sesuai dependensi rancangan)

**Fase B0 — fondasi (mulai di sini):**
1. Buat folder kerja `D:\website-lazisnu` + repo publik `website-lazisnu` (gh CLI tersedia; pemilik repo sama dengan repo tata kelola).
2. Kerangka 5 halaman statis (HTML+CSS+JS kecil) + CI repo website yang menjalankan: tes dari QA + pemindai rahasia (SEC-02) + build.
3. Struktur CI: **tes hijau = syarat merge**; pemindai rahasia = syarat mutlak.

**Fase HANTAR-KE-QA:** setelah B0 jalan (repo + CI dasar hidup), berhenti dan laporkan ke HOTL — QA-agent akan memasang kode tes pertama (failing-first) sebelum kamu lanjut membangun fitur.

**Fase B1..B5 — hijaukan bertahap:** T2 (layout+night mode) → T6 (skema+RLS) → T3/T4/T5 (halaman) → T7/T8/T9 (data+admin) → T10 (domain+https) → T12 (konten+latih admin).

## 4. Jejak pakar wajib (dari kartu builder)

Per tahap, kumpulkan: tautan komit + output tes (merah-awal & hijau-akhir) + bukti demo per AC terkait + daftar keputusan mikro + rantai niat. Tutup fase dengan blok:

```
TANDA TANGAN BUILDER — ini versi paling kecil yang jujur; saya berani mengajak HOTL menonton tiap AC.
Rantai niat: PRD-001 (G0) · Desain v1.3 (G1) · Tes v1.1 (ratifikasi) | Self-audit kartu: ✓ | Keberatan terbuka: [tidak ada / ...]
```

## 5. Larangan wilayah (dari kartu + konstitusi)

Dilarang menambah fitur di luar AC (fitur hantu) · dilarang menilai/meloloskan karya sendiri · dilarang menyentuh repo tata kelola (`sdlc-hotl`) selain membaca · dilarang mengubah skema/RLS tanpa amendemen desain (PR + ratifikasi).

**Bila tes hijau semua + bukti per AC terkumpul → berhenti, laporkan ke HOTL dengan format vonis 4 baris untuk penilaian di gerbang G2.**
