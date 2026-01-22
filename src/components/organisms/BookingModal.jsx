import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';

const BookingModal = ({ isOpen, onClose, initialCategory = 'Sepatu', initialService = '' }) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedService, setSelectedService] = useState(initialService);

  // Auto-update state if props change (simple sync)
  // In a real app, might want useEffect to sync changes when openings
  React.useEffect(() => {
    if (isOpen) {
        setSelectedCategory(initialCategory || 'Sepatu');
        setSelectedService(initialService || '');
    }
  }, [isOpen, initialCategory, initialService]);

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "6285259499125";
    const message = `Halo Admin Wassen Lab! 👋%0A%0ASaya mau tanya/booking untuk:%0A• Kategori: *${selectedCategory}*%0A• Service: *${selectedService || 'Konsultasi Dulu'}*%0A%0AMohon infonya ya!`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-neutral-900 border border-neutral-700 w-full max-w-md rounded-3xl p-6 md:p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
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
  );
};

export default BookingModal;
