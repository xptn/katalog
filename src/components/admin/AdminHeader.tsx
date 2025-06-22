import React from 'react';
import { Menu, LogOut, Bell, User, Package } from 'lucide-react';

interface AdminHeaderProps {
  onMenuClick: () => void;
  onLogout: () => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ onMenuClick, onLogout }) => {
  return (
    <header className="bg-white shadow-sm border-b-2 border-xptn-yellow sticky top-0 z-40">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 rounded-md text-xptn-dark hover:text-xptn-yellow hover:bg-yellow-50 transition-colors duration-200"
            >
              <Menu className="h-6 w-6" />
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-xptn-yellow rounded-lg flex items-center justify-center">
                <Package className="h-5 w-5 text-xptn-dark" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-xptn-dark">X-Katalog Admin</h1>
                <div className="text-xs text-gray-500">Dashboard Manajemen</div>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-xptn-dark hover:text-xptn-yellow hover:bg-yellow-50 rounded-md transition-colors duration-200">
              <Bell className="h-5 w-5" />
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-xptn-yellow rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-xptn-dark" />
              </div>
              <span className="text-sm font-medium text-xptn-dark">Admin XPTN</span>
            </div>

            <button
              onClick={onLogout}
              className="p-2 text-xptn-dark hover:text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200"
              title="Logout"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;