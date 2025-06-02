
import React from 'react';
import { Check, TrendingUp, TrendingDown, Clock } from 'lucide-react';

const ResultsSection = () => {
  const results = [
    'Slash SEM and SEO costs',
    'Scale content without scaling headcount',
    'Lift PDP conversion and search rankings',
    'Accelerate time-to-shelf',
    'Empower your whole retail chain—from supplier to shop floor'
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">The Results Speak for Themselves</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {results.map((result, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-lg">{result}</span>
              </div>
            ))}
          </div>
          
          <div className="space-y-6">
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold mb-4">Before vs After</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Before</p>
                  <p>Generic copy, poor SEO</p>
                </div>
                <div>
                  <p className="text-muted-foreground">After</p>
                  <p>Optimized, compelling content</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-background rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-semibold">PDP Conversion</p>
                <p className="text-xs text-muted-foreground">Rate ↑</p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <TrendingDown className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-semibold">SEM Cost</p>
                <p className="text-xs text-muted-foreground">Per Sale ↓</p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <Clock className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-semibold">Time to Publish</p>
                <p className="text-xs text-muted-foreground">↓</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
