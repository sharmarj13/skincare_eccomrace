import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Check, Star } from 'lucide-react';
import CustomButton from '../common/CustomButton';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid exquisite email address.');
      return;
    }
    
    setError('');
    setLoading(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "64458f73-abc0-49ef-a496-60bfe2286ae7",
          subject: "New Newsletter Subscription",
          from_name: "Boonava Care Newsletter",
          email: email,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setEmail('');
      } else {
        setError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to subscribe. Please try again later.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <section className="py-20 sm:py-24 bg-[#E8E2DA]/40 relative overflow-hidden" id="newsletter">
      {/* Decorative botanical floating element */}
      <div className="absolute top-1/2 -right-24 w-72 h-72 rounded-full bg-brand-100/30 filter blur-3xl" />
      <div className="absolute -left-12 bottom-0 w-60 h-60 rounded-full bg-orange-100/30 filter blur-2xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Floating star */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex p-3 rounded-full bg-white border border-stone-200/50 shadow-sm text-brand-500 mb-6"
        >
          <Star className="w-5 h-5 fill-current text-brand-500 animate-pulse" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#221F1D] leading-tight max-w-2xl mx-auto"
        >
          Join the Boonava Circle<span className="text-brand-500">.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-stone-600 font-light text-base sm:text-lg max-w-xl mx-auto mt-4 leading-relaxed"
        >
          Receive a complimentary travel-size daily cleanser with your first order, alongside private wellness rituals and priority access to limited seasonal botanical drops.
        </motion.p>

        {/* Subscription box container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-md mx-auto mt-10"
        >
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
                    disabled={loading}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    className="w-full pl-11 pr-5 py-3.5 sm:py-4 bg-white border border-stone-200 focus:border-brand-400 rounded-full text-sm font-light text-[#221F1D] focus:outline-none transition-all duration-300 shadow-sm disabled:opacity-60"
                    aria-label="Email address for newsletters"
                  />
                </div>
                
                <CustomButton
                  type="submit"
                  variant="primary"
                  className="shrink-0"
                  disabled={loading}
                >
                  {loading ? 'Joining...' : 'Join Circle'}
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
                  Welcome to Boonava Circle
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
        </motion.div>

        {/* Brand guarantee notice */}
        <p className="text-[10px] text-stone-400 mt-6 tracking-wide">
          Safe data guarantee. Zero spamming. Opt-out directly with one click whenever you prefer.
        </p>

      </div>
    </section>
  );
}
