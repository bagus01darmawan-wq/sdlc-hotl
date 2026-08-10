# SDLC-HOTL

**Tata kelola siklus pengembangan perangkat lunak (SDLC) yang dieksekusi oleh agen AI dan diawasi seorang HOTL (human-on-the-loop) tanpa kapabilitas teknis, dengan hak veto mutlak.**

> HOTL memegang "apa" dan "mengapa"; sistem memegang "bagaimana" dan "bukti".
> Tidak ada klaim yang bisa hidup tanpa bukti.

## Cara masuk

- **Agen AI:** baca `AGENTS.md` terlebih dahulu (Protokol Bangun) — wajib sebelum bekerja apa pun.
- **Manusia:** baca `00-Konstitusi-HOTL.md` (±10 menit), lalu `STATUS.md` untuk posisi terkini.

## Isi repo

| Berkas | Fungsi |
|---|---|
| `AGENTS.md` | Protokol hidup sistem: Bangun, Tutup Sesi, Tumbuh |
| `STATUS.md` | Ingatan sistem: posisi, putusan tertunda, langkah berikutnya |
| `00-Konstitusi-HOTL.md` | Hukum tertinggi (9 pasal) + decision log |
| `01-Checklist-Gerbang.md` | Formulir gerbang G0–G4 + stop-loss |
| `02-Template-PRD.md` | Template PRD berbahasa awam |
| `03-PRD-001-Website-LAZISNU.md` | PRD pertama (dry run): Website Identitas LAZISNU |
| `scripts/validate.js` | Pemeriksa otomatis yang dijalankan CI |
| `.github/` | Workflow CI + template PR (format vonis 4 baris) |

## CI: gerbang tata kelola

Setiap push dan pull request menjalankan `scripts/validate.js`, yang memeriksa:

1. Berkas wajib sistem lengkap,
2. Tidak ada referensi antardokumen yang patah,
3. Setiap PRD mengikuti struktur G0 dan memiliki acceptance criteria yang bisa diuji,
4. `STATUS.md` segar (tanggal "Terakhir diperbarui" valid),
5. Decision log konstitusi utuh, dan parameter `[KALIBRASI]` terhitung.

Merah = tidak boleh digabung (fail-closed). Jalankan di lokal:

```
node scripts/validate.js
```

## Status

Fase F1 — persiapan dry run PRD-001 (Website Identitas LAZISNU). Lihat `STATUS.md`.
