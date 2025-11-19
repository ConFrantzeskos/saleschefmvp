
import { DetailedIndustryData } from '../types/industryTypes';

export const retailData: DetailedIndustryData = {
  name: "Retail",
  emoji: "🛍️",
  title: "🛍️ SalesChef for Retail",
  subtitle: "Transform scattered product data into compelling, conversion-optimized retail experiences. Messy inventory feeds in. Revenue-driving product content out.",
  
  problemsTitle: "Why retail product content is broken — and why SalesChef fixes it",
  problemsDescription: "Modern retail operates across dozens of channels, but most retailers are drowning in fragmented product data:",
  problems: [
    '📊 Product data scattered across suppliers, PLMs, ERPs, spreadsheets',
    '🏷️ Inconsistent categorization and tagging across channels',
    '📱 Manual effort to optimize for each marketplace and platform',
    '🔍 Poor SEO optimization → products don\'t get discovered',
    '📸 Inconsistent imagery and content quality',
    '⏰ Slow time-to-market for new products and seasonal updates',
    '🌐 Disconnected online and offline inventory data',
    '🤖 No AI-ready structured data for emerging shopping experiences'
  ],
  
  consequences: [
    'Lost sales due to poor product discoverability',
    'Higher return rates from inaccurate product descriptions',
    'Expensive manual content operations across channels',
    'Slow response to market trends and seasonal demands',
    'Inconsistent brand experience across touchpoints',
    'Missed opportunities in emerging retail channels',
    'Poor conversion rates from unoptimized product pages'
  ],
  
  realityTitle: "SalesChef: Built for omnichannel retail complexity",
  realityDescription: "SalesChef handles the reality of modern retail: multiple suppliers, countless SKUs, seasonal changes, and the need to be everywhere your customers shop.",
  realityPoints: [
    '🏪 Multiple sales channels → website, marketplaces, social commerce, physical stores',
    '📦 Thousands of products with seasonal variations',
    '🏭 Multiple suppliers with different data formats',
    '🎯 Different content needs per channel → Amazon vs Instagram vs in-store',
    '📈 Constant price and inventory updates',
    '🌍 Multi-region operations with localization needs'
  ],
  
  ingestSources: [
    'PIM systems (Akeneo, inRiver, Salsify)',
    'ERP and inventory management systems',
    'Supplier product feeds and catalogs',
    'E-commerce platforms (Shopify, Magento, BigCommerce)',
    'Marketplace seller tools',
    'DAM systems for imagery and media',
    'Social media content and user-generated content',
    'Customer review and rating platforms'
  ],
  
  // Recommended Persuasion Ladders for Retail
  recommendedLadders: [
    {
      id: 'experience-ladder',
      name: 'Experience Ladder',
      reason: 'Retail success comes from transforming products into memorable experiences',
      example: 'Like Apple Stores: "Product → Try it hands-on → Discover capabilities → Create memories → Become brand advocate"'
    },
    {
      id: 'value-stack',
      name: 'Value Stack Ladder',
      reason: 'Show how product utility multiplies through ecosystems and complementary features',
      example: 'Like Amazon Prime: "Fast shipping (utility) → Video & music (multiplier) → Whole Foods discount (ecosystem) → Switching cost (moat)"'
    },
    {
      id: 'micro-feature-compounding',
      name: 'Micro-Feature Compounding',
      reason: 'Demonstrate how multiple small features create exponential value',
      example: 'Like Swiss Army Knife: "20 tools in one → Replaces separate items → Always prepared → Ultimate convenience"'
    },
    {
      id: 'functional-emotional',
      name: 'Functional-Emotional Ladder',
      reason: 'Convert product features into lifestyle benefits and emotional rewards',
      example: 'Athleisure: "Moisture-wicking fabric → Stay dry during workout → Feel confident → Express active lifestyle"'
    },
    {
      id: 'temporal-ladder',
      name: 'Before-During-After Impact',
      reason: 'Show the complete customer journey and transformation',
      example: 'Home organization: "Cluttered space (before) → Easy storage (during) → Peaceful home (after) → Reduced stress (impact)"'
    }
  ],

  cleaningFeatures: [
    'Product taxonomy standardization across categories',
    'Size, color, and variant normalization',
    'SEO-optimized product titles and descriptions',
    'Brand voice and tone consistency',
    'Marketplace-specific requirement compliance',
    'Image quality validation and optimization',
    'Inventory status synchronization',
    'Price formatting and currency conversion'
  ],
  
  enrichmentFeatures: [
    'Trend-based product positioning and styling advice',
    'Competitive pricing and feature analysis',
    'Customer review sentiment integration',
    'Seasonal and promotional content optimization',
    'Cross-sell and upsell recommendation content',
    'Social media trend incorporation'
  ],
  
  outputChannels: [
    'E-commerce websites and mobile apps',
    'Amazon, eBay, Etsy, and other marketplaces',
    'Social commerce (Instagram, Facebook, TikTok)',
    'Google Shopping and product ads',
    'In-store digital displays and kiosks',
    'Email marketing and newsletters',
    'Print catalogs and promotional materials',
    'Voice shopping assistants'
  ],
  
  businessOutcomes: [
    { metric: '📈 Higher', description: 'conversion rates → optimized product content drives sales' },
    { metric: '🔍 Better', description: 'discoverability → improved SEO and marketplace ranking' },
    { metric: '⚡ Faster', description: 'time-to-market → rapid product launches and updates' },
    { metric: '💰 Lower', description: 'content operations cost → automated multichannel publishing' },
    { metric: '🎯 Consistent', description: 'brand experience → unified messaging across channels' },
    { metric: '📊 Improved', description: 'inventory turnover → data-driven merchandising decisions' }
  ],
  
  whyChooseReasons: [
    'Handles the complexity of omnichannel retail operations',
    'Automates tedious product content optimization',
    'Scales with seasonal demands and product launches',
    'Integrates with existing retail technology stack',
    'Optimizes for both search engines and marketplaces',
    'Reduces manual effort while improving content quality',
    'Future-proofs content for emerging retail channels'
  ],
  
  useCases: [
    {
      useCase: 'Automated marketplace optimization',
      agents: 'Drop, Clean, Draft, Deploy',
      value: 'Higher marketplace rankings and sales'
    },
    {
      useCase: 'Seasonal content refresh',
      agents: 'Detect, Draft, Deploy',
      value: 'Faster response to market trends'
    },
    {
      useCase: 'Cross-platform product syndication',
      agents: 'Deploy',
      value: 'Consistent product experience everywhere'
    },
    {
      useCase: 'SEO-optimized product pages',
      agents: 'Discover.Search, Draft',
      value: 'Increased organic traffic and sales'
    }
  ],
  
  integrations: [
    'E-commerce: Shopify, Magento, WooCommerce, BigCommerce',
    'PIM: Akeneo, inRiver, Salsify, Riversand',
    'Marketplaces: Amazon Seller Central, eBay, Etsy',
    'ERP: SAP, Oracle, NetSuite, Dynamics',
    'Social platforms: Facebook, Instagram, TikTok',
    'Marketing: Klaviyo, Mailchimp, Omnisend',
    'Analytics: Google Analytics, Adobe Analytics',
    'DAM: Cloudinary, Bynder, Adobe AEM Assets'
  ]
};
