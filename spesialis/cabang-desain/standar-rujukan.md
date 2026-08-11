# Standar Rujukan — Lampiran Wajib Ruangan Desain

> Dokumen ini **bukan kartu peran baru**. Ini rujukan bersama yang dilampirkan ke ketiga
> kartu spesialis (`ux-designer.md`, `ui-designer.md`, `web-designer.md`) supaya kepatuhan
> standar tidak diasumsikan ulang oleh tiap agen, dan HOTL yang awam bisa memverifikasi
> klaim "sudah sesuai standar" terhadap sumber yang konkret — bukan insting pakar semata.

## Cara pakai

- Tiap kartu mencantumkan baris rujukan di bagian **bar kualitas output** (§4), menunjuk
  bagian dokumen ini yang relevan dengan domainnya.
- Klaim kepatuhan di deliverable harus menyebut **kriteria spesifik** (nomor/nama kriteria),
  bukan pernyataan umum seperti "sudah aksesibel" tanpa rujukan.
- Kalau agen tidak bisa benar-benar menguji kepatuhan (mis. tidak punya alat uji kontras
  sungguhan atau tidak bisa menjalankan pengukuran performa nyata), itu wajib ditulis
  sebagai **keberatan terbuka** — bukan diklaim lolos.

---

## A. Standar lintas-domain (mengikat ketiganya)

### A1. WCAG 2.2 Level AA — *Web Content Accessibility Guidelines*
Empat prinsip: **Perceivable, Operable, Understandable, Robust** (POUR). Level target: **AA**
— minimum yang layak untuk layanan publik.

Kriteria yang paling sering relevan untuk proyek ini:
- **1.1.1** Teks alternatif untuk semua gambar bermakna
- **1.4.3** Kontras minimum (teks normal 4.5:1, teks besar 3:1)
- **2.4.6** Judul & label yang deskriptif
- **3.3.1 / 3.3.3** Identifikasi galat & saran perbaikan pada form

---

## B. Standar per domain

### B1. UX Designer
- **ISO 9241-210** — proses desain berpusat-pengguna (riset, iterasi, evaluasi dengan
  pengguna nyata). Tiap siklus wajib menyebut klausa yang ditempuh (mis. "Klausa 6.2 —
  Memahami dan menentukan konteks penggunaan").
- **WCAG 2.2 AA**, prinsip *Operable* & *Understandable* — untuk arsitektur informasi,
  alur, dan navigasi
- **10 Heuristik Usability Nielsen** — kerangka evaluasi alur; bukan standar wajib, tapi
  rujukan penilaian yang diakui luas
- **Pedoman bahasa awam (plain language)** — berlaku untuk semua teks yang terlihat pengguna
  (label form, pesan galat, instruksi, judul halaman). Kriteria terukur:
  - Kalimat ≤20 kata per instruksi
  - Satu instruksi per kalimat (tidak menggabungkan dua perintah)
  - Tidak ada istilah teknis tanpa penjelasan (mis. "Submit" harus jadi "Simpan" atau "Kirim")
  - Pesan galat menyebut **apa yang salah** dan **cara memperbaikinya** — bukan kode error
  - Diuji: minimal satu pengguna awam dapat membaca dan menjalankan instruksi tanpa bertanya

### B2. UI Designer
- **WCAG 2.2 AA — 2.5.8 Target Size**: target sentuh minimum 24×24 px CSS
- **WCAG 2.2 AA — 2.4.11 Focus Not Obscured**: indikator fokus keyboard harus terlihat jelas
- **WAI-ARIA Authoring Practices Guide (APG)** — pola komponen (form, dialog, pesan galat)
  yang bisa diakses pembaca layar. Tiap komponen interaktif wajib menyebut pola APG yang
  dipakai (mis. "Tombol kirim — APG Pattern: Button (role=button)").

### B3. Web Designer
- **WCAG 2.2 AA** — kontras (1.4.3), teks alternatif gambar (1.1.1), struktur heading (1.3.1)
- **Core Web Vitals** (Google) sebagai standar performa terukur:
  - LCP (*Largest Contentful Paint*) < 2.5 detik
  - CLS (*Cumulative Layout Shift*) < 0.1
  - INP (*Interaction to Next Paint*) < 200 ms
- **HTML5 semantik** — elemen struktural sesuai makna (`nav`, `main`, `header`, `footer`, dst.)

---

## C. Batas kejujuran klaim

- Standar di atas berubah dari waktu ke waktu (WCAG punya versi lebih baru, ambang Core
  Web Vitals bisa direvisi). Agen wajib menyebut versi yang dirujuk; HOTL disarankan
  memverifikasi versi terbaru secara berkala.
- Klaim "sudah sesuai WCAG AA" **tanpa uji nyata** (alat pemeriksa kontras, pemeriksa
  aksesibilitas otomatis, pengukuran performa) harus ditandai sebagai **estimasi**, bukan
  kepatuhan terverifikasi.

---

## D. Aturan propagasi revisi mundur (iterasi antar domain)

Alur kerja tim adalah UX → UI → Web. Ketika domain hulu merevisi keputusannya **setelah**
domain hilir sudah membangun di atasnya, berlaku aturan berikut:

1. **Yang merevisi wajib memberi tahu** — domain yang merevisi (mis. UX mengubah alur)
   menulis **keberatan terbuka** di deliverablenya yang menjelaskan: apa yang berubah,
   mengapa, dan domain mana yang terdampak.
2. **Domain hilir yang terdampak menilai dampak** — domain yang sudah membangun (UI/Web)
   menulis estimasi dampaknya (mis. "3 komponen perlu didesain ulang") sebagai keberatan
   terbuka di iterasi berikutnya.
3. **HOTL memutuskan:** lanjut revisi, atau pertahankan desain lama dengan catatan. Dilarang
   ada pihak yang diam-diam "menambal" domain lain tanpa serah-terima tercatat.
4. **Serah-terima ulang wajib:** setiap putaran revisi harus ditutup dengan blok tanda
   tangan penerima (self-audit kartu ✓) seperti serah-terima awal.

*Tujuan:* mencegah situasi "UX merevisi tapi UI/Web tidak tahu" — yang membuat desain
terpecah antara dokumen dan implementasi tanpa jejak.*

---

## E. Batas domain — keamanan & privasi data

Ruangan desain **tidak** berwenang memutuskan kebijakan keamanan atau privasi data. Namun
desain form dan alur (domain UX/UI) bersinggungan langsung dengan data sensitif pengguna.
Aturan batas:

- Bila desain form atau alur menyimpan, menampilkan, atau mentransmisikan data pribadi
  pengurus atau lembaga (nama, rekening, kontak, identitas), **wajib tulis keberatan
  terbuka** yang menyebutkan data apa yang terlibat — agar domain tata kelola (HOTL/agen
  lain) bisa memutuskan perlakuannya.
- Ruangan desain **tidak boleh** mendesain form dengan kolom data sensitif tanpa catatan
  eksplisit bahwa penyimpanan/transmisi data tersebut sudah diputuskan di luar domain ini.
- Ini bukan tanggung jawab desainer untuk menyelesaikan masalah privasi — hanya untuk
  **menandai dan melaporkannya** agar tidak lolos tanpa keputusan.

