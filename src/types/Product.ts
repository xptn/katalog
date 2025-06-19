export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  images: string[];
  features: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
  discount?: number;
  tags: string[];
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}