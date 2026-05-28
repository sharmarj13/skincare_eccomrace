import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'prod-01',
    slug: 'citrus-glow-brightening-face-wash',
    name: 'Citrus Glow Brightening Face Wash',
    category: 'face',
    price: 32.00,
    discountPrice: 28.00,
    description: 'A Vitamin C infused micro-cleanser that gently dissolves dead cells while preserving natural skin lipids for an luminous, sun-kissed radiance.',
    longDescription: 'Engineered with cold-pressed orange peel active compounds, organic blood orange hydrosol, and botanical AHAs, this gentle gel-to-foam cleanser deeply purifies without ever stripping the moisture barrier. It targets dullness, uneven texture, and pollution buildup to leave your skin feeling completely refreshed, ultra-soft, and glowing.',
    benefits: [
      'Gently brightens and balances hyperpigmentation',
      'Protects from oxidative stress with rich biological anti-oxidants',
      'Cleanses down to pores without skin barrier damage',
      'Maintains healthy pH dynamics around 5.5'
    ],
    ingredients: [
      'Citrus Aurantium Dulcis (Blood Orange) Fruit Water',
      'Aloe Barbadensis Leaf Juice (Soothing Base)',
      'Ascorbyll Glucoside (Stable Vitamin C)',
      'Vaccinium Myrtillus Fruit (Bilberry Extract)',
      'Salix Alba Bark (Organic White Willow Bark Extract / Salicylic Acid source)',
      'Vegetable Glycerin',
      'Decyl Glucoside (Coconut-derived Eco-Purifier)'
    ],
    usage: 'Dispense 1-2 pumps onto damp hands. Gently massage onto face in circular motions for 60 seconds, allowing botanical AHAs to activate. Rinse thoroughly with lukewarm water. Use morning and night.',
    image: '/images/brand/fash-wash.jpeg',
    secondaryImages: [
      'https://images.unsplash.com/photo-1608248597481-496100c8c836?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.8,
    reviewCount: 124,
    size: '150ml | 5.1 FL. OZ',
    stock: 45,
    isFeatured: true,
    reviews: [
      {
        id: 'rev-01-01',
        author: 'Elena Rostova',
        rating: 5,
        comment: 'This has transformed my morning routine. The smell is incredibly refreshing—like walking through a Sicilian orange grove. Truly brightens!',
        date: '2026-04-18',
        recommended: true
      },
      {
        id: 'rev-01-02',
        author: 'Marcus Vance',
        rating: 4,
        comment: 'Very gentle. It does not leave my skin dry or tight compared to traditional gel face washes. Highly recommend matching with their toner.',
        date: '2026-05-02',
        recommended: true
      },
      {
        id: 'rev-01-03',
        author: 'Sophia Chen',
        rating: 5,
        comment: 'My hyperpigmentation started fading within 2 weeks of twice-daily use. Absolutely in love with this brand!',
        date: '2026-05-20',
        recommended: true
      }
    ]
  },
  {
    id: 'prod-02',
    slug: 'neroli-blossom-rejuvenating-body-wash',
    name: 'Neroli Blossom Rejuvenating Body Wash',
    category: 'body',
    price: 45.00,
    description: 'An elite botanical bath elixir meticulously blended with premium Neroli orange blossom, cold-pressed avocado lipids, and colloidal minerals.',
    longDescription: 'Elevate your daily shower into a high-end spa ritual. This premium, low-foaming body wash utilizes state-of-the-art lipid-replenishing technology to feed your skin as it cleanses. Infused with absolute neroli essential oil and warm botanical amber, it releases an intoxicating scent that lingers elegantly throughout your day.',
    benefits: [
      'Luxurious nourishing lather that moisturizes dry skin instantly',
      'Infused with antioxidant-rich botanical cold-pressed oils',
      'Soothes skin inflammation and irritation after sun-exposure',
      'Elegant, long-lasting aroma-therapeutic designer scent'
    ],
    ingredients: [
      'Citrus Aurantium Amara (Neroli Floral Distillate)',
      'Persea Gratissima (Avocado Oil) Oil',
      'Argania Spinosa Kernel (Organic Argan Oil)',
      'Meadowfoam Seed Oil',
      'Hydrolyzed Soy Protein',
      'Avena Sativa (Colloidal Oat) Kernel Extract',
      'Sweet Orange Peel Oil (Citrus Sinensis)'
    ],
    usage: 'Lather a generous amount over wet body using hands or a soft bath brush. Breathe in the exquisite aromatics of neroli blossom and warm orange. Rinse meticulously.',
    image: '/images/brand/body-wash.jpeg',
    secondaryImages: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.9,
    reviewCount: 96,
    size: '300ml | 10.1 FL. OZ',
    stock: 30,
    isFeatured: true,
    reviews: [
      {
        id: 'rev-02-01',
        author: 'Julianne V.',
        rating: 5,
        comment: 'This is not just soap, it is deep luxury self-care. The scent of neroli is pure luxury—exactly like my favorite French perfume. Worth every cent.',
        date: '2026-03-10',
        recommended: true
      },
      {
        id: 'rev-02-02',
        author: 'Claire Dufour',
        rating: 5,
        comment: 'Leaves my skin incredibly silky smooth. No lotion needed after the shower anymore! Highly premium bottle styling as well.',
        date: '2026-04-29',
        recommended: true
      }
    ]
  },
  {
    id: 'prod-03',
    slug: 'nectar-radiance-oil-to-milk-wash',
    name: 'Nectar Radiance Oil-To-Milk Wash',
    category: 'body',
    price: 48.00,
    discountPrice: 42.00,
    description: 'An innovative body-cleansing oil that transforms into a velvety hydrating milk upon contact with water, sealing moisture instantly.',
    longDescription: 'Crafted specially for exceptionally dry or sensitized skin, this water-free botanical lipid wash glides on like a silky nectar, picking up impurities, micro-dust, and sunscreen. With water, it instantly emulsifies into a gorgeous, cloud-like wash that rinses flawlessly clean, leaving a cashmere-soft protective protective glove on your skin.',
    benefits: [
      'Instantly relieves skin tightness and profound dryness',
      'Cleanses gently using high-purity seed oils without harsh soap',
      'Maintains zero micro-tears or dryness on the dermis',
      'Warm orange, apricot, and benzoin nectar botanics'
    ],
    ingredients: [
      'Vitis Vinifera (Grape Seed) Oil',
      'Prunus Armeniaca (Apricot Kernel) Oil',
      'Squalane (Biomimetic Olive Hydration)',
      'Citrus Aurantium Dulcis Seed Extract',
      'Polyglyceryl-4 Oleate (Natural emulsifier)',
      'Tocopherol (Pure Vitamin E)',
      'Simmondsia Chinensis (Jojoba Seed) Oil'
    ],
    usage: 'Apply directly onto dry or slightly damp body. Circular massage to cover all areas—witness the velvety oil melting. Drop warm water and massage as it turns into a luxury milk, then rinse.',
    image: '/images/brand/sceencare.jpeg',
    secondaryImages: [
      'https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.7,
    reviewCount: 88,
    size: '250ml | 8.4 FL. OZ',
    stock: 18,
    isFeatured: true,
    reviews: [
      {
        id: 'rev-03-01',
        author: 'Rebecca Thorne',
        rating: 5,
        comment: 'For dry winter skin, this is an absolute miracle. The way it turns to milk is so satisfying and it locks in hydration so beautifully.',
        date: '2026-05-15',
        recommended: true
      }
    ]
  },
  {
    id: 'prod-04',
    slug: 'citrus-therapy-exfoliating-scrub',
    name: 'Citrus Therapy Exfoliating Scrub',
    category: 'face',
    price: 38.00,
    description: 'A delicate face polishing paste featuring ultra-fine volcanic sand spheres and organic orange blossom water to resurface uneven skin gently.',
    longDescription: 'Banish dull, tired skin cells with this advanced dual-action facial polish. Micro-spheres of organic volcanic silica physically buff away texture, while concentrated enzymes of fermented pumpkin seed and orange peel dissolve stubborn intercellular glue. Scented naturally with uplifting orange, rosemary, and mint leaves.',
    benefits: [
      'Buffs away flakes and coarse texture in one single use',
      'Boosts natural light reflection on the cheekbones',
      'Unblocks congested pores and prevents blackheads',
      'Soothed with cold-pressed chamomile water'
    ],
    ingredients: [
      'Citrus Aurantium Amara (Orange Blossom) Leaf Water',
      'Volcanic Diatomaceous Silica Spheres',
      'Lactobacillus/Pumpkin Fruit Ferment Filtrate',
      'Mentha Piperita (Peppermint) Leaf Oil',
      'Rosmarinus Officinalis Leaf Extract',
      'Panthenol (Pro-Vitamin B5)',
      'Citrus Sinensis (Wild Orange) Peel Oil'
    ],
    usage: 'Dispense a nickel-sized portion. Apply gently onto clean, damp skin of the face, avoiding the immediate eye contours. Breathe in, massage in soft spirals using light pressure for 1-2 minutes. Wash off completely.',
    image: '/images/brand/moisturizing-cream.jpeg',
    secondaryImages: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.6,
    reviewCount: 110,
    size: '100ml | 3.4 FL. OZ',
    stock: 22,
    isFeatured: false,
    reviews: [
      {
        id: 'rev-04-01',
        author: 'Dmitri Vance',
        rating: 5,
        comment: 'Often face scrubs feel like sandpaper, but this is so fine and cushiony. Leaves my skin feeling like glass. Smells energetic!',
        date: '2026-05-01',
        recommended: true
      }
    ]
  },
  {
    id: 'prod-05',
    slug: 'revitalizing-aha-gel-cleanser',
    name: 'Revitalizing AHA Sweet Orange Gel Cleanser',
    category: 'face',
    price: 34.00,
    description: 'An active foaming cleanser utilizing gentle fruit acids (AHA) and organic wild honey to refine enlarged pores and balance oil production.',
    longDescription: 'Created for combination and oily skin profiles, this daily active cleanser purges deep-seated dirt and excess sebum. Natural Glycolic and Lactic acids gently work behind the scene to maintain flawless cellular turnover, while Orange blossom honey restores moisture, ensuring no dry rebound. The ultimate clarity weapon.',
    benefits: [
      'Clarifies congestion, blackheads, and dead skin buildup',
      'Refines and reduces the visual size of pores',
      'Controls excessive sebum production throughout the day',
      'Leaves skin beautifully matte yet comfortable'
    ],
    ingredients: [
      'Deionized Water Infusion are Mel (Orange Blossom Honey)',
      'Vaccinium Myrtillus Fruit (Bilberry derivative Lactic Acid)',
      'Saccharum Officinarum (Sugar Cane derivative Glycolic Acid)',
      'Citrus Aurantium Dulcis (Sweet Orange) Fruit Extract',
      'Salicylic Acid USP',
      'Centella Asiatica (Cica) Leaf Extract'
    ],
    usage: 'Dampen hands. Rub 1 pump to create a gentle, transparent lather. Apply onto face, drawing target circles on your T-zone. Leave on 30 seconds for AHAs to activate. Rinse with cool water.',
    image: '/images/brand/face-serm.jpeg',
    secondaryImages: [
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1608248597481-496100c8c836?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.7,
    reviewCount: 74,
    size: '150ml | 5.1 FL. OZ',
    stock: 50,
    isFeatured: false,
    reviews: [
      {
        id: 'rev-05-01',
        author: 'Lina G.',
        rating: 4,
        comment: 'Cleared my forehead bumps in literally three days! It has a pleasant tingle. Love the gorgeous frosted glass dispenser.',
        date: '2026-05-10',
        recommended: true
      }
    ]
  },
  {
    id: 'prod-06',
    slug: 'pure-saffron-and-bitter-orange-shower-milk',
    name: 'Pure Saffron & Bitter Orange Shower Milk',
    category: 'body',
    price: 54.00,
    description: 'A decadent skin-envelope milk rich in red saffron strands, wild orange bitter blossom oil, and creamy rice phytosterols.',
    longDescription: 'Immerse yourself in centuries of royal ritual. Red saffron, the gold of the soil, works as an intense brightening and antioxidant compound, while bitter orange botanical hydrosol tightens and tones skin texture. Blended in high-performing plant lipids to recreate a creamy shower milk that envelopes your full body in supreme comfort.',
    benefits: [
      'Brightens body skin-tone and restores velvet smoothness',
      'Offers deep hydration and anti-aging benefits to the body',
      'Indulges your mind with high-perfumery saffron aromatics',
      'Excellent for skin recovery from dry elements and chlorinated water'
    ],
    ingredients: [
      'Oryza Sativa (Organic Rice Bath Milk)',
      'Saffron Flower Stigma Extract',
      'Citrus Aurantium Amara (Bitter Orange) Peel Oil',
      'Butyrospermum Parkii (Cold-extracted Shea Butter)',
      'Sweet Almond Oil Extract',
      'Squalane',
      'Jasmine Absolute essential oil'
    ],
    usage: 'Pour into wet hands or a warm flannel sponge. Cover the entire body from neck to toes, enjoying the luxurious, milky cream formulation. Rinse with warm water.',
    image: '/images/brand/body-wash.jpeg',
    secondaryImages: [
      'https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.9,
    reviewCount: 65,
    size: '300ml | 10.1 FL. OZ',
    stock: 12,
    isFeatured: true,
    reviews: [
      {
        id: 'rev-06-01',
        author: 'Isabella Moretti',
        rating: 5,
        comment: 'This is pure, high-end opulence. The saffron fragrance combined with bitter citrus is intoxicating. My body feels like silk. Will repurchase forever.',
        date: '2026-04-05',
        recommended: true
      }
    ]
  },
  {
    id: 'prod-07',
    slug: 'blood-orange-daily-balance-wash',
    name: 'Blood Orange Daily Balance Wash',
    category: 'face',
    price: 29.00,
    description: 'A ph-neutral daily rescue wash with blood orange, liquid aloe vera leaf, and calming chamomile to restore troubled skin.',
    longDescription: 'Created for all skin types, including sensitive, this everyday staple wash uses deep-acting soothing botanicals. Organic chamomile and cooling aloe vera soothe redness and prevent dry micro-irritations, while antioxidant-filled blood orange neutralizes oxidative stressors in our daily environment.',
    benefits: [
      'Perfectly micro-balances skin natural moisture metrics',
      'Calms redness, flushing, and environmental flare-ups instantly',
      'Sulfates, artificial fragrances, and paraben-free',
      'Gentle and safe for acne-prone or highly sensitive skin'
    ],
    ingredients: [
      'Aloe Barbadensis Leaf Juice (90% Base)',
      'Citrus Sinensis (Blood Orange) Peel Extract',
      'Matricaria Recutita (Chamomile Distillate)',
      'Bisabolol',
      'Allantoin Water-soluble',
      'Zinc PCA',
      'Decyl Glucoside'
    ],
    usage: 'Rub a pea-sized drop in palms to bubble up. Apply gently for a quick and fresh foaming cleanse. Rinse with room temperature water.',
    image: '/images/brand/fash-wash.jpeg',
    secondaryImages: [
      'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.8,
    reviewCount: 142,
    size: '200ml | 6.8 FL. OZ',
    stock: 35,
    isFeatured: true,
    reviews: [
      {
        id: 'rev-07-01',
        author: 'Aria Sinclair',
        rating: 5,
        comment: 'Such a reliable cleanser! If my skin has random reactions from makeup trials, this calming Aloe wash resets it beautifully. And the citrus vibe is lovely.',
        date: '2026-05-18',
        recommended: true
      }
    ]
  },
  {
    id: 'prod-08',
    slug: 'ultimate-botanical-cleansing-rituals-set',
    name: 'Citrus Botanical Cleansing Rituals Set',
    category: 'set',
    price: 98.00,
    discountPrice: 85.00,
    description: 'The ultimate luxury gift set containing our Citrus Glow Face Wash, Neroli Blossom Body Wash, and custom linen exfoliating fiber cloth.',
    longDescription: 'Treat yourself or someone dear to the complete orange citrus restorative experience. The set houses our signature Citrus Glow Face Wash, the grand Neroli Blossom Body Wash, and an organic wild linen exfoliating cloth with an elegant solid pine gift box. Unveil clean, radiantly soft skin globally.',
    benefits: [
      'Full face and body care set in premium timber box',
      'Great savings compared to separate bottle purchases',
      'Includes an organic linen face-smoothing scrubbing buffer',
      'Perfect gorgeous present for holiday luxury seekers'
    ],
    ingredients: [
      'Includes Citrus Glow Face Wash (150ml)',
      'Includes Neroli Blossom Body Wash (300ml)',
      '100% Organic, Undyed Wild Linen Washcloth'
    ],
    usage: 'See individual bottles included inside for step-by-step skincare rituals. Ideal to begin face wash daily, then move onto neroli blossom shower milk to encapsulate the full aromatherapy experience.',
    image: '/images/brand/sceencare.jpeg',
    secondaryImages: [
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 5.0,
    reviewCount: 38,
    size: 'Complete Ritual Set',
    stock: 14,
    isFeatured: true,
    reviews: [
      {
        id: 'rev-08-01',
        author: 'Serena Croft',
        rating: 5,
        comment: 'Purchased as a birthday treat for myself. Opening the wooden box felt so premium! Both washes are absolute masterclasses. Excellent value.',
        date: '2026-05-12',
        recommended: true
      }
    ]
  }
];
