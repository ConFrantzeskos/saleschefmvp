
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
    <section className="section-brand section-spacing-lg content-padding">
      <div className="container-width space-elements-xl">
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 content-width animate-slide-up">
          {industries.map((industry, index) => (
            <Link
              key={industry.path}
              to={industry.path}
              className={cn(
                "card-interactive group",
                "focus-ring"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="icon-container bg-gradient-chef text-white text-xl group-hover:scale-110 transition-transform">
                    {industry.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-body font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {industry.name}
                    </p>
                  </div>
                </div>
                <ChevronRight 
                  className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-1 flex-shrink-0" 
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryCallout;
