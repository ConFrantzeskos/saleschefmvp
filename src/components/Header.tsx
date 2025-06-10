import React, { useState, useEffect, memo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navItems = [
  { path: '/how-it-works', label: 'How It Works' },
  { path: '/faq', label: 'FAQ' },
  { path: '/pricing', label: 'Pricing' }
];

const industries = [
  { path: '/retail', label: '🛍️ Retail', name: 'Retail' },
  { path: '/travel-tourism', label: '✈️ Travel & Tourism', name: 'Travel & Tourism' },
  { path: '/media-entertainment', label: '🎬 Media & Entertainment', name: 'Media & Entertainment' },
  { path: '/finance', label: '💰 Finance', name: 'Finance' },
  { path: '/industrial-manufacturing', label: '🏭 Industrial & Manufacturing', name: 'Industrial & Manufacturing' },
  { path: '/healthcare-medical', label: '🏥 Healthcare & Medical', name: 'Healthcare & Medical' },
  { path: '/real-estate', label: '🏠 Real Estate', name: 'Real Estate' },
  { path: '/automotive', label: '🚗 Automotive', name: 'Automotive' },
  { path: '/investor-communications', label: '📊 Investor Communications', name: 'Investor Communications' }
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

  const isIndustryPage = industries.some(industry => location.pathname === industry.path);

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
            
            {/* Industries Dropdown - Always visible */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1">
                  Industries
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {industries.map((industry) => (
                  <DropdownMenuItem key={industry.path} asChild>
                    <Link to={industry.path} className="flex items-center gap-2">
                      {industry.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
              
              {/* Mobile Industries - Always visible */}
              <div className="pt-2 border-t border-border/50 mt-2">
                <p className="text-sm font-medium text-muted-foreground px-3 pb-2">Industries</p>
                {industries.map((industry) => (
                  <Link key={industry.path} to={industry.path} onClick={closeMobileMenu}>
                    <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                      {industry.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
