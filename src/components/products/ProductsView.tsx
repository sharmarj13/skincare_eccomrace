import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal, ArrowUpDown, X, Sparkles } from 'lucide-react';
import { Product } from '../../types';
import ProductCard from './ProductCard';
import PageBanner from '../layout/PageBanner';

interface ProductsViewProps {
  products: Product[];
  onAddToCart: (product: Product, quantity: number) => void;
  onClickProduct: (slug: string) => void;
}

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'rating-desc';
type CategoryOption = 'all' | 'face' | 'body' | 'set';

export default function ProductsView({
  products,
  onAddToCart,
  onClickProduct,
}: ProductsViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryOption>('all');
  const [sortBy, setSortBy] = useState<SortOption>('default');

  // Multi-filter pipeline
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // 1. Category Filter
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    // 2. Search Query Filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      );
    }

    // 3. Sorting Options
    if (sortBy === 'price-asc') {
      result.sort((a, b) => {
        const pA = a.discountPrice ?? a.price;
        const pB = b.discountPrice ?? b.price;
        return pA - pB;
      });
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => {
        const pA = a.discountPrice ?? a.price;
        const pB = b.discountPrice ?? b.price;
        return pB - pA;
      });
    } else if (sortBy === 'rating-desc') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [products, searchQuery, activeCategory, sortBy]);

  const categories = [
    { id: 'all', label: 'All Catalog' },
    { id: 'face', label: 'Face Cleansers' },
    { id: 'body', label: 'Body Restores' },
    { id: 'set', label: 'Ritual Sets' },
  ];

  const handleClearFilters = () => {
    setSearchQuery('');
    setActiveCategory('all');
    setSortBy('default');
  };

  return (
    <div className="bg-[#FAF8F5] pb-24">
      {/* Premium Banner */}
      <PageBanner
        title="Botanical Cleansing Library"
        subtitle="Slow-Fused Dermal Food"
        backgroundImage="https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=1200&auto=format&fit=crop"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Active search filter and alignment bar */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch justify-between pb-8 border-b border-stone-200/60 w-full">
          
          {/* Left Block: Categories Pill Toggles */}
          <div className="flex flex-wrap items-center gap-2.5">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as CategoryOption)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer focus:outline-none ${
                    isActive
                      ? 'bg-[#1C1917] text-[#FAF8F5] shadow-premium'
                      : 'bg-white border border-stone-200 text-stone-700 hover:border-brand-400'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Right Block: Input & Sorters */}
          <div className="flex flex-col sm:flex-row items-stretch gap-4 shrink-0 sm:min-w-[450px]">
            {/* Search Input */}
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-stone-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="Search ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 bg-white border border-stone-200 focus:border-brand-400 rounded-full text-xs font-light tracking-wide text-stone-800 focus:outline-none transition-colors shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-3 flex items-center text-stone-400 hover:text-stone-700 cursor-pointer"
                  aria-label="Clear Search Input"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sorter Selector */}
            <div className="relative shrink-0 flex items-center gap-2 bg-white border border-stone-200 rounded-full px-4 text-xs font-medium text-stone-700 shadow-sm">
              <ArrowUpDown className="w-3.5 h-3.5 text-stone-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="bg-transparent border-0 py-2.5 pr-1 focus:outline-none text-xs font-semibold cursor-pointer text-stone-700 select-none uppercase tracking-wider"
              >
                <option value="default">Default Order</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-desc">Highly Rated</option>
              </select>
            </div>
          </div>

        </div>

        {/* Output Grid Block */}
        <div className="mt-12">
          
          <AnimatePresence mode="popLayout">
            {filteredAndSortedProducts.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 w-full"
              >
                {filteredAndSortedProducts.map((prod) => (
                  <motion.div
                    layout
                    key={prod.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="flex h-full"
                  >
                    <ProductCard
                      product={prod}
                      onAddToCart={onAddToCart}
                      onClickCard={onClickProduct}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              /* Empty Matching State */
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-16 rounded-3xl bg-white border border-stone-200/50 text-center max-w-lg mx-auto shadow-premium flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-500 mb-4 border border-brand-100">
                  <SlidersHorizontal className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-[#221F1D]">No formulations match</h3>
                <p className="text-xs text-stone-500 font-light max-w-sm mt-2 leading-relaxed">
                  We currently do not house washes under these specific metrics query. Try broadening your keywords or resetting filters.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="mt-6 px-6 py-2.5 bg-brand-500 rounded-full text-xs font-semibold text-white uppercase tracking-wider shadow-sm hover:bg-brand-600 transition-colors cursor-pointer focus:outline-none"
                >
                  Reset Library Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}
