
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface DeployStepProps {
  outputChannels: string[];
}

const DeployStep = ({ outputChannels }: DeployStepProps) => {
  return (
    <div className="card-content py-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-primary text-white font-bold text-sm rounded-full flex items-center justify-center">4</div>
        <h3 className="text-lg font-semibold">Generate & deploy across channels</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {outputChannels.slice(0, 8).map((channel, index) => (
          <div key={index} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-xs text-foreground leading-relaxed">{channel}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeployStep;
