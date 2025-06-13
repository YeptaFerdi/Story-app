# Story Day

Aplikasi adalah aplikasi berbasis web yang memungkinkan pengguna untuk mencari dan mengadopsi story peliharaan. Aplikasi ini menggunakan Leaflet untuk peta interaktif, MVP (Model-View-Presenter) untuk arsitektur aplikasi, dan menyediakan fitur login dan registrasi pengguna.

---

## 🎨 Desain dan Penggunaan

Aplikasi dirancang dengan UI yang ramah pengguna dan mobile-friendly. Pengguna dapat:

- Melihat daftar story peliharaan
- Melihat lokasi story di peta
- Menambahkan cerita baru
- Mengakses fitur dengan akun terautentikasi

---

## 📦 Fitur Utama

✅ Daftar story peliharaan dengan gambar, nama, spesies, deskripsi  
✅ Peta interaktif (Leaflet) dengan marker dan popup lokasi  
✅ Tambah story baru + lokasi pada peta  
✅ Login & Register pengguna (dengan validasi)  
✅ Detail story lengkap + navigasi peta  
✅ Desain responsif (mobile-first)  
✅ Arsitektur MVP (Model-View-Presenter)  
✅ Notifikasi push & service worker  
✅ Offline-first (tersedia halaman offline)

---

## 📂 Struktur Project

```plaintext
story-day/
├── asset/
│   ├── favicon.png
│   ├── icons/
│   └── screenshots/
├── public/
│   ├── manifest.json
│   ├── offline.css
│   ├── offline.html
├── src/
│   ├── component/
│   │   ├── Spinner.js
│   │   └── StoryForm.js
│   ├── model/
│   │   ├── AuthModel.js
│   │   └── StoryModel.js
│   ├── presenter/
│   │   ├── AuthPresenter.js
│   │   └── StoryPresenter.js
│   ├── view/
│   │   ├── AddView.js
│   │   ├── HomeView.js
│   │   ├── LoginView.js
│   │   ├── RegisterView.js
│   │   └── MystoryView.js
│   ├── scripts/
│   │   └── loader.js
│   ├── utils/
│   │   ├── SessionHelper.js
│   │   ├── camera.js
│   │   ├── story-db.js
│   │   └── web-push-init.js
│   └── sw.js
│   ├── index.js
│   ├── router.js
│   ├── add.css
│   └── style.css
├── index.html
├── app.js
├── README.md
├── STUDENT.txt
├── .prettierrc
├── .babelrc
├── .gitignore
├── package.json
├── webpack.common.js
├── webpack.dev.js
└── webpack.prod.js
```

### 📌 Keterangan:

-`asset/icons/` → Menyimpan gambar logo -`component/` → Berisi komponen-komponen UI, seperti spinner untuk loading -`model/` → Berisi model data untuk story peliharaan dan autentikasi -`presenter/` → Berisi presenter untuk pengelolaan data dan komunikasi antara model dan view -`view/` → Berisi view untuk halaman utama, login, dan registrasi -`index.html` → Halaman HTML yang menjalankan aplikasi - -`package.json` → Konfigurasi proyek dan dependensi

---

## ⚙️ Cara Install & Menjalankan

### 1️⃣ Install dependensi

```bash
npm install
```

### 2️⃣ Menjalankan aplikasi

```
npm start
```

## Scripts

// ▶️ Development server (localhost:9000)
`start-dev`
// 🏗 Production build for GitHub Pages (publicPath: /Story-app/)
✅ `npm run build`: Membuat build production menggunakan Webpack.
// 📦 Build untuk lokal (publicPath: /)
✅ `nmp build:local`
// 🌍 Build khusus untuk netlify(fallback jika deploy manual)
✅ `build:netlify`
// 🚀 Serve folder dist (setelah build)
✅ `npx serve --listen 9000 dist` : Menjalankan server HTTP pakai Servis Worker di port:9000
// 💄 Code formatter check & write
✅ `npm run prettier`: Memeriksa format kode menggunakan Prettier.
✅ `npm run prettier:write`: Memformat ulang kode menggunakan Prettier.

### LINK

Link deployment ada di STUDENT.txt
