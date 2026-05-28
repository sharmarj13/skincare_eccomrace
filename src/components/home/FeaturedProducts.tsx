import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Product } from '../../types';
import ProductCard from '../products/ProductCard';
import SectionHeading from '../common/SectionHeading';
import CustomButton from '../common/CustomButton';

interface FeaturedProductsProps {
  products: Product[];
  onAddToCart: (product: Product, quantity: number) => void;
  onClickProduct: (slug: string) => void;
  onExploreAllClick: () => void;
}

export default function FeaturedProducts({
  products,
  onAddToCart,
  onClickProduct,
  onExploreAllClick,
}: FeaturedProductsProps) {
  // Get main featured items
  const featured = products.filter((p) => p.isFeatured).slice(0, 3);

  return (
    <section className="py-20 sm:py-24 bg-[#FAF8F5] relative overflow-hidden" id="featured-products" aria-label="Featured Botanical Essentials">
      {/* Visual background details */}
      <div className="absolute right-0 top-10 w-96 h-96 h-[380px] rounded-full bg-brand-50/40 filter blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        <SectionHeading
          subtitle="Selected Rituals"
          title="Featured Botanical Essentials"
          description="Invest in your skin's botanical immunity. Discover our award-winning, slow-fused organic formulas crafted for supreme nourishment."
        />

        {/* 3-column grid for gorgeous product display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 w-full mb-14">
          {featured.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
            >
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
                onClickCard={onClickProduct}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 text-center justify-center p-6 rounded-2xl bg-[#E8E2DA]/30 border border-stone-200/50 max-w-xl w-full"
        >
          <span className="text-xs sm:text-sm font-medium text-[#221F1D] tracking-wide">
            Want to see our comprehensive collection of face & body restores?
          </span>
          <button
            onClick={onExploreAllClick}
            className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-brand-600 hover:text-brand-700 transition-colors cursor-pointer group focus:outline-none"
          >
            <span>Explore All</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
