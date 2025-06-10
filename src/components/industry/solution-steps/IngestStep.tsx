
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface IngestStepProps {
  ingestSources: string[];
}

const IngestStep = ({ ingestSources }: IngestStepProps) => {
  return (
    <div className="card-content py-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-primary text-white font-bold text-sm rounded-full flex items-center justify-center">1</div>
        <h3 className="text-lg font-semibold">Ingest & unify fragmented investor data</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-4">SalesChef's Drop Agent ingests from:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {ingestSources.slice(0, 8).map((source, index) => (
          <div key={index} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-xs text-foreground leading-relaxed">{source}</span>
          </div>
        ))}
      </div>
      {ingestSources.length > 8 && (
        <p className="text-xs text-muted-foreground mt-2">...and {ingestSources.length - 8} more sources</p>
      )}
    </div>
  );
};

export default IngestStep;
