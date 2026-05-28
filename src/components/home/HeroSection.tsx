import { motion } from 'motion/react';
import CustomButton from '../common/CustomButton';
import { Sparkles, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onShopClick: () => void;
  onAboutClick: () => void;
}

export default function HeroSection({ onShopClick, onAboutClick }: HeroSectionProps) {
  return (
    <section aria-label="Hero Introduction" className="relative w-full flex items-center justify-center overflow-hidden bg-stone-900">

      {/* Background Image Full Width */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/brand/hero_banner.jpg"
          alt="Boonava Hero Banner"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-black/50 sm:bg-black/40 mix-blend-multiply" />
      </div>

      {/* Main Content Centered */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-16 sm:py-20 lg:py-24 flex flex-col items-center text-center">

        {/* Animated top micro banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6 sm:mb-8"
        >
          <Sparkles className="w-4 h-4 text-brand-300 animate-spin" />
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white">
            Your Complete Glowing Skin Routine
          </span>
        </motion.div>

        {/* Majestic Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-tight text-white drop-shadow-md"
        >
          Unlock Your <br className="hidden sm:block" />
          <span className="text-brand-300 font-normal italic pr-2">Natural</span>
          Glow.
        </motion.h1>

        {/* Subtext description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 sm:mt-8 text-white/90 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl drop-shadow-sm"
        >
          Discover the perfect daily skincare routine. From our brightening Vitamin C Face Serum to our broad-spectrum Sunscreen SPF 50, every product is formulated to give you flawless, healthy skin.
        </motion.p>

        {/* Actions Button Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onShopClick}
            className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-full font-semibold uppercase tracking-widest text-xs transition-colors shadow-lg focus:outline-none"
          >
            Shop The Routine
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onAboutClick}
            className="w-full sm:w-auto flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-semibold uppercase tracking-widest text-xs transition-colors shadow-lg focus:outline-none"
          >
            Our Formulation
          </button>
        </motion.div>

      </div>
    </section>
  );
}
