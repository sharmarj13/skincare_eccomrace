import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Check, Star } from 'lucide-react';
import CustomButton from '../common/CustomButton';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid exquisite email address.');
      return;
    }
    
    setError('');
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-20 sm:py-24 bg-[#E8E2DA]/40 relative overflow-hidden" id="newsletter">
      {/* Decorative botanical floating element */}
      <div className="absolute top-1/2 -right-24 w-72 h-72 rounded-full bg-brand-100/30 filter blur-3xl" />
      <div className="absolute -left-12 bottom-0 w-60 h-60 rounded-full bg-orange-100/30 filter blur-2xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Floating star */}
        <div className="inline-flex p-3 rounded-full bg-white border border-stone-200/50 shadow-sm text-brand-500 mb-6">
          <Star className="w-5 h-5 fill-current text-brand-500 animate-pulse" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#221F1D] leading-tight max-w-2xl mx-auto">
          Join the SÔL Circle<span className="text-brand-500">.</span>
        </h2>
        
        <p className="text-stone-600 font-light text-base sm:text-lg max-w-xl mx-auto mt-4 leading-relaxed">
          Receive a complimentary travel-size daily cleanser with your first order, alongside private wellness rituals and priority access to limited seasonal botanical drops.
        </p>

        {/* Subscription box container */}
        <div className="max-w-md mx-auto mt-10">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="subscribeForm"
                onSubmit={handleSubscribe}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col sm:flex-row gap-3 items-stretch justify-center"
              >
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-stone-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    className="w-full pl-11 pr-5 py-3.5 sm:py-4 bg-white border border-stone-200 focus:border-brand-400 rounded-full text-sm font-light text-[#221F1D] focus:outline-none transition-all duration-300 shadow-sm"
                    aria-label="Email address for newsletters"
                  />
                </div>
                
                <CustomButton
                  type="submit"
                  variant="primary"
                  className="shrink-0"
                >
                  Join Circle
                </CustomButton>
              </motion.form>
            ) : (
              <motion.div
                key="formSuccess"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl glass-effect border-emerald-200 bg-emerald-50/50 flex flex-col items-center"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center mb-3.5 shadow-sm">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="text-stone-900 text-sm font-semibold uppercase tracking-widest">
                  Welcome to SÔL Circle
                </h3>
                <p className="text-stone-600 text-xs font-light mt-1.5">
                  Confirm your email in your inbox briefly. Your travel-size voucher is on its way!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          
          {error && (
            <p className="text-red-500 text-xs font-medium mt-3 text-left pl-5">
              {error}
            </p>
          )}
        </div>

        {/* Brand guarantee notice */}
        <p className="text-[10px] text-stone-400 mt-6 tracking-wide">
          Safe data guarantee. Zero spamming. Opt-out directly with one click whenever you prefer.
        </p>

      </div>
    </section>
  );
}
