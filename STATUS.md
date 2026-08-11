# STATUS SISTEM — ingatan SDLC-HOTL

**Terakhir diperbarui:** 2026-08-12 (wajib diperbarui di akhir setiap sesi — lihat Protokol Tutup Sesi di `AGENTS.md`)

> **Ringkas untuk agen yang baru bangun:** Konstitusi v0.1 diratifikasi. Dry run PRD-001 (Website LAZISNU) sudah jauh: situs **LIVE di https://png.lazisnu.site**, tes QA Gelombang-1 & 2 (11 tes) **hijau semua di CI**, database schema `lazisnu` aktif, dan cabang khusus Tim Desain (web/UI/UX designer) baru lahir (PR #12/#13). **Tim Desain lulus ujian pertamanya 2026-08-12: paket desain form admin selesai (5 deliverable, 16 putusan HOTL GO), P0+P1+struktur besar LIVE di main dan ter-deploy (PR website #12/#13/#14, GO HOTL 2026-08-12), sisa R10/R12/R14 + wajah Web.** Yang menunggu HOTL: sesi latihan admin (T12), QRIS opsional, lalu G3 (gelombang tes 3). Trust level 0 = semua langkah menunggu putusan HOTL.

---

## 1. Di mana kita sekarang

- **Fase:** **F1 (dry run)** — PRD-001 lolos P0 ✅ dan P1 ✅ (2026-08-10). **P2 nyaris tuntas:** pembangunan T1–T10 selesai, tes QA G1+G2 11/11 hijau di CI; tersisa T12 (latihan admin), QRIS opsional, vonis G2/G3 oleh reviewer independen, dan rilis resmi G3.
- **Trust level:** 0 (Magang / HITL penuh)
- **Proyek dry run:** Website Identitas LAZISNU — `03-PRD-001-Website-LAZISNU.md`; repo **publik** `bagus01darmawan-wq/website-lazisnu` (main diproteksi, CI 3 job: tes-qa, pemindai-rahasia gitleaks, build).
- **Situs live:** https://png.lazisnu.site — HTTP 200, sertifikat Let's Encrypt valid; VM Tencent 43.128.98.52 (SSH alias `lazisnu`, Ubuntu 22.04.5, nginx container `lazisnu-nginx-1`, vhost di `/opt/lazisnu/nginx/nginx.conf` + backup `.bak-20260811`).
- **Database:** Supabase `lazisnu-app` (ref `yuhedftrrbitmxcyhfgp`), schema `lazisnu` — 4 tabel (angka_dana, kabar_penyaluran, riwayat_angka, konten_halaman), RLS kontrak F.2 (anon baca terbatas, tulis 401; admin INSERT+SELECT+UPDATE, riwayat append-only), 2 akun admin; data live: periode 2026 terkumpul/tersalur Rp 2.500.000, kabar "santunan anak yatim". Kredensial di `PRIBADI-JANGAN-DIUNGGAH.md` + `D:\bukti-builder\admin-akun.txt` (lokal, gitignored).
- **Alat tersedia:** opencode, Trae IDE, Antigravity IDE, hermes agent (builder = **hermes**; MCP Supabase terpasang di hermes).
- **Infra tata kelola:** repo **publik** `bagus01darmawan-wq/sdlc-hotl`, main diproteksi (semua lewat PR + CI `gerbang-tata-kelola`); `PRIBADI-JANGAN-DIUNGGAH.md` lokal saja.
- **Cabang khusus:** `spesialis/cabang-desain/` — Tim Desain (web designer, UI designer, UX designer), diratifikasi HOTL 2026-08-11 (PR #12, catatan PR #13); jejak pakar masih kosong, menunggu tugas desain nyata.

## 2. Yang menunggu putusan HOTL

| # | Hal | Sejak | Tergantung jawaban HOTL tentang |
|---|---|---|---|
| 1 | **Sesi latihan admin (T12)** — ±30 menit, 2 admin diajari mengisi form (butuh HOTL hadir) | 2026-08-11 | Jadwal sesi |
| 2 | **QRIS** — belum ada, akan menyusul (putusan HOTL 2026-08-12): **TIDAK memblokir**; sediakan slot + placeholder `[dari database]`; gambar dipasang saat tersedia → TQ-04a menyesuaikan | 2026-08-11 | Gambar QRIS (menyusul) |
| 3 | **G3** — panggil QA-agent gelombang-3 (TQ-04a, TQ-06, TQ-07, TQ-08, TQ-O4) | 2026-08-11 | Kapan dimulai |
| 4 | **GO PR website #15 (validasi aplikasi)** — R14 galat kolom, R12 URL foto https://, R10 fallback tanggal id-ID; CI 3/3 hijau, menunggu GO | 2026-08-12 | Merge ke main website |

## 3. Pekerjaan aktif (cermin tabel pelacakan)

| ID | Pekerjaan | Tahap | Pemegang saat ini | Menunggu HOTL sejak | Status |
|---|---|---|---|---|---|
| PRD-001 | Website Identitas LAZISNU | P2 — T1–T10 selesai, tes G1+G2 11/11 hijau | hermes (builder) | — | **Situs LIVE** + CI hijau; menunggu T12/G3/vonis reviewer |
| SISTEM | Cabang khusus Tim Desain | Diratifikasi | — | — | **AKTIF** (PR #12/#13) — ujian pertama LULUS 2026-08-12 |
| DESAIN-T8 | Paket desain form admin (Tim Desain: riset UX + antarmuka UI + wajah Web) | P0+P1+STRUKTUR BESAR LIVE (PR #12/#13/#14 + deploy, GO 2026-08-12); VALIDASI R10/R12/R14 di PR website #15 menunggu GO — sisa: wajah Web W1–W20 | hermes (builder) | GO PR #15 | **R7–R14 sebagian besar live; validasi menunggu GO** |

## 4. Langkah berikutnya (siapa melakukan apa)

1. **Builder (hermes):** setelah GO PR website #15 — gelombang terakhir paket: wajah Web W1–W20 (palet hijau tua #0B3D2E + emas, mode gelap penuh, chip nav, fokus 2px).
2. **HOTL:** tentukan jadwal sesi latihan admin (T12) — 2 akun admin siap di `D:\bukti-builder\admin-akun.txt`.
3. **QRIS (putusan HOTL 2026-08-12):** belum ada, akan menyusul — builder sediakan slot + placeholder `[dari database]` (sudah di P0); gambar dipasang saat tersedia.
4. **Reviewer (independen):** vonis G2 dengan bukti demo per AC; lalu **QA-agent** gelombang-3 (G3) untuk sisa tes.
5. **HOTL:** ratifikasi G2/G3 → rilis resmi (G3) + pencatatan hasil kalibrasi pertama.

## 5. Pelajaran tercatat

- 2026-08-10 — Sistem harus hidup di **berkas, bukan sesi**. Maka lahir `AGENTS.md` + `STATUS.md` + tiga protokol (Bangun, Tutup Sesi, Tumbuh).
- 2026-08-10 — Konstitusi kini **ditegakkan mesin**: CI `gerbang-tata-kelola` memeriksa setiap perubahan (fail-closed). Janji jadi bukti.
- 2026-08-10 — Proteksi diuji dengan memakainya: pencatatan proteksi dilakukan lewat **PR pertama** yang dijaga CI (self-test).
- 2026-08-10 — Kritik HOTL "klaim spesialisasi belum terbukti" melahirkan doktrin spesialis: pakar harus **berkontrak dan meninggalkan jejak**, bukan dipercaya begitu saja.
- 2026-08-10 — Insiden **bukti basi**: vonis reviewer ke-3 menilai versi lama G1. Antibodi: setiap artefak yang dinilai wajib punya **penanda versi**, dan setiap vonis wajib mengutipnya.
- 2026-08-10 — Desain lolos lewat lintasan **5 vonis**. Gerbang yang berputar adalah fitur: keamanan dibeli dengan perbaikan dokumen, bukan insiden produksi.
- 2026-08-11 — **Insiden rahasia di tes QA G2**: kredensial admin sempat ter-hardcode di berkas tes → **gitleaks menangkapnya** (SEC-02 bekerja) → riwayat ditulis ulang bersih. Pelajaran: kredensial hanya lewat env/secret, tidak pernah di berkas.
- 2026-08-11 — **Bug Content-Profile**: form admin gagal simpan (HTTP 404) karena header `Content-Profile` tidak dikirim pada operasi tulis — lolos uji curl manual yang menambahkan header. Pelajaran: uji harus lewat jalur kode yang sama dengan pengguna.
- 2026-08-11 — **Cabang khusus Tim Desain lahir** (atas permintaan HOTL): `spesialis/cabang-desain/` — piagam + 3 kartu (web designer, UI designer, UX designer); validator diperluas ke 9 kartu; jejak pakar masih kosong.
- 2026-08-11 — Kritik HOTL "STATUS.md tidak mencatat perkembangan" → **Protokol TONGGAK** (AGENTS.md §3): agen wajib memperbarui STATUS.md pada setiap pergerakan, bukan hanya tutup sesi; pilihan HOTL: protokol saja, tanpa mesin otomatis.
- 2026-08-11 — **Revisi tata kelola Tim Desain** (dari tinjauan Sonnet 5 + persetujuan HOTL): 9 poin kelemahan teridentifikasi, 8 diperbaiki (poin 4/eskalasi konflik dikecualikan HOTL). Perubahan: §5 UX/UI kini bergigi (bukti ISO 9241-210 + WAI-ARIA APG wajib disebut konkret), kejujuran ukuran sampel wajib, kepemilikan ringkasan awam diperjelas (UX merakit), plain language masuk standar terukur, aturan propagasi revisi mundur lahir, batas domain keamanan/privasi dicatat. Dua pertanyaan terbuka baru masuk PRD-001 §7 no. 6 & 7.
- 2026-08-11 — **Jawaban HOTL menutup PRD-001 §7 no. 6–7**: target Android 10–16 + riset top-5 HP/browser Indonesia; situs sepenuhnya Bahasa Indonesia. Baris #5–#6 tabel "Menunggu putusan" dihapus dari STATUS.md (Protokol TONGGAK).
- 2026-08-11 — **PR #16 DIRATIFIKASI (GO) oleh HOTL**: revisi tata kelola Tim Desain (standar-rujukan.md + 3 kartu bergigi standar) + jawaban PRD-001 §7 no. 6–7 resmi masuk main (merge commit `fdcdc70`).
- 2026-08-12 — **Ujian pertama Tim Desain LULUS**: paket desain form admin (matriks target + riset UX 15 hambatan + kerangka UI K1–K14 + wajah Web W1–W20 + ringkasan awam) dihasilkan lewat arsitektur sub-agent "satu kartu = satu spawn" (acuan: `D:\subagent-arsitektur\keluaran\`); 16 keberatan spesialis direkap, **HOTL GO semua putusan** (2026-08-12); klaim standar seluruhnya ESTIMASI — uji nyata wajib di T12/G3. Pelajaran proses: sub-agent fail-closed jujur (2× berhenti tanpa mengarang bukti); file `gsm-*.html` terbukti invalid → profil perangkat "entry 2–4 GB" = asumsi (putusan #14: lanjut, riset ulang opsional).
- 2026-08-12 — **Putusan QRIS HOTL**: belum ada tetapi akan menyusul — **tidak memblokir apa pun**; builder menyiapkan slot + placeholder `[dari database]`, gambar dipasang saat tersedia; tes TQ-04a menyesuaikan.
- 2026-08-12 — **P0 paket desain TERIMPLEMENTASI**: PR #12 website-lazisnu merged (commit `90bc129`) — R1 (angka "2.500.000" bertitik diterima), R2 (banner muat-gagal + "Muat Ulang" + Simpan nonaktif), slot QRIS `[dari database]`; CI 3/3 hijau (tes-qa 11/11, gitleaks, build); MERAH awal berbukti browser nyata (CDP). P1 (R3/R4/R5/R6/R13) menyusul sebelum G3.
- 2026-08-12 — **P1 paket desain TERIMPLEMENTASI**: PR #13 website-lazisnu merged (commit `6544382`) — R3/R4 (nol kode HTTP; jaringan/server/sesi-mati dibedakan; isian tidak dibuang saat 401), R5 (loading + tolak simpan ganda), R6 (tersalurkan ≤ terkumpul), R13 (banner sukses sebelum→sesudah + "Lihat di situs"); CI 3/3 hijau. Sisa struktur besar (R7/R8/R9/R11) = gelombang berikutnya.
- 2026-08-12 — **Struktur besar TERIMPLEMENTASI** (PR website #14, menunggu GO): R11 4 layar tugas (`#layar=angka|kabar|donasi|tentang`, isian lintas layar tidak hilang, K2 layar pertama = Angka), R7 daftar kabar + Ubah/Batal + Sembunyikan (PATCH `terbit=false`, jalur sah F.2), R8 dialog konfirmasi terbit (Escape = batal tanpa simpan; kabar terbit simpan langsung), R9 tautan Admin chip di header semua halaman, K7 tanggal = hari ini; bukti MERAH-awal + tontonan di `D:\bukti-builder\struktur-besar\`; lokal & CI 11/11 hijau.
- 2026-08-12 — **Pitfall TQ-10**: pemindai tautan QA menganggap `admin.html?layar=x` TAUTAN RUSAK (query string tak di-resolve ke berkas) → navigasi layar memakai hash `#layar=` (tetap URL sendiri per layar, bisa di-refresh, TQ-10 hijau). Keputusan mikro tercatat di body PR website #14.
- 2026-08-12 — **Decision log tertinggal dirapikan**: baris ratifikasi PR #16 (PR #17) dan putusan PR #18/#19/#20 sempat tidak tercatat di Apendiks B (tercatat di Pelajaran) — satu PR pencatatan merapikan semuanya (PR #21).
- 2026-08-12 — **GO + deploy struktur besar**: PR website #14 merged (`01624e3`, GO HOTL) + `scripts/deploy-vm.sh` → fitur LIVE di https://png.lazisnu.site (terverifikasi: `tautan-admin` di header publik, `layar-nav` di admin.html); repo tetap bersih (template dipulihkan skrip).
- 2026-08-12 — **Validasi aplikasi TERIMPLEMENTASI** (PR website #15, menunggu GO): R14 galat kolom kosong per kolom (required native diganti pesan aplikasi Bahasa Indonesia ≤20 kata + fokus kolom pertama salah), R12 URL foto `type="text"` + wajib https://, R10 fallback tanggal manual id-ID ("11 Agustus 2026" ter-parse ke ISO, galat verbatim) + pintu uji `LAZISNU_PAKSA_TANGGAL_TEKS` untuk G3; bukti di `D:\bukti-builder\validasi-form\`; lokal & CI 11/11 hijau.

## 6. Hasil kalibrasi

(belum ada — menunggu data dry run pertama; target angka ada di Apendiks A konstitusi)
