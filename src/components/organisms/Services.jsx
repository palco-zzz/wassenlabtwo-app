import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Zap, ShieldCheck, Tag } from 'lucide-react';
import ServiceListItem from '../molecules/ServiceListItem';

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

const Services = ({ onOpenBooking }) => {
  const [hoveredService, setHoveredService] = useState(0);

  return (
    <section id="services" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-12 flex flex-col md:flex-row justify-between items-end border-b pb-4 border-neutral-200">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">MENU<br/>TREATMENT</h2>
        <p className="text-right font-mono text-sm text-neutral-500 mt-4 md:mt-0">PERAWATAN SULTAN<br/>HARGA KAWAN</p>
      </div>

      {/* CONTAINER UTAMA */}
      <div className="flex flex-col lg:flex-row gap-8 min-h-[500px]">

        {/* LEFT: MENU LIST */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-2">
          {servicesList.map((service, index) => (
            <ServiceListItem 
                key={service.id} 
                service={service} 
                index={index} 
                isActive={hoveredService === index} 
                onHover={setHoveredService} 
            />
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
                          onClick={onOpenBooking}
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
  );
};

export default Services;
