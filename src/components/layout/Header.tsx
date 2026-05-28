import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu, X, Sparkles } from 'lucide-react';

interface HeaderProps {
  activePage: string;
  onChangePage: (page: string) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export default function Header({
  activePage,
  onChangePage,
  cartCount,
  onOpenCart,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Shop Cleansers' },
    { id: 'about', label: 'Our Story' },
    { id: 'faq', label: 'Skincare FAQs' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (pageId: string) => {
    onChangePage(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Dynamic top ticker bar */}
      <div className="w-full bg-[#1C1917] text-white text-[11px] font-medium tracking-[0.22em] uppercase py-2.5 px-4 flex items-center justify-center gap-2 overflow-hidden select-none border-b border-white/5">
        <Sparkles className="w-3.5 h-3.5 text-brand-400 animate-pulse" />
        <span>GIFT COMPLIMENTARY NEROLI OIL SAMPLE ON ALL PRODUCTS OVER $50</span>
        <span className="hidden md:inline">| SECURE DHL WORLDWIDE PACKAGING</span>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-effect shadow-premium py-4 border-b border-[#FAF8F5]/30'
            : 'bg-[#FAF8F5]/90 py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Trigger */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-[#221F1D] hover:text-brand-500 transition-colors p-2 cursor-pointer focus:outline-none"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Brand Logo Display */}
            <button
              onClick={() => handleNavClick('home')}
              className="text-left group cursor-pointer focus:outline-none bg-transparent border-none p-0"
            >
              <img 
                src="/images/brand/logo.jpeg" 
                alt="Boonava" 
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </button>

            {/* Desktop Navigation Link Menu */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10">
              {navItems.map((item) => {
                const isActive = activePage === item.id || (item.id === 'products' && activePage.startsWith('product'));
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="relative py-2 text-xs font-semibold tracking-widest uppercase transition-colors duration-300 cursor-pointer focus:outline-none text-stone-800 hover:text-brand-500"
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-500"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Action Buttons: Search & Bag */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={onOpenCart}
                className="relative p-2.5 rounded-full hover:bg-stone-100 transition-colors duration-300 cursor-pointer focus:outline-none group"
                aria-label="Open Shopping Bag"
              >
                <ShoppingBag className="w-5.5 h-5.5 text-stone-800 group-hover:text-brand-500 transition-colors pr-0.5" />
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.7, opacity: 0 }}
                      className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-brand-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Advanced Full Screen Mobile Menu slide-over */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1C1917]/40 backdrop-blur-md md:hidden"
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="absolute top-0 bottom-0 left-0 w-4/5 max-w-sm bg-[#FAF8F5] p-6 shadow-premium-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-10">
                  <span className="font-serif text-xl tracking-[0.15em] font-medium text-[#221F1D]">BOONAVA</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1 rounded-full hover:bg-stone-100 cursor-pointer focus:outline-none"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6 text-[#221F1D]" />
                  </button>
                </div>

                <div className="flex flex-col gap-6">
                  {navItems.map((item) => {
                    const isActive = activePage === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`text-left text-lg font-medium tracking-wide pb-2 border-b border-stone-100 flex items-center justify-between cursor-pointer focus:outline-none ${
                          isActive ? 'text-brand-500 font-semibold' : 'text-stone-800'
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && <div className="w-2 h-2 rounded-full bg-brand-500" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Menu Footer Info */}
              <div className="border-t border-stone-200 pt-6 mt-6">
                <p className="text-xs text-stone-500 tracking-wide leading-relaxed">
                  Pure Citrus-Fused Restorative Skin & Body Soap Rituals. Hand-filled in amber glass containers.
                </p>
                <div className="mt-4 flex flex-col gap-1 text-[11px] font-medium tracking-wide text-stone-700">
                  <span>Inquiries: hello@boonava.com</span>
                  <span>WhatsApp: +1 (234) 567-890</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
