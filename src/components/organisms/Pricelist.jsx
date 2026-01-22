import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import PriceCard from '../molecules/PriceCard';

const pricelistData = {
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

const Pricelist = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState('shoes');

  // Helper to pre-fill booking modal
  // Note: Since we are just opening the modal, we might need to pass data up 
  // or the modal handles its own state. 
  // For this refactor, we will just open the modal, 
  // as passing data would require changing the `onOpenBooking` signature in parent.
  // We can enhance this by passing an object { category, service } to onOpenBooking later.
  const handleOrder = (serviceName) => {
      // Logic to set selected service in parent/modal would go here
      // limiting scope to visual refactor first.
      onOpenBooking(); 
  };

  return (
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
          {pricelistData[activeTab].map((item, index) => (
            <PriceCard 
                key={item.name} 
                item={item} 
                index={index} 
                onOrder={handleOrder} 
            />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Pricelist;
