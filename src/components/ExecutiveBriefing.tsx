
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, AlertTriangle, Target, Lightbulb, ArrowRight } from 'lucide-react';
import AgentTag from './AgentTag';

interface ExecutiveBriefingProps {
  productName: string;
}

const ExecutiveBriefing = ({ productName }: ExecutiveBriefingProps) => {
  return (
    <Card className="border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl flex items-center space-x-2">
            <Lightbulb className="w-5 h-5 text-primary" />
            <span>Executive Briefing</span>
          </CardTitle>
          <AgentTag agents={['Distil', 'Define', 'Diagnose', 'Debrief']} />
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <h3 className="font-semibold text-green-600">Primary Value Drivers</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">1</Badge>
                <span>Exceptional 24-hour battery life creates clear competitive advantage</span>
              </li>
              <li className="flex items-start space-x-2">
                <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">2</Badge>
                <span>Strong value positioning at $150-200 price point vs premium alternatives</span>
              </li>
              <li className="flex items-start space-x-2">
                <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">3</Badge>
                <span>Portable foldable design appeals to travel/remote work segments</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <h3 className="font-semibold text-amber-600">Primary Risks & Gaps</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <Badge variant="outline" className="text-xs bg-amber-50 text-amber-700 border-amber-200">1</Badge>
                <span>Lack of active noise cancellation vs premium competitors</span>
              </li>
              <li className="flex items-start space-x-2">
                <Badge variant="outline" className="text-xs bg-amber-50 text-amber-700 border-amber-200">2</Badge>
                <span>Comfort concerns for extended wear sessions (4+ hours)</span>
              </li>
              <li className="flex items-start space-x-2">
                <Badge variant="outline" className="text-xs bg-amber-50 text-amber-700 border-amber-200">3</Badge>
                <span>Missing modern features expected by target demographic</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Target className="w-4 h-4 text-blue-600" />
              <h3 className="font-semibold text-blue-600">Key Market Opportunities</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">1</Badge>
                <span>Target business travelers with battery life messaging</span>
              </li>
              <li className="flex items-start space-x-2">
                <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">2</Badge>
                <span>Gaming community values extended comfort for long sessions</span>
              </li>
              <li className="flex items-start space-x-2">
                <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">3</Badge>
                <span>SEO opportunity in "long battery headphones" search space</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-3">
              <ArrowRight className="w-4 h-4 text-purple-600" />
              <h3 className="font-semibold text-purple-600">Recommended Next Actions</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200">1</Badge>
                <span>Create battery life comparison content vs competitors</span>
              </li>
              <li className="flex items-start space-x-2">
                <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200">2</Badge>
                <span>Develop travel-focused product demo videos</span>
              </li>
              <li className="flex items-start space-x-2">
                <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200">3</Badge>
                <span>Target "wireless headphones long battery" keyword cluster</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/5 p-4 rounded-lg">
          <h3 className="font-semibold text-primary mb-2">Suggested TAVISH Content Focus</h3>
          <p className="text-sm text-muted-foreground">
            Prioritize <strong>video content</strong> showcasing 24-hour battery life in real travel scenarios, 
            plus <strong>comparison charts</strong> highlighting value proposition vs premium alternatives. 
            Social media content should focus on quick charge demonstrations and portability features.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExecutiveBriefing;
