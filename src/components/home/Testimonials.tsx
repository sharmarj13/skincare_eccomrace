import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import SectionHeading from '../common/SectionHeading';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
  };

  const stopAutoSlide = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const handlePrev = () => {
    stopAutoSlide();
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    startAutoSlide();
  };

  const handleNext = () => {
    stopAutoSlide();
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    startAutoSlide();
  };

  const active = testimonials[activeIndex];

  return (
    <section className="py-20 sm:py-24 bg-[#1C1917] text-white relative overflow-hidden" id="testimonials">
      {/* Decorative luxury absolute lights */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-500/10 blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-orange-400/5 blur-3xl opacity-30 pointer-events-none" />

      {/* Luxury frame details */}
      <div className="absolute top-12 left-12 w-6 h-[1px] bg-stone-700 hidden lg:block" />
      <div className="absolute top-12 left-12 w-[1px] h-6 bg-stone-700 hidden lg:block" />
      <div className="absolute bottom-12 right-12 w-6 h-[1px] bg-stone-700 hidden lg:block" />
      <div className="absolute bottom-12 right-12 w-[1px] h-6 bg-stone-700 hidden lg:block" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        <SectionHeading
          subtitle="Dermal Testimonials"
          title="Loved by Sensitive Skin Profiles"
          description="Read real botanical outcomes from vetted clinicians, minimalists, and skin health specialists worldwide."
          dark
        />

        {/* Carousel Frame Wrapper */}
        <div className="relative w-full overflow-hidden min-h-[380px] sm:min-h-[320px] flex items-center justify-center p-2">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 45 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -45 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="glass-dark-effect p-8 sm:p-12 rounded-3xl shadow-premium-xl max-w-4xl w-full flex flex-col sm:flex-row gap-8 sm:gap-10 items-center text-left"
            >
              {/* Quote Mark background */}
              <div className="absolute top-6 right-8 text-white/5 pointer-events-none">
                <Quote className="w-28 h-28 stroke-[1px]" />
              </div>

              {/* Reviewer Avatar and skin type */}
              <div className="w-24 sm:w-32 shrink-0 flex flex-col items-center">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-brand-500 shadow-premium">
                  <img
                    src={active.avatar}
                    alt={active.name}
                    className="w-full h-full object-cover filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <span className="mt-4 block bg-brand-500/10 text-brand-300 text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-brand-500/20">
                  {active.skinType}
                </span>
              </div>

              {/* Review Content block */}
              <div className="flex-1">
                {/* Score Stars */}
                <div className="flex text-amber-400 gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-amber-500" />
                  ))}
                </div>

                <blockquote className="font-serif text-lg sm:text-xl font-light italic leading-relaxed text-stone-200">
                  "{active.quote}"
                </blockquote>

                <div className="mt-6">
                  <h4 className="text-[#FAF8F5] text-sm font-semibold uppercase tracking-widest">{active.name}</h4>
                  <span className="text-stone-400 text-xs font-light mt-1 block">{active.role}</span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* Controller Indicators */}
        <div className="flex items-center gap-6 mt-10">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-stone-800 bg-[#FAF8F5]/5 text-white hover:bg-brand-500 hover:border-brand-500 flex items-center justify-center cursor-pointer transition-all focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator with active progress line */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  stopAutoSlide();
                  setActiveIndex(idx);
                  startAutoSlide();
                }}
                className={`h-2 rounded-full cursor-pointer transition-all duration-300 focus:outline-none ${
                  idx === activeIndex ? 'w-6 bg-brand-500' : 'w-2 bg-stone-700 hover:bg-stone-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-stone-800 bg-[#FAF8F5]/5 text-white hover:bg-brand-500 hover:border-brand-500 flex items-center justify-center cursor-pointer transition-all focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
