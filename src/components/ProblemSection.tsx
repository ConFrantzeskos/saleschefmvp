
import React from 'react';
import { AlertTriangle, TrendingDown, Users, Database, RefreshCw, FileX, Clock, ArrowDown } from 'lucide-react';

const ProblemSection = () => {
  const challenges = [
    { text: 'Thousands of SKUs across PIMs, ERPs, CMSs, spreadsheets', icon: Database, color: 'text-blue-500' },
    { text: 'Constant flow of new products, updates, and seasonal ranges', icon: RefreshCw, color: 'text-green-500' },
    { text: 'Inconsistent, messy product specs - hard to standardise', icon: FileX, color: 'text-orange-500' },
    { text: 'Content teams stretched thin - manual edits, copy/paste workflows', icon: Clock, color: 'text-purple-500' }
  ];

  const results = [
    { text: 'Your PDPs have the same content and specs as your competitors', icon: AlertTriangle, color: 'text-destructive' },
    { text: 'SEO and SEM performance is costly to improve', icon: TrendingDown, color: 'text-orange-500' },
    { text: 'Conversion gains take significant time and spend', icon: Users, color: 'text-red-500' },
    { text: 'Even optimised content quickly falls out of date', icon: RefreshCw, color: 'text-yellow-600' }
  ];

  const compoundingCosts = [
    {
      title: 'Inconsistent PDPs',
      description: 'Hard to differentiate, variable SEO performance, poor conversion',
      color: 'destructive'
    },
    {
      title: 'Rising Marketing Spend', 
      description: 'Increasing costs to drive traffic and lift conversion',
      color: 'orange'
    },
    {
      title: 'Bland, Identical PDPs',
      description: 'Only way to compete is performance media and price competition',
      color: 'yellow'
    },
    {
      title: 'Poor ROI',
      description: 'Content teams overwhelmed, marketing budgets strained',
      color: 'destructive'
    }
  ];

  return (
    <section className="px-4 sm:px-6 py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="content-width">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-center mb-4 sm:mb-6 text-balance animate-fade-in">
          Why Retail Content is Such a Big Problem
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {/* Introduction */}
          <div className="text-center animate-slide-up">
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-3 sm:mb-4 max-w-2xl mx-auto">
              Content is at the heart of any retail experience. Retailers face relentless content demands:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-card border border-border/50 hover:border-border hover:shadow-medium transition-all duration-300 group text-left">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-muted rounded-md sm:rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                    <challenge.icon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${challenge.color}`} />
                  </div>
                  <span className="text-foreground font-medium leading-relaxed text-xs sm:text-sm">{challenge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow connector */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-destructive/10 rounded-full p-1.5 sm:p-2">
              <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4 text-destructive" />
            </div>
          </div>

          {/* Results Section */}
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-sm sm:text-base lg:text-lg font-display font-semibold mb-3 sm:mb-4 text-destructive">
              The result?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3 sm:mb-4">
              {results.map((result, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-destructive/5 border border-destructive/20 hover:border-destructive/40 hover:bg-destructive/10 transition-all duration-300 group text-left">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-destructive/10 rounded-md sm:rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                    <result.icon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${result.color}`} />
                  </div>
                  <span className="text-foreground font-medium leading-relaxed text-xs sm:text-sm">{result.text}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground font-medium">
              Scaling high-quality product content shouldn't be this hard.
            </p>
          </div>

          {/* Divider */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-sm text-muted-foreground">⸻</div>
          </div>

          {/* Compounding Cost Section */}
          <div className="bg-gradient-to-br from-muted/40 to-muted/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-border/50 shadow-soft animate-slide-up max-w-3xl mx-auto" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-sm sm:text-base lg:text-lg font-display font-semibold mb-2 sm:mb-3 text-center text-foreground">
              The Compounding Cost of Inconsistent Content:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {compoundingCosts.map((cost, index) => {
                const colorClasses = {
                  destructive: 'bg-destructive/5 border-destructive/20 text-destructive',
                  orange: 'bg-orange-50 border-orange-200 text-orange-600',
                  yellow: 'bg-yellow-50 border-yellow-200 text-yellow-600'
                };
                
                return (
                  <div key={index} className={`${colorClasses[cost.color]} border rounded-lg sm:rounded-xl p-2 sm:p-3 min-h-[80px] flex flex-col justify-between`}>
                    <h4 className="font-display font-semibold mb-1 text-xs">{cost.title}</h4>
                    <p className="text-xs opacity-80">→ {cost.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
