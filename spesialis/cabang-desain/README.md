# PIAGAM TIM DESAIN — ruangan khusus SDLC-HOTL

> **Cabang khusus** sistem: tiga spesialis desain yang bekerja sebagai **satu tim** —
> web designer, UI designer, UX designer. Masing-masing berdaulat atas domainnya,
> tetapi tidak ada yang bekerja sendirian: setiap pekerjaan desain melewati tiga
> pasang tangan sebelum layak dinilai gerbang.

## Penghuni ruangan

| Kartu | Domain | Bertanggung jawab atas |
|---|---|---|
| `spesialis/cabang-desain/ux-designer.md` | Pengguna & perjalanan | Riset kebutuhan, arsitektur informasi, alur, uji pemakaian, aksesibilitas |
| `spesialis/cabang-desain/ui-designer.md` | Antarmuka | Wireframe, komponen, form, navigasi, umpan balik & state |
| `spesialis/cabang-desain/web-designer.md` | Wajah visual | Tata letak halaman, warna, tipografi, citra, identitas visual |

## Alur kerja tim (serah terima wajib)

```
UX (struktur) → UI (kerangka) → Web (wajah) → Uji bersama (pemakaian nyata) → iterasi
```

1. **UX** menyusun struktur: siapa pengguna, apa tugasnya, alur ≤5 langkah.
2. **UI** membangun kerangka di atas struktur: komponen, form, state, umpan balik.
3. **Web** memberi wajah di atas kerangka: tata letak, warna, tipografi, citra.
4. **Tim menguji bersama** dengan pengguna sungguhan (bukan sesama perancang).
5. Temuan uji dikembalikan ke pemilik domain yang relevan — **bukan ditambal diam-diam** oleh domain lain.

Setiap serah terima ditutup **blok tanda tangan penerima** (self-audit kartu ✓):
*"Kerangka yang saya terima cukup untuk mulai bekerja tanpa menebak."*

## Kapan ruangan dipanggil

- Fase desain (P1/G1) setiap PRD baru — sebagai penyusun paket desain, menggantikan/mendampingi architect untuk bagian desain.
- Perombakan tampilan, penambahan halaman, atau temuan kegunaan dari G3/G4.
- Permintaan eksplisit HOTL.

## Aturan ruangan

- **Batas kedaulatan silang:** UX tidak mengubah wajah, Web tidak mengubah alur, UI tidak mengubah struktur. Pelanggaran domain lain → **keberatan terbuka** (tulis di deliverable), bukan koreksi diam-diam.
- **Rantai niat:** setiap keputusan desain harus bisa dilacak ke PRD/putusan HOTL.
- **Bar bersama:** desain yang tidak lolos uji pemakaian = belum selesai, apa pun keindahannya.
- **Satu kesatuan deliverable:** paket desain berisi riset (UX) + antarmuka (UI) + wajah (Web) + ringkasan awam 1 halaman — ditandatangani ketiganya.
