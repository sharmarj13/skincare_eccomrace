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
    name: 'Eleanor Carlyle',
    role: 'Aesthetician & Wellness Writer',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    quote: 'As an aesthetician, I look closely at lipid barrier integrity. The Neroli Blossom wash cleanses beautifully without ever causing dry irritation. The scent of blood orange orange flowers is mesmerizing.',
    skinType: 'Dry & Sensitive skin'
  },
  {
    id: 'test-02',
    name: 'Siddharth Mehta',
    role: 'Tech Founder & Skincare Minimalist',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    quote: 'The Sweet Orange AHA Gel Cleanser handles my combination T-zone shine oil instantly but leaves my skin soft. The amber pump glass looks incredible sitting in my minimalist bathroom.',
    skinType: 'Combination / Oily skin'
  },
  {
    id: 'test-03',
    name: 'Margaux Dufour',
    role: 'Luxury Travel Consultant',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    quote: 'Whenever I return from 12-hour long-haul flights, the Nectar Radiance Oil-To-Milk Wash is my instant hydration survival kit. It resets dry skin into sheer velvet in seconds.',
    skinType: 'Profoundly Dehydrated skin'
  },
  {
    id: 'test-04',
    name: 'Chloe Sinclair',
    role: 'Yoga Instructor',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    quote: 'My hot yoga sessions used to trigger red, raw skin irritation. The Blood Orange Daily Balance wash completely pacified the flushing. It is simple, gentle, and utterly clean.',
    skinType: 'Redness & Reactive skin'
  }
];
