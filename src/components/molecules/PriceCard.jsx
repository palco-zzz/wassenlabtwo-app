import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Clock } from 'lucide-react';

const PriceCard = ({ item, index, onOrder }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: index * 0.1 }}
      className="group border border-neutral-200 p-6 rounded-2xl hover:border-red-600 transition-colors bg-neutral-50 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Tag className="w-12 h-12 text-red-600" />
      </div>

      <div className="flex justify-between items-start mb-2 relative z-10">
        <h3 className="text-xl font-bold uppercase">{item.name}</h3>
        <div className="text-right">
            <span className="block text-xl font-black text-red-600">{item.price}</span>
        </div>
      </div>

      <p className="text-neutral-500 text-sm mb-4 relative z-10 pr-12 leading-relaxed">
        {item.desc}
      </p>

      <div className="flex justify-between items-center mt-4">
          <div className="inline-flex items-center gap-2 bg-black text-white px-3 py-1 rounded text-xs font-bold font-mono">
            <Clock className="w-3 h-3" /> Est: {item.time}
          </div>
          <button
              onClick={() => onOrder(item.name)}
              className="text-red-600 font-bold text-sm hover:underline"
          >
              Order Ini
          </button>
      </div>
    </motion.div>
  );
};

export default PriceCard;
