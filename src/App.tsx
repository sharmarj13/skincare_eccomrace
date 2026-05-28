import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product, CartItem } from './types';
import { products } from './data/products';

// Layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Lazy Loaded Page Views
const HeroSection = lazy(() => import('./components/home/HeroSection'));
const FeaturedProducts = lazy(() => import('./components/home/FeaturedProducts'));
const BrandInfo = lazy(() => import('./components/home/BrandInfo'));
const ProductShowcase = lazy(() => import('./components/home/ProductShowcase'));
const Testimonials = lazy(() => import('./components/home/Testimonials'));
const Newsletter = lazy(() => import('./components/home/Newsletter'));

const ProductsView = lazy(() => import('./components/products/ProductsView'));
const ProductDetailView = lazy(() => import('./components/products/ProductDetailView'));
const AboutView = lazy(() => import('./components/about/AboutView'));
const FAQView = lazy(() => import('./components/faq/FAQView'));
const ContactView = lazy(() => import('./components/contact/ContactView'));
const PolicyView = lazy(() => import('./components/common/PolicyView'));

// Common Floating components
import CartDrawer from './components/common/CartDrawer';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';
import ScrollToTop from './components/common/ScrollToTop';
import Loader from './components/common/Loader';
import OfferModal from './components/home/OfferModal';

export default function App() {
  const [activePage, setActivePage] = useState<string>(() => {
    const path = window.location.pathname;
    return path === '/' || path === '' ? 'home' : path.substring(1);
  });
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);

  // Load cart from localStorage on boot
  useEffect(() => {
    const savedCart = localStorage.getItem('boonava_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse saved cart parameters', e);
      }
    }

    // Interactive initial loading simulation for luxury brand entrance
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 1800);

    // Trigger offer modal after 12 seconds
    const offerTimer = setTimeout(() => {
      setIsOfferModalOpen(true);
    }, 12000);

    // Listen for browser back/forward navigation
    const handlePopState = () => {
      const path = window.location.pathname;
      setActivePage(path === '/' || path === '' ? 'home' : path.substring(1));
    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      clearTimeout(timer);
      clearTimeout(offerTimer);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // SEO Dynamic Meta Tags
  useEffect(() => {
    let title = 'Boonava Care | Glowing Skin & Vitamin C Face Wash';
    let metaDescription = 'Buy the best Boonava Care skincare products. Discover our premium Vitamin C Face Wash, Anti-Aging Serum, Sunscreen SPF50, and Hydrating Moisturizer for glowing skin.';

    if (activePage === 'products') {
      title = 'Shop Best Skincare Routine | Boonava Care';
      metaDescription = 'Explore Boonava Care\'s complete daily routine. Shop Vitamin C Face Serum, Sunscreen SPF 50, and Lemon Body Wash designed for glowing, healthy skin.';
    } else if (activePage.startsWith('product/')) {
      const slug = activePage.split('/')[1];
      const product = products.find(p => p.slug === slug);
      if (product) {
        title = `${product.name} | Buy Online | Boonava Care`;
        metaDescription = product.description;
      }
    } else if (activePage === 'about') {
      title = 'Our Skincare Story | Boonava Care';
      metaDescription = 'Learn about Boonava Care\'s simple, effective 5-step skincare routine designed to give you glowing, radiant, and healthy skin every single day.';
    } else if (activePage === 'faq') {
      title = 'Skincare FAQs & Guides | Boonava Care';
    } else if (activePage === 'contact') {
      title = 'Contact Us | Boonava Care Skincare Support';
    }

    document.title = title;
    let metaTag = document.querySelector('meta[name="description"]');
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('name', 'description');
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', metaDescription);
  }, [activePage]);

  // Save cart changes to localStorage
  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem('boonava_cart', JSON.stringify(newCart));
  };

  const handleAddToCart = (product: Product, quantity: number) => {
    const existingIndex = cart.findIndex((item) => item.product.id === product.id);
    let updatedCart = [...cart];

    if (existingIndex > -1) {
      const newQty = updatedCart[existingIndex].quantity + quantity;
      // Handle stock restriction
      if (newQty <= product.stock) {
        updatedCart[existingIndex].quantity = newQty;
      } else {
        updatedCart[existingIndex].quantity = product.stock;
      }
    } else {
      updatedCart.push({ product, quantity: Math.min(quantity, product.stock) });
    }

    saveCart(updatedCart);
  };

  const handleUpdateCartQuantity = (product: Product, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveCartItem(product);
      return;
    }

    const updatedCart = cart.map((item) => {
      if (item.product.id === product.id) {
        return { ...item, quantity: Math.min(quantity, product.stock) };
      }
      return item;
    });

    saveCart(updatedCart);
  };

  const handleRemoveCartItem = (product: Product) => {
    const updatedCart = cart.filter((item) => item.product.id !== product.id);
    saveCart(updatedCart);
  };

  const handleClearCart = () => {
    saveCart([]);
  };

  // Switch active page helper
  const handlePageChange = (pageId: string) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update browser URL history
    const newUrl = pageId === 'home' ? '/' : `/${pageId}`;
    if (window.location.pathname !== newUrl) {
      window.history.pushState({}, '', newUrl);
    }
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Router dispatcher
  const renderActivePage = () => {
    if (activePage === 'home') {
      return (
        <motion.div
          key="home-page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection
            onShopClick={() => handlePageChange('products')}
            onAboutClick={() => handlePageChange('about')}
          />
          <FeaturedProducts
            products={products}
            onAddToCart={handleAddToCart}
            onClickProduct={(slug) => handlePageChange(`product/${slug}`)}
            onExploreAllClick={() => handlePageChange('products')}
          />
          <BrandInfo />
          <ProductShowcase
            products={products}
            onAddToCart={handleAddToCart}
            onClickProduct={(slug) => handlePageChange(`product/${slug}`)}
            onExploreAllClick={() => handlePageChange('products')}
          />
          <Testimonials />
          <Newsletter />
        </motion.div>
      );
    }

    if (activePage === 'products') {
      return (
        <motion.div
          key="products-view"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.5 }}
        >
          <ProductsView
            products={products}
            onAddToCart={handleAddToCart}
            onClickProduct={(slug) => handlePageChange(`product/${slug}`)}
          />
        </motion.div>
      );
    }

    if (activePage.startsWith('product/')) {
      const slug = activePage.split('/')[1];
      return (
        <motion.div
          key={`detail-${slug}`}
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.99 }}
          transition={{ duration: 0.5 }}
        >
          <ProductDetailView
            productSlug={slug}
            products={products}
            onAddToCart={handleAddToCart}
            onNavigateToProduct={(newSlug) => handlePageChange(`product/${newSlug}`)}
            onGoBack={() => handlePageChange('products')}
          />
        </motion.div>
      );
    }

    if (activePage === 'about') {
      return (
        <motion.div
          key="about-view"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.5 }}
        >
          <AboutView />
        </motion.div>
      );
    }

    if (activePage === 'faq') {
      return (
        <motion.div
          key="faq-view"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.5 }}
        >
          <FAQView />
        </motion.div>
      );
    }

    if (activePage === 'contact') {
      return (
        <motion.div
          key="contact-view"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.5 }}
        >
          <ContactView />
        </motion.div>
      );
    }

    if (activePage === 'privacy-policy') {
      return (
        <motion.div
          key="privacy-view"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.5 }}
        >
          <PolicyView type="privacy" />
        </motion.div>
      );
    }

    if (activePage === 'terms-condition') {
      return (
        <motion.div
          key="terms-view"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.5 }}
        >
          <PolicyView type="terms" />
        </motion.div>
      );
    }

    if (activePage === 'return-policy') {
      return (
        <motion.div
          key="return-view"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.5 }}
        >
          <PolicyView type="return" />
        </motion.div>
      );
    }

    return null;
  };

  return (
    <>
      <AnimatePresence>
        {isInitialLoading && <Loader />}
      </AnimatePresence>

      <div className="min-h-screen flex flex-col justify-between selection:bg-brand-100 selection:text-brand-700 bg-[#FAF8F5]">
        <div>
          {/* Global Header */}
          <Header
            activePage={activePage}
            onChangePage={handlePageChange}
            cartCount={cartCount}
            onOpenCart={() => setIsCartOpen(true)}
          />

          {/* Dynamic Router Area with transition presence hooks */}
          <main className="relative min-h-[50vh]">
            <Suspense fallback={<Loader />}>
              <AnimatePresence mode="wait">
                {renderActivePage()}
              </AnimatePresence>
            </Suspense>
          </main>
        </div>

        {/* Global Footer */}
        <Footer onChangePage={handlePageChange} />

        {/* Global Cart Drawer sliding canvas Overlay */}
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cart}
          onUpdateQuantity={handleUpdateCartQuantity}
          onRemoveItem={handleRemoveCartItem}
          onClearCart={handleClearCart}
        />

        {/* Tactical interactive floats */}
        <FloatingWhatsApp />
        <ScrollToTop />
        <OfferModal 
          isOpen={isOfferModalOpen} 
          onClose={() => setIsOfferModalOpen(false)} 
        />
      </div>
    </>
  );
}
