
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
    <section className="section-alt section-spacing-lg content-padding">
      <div className="content-width space-elements-xl">
        <h2 className="text-section-title text-center text-balance animate-fade-in">
          Why Retail Content is Such a Big Problem
        </h2>
        
        <div className="space-elements-lg">
          {/* Challenges */}
          <div className="animate-slide-up space-elements-md">
            <p className="text-body text-muted-foreground text-center content-width mx-auto">
              Retailers face relentless content demands:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="card-minimal group hover-lift">
                  <span className="text-foreground font-medium leading-relaxed text-body-small">
                    {challenge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* The Compounding Cost */}
          <div className="animate-slide-up space-elements-md">
            <h3 className="text-subsection-title text-center text-foreground">
              💸 The Cost of Chaos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {costs.map((cost, index) => (
                <div key={index} className="card-minimal group hover-lift">
                  <span className="text-foreground font-medium leading-relaxed text-body-small">
                    {cost}
                  </span>
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
