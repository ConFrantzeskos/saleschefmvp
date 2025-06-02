
import React from 'react';
import { Check, TrendingUp, TrendingDown, Clock, ArrowRight, Zap, Target, Users, Rocket as RocketIcon } from 'lucide-react';

const ResultsSection = () => {
  const results = [
    { text: 'Slash SEM and SEO costs', icon: TrendingDown, color: 'text-green-600' },
    { text: 'Scale content without scaling headcount', icon: Users, color: 'text-blue-600' },
    { text: 'Lift PDP conversion and search rankings', icon: TrendingUp, color: 'text-purple-600' },
    { text: 'Accelerate time-to-shelf', icon: Zap, color: 'text-orange-600' },
    { text: 'Empower your whole retail chain—from supplier to shop floor', icon: RocketIcon, color: 'text-red-600' }
  ];

  const metrics = [
    { label: 'PDP Conversion', value: '+127%', icon: TrendingUp, color: 'bg-green-500' },
    { label: 'SEM Cost Reduction', value: '-65%', icon: TrendingDown, color: 'bg-blue-500' },
    { label: 'Time to Publish', value: '-80%', icon: Clock, color: 'bg-purple-500' }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            The Results Speak for Themselves
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real impact across your entire content pipeline
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Benefits List */}
          <div className="space-y-6">
            {results.map((result, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-background/50 backdrop-blur-sm border hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <div className={`w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 ${result.color}`}>
                  <result.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-lg font-medium leading-relaxed">{result.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Before/After Comparison */}
          <div className="space-y-8">
            <div className="bg-background rounded-2xl p-8 shadow-lg border">
              <h3 className="text-2xl font-bold mb-6 text-center">Before vs After</h3>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-red-50 border border-red-200">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div>
                    <p className="font-semibold text-red-800">Before</p>
                    <p className="text-red-600">Generic copy, poor SEO, manual processes</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-green-50 border border-green-200">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div>
                    <p className="font-semibold text-green-800">After</p>
                    <p className="text-green-600">Optimized, compelling, automated content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Metrics Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-8 bg-background rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className={`w-16 h-16 ${metric.color} text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <metric.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{metric.label}</p>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
            <Target className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Ready to see these results for your business?</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
