import { motion } from 'motion/react';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 bg-[#FAF8F5] flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center">
        {/* Animated logo ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 rounded-full border-2 border-brand-100 border-t-brand-500 mb-6"
        />

        {/* Brand floating label */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0, 1, 0.5, 1], y: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="font-serif text-xl font-medium tracking-[0.2em] text-[#221F1D]"
        >
          SÔL BOTANICALS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-[10px] uppercase tracking-[0.34em] text-brand-500 mt-2 font-medium"
        >
          Luminous Skincare Craft
        </motion.p>
      </div>
    </div>
  );
}
