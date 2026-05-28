import { motion } from 'motion/react';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 bg-[#FAF8F5] flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center">
        {/* Animated logo image */}
        <div className="relative flex items-center justify-center mb-8">
          <motion.img 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            src="/images/brand/logo.jpeg" 
            alt="Boonava Logo" 
            className="h-24 sm:h-28 w-auto object-contain"
          />
        </div>

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
