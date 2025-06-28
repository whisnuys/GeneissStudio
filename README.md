# Geneiss Studio ✨

[![License: MIT](https://img.shields.io/github/license/whisnuys/GeneissStudio)](https://github.com/whisnuys/GeneissStudio/blob/main/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/whisnuys/GeneissStudio)](https://github.com/whisnuys/GeneissStudio/commits/main)
[![GitHub issues](https://img.shields.io/github/issues/whisnuys/GeneissStudio)](https://github.com/whisnuys/GeneissStudio/issues)
[![GitHub stars](https://img.shields.io/github/stars/whisnuys/GeneissStudio?style=social)](https://github.com/whisnuys/GeneissStudio/stargazers)

**The Genesis of Your Next Project.**

Geneiss Studio adalah sebuah marketplace digital modern yang dibangun dengan tumpukan teknologi terkini. Platform ini dirancang untuk para developer dan desainer untuk membeli dan menjual aset digital berkualitas tinggi seperti template website, UI kit, set ikon, dan lainnya.

![Geneiss Studio Screenshot](https://user-images.githubusercontent.com/10102/188509062-1b3c4aaa-f7f1-4363-a253-764c185a3c94.png)

---

## 🚀 Fitur Utama

-   **🎨 UI Modern & Dark Mode:** Antarmuka yang elegan dan nyaman di mata, dirancang dengan Tailwind CSS.
-   **🔍 Penjelajahan & Filter Produk:** Cari dan filter produk berdasarkan kategori, harga, atau tag dengan mudah.
-   **🔐 Otentikasi Pengguna:** Sistem pendaftaran dan login yang aman menggunakan Supabase Auth.
-   **👤 Dashboard Pengguna:** Halaman khusus bagi pengguna untuk melihat dan mengunduh produk yang telah mereka beli.
-   **⚡ Cepat & Responsif:** Dibangun di atas Next.js App Router untuk performa optimal dan pengalaman pengguna yang lancar di semua perangkat.
-   **🛠️ Siap Dikembangkan:** Fondasi kode yang bersih dan terstruktur dengan TypeScript.

---

## 💻 Tumpukan Teknologi (Tech Stack)

-   **Framework:** [Next.js](https://nextjs.org/) 14+ (App Router)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Bahasa:** [TypeScript](https://www.typescriptlang.org/)
-   **Backend & DB:** [Supabase](https://supabase.io/) (Database, Auth, Storage)
-   **Deployment:** Siap di-deploy di [Vercel](https://vercel.com/)

---

## ⚙️ Memulai (Getting Started)

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di lingkungan lokal Anda.

### 1. Prasyarat

Pastikan Anda telah menginstal Node.js (versi 18.x atau lebih tinggi) dan npm/yarn/pnpm.

### 2. Instalasi

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/whisnuys/GeneissStudio.git](https://github.com/whisnuys/GeneissStudio.git)
    cd GeneissStudio
    ```

2.  **Instal semua dependensi:**
    ```bash
    npm install
    # atau
    # yarn install
    # atau
    # pnpm install
    ```

3.  **Siapkan Environment Variables:**
    Buat salinan dari file `.env.local.example` (jika ada) atau buat file baru bernama `.env.local`.
    
    Isi file `.env.local` yang baru dengan kredensial Supabase Anda. Anda bisa mendapatkannya dari dashboard Supabase di **Settings > API**.

    **.env.local**
    ```env
    # URL Proyek Supabase Anda
    NEXT_PUBLIC_SUPABASE_URL="[https://xxxxxxxxxxxxxx.supabase.co](https://xxxxxxxxxxxxxx.supabase.co)"

    # Anon Key (Public) Proyek Supabase Anda
    NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJh..."
    ```

4.  **Jalankan server pengembangan:**
    ```bash
    npm run dev
    ```

5.  Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

---

## 🗺️ Rencana Pengembangan (Roadmap)

Berikut adalah beberapa fitur yang direncanakan untuk pengembangan selanjutnya:

-   [ ] Integrasi Payment Gateway (Stripe, Midtrans, dll.)
-   [ ] Fitur upload produk untuk para penjual (kreator).
-   [ ] Sistem ulasan dan rating produk.
-   [ ] Halaman profil kreator.
-   [ ] Halaman Dashboard pelanggan

---

## 🤝 Kontribusi

Kontribusi sangat kami hargai! Jika Anda memiliki ide untuk perbaikan atau menemukan bug, silakan [buka issue baru](https://github.com/whisnuys/GeneissStudio/issues/new/choose).

1.  Fork repositori ini.
2.  Buat branch fitur baru (`git checkout -b feature/AmazingFeature`).
3.  Commit perubahan Anda (`git commit -m 'Add some AmazingFeature'`).
4.  Push ke branch tersebut (`git push origin feature/AmazingFeature`).
5.  [Buka sebuah Pull Request](https://github.com/whisnuys/GeneissStudio/compare).

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT. Lihat file `LICENSE` yang ada di repositori untuk detail lebih lanjut.
