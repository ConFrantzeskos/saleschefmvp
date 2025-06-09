
import React from 'react';
import { Link } from 'react-router-dom';
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
    <section className="px-4 sm:px-6 py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container-width">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-tight mb-4 sm:mb-6 text-balance">
            Works beautifully for your industry, too.
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-muted-foreground mb-2">
              SalesChef isn't just for retail.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground">
              Our agentic content engine powers faster, smarter content for:
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto animate-slide-up">
          {industries.map((industry, index) => (
            <Link
              key={industry.path}
              to={industry.path}
              className={cn(
                "flex items-center gap-3 p-4 sm:p-5 rounded-2xl bg-card border border-border",
                "hover:shadow-soft hover:border-primary/20 hover:bg-card/80",
                "transition-all duration-300 group",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              )}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-2xl sm:text-3xl flex-shrink-0 group-hover:scale-110 transition-transform">
                {industry.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm sm:text-base font-medium text-foreground group-hover:text-primary transition-colors leading-tight">
                  {industry.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryCallout;
