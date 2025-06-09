
import React from 'react';

const OutputsSection = () => {
  const outputs = [
    { icon: '🛒', text: 'Product Detail Pages (PDPs)' },
    { icon: '⭐', text: 'SEO tags and structured data' },
    { icon: '🖼️', text: 'Social media & editorial content' },
    { icon: '✍️', text: 'Sales copy & feature-benefit bullets' },
    { icon: '📧', text: 'Email & campaign content' },
    { icon: '🎓', text: 'Training docs & support scripts' },
    { icon: '📺', text: 'Retail media assets' },
    { icon: '🌍', text: 'Localised & multi-language outputs' },
    { icon: '⚙️', text: 'Shopify, Amazon, Magento, BigCommerce, Retail Media… ready-to-publish' }
  ];

  return (
    <section className="px-4 sm:px-6 py-8 lg:py-12 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight mb-3 text-balance">
            What you get — fully cooked, ready to serve:
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 animate-slide-up">
          {outputs.map((output, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border hover:shadow-soft transition-all duration-300 group hover:border-primary/20" 
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-lg flex-shrink-0">{output.icon}</div>
              <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">
                {output.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutputsSection;
