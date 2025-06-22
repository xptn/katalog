import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, Package } from 'lucide-react';

interface CustomerHeaderProps {
  onSearch: (query: string) => void;
}

const CustomerHeader: React.FC<CustomerHeaderProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-xptn-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-xptn-yellow rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Package className="h-6 w-6 text-xptn-dark" />
              </div>
              <div>
                <span className="text-xl font-bold text-xptn-dark">X-Katalog</span>
                <div className="text-xs text-gray-500">Toko XPTN</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-xptn-dark hover:text-xptn-yellow transition-colors duration-200 font-medium">
              Beranda
            </Link>
            <a href="#products" className="text-xptn-dark hover:text-xptn-yellow transition-colors duration-200 font-medium">
              Produk
            </a>
            <a href="#categories" className="text-xptn-dark hover:text-xptn-yellow transition-colors duration-200 font-medium">
              Kategori
            </a>
            <a href="#about" className="text-xptn-dark hover:text-xptn-yellow transition-colors duration-200 font-medium">
              Tentang
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
                  placeholder="Cari produk, kategori, atau kode..."
                  className="w-full pl-10 pr-4 py-2 border-2 border-xptn-border rounded-lg focus:ring-2 focus:ring-xptn-yellow focus:border-xptn-yellow transition-all duration-200"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </form>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-xptn-dark hover:text-xptn-yellow transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-xptn-border animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <form onSubmit={handleSearch} className="mb-3">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari produk..."
                    className="w-full pl-10 pr-4 py-2 border-2 border-xptn-border rounded-lg focus:ring-2 focus:ring-xptn-yellow focus:border-xptn-yellow"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </form>
              
              <Link to="/" className="block px-3 py-2 text-base font-medium text-xptn-dark hover:text-xptn-yellow hover:bg-yellow-50 rounded-md">
                Beranda
              </Link>
              <a href="#products" className="block px-3 py-2 text-base font-medium text-xptn-dark hover:text-xptn-yellow hover:bg-yellow-50 rounded-md">
                Produk
              </a>
              <a href="#categories" className="block px-3 py-2 text-base font-medium text-xptn-dark hover:text-xptn-yellow hover:bg-yellow-50 rounded-md">
                Kategori
              </a>
              <a href="#about" className="block px-3 py-2 text-base font-medium text-xptn-dark hover:text-xptn-yellow hover:bg-yellow-50 rounded-md">
                Tentang
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default CustomerHeader;