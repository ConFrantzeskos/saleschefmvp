import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Search, MessageSquare, Target, Copy, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { ContentOpportunity } from '@/types/contentOpportunity';

interface FeatureGuidance {
  feature: string;
  confidence: number;
  seoKeywords: Array<{ keyword: string; volume: string; difficulty: string }>;
  customerLanguage: string[];
  proofPoints: string[];
  competitiveClaims: string[];
  objections: Array<{ question: string; answer: string }>;
  headlines: string[];
}

interface ContentGuidanceTabProps {
  featureGuidance: FeatureGuidance[];
  contentOpportunities?: ContentOpportunity[];
}

const ContentGuidanceTab = ({ featureGuidance, contentOpportunities = [] }: ContentGuidanceTabProps) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard');
  };

  const getFormatBadgeColor = (format: string) => {
    switch (format) {
      case 'blog-post': return 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300';
      case 'guide': return 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300';
      case 'comparison': return 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300';
      case 'landing-page': return 'bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300';
      case 'faq': return 'bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-300';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high': return <Badge className="bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300">🔥 HIGH</Badge>;
      case 'medium': return <Badge variant="secondary">MEDIUM</Badge>;
      case 'low': return <Badge variant="outline">LOW</Badge>;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* High-Impact Content Opportunities Section */}
      {contentOpportunities.length > 0 && (
        <Card className="p-6 border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">🎯 High-Impact Content Opportunities</h3>
              <p className="text-sm text-muted-foreground">
                Based on {contentOpportunities.length} high-volume search queries from enrichment data
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {contentOpportunities.slice(0, 10).map((opp, idx) => (
              <div 
                key={opp.id}
                className="p-4 bg-background/80 rounded-lg border border-border hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-semibold text-muted-foreground">#{idx + 1}</span>
                      <h4 className="text-base font-semibold text-foreground">"{opp.title}"</h4>
                      <Badge variant="outline" className="text-xs">
                        {opp.searchVolume.toLocaleString()}/mo
                      </Badge>
                      {getPriorityBadge(opp.priority)}
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-2">
                      → <span className={getFormatBadgeColor(opp.recommendedFormat) + " px-2 py-0.5 rounded text-xs font-medium"}>
                        {opp.recommendedFormat.replace('-', ' ').toUpperCase()}
                      </span>: {opp.useCase}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>Est. traffic: {opp.estimatedTraffic.toLocaleString()}/mo</span>
                      <span>•</span>
                      <span>Intent: {opp.intent}</span>
                      <span>•</span>
                      <span>Competition: {opp.competition}</span>
                    </div>
                  </div>

                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(opp.title)}
                    className="flex-shrink-0"
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Feature-Specific Guidance */}
      {featureGuidance.map((guidance, idx) => (
        <Card key={idx} className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-foreground">{guidance.feature}</h3>
              <Badge variant="secondary" className="mt-1">{guidance.confidence}% confidence</Badge>
            </div>
          </div>

          <div className="space-y-6">
            {/* SEO Keywords */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Search className="w-4 h-4 text-primary" />
                <h4 className="font-semibold text-foreground">SEO Keywords (Priority Order)</h4>
              </div>
              <div className="space-y-2">
                {guidance.seoKeywords.map((kw, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{kw.keyword}</p>
                      <div className="flex gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">Vol: {kw.volume}</Badge>
                        <Badge variant="outline" className="text-xs">Diff: {kw.difficulty}</Badge>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(kw.keyword)}
                      className="ml-2"
                    >
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Language */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare className="w-4 h-4 text-primary" />
                <h4 className="font-semibold text-foreground">Customer Language to Use</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {guidance.customerLanguage.map((phrase, i) => (
                  <Badge key={i} variant="secondary" className="cursor-pointer hover:bg-secondary/80" onClick={() => copyToClipboard(`"${phrase}"`)}>
                    "{phrase}"
                  </Badge>
                ))}
              </div>
            </div>

            {/* Proof Points */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-4 h-4 text-primary" />
                <h4 className="font-semibold text-foreground">Proof Points</h4>
              </div>
              <ul className="space-y-2">
                {guidance.proofPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Competitive Claims */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-4 h-4 text-secondary" />
                <h4 className="font-semibold text-foreground">Competitive Claims</h4>
              </div>
              <ul className="space-y-2">
                {guidance.competitiveClaims.map((claim, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span className="text-sm text-muted-foreground">{claim}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Objections */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare className="w-4 h-4 text-orange-600" />
                <h4 className="font-semibold text-foreground">Handle Objections</h4>
              </div>
              <div className="space-y-3">
                {guidance.objections.map((obj, i) => (
                  <div key={i} className="p-3 bg-orange-50/50 dark:bg-orange-950/10 rounded-lg border border-orange-200 dark:border-orange-900/40">
                    <p className="text-sm font-medium text-foreground mb-1">❓ "{obj.question}"</p>
                    <p className="text-sm text-muted-foreground">→ {obj.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Headlines */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-4 h-4 text-primary" />
                <h4 className="font-semibold text-foreground">Best Headlines</h4>
              </div>
              <div className="space-y-2">
                {guidance.headlines.map((headline, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <span className="text-sm text-foreground">{i + 1}. {headline}</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(headline)}
                    >
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ContentGuidanceTab;
