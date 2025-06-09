
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
    className = ""
  }: {
    icon: any;
    title: string;
    subtitle?: string;
    items: string[];
    highlight?: boolean;
    className?: string;
  }) => (
    <div className={`relative p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
      highlight 
        ? 'bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 shadow-lg' 
        : 'bg-card border-border hover:border-border'
    } ${className}`}>
      {highlight && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
            The Magic 99% of tools can't do
          </div>
        </div>
      )}
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
          highlight ? 'bg-primary text-primary-foreground' : 'bg-muted'
        }`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-display font-bold text-lg text-foreground">{title}</h3>
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>
      </div>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span className="text-sm text-foreground leading-relaxed">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="px-4 sm:px-6 py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="content-width">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-4 text-balance animate-fade-in">
            Introducing SalesChef
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            How SalesChef turns your raw product specs into a feast of cognition and content
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto mt-6" />
        </div>

        {/* Flow Panels */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {/* Panel 1: Inputs */}
          <div className="animate-slide-up">
            <FlowPanel
              icon={Upload}
              title="1. INPUTS"
              items={inputTypes}
            />
          </div>

          {/* Arrow */}
          <div className="flex justify-center animate-fade-in">
            <ArrowRight className="w-6 h-6 text-muted-foreground" />
          </div>

          {/* Panel 2: Discovery Magic */}
          <div className="animate-slide-up">
            <FlowPanel
              icon={Search}
              title="2. DISCOVERY MAGIC"
              items={discoveryFeatures}
              highlight={true}
            />
          </div>

          {/* Arrow */}
          <div className="flex justify-center animate-fade-in">
            <ArrowRight className="w-6 h-6 text-muted-foreground" />
          </div>

          {/* Panel 3: Strategic Magic */}
          <div className="animate-slide-up">
            <FlowPanel
              icon={Brain}
              title="3. STRATEGIC MAGIC"
              subtitle="agency planner agent — Distil + Define"
              items={strategicFeatures}
            />
          </div>

          {/* Arrow */}
          <div className="flex justify-center animate-fade-in">
            <ArrowRight className="w-6 h-6 text-muted-foreground" />
          </div>

          {/* Panel 4: Creative + Content Explosion */}
          <div className="animate-slide-up">
            <FlowPanel
              icon={Zap}
              title="4. CREATIVE + CONTENT EXPLOSION"
              items={contentOutputs}
            />
          </div>

          {/* Arrow */}
          <div className="flex justify-center animate-fade-in">
            <ArrowRight className="w-6 h-6 text-muted-foreground" />
          </div>

          {/* Panel 5: Distribution */}
          <div className="animate-slide-up">
            <FlowPanel
              icon={Globe}
              title="5. Distributes content across any channel you have"
              items={channels}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroducingSalesChef;
