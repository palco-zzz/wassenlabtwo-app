import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Crosshair, Plus } from 'lucide-react';
import Badge from '../atoms/Badge';

const Hero = ({ onOpenBooking }) => {
  return (
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
          className="mb-6 flex justify-center"
        >
          <Badge>ASLI PURWOREJO PRIDE</Badge>
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
          onClick={onOpenBooking}
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
  );
};

export default Hero;
