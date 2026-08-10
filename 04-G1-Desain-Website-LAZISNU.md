# PAKET G1 — Desain Website LAZISNU MWC NU Kecamatan Paninggaran (PRD-001)

**Tanggal:** 2026-08-10 | **Status:** DIAJUKAN — menunggu vonis reviewer independen + ratifikasi HOTL
**Penyusun:** Architect-agent | **Acuan:** `03-PRD-001-Website-LAZISNU.md` (v0.2, DIRATIFIKASI G0)

---

## BAGIAN A — Ringkasan 1 Halaman (bahasa awam, wajib dibaca HOTL)

**Apa yang akan dibangun?** Satu website statis sederhana (5 halaman: Beranda, Penyaluran, Donasi, Tentang, dan halaman khusus admin) yang tampil rapi di HP & komputer, punya tombol mode malam, dan alamat resmi **png.lazisnu.site** ber-gembok (https).

**Dari mana angka dananya berasal?** Dari database yang sudah lembaga miliki. Website membaca langsung dari sana, jadi begitu admin mengubah angka (atau menambah kabar penyaluran), **website ikut berubah hampir seketika — tanpa menyentuh kode** (ini memenuhi janji AC-06 versi kuat).

**Bagaimana admin (orang awam) memperbarui isi?** Satu halaman khusus terkunci password: buka → masuk → isi kolom angka ATAU tulis kabar → simpan. Target kami: **maksimal 5 langkah**, bisa diajarkan dalam 30 menit.

**Halaman donasi** menampilkan kanal resmi **dengan label jujur** sesuai keputusanmu: rekening sementara atas nama pengurus, rekening lembaga sedang diurus. **Halaman Tentang** menampilkan profil, pengurus, kontak, dan status legalitas apa adanya.

**Apa risiko terburuknya?** (1) Salah ketik angka dana → diredam: setiap perubahan terekam jejaknya (kapan & nilai lama), jadi bisa diperbaiki dan diaudit. (2) Website diserang/dirusak → diredam: seluruh isi situs adalah salinan dari repo; memulihkan = memasang ulang, ±15 menit. (3) Server mati → situs ini "bodoh" & ringan, bisa dipindah ke hosting lain dalam 1 hari kerja.

**Bagaimana membatalkannya?** Matikan alamat png.lazisnu.site — selesai. Situs belum dikenal publik, tidak ada yang rusak. Semua pekerjaan tersimpan rapi di repo untuk dilanjutkan kapan pun.

**Apa yang TIDAK dikerjakan?** Sesuai PRD: tidak ada pembayaran di dalam situs, tidak ada login pengunjung, tidak ada aplikasi mobile, tidak ada integrasi ke pembukuan inti.

---

## BAGIAN B — Keputusan Desain (teknis, tidak wajib dibaca HOTL)

| # | Keputusan | Alasan satu kalimat |
|---|---|---|
| B1 | **Situs statis murni** (HTML+CSS+JS kecil, tanpa framework berat) | Paling cepat, paling aman, paling murah, paling mudah dipindah-pindah — risiko terkecil untuk dry run |
| B2 | **Hosting di VM yang sudah ada + Caddy** (server kecil, https otomatis) | Memakai yang sudah dibayar; gembok https (AC-08) terpasang otomatis |
| B3 | **Baca data langsung dari Supabase** (akses baca-saja, tabel publik terbatas) | Angka di situs berubah hampir seketika begitu admin menyimpan (AC-06 versi kuat) |
| B4 | **Form admin mini 1 halaman** (login → isi → simpan) dengan Supabase Auth | Satu-satunya cara memenuhi syarat "admin awam ≤ 5 langkah" dengan inframu |
| B5 | **Jejak perubahan angka** (tabel riwayat: nilai lama→baru, kapan) | Peredam salah ketik + bukti audit (lihat jawaban Pertanyaan Uji) |
| B6 | **Konten donasi & kontak** dimasukkan dari file pribadi saat pembangunan | Memang akan tampil publik di situs (keputusanmu), tapi tidak bocor lewat draf |
| B7 | **Repo website terpisah** (`website-lazisnu`, publik) dengan CI sendiri | Tata kelola dan produk tidak dicampur; CI memeriksa tes sebelum boleh rilis |
| B8 | **Night mode sederhana** (tombol, pilihan tersimpan di perangkat) | Permintaan HOTL di AC-07; tidak perlu kompleksitas tambahan |

### Peta situs (5 halaman)
Beranda (identitas + angka dana + tombol donasi) · Penyaluran (daftar kabar dari database) · Donasi (kanal + label transparan) · Tentang (profil + legalitas + pengurus + kontak) · Admin (terkunci; form angka + form kabar)

### Alur data, dua jalur
- **Pembaca (publik):** browser → Supabase (baca-saja, baris berstatus "terbit") → tampil.
- **Penulis (2 admin):** halaman admin → login → simpan → database → situs ikut berubah. Pengunjung tidak bisa menulis apa pun (dikunci di tingkat database).

---

## BAGIAN C — Pecahan Tugas (untuk builder di tahap P2)

Urutan mengerjakan = urutan tabel. Setiap tugas selesai hanya jika AC terkaitnya bisa ditunjukkan.

| # | Tugas | Melayani AC | Hasil yang terlihat |
|---|---|---|---|
| T1 | Buat repo `website-lazisnu` + kerangka 5 halaman + CI dasar | AC-10 | Situs kosong bisa dibuka; CI jalan |
| T2 | Tata letak, warna, header/footer seragam + **night mode** | AC-07 | Tombol gelap/terang bekerja di HP & komputer |
| T3 | Beranda: identitas lembaga + panel angka + tombol ke donasi | AC-01, AC-02, AC-05 | Tes "5 detik paham" bisa dilakukan |
| T4 | Halaman Donasi dari file pribadi + label transparan | AC-04 | Kanal + keterangan terbaca jelas |
| T5 | Halaman Tentang (profil, legalitas apa adanya, pengurus, kontak) | AC-09 | Semua elemen terbaca |
| T6 | Skema Supabase: 2 tabel + kunci baca publik + 2 akun admin | fondasi AC-03/05/06 | Database siap & terkunci tulis bagi publik |
| T7 | Halaman Penyaluran: daftar kabar dari database | AC-03 | Kabar tampil otomatis |
| T8 | Form admin mini: login, form angka (+riwayat), form kabar | AC-03, AC-06 | Admin awam bisa update ≤5 langkah |
| T9 | Panel angka beranda membaca langsung database | AC-05, AC-06 | Ubah angka → situs berubah seketika |
| T10 | Domain png.lazisnu.site + https + pipeline deploy & rollback | AC-08 | Alamat resmi hidup ber-gembok |
| T11 | Tes ujung-ke-ujung dari AC-01..AC-10 (ditulis **sebelum T3–T9 selesai**) | semua | Tes merah → hijau seiring pembangunan |
| T12 | Isi konten nyata + latih 2 admin (≤30 menit/orang) | AC-01..AC-10 | Admin menambah kabar/angka sendiri |

---

## BAGIAN D — Rencana Tes QA (ditulis dari AC, sebelum pembangunan)

Metode: **E2E** = tes otomatis oleh mesin di CI; **MANUAL** = diuji mata/tangan HOTL/orang.

| AC | Metode | Inti uji |
|---|---|---|
| AC-01 | MANUAL | Tunjukkan ke 2–3 orang; mereka bisa menyebut situs apa & milik siapa |
| AC-02 | E2E | Dari beranda, halaman donasi tercapai ≤ 2 klik |
| AC-03 | E2E + MANUAL | Kabar contoh tampil; admin menambah kabar disaksikan HOTL |
| AC-04 | E2E + MANUAL | Label transparan ada & terbaca; nomor/QRIS dibandingkan dokumen resmi oleh HOTL |
| AC-05 | E2E | Elemen angka terkumpul & tersalurkan ada di beranda |
| AC-06 | E2E + MANUAL | Ubah angka di database → situs berubah tanpa ubah kode; jerapah waktu |
| AC-07 | E2E + MANUAL | Toggle night mode bekerja; tampilan rapi dua mode |
| AC-08 | E2E | Alamat https merespons; sertifikat sah |
| AC-09 | MANUAL | Semua elemen Tentang ada; legalitas tertulis jujur |
| AC-10 | E2E | Telusuri semua tautan (tidak ada rusak); pindai teks "lorem ipsum" (harus nol) |

---

## BAGIAN E — Jawaban 3 Pertanyaan Uji Standar HOTL (wajib ada di G1)

**1. "Bagaimana seseorang bisa menipu sistem ini tanpa melanggarnya secara teknis?"**
- *Salah ketik angka dana* → riwayat nilai lama→baru terekam otomatis (B5), jadi terlihat & bisa dikoreksi.
- *Label transparan disembunyikan* (huruf kecil/abuan) → tes AC-04 memeriksa keberadaan DAN keterbacaannya.
- *Password admin lemah* → hanya 2 akun, panjang minimal, tidak ada akun publik.
- *Situs palsu menyerupai* → alamat resmi + gembok https; lembaga mengumumkan alamat resminya lewat kanal yang sudah dipercaya.

**2. "Bukti mana yang paling mudah dipalsukan, dan bagaimana kesegarannya diverifikasi?"**
- Tangkapan layar/demo bisa basi → pengujian G2 & G4 menyasar **situs yang hidup**, bukan gambar.
- Tes jalan di CI **setiap perubahan**; angka dana dibandingkan ke sumbernya saat G2 dan G4 oleh HOTL sendiri.

**3. "Apa risiko terburuknya, dan apa jalan mundurnya?"**
- Terburuk: angka/konten keliru tayang publik, atau situs dirusak.
- Jalan mundur: situs adalah salinan repo → pasang ulang versi sebelumnya **±15 menit**; alamat bisa dimatikan sementara tanpa merusak apa pun; perubahan angka punya jejak untuk diaudit; tulang data (Supabase) terpisah dari tampilan, jadi kerusakan tampilan tidak merusak data.

---

## BAGIAN F — Vonis Reviewer Independen (diisi sesi/model BERBEDA — bukan penyusun)

> Buka folder ini di **Antigravity IDE / Trae** (model berbeda dari penyusun), jalankan prompt yang diberikan HOTL, tempelkan hasilnya di sini.

- **Vonis:** _belum ada_
- **Alasan satu kalimat:** _belum ada_
- **Temuan/catatan:** _belum ada_
- **Tanggal & alat reviewer:** _belum ada_

---

## BAGIAN G — Yang sengaja TIDAK diputuskan di G1

Warna & branding final, foto, kalimat copy per halaman, urutan kabar — itu pekerjaan P2 bersama builder selama mengikuti bingkai ini. Yang dikunci di G1: struktur, jalur data, keamanan, dan pecahan tugas.
