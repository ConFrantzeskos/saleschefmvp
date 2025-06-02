
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ReviewHeaderProps {
  assetCount: number;
  onApproveAll: () => void;
}

const ReviewHeader = ({ assetCount, onApproveAll }: ReviewHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-semibold mb-2">Review Enhanced Content</h1>
        <p className="text-lg text-muted-foreground">
          Review and approve enhanced content for all your assets
        </p>
      </div>
      <Button onClick={onApproveAll} className="px-8">
        Approve All & Deploy
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
};

export default ReviewHeader;
