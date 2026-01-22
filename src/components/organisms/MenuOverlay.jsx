import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap } from 'lucide-react';

const MenuOverlay = ({ isOpen, onClose, navLinks, onNavigate, onOpenBooking }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
           initial={{ opacity: 0, clipPath: "circle(0% at 90% 10%)" }}
           animate={{ opacity: 1, clipPath: "circle(150% at 90% 10%)" }}
           exit={{ opacity: 0, clipPath: "circle(0% at 90% 10%)" }}
           transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
           className="fixed inset-0 bg-red-600 z-[60] flex flex-col justify-center items-center overflow-hidden"
        >
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-black rounded-full blur-[100px] opacity-10 animate-pulse pointer-events-none"></div>

           <button
              onClick={onClose}
              className="absolute top-8 right-8 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform z-20"
           >
              <X className="w-6 h-6" />
           </button>

           <div className="flex flex-col gap-2 text-center z-10">
               {navLinks.map((link, index) => (
                  <motion.a
                      key={link.title}
                      href={link.href}
                      onClick={(e) => onNavigate(e, link.href)}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                      className="text-6xl md:text-8xl font-black text-black hover:text-white transition-colors tracking-tighter uppercase relative group cursor-pointer"
                  >
                      {link.title}
                  </motion.a>
              ))}
              <button
                  onClick={() => { onClose(); onOpenBooking(); }}
                  className="mt-8 px-8 py-4 bg-black text-white rounded-full font-bold text-xl hover:bg-white hover:text-black transition-all inline-flex items-center gap-3 justify-center"
              >
                  GAS BOOKING <Zap className="w-5 h-5 fill-current" />
              </button>
           </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;
