
import React from 'react';

const ProblemSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why is retail content so broken?</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Retailers juggle thousands of SKUs and dozens of systems—PIMs, CMSs, ERPs, spreadsheets, PDFs. 
              Content teams can't keep up. So they copy and paste. The result?
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full"></div>
                <span>Generic PDPs</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full"></div>
                <span>Identical to competitors</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-destructive rounded-full"></div>
                <span>No benefits, no brand, no conversion</span>
              </li>
            </ul>
            <p className="text-muted-foreground">
              Meanwhile, performance teams spend millions trying to drive traffic to content that doesn't convert.
            </p>
          </div>
          <div className="bg-muted/30 rounded-lg p-8 text-center">
            <div className="space-y-4">
              <div className="bg-destructive/10 border border-destructive/20 rounded p-4">
                <h3 className="font-semibold text-destructive">Broken PDP</h3>
                <p className="text-sm text-muted-foreground mt-2">Generic copy, no differentiation</p>
              </div>
              <div className="text-2xl">+</div>
              <div className="bg-orange-100 border border-orange-200 rounded p-4">
                <h3 className="font-semibold text-orange-600">Google Ads Budget</h3>
                <p className="text-sm text-muted-foreground mt-2">Burning without conversions</p>
              </div>
              <div className="text-2xl">=</div>
              <div className="bg-destructive/10 border border-destructive/20 rounded p-4">
                <h3 className="font-semibold text-destructive">Poor ROI</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
