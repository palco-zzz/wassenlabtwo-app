import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-12 px-6 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-black text-white tracking-tighter">WASSEN LAB.</h2>
          <p className="text-sm mt-2">Solusi barang lo biar ga flop.</p>
        </div>
        <div className="flex items-center gap-6">
           <a href="https://www.instagram.com/wassen.lab/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Instagram /></a>
           <a href="https://www.tiktok.com/@wassen.lab?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
           </a>
        </div>
        <div className="text-xs text-neutral-600 text-center md:text-right flex flex-col items-center md:items-end gap-1">
          <p>© 2024 Wassen Lab Purworejo. Jangan dicolong ya bang desainnya.</p>
          <p>Design by <a href="https://instagram.com/zxenxi" target="_blank" rel="noreferrer" className="font-bold hover:text-red-500 transition-colors">ZXENXI</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
