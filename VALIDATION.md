# Pemeriksaan versi awal

- Production build `npm run build`: lulus.
- TypeScript `npm run typecheck`: lulus.
- Generator CV Indonesia dan English `npm run cv`: lulus; masing-masing PDF satu halaman.
- 18 route utama dan detail karya dalam kedua bahasa: HTTP 200.
- Layout tanpa horizontal overflow: lebar 320, 390, 768, dan 1440 px.
- Tema light/dark, penyimpanan preferensi, dan perubahan tema sistem: lulus.
- Language switch mempertahankan halaman detail proyek: lulus.
- Dialog CV terbuka, tertutup dengan Escape, dan download menghasilkan PDF: lulus.
- Filter kategori karya: lulus.
- Salin email ke clipboard: lulus.
- Navigasi menu mobile: lulus.
- Route yang tidak tersedia memberikan respons 404.
- Tidak ada error JavaScript halaman selama uji browser.

Screenshot berada di `preview/`. Source belum di-deploy ke akun Vercel Anda. Data dan foto contoh perlu diganti sebelum publikasi pribadi.
