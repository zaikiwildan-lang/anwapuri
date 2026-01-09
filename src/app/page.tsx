"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Car, 
  ShieldCheck, 
  Droplets, 
  Trees,
  Bed,
  Bath,
  ArrowRight,
  MapPin,
  Clock,
  Sparkles,
  Zap,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Bird = ({ delay = 0, y = "20%", xStart = "-10%", xEnd = "110%", duration = 20 }) => (
  <motion.div
    initial={{ x: xStart, y, opacity: 0, scale: 0.6 }}
    animate={{ 
      x: xEnd, 
      y: [y, `calc(${y} - 50px)`, `calc(${y} + 30px)`, y],
      opacity: [0, 0.4, 0.4, 0],
      scale: [0.6, 0.9, 0.9, 0.6]
    }}
    transition={{ duration, repeat: Infinity, delay, ease: "linear" }}
    className="absolute pointer-events-none"
    style={{ zIndex: 0 }}
  >
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="text-gold-luxury/40">
      <path d="M2 12C5 9 9 9 12 12C15 9 19 9 22 12" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round"/>
    </svg>
  </motion.div>
);

export default function LandingPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
  };

  const houseTypes = [
    { 
      title: "Nordea", 
      price: "1M-an",
      specs: { lt: 72, lb: 92, bed: 3, bath: 2, car: 2 },
      tag: "READY STOCK & INDENT",
      highlight: "Harmoni Estetika Skandinavia",
      features: ["Smarter Home System", "High Ceiling 4.5m", "Balkon Luas", "Material Premium"],
      img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/7507069f-4425-4e2b-b4f0-d22477c24a14/burung-tua-1767945800976.png?width=8000&height=8000&resize=contain"
    },
    { 
      title: "Velmora", 
      price: "1.2M",
      specs: { lt: 55, lb: 85, bed: 3, bath: 2, car: 1 },
      tag: "LIMITED EDITION",
      highlight: "Kemewahan Modern Kontemporer",
      features: ["Private Terrace", "Luxury Flooring", "Kitchen Set Included", "Smart Lock"],
      img: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/7507069f-4425-4e2b-b4f0-d22477c24a14/cicakdidinding-1767943369875.png?width=1200&height=1600&resize=contain"
    }
  ];

  const waNumber = "6281318000597";
  const waLink = `https://wa.me/${waNumber}?text=Halo%20Velmora%20Residence%2C%20saya%20tertarik%20dengan%20informasi%20huniannya.`;

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans selection:bg-gold-luxury selection:text-white overflow-x-hidden text-zinc-900 scroll-smooth">
      {/* Floating WhatsApp Button */}
      <motion.a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-[0_20px_40px_rgba(37,211,102,0.3)] flex items-center justify-center hover:bg-[#20ba5a] transition-all duration-300 group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-30" />
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="relative z-10">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.67-1.611-.918-2.21-.242-.588-.487-.51-.67-.52-.172-.008-.37-.01-.567-.01-.197 0-.518.074-.789.37-.27.296-1.036 1.013-1.036 2.47 0 1.457 1.06 2.864 1.208 3.062.148.198 2.086 3.185 5.055 4.469.707.306 1.259.489 1.688.626.71.226 1.356.194 1.867.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
      </motion.a>

      {/* Hero Section */}
      <div className="relative w-full h-screen bg-primary-luxury overflow-hidden flex flex-col items-center justify-center text-center px-6">
        <Bird delay={0} y="25%" duration={25} />
        <Bird delay={7} y="55%" duration={30} xStart="110%" xEnd="-10%" />
        <Bird delay={15} y="45%" duration={22} />
        <Bird delay={3} y="75%" duration={35} />
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className="relative z-10 space-y-10">
          <div className="space-y-2">
            <motion.span 
              initial={{ opacity: 0, tracking: "0.2em" }} 
              animate={{ opacity: 1, tracking: "0.8em" }} 
              transition={{ duration: 2 }} 
              className="text-[10px] md:text-xs uppercase text-gold-luxury/80 font-medium block"
            >
              MAHAKARYA HUNIAN DI MERUYA
            </motion.span>
            <h1 className="font-serif text-6xl md:text-[10rem] font-bold text-white leading-none tracking-tighter">
              VELMORA <br />
              <span className="text-gold-luxury italic font-extralight block -mt-4 md:-mt-8">RESIDENCE</span>
            </h1>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="flex flex-col items-center gap-6">
            <div className="h-20 w-[1px] bg-gradient-to-b from-gold-luxury to-transparent" />
            <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-white/50 font-light max-w-sm leading-loose">
              Simbol Kemewahan & Kenyamanan Keluarga Modern
            </p>
          </motion.div>
        </motion.div>
        
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-luxury rounded-full blur-[150px]" />
           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-luxury rounded-full blur-[150px]" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-zinc-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
          <div className="font-serif text-2xl font-bold tracking-widest text-primary-luxury">
            VELMORA<span className="text-gold-luxury italic">.</span>
          </div>
          <div className="hidden md:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
            <a href="#home" className="hover:text-primary-luxury transition-colors">Filosofi</a>
            <a href="#features" className="hover:text-primary-luxury transition-colors">Fasilitas</a>
            <a href="#units" className="hover:text-primary-luxury transition-colors">Koleksi Unit</a>
            <Button asChild className="bg-primary-luxury hover:bg-gold-luxury text-white px-8 h-12 rounded-none text-[10px] tracking-widest transition-all duration-500">
              <a href={waLink} target="_blank" rel="noopener noreferrer">KONSULTASI GRATIS</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Philosophy Section */}
      <section id="home" className="relative py-40 overflow-hidden">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div {...fadeIn} className="space-y-16">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-gold-luxury" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-luxury">Portofolio Eksklusif</span>
                </div>
                <h2 className="font-serif text-7xl md:text-8xl font-bold leading-[1] text-primary-luxury">
                  Hunian <br />
                  <span className="italic text-gold-luxury font-light">Tanpa Kompromi.</span>
                </h2>
                <p className="max-w-lg text-zinc-500 leading-relaxed text-base font-light italic">
                  "Rumah bukan hanya sekadar tempat berteduh, tapi merupakan cerminan dari pencapaian hidup Anda."
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8">
                  <div className="space-y-2">
                    <p className="text-3xl font-serif text-primary-luxury">Jakarta Barat</p>
                    <p className="text-[10px] uppercase tracking-widest text-zinc-400">Lokasi Strategis</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-3xl font-serif text-primary-luxury">Unit Terbatas</p>
                    <p className="text-[10px] uppercase tracking-widest text-zinc-400">Eksklusivitas Tinggi</p>
                  </div>
                </div>
              </div>
              <Button asChild className="bg-primary-luxury hover:bg-gold-luxury text-white h-16 px-12 text-[10px] tracking-[0.2em] uppercase rounded-none transition-all duration-700 group w-fit">
                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  LIHAT DETAIL PROYEK <ArrowRight className="ml-4 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </a>
              </Button>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="relative aspect-[4/5] bg-zinc-100 overflow-hidden shadow-[40px_40px_80px_rgba(0,0,0,0.1)] group">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/7507069f-4425-4e2b-b4f0-d22477c24a14/bisasa-17679433617995.png?width=1200&height=1600&resize=contain" 
                alt="Luxury Home" 
                fill 
                className="object-cover transition-transform duration-[3s] group-hover:scale-110" 
              />
              <div className="absolute bottom-0 left-0 w-full p-12 bg-gradient-to-t from-primary-luxury/90 to-transparent text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <p className="text-[10px] uppercase tracking-[0.4em] text-gold-luxury font-bold mb-2">Harga Mulai Dari</p>
                <p className="text-4xl font-serif font-bold">IDR 1 Milyar-an</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Highlights Banner */}
      <section className="bg-primary-luxury py-20">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            {[
              { icon: MapPin, title: "Lokasi Strategis", desc: "Berada di jantung Meruya, Jakarta Barat." },
              { icon: Clock, title: "Akses Cepat", desc: "Hanya 5 menit ke 2 Akses Pintu Tol." },
              { icon: Sparkles, title: "Dekat Mall", desc: "10 menit menuju Mall Puri Indah." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center gap-6 text-white group">
                <div className="w-16 h-16 shrink-0 flex items-center justify-center border border-white/10 group-hover:bg-gold-luxury transition-all duration-500">
                  <item.icon className="h-6 w-6 text-gold-luxury group-hover:text-primary-luxury" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-bold mb-1">{item.title}</h4>
                  <p className="text-white/40 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-48 bg-zinc-50/50">
        <div className="mx-auto max-w-7xl px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-gold-luxury">Kenyamanan Utama</span>
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-primary-luxury">Fasilitas Berkelas</h2>
            </div>
            <p className="max-w-md text-zinc-400 text-sm font-light leading-relaxed">
              Setiap detail dirancang dengan standar kualitas tertinggi untuk menunjang gaya hidup modern Anda yang dinamis.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: ShieldCheck, title: "Keamanan 24/7", desc: "Sistem One-Gate dengan pemantauan CCTV pintar & petugas keamanan profesional." },
              { icon: Trees, title: "Lingkungan Asri", desc: "Taman hijau yang tertata rapi memberikan udara segar setiap hari." },
              { icon: Car, title: "Double Carport", desc: "Area parkir luas yang dirancang khusus untuk kendaraan kesayangan Anda." },
              { icon: Droplets, title: "Sistem Air Bersih", desc: "Infrastruktur air modern dengan sistem filtrasi untuk kesehatan keluarga." }
            ].map((f, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.15 }} className="group p-10 bg-white border border-zinc-100 hover:border-gold-luxury/30 transition-all duration-500 hover:shadow-2xl">
                <div className="w-12 h-12 flex items-center justify-center bg-zinc-50 rounded-full mb-8 group-hover:bg-primary-luxury transition-colors duration-500">
                  <f.icon className="h-5 w-5 text-gold-luxury group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary-luxury mb-4">{f.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-light">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Units Section */}
      <section id="units" className="py-48 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-32 space-y-6 text-center">
            <div className="inline-block px-6 py-2 border border-gold-luxury/30 text-[10px] font-bold uppercase tracking-[0.8em] text-gold-luxury mb-4">
              KOLEKSI EKSKLUSIF
            </div>
            <h2 className="font-serif text-6xl md:text-8xl font-bold text-primary-luxury">Pilih Rumah Anda</h2>
            <p className="text-zinc-400 font-light tracking-widest uppercase text-[10px]">Harmoni antara Estetika dan Fungsionalitas</p>
          </div>
          
          <div className="grid grid-cols-1 gap-40">
            {houseTypes.map((unit, i) => (
              <motion.div key={i} {...fadeIn} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}>
                <div className="flex-1 w-full group relative">
                  <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100 shadow-[20px_20px_60px_rgba(0,0,0,0.05)]">
                    <div className="absolute inset-0 bg-primary-luxury/5 z-10 group-hover:bg-transparent transition-colors duration-700" />
                    <Image 
                      src={unit.img} 
                      alt={unit.title} 
                      fill 
                      className="object-cover transition-transform duration-[3s] group-hover:scale-110" 
                    />
                    <div className="absolute top-8 left-8 z-20 bg-primary-luxury text-gold-luxury px-6 py-3 text-[10px] font-bold tracking-widest border border-gold-luxury/30 shadow-xl">
                      {unit.tag}
                    </div>
                  </div>
                  {/* Floating Specs Card */}
                  <div className={`absolute bottom-0 ${i % 2 === 0 ? '-right-10' : '-left-10'} z-30 bg-white p-8 shadow-2xl hidden lg:block border border-zinc-50 w-64`}>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <Bed className="h-5 w-5 text-gold-luxury" />
                        <div>
                          <p className="text-[10px] uppercase font-bold text-zinc-400">Tidur</p>
                          <p className="text-sm font-bold text-primary-luxury">{unit.specs.bed} Kamar</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Bath className="h-5 w-5 text-gold-luxury" />
                        <div>
                          <p className="text-[10px] uppercase font-bold text-zinc-400">Mandi</p>
                          <p className="text-sm font-bold text-primary-luxury">{unit.specs.bath} Kamar</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Car className="h-5 w-5 text-gold-luxury" />
                        <div>
                          <p className="text-[10px] uppercase font-bold text-zinc-400">Carport</p>
                          <p className="text-sm font-bold text-primary-luxury">{unit.specs.car} Mobil</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-12">
                  <div className="space-y-6">
                    <h3 className="font-serif text-6xl md:text-7xl font-bold text-primary-luxury">{unit.title}</h3>
                    <div className="flex items-center gap-4">
                      <p className="text-gold-luxury font-serif text-3xl italic">Mulai IDR {unit.price}</p>
                      <div className="h-[1px] flex-1 bg-gold-luxury/20" />
                    </div>
                    <p className="text-sm text-primary-luxury/60 font-medium tracking-widest uppercase">{unit.highlight}</p>
                  </div>

                  <p className="text-zinc-500 leading-relaxed font-light text-lg">
                    Didesain untuk keluarga yang menghargai kualitas hidup, tipe {unit.title} menawarkan ruang yang luas dengan sirkulasi udara alami dan pencahayaan maksimal.
                  </p>

                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    {unit.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-gold-luxury" />
                        <span className="text-xs font-bold text-primary-luxury uppercase tracking-wider">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-primary-luxury hover:bg-gold-luxury text-white h-16 px-12 text-[10px] tracking-[0.3em] uppercase rounded-none transition-all duration-500 flex-1">
                      <a href={waLink} target="_blank" rel="noopener noreferrer">DISKUSI UNIT</a>
                    </Button>
                    <Button variant="outline" className="border-zinc-200 h-16 px-12 text-[10px] tracking-[0.3em] uppercase rounded-none hover:bg-zinc-50 transition-all duration-500 flex-1">
                      UNDUH E-BROSUR
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-56 bg-primary-luxury relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full border-l border-white/5" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5" />
        <div className="mx-auto max-w-4xl px-8 relative z-10 text-center space-y-16">
          <div className="space-y-8">
            <span className="text-gold-luxury text-[11px] font-bold uppercase tracking-[1em]">KESEMPATAN TERBATAS</span>
            <h2 className="font-serif text-6xl md:text-8xl font-bold text-white leading-[1.1]">Miliki Warisan <br /><span className="italic font-light text-gold-luxury">Masa Depan Anda</span></h2>
            <p className="text-white/40 text-lg font-light max-w-xl mx-auto leading-relaxed italic">
              "Jadilah bagian dari komunitas eksklusif di Meruya. Konsultasikan kebutuhan hunian mewah Anda bersama tim spesialis kami hari ini."
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button asChild className="bg-gold-luxury hover:bg-white text-primary-luxury h-20 px-16 font-bold text-[11px] tracking-[0.4em] uppercase rounded-none transition-all duration-700 w-full md:w-auto shadow-2xl">
              <a href={waLink} target="_blank" rel="noopener noreferrer">HUBUNGI KONSULTAN</a>
            </Button>
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 h-20 px-16 font-bold text-[11px] tracking-[0.4em] uppercase rounded-none transition-all duration-700 w-full md:w-auto">
              JADWALKAN VISIT
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 bg-white border-t border-zinc-50">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 items-start mb-24">
            <div className="space-y-8">
              <h3 className="font-serif text-3xl font-bold tracking-[0.2em] text-primary-luxury uppercase">
                VELMORA <span className="text-gold-luxury">RESIDENCE</span>
              </h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                Hunian mewah dengan sentuhan modern minimalis di lokasi paling strategis Meruya, Jakarta Barat. Definisi baru kenyamanan hidup perkotaan dengan standar estetika tertinggi.
              </p>
            </div>
            <div className="space-y-8">
               <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-900">Navigasi Utama</h4>
               <ul className="space-y-4 text-[11px] uppercase tracking-[0.1em] text-zinc-400 font-medium">
                  <li><a href="#home" className="hover:text-gold-luxury transition-colors">Filosofi Hunian</a></li>
                  <li><a href="#features" className="hover:text-gold-luxury transition-colors">Fasilitas Eksklusif</a></li>
                  <li><a href="#units" className="hover:text-gold-luxury transition-colors">Koleksi Unit</a></li>
                  <li><a href={waLink} target="_blank" rel="noopener noreferrer" className="hover:text-gold-luxury transition-colors">Hubungi Kami</a></li>
               </ul>
            </div>
            <div className="space-y-8">
               <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-900">Hubungi Kami</h4>
               <div className="space-y-4">
                  <p className="text-sm text-zinc-400 font-light leading-relaxed">
                    Kavling Eksklusif Meruya<br />
                    Jakarta Barat, Indonesia
                  </p>
                  <a href={waLink} target="_blank" rel="noopener noreferrer" className="text-primary-luxury font-bold text-lg hover:text-gold-luxury transition-colors block">
                    +62 813-1800-0597
                  </a>
               </div>
            </div>
          </div>
          <div className="pt-16 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-300">
              &copy; {new Date().getFullYear()} VELMORA RESIDENCE LUXURY PORTFOLIO. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-12 text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold">
              <a href="#" className="hover:text-gold-luxury transition-colors">Instagram</a>
              <a href="#" className="hover:text-gold-luxury transition-colors">Facebook</a>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="hover:text-gold-luxury transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
