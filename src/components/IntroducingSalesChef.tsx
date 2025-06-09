
import React from 'react';
import { Upload, Search, Brain, Zap, Globe, TrendingUp } from 'lucide-react';

interface FlowPanelProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle?: string;
  items: string[];
  highlight?: boolean;
  visualExample?: React.ReactNode;
}

const FlowPanel = ({ icon: Icon, title, subtitle, items, highlight = false, visualExample }: FlowPanelProps) => (
  <div className={`relative p-8 rounded-3xl border transition-all duration-300 ${
    highlight 
      ? 'bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 shadow-brand' 
      : 'bg-card border-border hover:border-primary/20 hover:shadow-soft'
  }`}>
    <div className="flex items-start gap-6">
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
            highlight ? 'bg-gradient-brand text-white' : 'bg-primary/10 text-primary'
          }`}>
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-display font-bold text-foreground mb-1">
              {title}
            </h3>
            {subtitle && (
              <p className="text-sm text-muted-foreground font-medium">
                {subtitle}
              </p>
            )}
          </div>
        </div>
        
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span className="text-foreground leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {visualExample && (
        <div className="w-64 flex-shrink-0">
          {visualExample}
        </div>
      )}
    </div>
  </div>
);

// Visual components for each step
const InputVisual = () => (
  <div className="bg-muted/30 rounded-2xl p-4 border border-border">
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-xs">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        <span className="text-muted-foreground">Raw supplier data</span>
      </div>
      <div className="bg-background rounded p-3 text-xs font-mono text-muted-foreground">
        SKU,desc,cat,price<br/>
        A123,hdphone blue,??,150<br/>
        B456,hdphone-red,electronics,$200<br/>
        C789,headphone_black,audio,175
      </div>
      <div className="flex items-center gap-2 text-xs">
        <div className="w-2 h-2 bg-green-500 rounded-full" />
        <span className="text-muted-foreground">Cleaned & standardized</span>
      </div>
    </div>
  </div>
);

const DiscoveryVisual = () => (
  <div className="bg-muted/30 rounded-2xl p-4 border border-border">
    <div className="space-y-3">
      <div className="text-xs font-semibold text-primary">Market Intelligence</div>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-background rounded p-2 text-xs">
          <div className="font-medium text-foreground">Keywords</div>
          <div className="text-muted-foreground">wireless, comfort, battery</div>
        </div>
        <div className="bg-background rounded p-2 text-xs">
          <div className="font-medium text-foreground">Reviews</div>
          <div className="text-muted-foreground">"great sound quality"</div>
        </div>
        <div className="bg-background rounded p-2 text-xs">
          <div className="font-medium text-foreground">Trends</div>
          <div className="text-muted-foreground">+47% demand</div>
        </div>
        <div className="bg-background rounded p-2 text-xs">
          <div className="font-medium text-foreground">Competitors</div>
          <div className="text-muted-foreground">$180-$220 range</div>
        </div>
      </div>
    </div>
  </div>
);

const StrategyVisual = () => (
  <div className="bg-muted/30 rounded-2xl p-4 border border-border">
    <div className="space-y-3">
      <div className="text-xs font-semibold text-accent">Content Strategy</div>
      <div className="space-y-2">
        <div className="bg-background rounded p-2 text-xs">
          <div className="font-medium text-foreground">Primary Benefit</div>
          <div className="text-muted-foreground">24-hour battery life</div>
        </div>
        <div className="bg-background rounded p-2 text-xs">
          <div className="font-medium text-foreground">Tone</div>
          <div className="text-muted-foreground">Professional, reliable</div>
        </div>
        <div className="bg-background rounded p-2 text-xs">
          <div className="font-medium text-foreground">Target</div>
          <div className="text-muted-foreground">Business travelers</div>
        </div>
      </div>
    </div>
  </div>
);

const ContentVisual = () => (
  <div className="bg-muted/30 rounded-2xl p-4 border border-border">
    <div className="space-y-3">
      <div className="text-xs font-semibold text-secondary">Generated Content</div>
      <div className="grid grid-cols-1 gap-2">
        <div className="bg-background rounded p-2 text-xs">
          <div className="font-medium text-foreground">PDP</div>
          <div className="text-muted-foreground">"Experience freedom with 24-hour..."</div>
        </div>
        <div className="bg-background rounded p-2 text-xs">
          <div className="font-medium text-foreground">Social</div>
          <div className="text-muted-foreground">"Never worry about battery again 🔋"</div>
        </div>
        <div className="bg-background rounded p-2 text-xs">
          <div className="font-medium text-foreground">Email</div>
          <div className="text-muted-foreground">"Subject: All-day audio for busy..."</div>
        </div>
      </div>
    </div>
  </div>
);

const DistributionVisual = () => (
  <div className="bg-muted/30 rounded-2xl p-4 border border-border">
    <div className="space-y-3">
      <div className="text-xs font-semibold text-primary">Live Deployment</div>
      <div className="grid grid-cols-2 gap-1">
        {['Website', 'Amazon', 'Social', 'Email', 'POS and Tickets', 'Ads'].map((channel) => (
          <div key={channel} className="bg-background rounded p-1 text-xs text-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mb-1" />
            <div className="text-muted-foreground">{channel}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const OptimizationVisual = () => (
  <div className="bg-muted/30 rounded-2xl p-4 border border-border">
    <div className="space-y-3">
      <div className="text-xs font-semibold text-accent">Performance Data</div>
      <div className="space-y-2">
        <div className="bg-background rounded p-2 text-xs">
          <div className="flex justify-between items-center">
            <span className="text-foreground">CTR</span>
            <span className="text-green-600">+23%</span>
          </div>
        </div>
        <div className="bg-background rounded p-2 text-xs">
          <div className="flex justify-between items-center">
            <span className="text-foreground">Conversion</span>
            <span className="text-green-600">+15%</span>
          </div>
        </div>
        <div className="bg-background rounded p-2 text-xs">
          <div className="flex justify-between items-center">
            <span className="text-foreground">Engagement</span>
            <span className="text-green-600">+31%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const IntroducingSalesChef = () => {
  const inputTypes = [
    'Bulk upload 100s, 1,000s, or 100,000s of SKUs',
    'CSV, ERP dumps, PDFs, PIM exports, raw PDPs, supplier spreadsheets — any supplier, and format, any volume',
    'SalesChef corrects missing data, categorises products intelligently',
    'Standardises formats across all channels and systems',
    'Validates and enriches incomplete specifications',
    'Organises chaotic data into structured, usable formats',
    'Automates processing at scale - no manual touch required'
  ];

  const discoveryFeatures = [
    'Scans millions of reviews, search trends, and competitor data',
    'Identifies what customers actually want vs what specs say',
    'Finds gaps in your current positioning and messaging',
    'Discovers trending keywords and seasonal opportunities',
    'Maps customer journey touchpoints and content needs',
    'Analyses competitor strengths, weaknesses, and pricing',
    'Builds comprehensive customer persona and use case profiles'
  ];

  const strategicFeatures = [
    'Maps customer benefits to technical specifications',
    'Defines unique value propositions for each product',
    'Creates messaging hierarchy (primary, secondary, proof points)',
    'Determines optimal tone, style, and emotional triggers',
    'Identifies best channels and content formats per audience',
    'Builds content calendars and campaign strategies',
    'Sets KPIs and success metrics for each content piece'
  ];

  const contentOutputs = [
    'Product descriptions (short, medium, long)',
    'Email campaigns (subject lines, body copy, sequences)',
    'Social media posts (platform-optimised)',
    'PPC ad copy (Google, Facebook, Amazon)',
    'SEO-optimised blog content and landing pages',
    'Sales collateral (brochures, presentations, battlecards)',
    'Retail Media content, video scripts, audio ads'
  ];

  const channels = [
    'eCommerce platforms (Shopify, WooCommerce, Magento)',
    'Marketplaces (Amazon, eBay, Etsy)',
    'Social media (Instagram, Facebook, TikTok, LinkedIn)',
    'Email platforms (Mailchimp, Klaviyo, HubSpot)',
    'POS and Tickets systems and in-store displays',
    'Digital Display networks and programmatic advertising'
  ];

  const optimizationFeatures = [
    'Tracks performance across all channels in real-time',
    'A/B tests headlines, descriptions, and calls-to-action',
    'Monitors search rankings and keyword performance',
    'Analyses customer feedback and sentiment',
    'Adjusts content based on seasonal trends and events',
    'Optimises for conversion rate and customer lifetime value',
    'Generates performance reports and improvement recommendations'
  ];

  return (
    <section className="px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
      <div className="content-width">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4 sm:mb-6 text-balance">
            Introducing SalesChef
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The AI engine that transforms raw product specs into a feast of sales-ready content across every channel. 
            Here's how one product becomes your best salesperson everywhere.
          </p>
        </div>
        
        <div className="space-y-12 sm:space-y-16">
          {/* Step 1: Input Processing */}
          <div className="animate-slide-up">
            <FlowPanel
              icon={Upload}
              title="1. Upload your product data → SalesChef cleans and organises it"
              subtitle="Saves you hours of manual cleanup - works at any scale"
              items={inputTypes}
              visualExample={<InputVisual />}
            />
          </div>

          {/* Arrow */}
          <div className="flex justify-center animate-fade-in">
            <div className="w-0.5 h-12 bg-gradient-to-b from-primary/20 via-primary to-primary/20"></div>
          </div>

          {/* Step 2: Discovery */}
          <div className="animate-slide-up">
            <FlowPanel
              icon={Search}
              title="2. SalesChef finds what actually sells — from reviews, keywords, and competitors"
              subtitle="You learn what customers care about - not just what's in the spec"
              items={discoveryFeatures}
              highlight={true}
              visualExample={<DiscoveryVisual />}
            />
          </div>

          {/* Arrow */}
          <div className="flex justify-center animate-fade-in">
            <div className="w-0.5 h-12 bg-gradient-to-b from-primary/20 via-primary to-primary/20"></div>
          </div>

          {/* Step 3: Strategy */}
          <div className="animate-slide-up">
            <FlowPanel
              icon={Brain}
              title="3. SalesChef builds the best way to sell each product — benefits, messaging, tone"
              subtitle="You get smarter positioning and sharper content - automatically"
              items={strategicFeatures}
              visualExample={<StrategyVisual />}
            />
          </div>

          {/* Arrow */}
          <div className="flex justify-center animate-fade-in">
            <div className="w-0.5 h-12 bg-gradient-to-b from-primary/20 via-primary to-primary/20"></div>
          </div>

          {/* Step 4: Content Generation */}
          <div className="animate-slide-up">
            <FlowPanel
              icon={Zap}
              title="4. SalesChef generates all the content you need — text, images, video, audio, more"
              subtitle="SalesChef gives you a full feast of content for every use and channel"
              items={contentOutputs}
              visualExample={<ContentVisual />}
            />
          </div>

          {/* Arrow */}
          <div className="flex justify-center animate-fade-in">
            <div className="w-0.5 h-12 bg-gradient-to-b from-primary/20 via-primary to-primary/20"></div>
          </div>

          {/* Step 5: Distribution */}
          <div className="animate-slide-up">
            <FlowPanel
              icon={Globe}
              title="5. SalesChef pushes content live to all your channels"
              subtitle="Everything goes live immediately, everywhere your customers shop"
              items={channels}
              visualExample={<DistributionVisual />}
            />
          </div>

          {/* Arrow */}
          <div className="flex justify-center animate-fade-in">
            <div className="w-0.5 h-12 bg-gradient-to-b from-primary/20 via-primary to-primary/20"></div>
          </div>

          {/* Step 6: Optimization */}
          <div className="animate-slide-up">
            <FlowPanel
              icon={TrendingUp}
              title="6. SalesChef tracks what works and keeps improving your content"
              subtitle="Your content gets smarter. Automatically."
              items={optimizationFeatures}
              visualExample={<OptimizationVisual />}
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl border border-primary/10 hover:border-primary/20 transition-colors">
            <div className="w-8 h-8 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary" />
            </div>
            <span className="text-primary font-semibold">Ready to see SalesChef in action?</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroducingSalesChef;
