# Story Day

Aplikasi adalah aplikasi berbasis web yang memungkinkan pengguna untuk mencari dan mengadopsi story peliharaan. Aplikasi ini menggunakan Leaflet untuk peta interaktif, MVP (Model-View-Presenter) untuk arsitektur aplikasi, dan menyediakan fitur login dan registrasi pengguna.

---

## 🎨 Desain dan Penggunaan

Aplikasi ini dirancang untuk memberikan pengalaman pengguna yang sederhana dan intuitif. Setiap story peliharaan akan ditampilkan dengan gambar, nama, spesies, dan deskripsi. Lokasi story peliharaan akan ditunjukkan pada peta dengan menggunakan Leaflet, dan pengguna dapat berinteraksi dengan marker peta untuk melihat detail lebih lanjut.

---

## 📦 Fitur

✅ Menampilkan daftar story peliharaan yang tersedia untuk diadopsi
✅ Menampilkan peta interaktif dengan marker dan popup menggunakan Leaflet
✅ Menambahkan story peliharaan baru dengan data gambar, nama, spesies, deskripsi, dan lokasi
✅ Halaman login dan registrasi untuk autentikasi pengguna
✅ Menampilkan halaman detail story dengan informasi lengkap dan peta lokasi
✅ Desain responsif yang ramah perangkat mobile
✅ Penggunaan Model-View-Presenter (MVP) untuk pengelolaan data dan tampilan aplikasi

---

## 📂 Struktur Project

```plaintext
story-day/
├── asset/
│   └── icons/
│   └── screenshots/
├── public/
│   └── manifest.json
│   └── offline.css
│   └── offline.html
│   └── sw.js
├── src
│   └──component/
│   │   └── Spinner.js
│   │   └── StoryForm.js
│   ├── model/
│   │   └── StoryModel.js
│   │   └── AuthModel.js
│   ├── presenter/
│   │   └── StoryPresenter.js
│   │   └── AuthPresenter.js
│   ├── view/
│   │   └── AddView.js
│   │   └── HomeView.js
│   │   └── MystoryView.js
│   │   └── LoginView.js
│   │   └── RegisterView.js
│   ├── scripts/
│   │   └── loader.js
│   ├── utils/
│   │   └── SessionHelper.js
│   │   └── camera.js
│   │   └── story-db.js
│   │   └── web-push-init.js
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

✅ `npm run build`: Membuat build production menggunakan Webpack.
✅ `npm run prettier`: Memeriksa format kode menggunakan Prettier.
✅ `npm run prettier:write`: Memformat ulang kode menggunakan Prettier.
✅ `npx serve --listen 9000 dist` : Menjalankan server HTTP pakai Servis Worker di port:9000

### LINK
Link deployment ada di STUDENT.txt