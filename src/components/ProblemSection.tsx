
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
    { text: 'Poor quality, incomplete PDPs', icon: AlertTriangle, color: 'text-destructive' },
    { text: 'SEO and SEM performance is costly to improve', icon: TrendingDown, color: 'text-orange-500' },
    { text: 'Conversion gains take significant time and spend', icon: Users, color: 'text-red-500' },
    { text: 'Even optimised content quickly falls out of date', icon: RefreshCw, color: 'text-yellow-600' }
  ];

  return (
    <section className="py-12 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="content-width">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-8 text-balance animate-fade-in">
          Why Retail Content is Such a Big Problem
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Introduction */}
          <div className="text-center animate-slide-up">
            <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
              Content is at the heart of any retail experience. Retailers face relentless content demands:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-2 p-3 rounded-xl bg-card border border-border/50 hover:border-border hover:shadow-medium transition-all duration-300 group text-left">
                  <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                    <challenge.icon className={`w-4 h-4 ${challenge.color}`} />
                  </div>
                  <span className="text-foreground font-medium leading-relaxed text-sm">{challenge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow connector */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-destructive/10 rounded-full p-2">
              <ArrowDown className="w-5 h-5 text-destructive" />
            </div>
          </div>

          {/* Results Section */}
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-lg font-display font-semibold mb-4 text-destructive">
              The result?
            </h3>
            <div className="grid md:grid-cols-2 gap-3 mb-4">
              {results.map((result, index) => (
                <div key={index} className="flex items-start gap-2 p-3 rounded-xl bg-destructive/5 border border-destructive/20 hover:border-destructive/40 hover:bg-destructive/10 transition-all duration-300 group text-left">
                  <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                    <result.icon className={`w-4 h-4 ${result.color}`} />
                  </div>
                  <span className="text-foreground font-medium leading-relaxed text-sm">{result.text}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground font-medium">
              Scaling high-quality product content shouldn't be this hard.
            </p>
          </div>

          {/* Divider */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-lg text-muted-foreground">⸻</div>
          </div>

          {/* Compounding Cost Section */}
          <div className="bg-gradient-to-br from-muted/40 to-muted/20 rounded-2xl p-5 border border-border/50 shadow-soft animate-slide-up max-w-3xl mx-auto" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-lg font-display font-semibold mb-4 text-center text-foreground">
              The Compounding Cost of Inconsistent Content:
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-3">
                <h4 className="font-display font-semibold text-destructive mb-1 text-sm">Inconsistent PDPs</h4>
                <p className="text-xs text-destructive/80">→ Hard to differentiate, variable SEO performance, poor conversion</p>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-3">
                <h4 className="font-display font-semibold text-orange-600 mb-1 text-sm">Rising Marketing Spend</h4>
                <p className="text-xs text-orange-500">→ Increasing costs to drive traffic and lift conversion</p>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3">
                <h4 className="font-display font-semibold text-yellow-600 mb-1 text-sm">Bland, identical PDPs</h4>
                <p className="text-xs text-yellow-600">→ If everyone's PDPs look the same, the only way to compete is by investing in performance media and/or price competition.</p>
              </div>
              
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-3 flex flex-col justify-center text-center">
                <h4 className="font-display font-semibold text-destructive text-sm mb-1">Poor ROI</h4>
                <p className="text-xs text-destructive/80">→ Content teams overwhelmed, marketing budgets strained</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
