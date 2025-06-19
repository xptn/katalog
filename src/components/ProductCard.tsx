import React from 'react';
import { Product } from '../types/Product';
import { Star, Heart, ShoppingCart, Eye, Edit, Trash2 } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onView: (product: Product) => void;
  onEdit?: (product: Product) => void;
  onDelete?: (id: string) => void;
  isAdminMode?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onView, 
  onEdit, 
  onDelete, 
  isAdminMode = false 
}) => {
  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount / 100) 
    : product.price;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            -{product.discount}%
          </div>
        )}
        
        {/* Stock Status */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
          product.inStock 
            ? 'bg-emerald-100 text-emerald-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </div>

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
          <button
            onClick={() => onView(product)}
            className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
            title="View Details"
          >
            <Eye className="h-5 w-5" />
          </button>
          
          {!isAdminMode && (
            <>
              <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200">
                <Heart className="h-5 w-5" />
              </button>
              <button className="bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition-colors duration-200">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </>
          )}
          
          {isAdminMode && (
            <>
              <button
                onClick={() => onEdit?.(product)}
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-200"
                title="Edit Product"
              >
                <Edit className="h-5 w-5" />
              </button>
              <button
                onClick={() => onDelete?.(product.id)}
                className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors duration-200"
                title="Delete Product"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-indigo-600 font-medium bg-indigo-50 px-2 py-1 rounded">
            {product.category}
          </span>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-amber-400 fill-current" />
            <span className="text-sm text-gray-600">
              {product.rating} ({product.reviews})
            </span>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
            >
              {feature}
            </span>
          ))}
          {product.features.length > 3 && (
            <span className="text-xs text-gray-500">
              +{product.features.length - 3} more
            </span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              ${discountedPrice.toFixed(2)}
            </span>
            {product.discount && (
              <span className="text-lg text-gray-500 line-through">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          
          <button
            onClick={() => onView(product)}
            className="text-indigo-600 hover:text-indigo-700 font-medium text-sm hover:underline transition-colors duration-200"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;