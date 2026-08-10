# PAKET G1 — Desain Website LAZISNU MWC NU Kecamatan Paninggaran (PRD-001)

**Tanggal:** 2026-08-10 | **Status:** DIAJUKAN — menunggu vonis reviewer independen + ratifikasi HOTL
**Penyusun:** Architect-agent | **Acuan:** `03-PRD-001-Website-LAZISNU.md` (v0.2, DIRATIFIKASI G0)

---

## BAGIAN A — Ringkasan 1 Halaman (bahasa awam, wajib dibaca HOTL)

**Apa yang akan dibangun?** Satu website statis sederhana (5 halaman: Beranda, Penyaluran, Donasi, Tentang, dan halaman khusus admin) yang tampil rapi di HP & komputer, punya tombol mode malam, dan alamat resmi **png.lazisnu.site** ber-gembok (https).

**Dari mana angka dananya berasal?** Dari database yang sudah lembaga miliki. Website membaca langsung dari sana, jadi begitu admin mengubah angka (atau menambah kabar penyaluran), **website ikut berubah maksimal 60 detik — tanpa menyentuh kode** (angka pasti, bukan janji).

**Di mana isi situs disimpan?** Semua isi (kabar, angka, info donasi, profil lembaga) disimpan **di database — bukan di berkas kode**. Jadi data lembaga tidak pernah menempel di riwayat kode yang bersifat publik.

**Bagaimana admin (orang awam) memperbarui isi?** Satu halaman khusus terkunci password: buka → masuk → isi kolom → simpan. Target kami: **maksimal 5 langkah**, bisa diajarkan dalam 30 menit. Lupa password? Ada tombol kirim tautan ke email admin, dan dua admin saling memback-up.

**Halaman donasi** menampilkan kanal resmi **dengan label jujur** sesuai keputusanmu: rekening sementara atas nama pengurus, rekening lembaga sedang diurus. **Halaman Tentang** menampilkan profil, pengurus, kontak, dan status legalitas apa adanya.

**Apa risiko terburuknya?** (1) Salah ketik angka dana → diredam: setiap perubahan terekam jejaknya (kapan & nilai lama), jadi bisa diperbaiki dan diaudit. (2) Website diserang/dirusak → diredam: seluruh isi situs adalah salinan dari repo; memulihkan = memasang ulang, ±15 menit. (3) Server mati → situs ini "bodoh" & ringan, bisa dipindah ke hosting lain dalam 1 hari kerja. (4) **Database disalahgunakan** → diperkeras pasca-tinjau: publik hanya bisa membaca, menulis hanya 2 admin berpassword (dikunci di tingkat database), tidak ada kunci sakti di mana pun, dan CI website memindai kebocoran kunci setiap perubahan.

**Bagaimana membatalkannya?** Matikan alamat png.lazisnu.site — selesai. Situs belum dikenal publik, tidak ada yang rusak. Semua pekerjaan tersimpan rapi di repo untuk dilanjutkan kapan pun.

**Apa yang TIDAK dikerjakan?** Sesuai PRD: tidak ada pembayaran di dalam situs, tidak ada login pengunjung, tidak ada aplikasi mobile, tidak ada integrasi ke pembukuan inti.

---

## BAGIAN B — Keputusan Desain (teknis, tidak wajib dibaca HOTL)

| # | Keputusan | Alasan satu kalimat |
|---|---|---|
| B1 | **Situs statis murni** (HTML+CSS+JS kecil, tanpa framework berat) | Paling cepat, paling aman, paling murah, paling mudah dipindah-pindah — risiko terkecil untuk dry run |
| B2 | **Hosting di VM yang sudah ada + Caddy** (server kecil, https otomatis) | Memakai yang sudah dibayar; gembok https (AC-08) terpasang otomatis |
| B3 | **Baca data langsung dari Supabase** (akses baca-saja, tabel publik terbatas) | Angka di situs berubah ≤ 60 detik begitu admin menyimpan (AC-06 versi kuat, terukur) |
| B4 | **Form admin mini 1 halaman** (login → isi → simpan) dengan Supabase Auth | Satu-satunya cara memenuhi syarat "admin awam ≤ 5 langkah" dengan inframu |
| B5 | **Jejak perubahan angka** (tabel riwayat: nilai lama→baru, kapan) | Peredam salah ketik + bukti audit (lihat jawaban Pertanyaan Uji) |
| B6 | **Konten tampil-publik (donasi, kontak, profil, legalitas) disimpan di DATABASE**, dimasukkan lewat form admin — tidak lewat commit | Repo tidak mengandung data lembaga sama sekali; menutup tuntas tabrakan B6×B7 (temuan reviewer) |
| B7 | **Repo website terpisah** (`website-lazisnu`, publik) berisi **kode murni**, dengan CI sendiri + pemindai rahasia | Tata kelola dan produk tidak dicampur; data tidak menempel di riwayat commit mana pun |
| B8 | **Night mode sederhana** (tombol, pilihan tersimpan di perangkat) | Permintaan HOTL di AC-07; tidak perlu kompleksitas tambahan |
| B9 | **Kontrak RLS tertulis di G1:** publik hanya baca (baris aktif/terbit), tulis-ubah hanya 2 admin terautentikasi, riwayat append-only tak bisa dihapus (rinci: Bagian F.2) | Siapa boleh baca/tulis tabel mana adalah keputusan keamanan — diratifikasi di G1, bukan diimprovisasi builder (temuan reviewer) |
| B10 | **Recovery password admin:** tombol "lupa password" kirim tautan ke email admin; 2 akun redundan; prosedur darurat via teknisi (kartu akses di file pribadi) | Pengguna awam pasti pernah lupa password; konten tidak boleh berhenti karena itu (temuan reviewer) |
| B11 | **Ambang AC-06 dikunci: angka tampil ≤ 60 detik** dari admin menyimpan | Janji G1 harus bisa gugur otomatis; PRD menyerahkan angkanya ke G1 — inilah angkanya (temuan reviewer) |

#### Alternatif yang ditolak (wajib per kartu architect — sidik jari proses)

| Alternatif | Alasan menolaknya |
|---|---|
| Hosting statis gratis (Netlify/Vercel/GitHub Pages) | VM + database sudah dibayar & terpasang. Kelebihannya (nyaris tanpa perawatan) diakui — dijadikan **jalur migrasi resmi** bila VM merepotkan, karena situs statis mudah pindah |
| Google Spreadsheet sebagai sumber angka | Database digital sudah ada; Sheet menambah integrasi, titik gagal, dan latensi tanpa manfaat nyata |
| CMS siap pakai (WordPress dkk.) | Permukaan serangan + beban rawat jauh melebihi kebutuhan 5 halaman; statis lebih aman, cepat, murah |
| Framework berat (Next.js dkk.) | Overkill untuk Inkremen 1; menambah kompleksitas build tanpa nilai bagi AC |

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
| T4 | Halaman Donasi membaca konten dari database + label transparan | AC-04, B6 | Kanal + keterangan terbaca; nol data lembaga di repo |
| T5 | Halaman Tentang membaca profil/legalitas/pengurus/kontak dari database | AC-09, B6 | Semua elemen terbaca; nol data lembaga di repo |
| T6 | Skema Supabase: 4 tabel (`angka_dana`, `kabar_penyaluran`, `riwayat_angka`, `konten_halaman`) + **kontrak RLS (B9/F.2) diterapkan & diverifikasi** + 2 akun admin | fondasi AC-03/05/06 | Database terkunci tulis bagi publik, terbukti via tes SEC-01 |
| T7 | Halaman Penyaluran: daftar kabar dari database | AC-03 | Kabar tampil otomatis |
| T8 | Form admin mini: login + tombol lupa-password (B10); 4 form kecil: angka(+riwayat), kabar, kanal donasi, konten Tentang | AC-03, AC-06 | Admin awam update ≤5 langkah; lupa password teratasi mandiri |
| T9 | Panel angka beranda membaca langsung database | AC-05, AC-06 | Ubah angka → tampil **≤ 60 detik** (B11) |
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
| AC-03 | MANUAL (E2E hanya pendukung) | **Manusia (inti):** admin menambah kabar tanpa menyentuh kode, disaksikan HOTL. Mesin (pendukung saja): kabar contoh tampil di halaman |
| AC-04 | MANUAL (E2E hanya pendukung) | **Manusia (inti):** HOTL membandingkan nomor/QRIS ke dokumen resmi dan menilai label terbaca. Mesin (pendukung saja): elemen label ada & terlihat, format nomor sesuai |
| AC-05 | E2E | Elemen angka terkumpul & tersalurkan ada di beranda |
| AC-06 | E2E + MANUAL | Ubah angka → tampil **≤ 60 detik** dari simpan (B11); waktu dicatat & dibandingkan; tanpa ubah kode |
| AC-07 | E2E + MANUAL | Toggle night mode bekerja; tampilan rapi dua mode |
| AC-08 | E2E | Alamat https merespons; sertifikat sah |
| AC-09 | MANUAL | Semua elemen Tentang ada; legalitas tertulis jujur |
| AC-10 | E2E | Telusuri semua tautan (tidak ada rusak); pindai teks "lorem ipsum" (harus nol) |
| SEC-01 | E2E | Tanpa login, **gagal** menulis ke semua tabel (kontrak RLS Bagian F.2 terbukti, bukan dipercaya) |
| SEC-02 | E2E | Pemindai rahasia di CI repo website: tidak ada kunci/service_role/pola kredensial di kode maupun riwayat commit |
| SEC-03 | E2E | Halaman admin tanpa login tertolak; login salah ditolak |

---

## BAGIAN E — Jawaban 3 Pertanyaan Uji Standar HOTL (wajib ada di G1)

**1. "Bagaimana seseorang bisa menipu sistem ini tanpa melanggarnya secara teknis?"**
- *Salah ketik angka dana* → riwayat nilai lama→baru terekam otomatis (B5), jadi terlihat & bisa dikoreksi.
- *Label transparan disembunyikan* (huruf kecil/abuan) → tes AC-04 memeriksa keberadaan DAN keterbacaannya.
- *Password admin lemah* → hanya 2 akun, panjang minimal, tidak ada akun publik.
- *Situs palsu menyerupai* → alamat resmi + gembok https; lembaga mengumumkan alamat resminya lewat kanal yang sudah dipercaya.
- *Miskonfigurasi RLS oleh builder* → kebijakan dikunci tertulis (B9/F.2) + tes SEC-01 wajib **gagal-saat-anon-menulis**; builder tak mengimprovisasi keamanan (tambahan v1.2).
- *Konten lembaga bocor lewat repo publik* → konten pindah ke database, repo kode-murni (B6/B7) + pemindai SEC-02 (tambahan v1.2).
- *Admin awam lupa password* → tombol lupa-password ke email admin + 2 akun redundan + prosedur darurat (B10) (tambahan v1.2).

**2. "Bukti mana yang paling mudah dipalsukan, dan bagaimana kesegarannya diverifikasi?"**
- Tangkapan layar/demo bisa basi → pengujian G2 & G4 menyasar **situs yang hidup**, bukan gambar.
- Tes jalan di CI **setiap perubahan**; angka dana dibandingkan ke sumbernya saat G2 dan G4 oleh HOTL sendiri.

**3. "Apa risiko terburuknya, dan apa jalan mundurnya?"**
- Terburuk: angka/konten keliru tayang publik, atau situs dirusak.
- Jalan mundur: situs adalah salinan repo → pasang ulang versi sebelumnya **±15 menit**; alamat bisa dimatikan sementara tanpa merusak apa pun; perubahan angka punya jejak untuk diaudit; tulang data (Supabase) terpisah dari tampilan, jadi kerusakan tampilan tidak merusak data.

---

## BAGIAN F — Vonis Reviewer Independen

> **Ditempel verbatim oleh HOTL dari sesi Antigravity (Claude Sonnet 4.6 Thinking), 2026-08-10** — sesi/model berbeda dari penyusun, sesuai konstitusi.

- **Vonis:** **GAGAL** — celah keamanan repo publik (B6) dan RLS Supabase (B3/B4) wajib ditutup sebelum builder boleh mulai.
- **Alasan satu kalimat:** "Rancangan website sudah masuk akal, tetapi ada satu lubang berbahaya: data rekening lembaga bisa bocor ke internet dan ada celah keamanan database yang belum ditutup sebelum builder mulai bekerja."
- **Temuan:**
  1. Repo website publik (B7) + konten dimasukkan dari file pribadi (B6) → risiko nilai sensitif ikut ter-commit/tayang tanpa sengaja; batas publik-vs-rahasia belum didefinisikan keras.
  2. RLS Supabase belum dispesifikasi eksplisit; *anon key* akan tampil di repo publik → wajib dikunci sebelum builder mulai (B3/B4).
  - (Rujukan reviewer: Bagian B6, B7, E; Konstitusi Pasal 6(d) — informasi privat bocor = insiden berat; larangan repo publik di AGENTS.md.)
- **Tanda tangan reviewer:** Antigravity (Claude Sonnet 4.6 Thinking), sesi berbeda dari architect-agent. Self-audit kartu: ✓. Keberatan terbuka: tidak ada.
- **PILIHAN reviewer:** KEMBALIKAN UNTUK DIPERBAIKI.

## BAGIAN F.2 — Perbaikan pasca-vonis (v1.1, 2026-08-10, architect)

**Jawaban atas Temuan 1 — Konvensi Dua Dompet (B6 dipertajam):**
- **Dompet PUBLIK** (boleh masuk repo website): HANYA nilai yang memang diputuskan HOTL untuk tampil publik di situs — kanal donasi + label transparan, kontak resmi, struktur pengurus, status legalitas. Daftar nilai-publik ini diceklis HOTL di G2 sebelum rilis, agar tidak ada yang tampil tanpa sengaja.
- **Dompet RAHASIA** (dilarang masuk repo/kode/commit website): semua yang lain — terutama **service_role key Supabase, kredensial VM/Hostinger/database, password admin**. Aturan keras: *service_role key* **tidak dipakai sama sekali** di Inkremen 1; semua penulisan data lewat login admin (Supabase Auth) + RLS.

**Jawaban atas Temuan 2 — Kontrak RLS tertulis sebelum build (B3/B4 dipertajam):**

| Tabel | Publik (anon) boleh | Admin (2 email terautentikasi) boleh |
|---|---|---|
| `angka_dana` | baca baris berstatus aktif | tulis & ubah |
| `kabar_penyaluran` | baca baris `terbit=true` | tulis & ubah |
| `riwayat_angka` | **tidak bisa apa-apa** (audit internal) | tulis saja (append-only, tidak bisa hapus) |

Kontrak ini menjadi bagian wajib T6 dan diverifikasi tes keamanan (Bagian D), bukan diserahkan ke improvisasi builder.

## BAGIAN F.3 — Vonis kedua reviewer (2026-08-10, ditempel verbatim oleh HOTL)

> Antigravity (Claude Sonnet 4.6 Thinking), sesi berbeda dari architect-agent. Self-audit kartu: ✓.

**VONIS: GAGAL** — "Terdapat tabrakan langsung antara keputusan B6 (data rekening dimasukkan saat build) dan B7 (repo website bersifat publik) yang berpotensi melanggar Pasal 6d Konstitusi, ditambah dua rencana tes yang mengklaim kemampuan E2E untuk hal yang tidak bisa diautomasi (AC-03, AC-04), membuat G2 rentan lolos palsu."

**TEMUAN (verbatim):**
1. B6×B7 — rekening/QRIS akan masuk commit history repo publik; tidak dibahas di Bagian E; potensi langgar Pasal 6d; selesaikan sebelum builder mulai.
2. Bagian D, AC-03+AC-04 — klaim E2E palsu: mesin tak bisa membuktikan "admin tanpa kode" dan membandingkan QRIS ke dokumen fisik; CI hijau bisa menyesatkan.
3. Bagian D, AC-06 — "hampir seketika" tanpa ambang terukur; tes tak punya kriteria gagal pasti.
4. B3/B4 + Bagian E — kebijakan RLS harus dikunci & diratifikasi di G1; risiko miskonfigurasi tak disebut di E.
5. Jejak pakar — tidak ada alternatif yang ditolak secara eksplisit (syarat kartu); celah B6×B7 di dokumen sendiri luput dari tinjauan mandiri architect.
+ Risiko tambahan: tidak ada prosedur recovery password admin (probabilitas tinggi pada pengguna awam).

**Penilaian jejak architect (verbatim): "Nyata sebagian — bukan topeng murni, tetapi ada celah proses yang serius."**

## BAGIAN F.4 — Perbaikan kedua (v1.2, 2026-08-10, architect)

Pengakuan jujur: penilaian jejak diterima. Lima perbaikan untuk lima temuan:

1. **B6×B7 ditutup tuntas:** konten tampil-publik pindah KE DATABASE (tabel `konten_halaman`), dimasukkan lewat form admin — **repo mana pun tidak pernah memuat data lembaga**, riwayat commit bersih selamanya (B6/B7 ditulis ulang, T4/T5 menyesuaikan).
2. **Klaim E2E palsu dipecah:** AC-03/AC-04 kini MANUAL-inti dengan mesin hanya pendukung — mesin tidak pernah lagi mengklaim membuktikan bagian manusia (Bagian D).
3. **Ambang AC-06 dikunci: ≤ 60 detik** (B11, Bagian A, Bagian D, T9) — PRD memang menyerahkan angkanya ke G1; sekarang tertulis.
4. **RLS diratifikasi di G1:** kontrak tertulis di B9 (+F.2) dan risiko miskonfigurasi masuk Bagian E.
5. **Jejak architect dilengkapi:** tabel "Alternatif yang ditolak" kini ada di Bagian B, dan Bagian E menambah 3 risiko (RLS, repo publik, lupa password).

---

## BAGIAN G — Yang sengaja TIDAK diputuskan di G1

Warna & branding final, foto, kalimat copy per halaman, urutan kabar — itu pekerjaan P2 bersama builder selama mengikuti bingkai ini. Yang dikunci di G1: struktur, jalur data, keamanan, dan pecahan tugas.
