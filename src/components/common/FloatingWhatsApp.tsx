import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp() {
  const handleOpenWhatsApp = () => {
    // Elegant luxury skincare message
    const message = encodeURIComponent("Hello Boonava Care! I would love to get a premium skincare consultation or ask about your skincare products.");
    window.open(`https://wa.me/9024234466?text=${message}`, '_blank');
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
        
        <MessageSquare className="w-6 h-6 animate-pulse" />
      </button>
    </div>
  );
}
