import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, Check, Sparkles, Sliders } from 'lucide-react';
import PageBanner from '../layout/PageBanner';
import CustomButton from '../common/CustomButton';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'consultation',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

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
          subject: `New Contact Form Inquiry: ${formData.subject.toUpperCase()}`,
          from_name: "Boonava Care Contact Form",
          name: formData.name,
          email: formData.email,
          topic: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSent(true);
        setFormData({ name: '', email: '', subject: 'consultation', message: '' });
      } else {
        alert(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-[#FAF8F5] pb-24 text-left">
      {/* Banner */}
      <PageBanner
        title="Connect With Boonava Lab"
        subtitle="Botanical Diagnostics Helpdesk"
        backgroundImage="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          
          {/* Column Left: High-end details and info */}
          <div className="lg:col-span-5 flex flex-col items-start bg-white p-8 sm:p-10 rounded-3xl border border-stone-200/50 shadow-premium">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-500 mb-3 block">
              Direct Contact Channels
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#221F1D] mb-8 leading-tight">
              We respond with sincere skincare intention.
            </h2>

            {/* Structured details */}
            <div className="flex flex-col gap-6 w-full">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 border border-brand-100/50 text-brand-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold text-stone-800 mb-1">Botanical Pavilion Location</h3>
                  <p className="text-stone-500 text-xs font-light leading-relaxed">
                    Tumkur -572104
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 border border-brand-100/50 text-brand-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold text-stone-800 mb-1">Direct Inquiries E-Mail</h3>
                  <a href="mailto:boonavacare@gmail.com" className="text-[#221F1D] text-xs font-semibold hover:text-brand-500 transition-colors">
                    boonavacare@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 border border-brand-100/50 text-brand-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold text-stone-800 mb-1">Skincare Support Line</h3>
                  <span className="text-stone-500 text-xs font-light">
                    +91 7892186971
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 border border-brand-100/50 text-brand-600">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold text-stone-800 mb-1">Laboratory Office Hours</h3>
                  <p className="text-stone-500 text-xs font-light">
                    Monday — Friday: 9am — 6pm PST <br />
                    Saturday: 10am — 4pm PST
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Consultation notice */}
            <div className="mt-10 p-5 rounded-2xl bg-brand-50/50 border border-brand-100 border-dashed text-left w-full">
              <span className="inline-flex gap-1 text-[10px] uppercase font-bold text-brand-600 items-center mb-1 bg-white px-2 py-0.5 rounded-full border border-brand-100">
                <Sparkles className="w-3 h-3 text-brand-500 animate-pulse" /> Free Consultation
              </span>
              <p className="text-[11px] text-stone-600 font-light leading-relaxed">
                Send our dermatological chemists your current skin routine. We will audit your barrier pH for free.
              </p>
            </div>

          </div>

          {/* Column Right: Elegant, premium formulation contact form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-stone-200/50 shadow-premium relative">
            <AnimatePresence mode="wait">
              {!isSent ? (
                <motion.form
                  key="contactForm"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-stone-700 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Elena Romanoff"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-[#FAF8F5] border border-stone-200 focus:border-brand-400 rounded-xl text-xs font-light text-stone-800 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-stone-700 mb-2">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="elena@restorations.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-[#FAF8F5] border border-stone-200 focus:border-brand-400 rounded-xl text-xs font-light text-stone-800 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-stone-700 mb-2">
                      skincare topic of inquiry
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-[#FAF8F5] border border-stone-200 focus:border-brand-400 rounded-xl text-xs font-semibold text-stone-700 focus:outline-none transition-colors tracking-wide uppercase cursor-pointer"
                    >
                      <option value="consultation">Free Skincare Barrier Auditing</option>
                      <option value="order">Shopping Bag & Shipping Logistics</option>
                      <option value="partnership">Wholesale / High-end Boutique Partnering</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-stone-700 mb-2">
                      write your message details *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Specify your biological skin type (e.g. extremely sensitive lipid-stripped, redness-prone, oily combination) and question guidelines..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-[#FAF8F5] border border-stone-200 focus:border-brand-400 rounded-xl text-xs font-light text-stone-800 focus:outline-none transition-colors leading-relaxed"
                    />
                  </div>

                  <CustomButton
                    type="submit"
                    variant="primary"
                    disabled={loading}
                    className="w-full sm:w-auto"
                    icon={<Send className="w-3.5 h-3.5" />}
                  >
                    {loading ? 'Sending Inquiry...' : 'Transmit Skincare Inquiry'}
                  </CustomButton>

                </motion.form>
              ) : (
                <motion.div
                  key="formSuccess"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 sm:p-12 text-center flex flex-col items-center justify-center my-10"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mb-6 shadow-premium">
                    <Check className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#221F1D]">
                    Inquiry Safely Lodged!
                  </h3>
                  
                  <p className="text-stone-500 text-xs sm:text-sm font-light leading-relaxed max-w-sm mt-3">
                    Your formulation questions are now on our secure server workspace. Expect a bespoke diagnostic response drafted by our chief chemist in under 6 hours.
                  </p>

                  <button
                    onClick={() => setIsSent(false)}
                    className="mt-8 px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-stone-500 hover:text-brand-500 focus:outline-none focus:outline-dashed bg-stone-50 rounded-full border border-stone-200 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Studio Location Map Canvas */}
        <div className="mt-20 rounded-3xl overflow-hidden border border-stone-200 shadow-premium h-80 sm:h-96 relative flex items-center justify-center">
          {/* Mock Map graphics with customized stylish luxury styling */}
          <div className="absolute inset-0 bg-[#FAF8F5]">
            {/* SVG custom abstract map illustration lines */}
            <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f95f10" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              {/* Rivers / highways */}
              <path d="M -100 100 Q 200 40 500 250 T 1200 150" fill="none" stroke="#221F1D" strokeWidth="2" />
              <path d="M 0 350 L 1200 50" fill="none" stroke="#e0e0e0" strokeWidth="4" />
              <circle cx="650" cy="180" r="140" fill="#fcfcfc" opacity="0.3" stroke="#e0e0e0" />
            </svg>
          </div>

          <div className="relative z-10 bg-white/95 p-6 sm:p-8 rounded-2xl shadow-premium-xl max-w-md mx-4 border border-stone-100 text-center flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#f95f10] mb-2 font-medium">Headquarters Pavilion</span>
            <h3 className="font-serif text-lg font-medium text-[#221F1D] mb-2 leading-tight">Boonava Care Lab</h3>
            <p className="text-stone-500 text-xs font-light leading-relaxed">
              Tumkur -572104 <br />
              Come by for our on-site sensory hydration bar & botanical trials.
            </p>
            <span className="block text-[10px] text-[#221F1D] font-bold uppercase tracking-widest mt-4">Tours Available Friday 2pm — 5pm</span>
          </div>

        </div>

      </div>
    </div>
  );
}
