
import React from 'react';
import { AlertTriangle, Database, RefreshCw, FileX, Clock, TrendingDown, Users, DollarSign, ArrowRight } from 'lucide-react';

const ProblemSection = () => {
  const challenges = [
    { text: 'Thousands of SKUs across PIMs, ERPs, CMSs, spreadsheets', icon: Database, color: 'text-blue-500' },
    { text: 'Constant flow of new products, updates, and seasonal ranges', icon: RefreshCw, color: 'text-green-500' },
    { text: 'Inconsistent, messy data—hard to standardise', icon: FileX, color: 'text-orange-500' },
    { text: 'Content teams stretched thin—manual edits, copy/paste workflows', icon: Clock, color: 'text-purple-500' }
  ];

  const results = [
    { text: 'PDP quality varies across channels', icon: AlertTriangle, color: 'text-destructive' },
    { text: 'SEO and SEM performance is costly to improve', icon: TrendingDown, color: 'text-orange-500' },
    { text: 'Conversion gains take significant time and spend', icon: Users, color: 'text-red-500' },
    { text: 'Even optimised content quickly falls out of date', icon: RefreshCw, color: 'text-yellow-600' }
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-background to-muted/30">
      <div className="content-width">
        {/* Section number and title */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3 mb-6">
            <span className="text-2xl">2️⃣</span>
            <span className="text-sm font-medium text-primary">Problem → Why Content is Hard to Scale</span>
          </div>
          <h2 className="text-section-title text-balance">
            Why Retail Content is So Hard to Scale
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Challenges Section */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-display font-semibold mb-8 text-foreground">
              Retailers face relentless content demands:
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:border-border hover:shadow-medium transition-all duration-300 group">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                      <challenge.icon className={`w-6 h-6 ${challenge.color}`} />
                    </div>
                    <span className="text-foreground font-medium leading-relaxed">{challenge.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results Section */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-display font-semibold mb-8 text-foreground">
              The result?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {results.map((result, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-destructive/5 border border-destructive/20 hover:border-destructive/40 hover:bg-destructive/10 transition-all duration-300 group">
                  <div className="w-3 h-3 bg-destructive rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                      <result.icon className={`w-6 h-6 ${result.color}`} />
                    </div>
                    <span className="text-foreground font-medium leading-relaxed">{result.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing statement */}
          <div className="text-center animate-fade-in bg-gradient-to-br from-muted/40 to-muted/20 rounded-3xl p-8 border border-border/50 shadow-soft" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl font-display font-semibold text-foreground">
              Scaling high-quality product content shouldn't be this hard.
            </p>
          </div>

          {/* Divider */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          {/* Impact Section */}
          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-destructive/10 rounded-full px-6 py-3 mb-6">
                <span className="text-2xl">3️⃣</span>
                <span className="text-sm font-medium text-destructive">Impact of the problem</span>
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                The Compounding Cost of Inconsistent Content:
              </h3>
            </div>

            <div className="max-w-2xl mx-auto space-y-6">
              {/* Flow visualization */}
              <div className="bg-gradient-to-br from-muted/40 to-muted/20 rounded-3xl p-8 border border-border/50 shadow-soft">
                <div className="space-y-8">
                  <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 text-center">
                    <h4 className="font-display font-semibold text-destructive mb-2">Inconsistent PDPs</h4>
                    <p className="text-sm text-destructive/80">Hard to differentiate, variable SEO performance</p>
                  </div>
                  
                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 text-accent" />
                  </div>
                  
                  <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 text-center">
                    <h4 className="font-display font-semibold text-orange-600 mb-2">Rising Marketing Spend</h4>
                    <p className="text-sm text-orange-500">Increasing costs to drive traffic and lift conversion</p>
                  </div>
                  
                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 text-accent" />
                  </div>
                  
                  <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 text-center">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <DollarSign className="w-6 h-6 text-destructive" />
                      <h4 className="font-display font-semibold text-destructive text-xl">Poor ROI</h4>
                    </div>
                    <p className="text-sm text-destructive/80">Content teams overwhelmed, marketing budgets strained</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
