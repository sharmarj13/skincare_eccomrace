import { motion } from 'motion/react';
import PageBanner from '../layout/PageBanner';
import SectionHeading from '../common/SectionHeading';
import { Sparkles, Compass, ShieldAlert, Users, Flower, Feather } from 'lucide-react';

export default function AboutView() {
  const stats = [
    { number: '100%', label: 'Active Ingredients', desc: 'No cheap fillers. We use potent, stable Vitamin C and deep hydrators.' },
    { number: 'SPF50', label: 'Maximum Protection', desc: 'Broad-spectrum UVA/UVB defense without any sticky white cast.' },
    { number: '24-Hr', label: 'Deep Hydration', desc: 'Our Moisturizer Cream locks in moisture for a full 24 hours of plumpness.' },
    { number: '50K+', label: 'Glowing Customers', desc: 'Restoring confidence and radiant skin to over 50,000 customers globally.' }
  ];

  const values = [
    {
      icon: <Flower className="w-5 h-5 text-brand-600" />,
      title: 'Brighten & Revitalize',
      text: 'Our Vit C Face Wash and Face Serum combination clears away dullness and rapidly fades dark spots.'
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-brand-600" />,
      title: 'Defend & Protect',
      text: 'Our Sunscreen Spf50 PA++++ acts as an invisible shield against tanning, sunburn, and premature aging.'
    },
    {
      icon: <Compass className="w-5 h-5 text-brand-600" />,
      title: 'Hydrate & Refresh',
      text: 'Experience 24-hour hydration with our Moisturizer Cream, and wake up your senses with the Lemon Body Wash.'
    }
  ];

  return (
    <div className="bg-[#FAF8F5] pb-20">
      {/* Premium Banner */}
      <PageBanner
        title="Our Story & Aligned Philosophy"
        subtitle="Unveiling Pure Dermal Luxury"
        backgroundImage="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1200&auto=format&fit=crop"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        
        {/* The Founders/Story Intro row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          
          <div className="text-left">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-500 mb-3 block">
              The Complete Daily Routine
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#221F1D] leading-tight mb-6">
              Born from a search for a simple, highly effective skincare routine.
            </h2>
            
            <p className="text-[#221F1D] font-light text-base leading-relaxed mb-4">
              Our journey began when we realized that achieving glowing, flawless skin shouldn't require a complicated 10-step process or incredibly expensive treatments. Most people just need high-quality basics that actually work.
            </p>
            
            <p className="text-stone-500 font-light text-sm leading-relaxed mb-6">
              We decided to cut through the noise and create the ultimate everyday lineup. We formulated a powerful Vit C Face Wash and Serum for brightening, a 24-hour Moisturizer Cream for deep hydration, an invisible Sunscreen SPF 50 for absolute protection, and a refreshing Lemon Body Wash. It's everything you need for healthy, radiant skin.
            </p>

            <blockquote className="border-l-2 border-brand-500 pl-6 my-6 italic text-stone-850 text-sm font-medium">
              "We focus on exactly what your skin needs: Brightening Vitamin C, intense 24-hour hydration, and maximum SPF 50 sun protection. Simple, clean, and highly effective."
            </blockquote>
          </div>

          <div className="relative">
            {/* Embedded side decor art */}
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t border-l border-brand-300 pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b border-r border-brand-300 pointer-events-none" />
            
            <div className="rounded-2xl overflow-hidden shadow-premium-xl border border-white/60 aspect-[4/3] bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop"
                alt="Slow botanical filtering processes inside laboratory"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>

        {/* Counter/Statistics Showcase Section */}
        <div className="mt-24 sm:mt-32 p-8 sm:p-14 bg-[#1C1917] rounded-3xl text-white relative overflow-hidden shadow-premium-xl">
          {/* Subtle background glow */}
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-500/10 blur-3xl" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="flex flex-col items-start text-left border-l border-stone-800 lg:pl-6 first:border-0"
              >
                <span className="font-serif text-4xl sm:text-5xl font-bold text-brand-400 tracking-tight">
                  {stat.number}
                </span>
                <span className="text-xs uppercase tracking-widest font-semibold mt-2 text-stone-200">
                  {stat.label}
                </span>
                <p className="text-stone-400 text-xs font-light mt-3 leading-relaxed">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* The Mission & Core Values */}
        <div className="mt-24 sm:mt-32 text-center flex flex-col items-center">
          <SectionHeading
            subtitle="The Pillars"
            title="SÔL Botanical Core Values"
            description="Our three key promises to your skin's health. Craftsmanship, biocompatibility, and pure organic clinical results."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-left">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white p-8 rounded-2xl border border-stone-200/50 shadow-premium flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mb-6 border border-brand-100">
                  {v.icon}
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#221F1D] mb-3">
                  {v.title}
                </h3>
                <p className="text-xs text-stone-600 font-light leading-relaxed">
                  {v.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
