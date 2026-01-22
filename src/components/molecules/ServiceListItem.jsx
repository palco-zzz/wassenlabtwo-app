import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ServiceListItem = ({ service, index, isActive, onHover }) => {
  return (
    <motion.div
      onHoverStart={() => onHover(index)}
      onClick={() => onHover(index)}
      className={`
        group relative p-6 cursor-pointer border-b border-neutral-200 transition-all duration-300
        ${isActive ? "bg-neutral-100 lg:bg-transparent lg:pl-8" : "hover:bg-neutral-50"}
      `}
    >
      {/* Active Indicator Line (Desktop) */}
      {isActive && (
        <motion.div
          layoutId="activeLine"
          className="absolute left-0 top-0 bottom-0 w-1 bg-red-600 hidden lg:block"
        />
      )}

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className={`font-mono text-sm ${isActive ? "text-red-600 font-bold" : "text-neutral-400"}`}>
            0{index + 1}
          </span>
          <div>
            <h3 className={`text-2xl md:text-4xl font-black uppercase tracking-tight transition-colors ${isActive ? "text-neutral-900" : "text-neutral-400"}`}>
              {service.title}
            </h3>
            {/* Subtitle visible on hover or active */}
            <div className={`overflow-hidden transition-all duration-300 ${isActive ? "max-h-20 opacity-100 mt-2" : "max-h-0 opacity-0 lg:max-h-0 lg:opacity-0"}`}>
                <p className="text-sm font-bold text-red-600 uppercase tracking-widest">{service.subtitle}</p>
                {/* Mobile Description */}
                <p className="text-sm text-neutral-500 mt-2 lg:hidden leading-relaxed">{service.desc}</p>
            </div>
          </div>
        </div>

        <ArrowUpRight className={`w-6 h-6 transition-transform duration-300 ${isActive ? "rotate-45 text-red-600" : "text-neutral-300"}`} />
      </div>
    </motion.div>
  );
};

export default ServiceListItem;
