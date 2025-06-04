
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface EnrichmentReviewHeaderProps {
  assetCount: number;
  onApproveAll: () => void;
}

const EnrichmentReviewHeader = React.memo(({ assetCount, onApproveAll }: EnrichmentReviewHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-semibold mb-2">Review Enriched Data</h1>
        <p className="text-lg text-muted-foreground">
          Review the enriched product intelligence data before generating content
        </p>
      </div>
      <Button onClick={onApproveAll} className="px-8">
        Approve All & Generate Content
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
});

EnrichmentReviewHeader.displayName = 'EnrichmentReviewHeader';

export default EnrichmentReviewHeader;
