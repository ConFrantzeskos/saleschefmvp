import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Search, MessageSquare, Target, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

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
}

const ContentGuidanceTab = ({ featureGuidance }: ContentGuidanceTabProps) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard');
  };

  return (
    <div className="space-y-6">
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
