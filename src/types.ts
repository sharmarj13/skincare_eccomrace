export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  recommended: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'face' | 'body' | 'set';
  price: number;
  discountPrice?: number;
  description: string;
  longDescription: string;
  benefits: string[];
  ingredients: string[];
  usage: string;
  image: string;
  secondaryImages: string[];
  rating: number;
  reviewCount: number;
  size: string; // e.g., "200ml | 6.8 fl. oz"
  stock: number;
  isFeatured: boolean;
  reviews: Review[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}
