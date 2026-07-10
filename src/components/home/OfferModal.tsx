import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OfferModal({ isOpen, onClose }: OfferModalProps) {
  const [view, setView] = useState<'selection' | 'form' | 'success'>('selection');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });

  // Reset view when modal opens
  useEffect(() => {
    if (isOpen) {
      setView('selection');
    }
  }, [isOpen]);

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello Boonava! I would like to claim the exclusive 'Buy 2 Get 1 Free' offer.");
    window.open(`https://wa.me/7892186971?text=${text}`, '_blank');
    onClose();
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call for form submission
    console.log('Order Inquiry Submitted:', formData);
    setView('success');
    
    // Auto close after 3.5 seconds
    setTimeout(() => {
      onClose();
    }, 3500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#1C1917]/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-3xl bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-premium-xl flex flex-col md:flex-row z-10 max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur-md rounded-full text-stone-600 hover:text-brand-600 transition-colors shadow-sm cursor-pointer focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Image Section */}
            <div className="w-full md:w-5/12 h-48 md:h-auto relative hidden md:block">
              <img
                src="/images/brand/add-product.jpg"
                alt="Boonava All Products"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-brand-500 px-2 py-1 rounded-sm mb-2 inline-block">Limited Time</span>
                <h3 className="font-serif text-2xl leading-tight">Unlock Your Radiance</h3>
              </div>
            </div>

            {/* Mobile Image (visible only on small screens) */}
            <div className="w-full h-40 relative md:hidden">
              <img
                src="/images/brand/add-product.jpg"
                alt="Boonava All Products"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-brand-500 px-2 py-1 rounded-sm mb-1 inline-block">Limited Time</span>
              </div>
            </div>

            {/* Right Content Section */}
            <div className="w-full md:w-7/12 p-6 sm:p-8 flex flex-col overflow-y-auto">
              
              {view === 'selection' && (
                <div className="flex flex-col h-full justify-center">
                  <div className="text-center md:text-left mb-8">
                    <h2 className="font-serif text-3xl sm:text-4xl font-medium text-brand-600 mb-2">BUY 2 GET 1 FREE!</h2>
                    <p className="text-sm text-stone-600 font-light leading-relaxed">
                      Upgrade your daily ritual. Claim our exclusive bundle offer today and receive a complimentary product on us. Valid across our entire premium collection.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 mt-auto">
                    <button
                      onClick={handleWhatsApp}
                      className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-6 rounded-2xl font-semibold uppercase tracking-wider text-xs transition-colors shadow-sm focus:outline-none cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Order instantly via WhatsApp
                    </button>

                    <div className="flex items-center gap-4 my-2 opacity-60">
                      <div className="flex-1 h-[1px] bg-stone-300" />
                      <span className="text-[10px] uppercase font-bold text-stone-500 tracking-widest">OR</span>
                      <div className="flex-1 h-[1px] bg-stone-300" />
                    </div>

                    <button
                      onClick={() => setView('form')}
                      className="w-full flex items-center justify-center gap-3 bg-[#1C1917] hover:bg-[#2c2825] text-white py-4 px-6 rounded-2xl font-semibold uppercase tracking-wider text-xs transition-colors shadow-sm focus:outline-none cursor-pointer"
                    >
                      <span>Fill Express Order Form</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {view === 'form' && (
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <h2 className="font-serif text-2xl font-medium text-[#221F1D]">Express Order Form</h2>
                    <p className="text-xs text-stone-500 mt-1">Claim your Buy 2 Get 1 Free offer.</p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 flex-grow">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-600 mb-1.5">Full Name</label>
                        <input required type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-2.5 bg-white border border-stone-200 rounded-xl text-sm focus:border-brand-500 focus:outline-none transition-colors" placeholder="Jane Doe" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-600 mb-1.5">Mobile Number</label>
                        <input required type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} className="w-full px-4 py-2.5 bg-white border border-stone-200 rounded-xl text-sm focus:border-brand-500 focus:outline-none transition-colors" placeholder="+1 (234) 567-890" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-600 mb-1.5">Delivery Address</label>
                      <textarea required name="address" value={formData.address} onChange={handleInputChange} rows={2} className="w-full px-4 py-2.5 bg-white border border-stone-200 rounded-xl text-sm focus:border-brand-500 focus:outline-none transition-colors resize-none" placeholder="123 Botanica Avenue, Apt 4B" />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="col-span-1">
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-600 mb-1.5">City</label>
                        <input required type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full px-3 py-2.5 bg-white border border-stone-200 rounded-xl text-sm focus:border-brand-500 focus:outline-none transition-colors" />
                      </div>
                      <div className="col-span-1">
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-600 mb-1.5">State</label>
                        <input required type="text" name="state" value={formData.state} onChange={handleInputChange} className="w-full px-3 py-2.5 bg-white border border-stone-200 rounded-xl text-sm focus:border-brand-500 focus:outline-none transition-colors" />
                      </div>
                      <div className="col-span-1">
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-600 mb-1.5">Pincode</label>
                        <input required type="text" name="pincode" value={formData.pincode} onChange={handleInputChange} className="w-full px-3 py-2.5 bg-white border border-stone-200 rounded-xl text-sm focus:border-brand-500 focus:outline-none transition-colors" />
                      </div>
                    </div>

                    <div className="mt-auto pt-4 flex gap-3">
                      <button type="button" onClick={() => setView('selection')} className="px-5 py-3 rounded-xl border border-stone-200 text-stone-600 text-xs font-bold uppercase tracking-wider hover:bg-stone-100 transition-colors cursor-pointer">
                        Back
                      </button>
                      <button type="submit" className="flex-1 bg-brand-500 hover:bg-brand-600 text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer">
                        Submit Order Inquiry
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {view === 'success' && (
                <div className="flex flex-col items-center justify-center h-full text-center py-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', bounce: 0.5 }}
                    className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 className="w-8 h-8" />
                  </motion.div>
                  <h2 className="font-serif text-2xl font-medium text-[#221F1D] mb-2">Request Received!</h2>
                  <p className="text-sm text-stone-500 max-w-sm">
                    Thank you, {formData.name}. We have received your inquiry. Our bespoke care team will contact you shortly to confirm your Buy 2 Get 1 Free order.
                  </p>
                </div>
              )}

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
