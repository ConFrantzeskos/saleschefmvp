import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, TrendingUp, TrendingDown } from 'lucide-react';

interface CompetitiveContextPanelProps {
  keyCompetitors: string;
  relativeStrengths: string;
  competitorAnalysis: string;
  priceHistory?: string;
  valuePositioning?: string;
}

const CompetitiveContextPanel = ({
  keyCompetitors,
  relativeStrengths,
  competitorAnalysis,
  priceHistory,
  valuePositioning
}: CompetitiveContextPanelProps) => {
  return (
    <Card className="p-6 border-l-4 border-l-secondary/40">
      <div className="flex items-center gap-2 mb-4">
        <Target className="w-5 h-5 text-secondary" />
        <h3 className="text-lg font-semibold text-foreground">Competitive Context</h3>
        <Badge variant="secondary" className="ml-auto">Positioning</Badge>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-muted-foreground" />
            <p className="text-sm font-medium text-foreground">Key Competitors</p>
          </div>
          <p className="text-sm text-muted-foreground pl-6">{keyCompetitors}</p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <p className="text-sm font-medium text-foreground">Our Advantages</p>
          </div>
          <p className="text-sm text-muted-foreground pl-6">{relativeStrengths}</p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <TrendingDown className="w-4 h-4 text-orange-600" />
            <p className="text-sm font-medium text-foreground">Competitive Analysis</p>
          </div>
          <p className="text-sm text-muted-foreground pl-6">{competitorAnalysis}</p>
        </div>

        {valuePositioning && (
          <div className="pt-3 border-t border-border">
            <p className="text-sm font-medium text-foreground mb-1">Value Position</p>
            <p className="text-sm text-muted-foreground">{valuePositioning}</p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default CompetitiveContextPanel;
