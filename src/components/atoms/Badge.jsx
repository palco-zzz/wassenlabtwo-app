import React from 'react';

const Badge = ({ children, className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-2 border border-red-600/30 bg-red-50 px-3 py-1 rounded-full backdrop-blur-sm ${className}`}>
      <div className="w-2 h-2 bg-red-600 rounded-full animate-ping"></div>
      <span className="text-xs md:text-sm font-mono tracking-widest text-red-600 font-bold">
        {children}
      </span>
    </div>
  );
};

export default Badge;
