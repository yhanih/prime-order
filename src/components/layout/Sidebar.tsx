import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  TrendingUp,
  Package,
  ClipboardList,
  Megaphone,
  CreditCard,
  MessageSquare,
  Settings
} from 'lucide-react';

const navItems = [
  { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
  { title: 'Sales Overview', url: '/sales', icon: TrendingUp },
  { title: 'Inventory Management', url: '/inventory', icon: Package },
  { title: 'Order Management', url: '/', icon: ClipboardList },
  { title: 'Marketing', url: '/marketing', icon: Megaphone },
  { title: 'Payment', url: '/payment', icon: CreditCard },
  { title: 'Message', url: '/message', icon: MessageSquare },
  { title: 'Settings', url: '/settings', icon: Settings },
];

export function Sidebar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="h-full">
      {/* Logo */}
      <div className="p-6 border-b border-[hsl(var(--line))]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[hsl(var(--primary))] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">G</span>
          </div>
          <span className="font-semibold text-lg text-[hsl(var(--text))]">online.</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.url);
            
            return (
              <li key={item.title}>
                <NavLink
                  to={item.url}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium
                    transition-colors relative
                    ${active 
                      ? 'bg-[hsl(var(--primary))] text-white font-semibold' 
                      : 'text-[hsl(var(--muted))] hover:bg-gray-50 hover:text-[hsl(var(--text))]'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}