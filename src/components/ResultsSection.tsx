
import React from 'react';
import { TrendingUp, TrendingDown, Clock, ArrowRight, Zap, Target, Users, Rocket as RocketIcon } from 'lucide-react';

const ResultsSection = () => {
  const results = [
    { text: 'Slash SEM and SEO costs', icon: TrendingDown, color: 'text-accent' },
    { text: 'Scale content without scaling headcount', icon: Users, color: 'text-primary' },
    { text: 'Lift PDP conversion and search rankings', icon: TrendingUp, color: 'text-secondary' },
    { text: 'Accelerate time-to-shelf', icon: Zap, color: 'text-accent' },
    { text: 'Empower your whole retail chain—from supplier to shop floor', icon: RocketIcon, color: 'text-primary' }
  ];

  const metrics = [
    { label: 'PDP Conversion', value: '+127%', icon: TrendingUp, color: 'bg-accent' },
    { label: 'SEM Cost Reduction', value: '-65%', icon: TrendingDown, color: 'bg-primary' },
    { label: 'Time to Publish', value: '-80%', icon: Clock, color: 'bg-secondary' }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-balance">
            The Results Speak for Themselves
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real impact across your entire content pipeline
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Benefits List */}
          <div className="space-y-6">
            {results.map((result, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-3xl bg-card border border-border hover:shadow-soft transition-all duration-300 group">
                <div className={`w-12 h-12 rounded-2xl bg-muted flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform ${result.color}`}>
                  <result.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-base font-medium leading-relaxed text-foreground">{result.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Before/After Comparison */}
          <div className="space-y-8">
            <div className="bg-card rounded-3xl p-8 shadow-soft border border-border">
              <h3 className="text-2xl font-display font-bold mb-8 text-center">Before vs After</h3>
              <div className="grid grid-cols-1 gap-8">
                <div className="flex items-center gap-4 p-6 rounded-2xl bg-destructive/5 border border-destructive/20">
                  <div className="w-4 h-4 rounded-full bg-destructive"></div>
                  <div>
                    <p className="font-display font-semibold text-destructive mb-1">Before</p>
                    <p className="text-sm text-muted-foreground">Generic copy, poor SEO, manual processes</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="flex items-center gap-4 p-6 rounded-2xl bg-accent/5 border border-accent/20">
                  <div className="w-4 h-4 rounded-full bg-accent"></div>
                  <div>
                    <p className="font-display font-semibold text-accent mb-1">After</p>
                    <p className="text-sm text-muted-foreground">Optimized, compelling, automated content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Metrics Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-8 bg-card rounded-3xl shadow-soft border border-border hover:shadow-medium transition-all duration-300 group">
              <div className={`w-16 h-16 ${metric.color} text-white rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform`}>
                <metric.icon className="w-7 h-7" />
              </div>
              <div className="text-3xl font-display font-bold text-foreground mb-2">{metric.value}</div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{metric.label}</p>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl border border-primary/10">
            <div className="w-8 h-8 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Target className="w-4 h-4 text-primary" />
            </div>
            <span className="text-primary font-semibold">Ready to see these results for your business?</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
