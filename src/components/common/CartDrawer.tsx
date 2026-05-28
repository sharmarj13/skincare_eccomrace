import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Plus, Minus, ShieldCheck, Sparkles, ShoppingBag, ArrowRight, Check } from 'lucide-react';
import { CartItem, Product } from '../../types';
import CustomButton from './CustomButton';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (product: Product, quantity: number) => void;
  onRemoveItem: (product: Product) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [isCheckoutMode, setIsCheckoutMode] = useState(false);
  const [isPurchaseSuccess, setIsPurchaseSuccess] = useState(false);
  
  // Shipping details form
  const [shippingForm, setShippingForm] = useState({
    name: '',
    address: '',
    zip: '',
    card: '',
    expiry: '',
    cvv: '',
  });

  const subtotal = cartItems.reduce((acc, item) => {
    const price = item.product.discountPrice ?? item.product.price;
    return acc + price * item.quantity;
  }, 0);

  const shippingGoal = 50;
  const isFreeShipping = subtotal >= shippingGoal;
  const awayFromFreeShipping = Math.max(0, shippingGoal - subtotal);

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shippingForm.name || !shippingForm.address || !shippingForm.card) {
      alert('Please compile standard checkout credentials.');
      return;
    }
    
    // Simulate payment transaction
    setTimeout(() => {
      setIsPurchaseSuccess(true);
      onClearCart();
    }, 1000);
  };

  const handleCloseSuccess = () => {
    setIsPurchaseSuccess(false);
    setIsCheckoutMode(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Blur Overlay Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-stone-950/40 backdrop-blur-sm"
          />

          {/* Cart sliding drawer drawer container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed top-0 bottom-0 right-0 w-full sm:w-[480px] bg-[#FAF8F5] shadow-premium-xl z-50 flex flex-col justify-between overflow-hidden text-left"
          >
            {/* Header block */}
            <div className="p-6 border-b border-[#FAF8F5]/30 flex items-center justify-between bg-white shadow-sm">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-brand-500" />
                <span className="font-serif text-lg tracking-wide font-medium text-stone-900">Your Skincare Bag</span>
                <span className="text-xs bg-stone-100 text-stone-600 px-2.5 py-0.5 rounded-full font-bold">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-stone-100 text-stone-700 cursor-pointer focus:outline-none"
                aria-label="Close Shopping Bag"
              >
                <X className="w-5.5 h-5.5" />
              </button>
            </div>

            {/* Main Interactive Screen Area */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col">
              
              {isPurchaseSuccess ? (
                /* 1. Transaction Complete Success screen */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex-1 flex flex-col items-center justify-center text-center py-10"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mb-6 shadow-premium">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-stone-900">Order Dispatched!</h3>
                  <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed max-w-sm mt-3">
                    Your luxury SÔL washes have sailed our checkout. A carbon-neutral carrier will transmit delivery alerts within 12 business hours.
                  </p>
                  
                  <div className="mt-8 p-4 bg-brand-50 rounded-2xl border border-brand-100/50 flex flex-col gap-1 text-[11px] font-medium tracking-wide text-stone-700 w-full mb-8">
                    <span>Order Reference Score: SOL-2026-94827</span>
                    <span>Carrier Services: DHL Sustainable Express</span>
                  </div>

                  <CustomButton variant="secondary" size="md" onClick={handleCloseSuccess} className="w-full">
                    Continue Exploring
                  </CustomButton>
                </motion.div>
              ) : isCheckoutMode ? (
                /* 2. Premium Checkout Form Panel */
                <motion.form
                  onSubmit={handleCheckoutSubmit}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex flex-col gap-5 text-xs w-full"
                >
                  <div className="pb-4 border-b border-stone-200">
                    <button
                      type="button"
                      onClick={() => setIsCheckoutMode(false)}
                      className="text-stone-500 hover:text-brand-500 font-bold uppercase tracking-widest pb-1 flex items-center gap-1 cursor-pointer focus:outline-none"
                    >
                      ← Back to Bag Summary
                    </button>
                  </div>

                  <h3 className="font-serif text-lg font-medium text-stone-900 uppercase tracking-wide">
                    Shipping & Payment Details
                  </h3>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-[#f95f10] mb-2 font-semibold">Consignee Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Elena Romanoff"
                      value={shippingForm.name}
                      onChange={(e) => setShippingForm({ ...shippingForm, name: e.target.value })}
                      className="w-full p-3 bg-[#FAF8F5] border border-stone-200 rounded-xl focus:border-brand-400 focus:outline-none font-medium text-stone-850"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-[#f95f10] mb-2 font-semibold">Street Delivery Address *</label>
                    <input
                      type="text"
                      required
                      placeholder="48 Ocean Avenue, Suite 10"
                      value={shippingForm.address}
                      onChange={(e) => setShippingForm({ ...shippingForm, address: e.target.value })}
                      className="w-full p-3 bg-[#FAF8F5] border border-stone-200 rounded-xl focus:border-brand-400 focus:outline-none font-medium text-stone-850"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-[#f95f10] mb-2 font-semibold">Postal Zip Code *</label>
                      <input
                        type="text"
                        required
                        placeholder="92660"
                        value={shippingForm.zip}
                        onChange={(e) => setShippingForm({ ...shippingForm, zip: e.target.value })}
                        className="w-full p-3 bg-[#FAF8F5] border border-stone-200 rounded-xl focus:border-brand-400 focus:outline-none font-medium text-stone-850"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-[#f95f10] mb-2 font-semibold">Card Credentials *</label>
                      <input
                        type="text"
                        required
                        placeholder="4111 2222 3333 4444"
                        value={shippingForm.card}
                        onChange={(e) => setShippingForm({ ...shippingForm, card: e.target.value })}
                        className="w-full p-3 bg-[#FAF8F5] border border-stone-200 rounded-xl focus:border-brand-400 focus:outline-none font-semibold text-stone-850"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-[#f95f10] mb-2 font-semibold">Expiry Date *</label>
                      <input
                        type="text"
                        required
                        placeholder="MM/YY"
                        value={shippingForm.expiry}
                        onChange={(e) => setShippingForm({ ...shippingForm, expiry: e.target.value })}
                        className="w-full p-3 bg-[#FAF8F5] border border-stone-200 rounded-xl focus:border-brand-400 focus:outline-none font-medium text-stone-850"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-[#f95f10] mb-2 font-semibold">CVV *</label>
                      <input
                        type="password"
                        required
                        placeholder="***"
                        maxLength={3}
                        value={shippingForm.cvv}
                        onChange={(e) => setShippingForm({ ...shippingForm, cvv: e.target.value })}
                        className="w-full p-3 bg-[#FAF8F5] border border-stone-200 rounded-xl focus:border-brand-400 focus:outline-none font-semibold text-stone-850"
                      />
                    </div>
                  </div>

                  {/* Guaranteed Badge */}
                  <div className="mt-4 p-4 rounded-xl border border-stone-150 bg-stone-50 flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-[10px] text-stone-500 leading-relaxed font-light">
                      Secured using bank-grade Stripe protocols. No credential vectors persist.
                    </span>
                  </div>

                  <div className="mt-6 flex flex-col gap-3">
                    {/* Price list */}
                    <div className="flex items-center justify-between text-sm py-2">
                      <span className="text-stone-600 font-light">Order Subtotal</span>
                      <span className="font-semibold text-stone-850">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm py-2 border-t border-stone-100">
                      <span className="text-stone-600 font-light">Packaging & Courier dispatch</span>
                      <span className="font-semibold text-stone-850">{isFreeShipping ? 'FREE' : '$10.00'}</span>
                    </div>
                    <div className="flex items-center justify-between text-base py-3 border-t border-stone-200 font-bold block">
                      <span className="text-[#221F1D]">Absolute Total</span>
                      <span className="text-brand-500">${(subtotal + (isFreeShipping ? 0 : 10)).toFixed(2)}</span>
                    </div>

                    <CustomButton type="submit" variant="primary" size="lg" className="w-full mt-4">
                      Finalize Purchase (${(subtotal + (isFreeShipping ? 0 : 10)).toFixed(2)})
                    </CustomButton>
                  </div>

                </motion.form>
              ) : cartItems.length > 0 ? (
                /* 3. Items list */
                <div className="flex-1 flex flex-col gap-6">
                  {/* Shipping goal meter progress */}
                  <div className="p-4 rounded-2xl bg-brand-50/50 border border-brand-100">
                    {isFreeShipping ? (
                      <div className="flex items-center gap-2 text-xs font-semibold text-brand-700">
                        <Sparkles className="w-4 h-4 text-brand-500 animate-pulse" />
                        <span>Magnificent! You have unlocked FREE luxury shipping!</span>
                      </div>
                    ) : (
                      <div className="text-xs">
                        <p className="font-medium text-stone-700">
                          Add only <span className="font-bold text-brand-600">${awayFromFreeShipping.toFixed(2)}</span> more to unlock <span className="font-bold">FREE DHL Shipping</span>!
                        </p>
                        {/* Interactive progress bar */}
                        <div className="w-full h-1.5 bg-stone-200 rounded-full mt-2 overflow-hidden">
                          <div
                            className="h-full bg-brand-500 transition-all duration-500"
                            style={{ width: `${(subtotal / shippingGoal) * 100}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* List */}
                  <div className="flex flex-col gap-5">
                    {cartItems.map((item) => {
                      const itemPrice = item.product.discountPrice ?? item.product.price;
                      return (
                        <div
                          key={item.product.id}
                          className="flex items-stretch gap-4 pb-4 border-b border-stone-200/50 last:border-0 text-xs"
                        >
                          {/* Image */}
                          <div className="w-16 h-16 rounded-xl overflow-hidden bg-white border border-stone-200/50 shrink-0">
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>

                          {/* Info */}
                          <div className="flex-grow flex flex-col justify-between py-0.5">
                            <div>
                              <h4 className="font-semibold text-stone-850 leading-snug line-clamp-1">
                                {item.product.name}
                              </h4>
                              <span className="text-[10px] text-stone-400 font-medium block mt-0.5">
                                Size: {item.product.size}
                              </span>
                            </div>

                            {/* Adjusters Row */}
                            <div className="flex items-center gap-3 mt-2">
                              <div className="flex items-center gap-2.5 bg-stone-100 px-2 py-1 rounded-full border border-stone-200/40 font-semibold text-stone-700">
                                <button
                                  type="button"
                                  onClick={() => onUpdateQuantity(item.product, item.quantity - 1)}
                                  className="p-0.5 hover:text-brand-500 cursor-pointer text-stone-500"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="text-[11px]">{item.quantity}</span>
                                <button
                                  type="button"
                                  onClick={() => onUpdateQuantity(item.product, item.quantity + 1)}
                                  className="p-0.5 hover:text-brand-500 cursor-pointer text-stone-500"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>

                              <button
                                type="button"
                                onClick={() => onRemoveItem(item.product)}
                                className="p-1.5 text-stone-400 hover:text-red-500 transition-colors cursor-pointer"
                                aria-label="Remove item from bag"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                          {/* Prices */}
                          <div className="shrink-0 flex flex-col items-end justify-between py-1 font-bold text-stone-850">
                            <span>${(itemPrice * item.quantity).toFixed(2)}</span>
                          </div>

                        </div>
                      );
                    })}
                  </div>

                  {/* Pricing Overview Block */}
                  <div className="mt-auto pt-6 border-t border-stone-200">
                    <div className="flex items-center justify-between text-sm py-2">
                      <span className="text-stone-500 font-light">Subtotal</span>
                      <span className="font-semibold text-stone-850">${subtotal.toFixed(2)}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm py-2 border-t border-stone-100">
                      <span className="text-stone-500 font-light">Courier Dispatch</span>
                      <span className="font-semibold text-stone-850">{isFreeShipping ? 'FREE' : '$10.00'}</span>
                    </div>

                    <div className="flex items-center justify-between text-base py-3 border-t border-stone-200 font-bold block">
                      <span className="text-stone-900">Immediate Total</span>
                      <span className="text-brand-500">${(subtotal + (isFreeShipping ? 0 : 10)).toFixed(2)}</span>
                    </div>

                    <div className="mt-6 flex flex-col gap-3">
                      <CustomButton variant="primary" size="lg" onClick={() => setIsCheckoutMode(true)} className="w-full">
                        Secure Checkout
                      </CustomButton>
                      
                      <button
                        onClick={onClose}
                        className="text-stone-500 hover:text-brand-500 font-semibold text-xs uppercase tracking-widest text-center cursor-pointer"
                      >
                        Keep Browsing
                      </button>
                    </div>
                  </div>

                </div>
              ) : (
                /* Empty bag representation */
                <div className="flex-grow flex flex-col items-center justify-center text-center py-20 px-4">
                  <div className="w-14 h-14 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mb-5 border border-stone-200/50">
                    <ShoppingBag className="w-5.5 h-5.5 pr-0.5" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-stone-900">Your bag is dry</h3>
                  <p className="text-stone-500 text-xs font-light max-w-xs mt-2 leading-relaxed">
                    You have not selected SÔL Botanical formulas yet. Fill your water routine with Citrus and Neroli.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#f95f10] hover:text-[#de4407] transition-colors cursor-pointer"
                  >
                    <span>Begin Browsing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
