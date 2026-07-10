import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  const handleOpenWhatsApp = () => {
    // Elegant luxury skincare message
    const message = encodeURIComponent("Hello Boonava Care! I would love to get a premium skincare consultation or ask about your skincare products.");
    window.open(`https://wa.me/7892186971?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Label on hover */}
      <div className="mr-3 glass-effect px-4 py-2 rounded-full shadow-premium text-xs font-medium tracking-wide text-stone-700 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none">
        Skincare Care Consultant
      </div>

      <button
        onClick={handleOpenWhatsApp}
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 rounded-full shadow-premium-xl text-white cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95 group focus:outline-none"
        aria-label="Contact on WhatsApp"
      >
        {/* Animated pulse rings */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none" />
        <span className="absolute -inset-1 rounded-full border border-emerald-300/30 opacity-75 animate-pulse pointer-events-none" />

        <svg viewBox="0 0 448 512" fill="currentColor" className="w-6 h-6 animate-pulse">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3 508l145.1-38c32.7 17.8 69.3 27.2 106.7 27.2 122.4 0 222-99.6 222-222 0-59.3-23-115.1-65-157.1zM223.9 446c-33.2 0-65.7-8.9-94-25.7l-6.7-4-86.2 22.6 23-84-4.4-7C59.6 319 49.3 287 49.3 254c0-96.2 78.3-174.5 174.5-174.5 46.6 0 90.5 18.2 123.5 51.2 33 33 51.2 76.9 51.2 123.5 0 96.2-78.3 174.5-174.5 174.5zm98.2-134c-5.4-2.7-32-15.8-37-17.6-5-1.8-8.6-2.7-12.2 2.7-3.6 5.4-14 17.6-17.2 21.2-3.2 3.6-6.3 4.1-11.7 1.4-5.4-2.7-22.9-8.5-43.6-26.9-16.1-14.4-27-32.2-30.2-37.6-3.2-5.4-.3-8.3 2.4-11 2.4-2.4 5.4-6.3 8-9.5 2.7-3.2 3.6-5.4 5.4-9 1.8-3.6.9-6.8-.5-9.5-1.4-2.7-12.2-29.4-16.7-40.2-4.4-10.7-8.8-9.2-12.2-9.4-3.1-.2-6.7-.2-10.3-.2-3.6 0-9.5 1.4-14.5 6.8-5 5.4-19 18.6-19 45.4 0 26.8 19.5 52.7 22.2 56.3 2.7 3.6 38.3 58.5 92.8 82 13 5.6 23.2 9 31.1 11.5 13 4.1 24.9 3.5 34.3 2.1 10.5-1.6 32-13 36.5-25 4.5-12 4.5-22.3 3.2-24.5-1.3-2.2-5-3.5-10.4-6.2z"/>
        </svg>
      </button>
    </div>
  );
}
