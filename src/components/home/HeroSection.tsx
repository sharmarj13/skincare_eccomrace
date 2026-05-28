import { motion } from 'motion/react';
import CustomButton from '../common/CustomButton';
import { Sparkles, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

interface HeroSectionProps {
  onShopClick: () => void;
  onAboutClick: () => void;
}

export default function HeroSection({ onShopClick, onAboutClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-[calc(100vh-100px)] flex items-center justify-center overflow-hidden bg-[#FAF8F5] pb-12 pt-4">
      {/* Shifted Amber/Orange glow spheres */}
      <div className="absolute top-1/4 -left-32 w-80 sm:w-[450px] h-80 sm:h-[450px] rounded-full bg-brand-100/30 filter blur-3xl opacity-60 animate-pulse mix-blend-multiply" />
      <div className="absolute right-10 bottom-12 w-64 sm:w-[350px] h-64 sm:h-[350px] rounded-full bg-orange-100/45 filter blur-3xl opacity-50 mix-blend-screen" />

      {/* Vertical subtle text left rail */}
      <span className="absolute left-6 bottom-20 text-[9px] uppercase tracking-[0.4em] text-stone-300 font-bold hidden xl:block origin-left -rotate-90">
        Organic Citrus Laboratory &copy; 2026
      </span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
        
        {/* Left Grid: Copywriting & CTA */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Animated top micro banner */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-100 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-500 animate-spin" />
            <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-700">
              Introducing Face & Body Oils
            </span>
          </motion.div>

          {/* Majestic Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-medium tracking-tight leading-[1.08] text-[#221F1D]"
          >
            Pure Citrus <br />
            <span className="text-brand-500 font-normal italic pr-2">Restorative</span> 
            Washes.
          </motion.h1>

          {/* Subtext description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-stone-600 text-base sm:text-lg font-light leading-relaxed max-w-xl"
          >
            Every formula is slow-crafted with medical-grade Vitamin C extract from blood orange citrus and distilled neroli blossom. Elevate your cleansing routine into a pure calming ritual.
          </motion.p>

          {/* Actions Button Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <CustomButton
              onClick={onShopClick}
              variant="primary"
              size="lg"
              className="group cursor-pointer"
              icon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
            >
              Shop Cleansers
            </CustomButton>
            
            <CustomButton
              onClick={onAboutClick}
              variant="outline"
              size="lg"
              className="cursor-pointer"
            >
              Our Formulation
            </CustomButton>
          </motion.div>

          {/* Micro Brand Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="mt-12 sm:mt-16 grid grid-cols-3 gap-6 sm:gap-10 border-t border-stone-200/60 pt-6 w-full"
          >
            <div>
              <span className="block font-serif text-2xl font-bold text-[#221F1D] tracking-tight">100%</span>
              <span className="block text-[10px] uppercase tracking-wider text-stone-500 font-semibold mt-1">Dermal Organic</span>
            </div>
            <div>
              <span className="block font-serif text-2xl font-bold text-[#221F1D] tracking-tight">pH 5.5</span>
              <span className="block text-[10px] uppercase tracking-wider text-stone-500 font-semibold mt-1">Skin-Barrier Safe</span>
            </div>
            <div>
              <span className="block font-serif text-2xl font-bold text-[#221F1D] tracking-tight">12K+</span>
              <span className="block text-[10px] uppercase tracking-wider text-stone-500 font-semibold mt-1">Glowing Reviews</span>
            </div>
          </motion.div>

        </div>

        {/* Right Grid: Visual High-end Bottle Canvas */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          
          {/* Animated floating ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="w-72 sm:w-[420px] h-72 sm:h-[420px] rounded-full border border-stone-200/50 border-dashed"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="w-56 sm:w-[320px] h-56 sm:h-[320px] rounded-full border border-orange-200/30"
            />
          </div>

          {/* Floating Luxury Amber Bottle with Glass shadow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, type: 'spring', bounce: 0.2 }}
            className="relative z-10 w-64 sm:w-80 aspect-[3/4]"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-300/10 via-amber-200/5 to-transparent blur-2xl rounded-full" />
            
            {/* The main beauty bottle */}
            <motion.img
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              src="https://images.unsplash.com/photo-1608248597481-496100c8c836?q=80&w=800&auto=format&fit=crop"
              alt="SÓL Citrus Glow Washing Bottle"
              className="w-full h-full object-cover rounded-3xl shadow-premium-xl border border-white/60 referrer-policy='no-referrer'"
            />

            {/* Float badge 1: Vitamin C */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-3 -right-3 sm:-right-6 glass-effect p-3.5 rounded-2xl shadow-premium-lg flex items-center gap-2 border border-white/70"
            >
              <div className="w-5.5 h-5.5 rounded-full bg-brand-100 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] font-bold tracking-wide uppercase text-stone-800">C-GLOW VITAMINS</span>
                <span className="block text-[8px] text-stone-500 font-light">Skin brightening compound</span>
              </div>
            </motion.div>

            {/* Float badge 2: Cruelty Free */}
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-10 -left-6 sm:-left-10 glass-effect p-3 px-4 rounded-2xl shadow-premium-lg flex items-center gap-2 border border-white/70"
            >
              <div className="w-5.5 h-5.5 rounded-full bg-brand-50 flex items-center justify-center">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
              </div>
              <span className="text-[9px] font-bold tracking-wider text-stone-800 uppercase">
                Dermatologically Tested
              </span>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
