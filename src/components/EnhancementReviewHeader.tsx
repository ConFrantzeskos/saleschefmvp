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
    <div className="mb-8 animate-fade-in">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-section-title font-display font-bold mb-2">
            Strategic Enhancement Complete
          </h1>
          <p className="text-body-large text-muted-foreground">
            Comprehensive strategic briefs ready • Review frameworks before generating content
          </p>
        </div>
        <Button onClick={onProceed} size="lg" className="gap-2 shadow-lg hover-scale">
          <Sparkles className="w-5 h-5" />
          Proceed to Content Generation
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <Card className="p-6 border-[hsl(var(--chart-2))] animate-fade-in hover-scale" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-[hsl(var(--chart-2))]/10">
              <CheckCircle className="w-5 h-5 text-[hsl(var(--chart-2))]" />
            </div>
            <span className="text-sm text-muted-foreground">Strategic Briefs</span>
          </div>
          <div className="text-3xl font-display font-bold">{assetCount}</div>
          <p className="text-xs text-muted-foreground mt-1">Complete frameworks</p>
        </Card>

        <Card className="p-6 border-[hsl(var(--chart-3))] animate-fade-in hover-scale" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-[hsl(var(--chart-3))]/10">
              <Target className="w-5 h-5 text-[hsl(var(--chart-3))]" />
            </div>
            <span className="text-sm text-muted-foreground">Persuasion Frameworks</span>
          </div>
          <div className="text-3xl font-display font-bold">{frameworkCount}</div>
          <p className="text-xs text-muted-foreground mt-1">Across all products</p>
        </Card>

        <Card className="p-6 border-[hsl(var(--chart-4))] animate-fade-in hover-scale" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-[hsl(var(--chart-4))]/10">
              <Brain className="w-5 h-5 text-[hsl(var(--chart-4))]" />
            </div>
            <span className="text-sm text-muted-foreground">Strategic Elements</span>
          </div>
          <div className="text-3xl font-display font-bold">{elementCount}</div>
          <p className="text-xs text-muted-foreground mt-1">Reasons to buy & triggers</p>
        </Card>

        <Card className="p-6 border-primary animate-fade-in hover-scale" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Avg Confidence</span>
          </div>
          <div className="text-3xl font-display font-bold">{confidenceScore}%</div>
          <p className="text-xs text-muted-foreground mt-1">Strategic clarity score</p>
        </Card>
      </div>
    </div>
  );
};

export default EnhancementReviewHeader;
