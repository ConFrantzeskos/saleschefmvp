
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ReviewHeaderProps {
  assetCount: number;
  onApproveAll: () => void;
}

const ReviewHeader = React.memo(({ assetCount, onApproveAll }: ReviewHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-semibold mb-2">Review Generated Content</h1>
        <p className="text-lg text-muted-foreground">
          Review and approve generated content for all your assets
        </p>
      </div>
      <Button onClick={onApproveAll} className="px-8">
        Approve All & Deploy
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
});

ReviewHeader.displayName = 'ReviewHeader';

export default ReviewHeader;
