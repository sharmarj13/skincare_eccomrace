import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../../types';
import ProductCard from '../products/ProductCard';
import SectionHeading from '../common/SectionHeading';

interface ProductShowcaseProps {
  products: Product[];
  onAddToCart: (product: Product, quantity: number) => void;
  onClickProduct: (slug: string) => void;
}

type FilterCategory = 'all' | 'face' | 'body' | 'set';

export default function ProductShowcase({
  products,
  onAddToCart,
  onClickProduct,
}: ProductShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');

  const categories = [
    { id: 'all', label: 'All Catalog' },
    { id: 'face', label: 'Face Cleansing' },
    { id: 'body', label: 'Body Restorative' },
    { id: 'set', label: 'Ritual Sets' },
  ];

  // Curate filtered list
  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="py-20 sm:py-24 bg-[#FAF8F5] relative overflow-hidden" id="product-showcase">
      {/* Visual background circles */}
      <div className="absolute top-1/2 -left-36 w-96 h-96 rounded-full bg-brand-100/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        <SectionHeading
          subtitle="Botanical Catalog"
          title="Curated Dermal Solutions"
          description="Each recipe is tailored to answer specific skin barriers. Filter below to discover your recommended biological cleanser."
        />

        {/* Categories Tab Pill Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-12 sm:mb-16">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as FilterCategory)}
                className={`relative px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer focus:outline-none ${
                  isActive
                    ? 'text-white'
                    : 'text-stone-700 bg-white border border-stone-200/55 hover:border-brand-400'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="showcaseActivePill"
                    className="absolute inset-0 bg-brand-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* 4-column responsive grid with entry animations */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="w-full flex"
              >
                <div className="w-full flex">
                  <ProductCard
                    product={product}
                    onAddToCart={onAddToCart}
                    onClickCard={onClickProduct}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
