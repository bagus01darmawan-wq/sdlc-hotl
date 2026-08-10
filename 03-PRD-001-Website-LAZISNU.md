# PRD-001 — Website Identitas LAZISNU (Inkremen 1)

**Nomor:** PRD-001 | **Tanggal:** 2026-08-10 | **Status:** DRAF v0.1 — menunggu ratifikasi G0
**Pemilik niat:** HOTL | **Penyusun draf:** Agen-PM (dari arahan HOTL)

> Dokumen ini disusun agen dari arahanmu. Semua yang bertanda **[ISI:]** hanya bisa dijawab olehmu.
> Koreksi sesukamu — kamu pemilik niat. Setelah cocok, ratifikasi = GO di G0.

---

## 1. Masalah

Lembaga LAZISNU [ISI: unit yang mana — PBNU / PWNU provinsi / PCNU kabupaten-kota ] belum memiliki wajah resmi di internet yang dikelola baik. Akibatnya:

- Calon donatur tidak punya satu tempat resmi untuk mengenal lembaga, sehingga kepercayaan dititipkan pada kabar yang tersebar tidak terkendali.
- Informasi penyaluran dana umat tidak terlihat publik, padahal justru di situlah citra dan kepercayaan lembaga dibangun.
- Ajakan donasi bergantung pada perantara (pesan berantai, mulut ke mulut), bukan kanal resmi lembaga.

## 2. Untuk siapa

- Donatur dan calon donatur (warga Nahdliyin dan masyarakat umum)
- Penerima manfaat dan mitra penyaluran
- Pengurus lembaga sebagai admin pengelola konten [ISI: berapa orang, seberapa terbiasa komputer]
- Publik dan pemeriksa yang ingin menilai kredibilitas lembaga

## 3. Tujuan & citra hasil akhir

Website resmi menjadi **identitas organisasi** yang menaikkan citra lembaga. Satu kunjungan ideal pengunjung:

*Ia membuka beranda → dalam hitungan detik paham ini situs resmi LAZISNU → melihat kabar penyaluran dana terbaru → melihat angka dana yang dikelola lembaga → menemukan cara donasi yang jelas → merasa lembaga ini bisa dipercaya.*

## 4. Ukuran sukses (target G4 — bisa dicek tanpa alat teknis)

- [ ] HOTL dapat menunjukkan website ini kepada siapa pun sebagai "wajah resmi lembaga" tanpa perlu membela diri.
- [ ] Pengunjung sampai pada cara donasi dalam **maksimal 2 klik** dari beranda.
- [ ] Angka dana yang tampil di website **persis sama** dengan angka pada sumber pencatatan lembaga [ISI: di mana angka itu tercatat hari ini?].
- [ ] Admin (pengurus, bukan programmer) dapat memperbarui angka dana dan kabar penyaluran **tanpa menyentuh kode dan tanpa bantuan pembuat website**.
- [ ] Website dapat diakses publik di alamat resmi lembaga [ISI: domain, kalau sudah ada/baru akan dibeli].

## 5. Non-goals (Inkremen 1)

- **Bukan** tempat bertransaksi: donasi diarahkan ke kanal resmi (rekening/QRIS), tidak ada pembayaran di dalam situs.
- **Bukan** aplikasi mobile, bukan sistem login anggota.
- **Bukan** pengganti pembukuan: belum ada integrasi otomatis ke sistem keuangan inti (diputuskan di G1 berdasarkan jawaban pertanyaan terbuka no. 1).
- **Bukan** platform pendaftaran program/beasiswa.

## 6. Acceptance criteria (bahasa pengguna)

| No | Kriteria | Cara membuktikan dengan mata/tangan |
|---|---|---|
| AC-01 | Pengunjung membuka beranda dan dalam ± 5 detik paham ini situs resmi LAZISNU [ISI: unit] | Tunjukkan ke 2–3 orang tanpa menjelaskan apa pun; mereka bisa menyebutkan ini situs apa dan milik siapa |
| AC-02 | Dari beranda, pengunjung mencapai halaman cara donasi dalam ≤ 2 klik | Klik sendiri dari beranda, hitung jumlah klik |
| AC-03 | Halaman penyaluran menampilkan kabar penyaluran terbaru (judul, tanggal, ringkasan, foto bila ada); admin bisa menambahkannya tanpa kode | Minta admin menambah satu kabar contoh sambil kamu menonton |
| AC-04 | Ajakan donasi menampilkan kanal resmi [ISI: rekening bank atas nama lembaga / QRIS / kanal lain]; nomor dan QRIS yang tampil persis dokumen resmi | Bandingkan langsung dengan dokumen/channel resmi lembaga |
| AC-05 | Pengunjung melihat angka dana terkumpul dan tersalurkan (periode berjalan) di tempat yang mudah ditemukan | Buka website, angka terlihat tanpa bertanya |
| AC-06 | Jika admin memperbarui angka di sumber pencatatan, angka di website ikut berubah **tanpa mengubah kode** | Ubah satu angka contoh di sumber → muat ulang halaman → angka berubah. Seberapa cepat perubahannya (benar-benar seketika atau harian) diputuskan di G1 |
| AC-07 | Website tampil rapi di layar HP maupun komputer | Buka dari HP sendiri dan dari komputer |
| AC-08 | Alamat situs memakai https dan domain resmi lembaga | Lihat gembok di bilah alamat browser |
| AC-09 | Ada halaman "Tentang": profil singkat, legalitas [ISI: SK/nomor legal lembaga], struktur pengurus, kontak resmi | Baca halamannya; semua elemen ada |
| AC-10 | Saat dirilis, tidak ada teks contoh ("lorem ipsum"), tidak ada menu/tautan yang rusak | Klik semua menu dan semua tautan sendiri (± 15 menit) |

## 7. Pertanyaan terbuka (dijawab sebelum atau saat G1)

1. **Angka dana tercatat di mana hari ini?** (buku tulis, spreadsheet, aplikasi?) — jawaban ini menentukan seberapa "realtime" yang bisa diwujudkan.
2. Unit LAZISNU yang mana, dan apakah domain situs sudah ada?
3. Kanal donasi resmi apa saja yang boleh ditampilkan?
4. Siapa yang akan jadi admin konten, dan seberapa sering sanggup memperbarui?
5. Hosting/anggaran: sudah tersedia atau belum?

## 8. Rencana inkremen

- **Inkremen 1 (dry run ini):** seluruh AC-01 s.d. AC-10 — situs hidup, konten nyata, angka dana dikelola admin.
- **Inkremen 2+ (menunggu evaluasi G4):** otomatisasi angka dana bila sumbernya memungkinkan, kalkulator zakat, halaman program mendalam, laporan tahunan daring, dst.

## 9. Riwayat

| Tanggal | Perubahan | Oleh |
|---|---|---|
| 2026-08-10 | Draf v0.1 disusun dari arahan HOTL | Agen-PM |
