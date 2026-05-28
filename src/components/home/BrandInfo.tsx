import { motion } from 'motion/react';
import { Leaf, Award, Heart, ShieldCheck, Flame, Sun } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

export default function BrandInfo() {
  const values = [
    {
      icon: <Leaf className="w-6 h-6 text-brand-600" />,
      title: '100% Biocompatible Extracts',
      description: 'Slow-crafted from high-purity blood orange rind water and cold-pressed neroli petals. Zero synthetics, petroleum derivatives, or colorants.'
    },
    {
      icon: <Award className="w-6 h-6 text-brand-600" />,
      title: 'Dermatologist Safe',
      description: 'Dermatologically audited and proven hypoallergenic. Perfectly safe skin food for hyper-sensitive conditions.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-600" />,
      title: 'Mantle Harmony (pH 5.5)',
      description: 'Formulated to align exactly with your acid mantle pH parameters. Your moisture envelope remains perfectly resilient.'
    },
    {
      icon: <Sun className="w-6 h-6 text-brand-600" />,
      title: 'Eco-Ethical Harvesting',
      description: 'Sustainable hand-harvested ingredients in the Mediterranean basin. Bottles are 100% PCR recyclable amber glass.'
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-white relative overflow-hidden" id="brand-manifest">
      {/* Decorative vertical rails */}
      <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-stone-100 hidden lg:block" />
      <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-stone-100 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Grid Content: Image story */}
          <div className="relative">
            {/* Ambient orange fluid aura behind image */}
            <div className="absolute -inset-4 bg-brand-100/40 rounded-3xl blur-2xl filter opacity-70" />
            
            {/* Clean luxury cosmetics visual */}
            <div className="relative overflow-hidden rounded-3xl aspect-[4/5] border border-stone-200 shadow-premium-lg">
              <img
                src="https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=800&auto=format&fit=crop"
                alt="Organic orange essential oil drops falling onto amber dispenser"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              
              {/* Glass absolute banner overlay */}
              <div className="absolute bottom-6 left-6 right-6 glass-effect p-6 rounded-2xl shadow-deep text-left">
                <span className="text-brand-500 font-bold uppercase tracking-[0.2em] text-[10px]">THE SÔL LAB</span>
                <p className="font-serif text-lg text-[#221F1D] font-medium mt-1 leading-snug">
                  "Sourcing absolute botanical freshness is not a detail—it is the foundation of structural skin radiance."
                </p>
                <span className="block text-[11px] text-stone-500 font-light mt-3">— Dr. Aurelia Vance, Chief of Botanical Engineering</span>
              </div>
            </div>
          </div>

          {/* Right Grid Content: Features List */}
          <div className="flex flex-col items-start text-left">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-500 mb-3">Our Manifestos</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#221F1D] mb-6 leading-tight">
              Biomimetic Dermal Care <br />Without Compromise.
            </h2>
            <p className="text-stone-600 font-light text-base leading-relaxed mb-10 max-w-xl">
              Our lab believes in cosmetic transparency. Every single drop serves a health purpose for your skin cells. Here is our gold standard commitment to you:
            </p>

            {/* Grid layout of value cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {values.map((val, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="p-5.5 rounded-2xl border border-stone-100 bg-[#FAF8F5]/50 hover:bg-[#FAF8F5] hover:border-brand-200/50 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-white border border-stone-200/40 shadow-sm flex items-center justify-center mb-4">
                    {val.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-[#221F1D] uppercase tracking-wider mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs text-stone-600 font-light leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
