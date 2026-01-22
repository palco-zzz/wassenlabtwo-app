import React from 'react';

const NavLinks = ({ links, activeSection, onNavigate }) => {
  return (
    <div className="hidden md:flex items-center gap-1 bg-black/40 rounded-full px-2 py-1 border border-white/10">
      {links.map((link) => {
        const isActive = activeSection === link.href.substring(1);
        return (
          <a
            key={link.title}
            href={link.href}
            onClick={(e) => onNavigate(e, link.href)}
            className={`
              px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer
              ${isActive
                ? "bg-white text-black shadow-lg scale-105"
                : "text-neutral-400 hover:text-white hover:bg-neutral-800"
              }
            `}
          >
            {link.title}
          </a>
        );
      })}
    </div>
  );
};

export default NavLinks;
