import { EnhancedAsset } from '@/types/enhancedAsset';

export const generateSampleEnhancedAssets = (): EnhancedAsset[] => {
  return [
    {
      id: 1,
      sku: 'WH-1000XM5',
      name: 'Premium Wireless Noise Cancelling Headphones',
      category: 'Audio',
      brand: 'Sony',
      
      coreValueProposition: 'Industry-leading noise cancellation meets premium comfort for the modern professional who demands uninterrupted focus',
      primaryPersona: 'The Focused Professional',
      keyDifferentiator: '30-hour battery life with best-in-class ANC technology',
      contentApproach: 'Emphasize productivity gains and premium quality experience',
      
      benefitLadder: {
        levels: [
          {
            feature: '30mm driver units with LDAC codec',
            functionalBenefit: 'Crystal-clear audio reproduction across all frequencies',
            emotionalBenefit: 'Confidence in hearing every detail that matters',
            value: 'Professional pride in quality equipment',
            proof: '92% of audio engineers rate sound quality as "exceptional"'
          },
          {
            feature: 'Industry-leading noise cancellation',
            functionalBenefit: 'Complete isolation from distracting environments',
            emotionalBenefit: 'Peace of mind and mental clarity',
            value: 'Respect for focused, uninterrupted work',
            proof: 'Users report 78% increase in productive hours'
          },
          {
            feature: '30-hour battery life',
            functionalBenefit: 'Week-long usage without charging',
            emotionalBenefit: 'Freedom from battery anxiety',
            value: 'Reliability you can trust',
            proof: '89% never worry about charging during workweek'
          }
        ]
      },
      
      personas: [
        {
          name: 'The Focused Professional',
          description: '35-45 year old executive or knowledge worker in open office environment',
          demographics: 'Age 35-45, $80K+ income, urban/suburban, professional career',
          psychographics: 'Values productivity, quality, and work-life balance. Tech-savvy early adopter.',
          buyingMotivations: [
            'Need to block out office distractions',
            'Want premium quality that reflects professional status',
            'Seeking long-term investment in productivity tools'
          ],
          painPoints: [
            'Open office noise reduces focus',
            'Cheap headphones break or sound poor',
            'Frequent charging interrupts workflow'
          ],
          decisionCriteria: [
            'Noise cancellation effectiveness',
            'Audio quality and comfort',
            'Battery life and durability',
            'Brand reputation'
          ],
          messagingPreferences: 'Professional, evidence-based, focusing on ROI and productivity benefits',
          matchScore: 94
        },
        {
          name: 'The Frequent Traveler',
          description: 'Business traveler or digital nomad who spends significant time in transit',
          demographics: 'Age 28-50, frequent flyer status, globally mobile',
          psychographics: 'Values portability, comfort, and premium experiences. Efficiency-focused.',
          buyingMotivations: [
            'Need reliable noise cancellation for flights',
            'Want comfort for long-duration wear',
            'Seeking hassle-free travel companion'
          ],
          painPoints: [
            'Airplane noise causes fatigue',
            'Poor battery life requires mid-flight charging',
            'Bulky headphones difficult to pack'
          ],
          decisionCriteria: [
            'Portability and fold-ability',
            'Battery life for long flights',
            'Comfort for extended wear',
            'Quick charge capability'
          ],
          messagingPreferences: 'Travel-focused, emphasizing comfort and reliability in transit',
          matchScore: 88
        },
        {
          name: 'The Audiophile',
          description: 'Music enthusiast who prioritizes sound quality above all',
          demographics: 'Age 25-55, disposable income for premium audio, music-focused lifestyle',
          psychographics: 'Passionate about audio quality, researches extensively, values craftsmanship',
          buyingMotivations: [
            'Uncompromising sound quality',
            'Hi-res audio codec support',
            'Premium build and materials'
          ],
          painPoints: [
            'Bluetooth headphones often compromise on quality',
            'Need both wireless convenience and wired fidelity',
            'Poor frequency response in consumer headphones'
          ],
          decisionCriteria: [
            'Audio codec support (LDAC, aptX HD)',
            'Frequency response and driver quality',
            'Professional reviews and measurements',
            'Wired option availability'
          ],
          messagingPreferences: 'Technical, detailed specifications, emphasizing audio engineering excellence',
          matchScore: 91
        }
      ],
      
      messageHierarchy: {
        primaryMessage: 'Silence the world. Amplify your focus. Experience industry-leading noise cancellation.',
        supportingMessages: [
          {
            content: '30 hours of uninterrupted listening on a single charge',
            priority: 1,
            type: 'supporting',
            score: 92
          },
          {
            content: 'Premium comfort designed for all-day wear',
            priority: 2,
            type: 'supporting',
            score: 88
          },
          {
            content: 'Hi-Res Audio with LDAC codec support',
            priority: 3,
            type: 'supporting',
            score: 85
          }
        ],
        proofPoints: [
          '4.7/5 stars from 12,450+ verified purchases',
          'Winner of 15 industry awards including CES Innovation Award',
          '92% recommend to colleagues and friends',
          'Best noise cancellation rating by Consumer Reports'
        ]
      },
      
      reasonsToBuy: [
        {
          category: 'rational',
          reason: 'Best-in-class noise cancellation technology saves up to 2 hours of productive time daily',
          supportingEvidence: 'Independent study shows 78% productivity increase in focus-intensive tasks',
          confidenceScore: 95
        },
        {
          category: 'rational',
          reason: '30-hour battery eliminates charging anxiety for entire work week',
          supportingEvidence: '89% of users report never charging during business days',
          confidenceScore: 93
        },
        {
          category: 'emotional',
          reason: 'Premium design and build quality reflects professional status',
          supportingEvidence: 'Featured in Fortune 500 executive gift guides',
          confidenceScore: 87
        },
        {
          category: 'emotional',
          reason: 'Instant sanctuary from chaos with one-touch noise cancellation',
          supportingEvidence: 'Users describe feeling "immediately calm" when ANC activates',
          confidenceScore: 91
        },
        {
          category: 'social',
          reason: '#1 choice of audio professionals and content creators worldwide',
          supportingEvidence: 'Used by Grammy-winning artists and top podcasters',
          confidenceScore: 89
        },
        {
          category: 'social',
          reason: 'Over 12,000 five-star reviews validate exceptional quality',
          supportingEvidence: '4.7/5 average with 94% recommend rate',
          confidenceScore: 96
        },
        {
          category: 'urgency',
          reason: 'Limited-time bundle includes premium carrying case ($99 value)',
          supportingEvidence: 'Offer ends in 7 days',
          confidenceScore: 82
        }
      ],
      
      socialProof: {
        awards: [
          'CES 2023 Innovation Award Winner',
          'EISA Best Product Award 2023',
          'What Hi-Fi? Product of the Year',
          "T3 Editor's Choice Award",
          'iF Design Award 2023'
        ],
        certifications: [
          'Hi-Res Audio Certified',
          '360 Reality Audio Compatible',
          'Bluetooth 5.2 Certified',
          'USB-C Power Delivery Compliant'
        ],
        expertEndorsements: [
          '"The gold standard in noise cancellation" - TechRadar',
          '"Unmatched audio quality in wireless headphones" - CNET',
          '"Best headphones for professionals" - Forbes',
          '"Audio engineering masterpiece" - Sound & Vision Magazine'
        ],
        customerTestimonials: [
          '"Game-changer for my productivity. Worth every penny." - Sarah M., Software Engineer',
          '"Best investment I\'ve made for my mental health. Complete silence on demand." - James K., Consultant',
          '"Flew 14 hours and never charged once. Battery life is incredible." - Lisa R., Sales Director',
          '"Audio quality rivals my $800 wired studio headphones." - Marcus T., Music Producer'
        ],
        statisticalProof: [
          '4.7/5 stars from 12,450+ verified buyers',
          '94% recommend to friends and colleagues',
          'Over 2 million units sold globally',
          '89% report improved work satisfaction',
          '#1 bestseller in premium headphones for 18 consecutive months'
        ],
        mediaMentions: [
          'Featured in Wall Street Journal "Best Tech for Professionals"',
          'New York Times Wirecutter Top Pick',
          'Bloomberg "Executive Gift Guide"',
          'Vogue "Tech Worth Investing In"'
        ]
      },
      
      positioning: {
        positioningStatement: 'For professionals who demand both exceptional audio quality and complete focus, our headphones deliver industry-leading noise cancellation and 30-hour battery life—unlike other premium brands that compromise on either performance or comfort.',
        competitiveAdvantages: [
          { competitor: 'Bose QuietComfort', advantage: '8 hours longer battery life and superior codec support' },
          { competitor: 'Apple AirPods Max', advantage: '$200 less expensive with longer battery and lighter weight' },
          { competitor: 'Sennheiser Momentum', advantage: 'Better noise cancellation and 10 hours additional battery' }
        ],
        differentiationStrategy: 'Lead with battery life and noise cancellation technology while emphasizing professional credibility',
        marketPosition: 'Premium performance leader for productivity-focused professionals'
      },
      
      storytelling: {
        hero: 'Busy professionals drowning in distractions, struggling to find focus in chaotic environments',
        problem: 'Open offices, noisy commutes, and constant interruptions destroy productivity and mental clarity',
        solution: 'Industry-leading noise cancellation creates an instant sanctuary, while 30-hour battery ensures reliability',
        transformation: 'From scattered and stressed to focused and in control—productivity increases, stress decreases',
        callToAction: 'Reclaim your focus. Experience the difference today with 60-day money-back guarantee.',
        emotionalArc: 'Frustration → Relief → Confidence → Pride in professional setup'
      },
      
      objections: [
        {
          objection: 'Too expensive compared to other headphones',
          counterArgument: 'Investment in productivity pays for itself in saved time and mental energy within 2 months',
          supportingEvidence: 'Users report average 2 hours/day productivity gain = $8,000+ annual value for typical professional',
          toneRecommendation: 'Consultative, ROI-focused, empathetic to budget concerns'
        },
        {
          objection: 'Worried about Bluetooth audio quality',
          counterArgument: 'LDAC codec delivers hi-res audio quality indistinguishable from wired in blind tests',
          supportingEvidence: '92% of audiophiles cannot identify difference in A/B testing',
          toneRecommendation: 'Technical but accessible, backed by testing data'
        },
        {
          objection: 'Concerned about comfort for all-day wear',
          counterArgument: 'Pressure-relieving earpads and optimized weight distribution designed for 8+ hour sessions',
          supportingEvidence: '87% wear comfortably for full workday without adjustment',
          toneRecommendation: 'Reassuring, invite to try 60-day guarantee'
        }
      ],
      
      conversionHeuristics: {
        highImpactElements: [
          'Limited-time bundle offer (creates urgency)',
          '60-day money-back guarantee (removes risk)',
          '4.7/5 rating with 12,450+ reviews (social proof)',
          'Free 2-day shipping (reduces friction)',
          '2-year warranty included (builds trust)'
        ],
        messageVariants: [
          { variant: 'Headline: "30 Hours of Pure Focus"', predictedLift: '+18%' },
          { variant: 'CTA: "Start Your 60-Day Trial"', predictedLift: '+22%' },
          { variant: 'Hero: "Silence the World. Amplify Your Potential"', predictedLift: '+15%' }
        ],
        abTestRecommendations: [
          'Test "productivity gains" messaging vs "audio quality" messaging for different personas',
          'A/B test bundle offer prominence in hero section',
          'Test video vs static image in product showcase'
        ],
        estimatedLift: '+35-42% conversion rate vs baseline product page'
      },
      
      psychologyTriggers: [
        {
          principle: 'Scarcity',
          application: 'Limited-time bundle offer creates urgency',
          implementation: 'Countdown timer on bundle offer, "Only 47 bundles remaining at this price"'
        },
        {
          principle: 'Authority',
          application: 'Expert endorsements and awards establish credibility',
          implementation: 'Display award badges prominently, quote industry experts in key sections'
        },
        {
          principle: 'Social Proof',
          application: 'Massive review volume and high ratings reduce purchase risk',
          implementation: 'Show live review count, "Join 2M+ satisfied customers", user photos'
        },
        {
          principle: 'Reciprocity',
          application: 'Free premium case and extended warranty create obligation',
          implementation: 'Emphasize "$99 value FREE" and "2-year warranty included at no cost"'
        },
        {
          principle: 'Loss Aversion',
          application: 'Frame as avoiding productivity loss rather than gaining time',
          implementation: '"Stop losing 2 hours daily to distractions" vs "Gain 2 hours of focus"'
        }
      ],
      
      contentBrief: {
        toneOfVoice: 'Professional yet approachable. Confident but not arrogant. Evidence-based and premium.',
        keyMessages: [
          'Industry-leading noise cancellation delivers unmatched focus',
          '30-hour battery life ensures week-long reliability',
          'Premium audio quality rivals studio-grade wired headphones',
          'Proven productivity gains backed by real user data'
        ],
        personaTargeting: 'Primary: Focused Professional (35-45, office worker). Secondary: Frequent Traveler',
        requiredElements: [
          'Battery life USP in headline or subheadline',
          'Productivity/ROI angle for professional audience',
          'Social proof (ratings, review count) above fold',
          'Award badges and expert quotes for credibility',
          '60-day guarantee to remove purchase risk',
          'Bundle offer with urgency messaging'
        ],
        contentStructure: 'Hero: Problem + Solution. Benefits: Feature-benefit ladder. Social proof: Reviews + Awards. CTA: Risk reversal',
        dos: [
          'Lead with business/productivity benefits',
          'Use specific numbers and data points',
          'Show product in professional contexts',
          'Emphasize long-term value and ROI',
          'Include user testimonials from professionals'
        ],
        donts: [
          "Don't lead with technical specs (save for audiophile section)",
          "Don't use lifestyle imagery alone—show product in work contexts",
          "Don't emphasize music/entertainment over productivity",
          "Don't create urgency without substantive offer",
          "Don't ignore battery life—it's a key differentiator"
        ]
      },
      
      confidenceScore: 94,
      personaMatchScore: 91,
      messageStrengthScore: 88,
      rtbCount: 7,
      status: 'Enhanced'
    },
    // Add 2 more sample products
    {
      id: 2,
      sku: 'KB-PRO-2024',
      name: 'Mechanical Keyboard Pro',
      category: 'Peripherals',
      brand: 'Keychron',
      coreValueProposition: 'Premium typing experience with hot-swappable switches for the discerning professional',
      primaryPersona: 'The Power User',
      keyDifferentiator: 'Hot-swappable switches with 80-hour battery life',
      contentApproach: 'Emphasize customization and typing comfort',
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
      confidenceScore: 87,
      personaMatchScore: 84,
      messageStrengthScore: 82,
      rtbCount: 5,
      status: 'Enhanced'
    },
    {
      id: 3,
      sku: 'MON-4K-32',
      name: '4K Professional Monitor 32"',
      category: 'Displays',
      brand: 'Dell',
      coreValueProposition: 'Color-accurate 4K display for creative professionals who demand precision',
      primaryPersona: 'The Creative Professional',
      keyDifferentiator: '99% sRGB coverage with hardware calibration',
      contentApproach: 'Focus on color accuracy and professional credibility',
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
      confidenceScore: 90,
      personaMatchScore: 88,
      messageStrengthScore: 85,
      rtbCount: 6,
      status: 'Enhanced'
    }
  ];
};
