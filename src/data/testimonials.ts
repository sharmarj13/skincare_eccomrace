export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
  skinType: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'test-01',
    name: 'Priya Sharma',
    role: 'Makeup Artist & Beauty Blogger',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    quote: 'The Vit C Face Serum has been an absolute game-changer for my clients! It fades dark spots so beautifully and leaves a glowing, glass-skin finish before I even apply makeup. Highly recommend it!',
    skinType: 'Pigmentation / Dull Skin'
  },
  {
    id: 'test-02',
    name: 'Rohan Gupta',
    role: 'Fitness Trainer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    quote: 'After a heavy workout, nothing beats the Lemon Body Wash. It smells so fresh, wakes me up instantly, and doesn\'t leave my skin dry like commercial soaps do. I buy this on repeat.',
    skinType: 'Normal / Sweat-prone skin'
  },
  {
    id: 'test-03',
    name: 'Aisha Desai',
    role: 'Corporate Executive',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    quote: 'Working 10-hour days in an AC office ruined my skin until I found the Moisturizer Cream. It deeply hydrates for a full 24 hours without feeling heavy. My skin finally feels plump and healthy again.',
    skinType: 'Dry & Dehydrated skin'
  },
  {
    id: 'test-04',
    name: 'Neha Kapoor',
    role: 'Travel Photographer',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    quote: 'I spend hours in the sun every day. This Sunscreen Spf50 PA++++ is a lifesaver! Zero white cast, blends like a dream, and it actually protects my face from tanning. Better than expensive international brands.',
    skinType: 'Sun-Exposed / Sensitive skin'
  }
];
