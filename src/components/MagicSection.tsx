
import React, { memo } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Database, FileText, Search, Brain, Zap, Target, Globe } from 'lucide-react';

interface MagicSectionProps {
  onBookDemo: () => void;
}

const inputs = [
  { name: 'CSV', icon: '📊' },
  { name: 'ERP', icon: '🏢' },
  { name: 'PDF', icon: '📄' },
  { name: 'PIM', icon: '📦' },
  { name: 'CMS', icon: '💻' },
  { name: 'Raw PDPs', icon: '🛍️' }
];

const discoveryAgents = [
  'Reviews / Social Verbatims → reasons to buy',
  'Favourite features',
  'Competitor positioning → SEO gaps',
  'Trend signals',
  'Real customer language'
];

const strategicAgents = [
  'Ladders of benefits',
  'Differentiation logic',
  'Audience alignment',
  'Tone and messaging adaptation'
];

const outputs = [
  'PDPs', 'SEO tags', 'Images & lifestyle content', 'Video', 'Audio', 'POS',
  'Widgets', 'Retail Media', 'Localised variants', 'Training assets',
  'Sales enablement', 'Global marketplaces'
];

const channels = [
  { name: 'Shopify', icon: '🛒' },
  { name: 'Amazon', icon: '📦' },
  { name: 'BigCommerce', icon: '🏪' },
  { name: 'Magento', icon: '🎯' },
  { name: 'Retail Media', icon: '📺' },
  { name: 'Social', icon: '📱' }
];

const MagicSection = memo(({ onBookDemo }: MagicSectionProps) => {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-6">
            SalesChef is powered by a team of specialised AI agents
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Like chefs - each trained to transform raw product specs into a feast of sales-ready content.
          </p>
        </div>

        {/* Visual Flow */}
        <div className="grid lg:grid-cols-5 gap-8 items-center mb-12">
          {/* Inputs */}
          <div className="lg:col-span-1">
            <h3 className="font-display font-bold text-lg mb-4 text-center">Raw Inputs</h3>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
              {inputs.map((input, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-card rounded-lg border border-border">
                  <span className="text-xl">{input.icon}</span>
                  <span className="font-medium text-sm">{input.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex justify-center">
            <ArrowRight className="w-8 h-8 text-primary" />
          </div>

          {/* Agents */}
          <div className="lg:col-span-2 bg-card rounded-2xl p-6 border border-primary/20 shadow-lg">
            <h3 className="font-display font-bold text-lg mb-6 text-center text-primary">AI Agents at Work</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Search className="w-5 h-5 text-accent" />
                  <h4 className="font-semibold text-accent">Discovery Agents</h4>
                </div>
                <div className="space-y-2">
                  {discoveryAgents.map((agent, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <span className="text-green-600 mt-0.5">✅</span>
                      <span>{agent}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="w-5 h-5 text-secondary" />
                  <h4 className="font-semibold text-secondary">Strategic Planners</h4>
                </div>
                <div className="space-y-2">
                  {strategicAgents.map((agent, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <span className="text-green-600 mt-0.5">✅</span>
                      <span>{agent}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex justify-center">
            <ArrowRight className="w-8 h-8 text-primary" />
          </div>

          {/* Outputs */}
          <div className="lg:col-span-1">
            <h3 className="font-display font-bold text-lg mb-4 text-center">Content Explosion</h3>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
              {outputs.map((output, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg border border-accent/20 text-sm">
                  <span className="text-green-600">✅</span>
                  <span className="font-medium">{output}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Channels */}
        <div className="bg-muted/30 rounded-2xl p-6 mb-8">
          <h3 className="font-display font-bold text-lg mb-4 text-center">Ready for Every Channel</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {channels.map((channel, index) => (
              <div key={index} className="flex flex-col items-center gap-2 p-3 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors">
                <span className="text-2xl">{channel.icon}</span>
                <span className="text-xs font-medium text-center">{channel.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold text-muted-foreground mb-6">
            "Empower your whole retail chain—from supplier to shop floor."
          </p>
          <Button 
            onClick={onBookDemo}
            size="lg" 
            className="h-12 px-8 font-semibold bg-primary hover:bg-primary/90"
          >
            See it live — Book a Demo <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
});

MagicSection.displayName = 'MagicSection';

export default MagicSection;
