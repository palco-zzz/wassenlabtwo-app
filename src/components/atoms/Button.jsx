import React from 'react';
// import { ArrowRight } from 'lucide-react'; // Removed unused import

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  icon: Icon,
  type = 'button'
}) => {
  const baseStyles = "rounded-full font-bold transition-all inline-flex items-center gap-2 justify-center";
  
  const variants = {
    primary: "bg-red-600 text-white hover:bg-black shadow-lg shadow-red-600/30",
    secondary: "bg-white text-black hover:bg-red-600 hover:text-white border border-neutral-200",
    outline: "bg-transparent border border-red-600/30 bg-red-50 text-red-600",
    black: "bg-black text-white hover:bg-white hover:text-black",
    whatsapp: "bg-[#25D366] hover:bg-[#1ebc57] text-white"
  };

  /* 
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-lg"
  };
  
  // Removed unused sizeClass
  */

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
      {Icon && <Icon className="w-5 h-5" />}
    </button>
  );
};

export default Button;
