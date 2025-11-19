import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, TrendingUp } from 'lucide-react';

interface AudienceInsightsPanelProps {
  targetAudience: string;
  categoryEntryPoints: string;
  reasonsToBuy: string;
}

const AudienceInsightsPanel = ({
  targetAudience,
  categoryEntryPoints,
  reasonsToBuy
}: AudienceInsightsPanelProps) => {
  return (
    <Card className="p-6 border-l-4 border-l-accent/40">
      <div className="flex items-center gap-2 mb-4">
        <Users className="w-5 h-5 text-accent-foreground" />
        <h3 className="text-lg font-semibold text-foreground">Target Audience Insights</h3>
        <Badge variant="secondary" className="ml-auto">Personas</Badge>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <p className="text-sm font-medium text-foreground">Primary Audiences</p>
          </div>
          <p className="text-sm text-muted-foreground pl-6">{targetAudience}</p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-muted-foreground" />
            <p className="text-sm font-medium text-foreground">Category Entry Points</p>
          </div>
          <p className="text-sm text-muted-foreground pl-6">{categoryEntryPoints}</p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
            <p className="text-sm font-medium text-foreground">Why They Buy</p>
          </div>
          <p className="text-sm text-muted-foreground pl-6">{reasonsToBuy}</p>
        </div>
      </div>
    </Card>
  );
};

export default AudienceInsightsPanel;
