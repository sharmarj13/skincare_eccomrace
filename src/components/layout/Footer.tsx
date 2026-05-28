import { Mail, Phone, MapPin, Instagram, Sparkles, AlertCircle } from 'lucide-react';

interface FooterProps {
  onChangePage: (page: string) => void;
}

export default function Footer({ onChangePage }: FooterProps) {
  const handlePageClick = (pageId: string) => {
    onChangePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const shopLinks = [
    { label: 'Face Cleansers', id: 'products', filter: 'face' },
    { label: 'Body Restores', id: 'products', filter: 'body' },
    { label: 'Cleansing Ritual Sets', id: 'products', filter: 'set' },
  ];

  const brandLinks = [
    { label: 'About Our Aligned Story', id: 'about' },
    { label: 'Botanical Skincare FAQ', id: 'faq' },
    { label: 'Connect With SÔL Lab', id: 'contact' },
  ];

  const policyLinks = [
    { label: 'Privacy Regulations', id: 'privacy-policy' },
    { label: 'Terms & Conditions', id: 'terms-condition' },
    { label: 'Luminous Returns', id: 'return-policy' },
  ];

  return (
    <footer className="bg-[#151312] text-[#F3EFEA] pt-16 pb-12 overflow-hidden border-t border-[#26211F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 pb-14 border-b border-[#26211F]">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-5">
            <div>
              <span className="font-serif text-2xl tracking-[0.16em] font-medium text-white">
                SÔL<span className="text-brand-500">.</span>
              </span>
              <p className="text-[9px] uppercase tracking-[0.38em] text-stone-400 font-semibold mt-1">
                BOTANICALS
              </p>
            </div>
            
            <p className="text-sm text-stone-400 font-light leading-relaxed">
              Formulating exceptionally pure, pH-balanced washes and skin essences infused with medical-grade blood orange actives and distilled neroli blossoms. Engineered beautifully for deep hydration.
            </p>

            <div className="flex items-center gap-4 mt-2">
              <button
                className="w-9 h-9 rounded-full bg-[#1C1917] border border-stone-800 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </button>
              <button
                className="w-9 h-9 rounded-full bg-[#1C1917] border border-stone-800 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all cursor-pointer"
                aria-label="E-Mail Circular"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Column 2: Quick Shop Links */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-300 mb-6">
              Shop Botanics
            </h3>
            <ul className="flex flex-col gap-3.5">
              {shopLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handlePageClick(link.id)}
                    className="text-sm font-light text-stone-400 hover:text-white transition-colors duration-200 cursor-pointer text-left focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Brand & FAQs */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-300 mb-6">
              The SÔL Source
            </h3>
            <ul className="flex flex-col gap-3.5">
              {brandLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handlePageClick(link.id)}
                    className="text-sm font-light text-stone-400 hover:text-white transition-colors duration-200 cursor-pointer text-left focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Lab Details */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-300 mb-2">
              Bespoke Care Lab
            </h3>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span className="text-sm text-stone-400 font-light leading-relaxed">
                  Suite 48, Citrus Botanic Pavilion, Newport Beach, CA 92660
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span className="text-sm text-stone-400 font-light">
                  +1 (234) 567-890
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span className="text-sm text-stone-400 font-light">
                  hello@solbotanicals.com
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Sub Bar with Policies */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-stone-500">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
            {policyLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => handlePageClick(link.id)}
                className="hover:text-white transition-colors cursor-pointer focus:outline-none"
              >
                {link.label}
              </button>
            ))}
          </div>

          <p className="font-light tracking-wide text-center md:text-right">
            &copy; 2026 SÓL Botanicals LLC. Hand-filled in California.
          </p>
        </div>
      </div>
    </footer>
  );
}
