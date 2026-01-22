import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Membership = () => {
  return (
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
  );
};

export default Membership;
