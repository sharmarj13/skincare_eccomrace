export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQItem[] = [
  {
    id: 'faq-01',
    question: 'Are SÔL Botanicals products safe for extremely sensitive skin?',
    answer: 'Absolutely. All our formulas undergo intensive independent dermatological testing. We avoid harsh surfactants, petroleum, synthetic parabens, and chemical colors. We formulate with soothing bases like organic Aloe water and natural plant-derived glucosides to support sensitive skin types.',
    category: 'Formulation'
  },
  {
    id: 'faq-02',
    question: 'Why is the brand core ingredient Sweet Orange and Bitter Orange?',
    answer: 'Citrus extracts contain naturally occurring Vitamin C and bioflavonoids, which act as potent antioxidants that brighten and protect the skin barrier against oxidative pollutants. Furthermore, cold-pressed Citrus and Neroli essential oils are scientifically proven to elevate mood and reduce cortisol (stress hormone) during bath rituals.',
    category: 'Formulation'
  },
  {
    id: 'faq-03',
    question: 'How do I use the Oil-to-Milk Wash?',
    answer: 'For optimal lipid transfer, apply the Nectar Radiance wash onto dry or slightly damp skin. Massage gently; the oil binds with impurities and sunscreen. Then, splash warm water on and massage again—it emulsifies instantly into a luxurious, hydrating milk that washes off clean.',
    category: 'Usage'
  },
  {
    id: 'faq-04',
    question: 'Are your botanical containers sustainable and recyclable?',
    answer: 'We are committed to preserving natural ecosystems. 90% of our products are housed in high-durability, infinitely recyclable amber glass bottles that block UV light to premium preserve our botanical actives. Our pumps and boxes are manufactured with post-consumer recycled (PCR) waste.',
    category: 'Sustainability'
  },
  {
    id: 'faq-05',
    question: 'What is your shipping policy and normal delivery times?',
    answer: 'We offer free standard premium carbon-neutral shipping on all orders over $50. Once processed (usually 24 hours), domestic delivery takes 2 to 4 business days. Express shipping is available at checkout for next-day delivery.',
    category: 'Shipping & Returns'
  },
  {
    id: 'faq-06',
    question: 'Can I return an opened bottle if it does not fit my skin?',
    answer: 'Yes! We stand behind our botanical craft with our 30-day "Luminous Guarantee". If a wash triggers any skin reaction or discomfort, you can return the product (even if opened and used) within 30 days for a full, hassle-free refund.',
    category: 'Shipping & Returns'
  }
];
