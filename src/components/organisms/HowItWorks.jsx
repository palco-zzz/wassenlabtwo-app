import React from 'react';
import { MessageSquare, Truck, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  return (
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
  );
};

export default HowItWorks;
