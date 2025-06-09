
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
    <section className="px-4 sm:px-6 py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="content-width">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4 sm:mb-6 text-balance">
            Before vs After
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-6 sm:p-8 shadow-soft border border-border animate-slide-up">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-display font-bold text-lg text-destructive">BEFORE</th>
                    <th className="text-left py-4 px-4 font-display font-bold text-lg text-accent">AFTER</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((comparison, index) => (
                    <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                      <td className="py-4 px-4 text-sm sm:text-base text-muted-foreground">{comparison.before}</td>
                      <td className="py-4 px-4 text-sm sm:text-base text-foreground font-medium">{comparison.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
