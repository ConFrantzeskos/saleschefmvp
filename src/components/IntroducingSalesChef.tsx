
import React from 'react';
import { ArrowRight, Upload, Search, Brain, Zap, Globe } from 'lucide-react';

const IntroducingSalesChef = () => {
  const inputTypes = [
    'CSV', 'ERP dump', 'PDF', 'PIM export', 'raw PDPs', 'supplier spreadsheets'
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
      {highlight && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-semibold shadow-brand">
            The Magic 99% of tools can't do
          </div>
        </div>
      )}
      
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

  // Visual examples for each stage
  const InputVisual = () => (
    <div className="w-full max-w-sm space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {['CSV', 'PDF', 'IMG'].map((type, i) => (
          <div key={i} className="h-20 bg-muted rounded-xl flex items-center justify-center">
            <span className="text-sm font-medium text-muted-foreground">{type}</span>
          </div>
        ))}
      </div>
      <div className="h-16 bg-gradient-to-r from-muted to-muted/50 rounded-xl flex items-center justify-center">
        <span className="text-sm text-muted-foreground">Raw Product Data</span>
      </div>
    </div>
  );

  const DiscoveryVisual = () => (
    <div className="w-full max-w-sm space-y-4">
      <div className="relative">
        <div className="h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20">
          <div className="flex items-center gap-2 mb-2">
            <Search className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">AI Discovery</span>
          </div>
          <div className="space-y-1">
            <div className="h-2 bg-primary/30 rounded w-3/4"></div>
            <div className="h-2 bg-accent/30 rounded w-1/2"></div>
            <div className="h-2 bg-primary/20 rounded w-5/6"></div>
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
      <div className="relative h-32 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl p-4 border border-secondary/20">
        <div className="flex items-center gap-2 mb-3">
          <Brain className="w-4 h-4 text-secondary" />
          <span className="text-sm font-medium">Strategy Engine</span>
        </div>
        <div className="space-y-2">
          <div className="flex gap-2">
            <div className="h-3 bg-secondary/40 rounded flex-1"></div>
            <div className="h-3 bg-primary/40 rounded flex-1"></div>
          </div>
          <div className="h-3 bg-accent/30 rounded w-4/5"></div>
          <div className="flex gap-2">
            <div className="h-3 bg-secondary/30 rounded flex-1"></div>
            <div className="h-3 bg-primary/30 rounded w-1/3"></div>
          </div>
        </div>
      </div>
    </div>
  );

  const ContentVisual = () => (
    <div className="w-full max-w-sm">
      <div className="grid grid-cols-2 gap-3">
        {['PDP', 'Email', 'Social', 'Video'].map((type, i) => (
          <div key={i} className="h-16 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg flex items-center justify-center border border-accent/20">
            <span className="text-xs font-medium text-foreground">{type}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 h-8 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg flex items-center justify-center">
        <span className="text-xs text-muted-foreground">+8 more formats</span>
      </div>
    </div>
  );

  const DistributionVisual = () => (
    <div className="w-full max-w-sm space-y-3">
      <div className="grid grid-cols-2 gap-2">
        {['Shopify', 'Amazon', 'BigCommerce', 'Magento'].map((platform, i) => (
          <div key={i} className="h-12 bg-muted rounded-lg flex items-center justify-center">
            <span className="text-xs font-medium text-muted-foreground">{platform}</span>
          </div>
        ))}
      </div>
      <div className="h-10 bg-gradient-to-r from-muted/50 to-muted rounded-lg flex items-center justify-center">
        <span className="text-xs text-muted-foreground">+4 more channels</span>
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
              title="1. INPUTS"
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
