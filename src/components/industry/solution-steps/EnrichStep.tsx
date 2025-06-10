
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface EnrichStepProps {
  enrichmentFeatures: string[];
}

const EnrichStep = ({ enrichmentFeatures }: EnrichStepProps) => {
  return (
    <div className="card-content py-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-secondary text-white font-bold text-sm rounded-full flex items-center justify-center">3</div>
        <h3 className="text-lg font-semibold">Enrich with market intelligence</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {enrichmentFeatures.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
            <span className="text-xs text-foreground leading-relaxed">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrichStep;
