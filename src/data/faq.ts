export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQItem[] = [
  {
    id: 'faq-01',
    question: 'How do I use the Vit C Face Wash and Face Serum together?',
    answer: 'For the best glowing skin results, start your morning routine by cleansing with our Vit C Face Wash. Pat dry, then apply 3-4 drops of the Vit C Face Serum while your skin is still slightly damp. This combination maximizes the brightening and anti-aging effects of Vitamin C.',
    category: 'Daily Routine'
  },
  {
    id: 'faq-02',
    question: 'Does the Sunscreen Spf50 PA++++ leave a white cast on dark skin?',
    answer: 'Not at all! Our Sunscreen Spf50 PA++++ is specially formulated to blend seamlessly into all Indian skin tones. It provides broad-spectrum protection against tanning and aging without feeling sticky, greasy, or leaving any visible white cast.',
    category: 'Product Details'
  },
  {
    id: 'faq-03',
    question: 'Is the Moisturizer Cream suitable for oily and acne-prone skin?',
    answer: 'Yes, our Moisturizer Cream is incredibly hydrating yet lightweight and non-comedogenic (meaning it will not clog your pores). It locks in moisture for 24 hours while balancing your skin\'s natural oils, making it perfect for both dry and oily skin types.',
    category: 'Product Details'
  },
  {
    id: 'faq-04',
    question: 'What makes the Lemon Body Wash different from regular soaps?',
    answer: 'Commercial soaps often use harsh chemicals that strip your skin\'s moisture barrier. Our Lemon Body Wash is infused with natural citrus extracts and gentle, hydrating cleansers. It wakes you up with a zesty freshness while keeping your skin incredibly soft and smooth all day.',
    category: 'Product Details'
  },
  {
    id: 'faq-05',
    question: 'Can I apply the Sunscreen immediately after the Moisturizer?',
    answer: 'Yes! Let your Moisturizer Cream absorb completely into your skin for about 60 seconds. Once your skin feels smooth and dry to the touch, apply a generous layer of the Sunscreen Spf50 PA++++ to lock everything in and protect your skin before stepping out.',
    category: 'Usage & Layering'
  },
  {
    id: 'faq-06',
    question: 'Do you offer a money-back guarantee if the products don\'t suit me?',
    answer: 'Absolutely. We believe in our skincare lineup. If any product, from the Vit C Face Serum to the Lemon Body Wash, causes irritation or doesn\'t give you the results you want, you can return it within 30 days for a full, hassle-free refund.',
    category: 'Shipping & Returns'
  }
];
