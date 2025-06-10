
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface CleanStepProps {
  cleaningFeatures: string[];
}

const CleanStep = ({ cleaningFeatures }: CleanStepProps) => {
  return (
    <div className="card-content py-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-accent text-white font-bold text-sm rounded-full flex items-center justify-center">2</div>
        <h3 className="text-lg font-semibold">Clean & structure with investor comms intelligence</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {cleaningFeatures.slice(0, 6).map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
            <span className="text-xs text-foreground leading-relaxed">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CleanStep;
