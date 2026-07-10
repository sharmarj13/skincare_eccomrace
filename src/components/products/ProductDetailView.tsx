import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ShieldCheck, Heart, Sparkles, Plus, Minus, ArrowLeft, RefreshCw, ShoppingBag, MessageCircle } from 'lucide-react';
import { Product } from '../../types';
import ProductCard from './ProductCard';

interface ProductDetailViewProps {
  productSlug: string;
  products: Product[];
  onAddToCart: (product: Product, quantity: number) => void;
  onNavigateToProduct: (slug: string) => void;
  onGoBack: () => void;
}

export default function ProductDetailView({
  productSlug,
  products,
  onAddToCart,
  onNavigateToProduct,
  onGoBack,
}: ProductDetailViewProps) {
  // Retrieve the actual product
  const product = products.find((p) => p.slug === productSlug) || products[0];

  const [activeImage, setActiveImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'ingredients' | 'usage' | 'benefits'>('benefits');
  const [isSuccessAdded, setIsSuccessAdded] = useState(false);

  // Synchronize state when the product changes!
  useEffect(() => {
    setActiveImage(product.image);
    setQuantity(1);
    setActiveTab('benefits');
  }, [product]);

  const handleIncrement = () => {
    if (quantity < product.stock) {
      setQuantity((q) => q + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((q) => q - 1);
    }
  };

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setIsSuccessAdded(true);
    setTimeout(() => {
      setIsSuccessAdded(false);
    }, 1500);
  };

  const handleOrderWhatsApp = () => {
    const text = encodeURIComponent(`Hello Boonava! I would like to order the product: ${product.name} (${product.size}) for ₹${(product.discountPrice ?? product.price).toFixed(2)}.`);
    window.open(`https://wa.me/7892186971?text=${text}`, '_blank');
  };

  // Find complementary related products under same category, or select alternatives
  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const hasDiscount = product.discountPrice !== undefined && product.discountPrice < product.price;

  return (
    <article className="bg-[#FAF8F5] pb-24 text-left">
      {/* Upper navigation breadcrumb action bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between border-b border-stone-200/50">
        <button
          onClick={onGoBack}
          className="inline-flex items-center gap-2 text-stone-600 hover:text-brand-500 text-xs font-semibold uppercase tracking-widest cursor-pointer transition-colors focus:outline-none"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Library</span>
        </button>

        <span className="text-[10px] text-stone-400 font-medium uppercase tracking-wider hidden sm:inline">
          Shop Cleansers / {product.category === 'face' ? 'Face' : 'Body'} / {product.name}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Main Product Spec block cols */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column Left: Media gallery with full zoom hover mechanics */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            
            {/* Display Active Frame */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white border border-stone-200/50 shadow-premium image-zoom-container group">
              <img
                src={activeImage}
                alt={product.name}
                loading="eager"
                decoding="async"
                className="w-full h-full object-contain transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              
              {/* Image ambient absolute lights */}
              <div className="absolute top-4 left-4 z-10 glass-effect p-2 rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-brand-500 animate-pulse" />
                <span>Zoom Available</span>
              </div>
            </div>

            {/* Thumbnails row selectors */}
            <div className="flex gap-3">
              {product.secondaryImages.map((imgUrl, index) => {
                const isActive = activeImage === imgUrl;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveImage(imgUrl)}
                    className={`relative w-18 sm:w-20 aspect-square rounded-xl overflow-hidden border-2 bg-white cursor-pointer transition-all ${
                      isActive ? 'border-brand-500 scale-95 shadow-sm' : 'border-stone-200 hover:border-brand-300'
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`${product.name} gallery ${index + 1}`}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                );
              })}
            </div>

          </div>

          {/* Column Right: Information and Actions */}
          <div className="lg:col-span-6 flex flex-col items-start pt-2">
            {/* Category tag and stock indicator */}
            <div className="flex items-center justify-between w-full mb-3">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-500">
                {product.category === 'face' ? 'Signature Face Care' : product.category === 'body' ? 'Restorative Body' : 'Botanical Gift Set'}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#221F1D] leading-tight mb-2">
              {product.name}
            </h1>

            {/* Weight / Size specifications */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-stone-500 text-xs font-semibold uppercase tracking-widest bg-stone-100 px-3 py-1 rounded-full">{product.size}</span>
              
              {/* Rating representation */}
              <div className="flex items-center gap-1.5 ml-2">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 fill-current ${
                        i < Math.floor(product.rating) ? 'text-amber-500' : 'text-stone-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-stone-600 font-semibold">{product.rating} ({product.reviewCount} customer reviews)</span>
              </div>
            </div>

            {/* Price section */}
            <div className="mb-6 pt-3 border-t border-stone-200/50 w-full">
              {hasDiscount ? (
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl sm:text-3xl font-serif font-semibold text-brand-600">₹{product.discountPrice?.toFixed(2)}</span>
                  <span className="text-stone-400 line-through text-sm font-light">₹{product.price.toFixed(2)}</span>
                  <span className="bg-brand-50 text-brand-600 font-bold text-[9px] uppercase tracking-widest px-3 py-1 rounded-full border border-brand-100">
                    Save ₹{(product.price - (product.discountPrice ?? 0)).toFixed(2)}
                  </span>
                </div>
              ) : (
                <span className="text-2xl sm:text-3xl font-serif font-semibold text-stone-900">₹{product.price.toFixed(2)}</span>
              )}
            </div>

            {/* Short review snippet */}
            <p className="text-[#221F1D] font-light text-sm leading-relaxed mb-6">
              {product.longDescription}
            </p>

            {/* Detail Tabs selectors */}
            <div className="w-full mb-6">
              <div className="flex border-b border-stone-200">
                {(['benefits', 'ingredients', 'usage'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 text-xs uppercase tracking-widest font-semibold transition-all relative mr-8 cursor-pointer focus:outline-none ${
                      activeTab === tab ? 'text-brand-500' : 'text-stone-400 hover:text-stone-700'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeDetailLine"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-500"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Display Areas */}
              <div className="py-4 text-xs tracking-wide leading-relaxed min-h-[140px] text-stone-600 font-light">
                {activeTab === 'benefits' && (
                  <ul className="flex flex-col gap-2.5">
                    {product.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {activeTab === 'ingredients' && (
                  <div className="bg-[#FAF8F5] p-4 rounded-xl border border-stone-100 font-mono text-[11px] leading-relaxed select-all">
                    {product.ingredients.join(', ')}
                  </div>
                )}

                {activeTab === 'usage' && (
                  <p className="p-1 leading-relaxed">
                    {product.usage}
                  </p>
                )}
              </div>
            </div>

            {/* WhatsApp Order Action */}
            <div className="w-full pt-6 border-t border-stone-200/50">
              <button
                onClick={handleOrderWhatsApp}
                className="w-full rounded-full py-4 px-8 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-premium text-center flex items-center justify-center gap-2.5 focus:outline-none bg-[#25D366] hover:bg-[#20bd5a] text-white"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Order via WhatsApp</span>
              </button>
            </div>

            {/* Quick trust assurances badge list */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-stone-100 w-full text-[11px] text-stone-500">
              <span className="flex items-center gap-1.5 font-medium uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Free Shipping Post ₹50
              </span>
              <span className="flex items-center gap-1.5 font-medium uppercase tracking-wider">
                <RefreshCw className="w-4 h-4 text-emerald-500" /> 30-Day Luminous Guarantee
              </span>
            </div>

          </div>

        </div>

        {/* Section: Custom Inner Reviews List */}
        <div className="mt-24 pt-12 border-t border-stone-200 w-full">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#221F1D] mb-8">
            Customer Cleansing Chronicles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white p-6 rounded-2xl border border-stone-200/50 shadow-premium text-left"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-850">{rev.author}</h3>
                    <span className="text-[10px] text-stone-400 font-medium block mt-0.5">Verified Skin Enthusiast • {rev.date}</span>
                  </div>

                  {/* Stars */}
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 fill-current ${
                          i < rev.rating ? 'text-amber-500' : 'text-stone-150'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-stone-600 font-light leading-relaxed italic mb-4">
                  "{rev.comment}"
                </p>

                {rev.recommended && (
                  <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Recommends this formulation</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Pairings row slider */}
        <div className="mt-28 flex flex-col items-center">
          <div className="text-center max-w-xl mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-500 block mb-2">Recommended</span>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#221F1D]">Aligned Pairings</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            {relatedProducts.map((p) => (
              <div key={p.id} className="flex">
                <ProductCard
                  product={p}
                  onAddToCart={onAddToCart}
                  onClickCard={onNavigateToProduct}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </article>
  );
}
