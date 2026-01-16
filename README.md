# Velmora Residence - Landing Page

Website landing page untuk Velmora Residence, hunian eksklusif premium di Meruya, Jakarta Barat.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: shadcn/ui

## Fitur

- Desain responsif untuk mobile, tablet, dan desktop
- Animasi smooth dengan Framer Motion
- Integrasi WhatsApp untuk kontak langsung
- Google Maps integration untuk lokasi
- Optimized images dengan Next.js Image

## Getting Started

### Prerequisites

- Node.js 18+
- npm atau bun

### Installation

1. Clone repository:
```bash
git clone https://github.com/USERNAME/velmora-residence.git
cd velmora-residence
```

2. Install dependencies:
```bash
npm install
# atau
bun install
```

3. Jalankan development server:
```bash
npm run dev
# atau
bun dev
```

4. Buka [http://localhost:3000](http://localhost:3000) di browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css    # Global styles & Tailwind config
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Landing page
├── components/
│   └── ui/            # shadcn/ui components
└── lib/
    └── utils.ts       # Utility functions
```

## Deployment

### Vercel (Recommended)

1. Push ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Deploy otomatis

### Netlify

1. Push ke GitHub
2. Import di Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

## Customization

### Mengubah Kontak WhatsApp

Edit file `src/app/page.tsx`:
```typescript
const waNumber = "6281318000597"; // Ganti dengan nomor WA Anda
```

### Mengubah Alamat

Edit file `src/app/page.tsx`:
```typescript
const address = "Alamat lengkap Anda";
const googleMapsLink = "Link Google Maps Anda";
```

### Mengubah Warna Theme

Edit file `src/app/globals.css` pada bagian CSS variables.

## License

MIT License
