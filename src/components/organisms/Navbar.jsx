import React from 'react';
import { motion } from 'framer-motion';
import { Menu, ArrowRight } from 'lucide-react';
import NavLinks from '../molecules/NavLinks';
// import Button from '../atoms/Button'; // Removed unused import

const Navbar = ({ scrolled, activeSection, onNavigate, onOpenBooking, onOpenMenu }) => {
  const navLinks = [
    { title: "HOME", href: "#home" },
    { title: "SERVICES", href: "#services" },
    { title: "PRICELIST", href: "#pricelist" },
    { title: "MEMBERSHIP", href: "#membership" },
    { title: "LOCATION", href: "#location" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 pointer-events-none`}
    >
      <div className={`
        pointer-events-auto
        flex items-center justify-between
        px-2 py-2 md:px-6 md:py-3
        bg-neutral-400/80 backdrop-blur-md
        border border-neutral-200/50
        rounded-full shadow-2xl shadow-black/20
        transition-all duration-500
        ${scrolled ? "w-[95%] md:w-[60%]" : "w-[95%] md:w-[80%]"}
      `}>
          {/* Logo */}
          <div className="flex items-center gap-2 pl-2">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center font-black text-white text-xs">W</div>
              <span className="font-bold text-white tracking-tight hidden md:block">WASSEN LAB.</span>
          </div>

          {/* Desktop Links */}
          <NavLinks links={navLinks} activeSection={activeSection} onNavigate={onNavigate} />

          {/* Right Actions */}
          <div className="flex items-center gap-2 pr-1">
               <button
                onClick={onOpenBooking}
                className="hidden md:flex px-5 py-2 bg-white text-black rounded-full text-xs font-black hover:bg-red-600 hover:text-white transition-colors items-center gap-2"
              >
                BOOKING <ArrowRight className="w-3 h-3" />
              </button>

              {/* Mobile Menu Button */}
              <button
                  onClick={onOpenMenu}
                  className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors md:hidden"
              >
                  <Menu className="w-5 h-5" />
              </button>
          </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
