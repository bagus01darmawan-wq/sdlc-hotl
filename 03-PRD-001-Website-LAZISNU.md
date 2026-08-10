# PRD-001 — Website Identitas LAZISNU (Inkremen 1)

**Nomor:** PRD-001 | **Tanggal:** 2026-08-10 | **Status:** **DIRATIFIKASI di G0 — 2026-08-10 oleh HOTL** (PR #2, CI hijau)
**Pemilik niat:** HOTL | **Penyusun draf:** Agen-PM (dari arahan HOTL)

> Dokumen ini disusun agen dari arahanmu. Semua yang bertanda **[ISI:]** hanya bisa dijawab olehmu.
> Koreksi sesukamu — kamu pemilik niat. Setelah cocok, ratifikasi = GO di G0.
>
> **Repo ini PUBLIK:** tulis jawaban [ISI:] di `PRIBADI-JANGAN-DIUNGGAH.md` (file lokal, tidak ikut diunggah), bukan langsung di dokumen ini.

---

## 1. Masalah

Lembaga LAZISNU MWC NU Kecamatan Paninggaran belum memiliki wajah resmi di internet yang dikelola baik. Akibatnya:

- Calon donatur tidak punya satu tempat resmi untuk mengenal lembaga, sehingga kepercayaan dititipkan pada kabar yang tersebar tidak terkendali.
- Informasi penyaluran dana umat tidak terlihat publik, padahal justru di situlah citra dan kepercayaan lembaga dibangun.
- Ajakan donasi bergantung pada perantara (pesan berantai, mulut ke mulut), bukan kanal resmi lembaga.

## 2. Untuk siapa

- Donatur dan calon donatur (warga Nahdliyin dan masyarakat umum)
- Penerima manfaat dan mitra penyaluran
- Pengurus lembaga sebagai admin pengelola konten (2 orang, tidak terbiasa komputer — ini menjadi syarat desain)
- Publik dan pemeriksa yang ingin menilai kredibilitas lembaga

## 3. Tujuan & citra hasil akhir

Website resmi menjadi **identitas organisasi** yang menaikkan citra lembaga. Satu kunjungan ideal pengunjung:

*Ia membuka beranda → dalam hitungan detik paham ini situs resmi LAZISNU → melihat kabar penyaluran dana terbaru → melihat angka dana yang dikelola lembaga → menemukan cara donasi yang jelas → merasa lembaga ini bisa dipercaya.*

## 4. Ukuran sukses (target G4 — bisa dicek tanpa alat teknis)

- [ ] HOTL dapat menunjukkan website ini kepada siapa pun sebagai "wajah resmi lembaga" tanpa perlu membela diri.
- [ ] Pengunjung sampai pada cara donasi dalam **maksimal 2 klik** dari beranda.
- [ ] Angka dana yang tampil di website **persis sama** dengan angka pada sumber pencatatan daring lembaga (rincian: file pribadi).
- [ ] Admin (pengurus, bukan programmer) dapat memperbarui angka dana dan kabar penyaluran **tanpa menyentuh kode dan tanpa bantuan pembuat website**.
- [ ] Website dapat diakses publik di alamat resmi lembaga: **png.lazisnu.site** (domain sudah dilanggan, perlu disetup DNS).

## 5. Non-goals (Inkremen 1)

- **Bukan** tempat bertransaksi: donasi diarahkan ke kanal resmi (rekening/QRIS), tidak ada pembayaran di dalam situs.
- **Bukan** aplikasi mobile, bukan sistem login anggota.
- **Bukan** pengganti pembukuan: belum ada integrasi otomatis ke sistem keuangan inti (diputuskan di G1 berdasarkan jawaban pertanyaan terbuka no. 1).
- **Bukan** platform pendaftaran program/beasiswa.

## 6. Acceptance criteria (bahasa pengguna)

| No | Kriteria | Cara membuktikan dengan mata/tangan |
|---|---|---|
| AC-01 | Pengunjung membuka beranda dan dalam ± 5 detik paham ini situs resmi LAZISNU MWC NU Kecamatan Paninggaran | Tunjukkan ke 2–3 orang tanpa menjelaskan apa pun; mereka bisa menyebutkan ini situs apa dan milik siapa |
| AC-02 | Dari beranda, pengunjung mencapai halaman cara donasi dalam ≤ 2 klik | Klik sendiri dari beranda, hitung jumlah klik |
| AC-03 | Halaman penyaluran menampilkan kabar penyaluran terbaru (judul, tanggal, ringkasan, foto bila ada); admin bisa menambahkannya tanpa kode | Minta admin menambah satu kabar contoh sambil kamu menonton |
| AC-04 | Ajakan donasi menampilkan kanal resmi **dengan label transparan**: dinyatakan jelas bahwa rekening sementara atas nama pengurus (jabatan disebut), dan rekening resmi lembaga sedang dalam pengurusan; nomor/QRIS yang tampil persis dokumen resmi (rincian: file pribadi) — *keputusan HOTL 2026-08-10* | Bandingkan langsung dengan dokumen resmi lembaga; label keterangan terbaca jelas tanpa perlu penjelasan lisan |
| AC-05 | Pengunjung melihat angka dana terkumpul dan tersalurkan (periode berjalan) di tempat yang mudah ditemukan | Buka website, angka terlihat tanpa bertanya |
| AC-06 | Jika admin memperbarui angka di sumber pencatatan, angka di website ikut berubah **tanpa mengubah kode** | Ubah satu angka contoh di sumber → muat ulang halaman → angka berubah. Seberapa cepat perubahannya (benar-benar seketika atau harian) diputuskan di G1 |
| AC-07 | Website tampil rapi di layar HP maupun komputer (terdapat tombol night mode) | Buka dari HP sendiri dan dari komputer; klik tombol night mode di keduanya — tampilan berubah gelap/terang |
| AC-08 | Alamat situs memakai https dan domain resmi lembaga | Lihat gembok di bilah alamat browser |
| AC-09 | Ada halaman "Tentang": profil singkat, **status legalitas tertulis apa adanya ("dalam proses pengurusan")**, struktur pengurus, kontak resmi (rincian: file pribadi) — *keputusan HOTL 2026-08-10* | Baca halamannya; semua elemen ada dan status legalitas tertulis jujur |
| AC-10 | Saat dirilis, tidak ada teks contoh ("lorem ipsum"), tidak ada menu/tautan yang rusak | Klik semua menu dan semua tautan sendiri (± 15 menit) |

## 7. Pertanyaan terbuka (dijawab sebelum atau saat G1)

1. ~~Angka dana tercatat di mana hari ini?~~ **TERJAWAB:** sumber pencatatan daring (rincian: file pribadi) → G1 membidik pembaruan angka **nyaris seketika** (AC-06 versi kuat).
2. ~~Unit LAZISNU & domain?~~ **TERJAWAB:** MWC NU Kecamatan Paninggaran; domain png.lazisnu.site (sudah dilanggan, perlu setup DNS).
3. ~~Kanal donasi?~~ **TERJAWAB — putusan HOTL 2026-08-10:** tampil dengan label transparan (tertuang di AC-04).
4. ~~Siapa admin?~~ **TERJAWAB:** 2 orang, tidak terbiasa komputer → syarat desain G1: alur update dapat dilakukan orang awam dalam **≤ 5 langkah**.
5. ~~Hosting/anggaran?~~ **TERJAWAB:** server VM sudah tersedia (rincian: file pribadi).

## 8. Rencana inkremen

- **Inkremen 1 (dry run ini):** seluruh AC-01 s.d. AC-10 — situs hidup, konten nyata, angka dana dikelola admin.
- **Inkremen 2+ (menunggu evaluasi G4):** otomatisasi angka dana bila sumbernya memungkinkan, kalkulator zakat, halaman program mendalam, laporan tahunan daring, dst.

## 9. Riwayat

| Tanggal | Perubahan | Oleh |
|---|---|---|
| 2026-08-10 | Draf v0.1 disusun dari arahan HOTL | Agen-PM |
| 2026-08-10 | Koreksi HOTL: night mode masuk AC-07 | HOTL |
| 2026-08-10 | v0.2: keputusan kanal donasi (label transparan) & legalitas (status apa adanya); isian publik dimasukkan; 5 pertanyaan terbuka terjawab | Agen-PM (dari putusan HOTL) |
| 2026-08-10 | **GO di G0** — ratifikasi penuh; PRD sah masuk tahap P1 (desain) | HOTL |
