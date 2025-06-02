
import React from 'react';
import { AlertTriangle, TrendingDown, Users, Database, RefreshCw, FileX, Clock, ArrowDown } from 'lucide-react';

const ProblemSection = () => {
  const challenges = [
    { text: 'Thousands of SKUs across PIMs, ERPs, CMSs, spreadsheets', icon: Database, color: 'text-blue-500' },
    { text: 'Continuous flow of new products, updates, seasonal ranges', icon: RefreshCw, color: 'text-green-500' },
    { text: 'Inconsistent, messy data—hard to standardise', icon: FileX, color: 'text-orange-500' },
    { text: 'Content teams stretched thin—manual edits, copy/paste workflows', icon: Clock, color: 'text-purple-500' }
  ];

  const results = [
    { text: 'PDPs vary in quality, hard to differentiate', icon: AlertTriangle, color: 'text-destructive' },
    { text: 'SEO and SEM performance is costly to lift', icon: TrendingDown, color: 'text-orange-500' },
    { text: 'Conversion gains require heavy time and spend', icon: Users, color: 'text-red-500' },
    { text: 'Even well-optimised content quickly falls out of date', icon: RefreshCw, color: 'text-yellow-600' }
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-background to-muted/30">
      <div className="content-width">
        <h2 className="text-section-title text-center mb-16 text-balance animate-fade-in">
          Why Retail Content Struggles to Scale
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Challenges Section */}
          <div className="text-center animate-slide-up">
            <h3 className="text-2xl font-display font-semibold mb-8 text-foreground">
              Retailers face constant content pressure:
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:border-border hover:shadow-medium transition-all duration-300 group text-left">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                    <challenge.icon className={`w-6 h-6 ${challenge.color}`} />
                  </div>
                  <span className="text-foreground font-medium leading-relaxed">{challenge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow connector */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-destructive/10 rounded-full p-4">
              <ArrowDown className="w-8 h-8 text-destructive" />
            </div>
          </div>

          {/* Results Section */}
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-display font-semibold mb-8 text-destructive">
              The result:
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {results.map((result, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-destructive/5 border border-destructive/20 hover:border-destructive/40 hover:bg-destructive/10 transition-all duration-300 group text-left">
                  <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                    <result.icon className={`w-6 h-6 ${result.color}`} />
                  </div>
                  <span className="text-foreground font-medium leading-relaxed">{result.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Equation Visual */}
          <div className="bg-gradient-to-br from-muted/40 to-muted/20 rounded-3xl p-8 border border-border/50 shadow-soft animate-slide-up max-w-2xl mx-auto" style={{ animationDelay: '0.6s' }}>
            <div className="space-y-6">
              <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 text-center">
                <h4 className="font-display font-semibold text-destructive mb-2">Inconsistent Content</h4>
                <p className="text-sm text-destructive/80">Variable quality, hard to differentiate</p>
              </div>
              <div className="text-3xl font-bold text-accent font-display text-center">+</div>
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 text-center">
                <h4 className="font-display font-semibold text-orange-600 mb-2">Marketing Spend</h4>
                <p className="text-sm text-orange-500">Costly to lift performance</p>
              </div>
              <div className="text-3xl font-bold text-accent font-display text-center">=</div>
              <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 text-center">
                <h4 className="font-display font-semibold text-destructive text-xl">Poor ROI</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
