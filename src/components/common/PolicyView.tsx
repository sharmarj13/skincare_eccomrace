import PageBanner from '../layout/PageBanner';

interface PolicyViewProps {
  type: 'privacy' | 'terms' | 'return';
}

export default function PolicyView({ type }: PolicyViewProps) {
  const content = {
    privacy: {
      title: 'Privacy Regulations',
      subtitle: 'Data Integrity & Trust',
      backgroundImage: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1200&auto=format&fit=crop',
      date: 'Last Modified: May 26, 2026',
      sections: [
        {
          heading: '1. SÔL Information Security Creed',
          text: 'We respect the sanctity of your digital space. All biological profile audits, skin quiz responses, checkout billing addresses, and shipping parameters are immediately processed under high-level SSL and TLS 1.3 cryptographic protocols. We do not sell your personal or skin data to third-party marketing brokers.',
        },
        {
          heading: '2. Cookies & Local Memory storage',
          text: 'Our skincare store utilizes lightweight, client-side browser storage (such as Cookies and LocalStorage) strictly to memorize active items in your Shopping Bag, remember your past browsing coordinates, and streamline checkout operations. No tracking pixels are loaded without your consent.',
        },
        {
          heading: '3. Newsletter Circle Data',
          text: 'By joining our SÔL newsletter circle, you allow us to securely record your email address to transfer travel vouchers and notification alerts about upcoming botanical drops. You may instantly click "Opt-Out" at the base of any newsletter to completely bleach your parameters from our lists.',
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      subtitle: 'Aligned Purchase Covenant',
      backgroundImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop',
      date: 'Last Modified: May 26, 2026',
      sections: [
        {
          heading: '1. Usage & Botanical Cautions',
          text: 'All SÔL soap washes contain genuine natural active components (including cold-pressed sweet orange peel oils, absolute neroli molecules, and organic citric acids). If you suffer from known allergies to citrus seeds or plants, we recommend reviewing our published ingredients or performing a 24-hour localized wrist skin test prior to global coverage.',
        },
        {
          heading: '2. Dispatch and Carrier Responsibility',
          text: 'We package each luxury bottle inside highly resilient custom pine boxes or reinforced post-consumer card cases. Standard delivery transitions are handled by carbon-neutral DHL or FedEx partners. SÔL takes full responsibility for any bottle shattering during oceanic transit.',
        },
        {
          heading: '3. Digital Store Accuracy',
          text: 'We strive to maintain exact visual representation of our products. Due to the high purity and seasonal hand-harvest nature of our blood orange rinds, minor variations in the amber visual color spectrum of the washes are normal and reflect organic authenticity.',
        },
      ],
    },
    return: {
      title: 'Luminous Returns & Guarantees',
      subtitle: 'The SÔL Happiness Guarantee',
      backgroundImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop',
      date: 'Last Modified: May 26, 2026',
      sections: [
        {
          heading: '1. The 30-Day Luminous Guarantee',
          text: 'Because every biological skin profile behaves differently under citrus fruit enzymes, we provide our acclaimed 30-Day Luminous Guarantee. If any of our face or body cleansers fails to upgrade your glow, triggers tight dryness, or causes flushing, we back you up 100%.',
        },
        {
          heading: '2. Returns Process on Opened Containers',
          text: 'We accept returns on bottles even if they are already opened, unsealed, or partly used. Reach out to our Bespoke Care Lab at hello@solbotanicals.com to secure a pre-paid DHL shipping label. Wrap your amber glass bottle safely and drop it at any standard shipping carrier.',
        },
        {
          heading: '3. Refund Issuance Duration',
          text: 'Upon product arrival at our critical California pavilion warehouse, our chemists inspect the container, and our systems issue a 100% full refund immediately. Retribution timelines take 2 to 5 standard banks business days to reflect on your checkout card.',
        },
      ],
    },
  };

  const active = content[type];

  return (
    <div className="bg-[#FAF8F5] pb-24 text-left">
      <PageBanner
        title={active.title}
        subtitle={active.subtitle}
        backgroundImage={active.backgroundImage}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <span className="text-[10px] font-bold text-brand-500 uppercase tracking-widest block mb-4 select-none">
          Legal Specifications • {active.date}
        </span>

        <p className="text-stone-600 text-xs font-light leading-relaxed mb-10 pb-6 border-b border-stone-200">
          The SÔL Botanicals corporation values regulatory transparency and cosmetic safety. Please read these legal covenants detailing product warranties, shipping protections, and user parameter processing before finalizing purchases from our store.
        </p>

        <div className="flex flex-col gap-10">
          {active.sections.map((sect, idx) => (
            <div key={idx} className="flex flex-col items-start bg-white p-7 sm:p-8 rounded-2xl border border-stone-200/50 shadow-premium">
              <h3 className="font-serif text-lg font-semibold text-[#221F1D] mb-3 leading-snug">
                {sect.heading}
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                {sect.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
