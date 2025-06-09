import React from 'react';
import { ArrowRight, Upload, Search, Brain, Zap, Globe } from 'lucide-react';

const IntroducingSalesChef = () => {
  const inputTypes = [
    'CSV, ERP dump, PDF, PIM export, raw PDPs, supplier spreadsheets',
    'SalesChef corrects missing data, categorises products intelligently',
    'Standardises formats across all channels and systems',
    'Validates and enriches incomplete specifications',
    'Organises chaotic data into structured, usable formats'
  ];

  const discoveryFeatures = [
    'Pulls customer reviews, social verbatims',
    'Surfaces reasons to buy, favourite features, benefits customers actually mention',
    'Finds top competitor positioning, SEO keywords, gaps',
    'Monitors trends, seasonality, market shifts',
    'Discovers what\'s persuasive — beyond the spec'
  ];

  const strategicFeatures = [
    'Builds ladders of benefits',
    'Crafts differentiation logic',
    'Aligns to target segments',
    'Generates persuasion strategy across funnel',
    'Adapts tone and messaging to brand + region + channel'
  ];

  const contentOutputs = [
    'PDP copy & SEO tags',
    'Feature-benefit bullets',
    'Image prompts + lifestyle imagery',
    'Video scripts + short-form video',
    'Voice/audio',
    'POS',
    'Widgets',
    'Training content',
    'Localised variants',
    'Retail Media creatives',
    'Social content',
    'Sales enablement'
  ];

  const channels = [
    'Shopify', 'Amazon', 'BigCommerce', 'Magento', 'Retail Media Network',
    'Print / POS', 'Global marketplaces (Zalando, Mirakl, Meta, etc)', 'Regional variants'
  ];

  const FlowPanel = ({ 
    icon: Icon, 
    title, 
    subtitle, 
    items, 
    highlight = false,
    visualExample
  }: {
    icon: any;
    title: string;
    subtitle?: string;
    items: string[];
    highlight?: boolean;
    visualExample?: React.ReactNode;
  }) => (
    <div className={`relative rounded-3xl border transition-all duration-300 hover:shadow-lg ${
      highlight 
        ? 'bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 shadow-medium' 
        : 'bg-card border-border hover:border-border/60'
    }`}>
      
      <div className="grid lg:grid-cols-2 gap-8 p-8">
        {/* Left Column - Content */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className={`icon-container-large ${
              highlight 
                ? 'bg-gradient-to-br from-primary to-accent text-white shadow-brand' 
                : 'bg-muted text-muted-foreground'
            }`}>
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-foreground">{title}</h3>
              {subtitle && (
                <p className="text-base text-muted-foreground mt-1">{subtitle}</p>
              )}
            </div>
          </div>
          
          <div className="grid gap-3">
            {items.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                  highlight ? 'bg-primary' : 'bg-accent'
                }`} />
                <span className="text-base text-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Visual Example */}
        <div className="flex items-center justify-center">
          {visualExample}
        </div>
      </div>
    </div>
  );

  // Enhanced visual example for inputs showing processing
  const InputVisual = () => (
    <div className="w-full max-w-sm space-y-4">
      <div className="bg-muted rounded-xl p-4 border">
        <div className="text-xs font-mono text-muted-foreground mb-2">Raw CSV Input:</div>
        <div className="space-y-1 text-xs font-mono">
          <div>SKU,CD1234</div>
          <div>PRODUCT_NAME,24HR Wireless...</div>
          <div>BATTERY_LIFE,24hr</div>
          <div>BLUETOOTH_VERSION,5.0</div>
          <div>FOLDABLE,YES</div>
          <div className="text-muted-foreground">...</div>
        </div>
      </div>
      
      <div className="flex justify-center">
        <ArrowRight className="w-4 h-4 text-primary animate-pulse" />
      </div>
      
      <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-4 border border-accent/20">
        <div className="text-xs font-medium text-accent mb-2">✨ SalesChef Processed:</div>
        <div className="space-y-1 text-xs">
          <div className="bg-white/60 rounded p-2">
            <span className="font-medium">Category:</span> Audio Equipment → Headphones → Wireless
          </div>
          <div className="bg-white/60 rounded p-2">
            <span className="font-medium">Standardized:</span> 24-hour battery life
          </div>
          <div className="bg-white/60 rounded p-2">
            <span className="font-medium">Enriched:</span> Bluetooth 5.0 (enhanced connectivity)
          </div>
        </div>
      </div>
    </div>
  );

  const DiscoveryVisual = () => (
    <div className="w-full max-w-sm space-y-4">
      <div className="relative">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20">
          <div className="flex items-center gap-2 mb-3">
            <Search className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Customer Insights</span>
          </div>
          <div className="space-y-2 text-xs">
            <div className="bg-white/60 rounded p-2">
              ⭐⭐⭐⭐⭐ "Perfect for remote work! Battery lasts my entire workday..."
            </div>
            <div className="bg-white/60 rounded p-2">
              🏆 "Best value for battery life. Folding design is genius..."
            </div>
            <div className="text-primary font-medium">+2,847 reviews analyzed</div>
          </div>
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
          <span className="text-xs text-white">✨</span>
        </div>
      </div>
    </div>
  );

  const StrategyVisual = () => (
    <div className="w-full max-w-sm">
      <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl p-4 border border-secondary/20">
        <div className="flex items-center gap-2 mb-3">
          <Brain className="w-4 h-4 text-secondary" />
          <span className="text-sm font-medium">Strategy Output</span>
        </div>
        <div className="space-y-3 text-xs">
          <div className="space-y-1">
            <div className="font-medium text-secondary">Target: Remote Workers</div>
            <div className="text-muted-foreground">Pain: Battery anxiety during long calls</div>
          </div>
          <div className="space-y-1">
            <div className="font-medium text-primary">Key Message:</div>
            <div className="italic">"All-day wireless freedom"</div>
          </div>
          <div className="bg-accent/20 rounded p-2">
            <div className="font-medium">Positioning vs Sony WH-720N:</div>
            <div>20% longer battery + travel-friendly</div>
          </div>
        </div>
      </div>
    </div>
  );

  const ContentVisual = () => (
    <div className="w-full max-w-sm space-y-3">
      <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-4 border border-accent/20">
        <div className="flex items-center gap-2 mb-3">
          <Zap className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium">Generated Content</span>
        </div>
        <div className="space-y-2 text-xs">
          <div className="bg-white/60 rounded p-2">
            <div className="font-medium">Meta Title:</div>
            <div>"CD1234 24 Hour Wireless Headphones | Bluetooth 5.0..."</div>
          </div>
          <div className="bg-white/60 rounded p-2">
            <div className="font-medium">Hero Copy:</div>
            <div>"Stay connected, wire-free. The CD1234 combines 24-hour battery life..."</div>
          </div>
          <div className="text-accent font-medium">+12 content formats ready</div>
        </div>
      </div>
    </div>
  );

  const DistributionVisual = () => (
    <div className="w-full max-w-sm space-y-3">
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-muted rounded-lg p-3 text-center">
          <div className="text-xs font-medium mb-1">Shopify</div>
          <div className="w-full h-8 bg-gradient-to-r from-accent/30 to-primary/30 rounded text-xs flex items-center justify-center">
            ✓ Deployed
          </div>
        </div>
        <div className="bg-muted rounded-lg p-3 text-center">
          <div className="text-xs font-medium mb-1">Amazon</div>
          <div className="w-full h-8 bg-gradient-to-r from-accent/30 to-primary/30 rounded text-xs flex items-center justify-center">
            ✓ Live
          </div>
        </div>
        <div className="bg-muted rounded-lg p-3 text-center">
          <div className="text-xs font-medium mb-1">BigCommerce</div>
          <div className="w-full h-8 bg-gradient-to-r from-accent/30 to-primary/30 rounded text-xs flex items-center justify-center">
            ✓ Published
          </div>
        </div>
        <div className="bg-muted rounded-lg p-3 text-center">
          <div className="text-xs font-medium mb-1">Retail Media</div>
          <div className="w-full h-8 bg-gradient-to-r from-accent/30 to-primary/30 rounded text-xs flex items-center justify-center">
            ✓ Active
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-muted-foreground">
        CD1234 live across all channels
      </div>
    </div>
  );

  return (
    <section className="section-spacing bg-gradient-subtle">
      <div className="content-width">
        <div className="text-center mb-12">
          <h2 className="text-section-title mb-6 text-balance animate-fade-in">
            Introducing SalesChef
          </h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            How SalesChef turns your raw product specs into a feast of cognition and content
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto mt-8" />
        </div>

        {/* Flow Panels */}
        <div className="space-y-8 max-w-6xl mx-auto">
          {/* Panel 1: Inputs */}
          <div className="animate-slide-up">
            <FlowPanel
              icon={Upload}
              title="1. INPUTS + INTELLIGENT PROCESSING"
              items={inputTypes}
              visualExample={<InputVisual />}
            />
          </div>

          {/* Arrow */}
          <div className="flex justify-center animate-fade-in">
            <ArrowRight className="w-8 h-8 text-muted-foreground" />
          </div>

          {/* Panel 2: Discovery Magic */}
          <div className="animate-slide-up">
            <FlowPanel
              icon={Search}
              title="2. DISCOVERY MAGIC"
              items={discoveryFeatures}
              highlight={true}
              visualExample={<DiscoveryVisual />}
            />
          </div>

          {/* Arrow */}
          <div className="flex justify-center animate-fade-in">
            <ArrowRight className="w-8 h-8 text-muted-foreground" />
          </div>

          {/* Panel 3: Strategic Magic */}
          <div className="animate-slide-up">
            <FlowPanel
              icon={Brain}
              title="3. STRATEGIC MAGIC"
              subtitle="agency planner agent — Distil + Define"
              items={strategicFeatures}
              visualExample={<StrategyVisual />}
            />
          </div>

          {/* Arrow */}
          <div className="flex justify-center animate-fade-in">
            <ArrowRight className="w-8 h-8 text-muted-foreground" />
          </div>

          {/* Panel 4: Creative + Content Explosion */}
          <div className="animate-slide-up">
            <FlowPanel
              icon={Zap}
              title="4. CREATIVE + CONTENT EXPLOSION"
              items={contentOutputs}
              visualExample={<ContentVisual />}
            />
          </div>

          {/* Arrow */}
          <div className="flex justify-center animate-fade-in">
            <ArrowRight className="w-8 h-8 text-muted-foreground" />
          </div>

          {/* Panel 5: Distribution */}
          <div className="animate-slide-up">
            <FlowPanel
              icon={Globe}
              title="5. Distributes content across any channel you have"
              items={channels}
              visualExample={<DistributionVisual />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroducingSalesChef;
