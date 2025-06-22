import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Zap, 
  BarChart3, 
  History, 
  FileText, 
  Settings,
  Menu
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      name: 'Generate',
      path: '/generate',
      icon: Zap,
    },
    {
      name: 'Results',
      path: '/results',
      icon: BarChart3,
    },
    {
      name: 'History',
      path: '/history',
      icon: History,
    },
    {
      name: 'Agent Logs',
      path: '/agent-logs',
      icon: FileText,
    },
    {
      name: 'Settings',
      path: '/settings',
      icon: Settings,
    },
  ];

  const isActive = (path) => {
    return location.pathname === path || (path === '/generate' && location.pathname === '/');
  };

  return (
    <div className="w-64 bg-white shadow-lg border-r border-gray-200 min-h-screen">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Menu className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
        <div className="text-xs text-gray-500 text-center">
          v1.0.0
        </div>
      </div>
    </div>
  );
};

export default Sidebar;