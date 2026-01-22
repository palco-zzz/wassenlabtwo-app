import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Clock } from 'lucide-react';

const Location = () => {
  return (
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
  );
};

export default Location;
