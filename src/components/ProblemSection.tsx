
import React from 'react';
import { AlertTriangle, TrendingDown, Users, Database, RefreshCw, FileX, Clock } from 'lucide-react';

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
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 animate-slide-up">
            <p className="text-body-large text-muted-foreground leading-relaxed">
              Retailers face constant content pressure:
            </p>
            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-card/50 border border-border/50 hover:bg-card hover:border-border transition-all duration-300 group">
                  <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform mt-0.5 flex-shrink-0">
                    <challenge.icon className={`w-5 h-5 ${challenge.color}`} />
                  </div>
                  <span className="text-foreground font-medium leading-relaxed">{challenge.text}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <p className="text-body-large text-muted-foreground leading-relaxed mb-6">
                The result:
              </p>
              <div className="space-y-4">
                {results.map((result, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-card/50 border border-border/50 hover:bg-card hover:border-border transition-all duration-300 group">
                    <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform mt-0.5 flex-shrink-0">
                      <result.icon className={`w-5 h-5 ${result.color}`} />
                    </div>
                    <span className="text-foreground font-medium leading-relaxed">{result.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-muted/40 to-muted/20 rounded-3xl p-8 border border-border/50 shadow-soft animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 shadow-soft hover:shadow-medium transition-shadow">
                <h3 className="font-display font-semibold text-destructive mb-2">Inconsistent Content</h3>
                <p className="text-sm text-destructive/80">Variable quality, hard to differentiate</p>
              </div>
              <div className="text-3xl font-bold text-accent font-display text-center">+</div>
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 shadow-soft hover:shadow-medium transition-shadow">
                <h3 className="font-display font-semibold text-orange-600 mb-2">Marketing Spend</h3>
                <p className="text-sm text-orange-500">Costly to lift performance</p>
              </div>
              <div className="text-3xl font-bold text-accent font-display text-center">=</div>
              <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 shadow-soft hover:shadow-medium transition-shadow">
                <h3 className="font-display font-semibold text-destructive">Poor ROI</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
