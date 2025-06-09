
import React from 'react';
import { AlertTriangle, TrendingDown, Users, Database, RefreshCw, FileX, Clock, Target } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    'Bland, generic PDPs copied from suppliers (and identical to your competitors)',
    'SEO & SEM spend wasted propping up poor content',
    'Slow, manual SKU launches',
    'No time for FAQs, training, campaign content, localisation',
    'Conversion and margin under pressure',
    'Teams stretched thin — constant catch-up'
  ];

  return (
    <section className="px-4 sm:px-6 py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="content-width">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-center mb-4 sm:mb-6 text-balance animate-fade-in">
          Most retail content underperforms. Conversion rates can't increase without a content revolution.
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          <div className="text-center animate-slide-up">
            <div className="grid grid-cols-1 gap-3">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-card border border-border/50 hover:border-destructive/20 hover:bg-destructive/5 transition-all duration-300 group text-left">
                  <div className="w-2 h-2 bg-destructive rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-foreground font-medium leading-relaxed text-sm sm:text-base">{problem}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
