# CHECKLIST GERBANG SDLC-HOTL

Berdasarkan Konstitusi v0.1 (`00-Konstitusi-HOTL.md`).
Cara pakai: satu pekerjaan = satu salinan checklist ini (atau satu entri di tabel pelacakan).
**Ragu pada satu saja kotak = NO-GO. Tidak ada pengecualian.**

---

## Pertanyaan Uji Standar HOTL

Ajukan setiap kali meratifikasi apa pun (bar, rancangan, vonis):
1. *"Bagaimana seseorang bisa menipu ini tanpa melanggarnya secara teknis?"*
2. *"Bukti mana yang paling mudah dipalsukan, dan bagaimana kesegarannya diverifikasi?"*
3. *"Apa risiko terburuknya, dan apa jalan mundurnya?"*

Sistem wajib menjawab ketiganya dalam bahasa awam. Jawaban bertele-tele = NO-GO.

---

## G0 — Gerbang Niat (kompetensi penuh HOTL)

**Bar:** PRD menjawab masalah apa, untuk siapa, sukses terlihat seperti apa, dan apa yang TIDAK akan dikerjakan — tanpa istilah teknis.

**Bukti wajib:**
- [ ] Dokumen PRD: masalah, pengguna, tujuan, ukuran sukses
- [ ] Daftar non-goals eksplisit
- [ ] Acceptance criteria berbahasa pengguna: "pengguna bisa X; jika Y maka Z"
- [ ] Setiap acceptance criteria bisa dibayangkan cara mengujinya tanpa membaca kode
- [ ] Target metrik untuk G4 tertulis

**Formulir vonis:**
```
1. BAR    :
2. BUKTI  :
3. VONIS  : (HOTL sendiri — ini wilayahmu)
4. PILIHAN: [ ] GO  [ ] NO-GO  [ ] KEMBALIKAN UNTUK DIPERBAIKI
```

---

## G1 — Gerbang Rancangan (ratifikasi berbasis bukti)

**Bar:** rancangan menjelaskan apa yang akan berubah, apa risiko terburuknya, dan bagaimana cara membatalkannya.

**Bukti wajib:**
- [ ] Ringkasan rancangan 1 halaman, bahasa awam
- [ ] Design doc teknis (lampiran, tidak wajib dibaca HOTL)
- [ ] Pejabaran jadi task granular, tiap task punya acceptance criteria yang diturunkan dari G0
- [ ] Jawaban tertulis atas 3 Pertanyaan Uji Standar
- [ ] Vonis reviewer independen (sesi/model berbeda dari perancang)
- [ ] QA-agent sudah menulis tes DARI acceptance criteria, sebelum pembangunan dimulai

**Formulir vonis:** (format 4 baris, Pasal 4)

---

## G2 — Gerbang Hasil Bangunan (ratifikasi berbasis bukti)

**Bar:** semua acceptance criteria dari G0 terbukti lolos, dibuktikan oleh pihak yang BUKAN pembangunnya.

**Bukti wajib:**
- [ ] Semua tes QA hijau, dijalankan mesin (bukan klaim)
- [ ] Demo per acceptance criterion (video/tangkapan layar) yang bisa ditonton HOTL
- [ ] Laporan reviewer independen: LULUS/GAGAL + alasan
- [ ] Tidak ada bukti yang kedaluwarsa (Pasal 4 & 8)
- [ ] Perbandingan berdampingan: "yang diminta di G0" vs "yang terbukti sekarang"

**Formulir vonis:** (format 4 baris)

---

## G3 — Gerbang Rilis (ratifikasi berbasis bukti)

**Bar:** ada cara mundur yang sudah diuji, pemantauan aktif, dan rilis dilakukan bertahap.

**Bukti wajib:**
- [ ] Rekaman uji rollback (dicoba sungguhan, bukan direncanakan)
- [ ] Dashboard pemantauan aktif + ambang alarm
- [ ] Rencana rollout bertahap (bukan 100% sekaligus) untuk perubahan berisiko
- [ ] Catatan rilis bahasa awam (apa yang berubah bagi pengguna)
- [ ] Tidak ada stop-loss yang aktif (lihat bagian bawah)

**Formulir vonis:** (format 4 baris)

---

## G4 — Gerbang Hasil Nyata (kompetensi penuh HOTL)

**Bar:** hal yang diminta di G0 benar-benar terjadi di dunia nyata.

**Bukti wajib:**
- [ ] Pemakaian/pengujian nyata oleh HOTL sendiri
- [ ] Perbandingan metrik aktual vs target G0
- [ ] Daftar bug/masalah yang ditemukan pasca-rilis (boleh kosong, tidak boleh disembunyikan)
- [ ] Putusan: rilis ini dihitung "bermakna dan bersih" (untuk tangga kepercayaan) atau tidak

**Formulir vonis:** (format 4 baris; vonis oleh HOTL sendiri)

---

## Checklist Stop-Loss (pipeline membekukan diri)

Bila salah satu tercentang → pipeline beku, HOTL dipanggil, tidak ada pekerjaan baru masuk:
- [ ] 2 rilis gagal beruntun
- [ ] 1 insiden berat (definisi Pasal 6 konstitusi)
- [ ] Metrik kesehatan di bawah ambang [KALIBRASI]
- [ ] Canary defect tidak tertangkap lapisan review
- [ ] Ada klaim lolos gerbang tanpa bukti

Pembukaan kembali hanya oleh HOTL, secara eksplisit, tercatat di decision log.

---

## Tabel Pelacakan Pekerjaan (ganti papan alur sementara dashboard belum ada)

| ID | Pekerjaan | Tahap | Pemegang saat ini | Menunggu putusan HOTL sejak | Status |
|---|---|---|---|---|---|
| | | | | | |

> SLA putusan HOTL: 24 jam [KALIBRASI]. Lewat itu, sistem wajib "berbunyi".
