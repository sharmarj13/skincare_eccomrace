import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'prod-01',
    slug: 'boonava-organic-face-wash',
    name: 'Boonava Organic Face Wash',
    category: 'face',
    price: 32.00,
    discountPrice: 28.00,
    description: 'A gentle, organic face wash designed to deeply cleanse pores without stripping your skin of its natural moisture barrier. Perfect for daily glowing skin.',
    longDescription: 'Boonava Organic Face Wash is carefully formulated with natural botanical extracts and cold-pressed vitamins. It targets dullness and impurities, leaving your skin feeling refreshed, soft, and visibly brighter after every wash. Ideal for all skin types, including sensitive skin.',
    benefits: [
      'Gently brightens and balances hyperpigmentation',
      'Removes impurities without barrier damage',
      'Infused with organic botanical extracts',
      'Maintains healthy pH balance'
    ],
    ingredients: [
      'Organic Aloe Vera Juice',
      'Vitamin C Extract',
      'Chamomile Distillate',
      'Decyl Glucoside',
      'Vegetable Glycerin'
    ],
    usage: 'Dispense 1-2 pumps onto damp hands. Gently massage onto face in circular motions for 60 seconds. Rinse thoroughly with lukewarm water. Use morning and night.',
    image: '/images/brand/fash-wash.jpeg',
    secondaryImages: ['/images/brand/fash-wash.jpeg'],
    rating: 4.8,
    reviewCount: 124,
    size: '150ml | 5.1 FL. OZ',
    stock: 45,
    isFeatured: true,
    reviews: [
      {
        id: 'rev-01-01',
        author: 'Elena R.',
        rating: 5,
        comment: 'This has transformed my morning routine. Truly brightens my skin and feels amazing!',
        date: '2026-04-18',
        recommended: true
      }
    ]
  },
  {
    id: 'prod-02',
    slug: 'boonava-vitamin-c-face-serum',
    name: 'Boonava Vitamin C Face Serum',
    category: 'face',
    price: 45.00,
    description: 'An advanced anti-aging serum packed with highly stable Vitamin C to reduce fine lines, boost collagen, and give you a radiant, youthful glow.',
    longDescription: 'Our concentrated Boonava Vitamin C Face Serum penetrates deep into the dermis to repair oxidative damage and stimulate collagen production. It fades dark spots and provides an instant plumping effect, making your skin look flawless and naturally radiant.',
    benefits: [
      'Dramatically reduces fine lines and wrinkles',
      'Fades dark spots and acne scars',
      'Boosts natural collagen production',
      'Fast-absorbing, non-greasy formula'
    ],
    ingredients: [
      'Ascorbyl Glucoside (Stable Vitamin C)',
      'Hyaluronic Acid',
      'Vitamin E',
      'Jojoba Seed Oil',
      'Organic Rose Water'
    ],
    usage: 'Apply 3-4 drops to clean, slightly damp skin. Gently press the serum into your face and neck. Allow it to absorb fully before applying moisturizer.',
    image: '/images/brand/face-serm.jpeg',
    secondaryImages: ['/images/brand/face-serm.jpeg'],
    rating: 4.9,
    reviewCount: 96,
    size: '30ml | 1.0 FL. OZ',
    stock: 30,
    isFeatured: true,
    reviews: [
      {
        id: 'rev-02-01',
        author: 'Sophia C.',
        rating: 5,
        comment: 'My hyperpigmentation started fading within 2 weeks of twice-daily use. Absolutely in love with Boonava!',
        date: '2026-05-20',
        recommended: true
      }
    ]
  },
  {
    id: 'prod-03',
    slug: 'boonava-hydrating-moisturizing-cream',
    name: 'Boonava Hydrating Moisturizing Cream',
    category: 'face',
    price: 38.00,
    description: 'A rich, luxurious face and neck cream that provides 24-hour deep hydration while locking in essential skin lipids.',
    longDescription: 'Experience ultimate hydration with the Boonava Moisturizing Cream. Crafted for exceptionally dry or sensitized skin, this velvety cream melts into your skin instantly. It seals in moisture, protects against environmental stressors, and leaves a cashmere-soft finish.',
    benefits: [
      'Provides intense 24-hour hydration',
      'Repairs and strengthens the skin barrier',
      'Leaves skin silky smooth with no oily residue',
      'Soothes redness and irritation'
    ],
    ingredients: [
      'Shea Butter',
      'Squalane',
      'Ceramides Complex',
      'Sweet Almond Oil',
      'Green Tea Extract'
    ],
    usage: 'Take a pea-sized amount and warm it between your fingers. Gently massage over the face and neck using upward strokes. Use as the final step in your skincare routine.',
    image: '/images/brand/moisturizing-cream.jpeg',
    secondaryImages: ['/images/brand/moisturizing-cream.jpeg'],
    rating: 4.7,
    reviewCount: 88,
    size: '50ml | 1.7 FL. OZ',
    stock: 18,
    isFeatured: true,
    reviews: [
      {
        id: 'rev-03-01',
        author: 'Rebecca T.',
        rating: 5,
        comment: 'For dry winter skin, this is an absolute miracle. It locks in hydration so beautifully.',
        date: '2026-05-15',
        recommended: true
      }
    ]
  },
  {
    id: 'prod-04',
    slug: 'boonava-rejuvenating-body-wash',
    name: 'Boonava Rejuvenating Body Wash',
    category: 'body',
    price: 34.00,
    description: 'Transform your daily shower into a high-end spa ritual with this premium, hydrating body wash that gently cleanses and nourishes.',
    longDescription: 'Boonava Rejuvenating Body Wash utilizes state-of-the-art lipid-replenishing technology to feed your skin as it cleanses. Infused with natural essential oils, it releases an intoxicating, relaxing scent that lingers elegantly throughout your day while keeping your body incredibly soft.',
    benefits: [
      'Luxurious lather that moisturizes dry skin instantly',
      'Soothes skin inflammation and irritation',
      'Leaves skin beautifully smooth and refreshed',
      'Elegant, aroma-therapeutic scent'
    ],
    ingredients: [
      'Organic Argan Oil',
      'Avocado Oil',
      'Coconut-derived Cleansers',
      'Lavender Essential Oil',
      'Colloidal Oat Extract'
    ],
    usage: 'Lather a generous amount over wet body using hands or a soft bath sponge. Breathe in the exquisite aromatics. Rinse meticulously.',
    image: '/images/brand/body-wash.jpeg',
    secondaryImages: ['/images/brand/body-wash.jpeg'],
    rating: 4.8,
    reviewCount: 110,
    size: '300ml | 10.1 FL. OZ',
    stock: 40,
    isFeatured: false,
    reviews: [
      {
        id: 'rev-04-01',
        author: 'Claire D.',
        rating: 5,
        comment: 'Leaves my skin incredibly silky smooth. No lotion needed after the shower anymore!',
        date: '2026-04-29',
        recommended: true
      }
    ]
  },
  {
    id: 'prod-05',
    slug: 'boonava-premium-skincare-kit',
    name: 'Boonava Premium Skincare Kit',
    category: 'set',
    price: 98.00,
    discountPrice: 85.00,
    description: 'The ultimate luxury complete routine set containing everything you need for flawless, glowing skin from head to toe.',
    longDescription: 'Treat yourself or someone dear to the complete Boonava restorative experience. This signature set houses our best-selling face wash, serum, and moisturizer, beautifully packaged. Unveil clean, radiantly soft skin globally with this premium collection.',
    benefits: [
      'Full face care routine in one premium set',
      'Great savings compared to separate purchases',
      'Perfect gorgeous present for luxury seekers',
      'Achieve flawless, glowing skin naturally'
    ],
    ingredients: [
      'Includes Boonava Organic Face Wash (150ml)',
      'Includes Boonava Vitamin C Serum (30ml)',
      'Includes Boonava Moisturizing Cream (50ml)'
    ],
    usage: 'Follow the 3-step routine daily: Cleanse with the Face Wash, treat with the Vitamin C Serum, and lock in moisture with the Hydrating Cream.',
    image: '/images/brand/sceencare.jpeg',
    secondaryImages: ['/images/brand/sceencare.jpeg'],
    rating: 5.0,
    reviewCount: 38,
    size: 'Complete Ritual Set',
    stock: 14,
    isFeatured: false,
    reviews: [
      {
        id: 'rev-05-01',
        author: 'Serena C.',
        rating: 5,
        comment: 'Purchased as a birthday treat for myself. All the products are absolute masterclasses. Excellent value.',
        date: '2026-05-12',
        recommended: true
      }
    ]
  }
];
