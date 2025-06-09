
export const industryData = {
  retail: {
    name: 'Retail',
    emoji: '🛍️',
    dataSources: [
      'Product catalogues, inventory feeds, supplier data sheets',
      'PIM systems, ERP data, pricing tables',
      'Customer reviews, competitor pricing, seasonal trends',
      'Brand guidelines, marketing assets, compliance documents'
    ],
    cleaningExamples: [
      'Size and colour variant standardisation',
      'Price formatting across currencies and regions',
      'Category mapping and taxonomy alignment',
      'Brand voice consistency across product descriptions'
    ],
    enrichmentExamples: [
      'Competitive pricing insights and positioning',
      'Seasonal trend analysis and recommendations',
      'Customer sentiment from reviews and social media',
      'Cross-sell and upsell product associations'
    ],
    outputExamples: [
      'E-commerce product pages with rich descriptions',
      'Marketplace feeds (Amazon, eBay, Google Shopping)',
      'Social commerce content and advertising copy',
      'In-store digital displays and print materials'
    ],
    useCases: [
      {
        useCase: 'New product launch content',
        agents: 'Drop, Define, Draft, Diligence, Deploy',
        value: 'Time-to-market reduced from weeks to days'
      },
      {
        useCase: 'Seasonal campaign automation',
        agents: 'Discover.Search, Draft, Deploy',
        value: 'Automated seasonal content updates'
      },
      {
        useCase: 'Multi-marketplace syndication',
        agents: 'Deploy agent multi-target',
        value: 'Consistent product presence across channels'
      },
      {
        useCase: 'Price and promotion updates',
        agents: 'Detect, Draft, Deploy',
        value: 'Real-time pricing consistency'
      }
    ],
    seoKeywords: [
      'AI-driven retail content automation',
      'automated product description generation',
      'multi-channel retail SEO',
      'dynamic product content publishing'
    ]
  },
  'travel-tourism': {
    name: 'Travel & Tourism',
    emoji: '✈️',
    dataSources: [
      'Operator schedules, booking systems, availability feeds',
      'Property data, amenity lists, location information',
      'Customer reviews, travel guides, local event data',
      'Compliance documents, safety protocols, regulatory requirements'
    ],
    cleaningExamples: [
      'Date and time standardisation across time zones',
      'Multi-language location and amenity descriptions',
      'Price formatting for different currencies and markets',
      'Safety and accessibility information validation'
    ],
    enrichmentExamples: [
      'Local weather and seasonal activity recommendations',
      'Cultural insights and travel tips by destination',
      'Real-time availability and dynamic pricing',
      'Customer review sentiment and highlight extraction'
    ],
    outputExamples: [
      'Travel booking websites and mobile apps',
      'Tourism board marketing materials',
      'Travel agent sales tools and itineraries',
      'Social media content and travel influencer packages'
    ],
    useCases: [
      {
        useCase: 'Dynamic itinerary generation',
        agents: 'Drop, Define, Draft, Deploy',
        value: 'Personalised travel experiences at scale'
      },
      {
        useCase: 'Multi-language destination content',
        agents: 'Draft + Translate agents',
        value: 'Global market reach with localised content'
      },
      {
        useCase: 'Real-time availability updates',
        agents: 'Detect, Deploy',
        value: 'Reduced booking conflicts and improved customer experience'
      },
      {
        useCase: 'Seasonal promotion campaigns',
        agents: 'Discover.Search, Draft, Deploy',
        value: 'Automated seasonal marketing with local insights'
      }
    ],
    seoKeywords: [
      'AI-driven travel content automation',
      'automated tourism experience content',
      'multi-language travel SEO',
      'dynamic itinerary and experience publishing'
    ]
  },
  'media-entertainment': {
    name: 'Media & Entertainment',
    emoji: '🎬',
    dataSources: [
      'Media asset metadata, content libraries, production schedules',
      'Audience analytics, viewing patterns, engagement metrics',
      'Rights management data, licensing agreements, territorial restrictions',
      'Cast and crew information, production notes, marketing assets'
    ],
    cleaningExamples: [
      'Metadata standardisation across content formats',
      'Rights and licensing territory validation',
      'Content rating and classification alignment',
      'Multi-platform format and quality specifications'
    ],
    enrichmentExamples: [
      'Audience sentiment analysis and engagement predictions',
      'Similar content recommendations and cross-promotion opportunities',
      'Trending topics and cultural relevance scoring',
      'Localisation insights for international distribution'
    ],
    outputExamples: [
      'Streaming platform content pages and recommendations',
      'Social media promotional content and trailers',
      'Press kits and marketing materials for distributors',
      'TV guide listings and programme descriptions'
    ],
    useCases: [
      {
        useCase: 'Content catalogue optimisation',
        agents: 'Drop, Define, Draft, Diligence',
        value: 'Improved content discoverability and engagement'
      },
      {
        useCase: 'Multi-platform content syndication',
        agents: 'Deploy agent multi-target',
        value: 'Consistent content presence across streaming platforms'
      },
      {
        useCase: 'Automated trailer and promo creation',
        agents: 'Draft, Generate, Deploy',
        value: 'Reduced production time and costs for marketing assets'
      },
      {
        useCase: 'International content localisation',
        agents: 'Draft + Translate agents',
        value: 'Faster global content rollouts'
      }
    ],
    seoKeywords: [
      'AI content enrichment for media assets',
      'metadata optimisation for entertainment catalogues',
      'automated video content packaging',
      'AI-driven media asset management'
    ]
  },
  finance: {
    name: 'Finance',
    emoji: '💰',
    dataSources: [
      'Product specifications, regulatory filings, compliance documents',
      'Market data, pricing models, risk assessments',
      'Customer communications, service agreements, terms and conditions',
      'Regulatory updates, industry guidelines, audit requirements'
    ],
    cleaningExamples: [
      'Financial terminology standardisation and validation',
      'Regulatory compliance checking across jurisdictions',
      'Risk disclosure formatting and accessibility',
      'Multi-language financial product descriptions'
    ],
    enrichmentExamples: [
      'Market performance data and trend analysis',
      'Regulatory change impact assessments',
      'Customer education content and explainers',
      'Competitive product positioning and comparisons'
    ],
    outputExamples: [
      'Financial product websites and comparison tools',
      'Regulatory filing documents and disclosures',
      'Customer education materials and FAQs',
      'Sales enablement tools and advisor resources'
    ],
    useCases: [
      {
        useCase: 'Regulatory compliance automation',
        agents: 'Diligence, QA Validator, Audit logs',
        value: 'Reduced legal risk and faster regulatory approvals'
      },
      {
        useCase: 'Product disclosure generation',
        agents: 'Drop, Define, Draft, Diligence',
        value: 'Consistent, compliant product documentation'
      },
      {
        useCase: 'Multi-jurisdiction content adaptation',
        agents: 'Draft + Translate + Compliance agents',
        value: 'Efficient global product launches'
      },
      {
        useCase: 'Customer education content',
        agents: 'Draft, Discover.Search, Deploy',
        value: 'Improved customer understanding and satisfaction'
      }
    ],
    seoKeywords: [
      'AI compliance-ready financial content',
      'automated financial product disclosures',
      'SEO for financial services',
      'audit-ready content automation for finance'
    ]
  },
  'industrial-manufacturing': {
    name: 'Industrial & Manufacturing',
    emoji: '🏭',
    dataSources: [
      'Technical specifications, CAD files, engineering documentation',
      'Supplier data, material certificates, quality standards',
      'Installation guides, maintenance schedules, safety protocols',
      'Regulatory compliance documents, industry certifications'
    ],
    cleaningExamples: [
      'Technical specification standardisation and units conversion',
      'Safety and compliance data validation',
      'Multi-language technical documentation',
      'Product classification and categorisation alignment'
    ],
    enrichmentExamples: [
      'Industry application examples and use case scenarios',
      'Compatibility information and system integration guides',
      'Performance benchmarks and comparison data',
      'Maintenance and lifecycle cost calculations'
    ],
    outputExamples: [
      'B2B product catalogues and technical datasheets',
      'Distributor portals and partner resources',
      'Installation and maintenance documentation',
      'Trade show materials and technical presentations'
    ],
    useCases: [
      {
        useCase: 'Technical documentation automation',
        agents: 'Drop, Define, Draft, QA Validator',
        value: 'Consistent, accurate technical content at scale'
      },
      {
        useCase: 'Multi-language product catalogues',
        agents: 'Draft + Translate agents',
        value: 'Global market reach with technical accuracy'
      },
      {
        useCase: 'Distributor content packaging',
        agents: 'Deploy agent multi-target',
        value: 'Improved distributor performance and consistency'
      },
      {
        useCase: 'Compliance documentation updates',
        agents: 'Detect, Diligence, Deploy',
        value: 'Automated regulatory compliance maintenance'
      }
    ],
    seoKeywords: [
      'automated product data enrichment for manufacturing',
      'industrial catalogue automation',
      'multi-channel product spec publishing',
      'AI-driven technical content'
    ]
  },
  'healthcare-medical': {
    name: 'Healthcare & Medical',
    emoji: '🏥',
    dataSources: [
      'Clinical data, medical device specifications, research studies',
      'Regulatory approvals, safety profiles, usage guidelines',
      'Patient information leaflets, healthcare provider resources',
      'Compliance documentation, audit trails, quality certifications'
    ],
    cleaningExamples: [
      'Clinical terminology validation and standardisation',
      'Patient-friendly language conversion and readability optimisation',
      'Multi-regulatory format compliance (FDA, EMA, Health Canada)',
      'Medical disclaimer and safety information formatting'
    ],
    enrichmentExamples: [
      'Clinical evidence summaries and efficacy data',
      'Patient education content and condition explanations',
      'Healthcare provider training materials and protocols',
      'Adverse event monitoring and safety updates'
    ],
    outputExamples: [
      'Medical device websites and product information',
      'Patient education portals and healthcare resources',
      'Healthcare provider training materials and guidelines',
      'Regulatory submission documents and clinical summaries'
    ],
    useCases: [
      {
        useCase: 'Regulatory submission automation',
        agents: 'Drop, Define, Diligence, QA Validator',
        value: 'Faster regulatory approvals with compliant documentation'
      },
      {
        useCase: 'Patient education content',
        agents: 'Draft, Simplify, Translate agents',
        value: 'Improved patient understanding and compliance'
      },
      {
        useCase: 'Multi-regulatory compliance',
        agents: 'Diligence, Deploy multi-region',
        value: 'Efficient global product launches'
      },
      {
        useCase: 'Healthcare provider resources',
        agents: 'Drop, Draft, Deploy',
        value: 'Comprehensive, up-to-date clinical resources'
      }
    ],
    seoKeywords: [
      'AI medical content compliance',
      'automated healthcare product content',
      'patient-friendly content optimisation',
      'regulatory-compliant medical marketing'
    ]
  },
  'real-estate': {
    name: 'Real Estate',
    emoji: '🏠',
    dataSources: [
      'Property listings, MLS data, market comparables',
      'Property photos, floor plans, virtual tour assets',
      'Neighbourhood data, school districts, local amenities',
      'Market trends, pricing history, investment analysis'
    ],
    cleaningExamples: [
      'Property feature standardisation and categorisation',
      'Location data validation and geocoding accuracy',
      'Price formatting and market comparison alignment',
      'Multi-language property descriptions for international markets'
    ],
    enrichmentExamples: [
      'Neighbourhood insights and lifestyle information',
      'Market trend analysis and investment potential',
      'School ratings and local amenity scoring',
      'Comparable property analysis and pricing recommendations'
    ],
    outputExamples: [
      'Real estate listing websites and mobile apps',
      'Property marketing materials and brochures',
      'Investment analysis reports and market summaries',
      'Social media property showcases and virtual tours'
    ],
    useCases: [
      {
        useCase: 'Automated listing optimisation',
        agents: 'Drop, Define, Draft, Deploy',
        value: 'Higher engagement and faster property sales'
      },
      {
        useCase: 'Market analysis automation',
        agents: 'Discover.Search, Draft, Deploy',
        value: 'Data-driven insights for buyers and sellers'
      },
      {
        useCase: 'Multi-portal syndication',
        agents: 'Deploy agent multi-target',
        value: 'Maximum property exposure across platforms'
      },
      {
        useCase: 'Investment property packaging',
        agents: 'Drop, Draft, Generate, Deploy',
        value: 'Professional investment presentations at scale'
      }
    ],
    seoKeywords: [
      'AI-powered real estate listing content',
      'automated property content generation',
      'SEO for real estate portals',
      'multi-channel real estate marketing automation'
    ]
  },
  automotive: {
    name: 'Automotive',
    emoji: '🚗',
    dataSources: [
      'Vehicle specifications, inventory data, pricing information',
      'Manufacturer data, dealer inventory, service records',
      'Market values, trade-in assessments, financing options',
      'Customer reviews, safety ratings, recall information'
    ],
    cleaningExamples: [
      'Vehicle specification standardisation and validation',
      'Pricing format consistency across markets and dealers',
      'Feature and option categorisation alignment',
      'Multi-language vehicle descriptions and marketing copy'
    ],
    enrichmentExamples: [
      'Market value analysis and pricing recommendations',
      'Competitive feature comparisons and positioning',
      'Customer review sentiment and highlight extraction',
      'Financing and insurance option integration'
    ],
    outputExamples: [
      'Automotive listing websites and dealer portals',
      'Vehicle comparison tools and configurators',
      'Dealer marketing materials and sales presentations',
      'Mobile apps and social media vehicle showcases'
    ],
    useCases: [
      {
        useCase: 'Inventory content automation',
        agents: 'Drop, Define, Draft, Deploy',
        value: 'Faster inventory turnover with compelling descriptions'
      },
      {
        useCase: 'Multi-dealer syndication',
        agents: 'Deploy agent multi-target',
        value: 'Consistent vehicle presentation across dealer networks'
      },
      {
        useCase: 'Market pricing optimisation',
        agents: 'Discover.Search, Draft, Deploy',
        value: 'Data-driven pricing strategies and market positioning'
      },
      {
        useCase: 'Customer education content',
        agents: 'Draft, Generate, Deploy',
        value: 'Informed customers and improved sales conversions'
      }
    ],
    seoKeywords: [
      'automated automotive inventory content',
      'AI car listing SEO',
      'vehicle feature and spec enrichment',
      'multi-channel automotive marketing content'
    ]
  }
};
