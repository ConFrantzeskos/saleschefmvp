import { Card } from '@/components/ui/card';
import { TrendingUp, Search, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface MarketOpportunityPanelProps {
  searchTrends: string;
  seoOpportunities: string;
  socialMentions: string;
  customerSentiment: string;
}

const MarketOpportunityPanel = ({
  searchTrends,
  seoOpportunities,
  socialMentions,
  customerSentiment
}: MarketOpportunityPanelProps) => {
  return (
    <Card className="p-6 border-l-4 border-l-primary/40">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Market Opportunity</h3>
        <Badge variant="secondary" className="ml-auto">Intelligence</Badge>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Search className="w-4 h-4 text-muted-foreground" />
            <p className="text-sm font-medium text-foreground">Search Demand</p>
          </div>
          <p className="text-sm text-muted-foreground pl-6">{searchTrends}</p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
            <p className="text-sm font-medium text-foreground">SEO Opportunities</p>
          </div>
          <p className="text-sm text-muted-foreground pl-6">{seoOpportunities}</p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare className="w-4 h-4 text-muted-foreground" />
            <p className="text-sm font-medium text-foreground">Social & Sentiment</p>
          </div>
          <p className="text-sm text-muted-foreground pl-6">
            {socialMentions} • {customerSentiment}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default MarketOpportunityPanel;
