"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Car, 
  ShieldCheck, 
  Droplets, 
  Trees,
  Bed,
  Bath,
  ArrowRight,
  MapPin,
  Phone,
  Menu,
  X,
  Navigation,
  Star,
  Quote
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const houseTypes = [
    { 
      title: "Nordea", 
      price: "1M-an",
      specs: { lt: 72, lb: 92, bed: 3, bath: 2, car: 2 },
      tag: "READY STOCK",
      features: ["Smart Home", "High Ceiling 4.5m", "Balkon Luas"],
      img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/7507069f-4425-4e2b-b4f0-d22477c24a14/burung-tua-1767945800976.png?width=800&height=600&resize=contain"
    },
    { 
      title: "Velmora", 
      price: "1.2M",
      specs: { lt: 55, lb: 85, bed: 3, bath: 2, car: 1 },
      tag: "LIMITED",
      features: ["Private Terrace", "Kitchen Set", "Smart Lock"],
      img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/7507069f-4425-4e2b-b4f0-d22477c24a14/cicakdidinding-1767943369875.png?width=800&height=600&resize=contain"
    }
  ];

  const reviews = [
    {
      name: "Budi Santoso",
      avatar: "BS",
      rating: 5,
      date: "2 minggu lalu",
      text: "Lokasi sangat strategis, dekat dengan tol dan mall. Desain rumahnya modern dan mewah. Sales-nya juga sangat membantu dalam proses pembelian.",
      verified: true
    },
    {
      name: "Siti Rahayu",
      avatar: "SR",
      rating: 5,
      date: "1 bulan lalu",
      text: "Sudah survey beberapa kali, lingkungannya asri dan keamanan 24 jam. Harga juga masih terjangkau untuk area Jakarta Barat. Recommended!",
      verified: true
    },
    {
      name: "Ahmad Fauzi",
      avatar: "AF",
      rating: 5,
      date: "1 bulan lalu",
      text: "Material bangunan berkualitas, ceiling tinggi jadi rumah terasa lega. Tim marketing sangat profesional dan responsif.",
      verified: true
    },
    {
      name: "Linda Wijaya",
      avatar: "LW",
      rating: 4,
      date: "2 bulan lalu",
      text: "Proses KPR dibantu sampai selesai. Lokasi dekat sekolah anak dan kantor suami. Sangat puas dengan pembelian ini!",
      verified: true
    }
  ];

  const waNumber = "6281318000597";
  const waLink = `https://wa.me/${waNumber}?text=Halo%20Velmora%20Residence%2C%20saya%20tertarik%20dengan%20informasi%20huniannya.`;
  
  const googleMapsLink = "https://www.google.com/maps/search/ANWA+Residence+Puri+Velmora+Meruya+Utara+Kembangan+Jakarta+Barat";
  const address = "Jl. Taman Palem Raya No.5, Meruya Utara, Kec. Kembangan, Jakarta Barat 11620";

  const openExternalUrl = (url: string) => {
    window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url } }, "*");
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] font-sans text-zinc-900 overflow-x-hidden">
      <motion.button
        onClick={() => openExternalUrl(waLink)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-shadow"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.67-1.611-.918-2.21-.242-.588-.487-.51-.67-.52-.172-.008-.37-.01-.567-.01-.197 0-.518.074-.789.37-.27.296-1.036 1.013-1.036 2.47 0 1.457 1.06 2.864 1.208 3.062.148.198 2.086 3.185 5.055 4.469.707.306 1.259.489 1.688.626.71.226 1.356.194 1.867.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.button>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-luxury/95 backdrop-blur-sm border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 py-4">
          <div className="font-serif text-xl lg:text-2xl font-bold text-white">
            VELMORA<span className="text-gold-luxury">.</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#tentang" className="hover:text-gold-luxury transition-colors">Tentang</a>
            <a href="#fasilitas" className="hover:text-gold-luxury transition-colors">Fasilitas</a>
            <a href="#unit" className="hover:text-gold-luxury transition-colors">Unit</a>
            <a href="#lokasi" className="hover:text-gold-luxury transition-colors">Lokasi</a>
            <Button onClick={() => openExternalUrl(waLink)} size="sm" className="bg-gold-luxury hover:bg-white text-primary-luxury ml-2">
              Hubungi Kami
            </Button>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-primary-luxury border-t border-white/10"
            >
              <div className="px-6 py-4 space-y-3">
                <a href="#tentang" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-white/80 hover:text-gold-luxury">Tentang</a>
                <a href="#fasilitas" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-white/80 hover:text-gold-luxury">Fasilitas</a>
                <a href="#unit" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-white/80 hover:text-gold-luxury">Unit</a>
                <a href="#lokasi" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-white/80 hover:text-gold-luxury">Lokasi</a>
                <Button onClick={() => openExternalUrl(waLink)} className="w-full bg-gold-luxury text-primary-luxury">
                  Hubungi Kami
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <section className="relative min-h-screen bg-primary-luxury flex items-center justify-center pt-16">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-72 lg:w-96 h-72 lg:h-96 bg-gold-luxury rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-48 lg:w-64 h-48 lg:h-64 bg-gold-luxury/50 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 text-center px-6 lg:px-8 py-20 lg:py-32 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6 lg:space-y-8">
            <span className="text-gold-luxury text-xs lg:text-sm font-medium tracking-[0.3em] uppercase inline-block">Hunian Eksklusif di Meruya</span>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight">
              VELMORA<br />
              <span className="text-gold-luxury italic font-normal">Residence</span>
            </h1>
            <p className="text-white/60 max-w-xl mx-auto text-sm lg:text-base leading-relaxed">
              Rumah mewah dengan desain modern di lokasi strategis Jakarta Barat. Mulai dari 1 Milyar-an.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-gold-luxury hover:bg-white text-primary-luxury font-medium px-10">
                <a href="#unit">Lihat Unit</a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="border border-white/20 text-white hover:bg-white/10 px-10">
                <a href="#tentang">Pelajari Lebih</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-8 lg:py-10 border-b border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12">
            {[
              { icon: MapPin, label: "Lokasi", value: "Meruya, Jakarta Barat" },
              { icon: Car, label: "Akses Tol", value: "5 Menit ke 2 Pintu Tol" },
              { icon: Trees, label: "Fasilitas", value: "Mall Puri Indah 10 Menit" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 lg:gap-5">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-primary-luxury/5 rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-5 w-5 lg:h-6 lg:w-6 text-gold-luxury" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs lg:text-sm text-zinc-400 uppercase tracking-wide">{item.label}</p>
                  <p className="text-sm lg:text-base font-medium text-zinc-800">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tentang" className="py-16 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeIn} className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <span className="text-gold-luxury text-xs lg:text-sm font-medium tracking-[0.2em] uppercase">Tentang Proyek</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-luxury leading-tight">
                Hunian Premium<br />di Lokasi Strategis
              </h2>
              <p className="text-zinc-500 text-base lg:text-lg leading-relaxed max-w-lg">
                Velmora Residence menghadirkan konsep hunian modern dengan sentuhan kemewahan. 
                Berlokasi di jantung Meruya, Jakarta Barat, dengan akses mudah ke berbagai 
                fasilitas publik dan transportasi.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  <p className="text-3xl lg:text-4xl font-serif font-bold text-primary-luxury">2 Tipe</p>
                  <p className="text-xs lg:text-sm text-zinc-400 uppercase tracking-wide">Pilihan Unit</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl lg:text-4xl font-serif font-bold text-primary-luxury">Limited</p>
                  <p className="text-xs lg:text-sm text-zinc-400 uppercase tracking-wide">Unit Tersedia</p>
                </div>
              </div>
              <Button onClick={() => openExternalUrl(waLink)} size="lg" className="bg-primary-luxury hover:bg-gold-luxury text-white mt-4">
                Pelajari Lebih Lanjut <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2"
            >
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/7507069f-4425-4e2b-b4f0-d22477c24a14/bisasa-17679433617995.png?width=800&height=600&resize=contain" 
                alt="Velmora Residence" 
                fill 
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 bg-gradient-to-t from-primary-luxury/90 to-transparent">
                <p className="text-gold-luxury text-xs lg:text-sm uppercase tracking-wide">Harga Mulai</p>
                <p className="text-white text-2xl lg:text-3xl font-serif font-bold">IDR 1 Milyar-an</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="fasilitas" className="py-16 lg:py-28 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-gold-luxury text-xs lg:text-sm font-medium tracking-[0.2em] uppercase">Fasilitas</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary-luxury mt-3">Kenyamanan Premium</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {[
              { icon: ShieldCheck, title: "Keamanan 24/7", desc: "CCTV & security profesional" },
              { icon: Trees, title: "Lingkungan Asri", desc: "Taman hijau tertata rapi" },
              { icon: Car, title: "Double Carport", desc: "Parkir untuk 2 kendaraan" },
              { icon: Droplets, title: "Air Bersih", desc: "Sistem filtrasi modern" }
            ].map((f, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                transition={{ delay: i * 0.1 }} 
                className="bg-white p-6 lg:p-8 rounded-xl border border-zinc-100 hover:border-gold-luxury/30 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-primary-luxury/5 rounded-full flex items-center justify-center mb-4 lg:mb-6">
                  <f.icon className="h-5 w-5 lg:h-6 lg:w-6 text-gold-luxury" />
                </div>
                <h3 className="font-semibold text-primary-luxury text-base lg:text-lg mb-2">{f.title}</h3>
                <p className="text-sm lg:text-base text-zinc-500">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="unit" className="py-16 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-gold-luxury text-xs lg:text-sm font-medium tracking-[0.2em] uppercase">Koleksi Unit</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary-luxury mt-3">Pilih Rumah Impian Anda</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {houseTypes.map((unit, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                transition={{ delay: i * 0.15 }}
                className="bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image 
                    src={unit.img} 
                    alt={unit.title} 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-primary-luxury text-gold-luxury px-4 py-2 text-xs font-semibold rounded-full">
                    {unit.tag}
                  </div>
                </div>
                
                <div className="p-6 lg:p-8 space-y-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="font-serif text-2xl lg:text-3xl font-bold text-primary-luxury">{unit.title}</h3>
                      <p className="text-gold-luxury font-semibold text-lg lg:text-xl mt-1">Mulai IDR {unit.price}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 lg:gap-8 py-4 border-y border-zinc-100">
                    <div className="flex items-center gap-2">
                      <Bed className="h-5 w-5 text-zinc-400" />
                      <span className="text-sm lg:text-base font-medium">{unit.specs.bed} KT</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="h-5 w-5 text-zinc-400" />
                      <span className="text-sm lg:text-base font-medium">{unit.specs.bath} KM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car className="h-5 w-5 text-zinc-400" />
                      <span className="text-sm lg:text-base font-medium">{unit.specs.car} Mobil</span>
                    </div>
                  </div>

                  <div className="flex gap-6 text-sm lg:text-base text-zinc-600">
                    <span className="font-medium">LT: {unit.specs.lt}m²</span>
                    <span className="font-medium">LB: {unit.specs.lb}m²</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {unit.features.map((feature, idx) => (
                      <span key={idx} className="text-xs lg:text-sm bg-zinc-100 text-zinc-700 px-3 py-1.5 rounded-full font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button onClick={() => openExternalUrl(waLink)} size="lg" className="w-full bg-primary-luxury hover:bg-gold-luxury text-white mt-2">
                    Tanya Unit Ini
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimoni" className="py-16 lg:py-28 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-gold-luxury text-xs lg:text-sm font-medium tracking-[0.2em] uppercase">Testimoni</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary-luxury mt-3">Apa Kata Mereka</h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold text-zinc-700">4.9</span>
              <span className="text-zinc-500">dari 24 ulasan</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {reviews.map((review, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 lg:p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-luxury rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">{review.avatar}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-semibold text-zinc-800">{review.name}</h4>
                      {review.verified && (
                        <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-medium">
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, idx) => (
                          <Star 
                            key={idx} 
                            className={`h-4 w-4 ${idx < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-zinc-200'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-zinc-400">{review.date}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 relative">
                  <Quote className="absolute -top-1 -left-1 h-6 w-6 text-gold-luxury/20" />
                  <p className="text-zinc-600 text-base leading-relaxed pl-4">{review.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button 
              onClick={() => openExternalUrl(googleMapsLink)} 
              variant="outline" 
              size="lg"
              className="border-primary-luxury text-primary-luxury hover:bg-primary-luxury hover:text-white"
            >
              <Star className="mr-2 h-5 w-5" /> Lihat Semua Ulasan di Google
            </Button>
          </div>
        </div>
      </section>

      <section id="lokasi" className="py-16 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-gold-luxury text-xs lg:text-sm font-medium tracking-[0.2em] uppercase">Lokasi</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary-luxury mt-3">Temukan Kami</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <motion.button
              {...fadeIn}
              onClick={() => openExternalUrl(googleMapsLink)}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group cursor-pointer w-full"
            >
              <Image
                src="https://maps.googleapis.com/maps/api/staticmap?center=-6.1856,106.7561&zoom=15&size=800x600&maptype=roadmap&markers=color:red%7C-6.1856,106.7561&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                alt="Lokasi Velmora Residence"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-primary-luxury/40 group-hover:bg-primary-luxury/30 transition-colors flex items-center justify-center">
                <div className="bg-white/95 backdrop-blur-sm px-6 lg:px-8 py-4 lg:py-5 rounded-xl flex items-center gap-3 shadow-xl">
                  <Navigation className="h-6 w-6 lg:h-7 lg:w-7 text-gold-luxury" />
                  <span className="font-semibold text-primary-luxury text-base lg:text-lg">Buka di Google Maps</span>
                </div>
              </div>
            </motion.button>

            <motion.div {...fadeIn} className="space-y-6">
              <div className="bg-white p-6 lg:p-8 rounded-2xl border border-zinc-100 shadow-sm">
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-primary-luxury mb-4">Alamat Lengkap</h3>
                <p className="text-zinc-600 text-base lg:text-lg leading-relaxed mb-6">{address}</p>
                <Button 
                  onClick={() => openExternalUrl(googleMapsLink)} 
                  variant="outline" 
                  size="lg"
                  className="w-full border-primary-luxury text-primary-luxury hover:bg-primary-luxury hover:text-white"
                >
                  <MapPin className="mr-2 h-5 w-5" /> Lihat di Google Maps
                </Button>
              </div>

              <div className="bg-white p-6 lg:p-8 rounded-2xl border border-zinc-100 shadow-sm">
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-primary-luxury mb-4">Akses Terdekat</h3>
                <ul className="space-y-3 text-base lg:text-lg text-zinc-600">
                  <li className="flex items-start gap-3">
                    <span className="text-gold-luxury text-xl">•</span>
                    <span>5 menit ke Tol JORR & Tol Dalam Kota</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-luxury text-xl">•</span>
                    <span>10 menit ke Mall Puri Indah & Lippo Mall Puri</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-luxury text-xl">•</span>
                    <span>25 menit ke Bandara Soekarno-Hatta</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold-luxury text-xl">•</span>
                    <span>Dekat sekolah & rumah sakit ternama</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-28 bg-primary-luxury">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center space-y-6 lg:space-y-8">
          <span className="text-gold-luxury text-xs lg:text-sm font-medium tracking-[0.3em] uppercase">Kesempatan Terbatas</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
            Wujudkan Rumah<br />Impian Anda
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base lg:text-lg">
            Konsultasikan kebutuhan hunian Anda bersama tim spesialis kami. Gratis tanpa komitmen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button onClick={() => openExternalUrl(waLink)} size="lg" className="bg-gold-luxury hover:bg-white text-primary-luxury font-semibold px-10">
              Hubungi via WhatsApp
            </Button>
            <Button onClick={() => openExternalUrl(waLink)} variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-10">
              Jadwalkan Kunjungan
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 lg:py-16 bg-white border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 mb-10 lg:mb-12">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-primary-luxury">
                VELMORA<span className="text-gold-luxury">.</span>
              </h3>
              <p className="text-base text-zinc-500 leading-relaxed">
                Hunian mewah dengan sentuhan modern di lokasi strategis Meruya, Jakarta Barat.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-zinc-800 text-lg">Navigasi</h4>
              <ul className="space-y-3 text-base text-zinc-500">
                <li><a href="#tentang" className="hover:text-gold-luxury transition-colors">Tentang</a></li>
                <li><a href="#fasilitas" className="hover:text-gold-luxury transition-colors">Fasilitas</a></li>
                <li><a href="#unit" className="hover:text-gold-luxury transition-colors">Unit</a></li>
                <li><a href="#lokasi" className="hover:text-gold-luxury transition-colors">Lokasi</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-zinc-800 text-lg">Kontak</h4>
              <div className="space-y-3 text-base text-zinc-500">
                <button onClick={() => openExternalUrl(waLink)} className="flex items-center gap-3 hover:text-gold-luxury transition-colors">
                  <Phone className="h-5 w-5" /> +62 813-1800-0597
                </button>
                <button onClick={() => openExternalUrl(googleMapsLink)} className="flex items-start gap-3 hover:text-gold-luxury transition-colors text-left">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" /> 
                  <span>Meruya Utara, Kembangan, Jakarta Barat</span>
                </button>
              </div>
            </div>
          </div>
          <div className="pt-8 lg:pt-10 border-t border-zinc-100 text-center">
            <p className="text-sm text-zinc-400">
              © {new Date().getFullYear()} Velmora Residence. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
