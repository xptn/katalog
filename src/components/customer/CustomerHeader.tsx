import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

interface CustomerHeaderProps {
  onSearch: (query: string) => void;
  cartCount: number;
}

const CustomerHeader: React.FC<CustomerHeaderProps> = ({ onSearch, cartCount }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              ProductHub
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">
              Home
            </Link>
            <a href="#products" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">
              Products
            </a>
            <a href="#categories" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">
              Categories
            </a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">
              About
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </form>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200">
              <ShoppingBag className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-indigo-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <form onSubmit={handleSearch} className="mb-3">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </form>
              
              <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">
                Home
              </Link>
              <a href="#products" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">
                Products
              </a>
              <a href="#categories" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">
                Categories
              </a>
              <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">
                About
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default CustomerHeader;