
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface EnrichmentReviewHeaderProps {
  assetCount: number;
  onApproveAll: () => void;
}

const EnrichmentReviewHeader = React.memo(({ assetCount, onApproveAll }: EnrichmentReviewHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/20 animate-fade-in" style={{ animationDelay: '0.7s' }}>
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-primary/10">
          <CheckCircle2 className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-display font-semibold mb-1">Ready for Strategic Enhancement</h2>
          <p className="text-muted-foreground">
            {assetCount} products enriched with market intelligence • Proceed to build strategic frameworks
          </p>
        </div>
      </div>
      <Button onClick={onApproveAll} size="lg" className="gap-2 shadow-lg hover-scale">
        <CheckCircle2 className="w-5 h-5" />
        Approve & Continue to Enhancement
        <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  );
});

EnrichmentReviewHeader.displayName = 'EnrichmentReviewHeader';

export default EnrichmentReviewHeader;
