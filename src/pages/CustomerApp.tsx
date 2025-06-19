import React, { useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomerHeader from '../components/customer/CustomerHeader';
import Hero from '../components/Hero';
import CategoryFilter from '../components/CategoryFilter';
import ProductGrid from '../components/ProductGrid';
import ProductModal from '../components/ProductModal';
import Footer from '../components/Footer';
import ProductDetail from '../components/customer/ProductDetail';
import { useProductContext } from '../context/ProductContext';
import { Product } from '../types/Product';

function CustomerApp() {
  const { products, loading } = useProductContext();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [cartCount] = useState(0);

  // Filter products based on category and search query
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  const handleProductView = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <CustomerHeader 
        onSearch={setSearchQuery}
        cartCount={cartCount}
      />
      
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <CategoryFilter 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            <ProductGrid 
              products={filteredProducts}
              onProductView={handleProductView}
              loading={loading}
            />
          </>
        } />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      
      <Footer />

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={() => {
          setIsProductModalOpen(false);
          setSelectedProduct(null);
        }}
      />
    </div>
  );
}

export default CustomerApp;