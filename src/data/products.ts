import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'prod-01',
    slug: 'vit-c-face-wash',
    name: 'Vitamin C Face Wash',
    category: 'face',
    price: 349.00,
    discountPrice: 229.00,
    description: 'A deeply refreshing Vitamin C Face Wash that gently cleanses impurities while giving your skin a radiant, natural glow every morning.',
    longDescription: 'Our best-selling Vitamin C Face Wash is your daily secret to glowing, refreshed skin. Formulated to tackle dullness and even out your skin tone, this gentle yet effective cleanser washes away dirt, excess oil, and impurities without stripping your skin\'s natural moisture. Packed with powerful antioxidants, it revitalizes tired skin and leaves you looking bright and energized.',
    benefits: [
      'Brightens skin tone and boosts natural radiance',
      'Removes daily dirt and excess oil gently',
      'Fades dark spots over time with Vitamin C',
      'Maintains perfect pH balance for healthy skin'
    ],
    ingredients: [
      'Pure Vitamin C (Ascorbic Acid)',
      'Aloe Vera Extract',
      'Orange Peel Oil',
      'Glycerin for hydration',
      'Gentle plant-based cleansers'
    ],
    usage: 'Take a coin-sized amount onto damp hands. Gently massage onto your face in circular motions for 30-60 seconds. Rinse thoroughly with water. Use morning and night for best results.',
    image: '/images/face-wash/4.jpeg',
    secondaryImages: [
      '/images/face-wash/1.jpeg',
      '/images/face-wash/2.jpeg',
      '/images/face-wash/3.jpeg',
      '/images/face-wash/5.jpeg',
      '/images/face-wash/6.jpeg',
      '/images/face-wash/7.jpeg',
      '/images/face-wash/8.jpeg',
      '/images/face-wash/9.jpeg',
      '/images/face-wash/10.jpeg'
    ],
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
    slug: 'vit-c-face-serum',
    name: 'Vitamin C Face Serum',
    category: 'face',
    price: 699.00,
    discountPrice: 399.00,
    description: 'A fast-absorbing, high-potency Vitamin C Face Serum designed to reduce pigmentation, boost collagen, and give you flawless, youthful skin.',
    longDescription: 'Say goodbye to dark spots and uneven texture with our advanced Vitamin C Face Serum. This lightweight formula penetrates deeply to repair skin damage and stimulate collagen production. Perfect for achieving a glass-skin look, it acts as a powerful anti-aging barrier while keeping your skin visibly plump, hydrated, and radiant.',
    benefits: [
      'Significantly reduces dark spots and pigmentation',
      'Boosts collagen for an anti-aging effect',
      'Provides a natural, luminous glass-skin glow',
      'Fast-absorbing and non-greasy texture'
    ],
    ingredients: [
      'Stabilized Vitamin C',
      'Hyaluronic Acid for deep hydration',
      'Vitamin E',
      'Niacinamide',
      'Witch Hazel Extract'
    ],
    usage: 'Apply 3-4 drops directly to a clean face and neck. Gently dab and press the serum into your skin until fully absorbed. Follow up with a moisturizer.',
    image: '/images/face-serum/2.jpeg',
    secondaryImages: [
      '/images/face-serum/1.jpeg',
      '/images/face-serum/3.jpeg',
      '/images/face-serum/4.jpeg',
      '/images/face-serum/5.jpeg',
      '/images/face-serum/6.jpeg'
    ],
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
    slug: 'moisturizer-cream',
    name: 'Hydrating Moisturizer Cream',
    category: 'face',
    price: 449.00,
    discountPrice: 299.00,
    description: 'A deeply nourishing Moisturizer Cream that locks in hydration for 24 hours, leaving your skin feeling silky smooth without any greasy residue.',
    longDescription: 'Our signature Moisturizer Cream is the ultimate hydration solution for all skin types. It melts seamlessly into the skin, repairing your natural moisture barrier and keeping flakiness at bay. Whether it\'s harsh winters or dry summers, this cream ensures your face stays cashmere-soft, plump, and healthy all day long.',
    benefits: [
      'Locks in deep hydration for up to 24 hours',
      'Repairs and strengthens the skin barrier',
      'Non-comedogenic (won\'t clog pores)',
      'Leaves a perfectly smooth, non-oily finish'
    ],
    ingredients: [
      'Ceramides Complex',
      'Shea Butter',
      'Squalane',
      'Hyaluronic Acid',
      'Green Tea Extract'
    ],
    usage: 'Scoop a pea-sized amount and dot it across your face and neck. Massage gently in upward, outward circles until perfectly blended.',
    image: '/images/moisturizing/2.jpeg',
    secondaryImages: [
      '/images/moisturizing/1.jpeg',
      '/images/moisturizing/3.jpeg',
      '/images/moisturizing/4.jpeg'
    ],
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
    slug: 'lemon-body-wash',
    name: 'Lemon Body Wash',
    category: 'body',
    price: 349.00,
    discountPrice: 199.00,
    description: 'A refreshing and zesty Lemon Body Wash that awakens your senses, deeply cleanses, and leaves your skin feeling incredibly soft and energized.',
    longDescription: 'Turn your daily shower into a revitalizing spa experience with our Lemon Body Wash. Bursting with real citrus extracts, it effortlessly washes away sweat, grime, and fatigue. The rich, hydrating lather ensures your skin never feels tight or dry, while the uplifting lemon aroma keeps you feeling fresh and confident all day.',
    benefits: [
      'Instantly refreshes and awakens the senses',
      'Cleanses deeply without stripping natural oils',
      'Leaves body skin incredibly smooth and hydrated',
      'Long-lasting, natural zesty lemon fragrance'
    ],
    ingredients: [
      'Natural Lemon Peel Extract',
      'Vitamin E',
      'Coconut-based gentle cleansers',
      'Glycerin',
      'Aloe Vera Leaf Juice'
    ],
    usage: 'Pour a generous amount onto a wet loofah or your hands. Work into a rich lather and massage over your entire body. Rinse thoroughly.',
    image: '/images/body-wash/3.jpeg',
    secondaryImages: [
      '/images/body-wash/1.jpeg',
      '/images/body-wash/2.jpeg',
      '/images/body-wash/4.jpeg',
      '/images/body-wash/5.jpeg',
      '/images/body-wash/6.jpeg',
      '/images/body-wash/7.jpeg',
      '/images/body-wash/8.jpeg'
    ],
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
    slug: 'sunscreen-spf50',
    name: 'Sunscreen SPF 50 PA++++',
    category: 'face',
    price: 499.00,
    discountPrice: 249.00,
    description: 'A broad-spectrum Sunscreen SPF 50 PA++++ that provides maximum protection against UVA and UVB rays without leaving a white cast or greasy feel.',
    longDescription: 'Never step out without our ultimate Sunscreen SPF 50 PA++++. Specially formulated to offer heavy-duty protection against sun damage, premature aging, and tanning. It features an ultra-light, non-sticky formula that blends seamlessly into all skin tones, leaving zero white cast. Perfect for everyday wear, even under makeup.',
    benefits: [
      'Maximum SPF 50 PA++++ broad-spectrum protection',
      'Zero white cast, blends seamlessly into all skin tones',
      'Non-greasy, lightweight, and sweat-resistant formula',
      'Prevents tanning, sunburn, and premature aging'
    ],
    ingredients: [
      'Zinc Oxide (Mineral Protection)',
      'Titanium Dioxide',
      'Niacinamide (for skin barrier)',
      'Vitamin E Extract',
      'Aloe Vera Base'
    ],
    usage: 'Apply a generous amount (about two fingers worth) evenly to your face, neck, and exposed areas 15 minutes before sun exposure. Reapply every 3-4 hours.',
    image: '/images/sunscreen/1.jpeg',
    secondaryImages: [
      '/images/sunscreen/2.jpeg',
      '/images/sunscreen/3.jpeg',
      '/images/sunscreen/4.jpeg',
      '/images/sunscreen/5.jpeg',
      '/images/sunscreen/6.jpeg'
    ],
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
