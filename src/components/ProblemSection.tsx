
import React from 'react';
import { AlertTriangle, TrendingDown, Users } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    { text: 'Generic PDPs', icon: AlertTriangle, color: 'text-destructive' },
    { text: 'Identical to competitors', icon: TrendingDown, color: 'text-orange-500' },
    { text: 'No benefits, no brand, no conversion', icon: Users, color: 'text-red-500' }
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-background to-muted/30">
      <div className="content-width">
        <h2 className="text-section-title text-center mb-16 text-balance animate-fade-in">
          Why is retail content so broken?
        </h2>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-up">
            <p className="text-body-large text-muted-foreground leading-relaxed">
              Retailers juggle thousands of SKUs and dozens of systems—PIMs, CMSs, ERPs, spreadsheets, PDFs. 
              Content teams can't keep up. So they copy and paste. The result?
            </p>
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-card/50 border border-border/50 hover:bg-card hover:border-border transition-all duration-300 group">
                  <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                    <problem.icon className={`w-5 h-5 ${problem.color}`} />
                  </div>
                  <span className="text-foreground font-medium">{problem.text}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Meanwhile, performance teams spend millions trying to drive traffic to content that doesn't convert.
            </p>
          </div>
          <div className="bg-gradient-to-br from-muted/40 to-muted/20 rounded-3xl p-8 border border-border/50 shadow-soft animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 shadow-soft hover:shadow-medium transition-shadow">
                <h3 className="font-display font-semibold text-destructive mb-2">Broken PDP</h3>
                <p className="text-sm text-destructive/80">Generic copy, no differentiation</p>
              </div>
              <div className="text-3xl font-bold text-accent font-display text-center">+</div>
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 shadow-soft hover:shadow-medium transition-shadow">
                <h3 className="font-display font-semibold text-orange-600 mb-2">Google Ads Budget</h3>
                <p className="text-sm text-orange-500">Burning without conversions</p>
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
