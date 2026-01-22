import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Clock, Sparkles, Zap, ShieldCheck, Instagram, MessageCircle, ChevronRight, Tag, Menu, X, Plus, Crosshair, ArrowUpRight, Truck, MessageSquare, CheckCircle } from 'lucide-react';

const WassenLabLanding = () => {
const targetRef = useRef(null);

// State
const [activeTab, setActiveTab] = useState('shoes');
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isBookingOpen, setIsBookingOpen] = useState(false); // State untuk Booking Modal
const [scrolled, setScrolled] = useState(false);
const [activeSection, setActiveSection] = useState('home');
const [hoveredService, setHoveredService] = useState(0);

// Booking Form State
const [selectedCategory, setSelectedCategory] = useState('Sepatu');
const [selectedService, setSelectedService] = useState('');

// Handle Scroll Effect
useEffect(() => {
const handleScroll = () => {
setScrolled(window.scrollY > 50);
if (window.scrollY < 100) setActiveSection('home');
};

    // PERBAIKAN DI SINI: Menggunakan Center Line Detection (-50%)
    // Ini memastikan menu baru aktif HANYA jika elemen tersebut melewati garis tengah layar.
    // Menghindari active state "nyangkut" di section sebelumnya.
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['services', 'pricelist', 'membership', 'location'];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };

}, []);

const handleSmoothScroll = (e, href) => {
e.preventDefault();
const targetId = href.replace('#', '');
const element = document.getElementById(targetId);
if (element) {
const offset = 100;
const elementPosition = element.getBoundingClientRect().top;
const offsetPosition = elementPosition + window.pageYOffset - offset;
window.scrollTo({ top: offsetPosition, behavior: "smooth" });

      // Update state manual agar instant feedback
      setActiveSection(targetId);
      setIsMenuOpen(false);
    }

};

// Logic Generate Link WA
const handleWhatsAppRedirect = () => {
const phoneNumber = "6285259499125";
const message = `Halo Admin Wassen Lab! 👋%0A%0ASaya mau tanya/booking untuk:%0A• Kategori: *${selectedCategory}*%0A• Service: *${selectedService || 'Konsultasi Dulu'}*%0A%0AMohon infonya ya!`;
window.open(`https://wa.me/${phoneNumber}?text=${message}`, '\_blank');
setIsBookingOpen(false);
};

const servicesList = [
{
id: 0,
title: "SHOES TREATMENT",
subtitle: "Deep Clean • Unyellowing • Repaint",
desc: "Perawatan komplit dari ujung tali sampai sol. Apapun bahannya (Canvas, Suede, Leather), kita bikin glowing lagi.",
image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=800",
icon: <Sparkles className="w-6 h-6" />
},
{
id: 1,
title: "EXPRESS SERVICE",
subtitle: "2 - 6 Jam Selesai",
desc: "Layanan prioritas buat lo yang dikejar waktu. Sat set wat wet, sepatu bersih dalam hitungan jam.",
image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=800",
icon: <Zap className="w-6 h-6" />
},
{
id: 2,
title: "BAGS & LUGGAGE",
subtitle: "Leather Care • Deep Cleaning",
desc: "Dari tas sekolah, slingbag, sampai koper traveling. Kita bersihin luar dalam biar higienis dan awet.",
image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800",
icon: <ShieldCheck className="w-6 h-6" />
},
{
id: 3,
title: "HELMETS",
subtitle: "Interior Cleaning • Visor Polish",
desc: "Helm wangi, kaca bening, riding jadi lebih fokus. Gak ada lagi cerita kepala gatal pas macet-macetan.",
image: "https://images.unsplash.com/photo-1592860805567-c155ff72ddfc?auto=format&fit=crop&q=80&w=800",
icon: <span className="font-black text-lg">H</span>
},
{
id: 4,
title: "HATS & SANDALS",
subtitle: "Cap • Bucket Hat • Slides",
desc: "Detailing maksimal untuk aksesoris lo. Topi jamuran atau sandal dekil? Serahin aja ke kita.",
image: "https://images.unsplash.com/photo-1582748155985-8012643a7582?auto=format&fit=crop&q=80&w=800",
icon: <Tag className="w-6 h-6" />
}
];

const pricelist = {
shoes: [
{ name: "Fast Clean", price: "25K - 30K", desc: "Cuci bagian luar (midsole & upper). Cocok buat yang buru-buru mau nongkrong.", time: "24 Jam" },
{ name: "Deep Clean", price: "35K - 50K", desc: "Cuci total luar dalam + tali + insole. Solusi buat sepatu yang dekilnya udah mendarah daging.", time: "3-4 Hari" },
{ name: "Unyellowing", price: "50K - 70K", desc: "Ngilangin noda kuning di midsole. Biar ga dikatain pake sepatu tua.", time: "4-5 Hari" },
{ name: "Whitening", price: "Start 60K", desc: "Khusus sepatu kanvas putih yang udah kusam, kita bikin silau lagi.", time: "4-5 Hari" },
{ name: "Reglue / Jahit", price: "Start 30K", desc: "Lem ulang atau jahit sol yang mangap. Penyelamat sepatu tempur.", time: "3-5 Hari" },
{ name: "Repaint", price: "Start 100K", desc: "Cat ulang warna pudar atau ganti warna total. Auto serasa beli baru.", time: "1-2 Minggu" },
],
bags: [
{ name: "Small Bag", price: "30K - 40K", desc: "Slingbag, Waistbag, Pouch. Biar tetep kece pas OOTD.", time: "3-4 Hari" },
{ name: "Medium Bag", price: "40K - 55K", desc: "Backpack sekolah/kuliah, Tote bag. Bebaskan dari debu jalanan.", time: "3-5 Hari" },
{ name: "Large Bag / Koper", price: "Start 60K", desc: "Carrier, Duffel, Koper. Bersih higienis sebelum traveling.", time: "5-7 Hari" },
{ name: "Leather Care", price: "Start 50K", desc: "Perawatan khusus bahan kulit biar ga jamuran dan pecah-pecah.", time: "5-7 Hari" },
],
helmets: [
{ name: "Helm Half Face", price: "30K", desc: "Cuci busa & poles kaca. Wangi semerbak, rambut ga apek.", time: "2-3 Hari" },
{ name: "Helm Full Face", price: "40K", desc: "Detailing luar dalam. Visor jernih, pandangan masa depan cerah.", time: "2-3 Hari" },
],
others: [
{ name: "Topi (Caps/Bucket)", price: "20K - 25K", desc: "Biar kepala tetep adem dan ga ketombean.", time: "2-3 Hari" },
{ name: "Sandal", price: "20K - 25K", desc: "Cuci bersih sandal kesayangan. Slide atau gladiator, gas.", time: "2 Hari" },
{ name: "Express Service", price: "+15K / Item", desc: "Layanan prioritas. Sat set wat wet, 2-6 jam kelar.", time: "2-6 Jam" },
]
};

const navLinks = [
{ title: "SERVICES", href: "#services" },
{ title: "PRICELIST", href: "#pricelist" },
{ title: "MEMBERSHIP", href: "#membership" },
{ title: "LOCATION", href: "#location" },
];

return (
<div className="bg-neutral-50 text-neutral-900 font-sans overflow-x-hidden selection:bg-red-600 selection:text-white">

      {/* --- UNIQUE NAVBAR --- */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 pointer-events-none`}
      >
        <div className={`
          pointer-events-auto
          flex items-center justify-between
          px-2 py-2 md:px-6 md:py-3
          bg-neutral-900/80 backdrop-blur-md
          border border-neutral-700/50
          rounded-full shadow-2xl shadow-black/20
          transition-all duration-500
          ${scrolled ? "w-[95%] md:w-[60%]" : "w-[95%] md:w-[80%]"}
        `}>
            {/* Logo */}
            <div className="flex items-center gap-2 pl-2">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center font-black text-white text-xs">W</div>
                <span className="font-bold text-white tracking-tight hidden md:block">WASSEN LAB.</span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1 bg-black/40 rounded-full px-2 py-1 border border-white/10">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                        key={link.title}
                        href={link.href}
                        onClick={(e) => handleSmoothScroll(e, link.href)}
                        className={`
                          px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer
                          ${isActive
                            ? "bg-white text-black shadow-lg scale-105"
                            : "text-neutral-400 hover:text-white hover:bg-neutral-800"
                          }
                        `}
                    >
                        {link.title}
                    </a>
                  );
                })}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 pr-1">
                 <button
                  onClick={() => setIsBookingOpen(true)}
                  className="hidden md:flex px-5 py-2 bg-white text-black rounded-full text-xs font-black hover:bg-red-600 hover:text-white transition-colors items-center gap-2"
                >
                  BOOKING <ArrowRight className="w-3 h-3" />
                </button>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors md:hidden"
                >
                    <Menu className="w-5 h-5" />
                </button>
            </div>
        </div>
      </motion.nav>

      {/* --- BOOKING WIZARD MODAL (NEW FEATURE) --- */}
      <AnimatePresence>
        {isBookingOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setIsBookingOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-neutral-900 border border-neutral-700 w-full max-w-md rounded-3xl p-6 md:p-8 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsBookingOpen(false)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-2xl font-black text-white mb-2">QUICK BOOKING</h2>
              <p className="text-neutral-400 text-sm mb-6">Pilih layanan, kita bikinin pesan WA-nya. Sat set.</p>

              {/* Step 1: Kategori */}
              <div className="mb-6">
                <label className="text-xs font-bold text-neutral-500 uppercase mb-2 block">1. Mau Cuci Apa?</label>
                <div className="flex flex-wrap gap-2">
                  {['Sepatu', 'Tas', 'Helm', 'Lainnya'].map(cat => (
                    <button
                      key={cat}
                      onClick={() => { setSelectedCategory(cat); setSelectedService(''); }}
                      className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${selectedCategory === cat ? 'bg-red-600 text-white' : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Layanan (Dynamic based on Category) */}
              <div className="mb-8">
                <label className="text-xs font-bold text-neutral-500 uppercase mb-2 block">2. Pilih Treatment</label>
                <select
                  className="w-full bg-neutral-800 text-white border border-neutral-700 rounded-xl p-3 focus:outline-none focus:border-red-600"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                >
                  <option value="">-- Pilih Layanan --</option>
                  {selectedCategory === 'Sepatu' && (
                    <>
                      <option value="Fast Clean">Fast Clean (25k-30k)</option>
                      <option value="Deep Clean">Deep Clean (35k-50k)</option>
                      <option value="Unyellowing">Unyellowing (50k-70k)</option>
                      <option value="Whitening">Whitening (Start 60k)</option>
                      <option value="Repaint">Repaint (Start 100k)</option>
                    </>
                  )}
                  {selectedCategory === 'Tas' && (
                    <>
                      <option value="Small Bag">Small Bag (30k-40k)</option>
                      <option value="Medium Bag">Medium Bag (40k-55k)</option>
                      <option value="Large Bag/Koper">Large Bag/Koper (Start 60k)</option>
                    </>
                  )}
                  {selectedCategory === 'Helm' && (
                    <>
                      <option value="Helm Half Face">Half Face (30k)</option>
                      <option value="Helm Full Face">Full Face (40k)</option>
                    </>
                  )}
                   {selectedCategory === 'Lainnya' && (
                    <>
                      <option value="Topi">Topi (20k-25k)</option>
                      <option value="Sandal">Sandal (20k-25k)</option>
                    </>
                  )}
                </select>
              </div>

              <button
                onClick={handleWhatsAppRedirect}
                className="w-full bg-[#25D366] hover:bg-[#1ebc57] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                LANJUT KE WHATSAPP
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- FULLSCREEN MENU OVERLAY --- */}
      <AnimatePresence>
        {isMenuOpen && (
            <motion.div
                initial={{ opacity: 0, clipPath: "circle(0% at 90% 10%)" }}
                animate={{ opacity: 1, clipPath: "circle(150% at 90% 10%)" }}
                exit={{ opacity: 0, clipPath: "circle(0% at 90% 10%)" }}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                className="fixed inset-0 bg-red-600 z-[60] flex flex-col justify-center items-center overflow-hidden"
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-black rounded-full blur-[100px] opacity-10 animate-pulse pointer-events-none"></div>

                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-8 right-8 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform z-20"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="flex flex-col gap-2 text-center z-10">
                     {navLinks.map((link, index) => (
                        <motion.a
                            key={link.title}
                            href={link.href}
                            onClick={(e) => handleSmoothScroll(e, link.href)}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                            className="text-6xl md:text-8xl font-black text-black hover:text-white transition-colors tracking-tighter uppercase relative group cursor-pointer"
                        >
                            {link.title}
                        </motion.a>
                    ))}
                    <button
                        onClick={() => { setIsMenuOpen(false); setIsBookingOpen(true); }}
                        className="mt-8 px-8 py-4 bg-black text-white rounded-full font-bold text-xl hover:bg-white hover:text-black transition-all inline-flex items-center gap-3 justify-center"
                    >
                        GAS BOOKING <Zap className="w-5 h-5 fill-current" />
                    </button>
                </div>
            </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <header id="home" className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-neutral-50">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#d4d4d4_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-neutral-50 via-transparent to-neutral-50 pointer-events-none"></div>

        <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute z-0 w-[80vw] md:w-[40vw] max-w-[500px] opacity-80 mix-blend-multiply pointer-events-none"
        >
            <img
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop"
                alt="Sneaker"
                className="w-full h-full object-contain drop-shadow-2xl grayscale contrast-125"
            />
        </motion.div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-red-600 rounded-full blur-[120px] opacity-10 animate-blob z-0 pointer-events-none" />

        <div className="absolute top-24 left-6 md:left-12 opacity-30 animate-pulse"><Crosshair className="w-8 h-8 text-red-600" /></div>
        <div className="absolute bottom-24 right-6 md:right-12 opacity-30 animate-pulse delay-700"><Plus className="w-8 h-8 text-neutral-900" /></div>

        <div className="z-10 text-center px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 border border-red-600/30 bg-red-50 px-3 py-1 rounded-full mb-6 backdrop-blur-sm"
          >
            <div className="w-2 h-2 bg-red-600 rounded-full animate-ping"></div>
            <span className="text-xs md:text-sm font-mono tracking-widest text-red-600 font-bold">ASLI PURWOREJO PRIDE</span>
          </motion.div>

          <div className="relative">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] text-neutral-900 mix-blend-color-dodge md:mix-blend-normal"
            >
              BARANG LO
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black relative z-10">AUTO GLOW UP.</span>
            </motion.h1>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -right-4 md:-top-10 md:-right-20 w-24 h-24 md:w-40 md:h-40 border-2 border-red-600 rounded-full flex items-center justify-center bg-white/50 backdrop-blur-md"
            >
              <div className="text-[10px] md:text-xs font-mono text-red-600 text-center leading-tight">ANTI BULUK<br/>CLUB • EST.2024</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-col md:flex-row gap-4 justify-center items-center"
          >
             <p className="text-lg md:text-xl font-medium max-w-lg text-neutral-600 bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm text-center">
              Tempat healing buat sepatu, tas, helm, & koper lo yang lelah. Bikin fresh lagi kayak baru jadian.
            </p>
          </motion.div>

          {/* CTA ON HERO */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            onClick={() => setIsBookingOpen(true)}
            className="mt-6 bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black transition-colors shadow-lg shadow-red-600/30 inline-flex items-center gap-2"
          >
            ORDER SEKARANG <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-[10px] font-mono tracking-widest">SCROLL DOWN</span>
          <ArrowRight className="rotate-90 text-neutral-900 w-4 h-4" />
        </motion.div>
      </header>

      {/* --- HOW IT WORKS (NEW SECTION) --- */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
           <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-4 w-full md:w-1/3">
                 <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-red-600 font-bold shrink-0">1</div>
                 <div>
                    <h4 className="font-bold text-lg uppercase flex items-center gap-2"><MessageSquare className="w-4 h-4"/> Konsultasi</h4>
                    <p className="text-sm text-neutral-500">Kirim foto, cek harga & estimasi.</p>
                 </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-neutral-200"></div>
              <div className="flex items-center gap-4 w-full md:w-1/3">
                 <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-red-600 font-bold shrink-0">2</div>
                 <div>
                    <h4 className="font-bold text-lg uppercase flex items-center gap-2"><Truck className="w-4 h-4"/> Drop / Pick Up</h4>
                    <p className="text-sm text-neutral-500">Antar ke outlet atau kita jemput.</p>
                 </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-neutral-200"></div>
              <div className="flex items-center gap-4 w-full md:w-1/3">
                 <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-red-600 font-bold shrink-0">3</div>
                 <div>
                    <h4 className="font-bold text-lg uppercase flex items-center gap-2"><CheckCircle className="w-4 h-4"/> Terima Bersih</h4>
                    <p className="text-sm text-neutral-500">Barang glowing siap diajak jalan.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- MARQUEE --- */}
      <div className="py-12 bg-black overflow-hidden whitespace-nowrap border-y border-neutral-800">
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: "-50%" }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8 text-6xl md:text-8xl font-black text-neutral-800 uppercase tracking-tighter shrink-0">
              <span>Cuci Bersih</span>
              <span className="text-red-600">Unyellowing</span>
              <span>Repaint</span>
              <span>Reglue</span>
              <span>Whitening</span>
              <span>Wangi</span>
              <span className="text-red-600">Kinclong</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 px-6 md:px-12 max-w-7xl mx-auto" ref={targetRef}>
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end border-b pb-4 border-neutral-200">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">MENU<br/>TREATMENT</h2>
          <p className="text-right font-mono text-sm text-neutral-500 mt-4 md:mt-0">PERAWATAN SULTAN<br/>HARGA KAWAN</p>
        </div>

        {/* CONTAINER UTAMA */}
        <div className="flex flex-col lg:flex-row gap-8 min-h-[500px]">

          {/* LEFT: MENU LIST */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-2">
            {servicesList.map((service, index) => (
              <motion.div
                key={service.id}
                onHoverStart={() => setHoveredService(index)}
                onClick={() => setHoveredService(index)}
                className={`
                  group relative p-6 cursor-pointer border-b border-neutral-200 transition-all duration-300
                  ${hoveredService === index ? "bg-neutral-100 lg:bg-transparent lg:pl-8" : "hover:bg-neutral-50"}
                `}
              >
                {/* Active Indicator Line (Desktop) */}
                {hoveredService === index && (
                  <motion.div
                    layoutId="activeLine"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-red-600 hidden lg:block"
                  />
                )}

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-sm ${hoveredService === index ? "text-red-600 font-bold" : "text-neutral-400"}`}>
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className={`text-2xl md:text-4xl font-black uppercase tracking-tight transition-colors ${hoveredService === index ? "text-neutral-900" : "text-neutral-400"}`}>
                        {service.title}
                      </h3>
                      {/* Subtitle visible on hover or active */}
                      <div className={`overflow-hidden transition-all duration-300 ${hoveredService === index ? "max-h-20 opacity-100 mt-2" : "max-h-0 opacity-0 lg:max-h-0 lg:opacity-0"}`}>
                         <p className="text-sm font-bold text-red-600 uppercase tracking-widest">{service.subtitle}</p>
                         {/* Mobile Description */}
                         <p className="text-sm text-neutral-500 mt-2 lg:hidden leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  </div>

                  <ArrowUpRight className={`w-6 h-6 transition-transform duration-300 ${hoveredService === index ? "rotate-45 text-red-600" : "text-neutral-300"}`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: PREVIEW AREA (DESKTOP ONLY) */}
          <div className="hidden lg:block w-1/2 relative h-[600px] bg-neutral-900 rounded-[2rem] overflow-hidden">
             <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredService}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full"
                >
                   {/* Background Image */}
                   <div
                      className="absolute inset-0 bg-cover bg-center opacity-60"
                      style={{ backgroundImage: `url(${servicesList[hoveredService].image})` }}
                   ></div>

                   {/* Gradient Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                   {/* Content */}
                   <div className="absolute bottom-0 left-0 p-12 text-white">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 text-black">
                          {servicesList[hoveredService].icon}
                      </div>
                      <h3 className="text-5xl font-black mb-4 tracking-tighter">{servicesList[hoveredService].title}</h3>
                      <p className="text-xl text-neutral-300 max-w-md leading-relaxed">
                        {servicesList[hoveredService].desc}
                      </p>
                      <div className="mt-8 flex gap-4">
                         <div className="px-4 py-2 border border-white/20 rounded-full text-sm font-mono uppercase tracking-widest text-neutral-400">
                           Professional Care
                         </div>
                         <button
                            onClick={() => setIsBookingOpen(true)}
                            className="px-6 py-2 bg-white text-black font-bold rounded-full text-sm font-mono uppercase tracking-widest hover:bg-red-600 hover:text-white transition-colors"
                         >
                           Book This
                         </button>
                      </div>
                   </div>
                </motion.div>
             </AnimatePresence>
          </div>

        </div>
      </section>

      {/* --- PRICELIST SECTION --- */}
      <section id="pricelist" className="py-24 bg-white text-neutral-900 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-red-600 text-white font-bold px-3 py-1 text-xs mb-4 rounded-full uppercase tracking-wider">
            Harga Bersahabat
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4">
            DAFTAR <span className="text-red-600 italic">MAHAR.</span>
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Pilih paket yang cocok buat dompet dan kebutuhan lo. Gak perlu jual ginjal, santai aja.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['shoes', 'bags', 'helmets', 'others'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full text-sm font-bold uppercase transition-all border-2 ${
                activeTab === tab
                ? 'bg-black text-white border-black scale-105 shadow-lg'
                : 'bg-transparent text-neutral-400 border-neutral-200 hover:border-black hover:text-black'
              }`}
            >
              {tab === 'shoes' ? 'Sepatu' : tab === 'bags' ? 'Tas & Koper' : tab === 'helmets' ? 'Helm' : 'Lainnya'}
            </button>
          ))}
        </div>

        {/* Price List Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {pricelist[activeTab].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className="group border border-neutral-200 p-6 rounded-2xl hover:border-red-600 transition-colors bg-neutral-50 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Tag className="w-12 h-12 text-red-600" />
                </div>

                <div className="flex justify-between items-start mb-2 relative z-10">
                  <h3 className="text-xl font-bold uppercase">{item.name}</h3>
                  <div className="text-right">
                     <span className="block text-xl font-black text-red-600">{item.price}</span>
                  </div>
                </div>

                <p className="text-neutral-500 text-sm mb-4 relative z-10 pr-12 leading-relaxed">
                  {item.desc}
                </p>

                <div className="flex justify-between items-center mt-4">
                    <div className="inline-flex items-center gap-2 bg-black text-white px-3 py-1 rounded text-xs font-bold font-mono">
                      <Clock className="w-3 h-3" /> Est: {item.time}
                    </div>
                    <button
                        onClick={() => {
                            setSelectedCategory(activeTab === 'shoes' ? 'Sepatu' : activeTab === 'bags' ? 'Tas' : activeTab === 'helmets' ? 'Helm' : 'Lainnya');
                            setSelectedService(item.name);
                            setIsBookingOpen(true);
                        }}
                        className="text-red-600 font-bold text-sm hover:underline"
                    >
                        Order Ini
                    </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* --- MEMBERSHIP SECTION (ANTI-GRID / ORGANIC) --- */}
      <section id="membership" className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block bg-red-600 text-black font-bold px-3 py-1 text-sm mb-4 transform -rotate-2"
              >
                KHUSUS YANG SETIA
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-black leading-none mb-6">
                JOIN CIRCLE<br/>
                <span className="text-neutral-500">KAMI,</span> BESTIE.
              </h2>
              <p className="text-neutral-400 text-lg mb-8 max-w-md">
                Jajan 30rb dapet <span className="text-white font-bold">100 Poin</span>.
                Nabung poinnya, panen treatment GRATIS. Cuan parah kan?
              </p>

              <motion.a
                href="https://wa.me/6285259499125?text=Halo%20Wassen%20Lab,%20mau%20join%20circle%20dong"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-red-600 hover:text-white transition-all"
              >
                GABUNG MEMBER SEKARANG <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/10 to-transparent pointer-events-none"></div>

              <div className="space-y-4 font-mono text-sm">
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl flex justify-between items-center"
                >
                  <span>Regular Fast Clean</span>
                  <span className="text-red-500 font-bold">700 Poin</span>
                </motion.div>

                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl flex justify-between items-center ml-0 md:ml-8"
                >
                  <span>Regular Deep Clean</span>
                  <span className="text-red-500 font-bold">1000 Poin</span>
                </motion.div>

                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl flex justify-between items-center"
                >
                  <span>Regular Unyellowing</span>
                  <span className="text-red-500 font-bold">1500 Poin</span>
                </motion.div>

                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-neutral-800 border border-red-600/50 p-4 rounded-xl flex justify-between items-center ml-0 md:ml-12 shadow-lg shadow-red-900/20"
                >
                  <span className="font-bold">Regular Whitening</span>
                  <span className="text-white font-bold bg-red-600 px-2 py-0.5 rounded">1700 Poin</span>
                </motion.div>
              </div>

              <p className="text-xs text-neutral-500 mt-6 text-right italic">
                *Syarat: Wajib follow IG & TikTok @wassen.lab
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- LOCATIONS --- */}
      <section id="location" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
         <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Drop Barang<br/>Lo Di Sini</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.a
              href="https://maps.app.goo.gl/sJwnPbsuZajDLu277"
              target="_blank"
              whileHover={{ y: -10 }}
              className="group relative h-[400px] bg-neutral-900 rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden text-white"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">MARKAS PUSAT</span>
                <h3 className="text-2xl font-bold mt-4">Wassen Lab<br/>Purworejo</h3>
              </div>
              <div className="relative z-10 border-t border-neutral-700 pt-4">
                <p className="text-sm text-neutral-300 flex items-start gap-2">
                  <MapPin className="w-4 h-4 shrink-0 mt-1" />
                  Jl. Jenderal Sudirman No.93, Purworejo.
                </p>
                <p className="text-sm text-neutral-400 mt-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> 10.00 - 20.00 WIB
                </p>
              </div>
            </motion.a>

            <motion.a
              href="https://maps.app.goo.gl/2gLWXinPi14FRfe58"
              target="_blank"
              whileHover={{ y: -10 }}
              className="group bg-white border-2 border-black rounded-[2rem] p-8 flex flex-col justify-between"
            >
              <div>
                <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full">DROP POINT</span>
                <h3 className="text-2xl font-bold mt-4 text-black">DW by SAKA</h3>
              </div>
              <div className="border-t border-neutral-200 pt-4">
                 <p className="text-sm text-neutral-600 flex items-start gap-2">
                  <MapPin className="w-4 h-4 shrink-0 mt-1" />
                  Jl. A. Yani No.2, Purworejo.
                </p>
                <div className="mt-4 flex items-center text-red-600 font-bold text-sm group-hover:gap-2 transition-all">
                  Cek Maps <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </motion.a>

            <motion.a
              href="https://www.google.com/maps/place/Alfamart+Kutoarjo+2/@-7.7215649,109.912448,3a,57.3y,198.95h,82.35t"
              target="_blank"
              whileHover={{ y: -10 }}
              className="group bg-white border-2 border-black rounded-[2rem] p-8 flex flex-col justify-between"
            >
              <div>
                <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full">DROP POINT</span>
                <h3 className="text-2xl font-bold mt-4 text-black">Alfamart Kutoarjo 2</h3>
              </div>
              <div className="border-t border-neutral-200 pt-4">
                 <p className="text-sm text-neutral-600 flex items-start gap-2">
                  <MapPin className="w-4 h-4 shrink-0 mt-1" />
                  Jl. Pangeran Diponegoro No.107, Kutoarjo.
                </p>
                <div className="mt-4 flex items-center text-red-600 font-bold text-sm group-hover:gap-2 transition-all">
                  Cek Maps <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </motion.a>
         </div>
      </section>

      {/* --- FLOATING WHATSAPP --- */}
      <motion.button
        onClick={() => setIsBookingOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-xl z-50 flex items-center justify-center"
      >
        <MessageCircle className="w-8 h-8" />
      </motion.button>

      {/* --- FOOTER --- */}
      <footer className="bg-neutral-900 text-neutral-400 py-12 px-6 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black text-white tracking-tighter">WASSEN LAB.</h2>
            <p className="text-sm mt-2">Solusi barang lo biar ga flop.</p>
          </div>
          <div className="flex items-center gap-6">
             <a href="https://www.instagram.com/wassen.lab/" target="_blank" className="hover:text-white transition-colors"><Instagram /></a>
             <a href="https://www.tiktok.com/@wassen.lab?is_from_webapp=1&sender_device=pc" target="_blank" className="hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
             </a>
          </div>
          <p className="text-xs text-neutral-600">© 2024 Wassen Lab Purworejo. Jangan dicolong ya bang desainnya.</p>
        </div>
      </footer>
    </div>

);
};

export default WassenLabLanding;
