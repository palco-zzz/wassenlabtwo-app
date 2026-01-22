import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  return (
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
  );
};

export default Marquee;
