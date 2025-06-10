
import React from 'react';

const ProblemSection = () => {
  const challenges = [
    { text: '🗃️ Thousands of SKUs across scattered systems' },
    { text: '🔄 Constant product updates and new ranges' },
    { text: '📄 Inconsistent, messy specs across channels' },
    { text: '⏱️ Content teams doing manual copy/paste workflows' },
    { text: '📋 PDPs identical to competitors' },
    { text: '📈 Costly SEO and conversion improvements' },
    { text: '⏰ Content quickly becomes outdated' }
  ];

  const costs = [
    '📉 Inconsistent PDPs → Poor differentiation & conversion',
    '💰 Rising marketing spend → Higher acquisition costs', 
    '💸 Price competition → Shrinking margins',
    '😴 Team burnout → Slower time-to-market'
  ];

  return (
    <section className="content-padding section-spacing-md bg-gradient-to-b from-background to-muted/30">
      <div className="content-width space-elements-lg">
        <h2 className="text-section-title text-center text-balance animate-fade-in">
          Why Retail Content is Such a Big Problem
        </h2>
        
        <div className="max-w-4xl mx-auto space-elements-lg">
          {/* Challenges */}
          <div className="animate-slide-up space-elements-md">
            <p className="text-body text-muted-foreground text-center max-w-2xl mx-auto">
              Retailers face relentless content demands:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-border hover:shadow-medium transition-all duration-300 group">
                  <span className="text-foreground font-medium leading-relaxed text-body-small">{challenge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* The Compounding Cost */}
          <div className="animate-slide-up space-elements-md">
            <h3 className="text-subsection-title text-center text-foreground">
              💸 The Cost of Chaos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {costs.map((cost, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-border hover:shadow-medium transition-all duration-300 group">
                  <span className="text-foreground font-medium leading-relaxed text-body-small">{cost}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
