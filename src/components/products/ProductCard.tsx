import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, ShoppingBag, Eye, Percent } from 'lucide-react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
  onClickCard: (slug: string) => void;
}

export default function ProductCard({ product, onAddToCart, onClickCard }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isSuccessAdded, setIsSuccessAdded] = useState(false);

  const handleAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, 1);
    setIsSuccessAdded(true);
    setTimeout(() => {
      setIsSuccessAdded(false);
    }, 1500);
  };

  const hasDiscount = product.discountPrice !== undefined && product.discountPrice < product.price;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClickCard(product.slug)}
      className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-200/50 shadow-premium hover:shadow-premium-lg transition-all duration-300 cursor-pointer w-full text-left"
    >
      {/* Product Image Area */}
      <div className="relative aspect-square w-full bg-[#FAF8F5] overflow-hidden">
        {/* Discount Badge */}
        {hasDiscount && (
          <div className="absolute top-3 left-3 z-10 bg-brand-500 text-white text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
            <Percent className="w-2.5 h-2.5" />
            <span>Offer</span>
          </div>
        )}

        {/* Categories / Best Seller Indicator */}
        {product.isFeatured && (
          <div className="absolute top-3 right-3 z-10 glass-effect text-[#221F1D] text-[8px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
            Bestseller
          </div>
        )}

        {/* Primary and secondary image swap on hover */}
        <div className="w-full h-full relative">
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-700 ease-out ${
              isHovered && product.secondaryImages.length > 1
                ? 'scale-105 opacity-0'
                : 'scale-100 opacity-100'
            }`}
            referrerPolicy="no-referrer"
          />
          
          {product.secondaryImages.length > 1 && (
            <img
              src={product.secondaryImages[1]}
              alt={`${product.name} secondary view`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                isHovered ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}
              referrerPolicy="no-referrer"
            />
          )}
        </div>

        {/* Hover Quick Action Panel Grid Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-stone-900/60 via-stone-900/10 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="glass-effect text-stone-900 text-[10px] font-bold tracking-wider uppercase py-2 px-4 rounded-full flex items-center gap-1.5 shadow-sm">
            <Eye className="w-3.5 h-3.5" />
            <span>Interactive View</span>
          </div>
        </div>

        {/* Size tag */}
        <span className="absolute bottom-3 left-3 bg-stone-900/70 backdrop-blur-sm text-stone-100 text-[9px] font-medium tracking-wide px-2.5 py-1 rounded-full opacity-80">
          {product.size}
        </span>
      </div>

      {/* Product Content Details */}
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-[10px] uppercase tracking-widest text-[#f95f10] font-semibold mb-1">
          {product.category === 'face' ? 'Face Cleanse' : product.category === 'body' ? 'Body Restore' : 'Ritual sets'}
        </span>
        
        <h3 className="font-serif text-base sm:text-lg text-[#221F1D] font-medium tracking-tight line-clamp-1 group-hover:text-brand-500 transition-colors duration-300">
          {product.name}
        </h3>

        {/* Ratings block */}
        <div className="flex items-center gap-1 mt-1.5">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 fill-current ${
                  i < Math.floor(product.rating) ? 'text-amber-400' : 'text-stone-200'
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] text-stone-500 font-medium">({product.reviewCount})</span>
        </div>

        {/* Description brief snippet */}
        <p className="text-xs text-stone-500 font-light mt-2.5 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Footer Area: Price */}
        <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between w-full">
          <div>
            {hasDiscount ? (
              <div className="flex items-baseline gap-2">
                <span className="text-base font-bold text-stone-900">₹{product.discountPrice?.toFixed(2)}</span>
                <span className="text-xs text-stone-400 line-through font-light">₹{product.price.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-base font-bold text-stone-900">₹{product.price.toFixed(2)}</span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
