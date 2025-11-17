import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface FrameworkApplication {
  framework: string;
  description: string;
  appliedTo: number;
  example: {
    rawData: string;
    enrichment: string;
    transformation: string;
    finalContent: string;
  };
  contentPieces: string[];
}

const FrameworkApplications = () => {
  const applications: FrameworkApplication[] = [
    {
      framework: 'Ladder of Benefits',
      description: '4-level transformation from feature to emotional benefit',
      appliedTo: 9,
      example: {
        rawData: 'BATTERY_LIFE,24hr',
        enrichment: 'Customer sentiment: Battery = 4.8/5 | Search: "24 hour headphones"',
        transformation: 'Feature → Feature Benefit → Consumer Benefit → Emotional/Social',
        finalContent: 'Never worry about battery life again. The CD1234 delivers 24 hours of uninterrupted listening — making you feel confident in back-to-back meetings and look professional to colleagues.'
      },
      contentPieces: [
        'Hero Introduction',
        'Feature Bullets',
        'Lifestyle Section',
        'Performance Section',
        'Instagram Caption',
        'LinkedIn Post',
        'Launch Email',
        'FAQ Section',
        'Print Ad'
      ]
    },
    {
      framework: 'Jobs to Be Done',
      description: 'Content organized around 5 core jobs customers hire this product for',
      appliedTo: 7,
      example: {
        rawData: 'FOLDABLE,YES | MIC_TYPE,Omnidirectional | BATTERY_LIFE,24hr',
        enrichment: 'Use cases: Meetings > Travel > Fitness | Target: Remote workers',
        transformation: 'Job: Sound professional on calls → Solution: Crystal-clear mic + reliability',
        finalContent: '💼 Sounding Professional on Calls: Crystal-clear microphone makes you the most credible voice in every meeting, whether home or office. 24-hour battery means never losing connection mid-presentation.'
      },
      contentPieces: [
        'Lifestyle Section (5 jobs)',
        'LinkedIn Post',
        'Hero Introduction',
        'FAQ Section',
        'Cart Abandonment Email',
        'Instagram Caption',
        'Print Ad'
      ]
    },
    {
      framework: 'Category Entry Points',
      description: 'Triggering product consideration at specific moments in customer\'s day',
      appliedTo: 5,
      example: {
        rawData: 'BATTERY_LIFE,24hr | USE_CASE,Commuting,Meetings,Travel',
        enrichment: 'Peak search times: Morning commute, pre-travel planning',
        transformation: 'Moment: Morning commute → Need: Focus music → Solution: 24hr battery',
        finalContent: '🌅 Morning commute — Start your day with focus music. Never worry about charging before you leave.'
      },
      contentPieces: [
        'When to Use Section',
        'Launch Email',
        'Instagram Caption',
        'Print Ad',
        'Hero Introduction'
      ]
    },
    {
      framework: 'Behavioral Economics Arsenal',
      description: '6 psychological triggers integrated throughout content',
      appliedTo: 11,
      example: {
        rawData: 'RETAIL_PRICE,USD_79.99 | WARRANTY,24 months',
        enrichment: 'Competitor pricing: Beats $349 | Customer worry: "What if it breaks?"',
        transformation: 'Triggers: Scarcity + Loss Aversion + Reciprocity',
        finalContent: '🔥 Only 3 left in stock at this price | 👥 12 people viewing right now | 🎁 2-year warranty included — Premium protection at no extra cost'
      },
      contentPieces: [
        'Purchase CTA',
        'Launch Email',
        'Cart Abandonment Email',
        'Twitter/X Post',
        'Hero Introduction (Loss Aversion)',
        'Customer Reviews (Social Proof)',
        'FAQ Section',
        'What\'s in the Box (Reciprocity)',
        'Performance Section',
        'Instagram Caption',
        'Print Ad'
      ]
    },
    {
      framework: 'Reasons to Believe',
      description: 'Technical proof points that build credibility',
      appliedTo: 6,
      example: {
        rawData: 'DRIVER_SIZE,40mm | BLUETOOTH_VERSION,5.0 | CERTIFICATIONS,CE,FCC',
        enrichment: 'Tech specs: 40mm neodymium drivers | BT 5.0 = Latest standard',
        transformation: 'Spec → Verification → Benefit proof',
        finalContent: 'Proven performance you can trust: 24-hour battery verified by independent testing | Bluetooth 5.0 certified — 99.9% connection stability | 40mm drivers deliver studio-quality sound'
      },
      contentPieces: [
        'Performance Section',
        'Technical Specifications',
        'FAQ Section',
        'LinkedIn Post',
        'Hero Introduction',
        'Feature Bullets'
      ]
    },
    {
      framework: 'Social Proof & Authority',
      description: 'Customer testimonials and ratings strategically placed',
      appliedTo: 5,
      example: {
        rawData: 'REVIEWS_AVG,4.6 | COMPETITOR,Beats Studio3',
        enrichment: 'Sentiment: Battery 4.8/5 | Common praise: "Best for remote work"',
        transformation: 'Real customer voice → Credibility → Purchase confidence',
        finalContent: '★★★★★ "Best investment for remote work. My colleagues actually compliment how clear I sound on Zoom." | ★★★★★ "Switched from Beats Studio — same quality, better battery, half the price."'
      },
      contentPieces: [
        'Customer Reviews Section',
        'LinkedIn Post',
        'Cart Abandonment Email',
        'Purchase CTA (Social proof)',
        'FAQ Section'
      ]
    }
  ];

  const totalApplications = applications.reduce((sum, app) => sum + app.appliedTo, 0);

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Brain className="w-5 h-5 text-primary" />
          Framework Applications: Raw Data to Strategic Content
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Detailed examples showing how each framework transformed data into compelling content
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
          <Badge className="bg-primary text-white">
            {applications.length} Frameworks
          </Badge>
          <ArrowRight className="w-4 h-4 text-primary" />
          <Badge variant="outline" className="bg-green-500/10 border-green-500/40 text-green-700">
            {totalApplications} Content Pieces Generated
          </Badge>
        </div>

        <div className="space-y-6">
          {applications.map((app, idx) => (
            <div key={idx}>
              <div className="space-y-4">
                {/* Framework Header */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-primary/10 text-primary border-primary/40">
                      {app.framework}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      Applied to {app.appliedTo} content pieces
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{app.description}</p>
                </div>

                {/* Transformation Example */}
                <div className="border-l-4 border-primary/40 pl-4 space-y-3 bg-muted/30 p-4 rounded-r">
                  <h5 className="text-sm font-semibold">Transformation Example:</h5>
                  
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        1. Raw Data:
                      </p>
                      <p className="text-sm font-mono bg-background p-2 rounded mt-1">
                        {app.example.rawData}
                      </p>
                    </div>

                    <div className="flex justify-center">
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
                        2. Enrichment Added:
                      </p>
                      <p className="text-sm bg-blue-50 p-2 rounded mt-1 text-blue-900">
                        {app.example.enrichment}
                      </p>
                    </div>

                    <div className="flex justify-center">
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-primary uppercase tracking-wide">
                        3. Framework Applied:
                      </p>
                      <p className="text-sm bg-primary/10 p-2 rounded mt-1 text-primary">
                        {app.example.transformation}
                      </p>
                    </div>

                    <div className="flex justify-center">
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-green-700 uppercase tracking-wide">
                        4. Final Content:
                      </p>
                      <p className="text-sm bg-green-50 p-3 rounded mt-1 text-green-900 italic">
                        "{app.example.finalContent}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Pieces List */}
                <div className="ml-4">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    Used in these content pieces:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {app.contentPieces.map((piece, pidx) => (
                      <Badge 
                        key={pidx} 
                        variant="secondary" 
                        className="text-xs bg-green-500/10 border-green-500/40 text-green-700"
                      >
                        {piece}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              {idx < applications.length - 1 && <Separator className="mt-6" />}
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-green-50 rounded-lg border border-primary/20">
          <p className="text-sm font-medium text-center">
            Each framework systematically transformed raw specifications into strategically crafted content that drives purchasing decisions.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FrameworkApplications;
