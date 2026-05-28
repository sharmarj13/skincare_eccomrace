import { motion } from 'motion/react';
import { Leaf, Award, ShieldCheck, Sun } from 'lucide-react';

export default function BrandInfo() {
  const values = [
    {
      icon: <Leaf className="w-6 h-6 text-brand-600" />,
      title: 'Vitamin C Brightening',
      description: 'Our Vitamin C Face Wash and Serum use stable antioxidants to fade dark spots and give you a flawless, natural glow.'
    },
    {
      icon: <Sun className="w-6 h-6 text-brand-600" />,
      title: 'Maximum Sun Protection',
      description: 'Sunscreen Spf50 PA++++ guarantees broad-spectrum defense against UVA/UVB rays without leaving a white cast or sticky residue.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-600" />,
      title: 'Deep Hydration Repair',
      description: 'The Moisturizer Cream locks in intense moisture for 24 hours, actively repairing your skin barrier and preventing flakiness.'
    },
    {
      icon: <Award className="w-6 h-6 text-brand-600" />,
      title: 'Zesty Body Refresh',
      description: 'Our Lemon Body Wash uses natural citrus extracts to cleanse deeply, waking up your senses while keeping skin soft.'
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 0.7, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8 }}
              className="absolute -inset-4 bg-brand-100/40 rounded-3xl blur-2xl filter"
            />

            {/* Clean luxury cosmetics visual */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl aspect-[4/5] border border-stone-200 shadow-premium-lg"
            >
              <img
                src="/images/brand/add-product.jpg"
                alt="Organic orange essential oil drops falling onto amber dispenser"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Right Grid Content: Features List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start text-left"
          >
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-500 mb-3">Our Manifestos</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#221F1D] mb-6 leading-tight">
              A Complete Routine <br />For Flawless Skin.
            </h2>
            <p className="text-stone-600 font-light text-base leading-relaxed mb-10 max-w-xl">
              We believe skincare should be simple, effective, and deeply nourishing. Our 5-step daily routine covers every base—from intense brightening and hydration to maximum sun protection. Here is what we deliver:
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

          </motion.div>

        </div>
      </div>
    </section>
  );
}
