
import React, { useState, useEffect, memo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navItems = [
  { path: '/how-it-works', label: 'How It Works' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/industries', label: 'Industries' }
];

const Header = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 100;
    setIsVisible(scrolled);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isVisible 
        ? 'bg-background/95 backdrop-blur-sm border-b border-border translate-y-0' 
        : '-translate-y-full'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/0b8c5ffe-edc7-4ea5-af28-bc947207ee19.png" 
              alt="SalesChef" 
              className="h-6 sm:h-8 w-auto"
              loading="lazy"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isCurrentPage = location.pathname === item.path;
              
              if (isCurrentPage) {
                return null;
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col gap-2 pt-4">
              {navItems.map((item) => {
                const isCurrentPage = location.pathname === item.path;
                
                if (isCurrentPage) {
                  return null;
                }
                
                return (
                  <Link key={item.path} to={item.path} onClick={closeMobileMenu}>
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
