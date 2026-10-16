/**
 * SATU TEMPAT UNTUK SELURUH KONTEN PORTOFOLIO.
 * Sesuaikan konten bilingual di sini dengan informasi pemilik portofolio.
 * Ubah nilai id/en untuk konten bilingual. Letakkan file di public/ lalu gunakan /nama-file.
 * Skill memakai deskripsi kemampuan, bukan persentase yang tidak terukur.
 */
export type Locale = "id" | "en";
export type Localized = Record<Locale, string>;
export const locales: Locale[] = ["id", "en"];
export const text = (id: string, en: string): Localized => ({ id, en });
export const localize = (value: Localized, locale: Locale) => value[locale];
export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

export const portfolio = {
  site: {
    name: "Icha Ferianti Nur — Portofolio",
    // Isi domain sesudah deploy agar canonical & metadataBase memakai domain Anda.
    url: "https://ichafebriantinur.vercel.app/",
    description: text(
      "Portofolio Icha Ferianti Nur, mahasiswa Akuntansi  UIN Walisongo Semarang.",
      "Portfolio of Icha Ferianti Nur, a  Accounting student at UIN Walisongo Semarang.",
    ),
    defaultLocale: "id" as Locale,
  },
  profile: {
    name: "Icha Ferianti Nur",
    initials: "IFN",
    role: text("Mahasiswi Akuntansi ", " Accounting Student"),
    university: "UIN Walisongo Semarang",
    degree: text("Sarjana Akuntansi ", "Bachelor of  Accounting"),
    location: "Kota Semarang, Jawa Tengah",
    photo: "/images/febbyy.svg",
    photoDark: "/images/febbyy-dark.svg",
    photoAlt: text(
      "Logo Icha Febrianti Nur",
      "Icha Febrianti Nur logo",
    ),
    email: "ichafebriantinur@gmail.com",
    availability: text(
      "Terbuka untuk kesempatan magang",
      "Open to internship opportunities",
    ),
    intro: text(
      "Mahasiswi Akuntansi  yang tertarik berkontribusi dalam pengelolaan data ekonomi daerah dan pelaporan keuangan instansi pemerintah.",
      "A  Accounting student interested in contributing to regional economic data management and financial reporting for government institutions.",
    ),
    summary: text(
      "Saya mahasiswi Akuntansi  yang memiliki pengalaman mengembangkan dan menerapkan strategi kreatif. Saya memiliki kemampuan komunikasi, pemecahan masalah, dan manajemen waktu, serta aktif dalam organisasi yang mendukung pengembangan diri. Saya siap berkontribusi dalam kegiatan pemagangan dengan pemahaman ilmu yang relevan untuk mendukung pengelolaan data ekonomi daerah dan pelaporan keuangan instansi pemerintah.",
      "I am a  Accounting student with experience developing and implementing creative strategies. I bring communication, problem-solving, and time-management skills, and actively participate in organizations that support personal development. I am ready to contribute to an internship by applying relevant knowledge to regional economic data management and government financial reporting.",
    ),
    about: [
      text(
        "Saya menempuh studi Akuntansi  di UIN Walisongo Semarang sejak 2023. Mata kuliah yang relevan dengan minat saya meliputi Akuntansi Sektor Publik, Sistem Informasi Akuntansi, dan Analisis Laporan Keuangan.",
        "I have studied  Accounting at UIN Walisongo Semarang since 2023. Relevant coursework includes Public Sector Accounting, Accounting Information Systems, and Financial Statement Analysis.",
      ),
      text(
        "Pengalaman organisasi dan proyek akademik membantu saya mengembangkan komunikasi, pemecahan masalah, manajemen waktu, serta pemahaman tentang pengelolaan inventaris dan analisis laporan keuangan.",
        "Organizational experience and academic projects have helped me develop communication, problem-solving, and time-management skills, as well as an understanding of inventory management and financial statement analysis.",
      ),
    ],
    cv: {
      id: "/documents/cv-id.pdf",
      en: "/documents/cv-en.pdf",
      filename: "CV-Icha-Ferianti-Nur.pdf",
    },
    socials: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/icha-febrianti-nur-04675a374",
        handle: "icha-febrianti-nur",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      id: "university",
      institution: "UIN Walisongo Semarang",
      qualification: text(
        "Sarjana Akuntansi ",
        "Bachelor of Accounting",
      ),
      period: text("2023 — sekarang", "2023 — present"),
      detail: text("Mahasiswi aktif", "Current student"),
      gpa: "3.79",
      gpaMax: "4.00",
      showGpa: true,
      courses: [
        text("Akuntansi Sektor Publik", "Public Sector Accounting"),
        text("Sistem Informasi Akuntansi", "Accounting Information Systems"),
        text("Analisis Laporan Keuangan", "Financial Statement Analysis"),
      ],
    },
  ],
  experience: [
    {
      id: "ebi-sport",
      kind: "organization",
      organization: "UKM EBI Sport",
      role: text("Koordinator Divisi RT", "Facilities Division Coordinator"),
      period: text("Maret 2025 — sekarang", "March 2025 — present"),
      location: "UIN Walisongo Semarang",
      description: text(
        "Mengelola inventaris organisasi dan mengoordinasikan anggota divisi.",
        "Managed organizational inventory and coordinated division members.",
      ),
      bullets: [
        text(
          "Mengelola, merawat, dan mendata lebih dari 40 barang inventaris organisasi selama periode 12 bulan.",
          "Managed, maintained, and tracked more than 40 organizational inventory items over a 12-month period.",
        ),
        text(
          "Memvalidasi setiap peminjaman untuk mendukung regulasi inventaris yang efisien, transparan, dan akuntabel.",
          "Validated each loan to support efficient, transparent, and accountable inventory procedures.",
        ),
        text(
          "Mengawasi dan mendukung empat anggota divisi dalam menjalankan kontribusinya.",
          "Supervised and supported four division members in carrying out their contributions.",
        ),
      ],
    },
    {
      id: "ukk-ksm-cpa",
      kind: "organization",
      organization: "UKK KSM CPA",
      role: text(
        "Anggota Divisi PSDM",
        "Human Resources Development Member",
      ),
      period: text("Maret — November 2025", "March — November 2025"),
      location: "UIN Walisongo Semarang",
      description: text(
        "Mendukung koordinator dalam program kerja divisi dan kegiatan organisasi.",
        "Supported the division coordinator with work programs and organizational activities.",
      ),
      bullets: [
        text(
          "Membantu koordinator menjalankan program kerja divisi dalam periode 12 bulan.",
          "Helped the coordinator carry out the division's work program during a 12-month period.",
        ),
        text(
          "Menjadi penanggung jawab Seminar & Talks yang berlangsung pada 22 September 2025; pelaksanaan kemudian dilanjutkan koordinator karena terpilih mengikuti program MBKM.",
          "Was assigned as the person in charge of Seminar & Talks, scheduled for September 22, 2025; the division coordinator took over after I was selected for the MBKM program.",
        ),
        text(
          "Mengikuti kegiatan organisasi secara hybrid, dari sosialisasi hingga pemilihan ketua periode berikutnya.",
          "Participated in organizational activities in a hybrid format, from orientation through the next chair election.",
        ),
      ],
    },
    {
      id: "orda-himsu",
      kind: "organization",
      organization: "ORDA HIMSU",
      role: text("Anggota Divisi Humas", "Public Relations Division Member"),
      period: text(
        "Desember 2024 — November 2025",
        "December 2024 — November 2025",
      ),
      location: "UIN Walisongo Semarang",
      description: text(
        "Mendukung program kerja dan sosialisasi organisasi daerah asal Sumatera Utara.",
        "Supported organizational programs and outreach for the North Sumatra regional student organization.",
      ),
      bullets: [
        text(
          "Membantu koordinator divisi menjalankan seluruh program kerja selama periode 12 bulan.",
          "Helped the division coordinator carry out all work programs during a 12-month period.",
        ),
        text(
          "Menyosialisasikan organisasi kepada mahasiswa UIN Walisongo, khususnya mahasiswa asal Sumatera Utara.",
          "Promoted the organization among UIN Walisongo students, especially those from North Sumatra.",
        ),
      ],
    },
  ],
  skills: [
    {
      category: text("Akuntansi & analisis", "Accounting & analysis"),
      items: [
        {
          name: text("Akuntansi sektor publik", "Public sector accounting"),
          detail: text(
            "Pemahaman akademik dari mata kuliah Akuntansi Sektor Publik.",
            "Academic knowledge from Public Sector Accounting coursework.",
          ),
          level: text("Mata kuliah relevan", "Relevant coursework"),
        },
        {
          name: text("Sistem informasi akuntansi", "Accounting information systems"),
          detail: text(
            "Perancangan siklus sistem informasi akuntansi untuk perusahaan manufaktur.",
            "Designed an accounting information system cycle for a manufacturing company.",
          ),
          level: text("Proyek akademik", "Academic project"),
        },
        {
          name: text(
            "Analisis laporan keuangan",
            "Financial statement analysis",
          ),
          detail: text(
            "Analisis proses bisnis, faktor makroekonomi, karakter, dan strategi perusahaan.",
            "Analyzed business processes, macroeconomic factors, and company characteristics and strategy.",
          ),
          level: text("Proyek akademik", "Academic project"),
        },
      ],
    },
    {
      category: text("Perangkat lunak", "Software"),
      items: [
        {
          name: text("Microsoft Office", "Microsoft Office"),
          detail: text(
            "Digunakan untuk mendukung tugas akademik dan pengolahan dokumen.",
            "Used to support academic work and document preparation.",
          ),
          level: text("Penggunaan akademik", "Academic use"),
        },
        {
          name: text("Google Workspace", "Google Workspace"),
          detail: text(
            "Perangkat produktivitas dan kolaborasi.",
            "Productivity and collaboration tools.",
          ),
          level: text("Penggunaan akademik", "Academic use"),
        },
        {
          name: text("Draw.io", "Draw.io"),
          detail: text(
            "Membuat diagram untuk mendukung penyusunan rancangan sistem.",
            "Created diagrams to support system design work.",
          ),
          level: text("Penggunaan akademik", "Academic use"),
        },
        {
          name: text("Canva", "Canva"),
          detail: text(
            "Membuat materi visual dan presentasi.",
            "Created visual materials and presentations.",
          ),
          level: text("Penggunaan akademik", "Academic use"),
        },
      ],
    },
    {
      category: text("Bahasa & keterampilan pribadi", "Languages & personal skills"),
      items: [
        {
          name: text("Bahasa Indonesia", "Indonesian"),
          detail: text(
            "Bahasa utama.",
            "Native language.",
          ),
          level: text("Fasih", "Fluent"),
        },
        {
          name: text("Bahasa Inggris", "English"),
          detail: text(
            "Kemampuan bahasa Inggris tingkat pemula.",
            "Beginner-level English proficiency.",
          ),
          level: text("Pemula", "Beginner"),
        },
        {
          name: text("Komunikasi", "Communication"),
          detail: text(
            "Dikembangkan melalui kegiatan dan koordinasi organisasi.",
            "Developed through organizational activities and coordination.",
          ),
          level: text("Kemampuan interpersonal", "Interpersonal skill"),
        },
        {
          name: text("Pemecahan masalah", "Problem-solving"),
          detail: text(
            "Mengoptimalkan pemecahan masalah dan manajemen waktu.",
            "Applied problem-solving and time-management skills.",
          ),
          level: text("Kemampuan interpersonal", "Interpersonal skill"),
        },
      ],
    },
  ],
  projects: [
    {
      slug: "mbkm-inbound-universitas-brawijaya",
      number: "01",
      category: text("Program akademik", "Academic program"),
      title: text(
        "Kegiatan MBKM & Inbound Universitas Brawijaya",
        "MBKM & Inbound Program at Brawijaya University",
      ),
      description: text(
        "Mengikuti program Merdeka Belajar di Fakultas Ekonomi dan Bisnis Universitas Brawijaya selama satu semester ganjil.",
        "Participated in the Merdeka Belajar program at the Faculty of Economics and Business, Brawijaya University, for one odd semester.",
      ),
      year: "2025",
      tools: ["MBKM", "Inbound"],
      visual: "budget",
      featured: true,
      brief: text(
        "Mengikuti kegiatan pembelajaran dalam program Merdeka Belajar di Fakultas Ekonomi dan Bisnis Universitas Brawijaya selama satu semester ganjil.",
        "Attended learning activities through the Merdeka Belajar program at the Faculty of Economics and Business, Brawijaya University, for one odd semester.",
      ),
      steps: [
        text(
          "Mengikuti rangkaian kegiatan akademik program MBKM dan Inbound.",
          "Participated in the academic activities of the MBKM and Inbound program.",
        ),
        text(
          "Menjalani pembelajaran di Fakultas Ekonomi dan Bisnis Universitas Brawijaya.",
          "Studied at the Faculty of Economics and Business, Brawijaya University.",
        ),
        text(
          "Menyelesaikan program selama satu semester ganjil.",
          "Completed the program over one odd semester.",
        ),
      ],
      outcome: text(
        "Pengalaman pembelajaran lintas kampus di Universitas Brawijaya.",
        "Cross-campus learning experience at Brawijaya University.",
      ),
      fileUrl: "",
      liveUrl: "",
    },
    {
      slug: "proyek-komprehensif-sistem-informasi-akuntansi",
      number: "02",
      category: text(
        "Sistem informasi akuntansi",
        "Accounting information systems",
      ),
      title: text(
        "Proyek Komprehensif Mata Kuliah SIA FEB UB",
        "FEB UB Accounting Information Systems Project",
      ),
      description: text(
        "Merancang perusahaan manufaktur beserta siklus sistem informasi akuntansinya sebagai tugas terstruktur mata kuliah.",
        "Designed a manufacturing company and its accounting information system cycle as a structured course assignment.",
      ),
      year: "2025",
      tools: ["Sistem Informasi Akuntansi", "Draw.io"],
      visual: "ledger",
      featured: true,
      brief: text(
        "Membuat rancangan perusahaan manufaktur dan menyusun siklus sistem informasi akuntansi sebagai tugas terstruktur serta prasyarat kelulusan mata kuliah.",
        "Designed a manufacturing company and documented its accounting information system cycle as a structured assignment and course requirement.",
      ),
      steps: [
        text(
          "Merancang profil dan proses bisnis perusahaan manufaktur.",
          "Designed the profile and business processes of a manufacturing company.",
        ),
        text(
          "Mengidentifikasi siklus sistem informasi akuntansi perusahaan.",
          "Identified the company's accounting information system cycles.",
        ),
        text(
          "Menyusun rancangan sebagai tugas terstruktur mata kuliah.",
          "Prepared the design as a structured course assignment.",
        ),
      ],
      outcome: text(
        "Rancangan perusahaan manufaktur beserta siklus sistem informasi akuntansi.",
        "A manufacturing company design with its accounting information system cycles.",
      ),
      fileUrl: "",
      liveUrl: "",
    },
    {
      slug: "analisis-laporan-keuangan-bca",
      number: "03",
      category: text("Analisis keuangan", "Financial analysis"),
      title: text(
        "Analisis Laporan Keuangan PT Bank Central Asia Tbk",
        "PT Bank Central Asia Tbk Financial Statement Analysis",
      ),
      description: text(
        "Menganalisis proses bisnis, faktor makroekonomi, karakter, dan strategi PT Bank Central Asia Tbk.",
        "Analyzed the business processes, macroeconomic factors, characteristics, and strategy of PT Bank Central Asia Tbk.",
      ),
      year: "2025",
      tools: ["Analisis Laporan Keuangan"],
      visual: "ratios",
      featured: true,
      brief: text(
        "Tugas terstruktur mata kuliah Analisis Laporan Keuangan yang mengkaji perusahaan secara mendalam dengan meninjau proses bisnis, faktor makroekonomi, karakter, dan strategi perusahaan.",
        "A structured Financial Statement Analysis course assignment that examined the company in depth, including its business processes, macroeconomic factors, characteristics, and strategy.",
      ),
      steps: [
        text(
          "Mempelajari laporan keuangan dan proses bisnis perusahaan.",
          "Reviewed the company's financial statements and business processes.",
        ),
        text(
          "Mengkaji faktor makroekonomi dan karakter perusahaan.",
          "Examined macroeconomic factors and company characteristics.",
        ),
        text(
          "Menganalisis strategi perusahaan sebagai bagian dari pembahasan.",
          "Analyzed the company's strategy as part of the assessment.",
        ),
      ],
      outcome: text(
        "Analisis laporan keuangan yang mencakup aspek bisnis, makroekonomi, karakter, dan strategi perusahaan.",
        "A financial statement analysis covering the company's business, macroeconomic context, characteristics, and strategy.",
      ),
      fileUrl: "",
      liveUrl: "",
    },
  ],
  // Data contoh untuk visual pratinjau karya. Ubah angka di sini, grafik mengikuti.
  projectPreview: {
    business: text(
      "Usaha Dagang · Studi kasus",
      "Trading Business · Case study",
    ),
    period: text("Periode Januari 2025", "January 2025 period"),
    ledger: [
      { label: text("Pendapatan", "Revenue"), value: 48500000 },
      {
        label: text("Harga pokok penjualan", "Cost of goods sold"),
        value: 29400000,
      },
      {
        label: text("Beban operasional", "Operating expenses"),
        value: 8200000,
      },
    ],
    budget: [
      { label: text("Konsumsi", "Catering"), planned: 500, actual: 440 },
      { label: text("Perlengkapan", "Supplies"), planned: 350, actual: 310 },
      { label: text("Publikasi", "Publicity"), planned: 260, actual: 280 },
    ],
    ratios: [
      {
        label: text("Rasio lancar", "Current ratio"),
        values: [1.6, 1.9, 2.1],
        unit: "×",
      },
      {
        label: text("Margin bersih", "Net margin"),
        values: [12.4, 14.2, 15.8],
        unit: "%",
      },
    ],
    years: ["2022", "2023", "2024"],
  },
  certifications: [
    {
      title: text("Google Analytics Certified", "Google Analytics Certified"),
      issuer: "Google",
      year: "November 2025 — November 2026",
      credentialUrl: "",
    },
  ],
  achievements: [] as { title: Localized; detail: Localized; year: string }[],
};

export const navigation = [
  { path: "", label: text("Home", "Home") },
  { path: "about", label: text("Tentang", "About") },
  { path: "experience", label: text("Pengalaman", "Experience") },
  { path: "skills", label: text("Keahlian", "Skills") },
  { path: "projects", label: text("Karya", "Projects") },
  { path: "contact", label: text("Kontak", "Contact") },
];

export const ui = {
  portfolio: text("Portofolio", "Portfolio"),
  openMenu: text("Buka menu", "Open menu"),
  closeMenu: text("Tutup menu", "Close menu"),
  switchTheme: text("Ganti tema", "Switch theme"),
  theme: text("Tema", "Theme"),
  light: text("Terang", "Light"),
  dark: text("Gelap", "Dark"),
  system: text("Sistem", "System"),
  switchLanguage: text("Switch to English", "Ubah ke Bahasa Indonesia"),
  skip: text("Langsung ke konten", "Skip to content"),
  viewProjects: text("Lihat karya", "View projects"),
  previewCv: text("Preview CV", "Preview CV"),
  downloadCv: text("Download CV", "Download CV"),
  close: text("Tutup", "Close"),
  openPdf: text("Buka PDF di tab baru", "Open PDF in a new tab"),
  cvFallback: text(
    "Jika preview tidak tersedia di browser Anda, buka file PDF secara langsung.",
    "If your browser does not support the preview, open the PDF directly.",
  ),
  cvTitle: text("Curriculum vitae", "Curriculum vitae"),
  cvDescription: text(
    "Pendidikan, pengalaman, dan keahlian dalam satu dokumen.",
    "Education, experience, and skills in one document.",
  ),
  location: text("Lokasi", "Location"),
  study: text("Pendidikan", "Education"),
  focus: text("Minat utama", "Primary interests"),
  focusValue: text(
    "Pengelolaan data ekonomi daerah & pelaporan keuangan pemerintah",
    "Regional economic data & government financial reporting",
  ),
  gpa: text("IPK", "GPA"),
  selectedWork: text("Karya pilihan", "Selected work"),
  selectedIntro: text(
    "Penerapan materi kuliah dalam studi kasus dan pekerjaan praktis.",
    "Applying coursework to case studies and practical work.",
  ),
  allProjects: text("Semua karya", "All projects"),
  viewDetails: text("Lihat studi kasus", "View case study"),
  connectTitle: text("Mari terhubung.", "Let’s connect."),
  connectIntro: text(
    "Untuk kesempatan magang, kolaborasi, atau diskusi seputar akuntansi.",
    "For internship opportunities, collaboration, or a conversation about accounting.",
  ),
  contactMe: text("Hubungi saya", "Get in touch"),
  aboutTitle: text("Tentang saya.", "About me."),
  aboutIntro: text(
    "Latar belakang, pendidikan, dan cara saya bekerja.",
    "My background, education, and approach to work.",
  ),
  education: text("Pendidikan", "Education"),
  relevantCourses: text("Mata kuliah relevan", "Relevant coursework"),
  achievements: text("Prestasi", "Achievements"),
  experienceTitle: text(
    "Belajar dari pengalaman.",
    "Learning through experience.",
  ),
  experienceIntro: text(
    "Kontribusi dalam lingkungan kerja dan kegiatan organisasi.",
    "Contributions in the workplace and student organizations.",
  ),
  work: text("Kerja & magang", "Work & internships"),
  organization: text("Organisasi", "Organizations"),
  skillsTitle: text("Keahlian & perangkat.", "Skills & tools."),
  skillsIntro: text(
    "Kemampuan yang saya gunakan dan terus saya kembangkan.",
    "The skills I use and continue to develop.",
  ),
  certifications: text("Sertifikasi & pelatihan", "Certifications & training"),
  credential: text("Lihat sertifikat", "View credential"),
  projectsTitle: text("Dari teori ke praktik.", "From theory to practice."),
  projectsIntro: text(
    "Studi kasus, analisis, dan karya akademik dalam bidang akuntansi.",
    "Case studies, analysis, and academic work in accounting.",
  ),
  all: text("Semua", "All"),
  results: text("karya", "projects"),
  noProjects: text(
    "Belum ada karya dalam kategori ini.",
    "No projects in this category yet.",
  ),
  projectBrief: text("Gambaran proyek", "Project overview"),
  process: text("Proses pengerjaan", "Process"),
  outcome: text("Hasil", "Outcome"),
  tools: text("Perangkat", "Tools"),
  year: text("Tahun", "Year"),
  downloadProject: text("Download karya", "Download project"),
  liveProject: text("Buka proyek", "Open project"),
  backProjects: text("Kembali ke karya", "Back to projects"),
  contactTitle: text("Mari mulai percakapan.", "Let’s start a conversation."),
  contactIntro: text(
    "Saya terbuka untuk kesempatan magang dan kolaborasi. Silakan hubungi melalui email atau profil sosial di bawah.",
    "I am open to internship opportunities and collaboration. Reach out through email or the social profiles below.",
  ),
  email: text("Email", "Email"),
  sendEmail: text("Kirim email", "Send an email"),
  copy: text("Salin email", "Copy email"),
  copied: text("Email tersalin", "Email copied"),
  copyError: text(
    "Tidak dapat menyalin. Silakan salin alamat email secara manual.",
    "Unable to copy. Please copy the email address manually.",
  ),
  social: text("Profil sosial", "Social profiles"),
  footerHeadline: text(
    "Mari mulai percakapan.",
    "Let's start a conversation.",
  ),
  footerIntro: text(
    "Terbuka untuk kesempatan magang dan kolaborasi di bidang akuntansi, pengelolaan data, serta pelaporan keuangan.",
    "Open to internship and collaboration opportunities in accounting, data management, and financial reporting.",
  ),
  explore: text("Jelajahi", "Explore"),
  basedIn: text("Berlokasi di", "Based in"),
  copyright: text("Hak cipta dilindungi.", "All rights reserved."),
  example: text("Data contoh", "Sample data"),
  incomeStatement: text("Laporan laba rugi", "Income statement"),
  netProfit: text("Laba bersih", "Net profit"),
  budgetTitle: text("Rencana & realisasi", "Planned & actual"),
  planned: text("Rencana", "Planned"),
  actual: text("Realisasi", "Actual"),
  unitThousands: text("Dalam ribuan rupiah", "In thousands of rupiah"),
  ratioTitle: text("Ringkasan rasio", "Ratio summary"),
  notFound: text("Halaman tidak ditemukan.", "Page not found."),
  backHome: text("Kembali ke Home", "Back to Home"),
};
export type Project = (typeof portfolio.projects)[number];
