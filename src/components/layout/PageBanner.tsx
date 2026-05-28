import { motion } from 'motion/react';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageBanner({
  title,
  subtitle,
  backgroundImage = 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=1400&auto=format&fit=crop',
}: PageBannerProps) {
  return (
    <div className="relative h-[250px] sm:h-[300px] md:h-[350px] flex items-center justify-center overflow-hidden bg-[#FAF8F5]">
      {/* Background with orange overlay */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover object-center filter grayscale opacity-25 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 bg-brand-50/15" />
      </div>

      {/* Decorative vertical floating line */}
      <div className="absolute left-1/2 top-0 bottom-12 w-[1px] bg-stone-200/50 -translate-x-1/2" />

      {/* Dynamic Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {subtitle && (
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.28em] font-semibold text-brand-500 block mb-3"
          >
            {subtitle}
          </motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#221F1D]"
        >
          {title}
        </motion.h1>

        {/* Short decorative underline */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '36px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-[2px] bg-brand-500 mx-auto mt-5"
        />
      </div>
    </div>
  );
}
