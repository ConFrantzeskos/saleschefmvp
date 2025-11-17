import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Brain, TrendingUp, Lightbulb } from 'lucide-react';

interface IntelligenceSummaryPanelProps {
  cleanedFields: number;
  enrichmentInsights: number;
  frameworksApplied: number;
  contentPieces: number;
}

const IntelligenceSummaryPanel = ({
  cleanedFields = 47,
  enrichmentInsights = 12,
  frameworksApplied = 8,
  contentPieces = 24
}: IntelligenceSummaryPanelProps) => {
  const topFrameworks = [
    { name: 'Ladder of Benefits', uses: 9 },
    { name: 'Jobs to Be Done', uses: 7 },
    { name: 'Behavioral Economics', uses: 6 },
    { name: 'Category Entry Points', uses: 5 }
  ];

  const keyInsights = [
    '"24-hour battery" → High search volume',
    '"Professional use" → Top JTBD',
    '"Travel convenience" → Key CEP'
  ];

  return (
    <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Intelligence Applied</h3>
        </div>

        {/* Progress Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span className="text-sm text-muted-foreground">Cleaned</span>
            </div>
            <p className="text-2xl font-bold text-foreground">{cleanedFields}</p>
            <p className="text-xs text-muted-foreground">data fields</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-muted-foreground">Enriched</span>
            </div>
            <p className="text-2xl font-bold text-foreground">{enrichmentInsights}</p>
            <p className="text-xs text-muted-foreground">market insights</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span className="text-sm text-muted-foreground">Enhanced</span>
            </div>
            <p className="text-2xl font-bold text-foreground">{frameworksApplied}</p>
            <p className="text-xs text-muted-foreground">frameworks</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Generated</span>
            </div>
            <p className="text-2xl font-bold text-foreground">{contentPieces}</p>
            <p className="text-xs text-muted-foreground">content pieces</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50" />

        {/* Most Influential Insights */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-foreground">Most Influential Insights:</h4>
          <div className="space-y-2">
            {keyInsights.map((insight, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">{insight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50" />

        {/* Frameworks Driving Content */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-foreground">Frameworks Driving This Content:</h4>
          <div className="space-y-2">
            {topFrameworks.map((framework, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{framework.name}</span>
                <Badge variant="secondary" className="text-xs">
                  {framework.uses} uses
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default IntelligenceSummaryPanel;
