import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface EnrichmentInsight {
  category: string;
  insight: string;
  influencedContent: string[];
  contentCount: number;
}

const EnrichmentTraceability = () => {
  const enrichmentInsights: EnrichmentInsight[] = [
    {
      category: 'Search Trends',
      insight: '"24 hour wireless headphones" (8.2K/mo search volume)',
      contentCount: 7,
      influencedContent: [
        'Meta Title H1',
        'Hero Introduction',
        'Feature Bullets',
        'Performance Section',
        'Instagram Caption',
        'Launch Email',
        'Cart Abandonment Email'
      ]
    },
    {
      category: 'Customer Sentiment',
      insight: 'Battery life = Top feature (4.8/5 rating)',
      contentCount: 9,
      influencedContent: [
        'Hero Introduction',
        'Feature Bullets',
        'Lifestyle Section (Jobs to Be Done)',
        'Performance Section',
        'Customer Reviews',
        'FAQ Section',
        'Technical Specifications',
        'Instagram Caption',
        'LinkedIn Post'
      ]
    },
    {
      category: 'Competitive Analysis',
      insight: 'Beats Studio3: 22hr battery at $349 - We beat on value',
      contentCount: 5,
      influencedContent: [
        'Hero Introduction',
        'Performance Section',
        'Customer Reviews',
        'FAQ Section',
        'Twitter/X Post'
      ]
    },
    {
      category: 'Target Audience',
      insight: 'Remote workers & frequent travelers are primary users',
      contentCount: 8,
      influencedContent: [
        'Hero Introduction',
        'Lifestyle Section (5 jobs)',
        'Category Entry Points',
        'Instagram Caption',
        'LinkedIn Post',
        'Launch Email',
        'FAQ Section',
        'Print Ad'
      ]
    },
    {
      category: 'Use Case Priority',
      insight: 'Professional meetings ranked #1 use case',
      contentCount: 6,
      influencedContent: [
        'Hero Introduction',
        'Feature Bullets (Microphone)',
        'Lifestyle Section (Professional Calls)',
        'LinkedIn Post',
        'FAQ Section',
        'Technical Specifications (Compatibility)'
      ]
    },
    {
      category: 'Feature Extraction',
      insight: 'Foldable design identified as key travel benefit',
      contentCount: 6,
      influencedContent: [
        'Feature Bullets',
        'Lifestyle Section (Travel)',
        'Category Entry Points',
        'Customer Reviews',
        'Instagram Caption',
        'What\'s in the Box'
      ]
    }
  ];

  const totalInfluences = enrichmentInsights.reduce((sum, insight) => sum + insight.contentCount, 0);

  return (
    <Card className="border-blue-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <TrendingUp className="w-5 h-5 text-blue-700" />
          Enrichment Impact Analysis
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          How market intelligence shaped the final content
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <Badge className="bg-blue-500 text-white">
            {enrichmentInsights.length} Insights
          </Badge>
          <ArrowRight className="w-4 h-4 text-blue-600" />
          <Badge variant="outline" className="bg-blue-500/10 border-blue-500/40 text-blue-700">
            {totalInfluences} Content Pieces Influenced
          </Badge>
        </div>

        <div className="space-y-4">
          {enrichmentInsights.map((item, idx) => (
            <div key={idx}>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="bg-blue-500/10 border-blue-500/40 text-blue-700">
                      {item.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      → Influenced {item.contentCount} pieces
                    </span>
                  </div>
                  <p className="text-sm font-medium mb-2">📊 {item.insight}</p>
                  <div className="ml-4 space-y-1">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Content Generated:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.influencedContent.map((content, cidx) => (
                        <Badge 
                          key={cidx} 
                          variant="secondary" 
                          className="text-xs bg-green-500/10 border-green-500/40 text-green-700"
                        >
                          {content}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {idx < enrichmentInsights.length - 1 && <Separator className="mt-4" />}
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200">
          <p className="text-sm font-medium text-center">
            Every enrichment insight directly influenced multiple content pieces, creating a cohesive narrative grounded in market reality.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnrichmentTraceability;
