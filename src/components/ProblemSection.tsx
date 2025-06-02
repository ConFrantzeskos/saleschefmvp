
import React from 'react';

const ProblemSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-display font-bold text-center mb-16 text-foreground">
          Why is retail content so broken?
        </h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed font-sans">
              Retailers juggle thousands of SKUs and dozens of systems—PIMs, CMSs, ERPs, spreadsheets, PDFs. 
              Content teams can't keep up. So they copy and paste. The result?
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                <span className="text-foreground font-medium font-sans">Generic PDPs</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                <span className="text-foreground font-medium font-sans">Identical to competitors</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                <span className="text-foreground font-medium font-sans">No benefits, no brand, no conversion</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed font-sans">
              Meanwhile, performance teams spend millions trying to drive traffic to content that doesn't convert.
            </p>
          </div>
          <div className="bg-gradient-to-br from-muted/40 to-muted/20 rounded-3xl p-8 text-center border border-border/50 shadow-soft">
            <div className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6 shadow-soft">
                <h3 className="font-display font-semibold text-red-600 mb-2">Broken PDP</h3>
                <p className="text-sm text-red-500 font-sans">Generic copy, no differentiation</p>
              </div>
              <div className="text-3xl font-bold text-accent font-display">+</div>
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 shadow-soft">
                <h3 className="font-display font-semibold text-orange-600 mb-2">Google Ads Budget</h3>
                <p className="text-sm text-orange-500 font-sans">Burning without conversions</p>
              </div>
              <div className="text-3xl font-bold text-accent font-display">=</div>
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6 shadow-soft">
                <h3 className="font-display font-semibold text-red-600">Poor ROI</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
