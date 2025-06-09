
import React from 'react';

const BeforeAfterSection = () => {
  const comparisons = [
    { before: 'Generic, supplier copy', after: 'Persuasive, on-brand content' },
    { before: 'Manual edits & uploads', after: 'Automated, multi-channel output' },
    { before: 'SEO struggles', after: 'SEO-optimised pages' },
    { before: 'Long time-to-shelf', after: 'Minutes to publish' },
    { before: 'Teams stretched thin', after: 'Teams freed to scale' },
    { before: 'Identical specs', after: 'SalesChef creates in your specific style' }
  ];

  return (
    <section className="px-4 sm:px-6 py-8 lg:py-12 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight mb-4 text-balance">
            Before vs After
          </h2>
        </div>
        
        <div className="bg-card rounded-2xl p-4 lg:p-6 shadow-soft border border-border animate-slide-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <h3 className="font-display font-bold text-lg text-destructive mb-3 text-center">BEFORE</h3>
              <div className="space-y-2">
                {comparisons.map((comparison, index) => (
                  <div key={index} className="text-sm text-muted-foreground p-2 rounded-lg bg-muted/30">
                    {comparison.before}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-accent mb-3 text-center">AFTER</h3>
              <div className="space-y-2">
                {comparisons.map((comparison, index) => (
                  <div key={index} className="text-sm text-foreground font-medium p-2 rounded-lg bg-accent/10">
                    {comparison.after}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
