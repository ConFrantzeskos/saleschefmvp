import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Database, TrendingUp, Brain, Sparkles } from 'lucide-react';

interface TransformationFlowProps {
  example?: {
    raw: string;
    enrichment: string[];
    frameworks: string[];
    content: string;
  };
}

const TransformationFlow = ({ example }: TransformationFlowProps) => {
  const defaultExample = {
    raw: 'BATTERY_LIFE,24hr',
    enrichment: [
      'Search volume: "24 hour wireless headphones" (8.2K/mo)',
      'Customer sentiment: Battery = 4.8/5 rating'
    ],
    frameworks: [
      'Ladder of Benefits: Feature → Emotional benefit',
      'Loss Aversion trigger'
    ],
    content: 'Never worry about battery life again. The CD1234 delivers 24 hours of uninterrupted listening — making you feel confident in back-to-back meetings...'
  };

  const flowExample = example || defaultExample;

  return (
    <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
      <CardContent className="p-6">
        <h4 className="font-semibold mb-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
          Transformation Example: Battery Feature
        </h4>
        
        <div className="space-y-4">
          {/* Step 1: Raw Data */}
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-500/10 flex items-center justify-center">
              <Database className="w-4 h-4 text-gray-700" />
            </div>
            <div className="flex-1">
              <Badge variant="outline" className="mb-2">Raw Factory Data</Badge>
              <p className="text-sm font-mono bg-muted p-2 rounded">{flowExample.raw}</p>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowRight className="w-5 h-5 text-muted-foreground" />
          </div>

          {/* Step 2: Enrichment */}
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-blue-700" />
            </div>
            <div className="flex-1">
              <Badge variant="outline" className="mb-2 bg-blue-500/10 border-blue-500/40 text-blue-700">
                Market Intelligence Added
              </Badge>
              <div className="space-y-1">
                {flowExample.enrichment.map((insight, idx) => (
                  <p key={idx} className="text-sm text-muted-foreground">• {insight}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowRight className="w-5 h-5 text-muted-foreground" />
          </div>

          {/* Step 3: Frameworks */}
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Brain className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1">
              <Badge variant="outline" className="mb-2 bg-primary/10 border-primary/40 text-primary">
                Strategic Frameworks Applied
              </Badge>
              <div className="space-y-1">
                {flowExample.frameworks.map((framework, idx) => (
                  <p key={idx} className="text-sm text-muted-foreground">• {framework}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowRight className="w-5 h-5 text-muted-foreground" />
          </div>

          {/* Step 4: Final Content */}
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-green-700" />
            </div>
            <div className="flex-1">
              <Badge variant="outline" className="mb-2 bg-green-500/10 border-green-500/40 text-green-700">
                Production-Ready Content
              </Badge>
              <p className="text-sm text-green-700 bg-green-50 p-3 rounded italic">
                "{flowExample.content}"
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransformationFlow;
