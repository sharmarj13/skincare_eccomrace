import { motion } from 'motion/react';

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  dark?: boolean;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = 'center',
  dark = false,
}: SectionHeadingProps) {
  const getAlignmentClass = () => {
    if (align === 'left') return 'text-left items-start';
    if (align === 'right') return 'text-right items-end';
    return 'text-center items-center';
  };

  return (
    <div className={`flex flex-col max-w-2xl ${getAlignmentClass()} mb-12 sm:mb-16 md:mb-20`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-500 mb-3"
        >
          {subtitle}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight ${
          dark ? 'text-white' : 'text-[#221F1D]'
        }`}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`mt-4 text-base sm:text-lg font-light leading-relaxed ${
            dark ? 'text-stone-300' : 'text-stone-600'
          }`}
        >
          {description}
        </motion.p>
      )}

      <motion.div
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: '48px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="h-[2px] bg-brand-400 mt-6"
      />
    </div>
  );
}
