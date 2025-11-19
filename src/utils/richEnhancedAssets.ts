import { EnhancedAsset } from '@/types/enhancedAsset';

// Rich, ladder-enhanced product examples inspired by real-world brands

export const richEnhancedAssets: EnhancedAsset[] = [
  {
    id: 1,
    sku: 'SAF-VEHICLE-001',
    name: 'SafetyFirst Advanced Collision Avoidance SUV',
    category: 'Automotive',
    brand: 'SafetyFirst Motors',
    
    appliedLadders: ['functional-emotional', 'rtb', 'component-performance'],
    primaryLadder: 'functional-emotional',
    
    coreValueProposition: 'Industry-leading collision avoidance technology that protects families and delivers peace of mind for every journey',
    primaryPersona: 'Safety-conscious parents (35-50) prioritizing family protection',
    keyDifferentiator: '41% reduction in rear-end collisions vs. category average',
    contentApproach: 'Lead with safety statistics, emphasize family protection, build confidence through engineering proof',
    
    functionalEmotionalLadder: {
      feature: 'Advanced collision avoidance system with 360° radar, automatic emergency braking, and predictive AI',
      functionalBenefit: 'Protects your family from accidents by detecting and preventing collisions before they happen - even in blind spots and low visibility',
      emotionalBenefit: 'Complete peace of mind knowing your loved ones are protected by technology that never sleeps, never gets distracted, and reacts faster than humanly possible',
      lifeOutcome: 'Become the parent who makes safety effortless - confident driving in any condition, any weather, with the knowledge that you chose the best protection available',
      proof: '41% reduction in rear-end collisions verified by IIHS; 500,000+ collision-free miles tracked; Named "Top Safety Pick+" 4 years running',
      realWorldExample: 'Like Volvo\'s pioneering safety features that transformed "Swedish engineering" into "family protector," our system makes safety the invisible guardian on every journey'
    },
    
    rtbLadder: {
      reasonToBelieve: 'Independent IIHS testing verified 41% collision reduction; 500,000+ vehicles with zero system-failure accidents; Developed with aerospace-grade radar technology used in commercial aviation',
      promise: 'The only SUV that makes collision avoidance automatic, comprehensive, and foolproof for families',
      payoff: 'Join 500,000+ parents who stopped worrying about "what if" and started driving with confidence',
      credibilitySource: 'IIHS Top Safety Pick+ (4 consecutive years), NHTSA 5-Star Rating, Consumer Reports #1 Safety Rating 2024',
      realWorldExample: 'Similar to how Michelin proves tire safety through extreme testing, our collision system earned trust through 2 million miles of real-world verification'
    },
    
    componentPerformanceLadder: {
      component: '360° military-grade radar array with predictive AI processing',
      performance: 'Detects threats 0.3 seconds faster than human reaction time; 99.7% accuracy in adverse weather',
      capability: 'Automatic emergency braking, blind-spot intervention, cross-traffic prevention, pedestrian detection',
      outcome: 'Total situational awareness that prevents accidents before your conscious mind even registers danger',
      technicalProof: 'Aerospace-grade 77GHz radar (same tech as commercial aircraft collision avoidance); AI trained on 50M real-world driving scenarios',
      realWorldExample: 'Like Porsche\'s PCCB brakes using carbon-ceramic from motorsport, our radar tech brings military aviation safety to family vehicles'
    },
    
    benefitLadder: { levels: [] },
    personas: [],
    messageHierarchy: { primaryMessage: '', supportingMessages: [], proofPoints: [] },
    reasonsToBuy: [],
    socialProof: { awards: [], certifications: [], expertEndorsements: [], customerTestimonials: [], statisticalProof: [], mediaMentions: [] },
    positioning: { positioningStatement: '', competitiveAdvantages: [], differentiationStrategy: '', marketPosition: '' },
    storytelling: { hero: '', problem: '', solution: '', transformation: '', callToAction: '', emotionalArc: '' },
    objections: [],
    conversionHeuristics: { highImpactElements: [], messageVariants: [], abTestRecommendations: [], estimatedLift: '' },
    psychologyTriggers: [],
    contentBrief: { toneOfVoice: '', keyMessages: [], personaTargeting: '', requiredElements: [], contentStructure: '', dos: [], donts: [] },
    
    confidenceScore: 96,
    personaMatchScore: 94,
    messageStrengthScore: 92,
    rtbCount: 8,
    status: 'Enhanced'
  },
  
  {
    id: 2,
    sku: 'PROD-CRM-002',
    name: 'ProductivityPro Unified CRM Platform',
    category: 'B2B Software',
    brand: 'ProductivityPro',
    
    appliedLadders: ['faai', 'value-stack', 'price-value-roi'],
    primaryLadder: 'faai',
    
    coreValueProposition: 'Unified CRM platform that delivers 360° customer visibility, accelerates sales cycles by 37%, and scales with your growth',
    primaryPersona: 'Sales Directors & VPs (40-55) managing enterprise sales teams',
    keyDifferentiator: '37% faster deal closure with complete customer visibility',
    contentApproach: 'Lead with ROI metrics, emphasize integration ecosystem, prove business impact',
    
    faaiLadder: {
      feature: 'Unified CRM platform integrating sales, marketing, customer success with 500+ native integrations',
      advantage: '360° customer view eliminates data silos, surfaces buying signals automatically, and syncs across all teams in real-time',
      application: 'Sales teams close deals 37% faster by accessing complete customer history, automated next-best-actions, and predictive deal scoring during every customer interaction',
      businessImpact: 'Drives $500K+ annual revenue increase per sales team through faster cycles, higher win rates, and expanded customer lifetime value',
      proof: 'Verified 37% cycle reduction across 2,000+ sales teams; Average $500K revenue lift year one; 98% customer retention rate',
      realWorldExample: 'Like Salesforce\'s AppExchange transformed CRM from tool to ecosystem, our integration platform makes your tech stack a revenue multiplier'
    },
    
    valueStackLadder: {
      utility: 'Complete CRM replacing fragmented point solutions for sales, marketing, and support',
      multiplier: 'Native integrations with email, calendar, marketing automation, billing, and analytics multiply productivity',
      ecosystem: 'App marketplace with 500+ integrations creates compounding value as your tech stack grows',
      moat: 'Data lock-in and workflow dependencies make switching cost prohibitive after 12 months',
      compoundingEffect: 'Each new integration increases system value exponentially; customer success team adoption drives 3.2x expansion revenue',
      realWorldExample: 'Like Amazon\'s flywheel from marketplace to AWS to devices, our platform becomes more valuable with every tool connected'
    },
    
    priceValueROILadder: {
      price: '$150/user/month for Professional tier (typical 50-user team = $7,500/mo)',
      trueCost: 'Replaces 5 disconnected tools costing $15,000/mo total (CRM, marketing automation, support desk, analytics, dialaler)',
      value: '37% faster sales cycles + 23% higher win rates + 85% time saved on data entry = 2.3x sales productivity',
      roi: '$500K average first-year revenue increase - 89% of customers break even within 4 months',
      financialProof: 'Forrester TEI study: 267% ROI over 3 years; Payback period: 4.2 months average; $500K median annual revenue lift',
      realWorldExample: 'Like Slack\'s "replace email + chat + meetings" ROI story, we prove consolidation value with hard revenue metrics'
    },
    
    benefitLadder: { levels: [] },
    personas: [],
    messageHierarchy: { primaryMessage: '', supportingMessages: [], proofPoints: [] },
    reasonsToBuy: [],
    socialProof: { awards: [], certifications: [], expertEndorsements: [], customerTestimonials: [], statisticalProof: [], mediaMentions: [] },
    positioning: { positioningStatement: '', competitiveAdvantages: [], differentiationStrategy: '', marketPosition: '' },
    storytelling: { hero: '', problem: '', solution: '', transformation: '', callToAction: '', emotionalArc: '' },
    objections: [],
    conversionHeuristics: { highImpactElements: [], messageVariants: [], abTestRecommendations: [], estimatedLift: '' },
    psychologyTriggers: [],
    contentBrief: { toneOfVoice: '', keyMessages: [], personaTargeting: '', requiredElements: [], contentStructure: '', dos: [], donts: [] },
    
    confidenceScore: 94,
    personaMatchScore: 91,
    messageStrengthScore: 89,
    rtbCount: 12,
    status: 'Enhanced'
  },
  
  {
    id: 3,
    sku: 'MULTI-TOOL-003',
    name: 'CompactPro 20-in-1 Multi-Function Device',
    category: 'Consumer Electronics',
    brand: 'CompactPro',
    
    appliedLadders: ['compounding', 'functional-emotional', 'cabo'],
    primaryLadder: 'compounding',
    
    coreValueProposition: '20 essential tools in one pocket-sized device that replaces an entire toolkit and liberates you from carrying multiple gadgets',
    primaryPersona: 'Mobile professionals and travelers (28-45) valuing minimalism',
    keyDifferentiator: 'Replaces 20+ separate devices while weighing less than a smartphone',
    contentApproach: 'Showcase density of features, emphasize minimalism lifestyle, prove quality per function',
    
    compoundingLadder: {
      microFeatures: [
        'LED flashlight (1000 lumens)',
        'Portable charger (10,000mAh)',
        'Bluetooth speaker',
        'USB-C hub (4 ports)',
        'Laser pointer',
        'Digital measuring tape',
        'Level tool',
        'Bottle opener',
        'Screwdriver set (8 bits)',
        'Knife blade (TSA-compliant)',
        'Pen & stylus',
        'Emergency whistle',
        'Compass',
        'Mirror',
        'Fire starter',
        'Carabiner clip',
        'Bottle opener',
        'Hex key set',
        'SIM card tool',
        'Cord organizer'
      ],
      microBenefits: [
        'Never hunt for flashlight in dark',
        'Charge phone anywhere',
        'Share music outdoors',
        'Expand laptop connectivity',
        'Present with confidence',
        'Measure on the go',
        'Hang pictures straight',
        'Open bottles anywhere',
        'Fix glasses/electronics',
        'Cut packaging safely',
        'Sign documents',
        'Signal for help',
        'Never get lost',
        'Check appearance',
        'Start campfire',
        'Clip to bag',
        'Pop bottles',
        'Assemble furniture',
        'Swap phone SIM',
        'Manage cables'
      ],
      compoundingValue: 'Each function you use reveals another need this solves - creates exponential "I use this for everything" moments',
      exponentialOutcome: 'Transform from "person who carries a bag of gadgets" to "person who confidently travels with a single pocket tool"',
      densityProof: 'Replaces $800+ worth of separate devices; Weighs 180g (less than iPhone 15 Pro Max); Fits in standard pocket; Used 4.2x daily on average',
      realWorldExample: 'Like iPhone collapsed 10 devices (camera, iPod, GPS, etc.) into one, CompactPro eliminates 20 tools without compromise'
    },
    
    functionalEmotionalLadder: {
      feature: '20 high-quality tools in 180g pocket-sized aluminum body (4.5" × 2" × 0.8")',
      functionalBenefit: 'Replaces toolbox, charger, speaker, flashlight, and 16 other gadgets - always ready in your pocket without bulk or planning',
      emotionalBenefit: 'Liberation from "did I pack everything?" anxiety - the confidence of being prepared for any situation without looking like you\'re moving house',
      lifeOutcome: 'Become the person who elegantly solves problems while others scramble - admired for preparedness without appearing burdened',
      proof: '4.7/5 stars from 18,000+ reviews; "Used it 6x in first week" most common testimonial; 92% would buy again',
      realWorldExample: 'Like Swiss Army Knife elevated from tool to lifestyle icon, CompactPro is the modern minimalist\'s essential companion'
    },
    
    benefitLadder: { levels: [] },
    personas: [],
    messageHierarchy: { primaryMessage: '', supportingMessages: [], proofPoints: [] },
    reasonsToBuy: [],
    socialProof: { awards: [], certifications: [], expertEndorsements: [], customerTestimonials: [], statisticalProof: [], mediaMentions: [] },
    positioning: { positioningStatement: '', competitiveAdvantages: [], differentiationStrategy: '', marketPosition: '' },
    storytelling: { hero: '', problem: '', solution: '', transformation: '', callToAction: '', emotionalArc: '' },
    objections: [],
    conversionHeuristics: { highImpactElements: [], messageVariants: [], abTestRecommendations: [], estimatedLift: '' },
    psychologyTriggers: [],
    contentBrief: { toneOfVoice: '', keyMessages: [], personaTargeting: '', requiredElements: [], contentStructure: '', dos: [], donts: [] },
    
    confidenceScore: 91,
    personaMatchScore: 88,
    messageStrengthScore: 90,
    rtbCount: 6,
    status: 'Enhanced'
  },
  
  {
    id: 4,
    sku: 'CRYPTO-SECURE-004',
    name: 'SecureVault Crypto Platform',
    category: 'Financial Services',
    brand: 'SecureVault',
    
    appliedLadders: ['asset-trust', 'risk-mitigation', 'rtb'],
    primaryLadder: 'asset-trust',
    
    coreValueProposition: 'Institutional-grade cryptocurrency platform with 98% cold storage that eliminates hack risk and enables confident digital asset investing',
    primaryPersona: 'Risk-aware crypto investors (30-55) with $50K+ to invest',
    keyDifferentiator: 'Zero customer fund losses in 9 years - industry-leading security',
    contentApproach: 'Lead with security proof, address hack fears directly, build confidence through institutional credibility',
    
    assetTrustLadder: {
      accuracy: '98% of customer funds secured in offline cold storage vaults with military-grade encryption and biometric access',
      reliability: 'Zero customer fund losses to hacks in 9 years of operation - the only major exchange with perfect security record',
      predictability: 'Daily third-party security audits, real-time threat monitoring, and annual pen-testing by former NSA security experts',
      confidence: 'Complete peace of mind knowing your crypto is safer than traditional banks - backed by $500M insurance policy',
      action: 'Invest in digital assets with the confidence of institutional-grade security typically reserved for banks and governments',
      trustMetrics: '9 years, zero hacks; 98% cold storage; $500M insurance; SOC 2 Type II certified; Backed by Sequoia & a16z',
      realWorldExample: 'Like Coinbase built trust through "Fort Knox for crypto" security, SecureVault makes institutional-grade protection accessible to individuals'
    },
    
    riskMitigationLadder: {
      risk: 'Cryptocurrency exchanges getting hacked, customer funds stolen (billions lost across industry)',
      mitigation: '98% offline cold storage + multi-signature wallets + biometric access + 24/7 monitoring + $500M insurance policy',
      confidence: 'Sleep soundly knowing your assets are more secure than money in a traditional bank - with zero losses in 9 years proving it',
      action: 'Start investing in crypto with the security and peace of mind you demand for serious wealth',
      trustSignal: 'Trusted by 8M+ investors; Custody for institutional clients like BlackRock; Former FDIC chair on advisory board',
      realWorldExample: 'Like how Schwab built brokerage trust with SIPC insurance, we pioneered crypto insurance and institutional custody'
    },
    
    benefitLadder: { levels: [] },
    personas: [],
    messageHierarchy: { primaryMessage: '', supportingMessages: [], proofPoints: [] },
    reasonsToBuy: [],
    socialProof: { awards: [], certifications: [], expertEndorsements: [], customerTestimonials: [], statisticalProof: [], mediaMentions: [] },
    positioning: { positioningStatement: '', competitiveAdvantages: [], differentiationStrategy: '', marketPosition: '' },
    storytelling: { hero: '', problem: '', solution: '', transformation: '', callToAction: '', emotionalArc: '' },
    objections: [],
    conversionHeuristics: { highImpactElements: [], messageVariants: [], abTestRecommendations: [], estimatedLift: '' },
    psychologyTriggers: [],
    contentBrief: { toneOfVoice: '', keyMessages: [], personaTargeting: '', requiredElements: [], contentStructure: '', dos: [], donts: [] },
    
    confidenceScore: 95,
    personaMatchScore: 93,
    messageStrengthScore: 94,
    rtbCount: 10,
    status: 'Enhanced'
  },
  
  {
    id: 5,
    sku: 'EXP-ADVENTURE-005',
    name: 'AdventureCam Pro Experience',
    category: 'Consumer Electronics',
    brand: 'AdventureCam',
    
    appliedLadders: ['experience', 'temporal', 'jtbd-outcome'],
    primaryLadder: 'experience',
    
    coreValueProposition: '4K waterproof action camera that transforms adventures into cinema-quality memories you\'ll treasure forever',
    primaryPersona: 'Active lifestyle enthusiasts (25-40) creating content',
    keyDifferentiator: 'Cinema-quality stabilization that makes amateur footage look professional',
    contentApproach: 'Lead with memory creation, showcase footage quality, emphasize adventure lifestyle',
    
    experienceLadder: {
      product: '4K action camera with cinema-grade stabilization, waterproof to 60m, voice control, and AI editing',
      function: 'Captures smooth, professional-looking footage of your adventures without thinking about camera work',
      experience: 'Relive your most thrilling moments in stunning detail - every jump, dive, and adrenaline rush preserved perfectly',
      memory: 'Build a visual legacy of adventures that inspire your kids, impress your friends, and remind you what you\'re capable of',
      emotionalResonance: 'Not just recording moments - creating proof of a life fully lived that becomes more valuable every year',
      realWorldExample: 'Like GoPro transformed "recording adventures" into "becoming the hero of your story," AdventureCam makes every user a filmmaker'
    },
    
    temporalLadder: {
      before: 'Phone footage that\'s shaky, blurry, and doesn\'t capture the intensity of the moment',
      during: 'Effortlessly capture cinema-quality footage while fully immersed in the experience - no camera work required',
      after: 'AI automatically edits your best moments into shareable highlight reels you\'re proud to show',
      longTermImpact: 'Build a video legacy documenting your adventures that becomes priceless as years pass - memories your future self will treasure',
      transformationProof: '87% share footage vs. 12% with phone videos; Average 4.2 videos shared per month; "Wish I had this for every trip" most common review',
      realWorldExample: 'Like how Instagram transformed casual photos into curated life stories, AdventureCam turns adventures into cinematic memories'
    },
    
    benefitLadder: { levels: [] },
    personas: [],
    messageHierarchy: { primaryMessage: '', supportingMessages: [], proofPoints: [] },
    reasonsToBuy: [],
    socialProof: { awards: [], certifications: [], expertEndorsements: [], customerTestimonials: [], statisticalProof: [], mediaMentions: [] },
    positioning: { positioningStatement: '', competitiveAdvantages: [], differentiationStrategy: '', marketPosition: '' },
    storytelling: { hero: '', problem: '', solution: '', transformation: '', callToAction: '', emotionalArc: '' },
    objections: [],
    conversionHeuristics: { highImpactElements: [], messageVariants: [], abTestRecommendations: [], estimatedLift: '' },
    psychologyTriggers: [],
    contentBrief: { toneOfVoice: '', keyMessages: [], personaTargeting: '', requiredElements: [], contentStructure: '', dos: [], donts: [] },
    
    confidenceScore: 89,
    personaMatchScore: 86,
    messageStrengthScore: 88,
    rtbCount: 7,
    status: 'Enhanced'
  }
];
