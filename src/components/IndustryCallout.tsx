
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const IndustryCallout = () => {
  const industries = [
    { emoji: '🛍️', name: 'Retail & Ecommerce', path: '/retail' },
    { emoji: '✈️', name: 'Travel & Tourism', path: '/travel-tourism' },
    { emoji: '🎬', name: 'Media & Entertainment', path: '/media-entertainment' },
    { emoji: '💰', name: 'Finance & Financial Services', path: '/finance' },
    { emoji: '🏭', name: 'Industrial & Manufacturing', path: '/industrial-manufacturing' },
    { emoji: '🏥', name: 'Healthcare & Medical', path: '/healthcare-medical' },
    { emoji: '🏠', name: 'Real Estate & Property', path: '/real-estate' },
    { emoji: '🚗', name: 'Automotive', path: '/automotive' },
    { emoji: '📊', name: 'Investor Communications', path: '/investor-communications' }
  ];

  return (
    <section className="content-padding section-spacing-lg bg-gradient-to-b from-background to-muted/20">
      <div className="container-width">
        <div className="text-center space-elements-lg animate-fade-in">
          <h2 className="text-section-title text-balance">
            Works beautifully for your industry, too.
          </h2>
          <div className="content-width space-elements-sm">
            <p className="text-body-large text-muted-foreground">
              SalesChef isn't just for retail.
            </p>
            <p className="text-body-large text-muted-foreground">
              Our agentic content engine powers faster, smarter content for:
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 content-width animate-slide-up">
          {industries.map((industry, index) => (
            <Link
              key={industry.path}
              to={industry.path}
              className={cn(
                "flex items-center justify-between gap-3 p-4 sm:p-5 rounded-2xl bg-card border border-border",
                "hover:shadow-soft hover:border-primary/20 hover:bg-card/80",
                "transition-all duration-300 group cursor-pointer",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              )}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="text-2xl sm:text-3xl flex-shrink-0 group-hover:scale-110 transition-transform">
                  {industry.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm sm:text-base font-medium text-foreground group-hover:text-primary transition-colors leading-tight">
                    {industry.name}
                  </p>
                </div>
              </div>
              <ChevronRight 
                className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1 flex-shrink-0" 
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryCallout;
