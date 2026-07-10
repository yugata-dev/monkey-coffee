
````markdown
# Monkey Coffee - Landing Page

## 🌐 Live Demo

[Klik di sini untuk melihat live demo](https://monkey-coffee.vercel.app/)

---

## 📖 Deskripsi Project

Monkey Coffee adalah sebuah landing page modern untuk coffee shop yang menampilkan menu, layanan, dan informasi kontak. Website ini dibangun dengan teknologi terkini menggunakan Next.js 16 dan Tailwind CSS.

---

## 🛠 Tech Stack

- **Framework**: Next.js 16.2.10
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Playfair Display, Inter
- **Deployment**: Vercel

---

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+
- npm atau yarn

### Langkah-langkah:

```bash
# 1. Clone repository
git clone https://github.com/yugata-dev/monkey-coffee.git

# 2. Masuk ke folder project
cd monkey-coffee

# 3. Install dependencies
npm install

# 4. Jalankan development server
npm run dev

# 5. Buka browser ke http://localhost:3000
```
````

---

## 🎨 Fitur Utama

✅ **Responsive Design**

- Mobile-first approach
- Optimal untuk device: Mobile (< 640px), Tablet (640-1024px), Desktop (> 1024px)

✅ **Modern UI/UX**

- Hero section dengan background image
- Featured coffee cards dengan hover effects
- Services showcase dengan icons
- Contact information section

✅ **Performance**

- Static page prerendering
- Optimized images
- Clean code structure
- Zero console errors

✅ **Accessibility**

- Semantic HTML structure
- Proper heading hierarchy
- Navigation links yang accessible

---

## 🏗 Project Structure

```
monkey-coffee/
├── app/
│   ├── layout.tsx          # Root layout dengan metadata & fonts
│   ├── page.tsx            # Landing page utama
│   └── globals.css         # Global styles & CSS variables
├── components/             # Reusable React components
│   ├── Navbar.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Menus.tsx           # Featured coffees section
│   ├── Services.tsx        # Services showcase
│   ├── Ambiance.tsx        # Ambiance section
│   ├── AboutUs.tsx         # About section
│   └── Footer.tsx          # Footer component
├── public/                 # Static assets & images
│   └── (images & files)
├── .next/                  # Build output (auto-generated)
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
└── README.md               # Documentation
```

## 📂 Component Details

- **Navbar**: Navigation header dengan responsive menu
- **Hero**: Landing section dengan background image dan CTA button
- **Menus**: Featured coffee products dalam grid layout
- **Services**: Showcase 4 layanan utama dengan icons
- **Ambiance**: Section tentang suasana kafe
- **AboutUs**: Informasi lengkap tentang coffee shop, address, hours, contact
- **Footer**: Footer dengan menu links dan social media

---

## 📱 Responsive Breakpoints

| Breakpoint | Ukuran         | Usage          |
| ---------- | -------------- | -------------- |
| sm         | < 640px        | Mobile devices |
| md         | 640px - 1024px | Tablets        |
| lg         | > 1024px       | Desktop        |

---

## 🔧 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build untuk production
npm start          # Start production server
```

---

## 💾 Build Info

Build berhasil dikompile dengan hasil:

```
✓ Compiled successfully in 9.0s
✓ Finished TypeScript in 6.7s
✓ Generating static pages using 3 workers
✓ Finalizing page optimization
```

---

## 🎯 Hydration & Performance

### Hydration Handling:

- Menggunakan Next.js App Router yang built-in handle hydration
- Static page generation untuk menghindari hydration mismatch
- Semua content di-prerender pada build time
- Zero console errors

### Performance Optimization:

- Tailwind CSS purging untuk minimal bundle size
- Static export capabilities
- Lazy loading untuk images

---

## 📄 License

MIT License

---

## 👨‍💻 Author

**Submission untuk**: Frontend Internship Challenge - PT Daya Rekadigital Indonesia

---

**Last Updated**: July 2026

```

```
