
import React from 'react';
import { AlertTriangle, TrendingDown, Users, Database, RefreshCw, FileX, Clock, ArrowDown } from 'lucide-react';

const ProblemSection = () => {
  const challenges = [
    { text: 'Thousands of SKUs across scattered systems', icon: Database, color: 'text-blue-500' },
    { text: 'Constant product updates and new ranges', icon: RefreshCw, color: 'text-green-500' },
    { text: 'Inconsistent, messy specs across channels', icon: FileX, color: 'text-orange-500' },
    { text: 'Content teams doing manual copy/paste workflows', icon: Clock, color: 'text-purple-500' }
  ];

  const results = [
    { text: 'PDPs identical to competitors', icon: AlertTriangle, color: 'text-destructive' },
    { text: 'Costly SEO and conversion improvements', icon: TrendingDown, color: 'text-orange-500' },
    { text: 'Content quickly becomes outdated', icon: RefreshCw, color: 'text-yellow-600' }
  ];

  const costs = [
    'Inconsistent PDPs → Poor differentiation & conversion',
    'Rising marketing spend → Higher acquisition costs', 
    'Price competition → Shrinking margins',
    'Team burnout → Slower time-to-market'
  ];

  return (
    <section className="px-4 sm:px-6 py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="content-width">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-center mb-4 sm:mb-6 text-balance animate-fade-in">
          Why Retail Content is Such a Big Problem
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {/* Challenges */}
          <div className="text-center animate-slide-up">
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 max-w-2xl mx-auto">
              Retailers face relentless content demands:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
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

          {/* Arrow */}
          <div className="flex justify-center animate-fade-in">
            <div className="bg-destructive/10 rounded-full p-1.5 sm:p-2">
              <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4 text-destructive" />
            </div>
          </div>

          {/* Results */}
          <div className="text-center animate-slide-up">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">
              {results.map((result, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-destructive/5 border border-destructive/20 hover:border-destructive/40 transition-all duration-300 group text-left">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-destructive/10 rounded-md sm:rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                    <result.icon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${result.color}`} />
                  </div>
                  <span className="text-foreground font-medium leading-relaxed text-xs sm:text-sm">{result.text}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground font-medium">
              Scaling quality content shouldn't be this hard.
            </p>
          </div>

          {/* Costs */}
          <div className="bg-gradient-to-br from-muted/40 to-muted/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-border/50 shadow-soft animate-slide-up max-w-2xl mx-auto">
            <h3 className="text-sm sm:text-base font-display font-semibold mb-2 sm:mb-3 text-center text-foreground">
              The Compounding Cost:
            </h3>
            <div className="space-y-1.5">
              {costs.map((cost, index) => (
                <div key={index} className="text-xs text-muted-foreground text-center">
                  {cost}
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
