# Portofolio Mahasiswa Akuntansi

Website Next.js App Router + TypeScript + Tailwind CSS, siap dijalankan secara lokal dan di-deploy ke Vercel.

Desain corporate memakai soft sage, warm ivory, navbar solid, separator tipis, dan layout yang tidak bergantung pada kartu dekoratif. Tersedia tema light/dark/system dan konten Indonesia/English. Semua konten berada di `src/data/global.ts`.

> Seluruh nama, kampus, IPK, pengalaman, sertifikat, prestasi, kontak, dan karya awal adalah **data contoh**. Foto merupakan portrait fiktif yang dibuat dengan AI. Ganti informasi dan aset sebelum mempublikasikan sebagai portofolio pribadi.

## 1. Menjalankan project

Gunakan Node.js 22 LTS atau versi yang lebih baru yang didukung Next.js (minimum project: 20.9).

```bash
cd accounting-portfolio
npm ci
npm run dev
```

Buka `http://localhost:3000`. Halaman `/` mengarahkan ke bahasa default (`/id`).

Perintah lainnya:

```bash
npm run typecheck  # periksa TypeScript
npm run cv         # buat ulang CV PDF Indonesia dan English dari data global
npm run build     # build production
npm run start     # jalankan hasil build
```

## 2. Mengubah konten di satu file

Edit **`src/data/global.ts`**. Komponen mengambil data dari file ini; tidak perlu mengubah JSX untuk mengganti isi.

| Bagian                     | Data yang diubah                                                        |
| -------------------------- | ----------------------------------------------------------------------- |
| `portfolio.profile`        | Nama, inisial logo, role, foto, lokasi, email, intro, about, CV, sosial |
| `portfolio.education`      | Kampus, jurusan, periode, semester, IPK, mata kuliah                    |
| `portfolio.experience`     | Magang/kerja dan organisasi; `kind` berisi `work` atau `organization`   |
| `portfolio.skills`         | Kelompok skill, nama skill, deskripsi, dan tingkat praktik              |
| `portfolio.projects`       | Judul karya, slug URL, deskripsi, tools, proses, hasil, tautan file     |
| `portfolio.projectPreview` | Angka contoh untuk visual laporan, anggaran, dan rasio                  |
| `portfolio.certifications` | Pelatihan/sertifikat dan link credential bila tersedia                  |
| `portfolio.achievements`   | Prestasi, deskripsi, tahun                                              |
| `portfolio.site`           | Nama website, domain, deskripsi, bahasa default                         |
| `navigation` dan `ui`      | Label menu dan semua teks antarmuka bilingual                           |

Contoh:

```ts
profile: {
  name: 'Nama Lengkap Anda',
  initials: 'NA',
  role: text('Mahasiswa Akuntansi', 'Accounting Student'),
  university: 'Nama Universitas',
  email: 'emailanda@domain.com',
  // ...
}
```

Teks bilingual menggunakan `text('Bahasa Indonesia', 'English')`. Isi kedua versi agar perubahan tampil di kedua bahasa. Nama universitas dan nama orang menggunakan string biasa.

Untuk IPK: ubah `gpa`, `gpaMax`, dan `showGpa` pada entri pendidikan. Home mengambil pendidikan pertama sebagai pendidikan utama. Data pengalaman bisa ditambah/dikurangi dengan menambah/menghapus objek dalam array.

## 3. Mengganti foto

1. Simpan foto di `public/images/foto-anda.webp` (JPG/PNG juga boleh).
2. Ubah `portfolio.profile.photo` menjadi `/images/foto-anda.webp`.
3. Ubah `photoAlt` di kedua bahasa.

Foto potret sekitar 4:5 paling cocok. Foto bawaan disimpan di `public/images/profile-example.webp`.

## 4. CV: preview dan download

Preview membuka dialog PDF dengan tombol download serta link buka PDF di tab baru sebagai alternatif untuk browser yang tidak menampilkan PDF inline. Dialog mendukung Escape dan pengembalian fokus bawaan browser.

**Pilihan A — CV otomatis dari data global**

Setelah mengganti data:

```bash
npm run cv
```

Perintah menghasilkan `public/documents/cv-id.pdf` dan `cv-en.pdf`. Generator membaca file global sehingga nama, pendidikan, pengalaman, skill, karya, sertifikasi, dan prestasi tetap sesuai. Jalankan ulang saat data berubah; PDF bukan file yang diperbarui otomatis oleh browser. Generator memakai font Latin standar yang cocok untuk bahasa Indonesia dan English.

**Pilihan B — CV pribadi yang sudah jadi**

Letakkan PDF Anda di `public/documents/`, lalu ubah `portfolio.profile.cv.id`, `.en`, dan `.filename`. Jangan menjalankan generator jika ingin mempertahankan file CV pribadi pada lokasi yang sama.

## 5. Karya dan sertifikat

Setiap karya memiliki halaman detail sendiri pada `/id/projects/[slug]` dan `/en/projects/[slug]`.

- `featured: true` menampilkan karya di Home.
- `visual` tersedia sebagai `ledger`, `budget`, atau `ratios`; angka contoh berada di `projectPreview`.
- `fileUrl` bisa diisi `/documents/nama-karya.pdf` atau file lokal lain. Tombol download tampil jika ada URL.
- `liveUrl` bisa diisi tautan proyek eksternal. Tombol buka proyek tampil jika ada URL.
- `credentialUrl` dapat diisi untuk menampilkan tombol sertifikat.
- Nilai kosong tidak menghasilkan tautan palsu.

Visual laporan menggunakan data simulasi dan menampilkan label “Data contoh”. Jika ingin menampilkan data nyata, ubah angkanya serta label `ui.example` sesuai konteks. Jangan menaruh dokumen atau informasi perusahaan yang tidak boleh dipublikasikan.

Alamat sosial bawaan mengarah ke halaman utama LinkedIn/Instagram; ubah `url` dan `handle` menjadi profil pribadi Anda. Kontak memakai `mailto:` dan tombol salin email, tanpa backend form atau pengiriman email otomatis.

## 6. Bahasa dan tema

- Indonesia: `/id`, `/id/about`, `/id/experience`, `/id/skills`, `/id/projects`, `/id/contact`.
- English: `/en` dengan struktur halaman yang sama.
- Mengganti bahasa mempertahankan route saat ini, termasuk detail karya.
- Tema `system` mengikuti pengaturan OS secara langsung; `light`/`dark` adalah pilihan manual.
- Preferensi tema disimpan di browser dan diterapkan sebelum halaman tampil untuk mengurangi kilatan tema.
- Menu mobile mendukung status expanded dan bisa ditutup dengan Escape.

Warna berada di bagian `:root` dan `[data-theme="dark"]` dalam `src/app/globals.css`. Gunakan nilai yang kontras untuk teks; warna background yang soft tidak berarti teks ikut dibuat pucat.

## 7. Deploy ke Vercel

1. Ekstrak ZIP, jalankan `npm ci`, lalu ganti data contoh, foto, dan kontak.
2. Jalankan `npm run cv` jika menggunakan CV otomatis.
3. Jalankan `npm run typecheck` dan `npm run build`.
4. Upload source project ke repository GitHub Anda. Jangan sertakan `node_modules` atau `.next`.
5. Di Vercel pilih **Add New → Project**, lalu import repository.
6. Gunakan **Framework Preset: Next.js**. Jika repository berisi folder induk, pilih folder yang berisi `package.json` sebagai **Root Directory**.
7. Build command: `npm run build`; install command: `npm ci`. Output Directory biarkan default Next.js. Tidak perlu environment variable.
8. Setelah mendapat domain, isi `portfolio.site.url` dengan URL lengkap, misalnya `https://nama-anda.vercel.app`, tanpa garis miring terakhir, lalu deploy ulang. Ini mengaktifkan sitemap dan alternate-language URLs.

Referensi resmi: [Next.js installation](https://nextjs.org/docs/app/getting-started/installation), [Next.js on Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs), [Git deployments](https://vercel.com/docs/git).

## Struktur

```text
accounting-portfolio/
  src/
    app/
      [locale]/
        page.tsx
        about/page.tsx
        experience/page.tsx
        skills/page.tsx
        projects/page.tsx
        projects/[slug]/page.tsx
        contact/page.tsx
        layout.tsx
      globals.css
      layout.tsx
      page.tsx
      not-found.tsx
      robots.ts
      sitemap.ts
    components/
      pages.tsx
      portfolio-shell.tsx
      projects.tsx
    data/global.ts
  public/
    images/profile-example.webp
    documents/cv-id.pdf
    documents/cv-en.pdf
    icon.svg
  scripts/generate-cv.mjs
  package.json
  package-lock.json
```

## Catatan desain dan aksesibilitas

Body text 16 px, keyboard focus terlihat, skip link, menu mobile, native dialog, label grafik, responsive layout, dan `prefers-reduced-motion`. Keterampilan ditampilkan sebagai deskripsi kemampuan serta tingkat praktik, tanpa skor persentase yang tidak terukur.

Foto contoh dibuat memakai built-in image generation. Brief: portrait editorial mahasiswa Indonesia fiktif, kemeja putih dan blazer charcoal, ekspresi tenang, cahaya lembut, latar warm gray, framing 4:5, tanpa teks atau logo. Lokasi aset: `public/images/profile-example.webp`.
