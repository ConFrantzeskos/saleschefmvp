
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/industries', label: 'Industries' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isVisible 
        ? 'bg-background/95 backdrop-blur-sm border-b border-border translate-y-0' 
        : '-translate-y-full'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/0b8c5ffe-edc7-4ea5-af28-bc947207ee19.png" 
              alt="SalesChef" 
              className="h-8 w-auto"
            />
          </Link>
          
          {/* Navigation */}
          <nav className="flex items-center gap-2">
            {navItems.map((item) => {
              const isCurrentPage = location.pathname === item.path;
              
              if (isCurrentPage) {
                return null; // Don't show button for current page
              }
              
              return (
                <Link key={item.path} to={item.path}>
                  <Button variant="ghost" size="sm">
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
