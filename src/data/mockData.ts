import { Product, Category } from '../types/Product';

export const categories: Category[] = [
  { id: '1', name: 'Electronics', description: 'Latest gadgets and tech', icon: 'Smartphone' },
  { id: '2', name: 'Fashion', description: 'Trendy clothing and accessories', icon: 'Shirt' },
  { id: '3', name: 'Home & Garden', description: 'Beautiful home essentials', icon: 'Home' },
  { id: '4', name: 'Sports', description: 'Athletic gear and equipment', icon: 'Dumbbell' },
  { id: '5', name: 'Books', description: 'Knowledge and entertainment', icon: 'Book' },
  { id: '6', name: 'Beauty', description: 'Skincare and cosmetics', icon: 'Sparkles' }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life and crystal-clear sound quality.',
    price: 299.99,
    category: 'Electronics',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg'
    ],
    features: ['Noise Cancelling', '30-hour Battery', 'Wireless', 'Premium Sound'],
    inStock: true,
    rating: 4.8,
    reviews: 2543,
    discount: 15,
    tags: ['electronics', 'audio', 'wireless'],
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracking with heart rate monitoring, GPS, and smartphone integration.',
    price: 399.99,
    category: 'Electronics',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
      'https://images.pexels.com/photos/1034063/pexels-photo-1034063.jpeg'
    ],
    features: ['Heart Rate Monitor', 'GPS Tracking', 'Water Resistant', 'Long Battery'],
    inStock: true,
    rating: 4.6,
    reviews: 1876,
    tags: ['fitness', 'smartwatch', 'health'],
    createdAt: '2024-01-20'
  },
  {
    id: '3',
    name: 'Designer Leather Jacket',
    description: 'Handcrafted genuine leather jacket with contemporary design and premium finishing.',
    price: 899.99,
    category: 'Fashion',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      'https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg'
    ],
    features: ['Genuine Leather', 'Handcrafted', 'Contemporary Design', 'Premium Quality'],
    inStock: true,
    rating: 4.9,
    reviews: 432,
    discount: 20,
    tags: ['fashion', 'leather', 'jacket'],
    createdAt: '2024-01-10'
  },
  {
    id: '4',
    name: 'Modern Coffee Table',
    description: 'Sleek glass-top coffee table with oak wood base, perfect for contemporary living spaces.',
    price: 599.99,
    category: 'Home & Garden',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
    images: [
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'
    ],
    features: ['Glass Top', 'Oak Wood Base', 'Modern Design', 'Durable Construction'],
    inStock: true,
    rating: 4.7,
    reviews: 823,
    tags: ['furniture', 'coffee table', 'modern'],
    createdAt: '2024-01-12'
  },
  {
    id: '5',
    name: 'Professional Tennis Racket',
    description: 'Tournament-grade tennis racket with carbon fiber construction and optimal weight balance.',
    price: 249.99,
    category: 'Sports',
    image: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg',
    images: [
      'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg',
      'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg'
    ],
    features: ['Carbon Fiber', 'Professional Grade', 'Optimal Balance', 'Tournament Ready'],
    inStock: true,
    rating: 4.5,
    reviews: 672,
    tags: ['tennis', 'sports', 'racket'],
    createdAt: '2024-01-18'
  },
  {
    id: '6',
    name: 'Bestselling Novel Collection',
    description: 'Complete collection of award-winning novels from contemporary authors, hardcover edition.',
    price: 159.99,
    category: 'Books',
    image: 'https://images.pexels.com/photos/1301585/pexels-photo-1301585.jpeg',
    images: [
      'https://images.pexels.com/photos/1301585/pexels-photo-1301585.jpeg',
      'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg'
    ],
    features: ['Hardcover Edition', 'Award-winning Authors', 'Complete Collection', 'Premium Binding'],
    inStock: true,
    rating: 4.8,
    reviews: 1234,
    discount: 25,
    tags: ['books', 'novels', 'collection'],
    createdAt: '2024-01-08'
  }
];