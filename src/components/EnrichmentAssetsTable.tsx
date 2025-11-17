
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, MessageSquare, Share2, Target, Search, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { EnrichmentAsset } from '@/types/enrichmentAsset';

interface EnrichmentAssetsTableProps {
  assets: EnrichmentAsset[];
}

const EnrichmentAssetsTable = ({ assets }: EnrichmentAssetsTableProps) => {
  const navigate = useNavigate();

  const handleViewAsset = (assetId: number) => {
    navigate(`/enrichment-review/${assetId}`);
  };

  return (
    <div className="p-6 space-y-4">
      {assets.map((asset, index) => (
        <div 
          key={asset.id} 
          className="group p-6 border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer bg-card animate-fade-in hover-scale"
          style={{ animationDelay: `${0.7 + index * 0.1}s` }}
          onClick={() => handleViewAsset(asset.id)}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-sm text-muted-foreground bg-muted px-2 py-1 rounded">{asset.sku}</span>
                <Badge variant="default" className="gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  {asset.status}
                </Badge>
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                {asset.name}
              </h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{asset.category}</span>
                <span>•</span>
                <span>{asset.brand}</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Data Quality</span>
                <div className="w-24 bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all" 
                    style={{ width: `${asset.quality}%` }}
                  />
                </div>
                <span className="text-sm font-semibold text-primary">{asset.quality}%</span>
              </div>
            </div>
          </div>

          {/* Enrichment Data Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 group-hover:bg-primary/5 transition-colors">
              <div className="p-2 rounded-lg bg-[hsl(var(--chart-1))]/10">
                <TrendingUp className="w-4 h-4 text-[hsl(var(--chart-1))]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground mb-1">Search Trends</p>
                <p className="text-sm font-medium truncate">{asset.searchTrends}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 group-hover:bg-primary/5 transition-colors">
              <div className="p-2 rounded-lg bg-[hsl(var(--chart-2))]/10">
                <MessageSquare className="w-4 h-4 text-[hsl(var(--chart-2))]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground mb-1">Customer Sentiment</p>
                <p className="text-sm font-medium truncate">{asset.customerSentiment}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 group-hover:bg-primary/5 transition-colors">
              <div className="p-2 rounded-lg bg-[hsl(var(--chart-3))]/10">
                <Share2 className="w-4 h-4 text-[hsl(var(--chart-3))]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground mb-1">Social Mentions</p>
                <p className="text-sm font-medium truncate">{asset.socialMentions}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 group-hover:bg-primary/5 transition-colors">
              <div className="p-2 rounded-lg bg-[hsl(var(--chart-4))]/10">
                <Target className="w-4 h-4 text-[hsl(var(--chart-4))]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground mb-1">Competitor Analysis</p>
                <p className="text-sm font-medium truncate">{asset.competitorAnalysis}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 group-hover:bg-primary/5 transition-colors">
              <div className="p-2 rounded-lg bg-[hsl(var(--chart-5))]/10">
                <Search className="w-4 h-4 text-[hsl(var(--chart-5))]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground mb-1">SEO Opportunities</p>
                <p className="text-sm font-medium truncate">{asset.seoOpportunities}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 group-hover:bg-primary/5 transition-colors">
              <div className="p-2 rounded-lg bg-primary/10">
                <Users className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground mb-1">Target Audience</p>
                <p className="text-sm font-medium truncate">{asset.targetAudience}</p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mt-4 pt-4 border-t">
            <div className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-xs text-muted-foreground mb-1">Key Features</p>
                <p className="text-sm text-foreground">{asset.keyFeatures}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EnrichmentAssetsTable;
