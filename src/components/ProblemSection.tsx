
import React from 'react';
import { AlertTriangle, TrendingDown, Users, Database, RefreshCw, FileX, Clock, ArrowRight } from 'lucide-react';

const ProblemSection = () => {
  const challenges = [
    { text: '🗃️ Thousands of SKUs across scattered systems', icon: Database },
    { text: '🔄 Constant product updates and new ranges', icon: RefreshCw },
    { text: '📄 Inconsistent, messy specs across channels', icon: FileX },
    { text: '⏱️ Content teams doing manual copy/paste workflows', icon: Clock },
    { text: '📋 PDPs identical to competitors', icon: AlertTriangle },
    { text: '📈 Costly SEO and conversion improvements', icon: TrendingDown },
    { text: '⏰ Content quickly becomes outdated', icon: RefreshCw }
  ];

  const costs = [
    '📉 Inconsistent PDPs → Poor differentiation & conversion',
    '💰 Rising marketing spend → Higher acquisition costs', 
    '💸 Price competition → Shrinking margins',
    '😴 Team burnout → Slower time-to-market'
  ];

  return (
    <section className="px-4 sm:px-6 py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="content-width">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-center mb-4 sm:mb-6 text-balance animate-fade-in">
          Why Retail Content is Such a Big Problem
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Challenges */}
          <div className="animate-slide-up">
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 text-center max-w-2xl mx-auto">
              Retailers face relentless content demands:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6">
              {challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-border hover:shadow-medium transition-all duration-300 group">
                  <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                    <challenge.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium leading-relaxed text-sm">{challenge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* The Compounding Cost */}
          <div className="animate-slide-up">
            <h3 className="text-lg sm:text-xl font-display font-semibold mb-4 sm:mb-6 text-center text-foreground">
              💸 The Cost of Chaos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {costs.map((cost, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-border hover:shadow-medium transition-all duration-300 group">
                  <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                    <ArrowRight className="w-4 h-4 text-destructive" />
                  </div>
                  <span className="text-foreground font-medium leading-relaxed text-sm">{cost}</span>
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
