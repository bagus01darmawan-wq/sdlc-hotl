# RENCANA TES QA — PRD-001 (Website LAZISNU MWC NU Kecamatan Paninggaran)

**Tanggal:** 2026-08-10 | **Status:** DIAJUKAN — menunggu vonis reviewer independen + ratifikasi HOTL
**Penyusun:** QA-agent | **Acuan:** `03-PRD-001-Website-LAZISNU.md` (G0) · `04-G1-Desain-Website-LAZISNU.md` (G1, v1.3 final)
**Versi:** **v1.0** (pengajuan pertama) — penanda kesegaran: baris "Versi" ini + nomor tes TQ-01 s.d. TQ-O4.

---

## 1. Aturan main (dari kartu QA + rancangan desain)

1. **Merah dulu (failing-first):** semua tes otomatis ditulis dan dijalankan SEBELUM implementasi ada; hasil pertama wajib MERAH, dicatat, baru builder membuatnya hijau.
2. **Jujur mesin vs manusia:** kolom METODE hanya boleh berisi E2E bila mesin sungguh bisa memutuskannya sendiri. Bagian manusia tidak pernah diklaim mesin (pelajaran vonis-2).
3. **Totalitas:** 100% AC PRD-001 terpetakan ke tes; setiap kriteria desain dari `04` (SEC/OPS) juga terpetakan.
4. Kasus gagal ditulis sebelum kasus senang.

## 2. Matriks tes

| ID | Melayani | METODE | Cara menjalankan (bahasa awam) | Lulus jika |
|---|---|---|---|---|
| TQ-01 | AC-01 | MANUAL | Tunjukkan beranda ke 3 orang selama ≤5 detik TANPA menjelaskan apa pun | ≥ 2 dari 3 bisa menyebutkan ini situs apa dan milik siapa |
| TQ-02 | AC-02 | E2E | Mesin membuka beranda, menghitung klik menuju halaman donasi | Tercapai ≤ 2 klik |
| TQ-03a | AC-03 | E2E | Masukkan 1 kabar contoh ke database → buka halaman penyaluran | Kabar tampil (judul, tanggal, ringkasan) |
| TQ-03b | AC-03 | MANUAL | Admin menambah 1 kabar nyata **tanpa menyentuh kode**, disaksikan HOTL; langkah dihitung | Berhasil ≤ 5 langkah |
| TQ-04a | AC-04 | E2E | Buka halaman donasi, periksa elemen label transparan + format nomor | Label ADA & terlihat (bukan disembunyikan); format nomor sesuai pola |
| TQ-04b | AC-04 | MANUAL | HOTL membandingkan nomor/QRIS di layar dengan dokumen resmi fisik lembaga | Persis sama, dan label terbaca jelas |
| TQ-05 | AC-05 | E2E | Buka beranda, cari dua elemen angka | Angka terkumpul & tersalurkan tampil tanpa bertanya |
| TQ-06 | AC-06/B11 | E2E + MANUAL | (i) Mesin: simpan angka uji → poll situs tiap detik → catat detik sampai berubah. (ii) HOTL: stopwatch HP + tabel log (disimpan-pada / tampil-pada / selisih / lulus) | Selisih **≤ 60 detik**, dua-duanya (mesin & HOTL) |
| TQ-07 | AC-07 | E2E + MANUAL | Mesin: klik tombol night mode di viewport HP & desktop → periksa tema berubah. Mata: geser/scroll dua mode | Tema berubah dua arah; tampilan rapi dua mode |
| TQ-08 | AC-08 | E2E | Mesin meminta https://png.lazisnu.site | Respons 200 + sertifikat sah (gembok) |
| TQ-09a | AC-09 | E2E | Periksa keberadaan elemen halaman Tentang | Profil, legalitas, pengurus, kontak — elemennya ada |
| TQ-09b | AC-09 | MANUAL | HOTL membaca halaman Tentang | Semua elemen terbaca; legalitas tertulis jujur "dalam proses pengurusan" |
| TQ-10 | AC-10 | E2E | Mesin menelusuri semua tautan + memindai seluruh teks | 0 tautan rusak; 0 teks "lorem ipsum" |
| TQ-S1 | SEC-01 | E2E | Tanpa login: coba tulis/ubah/hapus keempat tabel | SEMUA percobaan DITOLAK database (kontrak RLS B9) |
| TQ-S2 | SEC-02 | E2E | CI memindai repo website + riwayat commit dengan pola kunci/rahasia | Nol temuan (khususnya service_role, kredensial) |
| TQ-S3 | SEC-03 | E2E | Buka halaman admin tanpa login; coba login dengan password salah | Tanpa login → tertolak; password salah → tertolak |
| TQ-O1 | OPS-01 | MANUAL | Setelah rilis di lingkungan niaga/uji: kembalikan ke versi sebelumnya, diukur stopwatch | ≤ 15 menit, tercatat di lembar bukti **G3** |
| TQ-O2 | OPS-02 | MANUAL | Pasang salinan situs di lokasi uji kedua; waktu dihitung dari mulai sampai hidup | Alamat uji hidup; waktu ≤ 1 hari kerja |
| TQ-O3 | OPS-03 | MANUAL | Saat pelatihan admin (T12): simulasikan lupa password sampai berhasil masuk lagi | Alur reset selesai tanpa bantuan teknisi, disaksikan HOTL |
| TQ-O4 | OPS-04 | MANUAL (E2E pendukung) | Simulasikan koneksi database gagal → buka situs | Situs tetap tampil; panel data menampilkan "terakhir diperbarui [tanggal]", bukan layar rusak |

## 3. Kasus tepi (di luar teks PRD — ujian yang membuat klaim bisa jatuh)

| ID | Kasus | Harapan |
|---|---|---|
| TE-01 | Angka diisi **negatif, nol, atau raksasa** (mis. 999 triliun) | Ditolak dengan pesan jelas, atau ditandai mencolok untuk dikoreksi — tidak pernah tampil polos seolah benar |
| TE-02 | Kabar **tanpa foto** / teks **sangat panjang** / ber-**emoji & aksara non-latin** | Tampil rapi, tidak merusak layout, tidak memecah panel angka |
| TE-03 | **Dua admin menyimpan bersamaan** | Tidak ada data hilang; tulisan terakhir menang; **riwayat** mencatat keduanya |
| TE-04 | Situs dibuka dari **HP lama/layer kecil, koneksi lambat, cache kaku** | Teks inti + angka tetap terbaca; tidak ada halaman putih |
| TE-05 | Admin memasukkan **angka uji** lalu lupa mengembalikan | Ada mekanisme/cek sebelum G3: situs dilarang rilis membawa angka uji (diperiksa di TQ-06 log & konfirmasi HOTL) |

## 4. Aturan pelaksanaan (kontrak dengan builder & gerbang)

1. Tes hidup di repo `website-lazisnu`, ditulis QA-agent **sebelum builder mulai**; builder **dilarang mengubah berkas tes** (pelanggaran = merah otomatis + laporan).
2. Setiap tes punya bukti: tautan hasil CI (untuk E2E) atau lembar/catatan bertanggal (untuk MANUAL) — tanpa bukti, tes dianggap belum ada.
3. TQ-03b, TQ-04b, TQ-06(ii), TQ-O1..O4 dieksekusi/diisi **oleh HOTL atau disaksikan HOTL** — lembar buktinya masuk paket gerbang G2/G3.
4. Perubahan rencana tes ini setelah diratifikasi = amendemen via PR + ratifikasi HOTL (bar tidak bisa dikendurkan diam-diam).

## 5. Rantai niat & tanda tangan

Rantai niat: PRD-001 (AC-01..AC-10, diratifikasi G0 2026-08-10) → Desain G1 v1.3 (B1–B11, SEC/OPS, diratifikasi G1 2026-08-10) → rencana tes ini. Tidak ada tes yang berdiri tanpa AC/desain di belakangnya; tidak ada AC yang yatim tanpa tes.

```
TANDA TANGAN QA — ujian ini saya desain untuk menjatuhkan klaim, termasuk klaim saya sendiri kemarin.
Rantai niat: PRD-001 (G0, 2026-08-10) · G1 v1.3 (G1, 2026-08-10) | Self-audit kartu: ✓
(kecuali satu yang dikerjakan sengaja: TE-05 adalah jebakan bagi kita semua, termasuk QA)
Keberatan terbuka: tidak ada.
```
