import type { ExperienceItem, Project, SkillsData } from "@/types/portfolio";


export const skillsData: SkillsData = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS'],
  backend: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
  devops: ['Docker', 'Git', 'GitHub Actions', 'Vercel']
};

export const portfolioData: Project[] = [
  {
    id: 1,
    title: "PantryPal - Aplikasi Manajemen Tugas & Groceries",
    tech: ["React.js", "Node.js", "PostgreSQL"],
    images: [
      "src/assets/groceries-main.png",
      "src/assets/groceries-list.png",
      "src/assets/groceries-inventory.png"
    ],
    star: {
      situation: "Banyak aplikasi daftar belanjaan terasa lambat karena setiap kali pengguna mencentang barang yang sudah dibeli, aplikasi harus memuat ulang (reload) seluruh halaman untuk memperbarui statusnya.",
      task: "Membangun aplikasi full-stack pencatat tugas belanjaan yang responsif, bisa mengelompokkan barang berdasarkan kategori, dan menyimpan data secara aman ke server agar tidak hilang saat aplikasi ditutup.",
      action: "Frontend: Membuat tampilan daftar belanja modern yang langsung mencoret teks barang secara otomatis begitu kotak centang diklik pengguna. Backend: Membuat API (Application Programming Interface) untuk mengirim dan menerima data tugas baru, status selesai, serta fitur barang favorit. Database: Merancang tabel database menggunakan PostgreSQL untuk menyimpan daftar belanjaan pengguna secara permanen.",
      result: "Perubahan status tugas (mencoret atau mencentang barang) berjalan instan tanpa perlu memuat ulang (reload) halaman. Aplikasi sukses menyimpan data dengan aman ke server, sehingga pengguna bisa membuka daftar belanjaan yang sama dari perangkat mana saja."
    }
  },
  {
    id: 2,
    title: "LuminaBooks - Aplikasi Rak Buku & Goodreads Clone",
    tech: ["React.js", "Node.js", "PostgreSQL", "Tailwind CSS", "REST API"],
    images: [
      "src/assets/book-main.png",
      "src/assets/book-explore.png",
      "src/assets/book-detail.png"
    ],
    star: {
      situation: "Pecinta buku sering kesulitan melacak buku apa saja yang sedang mereka baca (Currently Reading), koleksi yang mereka miliki (Your Bookshelf), serta mencari rekomendasi buku baru berdasarkan kategori tertentu dalam satu aplikasi yang ringkas.",
      task: "Membangun aplikasi full-stack manajemen rak buku digital yang mampu mengelompokkan buku secara otomatis berdasarkan status bacanya, menghitung persentase kemajuan membaca, dan menampilkan daftar rekomendasi buku.",
      action: "Frontend: Membuat UI modern dengan kartu buku interaktif, menyertakan indikator persentase membaca (56%), dan membuat tombol kategori (Fiction, Biography, Romance) untuk memfilter data secara cepat. Backend: Membuat API untuk mengambil data buku berdasarkan raknya, menghitung rasio halaman yang sudah dibaca, serta menangani pembuatan rak baru (Create Shelf). Database: Merancang database menggunakan PostgreSQL untuk menyimpan data buku, ulasan bintang, dan status rak setiap pengguna secara permanen.",
      result: "Pengguna dapat mengelola dan memindahkan buku antar-rak secara instan tanpa membuat data berantakan atau tertukar. Pemisahan data berdasarkan kategori dan status membaca berjalan sangat cepat dan stabil karena dikelola langsung oleh server dan database."
    }
  },
  {
    id: 3,
    title: "FinFlow - Aplikasi Pengeluar & Money Tracker",
    tech: ["React.js", "Node.js", "PostgreSQL", "Tailwind CSS", "REST API"],
    images: [
      "src/assets/finance-main.png",
      "src/assets/finance-planner.png",
      "src/assets/finance-transaction.png"
    ],
    star: {
      situation: "Banyak orang kesulitan mengontrol pengeluaran bulanan karena catatan keuangan mereka tersebar di berbagai tempat (seperti uang tunai dan rekening bank). Selain itu, tanpa adanya grafik visual yang jelas, pengguna sulit melihat tren pengeluaran mingguan mereka secara instan.",
      task: "Membangun aplikasi full-stack pencatat keuangan yang mampu menghitung total saldo secara otomatis dari berbagai dompet akun, mencatat riwayat transaksi masuk/keluar, serta menampilkan grafik batang (Bar Chart) aktivitas mingguan yang akurat.",
      action: "Frontend: Membuat UI dasbor finansial modern dengan kartu ringkasan pengeluaran besar, fitur sembunyikan saldo (toggle visibility), komponen pemisah akun (Uang Cash & Akun Jenius), serta grafik batang interaktif untuk laporan mingguan. Backend: Membuat API untuk memproses transaksi baru (pemasukan/pengeluaran) serta menyusun logika logika matematika untuk membandingkan total pengeluaran bulan ini dengan bulan lalu (Rp5.000 lebih banyak dari bulan lalu). Database: Merancang database menggunakan PostgreSQL untuk menyimpan data riwayat aktivitas dan menggunakan fungsi agregat SQL (SUM) untuk menghitung dan menjumlahkan saldo total secara waktu nyata (real-time).",
      result: "Aplikasi berhasil melakukan kalkulasi otomatis pada grafik mingguan dan saldo akun secara instan tanpa adanya kesalahan hitung data finansial. Pemisahan pencatatan antara akun bank dan uang tunai membuat pengguna dapat memantau kondisi aset keuangan mereka dengan jauh lebih terstruktur dan transparan."
    }
  },
  {
    id: 4,
    title: "WanderLust - Aplikasi Pemesanan Tiket Wisata",
    tech: ["React.js", "Node.js", "PostgreSQL", "Tailwind CSS", "REST API"],
    images: [
      "src/assets/travel-main.png",
      "src/assets/travel-detail.png",
      "src/assets/travel-booking.png"
    ],
    star: {
      situation: "Banyak pelancong kesulitan menemukan destinasi wisata lokal tersembunyi karena informasi yang tersebar dan tidak terstruktur. Selain itu, sistem pemesanan konvensional sering kali gagal membatasi jumlah pengunjung, menyebabkan penumpukan kapasitas di lokasi wisata pada hari libur.",
      task: "Membangun aplikasi full-stack pariwisata yang mampu menyajikan daftar destinasi secara dinamis berdasarkan filter kategori (Villages, Mountains, Rice Fields, Beach), mengelola detail rincian harga per orang, serta membatasi tiket berdasarkan kapasitas maksimal tempat wisata.",
      action: "Frontend: Membuat antarmuka modern yang ramah pengguna mulai dari halaman penyambutan (Splash Screen), bilah pencarian instan, tombol filter berbentuk kapsul (Popular, Recommendations), hingga halaman detail tempat lengkap dengan indikator kapasitas dan durasi. Backend: Membuat API untuk menangani pencarian kata kunci destinasi, rute pemesanan tiket, serta menyusun fungsi logika untuk memvalidasi ketersediaan slot tiket berdasarkan sisa kuota kapasitas harian lokasi. Database: Merancang database menggunakan PostgreSQL untuk menyimpan data lokasi wisata, koordinat wilayah, kapasitas maksimal, dan riwayat pesanan tiket dari para pengguna secara terintegrasi.",
      result: "Aplikasi berhasil melakukan penyaringan daftar destinasi wisata secara responsif dan akurat sesuai dengan tab kategori yang dipilih pengguna. Sistem pembatasan kuota pengunjung di sisi server berjalan dengan sangat stabil, mencegah terjadinya penjualan tiket melebihi kapasitas fisik lokasi wisata (overcapacity)."
    }
  }
];

export const experienceData: ExperienceItem[] = [
  {
    role: "Senior Full-Stack Developer",
    company: "Tech Solutions Inc.",
    duration: "2024 - Present",
    tasks: [
      "Memimpin pengembangan aplikasi web skala besar menggunakan React dan Node.js.",
      "Mengoptimalkan pipeline CI/CD untuk meningkatkan kecepatan deployment sebesar 40%.",
      "Mengintegrasikan headless CMS Contentful untuk manajemen konten yang dinamis."
    ]
  },
  {
    role: "Full-Stack Web Developer",
    company: "Digital Agency Co.",
    duration: "2022 - 2024",
    tasks: [
      "Membangun dan memelihara aplikasi web klien yang responsif.",
      "Berkolaborasi dengan tim UI/UX untuk slicing desain presisi tinggi."
    ]
  }
];

export const testimonialsData = [
  {
    quote: "Gallant adalah developer yang sangat solutif. Aplikasi Finansial Tracker yang dia bangun berbasis React sangat responsif dan membantu efisiensi pencatatan internal kami hingga 40%.",
    name: "Agung Wijaya",
    role: "Operations Manager",
    company: "XYZ Retail",
    avatarPlaceholder: "AW"
  },
  {
    quote: "Sangat puas bekerja sama dengan Gallant. Kemampuan TypeScript dan state management-nya luar biasa. Aplikasi web internal yang dikerjakan selesai tepat waktu dengan kode yang rapi.",
    name: "Bella Soffie",
    role: "UI/UX Designer",
    company: "Studio Kreatif",
    avatarPlaceholder: "BS"
  },
  {
    quote: "Kode yang ditulis Gallant sangat terstruktur dan bersih (clean code). Dia memikirkan performa sisi client dan optimasi penyimpanan Local Storage dengan sangat matang.",
    name: "Nathan Pitt",
    role: "Lead Software Engineer",
    company: "TechInnova",
    avatarPlaceholder: "NP"
  },
  {
    quote: "Aplikasi e-commerce berbasis React yang dikembangkan Gallant berhasil menaikkan konversi penjualan digital kami. Komunikasinya selama proyek freelance sangat transparan.",
    name: "David Putra",
    role: "Product Owner",
    company: "SaaS StartUp",
    avatarPlaceholder: "DP"
  },
  {
    quote: "Meskipun proyek dikerjakan secara freelance, dedikasi Gallant setara dengan engineer full-time. Penguasaan Tailwind CSS-nya membuat UI aplikasi kami sangat pixel-perfect.",
    name: "Anjas Perkasa",
    role: "Founder",
    company: "E-Logistik ID",
    avatarPlaceholder: "AP"
  },
  {
    quote: "Proyek manajemen tugas yang didevelop Gallant memiliki performa pencarian string yang instan. Ini membuktikan pemahaman logika dasar algoritmanya sangat tajam.",
    name: "Irvan Helmi",
    role: "CTO",
    company: "Medika Digital",
    avatarPlaceholder: "IH"
  }
];
