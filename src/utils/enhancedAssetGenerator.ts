import { EnhancedAsset } from '@/types/enhancedAsset';

export const generateSampleEnhancedAssets = (): EnhancedAsset[] => {
  return [
    {
      id: 1,
      sku: 'CD1234',
      name: 'CD1234 24 Hour Charge Wireless Headphones',
      category: 'Electronics',
      brand: 'TechSound',
      
      coreValueProposition: 'Uninterrupted wireless freedom with 24-hour battery life for professionals, travelers, and entertainment enthusiasts',
      primaryPersona: 'The Mobile Professional',
      keyDifferentiator: '24-hour battery life with quick charge technology',
      contentApproach: 'Emphasize battery longevity, portability, and versatile use cases',
      
      benefitLadder: {
        levels: [
          {
            feature: 'Bluetooth 5.0 wireless connectivity',
            functionalBenefit: 'Seamless pairing with multiple devices up to 30ft range',
            emotionalBenefit: 'Freedom from tangled wires and connection hassles',
            value: 'Modern convenience and flexibility',
            proof: '95% report easy setup and stable connections'
          },
          {
            feature: '24-hour continuous playback battery',
            functionalBenefit: 'Full day of listening without recharging',
            emotionalBenefit: 'Peace of mind during long trips and workdays',
            value: 'Reliability when you need it most',
            proof: '91% never run out of battery during daily use'
          },
          {
            feature: 'Foldable, compact design',
            functionalBenefit: 'Easy storage and portability in bags and luggage',
            emotionalBenefit: 'Confidence in travel readiness',
            value: 'Smart space optimization',
            proof: '88% say portability exceeds expectations'
          }
        ]
      },
      
      personas: [
        {
          name: 'The Mobile Professional',
          description: '30-45 year old remote worker or business traveler who needs reliable audio on the go',
          demographics: 'Age 30-45, $60K+ income, mobile lifestyle, works remotely or travels frequently',
          psychographics: 'Values reliability, battery life, and portability. Balances quality with practicality.',
          buyingMotivations: [
            'Need all-day battery for long workdays',
            'Want wireless freedom without charging anxiety',
            'Seeking portable solution for travel and commutes'
          ],
          painPoints: [
            'Headphones die mid-call or during travel',
            'Bulky headphones difficult to pack',
            'Constant recharging interrupts workflow'
          ],
          decisionCriteria: [
            'Battery life (24+ hours essential)',
            'Portability and foldable design',
            'Audio quality for calls and music',
            'Price-to-value ratio'
          ],
          messagingPreferences: 'Practical, benefit-focused, emphasizing reliability and convenience',
          matchScore: 93
        },
        {
          name: 'The Commuter',
          description: 'Daily commuter who spends 1-2 hours traveling to/from work',
          demographics: 'Age 25-40, urban/suburban, relies on public transit or drives',
          psychographics: 'Values comfort and entertainment during commute. Seeks escape from transit noise.',
          buyingMotivations: [
            'Make commute time more enjoyable',
            'Block out transit noise',
            'Never worry about battery dying'
          ],
          painPoints: [
            'Commute feels wasted and stressful',
            'Cheap headphones uncomfortable for long wear',
            'Battery dies mid-commute'
          ],
          decisionCriteria: [
            'Comfort for extended wear',
            'Long battery life',
            'Good sound quality',
            'Affordable pricing'
          ],
          messagingPreferences: 'Lifestyle-focused, emphasizing comfort and daily reliability',
          matchScore: 87
        },
        {
          name: 'The Entertainment Enthusiast',
          description: 'Content consumer who enjoys music, podcasts, and videos',
          demographics: 'Age 20-35, active lifestyle, values entertainment and leisure time',
          psychographics: 'Passionate about media consumption, values good audio, budget-conscious',
          buyingMotivations: [
            'Better audio experience for music and shows',
            'Wireless freedom during workouts or chores',
            'Multi-day battery life'
          ],
          painPoints: [
            'Wired headphones restrict movement',
            'Short battery life interrupts enjoyment',
            'Poor sound quality diminishes experience'
          ],
          decisionCriteria: [
            'Sound quality for music',
            'Wireless range and stability',
            'Battery longevity',
            'Comfortable fit'
          ],
          messagingPreferences: 'Lifestyle and enjoyment-focused, emphasizing audio quality and freedom',
          matchScore: 85
        }
      ],
      
      messageHierarchy: {
        primaryMessage: 'Never stop listening. 24 hours of wireless freedom on a single charge.',
        supportingMessages: [
          {
            content: 'Full day battery life eliminates charging anxiety',
            priority: 1,
            type: 'supporting',
            score: 94
          },
          {
            content: 'Foldable design fits anywhere you go',
            priority: 2,
            type: 'supporting',
            score: 89
          },
          {
            content: 'Bluetooth 5.0 for seamless connectivity',
            priority: 3,
            type: 'supporting',
            score: 86
          }
        ],
        proofPoints: [
          '4.5/5 stars from 8,200+ verified purchases',
          '91% say battery life exceeds expectations',
          'Top-rated for travel and commuting',
          'Over 500,000 units sold worldwide'
        ]
      },
      
      reasonsToBuy: [
        {
          category: 'rational',
          reason: '24-hour battery life means full day of use without recharging',
          supportingEvidence: '91% of users report never running out of battery during daily use',
          confidenceScore: 96
        },
        {
          category: 'rational',
          reason: 'Foldable design makes travel and storage effortless',
          supportingEvidence: '88% say portability exceeds expectations',
          confidenceScore: 92
        },
        {
          category: 'rational',
          reason: 'Quick charge technology provides 3 hours of playback from 10-minute charge',
          supportingEvidence: 'Verified by independent testing',
          confidenceScore: 90
        },
        {
          category: 'emotional',
          reason: 'Freedom from battery anxiety and charging interruptions',
          supportingEvidence: 'Users describe feeling "liberated" from constant charging',
          confidenceScore: 89
        },
        {
          category: 'emotional',
          reason: 'Reliable companion for travel, work, and leisure',
          supportingEvidence: 'Featured in "Best Travel Tech" by multiple publications',
          confidenceScore: 87
        },
        {
          category: 'social',
          reason: 'Over 500,000 satisfied customers worldwide',
          supportingEvidence: '4.5/5 rating with 8,200+ verified reviews',
          confidenceScore: 94
        },
        {
          category: 'urgency',
          reason: 'Limited stock at current price point',
          supportingEvidence: 'Price increases $20 next month',
          confidenceScore: 81
        }
      ],
      
      socialProof: {
        awards: [
          'Tech Gear Excellence Award 2024',
          'Best Battery Life - Audio Tech Awards',
          'Consumer Choice Award for Wireless Headphones',
          'Top Travel Tech Product 2024'
        ],
        certifications: [
          'Bluetooth 5.0 Certified',
          'FCC Approved',
          'CE Certified',
          'RoHS Compliant'
        ],
        expertEndorsements: [
          '"Outstanding battery life for the price point" - TechReview',
          '"Best value in wireless headphones" - AudioGear Magazine',
          '"Perfect for travelers and commuters" - Travel Tech Today',
          '"Impressive portability and performance" - Gadget Guide'
        ],
        customerTestimonials: [
          '"Battery lasts forever! I charge it once a week." - Michael T., Business Traveler',
          '"Folds perfectly in my bag. Game-changer for my commute." - Jennifer L., Consultant',
          '"Great sound and never dies on long flights." - David K., Sales Manager',
          '"Best $189 I\'ve spent on tech this year." - Amanda R., Remote Worker'
        ],
        statisticalProof: [
          '4.5/5 stars from 8,200+ verified buyers',
          '91% say battery life exceeds expectations',
          'Over 500,000 units sold worldwide',
          '87% recommend to friends and family',
          'Top 3 bestseller in wireless headphones category'
        ],
        mediaMentions: [
          'Featured in "Best Travel Tech 2024"',
          'TechCrunch "Top Products for Remote Workers"',
          'Business Insider "Best Wireless Headphones Under $200"',
          'CNET "Editor\'s Pick for Battery Life"'
        ]
      },
      
      positioning: {
        positioningStatement: 'For mobile professionals and travelers who refuse to compromise on battery life, CD1234 delivers 24 hours of wireless freedom with foldable portability—unlike other wireless headphones that die mid-journey or sacrifice portability for battery.',
        competitiveAdvantages: [
          { competitor: 'Generic Wireless Headphones', advantage: '2x battery life (24hrs vs 12hrs average)' },
          { competitor: 'Premium Brand Headphones', advantage: '$100-200 less expensive with comparable battery' },
          { competitor: 'Budget Headphones', advantage: 'Superior build quality and 3x battery life' }
        ],
        differentiationStrategy: 'Lead with exceptional 24-hour battery life and portability while maintaining quality and affordability',
        marketPosition: 'Value leader in long-battery wireless headphones for mobile lifestyles'
      },
      
      storytelling: {
        hero: 'Mobile professionals, commuters, and travelers tired of dead headphones at the worst moments',
        problem: 'Headphones dying mid-call, during flights, or on long commutes creates frustration and lost productivity',
        solution: '24-hour battery provides full-day reliability with foldable design that goes anywhere',
        transformation: 'From battery anxiety and charging hassles to confident, uninterrupted audio freedom all day long',
        callToAction: 'Experience 24 hours of wireless freedom. Order now with 30-day money-back guarantee.',
        emotionalArc: 'Frustration → Relief → Confidence → Freedom'
      },
      
      objections: [
        {
          objection: 'Battery life claims seem exaggerated',
          counterArgument: '24-hour rating is based on standard testing at 50% volume—many users get even more',
          supportingEvidence: '91% of verified buyers confirm battery life meets or exceeds 24 hours',
          toneRecommendation: 'Confident, evidence-based, backed by real user data'
        },
        {
          objection: 'Concerned about audio quality at this price point',
          counterArgument: 'Bluetooth 5.0 with quality drivers delivers clear audio that rivals $300+ headphones',
          supportingEvidence: 'Independent testing shows comparable audio performance to premium brands',
          toneRecommendation: 'Reassuring, focus on value proposition'
        },
        {
          objection: 'Worried about durability with foldable design',
          counterArgument: 'Reinforced hinges tested for 10,000+ fold cycles—built to last years of daily use',
          supportingEvidence: '95% report no durability issues after 12+ months of regular use',
          toneRecommendation: 'Reassuring, emphasize quality construction and warranty'
        }
      ],
      
      conversionHeuristics: {
        highImpactElements: [
          '24-hour battery claim in headline (key differentiator)',
          '30-day money-back guarantee (removes risk)',
          '4.5/5 rating with 8,200+ reviews (social proof)',
          'Free shipping over $150 (reduces friction)',
          '1-year warranty included (builds trust)'
        ],
        messageVariants: [
          { variant: 'Headline: "24 Hours. One Charge. Zero Anxiety."', predictedLift: '+24%' },
          { variant: 'CTA: "Never Run Out - Order Now"', predictedLift: '+19%' },
          { variant: 'Hero: "Go All Day Without Recharging"', predictedLift: '+17%' }
        ],
        abTestRecommendations: [
          'Test "24-hour battery" messaging vs "wireless freedom" messaging',
          'A/B test battery life proof (user testimonials vs technical specs)',
          'Test portable/travel lifestyle imagery vs close-up product shots'
        ],
        estimatedLift: '+28-35% conversion rate vs baseline product page'
      },
      
      psychologyTriggers: [
        {
          principle: 'Loss Aversion',
          application: 'Frame as avoiding dead battery frustration',
          implementation: '"Never miss another call or song due to dead battery" vs "Get 24 hours of playback"'
        },
        {
          principle: 'Social Proof',
          application: 'Large user base and high ratings reduce purchase risk',
          implementation: 'Show "500,000+ sold", "4.5/5 from 8,200+ reviews", user photos in travel contexts'
        },
        {
          principle: 'Scarcity',
          application: 'Limited stock at current price creates urgency',
          implementation: '"Price increases $20 next month", "Limited inventory at this price"'
        },
        {
          principle: 'Authority',
          application: 'Expert recommendations and awards establish credibility',
          implementation: 'Display award badges, quote tech publications: "Best Battery Life - Audio Tech Awards"'
        },
        {
          principle: 'Reciprocity',
          application: 'Free shipping and included warranty create goodwill',
          implementation: 'Emphasize "FREE shipping" and "1-year warranty included at no extra cost"'
        }
      ],
      
      contentBrief: {
        toneOfVoice: 'Practical and reassuring. Confident and value-focused. Relatable and benefit-driven.',
        keyMessages: [
          '24-hour battery life eliminates charging anxiety',
          'Foldable design makes travel and storage effortless',
          'Quality audio at an accessible price point',
          'Reliable companion for work, travel, and leisure'
        ],
        personaTargeting: 'Primary: Mobile Professional (30-45, remote/traveling). Secondary: Daily Commuter',
        requiredElements: [
          '24-hour battery life in headline—this is THE differentiator',
          'Portability/foldable feature highlighted prominently',
          'Social proof (ratings, review count) above fold',
          'Price-value positioning clear',
          '30-day guarantee to remove purchase risk',
          'Lifestyle imagery showing travel/commute contexts'
        ],
        contentStructure: 'Hero: Battery anxiety problem + 24hr solution. Benefits: Battery → Portability → Quality. Social proof: User testimonials. CTA: Risk-free trial',
        dos: [
          'Lead with 24-hour battery benefit',
          'Show product in travel, commute, and work scenarios',
          'Use specific battery life numbers and proof',
          'Emphasize portability and convenience',
          'Include testimonials about battery lasting all day',
          'Highlight value proposition (quality at $189)'
        ],
        donts: [
          "Don't bury the battery life claim—it's the #1 feature",
          "Don't use generic office imagery—show real mobile use cases",
          "Don't compare to premium $400+ headphones—wrong segment",
          "Don't oversell audio quality—position as 'great for the price'",
          "Don't ignore portability—foldable design is key differentiator"
        ]
      },
      
      confidenceScore: 92,
      personaMatchScore: 93,
      messageStrengthScore: 90,
      rtbCount: 7,
      status: 'Enhanced'
    },
    {
      id: 2,
      sku: 'SPK789',
      name: 'Smart Speaker with Voice Assistant',
      category: 'Electronics',
      brand: 'SmartHome',
      coreValueProposition: 'Seamless smart home control with premium audio quality in one elegant device',
      primaryPersona: 'The Smart Home Enthusiast',
      keyDifferentiator: 'Multi-room audio with comprehensive smart home integration',
      contentApproach: 'Emphasize convenience, integration, and lifestyle enhancement',
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
      confidenceScore: 88,
      personaMatchScore: 85,
      messageStrengthScore: 84,
      rtbCount: 6,
      status: 'Enhanced'
    },
    {
      id: 3,
      sku: 'MON999',
      name: '4K Ultra HD Monitor',
      category: 'Electronics',
      brand: 'ViewTech',
      coreValueProposition: 'Professional-grade 4K clarity for content creators and designers who demand precision',
      primaryPersona: 'The Creative Professional',
      keyDifferentiator: '4K resolution with wide color gamut and ergonomic adjustability',
      contentApproach: 'Focus on visual precision, productivity, and professional credibility',
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
      personaMatchScore: 87,
      messageStrengthScore: 86,
      rtbCount: 6,
      status: 'Enhanced'
    }
  ];
};
