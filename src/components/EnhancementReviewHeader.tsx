import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles, Target, Brain, CheckCircle } from 'lucide-react';

interface EnhancementReviewHeaderProps {
  assetCount: number;
  frameworkCount: number;
  elementCount: number;
  confidenceScore: number;
  onProceed: () => void;
}

const EnhancementReviewHeader = ({
  assetCount,
  frameworkCount,
  elementCount,
  confidenceScore,
  onProceed
}: EnhancementReviewHeaderProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-section-title font-display font-bold mb-2">
            Strategic Enhancement Complete
          </h1>
          <p className="text-body-large text-muted-foreground">
            Review persuasion frameworks and strategic briefs before generating content
          </p>
        </div>
        <Button onClick={onProceed} size="lg" className="gap-2">
          <Sparkles className="w-5 h-5" />
          Proceed to Content Generation
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <Card className="p-6 border-[hsl(var(--chart-2))]">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-[hsl(var(--chart-2))]/10">
              <CheckCircle className="w-5 h-5 text-[hsl(var(--chart-2))]" />
            </div>
            <span className="text-sm text-muted-foreground">Assets Enhanced</span>
          </div>
          <div className="text-3xl font-display font-bold">{assetCount}</div>
        </Card>

        <Card className="p-6 border-[hsl(var(--chart-3))]">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-[hsl(var(--chart-3))]/10">
              <Target className="w-5 h-5 text-[hsl(var(--chart-3))]" />
            </div>
            <span className="text-sm text-muted-foreground">Strategic Frameworks</span>
          </div>
          <div className="text-3xl font-display font-bold">{frameworkCount}</div>
        </Card>

        <Card className="p-6 border-[hsl(var(--chart-4))]">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-[hsl(var(--chart-4))]/10">
              <Brain className="w-5 h-5 text-[hsl(var(--chart-4))]" />
            </div>
            <span className="text-sm text-muted-foreground">Persuasion Elements</span>
          </div>
          <div className="text-3xl font-display font-bold">{elementCount}</div>
        </Card>

        <Card className="p-6 border-primary">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Strategic Clarity</span>
          </div>
          <div className="text-3xl font-display font-bold">{confidenceScore}%</div>
        </Card>
      </div>
    </div>
  );
};

export default EnhancementReviewHeader;
