import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  Tags, 
  Settings, 
  X,
  Store,
  BarChart3
} from 'lucide-react';

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/admin/products', icon: Package, label: 'Produk' },
    { path: '/admin/categories', icon: Tags, label: 'Kategori' },
    { path: '/admin/analytics', icon: BarChart3, label: 'Analytics' },
    { path: '/admin/settings', icon: Settings, label: 'Pengaturan' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-40 w-64 h-full bg-white border-r-2 border-xptn-yellow transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:inset-0
      `}>
        <div className="flex items-center justify-between p-4 border-b border-xptn-border">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-xptn-yellow rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <Store className="h-6 w-6 text-xptn-dark" />
            </div>
            <div>
              <span className="text-xl font-bold text-xptn-dark">X-Katalog</span>
              <div className="text-xs text-gray-500">Admin Panel</div>
            </div>
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-md text-xptn-dark hover:text-xptn-yellow hover:bg-yellow-50 transition-colors duration-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => onClose()}
                className={`
                  flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group
                  ${isActive(item.path)
                    ? 'bg-xptn-yellow text-xptn-dark shadow-md border-2 border-xptn-yellow-hover'
                    : 'text-xptn-dark hover:bg-yellow-50 hover:text-xptn-yellow border-2 border-transparent hover:border-xptn-yellow'
                  }
                `}
              >
                <Icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <Link
            to="/"
            className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-600 hover:text-xptn-yellow hover:bg-yellow-50 rounded-lg transition-colors duration-200"
          >
            <Store className="h-4 w-4" />
            <span>Lihat Katalog</span>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;