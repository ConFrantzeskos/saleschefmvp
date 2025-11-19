import { EnhancedAsset } from '@/types/enhancedAsset';

export const generateSampleEnhancedAssets = (): EnhancedAsset[] => {
  const baseAssets: EnhancedAsset[] = [
    {
      id: 1,
      sku: 'CD1234',
      name: 'CD1234 24 Hour Charge Wireless Headphones',
      category: 'Electronics',
      brand: 'TechSound',
      
      appliedLadders: ['functional-emotional', 'ogilvy-rtb'],
      primaryLadder: 'functional-emotional',
      
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
      
      appliedLadders: ['functional-emotional', 'experience-ladder'],
      primaryLadder: 'experience-ladder',
      
      coreValueProposition: 'Seamless smart home control with premium audio quality in one elegant device',
      primaryPersona: 'The Smart Home Enthusiast',
      keyDifferentiator: 'Multi-room audio with comprehensive smart home integration',
      contentApproach: 'Emphasize convenience, integration, and lifestyle enhancement',
      
      benefitLadder: {
        levels: [
          {
            feature: 'Voice-activated smart home control',
            functionalBenefit: 'Control lights, thermostat, and devices hands-free',
            emotionalBenefit: 'Feeling of living in the future',
            value: 'Effortless home automation',
            proof: '94% report easier home management'
          },
          {
            feature: 'Premium 360° sound with deep bass',
            functionalBenefit: 'Rich, room-filling audio for music and entertainment',
            emotionalBenefit: 'Enjoyment and immersion in daily life',
            value: 'Professional audio experience at home',
            proof: '4.6/5 audio quality rating'
          },
          {
            feature: 'Multi-room synchronization',
            functionalBenefit: 'Play same music throughout home or different in each room',
            emotionalBenefit: 'Seamless entertainment experience',
            value: 'Whole-home audio ecosystem',
            proof: '89% use multi-room feature weekly'
          }
        ]
      },
      
      personas: [
        {
          name: 'The Smart Home Enthusiast',
          description: '28-42 year old tech-savvy homeowner building an integrated smart home ecosystem',
          demographics: 'Age 28-42, $70K+ income, homeowner, early tech adopter',
          psychographics: 'Values convenience, automation, and cutting-edge technology. Enjoys optimizing home efficiency.',
          buyingMotivations: [
            'Building comprehensive smart home system',
            'Seeking quality audio and smart features in one device',
            'Want voice control for home automation'
          ],
          painPoints: [
            'Multiple apps and devices don\'t integrate well',
            'Inferior audio quality in smart speakers',
            'Complex setup and configuration'
          ],
          decisionCriteria: [
            'Smart home platform compatibility',
            'Audio quality comparable to standalone speakers',
            'Easy setup and voice control accuracy',
            'Multi-room capabilities'
          ],
          messagingPreferences: 'Tech-forward, emphasizing integration and ecosystem benefits',
          matchScore: 94
        },
        {
          name: 'The Music Lover',
          description: 'Music enthusiast who wants quality sound with modern convenience',
          demographics: 'Age 25-45, appreciates good audio, values convenience',
          psychographics: 'Passionate about music quality, wants modern features without complexity',
          buyingMotivations: [
            'Better sound quality than standard smart speakers',
            'Voice control for music playback',
            'Streaming service integration'
          ],
          painPoints: [
            'Smart speakers sound tinny and lack bass',
            'Traditional speakers lack modern features',
            'Complicated setups with multiple devices'
          ],
          decisionCriteria: [
            'Audio quality and bass response',
            'Music streaming service support',
            'Voice control ease',
            'Aesthetics and design'
          ],
          messagingPreferences: 'Audio quality-focused, lifestyle imagery with music enjoyment',
          matchScore: 88
        },
        {
          name: 'The Busy Professional',
          description: 'Career-focused individual seeking home convenience and efficiency',
          demographics: 'Age 30-50, professional career, values time efficiency',
          psychographics: 'Time-constrained, wants automation to simplify daily tasks',
          buyingMotivations: [
            'Hands-free control while multitasking',
            'News, weather, and calendar access',
            'Music and podcasts during routines'
          ],
          painPoints: [
            'Too busy to manually control devices',
            'Morning routines feel rushed',
            'Forgetting to adjust thermostat or lights'
          ],
          decisionCriteria: [
            'Voice control reliability',
            'Information access (news, weather)',
            'Smart home automation features',
            'Sound quality for podcast listening'
          ],
          messagingPreferences: 'Time-saving and convenience-focused messaging',
          matchScore: 85
        }
      ],
      
      messageHierarchy: {
        primaryMessage: 'Your home, your voice. Premium sound meets smart home mastery.',
        supportingMessages: [
          {
            content: '360° premium audio fills every corner with rich sound',
            priority: 1,
            type: 'supporting',
            score: 92
          },
          {
            content: 'Control your entire smart home with simple voice commands',
            priority: 2,
            type: 'supporting',
            score: 90
          },
          {
            content: 'Multi-room synchronization creates seamless whole-home audio',
            priority: 3,
            type: 'supporting',
            score: 87
          }
        ],
        proofPoints: [
          '4.6/5 stars from 6,400+ verified reviews',
          '94% say it simplified their home management',
          'Compatible with 3,000+ smart home devices',
          'Featured in "Best Smart Speakers 2024"'
        ]
      },
      
      reasonsToBuy: [
        {
          category: 'rational',
          reason: 'Premium 360° audio quality rivals standalone speakers at twice the price',
          supportingEvidence: 'Independent audio testing shows comparable performance to $400 speakers',
          confidenceScore: 94
        },
        {
          category: 'rational',
          reason: 'Compatible with 3,000+ smart home devices and platforms',
          supportingEvidence: 'Works with major platforms: Alexa, Google Home, HomeKit, and more',
          confidenceScore: 96
        },
        {
          category: 'rational',
          reason: 'Multi-room audio synchronization across unlimited speakers',
          supportingEvidence: '89% of multi-speaker owners use this feature weekly',
          confidenceScore: 91
        },
        {
          category: 'emotional',
          reason: 'Experience the convenience of a truly smart, voice-controlled home',
          supportingEvidence: 'Users describe feeling "like living in the future"',
          confidenceScore: 88
        },
        {
          category: 'emotional',
          reason: 'Premium audio quality transforms daily music and entertainment',
          supportingEvidence: '4.6/5 rating specifically for audio quality',
          confidenceScore: 93
        },
        {
          category: 'social',
          reason: 'Join over 300,000 smart home enthusiasts',
          supportingEvidence: '4.6/5 rating with 6,400+ verified reviews',
          confidenceScore: 92
        },
        {
          category: 'urgency',
          reason: 'Limited time bundle offer with smart bulbs',
          supportingEvidence: 'Save $40 on smart home starter bundle this month',
          confidenceScore: 79
        }
      ],
      
      socialProof: {
        awards: [
          'Best Smart Speaker - Tech Innovation Awards 2024',
          'Audio Excellence Award for Smart Home Devices',
          'Consumer Choice Award - Smart Home Category',
          'Editor\'s Choice - Smart Home Magazine'
        ],
        certifications: [
          'Works with Alexa Certified',
          'Google Assistant Compatible',
          'Apple HomeKit Enabled',
          'Energy Star Certified',
          'UL Safety Certified'
        ],
        expertEndorsements: [
          '"Best audio quality in a smart speaker" - TechCrunch',
          '"The smart speaker that finally sounds premium" - CNET',
          '"Perfect balance of smarts and sound" - The Verge',
          '"Our top pick for music lovers" - Wirecutter'
        ],
        customerTestimonials: [
          '"Sounds incredible! Can\'t believe a smart speaker has this much bass." - Alex M., Music Producer',
          '"Finally ditched my old speakers. This does it all." - Sarah K., Tech Enthusiast',
          '"Controls my whole house and sounds amazing doing it." - James L., Homeowner',
          '"Worth every penny. My morning routine is so much easier now." - Rachel T., Marketing Manager'
        ],
        statisticalProof: [
          '4.6/5 stars from 6,400+ verified buyers',
          '94% report easier home management',
          '89% use multi-room feature regularly',
          'Over 300,000 units in homes worldwide',
          '92% would recommend to friends'
        ],
        mediaMentions: [
          'Featured in "Best Smart Speakers 2024" - TechRadar',
          'CNET "Top Pick for Audio Quality"',
          'The Verge "Best Smart Home Integration"',
          'Business Insider "Best Premium Smart Speaker Under $300"'
        ]
      },
      
      positioning: {
        positioningStatement: 'For smart home enthusiasts and music lovers who refuse to compromise between audio quality and smart features, SPK789 delivers premium 360° sound with comprehensive smart home control—unlike basic smart speakers with tinny audio or traditional speakers without modern convenience.',
        competitiveAdvantages: [
          { competitor: 'Amazon Echo/Google Home', advantage: 'Superior audio quality with 360° sound and deeper bass' },
          { competitor: 'Sonos', advantage: '$100-150 less expensive with more smart home integrations' },
          { competitor: 'Traditional Speakers', advantage: 'Smart home control and voice features without extra devices' }
        ],
        differentiationStrategy: 'Bridge the gap between premium audio and smart home functionality at accessible pricing',
        marketPosition: 'Premium smart speaker category leader for audio quality and integration'
      },
      
      storytelling: {
        hero: 'Smart home enthusiasts and music lovers who want premium sound without sacrificing modern convenience',
        problem: 'Smart speakers sound terrible, while quality speakers lack smart features—forcing compromise between audio and automation',
        solution: '360° premium audio with comprehensive smart home control in one elegant device',
        transformation: 'From compromising between sound and smarts to enjoying premium audio with effortless voice control',
        callToAction: 'Experience premium smart audio. Order now with 60-day satisfaction guarantee.',
        emotionalArc: 'Frustration with compromise → Discovery of solution → Delight with integration → Pride in smart home'
      },
      
      objections: [
        {
          objection: 'Concerned smart speaker won\'t match my dedicated audio system',
          counterArgument: '360° premium drivers with deep bass rival standalone speakers costing $400+',
          supportingEvidence: 'Independent testing confirms audio performance matches premium speakers. 4.6/5 audio quality rating.',
          toneRecommendation: 'Confident, invite comparison, offer satisfaction guarantee'
        },
        {
          objection: 'Worried about compatibility with my existing smart home devices',
          counterArgument: 'Works with 3,000+ devices across all major platforms—Alexa, Google, HomeKit, and more',
          supportingEvidence: 'Certified compatible with leading smart home ecosystems. 96% compatibility satisfaction rating.',
          toneRecommendation: 'Reassuring, emphasize broad compatibility and easy setup'
        },
        {
          objection: 'Privacy concerns about always-listening device',
          counterArgument: 'Physical mute button completely disconnects microphones. You control when it listens.',
          supportingEvidence: 'Hardware-level privacy controls. All data encrypted. No recording without wake word.',
          toneRecommendation: 'Transparent, emphasize user control and security features'
        },
        {
          objection: 'Multi-room setup seems complicated and expensive',
          counterArgument: 'Automatic discovery and setup in minutes. Add speakers as budget allows—no hub required.',
          supportingEvidence: '95% report setup easier than expected. Works with 1 speaker or 10+.',
          toneRecommendation: 'Encouraging, emphasize simplicity and scalability'
        }
      ],
      
      conversionHeuristics: {
        highImpactElements: [
          'Audio quality claim in headline (primary differentiator)',
          '60-day satisfaction guarantee (removes risk)',
          '4.6/5 rating with 6,400+ reviews (strong social proof)',
          'Smart home bundle offer (adds value)',
          'Multi-room demo video (shows capability)'
        ],
        messageVariants: [
          { variant: 'Headline: "Premium Sound. Smart Home Mastery. One Device."', predictedLift: '+27%' },
          { variant: 'CTA: "Upgrade Your Home - Try Risk-Free"', predictedLift: '+22%' },
          { variant: 'Hero: "The Smart Speaker That Actually Sounds Premium"', predictedLift: '+20%' }
        ],
        abTestRecommendations: [
          'Test audio quality messaging vs smart home control messaging',
          'A/B test lifestyle imagery vs product close-ups with audio visualization',
          'Test bundle offer prominence vs standalone product focus'
        ],
        estimatedLift: '+32-38% conversion rate vs baseline product page'
      },
      
      psychologyTriggers: [
        {
          principle: 'Loss Aversion',
          application: 'Frame as avoiding audio compromise and missing smart home benefits',
          implementation: '"Stop compromising between sound quality and smart features" vs "Get both in one device"'
        },
        {
          principle: 'Social Proof',
          application: 'Large user base and exceptional ratings build trust',
          implementation: 'Show "300,000+ smart homes", "4.6/5 from 6,400+ reviews", user photos of home setups'
        },
        {
          principle: 'Authority',
          application: 'Expert reviews and awards from trusted tech sources',
          implementation: 'Display "Best Smart Speaker - Tech Innovation Awards", quote TechCrunch and CNET reviews'
        },
        {
          principle: 'Commitment & Consistency',
          application: 'Once they buy one, they\'ll want multi-room setup',
          implementation: 'Emphasize "Start with one, expand anytime" and show multi-room benefits'
        },
        {
          principle: 'Reciprocity',
          application: 'Extended guarantee and included smart bulbs create goodwill',
          implementation: 'Highlight "60-day guarantee" and "FREE smart bulbs with purchase"'
        }
      ],
      
      contentBrief: {
        toneOfVoice: 'Modern and sophisticated. Confident about audio quality. Friendly and accessible about tech.',
        keyMessages: [
          'Premium 360° audio quality that rivals dedicated speakers',
          'Comprehensive smart home control with voice commands',
          'Multi-room synchronization for whole-home audio',
          'Works with all major smart home platforms and 3,000+ devices'
        ],
        personaTargeting: 'Primary: Smart Home Enthusiast (28-42, tech-savvy). Secondary: Music Lover seeking convenience',
        requiredElements: [
          'Audio quality highlighted in headline—key differentiator from competitors',
          'Smart home integration capabilities prominently featured',
          'Multi-room audio demonstration (video or visual)',
          'Social proof (ratings, reviews) above fold',
          'Compatibility badges for major platforms (Alexa, Google, HomeKit)',
          '60-day guarantee to remove purchase risk',
          'Lifestyle imagery showing modern home environments'
        ],
        contentStructure: 'Hero: Premium sound + smart features promise. Benefits: Audio → Control → Multi-room → Compatibility. Social proof: Expert reviews + user testimonials. CTA: Risk-free trial with bundle offer',
        dos: [
          'Lead with audio quality superiority over typical smart speakers',
          'Show real home environments with modern, stylish setups',
          'Demonstrate voice control with specific examples',
          'Highlight broad compatibility and easy integration',
          'Include audio visualization or multi-room diagram',
          'Feature user testimonials about audio quality surprise',
          'Emphasize both music enjoyment and daily convenience'
        ],
        donts: [
          'Don\'t compare only to cheap smart speakers—position as premium',
          'Don\'t focus solely on smart features—audio quality is equally important',
          'Don\'t use overly technical audio terminology—keep accessible',
          'Don\'t ignore privacy concerns—address them proactively',
          'Don\'t show cluttered home environments—maintain aspirational aesthetic',
          'Don\'t undersell multi-room capability—it drives additional purchases'
        ]
      },
      
      confidenceScore: 88,
      personaMatchScore: 94,
      messageStrengthScore: 90,
      rtbCount: 7,
      status: 'Enhanced'
    },
    {
      id: 3,
      sku: 'MON999',
      name: '4K Ultra HD Monitor 27"',
      category: 'Electronics',
      brand: 'ViewTech',
      
      appliedLadders: ['functional-emotional', 'component-performance'],
      primaryLadder: 'component-performance',
      
      coreValueProposition: 'Professional-grade 4K clarity for content creators and designers who demand precision',
      primaryPersona: 'The Creative Professional',
      keyDifferentiator: '4K resolution with 99% sRGB wide color gamut and ergonomic adjustability',
      contentApproach: 'Focus on visual precision, productivity gains, and professional credibility',
      
      benefitLadder: {
        levels: [
          {
            feature: '4K Ultra HD resolution (3840×2160)',
            functionalBenefit: 'Crystal-clear detail for precise editing and design work',
            emotionalBenefit: 'Confidence in color accuracy and detail visibility',
            value: 'Professional-quality output',
            proof: '97% report improved work quality'
          },
          {
            feature: '99% sRGB wide color gamut',
            functionalBenefit: 'Accurate color reproduction for photo and video editing',
            emotionalBenefit: 'Trust that what you see matches final output',
            value: 'Color-critical work reliability',
            proof: 'Factory calibrated with certificate'
          },
          {
            feature: 'Ergonomic height, tilt, and pivot adjustment',
            functionalBenefit: 'Customize viewing angle for comfort during long sessions',
            emotionalBenefit: 'Reduced neck strain and fatigue',
            value: 'All-day productivity comfort',
            proof: '93% report less physical strain'
          }
        ]
      },
      
      personas: [
        {
          name: 'The Creative Professional',
          description: '28-45 year old designer, photographer, or video editor who relies on color accuracy',
          demographics: 'Age 28-45, $55K+ income, creative industry professional or serious hobbyist',
          psychographics: 'Values precision, quality, and professional-grade tools. Takes pride in their craft.',
          buyingMotivations: [
            'Need accurate color reproduction for client work',
            'Want larger screen real estate for productivity',
            'Seeking professional-grade quality without extreme cost'
          ],
          painPoints: [
            'Current monitor colors don\'t match prints/output',
            'Limited screen space slows workflow',
            'Neck and eye strain from poor ergonomics',
            'Can\'t trust display for color-critical work'
          ],
          decisionCriteria: [
            'Color accuracy (sRGB coverage)',
            '4K resolution for detail work',
            'Ergonomic adjustability',
            'Professional reviews and certifications',
            'Price-to-quality ratio'
          ],
          messagingPreferences: 'Professional and detail-oriented, emphasizing precision and quality',
          matchScore: 96
        },
        {
          name: 'The Productivity Optimizer',
          description: 'Professional seeking better efficiency through superior monitor setup',
          demographics: 'Age 30-50, knowledge worker, values efficiency and quality tools',
          psychographics: 'Invests in tools that enhance productivity. Understands value of proper equipment.',
          buyingMotivations: [
            'Increase productivity with more screen space',
            'Reduce eye strain during long work sessions',
            'Upgrade outdated or inadequate monitor',
            'Professional appearance for video calls'
          ],
          painPoints: [
            'Constant window switching on small screen',
            'Eye fatigue from poor display quality',
            'Uncomfortable viewing angles',
            'Unprofessional appearance in background'
          ],
          decisionCriteria: [
            '4K resolution for multitasking',
            'Screen size (27" optimal)',
            'Ergonomic features',
            'Build quality and longevity',
            'Connectivity options'
          ],
          messagingPreferences: 'ROI and productivity-focused, emphasizing efficiency gains',
          matchScore: 89
        },
        {
          name: 'The Aspiring Creator',
          description: 'Entry to mid-level creative learning their craft and building their toolkit',
          demographics: 'Age 22-35, student or early career, growing into professional tools',
          psychographics: 'Ambitious, learning, wants professional results. Budget-conscious but willing to invest.',
          buyingMotivations: [
            'Upgrade to professional-level equipment',
            'Learn color-critical work properly',
            'Build portfolio with quality output',
            'Appear more professional to clients'
          ],
          painPoints: [
            'Current monitor inadequate for learning proper technique',
            'Can\'t compete with professionals using better tools',
            'Colors never match between screen and output',
            'Worried about making wrong first "serious" purchase'
          ],
          decisionCriteria: [
            'Professional features at accessible price',
            'Good reviews from experienced users',
            'Color accuracy for learning',
            'Room to grow into the tool',
            'Warranty and support'
          ],
          messagingPreferences: 'Aspirational and educational, emphasizing growth and capability',
          matchScore: 84
        }
      ],
      
      messageHierarchy: {
        primaryMessage: 'See every detail. Trust every color. Professional 4K clarity that elevates your work.',
        supportingMessages: [
          {
            content: '4K Ultra HD resolution reveals every detail in your creative work',
            priority: 1,
            type: 'supporting',
            score: 95
          },
          {
            content: '99% sRGB color accuracy ensures what you see matches final output',
            priority: 2,
            type: 'supporting',
            score: 94
          },
          {
            content: 'Full ergonomic adjustability for all-day comfort',
            priority: 3,
            type: 'supporting',
            score: 88
          }
        ],
        proofPoints: [
          '4.7/5 stars from 5,800+ verified reviews',
          '97% report improved work quality and confidence',
          'Factory calibrated with color accuracy certificate',
          'Recommended by leading creative professionals'
        ]
      },
      
      reasonsToBuy: [
        {
          category: 'rational',
          reason: '4K resolution (3840×2160) provides 4x more detail than Full HD',
          supportingEvidence: 'Independent testing confirms native 4K panel with 8.3 million pixels',
          confidenceScore: 98
        },
        {
          category: 'rational',
          reason: '99% sRGB color gamut with factory calibration ensures accurate color reproduction',
          supportingEvidence: 'Each unit calibrated and certified. Delta E < 2 color accuracy.',
          confidenceScore: 97
        },
        {
          category: 'rational',
          reason: 'Height, tilt, and pivot adjustability reduces physical strain',
          supportingEvidence: '93% report reduced neck and eye strain vs. previous monitor',
          confidenceScore: 91
        },
        {
          category: 'emotional',
          reason: 'Confidence that your color-critical work is accurate',
          supportingEvidence: 'Professionals report "finally trusting their display" for client work',
          confidenceScore: 94
        },
        {
          category: 'emotional',
          reason: 'Professional pride in using quality tools',
          supportingEvidence: 'Users describe feeling "more professional" and "taken seriously"',
          confidenceScore: 86
        },
        {
          category: 'social',
          reason: 'Trusted by 250,000+ creative professionals worldwide',
          supportingEvidence: '4.7/5 rating from 5,800+ verified buyers',
          confidenceScore: 95
        },
        {
          category: 'urgency',
          reason: 'Limited-time professional bundle with calibration tool',
          supportingEvidence: 'Save $60 on calibration bundle this month only',
          confidenceScore: 77
        }
      ],
      
      socialProof: {
        awards: [
          'Best Monitor for Creative Professionals - Design Tools Awards 2024',
          'Editor\'s Choice - Professional Photographer Magazine',
          'Excellence in Display Technology Award',
          'Top Rated for Color Accuracy - Monitor Review Council'
        ],
        certifications: [
          'Factory Calibrated with Certificate',
          '99% sRGB Color Gamut Certified',
          'Energy Star Certified',
          'TÜV Rheinland Eye Comfort Certified',
          'VESA Mount Compatible'
        ],
        expertEndorsements: [
          '"The color accuracy is remarkable for this price point" - Digital Arts Magazine',
          '"Best value 4K monitor for creative work" - Creative Bloq',
          '"Rivals monitors costing twice as much" - TechRadar Pro',
          '"Factory calibration makes all the difference" - Photography Life'
        ],
        customerTestimonials: [
          '"Finally, a monitor I can trust for client work. Colors are spot-on." - Marcus T., Graphic Designer',
          '"The 4K clarity changed how I edit. I see details I was missing before." - Lisa K., Photographer',
          '"Best upgrade I\'ve made to my setup. My neck thanks me." - David R., Video Editor',
          '"Worth every penny. Clients notice the difference in my deliverables." - Amanda S., Freelance Designer'
        ],
        statisticalProof: [
          '4.7/5 stars from 5,800+ verified buyers',
          '97% report improved work quality',
          '93% experience reduced physical strain',
          'Over 250,000 units in professional studios',
          '91% would recommend to colleagues'
        ],
        mediaMentions: [
          'Featured in "Best Monitors for Designers 2024" - Creative Bloq',
          'TechRadar Pro "Best Value 4K Monitor"',
          'Digital Arts Magazine "Editor\'s Choice"',
          'Professional Photographer "Recommended Gear"'
        ]
      },
      
      positioning: {
        positioningStatement: 'For creative professionals and serious content creators who demand color accuracy and visual precision, MON999 delivers professional-grade 4K clarity with 99% sRGB coverage and factory calibration—unlike consumer monitors that compromise color accuracy or professional displays with prohibitive pricing.',
        competitiveAdvantages: [
          { competitor: 'Consumer 4K Monitors', advantage: 'Factory calibrated with 99% sRGB vs. uncalibrated 70-80% coverage' },
          { competitor: 'High-End Professional Displays', advantage: '$300-500 less expensive with comparable color accuracy' },
          { competitor: 'Budget Creative Monitors', advantage: 'True professional specs with certification vs. marketing claims' }
        ],
        differentiationStrategy: 'Bridge the gap between consumer and professional displays by offering genuine color accuracy at accessible pricing',
        marketPosition: 'Premium value leader in color-accurate 4K monitors for creative professionals'
      },
      
      storytelling: {
        hero: 'Creative professionals and content creators who need to trust their display for color-critical work',
        problem: 'Inaccurate monitors cause wasted time, client revisions, and lack of confidence in their work output',
        solution: 'Factory-calibrated 4K display with 99% sRGB coverage delivers professional color accuracy',
        transformation: 'From guessing and revising to confident, accurate color work that matches final output',
        callToAction: 'Upgrade to professional clarity. Order now with 3-year warranty and calibration certificate.',
        emotionalArc: 'Frustration with inaccuracy → Hope for improvement → Confidence with precision → Pride in professional results'
      },
      
      objections: [
        {
          objection: 'Worried about color accuracy claims at this price point',
          counterArgument: 'Each unit factory calibrated with certificate. 99% sRGB coverage verified by testing.',
          supportingEvidence: 'Included calibration certificate with Delta E < 2. Independent reviews confirm accuracy.',
          toneRecommendation: 'Confident, emphasize verification and certification process'
        },
        {
          objection: 'Concerned 27" might be too small or too large',
          counterArgument: '27" is optimal for 4K at typical viewing distances—perfectly balances detail and usability',
          supportingEvidence: 'Industry standard for professional creative work. 163 PPI provides crisp text without scaling.',
          toneRecommendation: 'Educational, reference professional standards and ergonomic research'
        },
        {
          objection: 'Not sure if my computer can drive 4K',
          counterArgument: 'Works with any modern computer. Includes DisplayPort and HDMI 2.0 for broad compatibility.',
          supportingEvidence: 'Compatible with PCs and Macs from 2016+. Detailed compatibility guide included.',
          toneRecommendation: 'Helpful, provide clear compatibility information and support resources'
        },
        {
          objection: 'Expensive compared to basic monitors',
          counterArgument: 'Investment in color accuracy saves time and prevents costly client revisions',
          supportingEvidence: 'Professionals report 10+ hours saved monthly from accurate first-time output. ROI in weeks.',
          toneRecommendation: 'Value-focused, frame as professional investment with measurable returns'
        }
      ],
      
      conversionHeuristics: {
        highImpactElements: [
          '99% sRGB color accuracy certification (primary differentiator)',
          '3-year warranty with calibration certificate (builds trust)',
          '4.7/5 rating from 5,800+ reviews (strong social proof)',
          'Before/after color accuracy visuals (demonstrates capability)',
          'Professional bundle offer (adds value)'
        ],
        messageVariants: [
          { variant: 'Headline: "Professional Color Accuracy. Accessible Pricing."', predictedLift: '+29%' },
          { variant: 'CTA: "Upgrade Your Creative Work - Order Now"', predictedLift: '+24%' },
          { variant: 'Hero: "See Every Detail. Trust Every Color."', predictedLift: '+21%' }
        ],
        abTestRecommendations: [
          'Test color accuracy messaging vs. resolution/clarity messaging',
          'A/B test professional environment imagery vs. close-up product shots',
          'Test calibration certificate prominence vs. spec-focused layout'
        ],
        estimatedLift: '+35-42% conversion rate vs. baseline product page'
      },
      
      psychologyTriggers: [
        {
          principle: 'Loss Aversion',
          application: 'Frame as avoiding wasted time and client revisions due to color inaccuracy',
          implementation: '"Stop wasting hours on color corrections and revisions" vs "Get accurate colors from the start"'
        },
        {
          principle: 'Authority',
          application: 'Factory calibration and professional certifications establish credibility',
          implementation: 'Display calibration certificate, show "99% sRGB Certified", quote professional publications'
        },
        {
          principle: 'Social Proof',
          application: 'Large professional user base and high ratings from fellow creatives',
          implementation: 'Show "250,000+ professional studios", "4.7/5 from verified creatives", user studio photos'
        },
        {
          principle: 'Commitment & Consistency',
          application: 'Appeal to professional identity and tool quality expectations',
          implementation: '"Professional work deserves professional tools" messaging, align with their creative identity'
        },
        {
          principle: 'Reciprocity',
          application: 'Extended warranty and included calibration create goodwill',
          implementation: 'Emphasize "3-year warranty included" and "FREE calibration certificate with every unit"'
        }
      ],
      
      contentBrief: {
        toneOfVoice: 'Professional and precise. Confident about quality. Supportive of creative excellence.',
        keyMessages: [
          '4K Ultra HD resolution reveals every detail in creative work',
          '99% sRGB color accuracy with factory calibration ensures trust',
          'Full ergonomic adjustability supports all-day productivity',
          'Professional quality at accessible pricing'
        ],
        personaTargeting: 'Primary: Creative Professional (28-45, designer/photographer/editor). Secondary: Productivity-focused knowledge worker',
        requiredElements: [
          'Color accuracy (99% sRGB) in headline—primary differentiator',
          'Factory calibration certificate prominently featured',
          '4K resolution specs clearly stated',
          'Social proof from verified creative professionals',
          'Before/after or side-by-side color accuracy demonstration',
          '3-year warranty to build confidence',
          'Professional environment lifestyle imagery'
        ],
        contentStructure: 'Hero: Color accuracy problem + professional solution. Benefits: Resolution → Color accuracy → Ergonomics → Value. Social proof: Professional testimonials + expert reviews. CTA: Professional investment with warranty',
        dos: [
          'Lead with color accuracy—it\'s the #1 concern for target audience',
          'Show real creative work and professional environments',
          'Display calibration certificate and certifications prominently',
          'Use before/after examples of color accuracy',
          'Include testimonials from working professionals',
          'Emphasize factory calibration as differentiator',
          'Frame as professional investment with ROI',
          'Show ergonomic adjustability in action'
        ],
        donts: [
          'Don\'t compare to consumer monitors—position as professional tool',
          'Don\'t focus only on specs—lead with outcomes and confidence',
          'Don\'t use generic gaming or entertainment imagery',
          'Don\'t undersell color accuracy—it\'s the core value',
          'Don\'t ignore the aspiring creator segment—they\'re future professionals',
          'Don\'t position as "cheap alternative"—it\'s accessible professional quality'
        ]
      },
      
      confidenceScore: 89,
      personaMatchScore: 96,
      messageStrengthScore: 93,
      rtbCount: 7,
      status: 'Enhanced'
    }
  ];

  // Generate additional 197 SKUs for table views - matching assetGenerator IDs 4-200 with real product data
  const additionalProductData = [
    // TVs & Displays (30)
    { id: 4, sku: 'TV5543', name: 'Samsung 55" 4K QLED Smart TV', category: 'Electronics', brand: 'Samsung', quality: 92 },
    { id: 5, sku: 'TV6543', name: 'LG 65" 4K OLED Smart TV', category: 'Electronics', brand: 'LG', quality: 96 },
    { id: 6, sku: 'TV4332', name: 'TCL 43" 4K Roku TV', category: 'Electronics', brand: 'TCL', quality: 85 },
    { id: 7, sku: 'TV7585', name: 'Sony 75" 4K LED Smart TV', category: 'Electronics', brand: 'Sony', quality: 94 },
    { id: 8, sku: 'TV3243', name: 'Hisense 32" HD Smart TV', category: 'Electronics', brand: 'Hisense', quality: 78 },
    { id: 9, sku: 'MON2724', name: 'Dell 27" 4K IPS Monitor', category: 'Electronics', brand: 'Dell', quality: 91 },
    { id: 10, sku: 'MON3227', name: 'ASUS 32" 4K Gaming Monitor 144Hz', category: 'Electronics', brand: 'ASUS', quality: 93 },
    { id: 11, sku: 'MON2427', name: 'ViewSonic 24" Full HD Monitor', category: 'Electronics', brand: 'ViewSonic', quality: 82 },
    { id: 12, sku: 'MON3434', name: 'LG 34" UltraWide Curved Monitor', category: 'Electronics', brand: 'LG', quality: 90 },
    { id: 13, sku: 'TV8585', name: 'Samsung 85" 8K QLED TV', category: 'Electronics', brand: 'Samsung', quality: 97 },
    { id: 14, sku: 'TV5043', name: 'Sony 50" 4K Bravia TV', category: 'Electronics', brand: 'Sony', quality: 89 },
    { id: 15, sku: 'MON2724G', name: 'MSI 27" Gaming Monitor 240Hz', category: 'Electronics', brand: 'MSI', quality: 92 },
    { id: 16, sku: 'TV4350', name: 'Vizio 43" 4K Smart TV', category: 'Electronics', brand: 'Vizio', quality: 84 },
    { id: 17, sku: 'MON1524', name: 'Portable 15.6" USB-C Monitor', category: 'Electronics', brand: 'ASUS', quality: 86 },
    { id: 18, sku: 'PRJ4500', name: '4K Home Theater Projector', category: 'Electronics', brand: 'Epson', quality: 91 },
    { id: 19, sku: 'TV6565', name: 'LG 65" NanoCell 4K TV', category: 'Electronics', brand: 'LG', quality: 90 },
    { id: 20, sku: 'MON2827C', name: 'Samsung 28" 4K Curved Monitor', category: 'Electronics', brand: 'Samsung', quality: 88 },
    { id: 21, sku: 'TV5555', name: 'Hisense 55" ULED 4K TV', category: 'Electronics', brand: 'Hisense', quality: 87 },
    { id: 22, sku: 'MON3227U', name: 'BenQ 32" 4K Designer Monitor', category: 'Electronics', brand: 'BenQ', quality: 93 },
    { id: 23, sku: 'TV7575', name: 'Sony 75" X90K 4K TV', category: 'Electronics', brand: 'Sony', quality: 95 },
    { id: 24, sku: 'MON2424', name: 'HP 24" Full HD Monitor', category: 'Electronics', brand: 'HP', quality: 80 },
    { id: 25, sku: 'TV8577', name: 'Samsung 85" Neo QLED 8K', category: 'Electronics', brand: 'Samsung', quality: 98 },
    { id: 26, sku: 'MON4932', name: 'Samsung 49" Super Ultra Wide', category: 'Electronics', brand: 'Samsung', quality: 94 },
    { id: 27, sku: 'PRJ3000', name: 'Portable Mini Projector', category: 'Electronics', brand: 'Anker', quality: 83 },
    { id: 28, sku: 'TV6060', name: 'TCL 60" 4K QLED TV', category: 'Electronics', brand: 'TCL', quality: 86 },
    { id: 29, sku: 'MON2727P', name: 'Dell 27" QHD Professional Monitor', category: 'Electronics', brand: 'Dell', quality: 90 },
    { id: 30, sku: 'TV4848', name: 'LG 48" OLED C3 TV', category: 'Electronics', brand: 'LG', quality: 96 },
    { id: 31, sku: 'MON3429', name: 'LG 34" UltraWide 5K Monitor', category: 'Electronics', brand: 'LG', quality: 92 },
    { id: 32, sku: 'TV5565', name: 'Vizio 55" OLED 4K TV', category: 'Electronics', brand: 'Vizio', quality: 89 },
    { id: 33, sku: 'PRJ5000', name: 'Laser 4K Projector', category: 'Electronics', brand: 'LG', quality: 93 },

    // Audio (35)
    { id: 34, sku: 'AUD456', name: 'Sony WF-1000XM5 True Wireless Earbuds', category: 'Electronics', brand: 'Sony', quality: 95 },
    { id: 35, sku: 'AUD789', name: 'Bose QuietComfort 45 Headphones', category: 'Electronics', brand: 'Bose', quality: 94 },
    { id: 36, sku: 'AUD234', name: 'Sonos One Smart Speaker', category: 'Electronics', brand: 'Sonos', quality: 93 },
    { id: 37, sku: 'AUD567', name: 'JBL Flip 6 Portable Bluetooth Speaker', category: 'Electronics', brand: 'JBL', quality: 88 },
    { id: 38, sku: 'AUD890', name: 'Sennheiser HD 660S Headphones', category: 'Electronics', brand: 'Sennheiser', quality: 96 },
    { id: 39, sku: 'AUD123', name: 'Beats Studio Buds+ Earbuds', category: 'Electronics', brand: 'Beats', quality: 87 },
    { id: 40, sku: 'AUD345', name: 'Anker Soundcore Life Q30 Headphones', category: 'Electronics', brand: 'Anker', quality: 85 },
    { id: 41, sku: 'AUD678', name: 'Jabra Elite 85t Earbuds', category: 'Electronics', brand: 'Jabra', quality: 91 },
    { id: 42, sku: 'AUD901', name: 'Audio-Technica ATH-M50x Headphones', category: 'Electronics', brand: 'Audio-Technica', quality: 92 },
    { id: 43, sku: 'AUD445', name: 'Bose SoundLink Revolve+ Speaker', category: 'Electronics', brand: 'Bose', quality: 90 },
    { id: 44, sku: 'AUD556', name: 'Sony WH-1000XM5 Headphones', category: 'Electronics', brand: 'Sony', quality: 97 },
    { id: 45, sku: 'AUD667', name: 'JBL Charge 5 Portable Speaker', category: 'Electronics', brand: 'JBL', quality: 89 },
    { id: 46, sku: 'AUD778', name: 'Apple AirPods Pro 2nd Gen', category: 'Electronics', brand: 'Apple', quality: 95 },
    { id: 47, sku: 'AUD889', name: 'Sonos Arc Soundbar', category: 'Electronics', brand: 'Sonos', quality: 96 },
    { id: 48, sku: 'AUD990', name: 'Blue Yeti USB Microphone', category: 'Electronics', brand: 'Blue', quality: 90 },
    { id: 49, sku: 'AUD111', name: 'Bose SoundLink Mini II Speaker', category: 'Electronics', brand: 'Bose', quality: 88 },
    { id: 50, sku: 'AUD222', name: 'Samsung Galaxy Buds2 Pro', category: 'Electronics', brand: 'Samsung', quality: 90 },
    { id: 51, sku: 'AUD333', name: 'Beats Solo3 Wireless Headphones', category: 'Electronics', brand: 'Beats', quality: 86 },
    { id: 52, sku: 'AUD444', name: 'JBL PartyBox 310 Speaker', category: 'Electronics', brand: 'JBL', quality: 87 },
    { id: 53, sku: 'AUD555', name: 'Shure MV7 Podcast Microphone', category: 'Electronics', brand: 'Shure', quality: 93 },
    { id: 54, sku: 'AUD666', name: 'Sonos Beam Soundbar Gen 2', category: 'Electronics', brand: 'Sonos', quality: 92 },
    { id: 55, sku: 'AUD777', name: 'Anker Soundcore Liberty 4 Earbuds', category: 'Electronics', brand: 'Anker', quality: 86 },
    { id: 56, sku: 'AUD888', name: 'Bose 700 Noise Cancelling Headphones', category: 'Electronics', brand: 'Bose', quality: 94 },
    { id: 57, sku: 'AUD999', name: 'Ultimate Ears BOOM 3 Speaker', category: 'Electronics', brand: 'Ultimate Ears', quality: 87 },
    { id: 58, sku: 'AUD100', name: 'Rode NT-USB Mini Microphone', category: 'Electronics', brand: 'Rode', quality: 88 },
    { id: 59, sku: 'AUD200', name: 'Klipsch The Three II Speaker', category: 'Electronics', brand: 'Klipsch', quality: 91 },
    { id: 60, sku: 'AUD300', name: 'Sennheiser Momentum 4 Wireless', category: 'Electronics', brand: 'Sennheiser', quality: 95 },
    { id: 61, sku: 'AUD400', name: 'Nothing Ear (2) Earbuds', category: 'Electronics', brand: 'Nothing', quality: 85 },
    { id: 62, sku: 'AUD500', name: 'Bose Smart Soundbar 900', category: 'Electronics', brand: 'Bose', quality: 95 },
    { id: 63, sku: 'AUD600', name: 'Marshall Emberton II Speaker', category: 'Electronics', brand: 'Marshall', quality: 88 },
    { id: 64, sku: 'AUD700', name: 'Sony WF-C700N Earbuds', category: 'Electronics', brand: 'Sony', quality: 84 },
    { id: 65, sku: 'AUD800', name: 'HyperX Cloud II Gaming Headset', category: 'Electronics', brand: 'HyperX', quality: 87 },
    { id: 66, sku: 'AUD900', name: 'Edifier R1280T Bookshelf Speakers', category: 'Electronics', brand: 'Edifier', quality: 83 },
    { id: 67, sku: 'AUD950', name: 'Elgato Wave:3 Microphone', category: 'Electronics', brand: 'Elgato', quality: 89 },
    { id: 68, sku: 'AUD975', name: 'JBL Bar 5.1 Surround Soundbar', category: 'Electronics', brand: 'JBL', quality: 90 },

    // Computing (30) - continuing the pattern for all 197 products
    { id: 69, sku: 'LAP892', name: 'Dell XPS 13 Ultrabook', category: 'Electronics', brand: 'Dell', quality: 94 },
    { id: 70, sku: 'LAP456', name: 'HP Pavilion 15 Laptop', category: 'Electronics', brand: 'HP', quality: 86 },
    { id: 71, sku: 'LAP789', name: 'MacBook Air M2', category: 'Electronics', brand: 'Apple', quality: 97 },
    { id: 72, sku: 'LAP123', name: 'ASUS ROG Zephyrus Gaming Laptop', category: 'Electronics', brand: 'ASUS', quality: 95 },
    { id: 73, sku: 'LAP345', name: 'Lenovo ThinkPad X1 Carbon', category: 'Electronics', brand: 'Lenovo', quality: 93 },
    { id: 74, sku: 'TAB567', name: 'iPad Pro 12.9"', category: 'Electronics', brand: 'Apple', quality: 96 },
    { id: 75, sku: 'TAB890', name: 'Samsung Galaxy Tab S9', category: 'Electronics', brand: 'Samsung', quality: 92 },
    { id: 76, sku: 'TAB234', name: 'Amazon Fire HD 10', category: 'Electronics', brand: 'Amazon', quality: 79 },
    { id: 77, sku: 'KEY456', name: 'Logitech MX Keys Mechanical Keyboard', category: 'Electronics', brand: 'Logitech', quality: 92 },
    { id: 78, sku: 'KEY789', name: 'Corsair K95 RGB Gaming Keyboard', category: 'Electronics', brand: 'Corsair', quality: 90 },
    { id: 79, sku: 'KEY123', name: 'Keychron K2 Wireless Mechanical', category: 'Electronics', brand: 'Keychron', quality: 88 },
    { id: 80, sku: 'MOU456', name: 'Logitech MX Master 3S Mouse', category: 'Electronics', brand: 'Logitech', quality: 94 },
    { id: 81, sku: 'MOU789', name: 'Razer DeathAdder V3 Gaming Mouse', category: 'Electronics', brand: 'Razer', quality: 91 },
    { id: 82, sku: 'MOU123', name: 'Apple Magic Mouse', category: 'Electronics', brand: 'Apple', quality: 85 },
    { id: 83, sku: 'CAM789', name: 'Logitech C920 HD Webcam', category: 'Electronics', brand: 'Logitech', quality: 88 },
    { id: 84, sku: 'CAM345', name: 'Razer Kiyo Pro Ultra 4K Webcam', category: 'Electronics', brand: 'Razer', quality: 93 },
    { id: 85, sku: 'LAP678', name: 'Microsoft Surface Laptop 5', category: 'Electronics', brand: 'Microsoft', quality: 91 },
    { id: 86, sku: 'LAP901', name: 'Acer Swift 3 Laptop', category: 'Electronics', brand: 'Acer', quality: 84 },
    { id: 87, sku: 'TAB678', name: 'Microsoft Surface Pro 9', category: 'Electronics', brand: 'Microsoft', quality: 93 },
    { id: 88, sku: 'TAB901', name: 'Lenovo Tab P11 Pro', category: 'Electronics', brand: 'Lenovo', quality: 87 },
    { id: 89, sku: 'KEY345', name: 'Razer BlackWidow V4 Keyboard', category: 'Electronics', brand: 'Razer', quality: 89 },
    { id: 90, sku: 'KEY678', name: 'Microsoft Ergonomic Keyboard', category: 'Electronics', brand: 'Microsoft', quality: 83 },
    { id: 91, sku: 'MOU345', name: 'Logitech G502 HERO Gaming Mouse', category: 'Electronics', brand: 'Logitech', quality: 90 },
    { id: 92, sku: 'MOU678', name: 'Microsoft Ergonomic Mouse', category: 'Electronics', brand: 'Microsoft', quality: 82 },
    { id: 93, sku: 'CAM567', name: 'Elgato Facecam Pro 4K Webcam', category: 'Electronics', brand: 'Elgato', quality: 92 },
    { id: 94, sku: 'ACC123', name: 'Laptop Stand Aluminum', category: 'Electronics', brand: 'Rain Design', quality: 86 },
    { id: 95, sku: 'ACC456', name: 'USB-C Hub 7-in-1', category: 'Electronics', brand: 'Anker', quality: 87 },
    { id: 96, sku: 'LAP234', name: 'ASUS VivoBook 15', category: 'Electronics', brand: 'ASUS', quality: 82 },
    { id: 97, sku: 'TAB345', name: 'iPad Air 5th Gen', category: 'Electronics', brand: 'Apple', quality: 94 },
    { id: 98, sku: 'MOU901', name: 'Logitech MX Vertical Ergonomic Mouse', category: 'Electronics', brand: 'Logitech', quality: 89 },

    // Remaining products 99-200 (Mobile, Smart Home, Gaming, Wearables, Photography, Networking, Storage)
    { id: 99, sku: 'PHN123', name: 'iPhone 15 Pro', category: 'Electronics', brand: 'Apple', quality: 97 },
    { id: 100, sku: 'PHN456', name: 'Samsung Galaxy S24 Ultra', category: 'Electronics', brand: 'Samsung', quality: 96 },
    { id: 101, sku: 'PHN789', name: 'Google Pixel 8 Pro', category: 'Electronics', brand: 'Google', quality: 94 },
    { id: 102, sku: 'CAS123', name: 'OtterBox Defender iPhone Case', category: 'Electronics', brand: 'OtterBox', quality: 90 },
    { id: 103, sku: 'CAS456', name: 'Spigen Ultra Hybrid Case', category: 'Electronics', brand: 'Spigen', quality: 85 },
    { id: 104, sku: 'CAS789', name: 'Apple Silicone iPhone Case', category: 'Electronics', brand: 'Apple', quality: 88 },
    { id: 105, sku: 'SCR123', name: 'Tempered Glass Screen Protector 2-Pack', category: 'Electronics', brand: 'AmFilm', quality: 83 },
    { id: 106, sku: 'PWR123', name: 'Anker PowerCore 20000mAh Power Bank', category: 'Electronics', brand: 'Anker', quality: 91 },
    { id: 107, sku: 'PWR456', name: 'Anker 30000mAh USB-C Power Bank', category: 'Electronics', brand: 'Anker', quality: 92 },
    { id: 108, sku: 'PWR789', name: 'Belkin 10000mAh Wireless Power Bank', category: 'Electronics', brand: 'Belkin', quality: 88 },
    { id: 109, sku: 'CBL123', name: 'USB-C to Lightning Cable 6ft', category: 'Electronics', brand: 'Anker', quality: 86 },
    { id: 110, sku: 'CBL456', name: 'Braided USB-C Cable 3-Pack', category: 'Electronics', brand: 'UGREEN', quality: 84 },
    { id: 111, sku: 'CHG123', name: 'Anker 65W USB-C Wall Charger', category: 'Electronics', brand: 'Anker', quality: 90 },
    { id: 112, sku: 'CHG456', name: 'Belkin 3-in-1 Wireless Charger', category: 'Electronics', brand: 'Belkin', quality: 91 },
    { id: 113, sku: 'MNT123', name: 'Magnetic Car Phone Mount', category: 'Electronics', brand: 'iOttie', quality: 87 },
    { id: 114, sku: 'MNT456', name: 'Dashboard Phone Holder', category: 'Electronics', brand: 'Mpow', quality: 82 },
    { id: 115, sku: 'PHN234', name: 'OnePlus 12 Smartphone', category: 'Electronics', brand: 'OnePlus', quality: 92 },
    { id: 116, sku: 'PHN567', name: 'Xiaomi 13 Pro', category: 'Electronics', brand: 'Xiaomi', quality: 91 },
    { id: 117, sku: 'CAS234', name: 'Leather Wallet iPhone Case', category: 'Electronics', brand: 'Bellroy', quality: 89 },
    { id: 118, sku: 'PWR234', name: 'RAVPower 26800mAh Power Bank', category: 'Electronics', brand: 'RAVPower', quality: 90 },
    { id: 119, sku: 'CHG789', name: 'Apple MagSafe Charger', category: 'Electronics', brand: 'Apple', quality: 93 },
    { id: 120, sku: 'MNT789', name: 'Adjustable Phone Stand', category: 'Electronics', brand: 'Lamicall', quality: 81 },
    { id: 121, sku: 'CBL789', name: 'Apple USB-C to Lightning Cable', category: 'Electronics', brand: 'Apple', quality: 92 },
    { id: 122, sku: 'CAS567', name: 'Samsung Silicone Case', category: 'Electronics', brand: 'Samsung', quality: 86 },
    { id: 123, sku: 'SCR456', name: 'Privacy Screen Protector', category: 'Electronics', brand: 'ZAGG', quality: 88 },
    { id: 124, sku: 'SMT123', name: 'Ring Video Doorbell Pro 2', category: 'Electronics', brand: 'Ring', quality: 92 },
    { id: 125, sku: 'SMT456', name: 'Nest Learning Thermostat', category: 'Electronics', brand: 'Nest', quality: 94 },
    { id: 126, sku: 'SMT789', name: 'Arlo Pro 4 Security Camera 2-Pack', category: 'Electronics', brand: 'Arlo', quality: 91 },
    { id: 127, sku: 'SMT234', name: 'Philips Hue White & Color 4-Bulb Starter Kit', category: 'Electronics', brand: 'Philips Hue', quality: 93 },
    { id: 128, sku: 'SMT567', name: 'TP-Link Kasa Smart Plug 4-Pack', category: 'Electronics', brand: 'TP-Link', quality: 86 },
    { id: 129, sku: 'SMT890', name: 'August Smart Lock Pro', category: 'Electronics', brand: 'August', quality: 90 },
    { id: 130, sku: 'SMT345', name: 'Wyze Cam v3 Indoor/Outdoor Camera', category: 'Electronics', brand: 'Wyze', quality: 84 },
    { id: 131, sku: 'SMT678', name: 'ecobee SmartThermostat Premium', category: 'Electronics', brand: 'ecobee', quality: 93 },
    { id: 132, sku: 'SMT901', name: 'Ring Indoor Cam', category: 'Electronics', brand: 'Ring', quality: 85 },
    { id: 133, sku: 'SMT111', name: 'Philips Hue LED Light Strip 6ft', category: 'Electronics', brand: 'Philips Hue', quality: 89 },
    { id: 134, sku: 'SMT222', name: 'Samsung SmartThings Hub', category: 'Electronics', brand: 'Samsung', quality: 87 },
    { id: 135, sku: 'SMT333', name: 'Lutron Caseta Smart Dimmer Switch', category: 'Electronics', brand: 'Lutron', quality: 90 },
    { id: 136, sku: 'SMT444', name: 'Ring Alarm 8-piece Security Kit', category: 'Electronics', brand: 'Ring', quality: 91 },
    { id: 137, sku: 'SMT555', name: 'Arlo Essential Video Doorbell', category: 'Electronics', brand: 'Arlo', quality: 88 },
    { id: 138, sku: 'SMT666', name: 'Eve Motion Sensor', category: 'Electronics', brand: 'Eve', quality: 83 },
    { id: 139, sku: 'SMT777', name: 'Yale Assure Lock 2', category: 'Electronics', brand: 'Yale', quality: 92 },
    { id: 140, sku: 'SMT888', name: 'Google Nest Cam Indoor', category: 'Electronics', brand: 'Nest', quality: 89 },
    { id: 141, sku: 'SMT999', name: 'Philips Hue Play Light Bar 2-Pack', category: 'Electronics', brand: 'Philips Hue', quality: 90 },
    { id: 142, sku: 'SMT100', name: 'TP-Link Tapo Smart Bulb 4-Pack', category: 'Electronics', brand: 'TP-Link', quality: 82 },
    { id: 143, sku: 'SMT200', name: 'Ring Floodlight Cam Wired Plus', category: 'Electronics', brand: 'Ring', quality: 90 },
    { id: 144, sku: 'SMT300', name: 'Honeywell Home T9 Thermostat', category: 'Electronics', brand: 'Honeywell', quality: 88 },
    { id: 145, sku: 'SMT400', name: 'Kasa Smart Light Switch 3-Way', category: 'Electronics', brand: 'TP-Link', quality: 85 },
    { id: 146, sku: 'SMT500', name: 'Nest Protect Smoke Detector', category: 'Electronics', brand: 'Nest', quality: 91 },
    { id: 147, sku: 'SMT600', name: 'Schlage Encode Smart Lock', category: 'Electronics', brand: 'Schlage', quality: 93 },
    { id: 148, sku: 'SMT700', name: 'Blink Outdoor 3-Camera System', category: 'Electronics', brand: 'Blink', quality: 86 },
    { id: 149, sku: 'GAM567', name: 'Xbox Series X Console', category: 'Electronics', brand: 'Microsoft', quality: 96 },
    { id: 150, sku: 'GAM890', name: 'PlayStation 5 Console', category: 'Electronics', brand: 'Sony', quality: 97 },
    { id: 151, sku: 'GAM123', name: 'Nintendo Switch OLED', category: 'Electronics', brand: 'Nintendo', quality: 94 },
    { id: 152, sku: 'GAM456', name: 'Xbox Elite Controller Series 2', category: 'Electronics', brand: 'Microsoft', quality: 93 },
    { id: 153, sku: 'GAM789', name: 'DualSense Wireless Controller', category: 'Electronics', brand: 'Sony', quality: 91 },
    { id: 154, sku: 'GAM234', name: 'Razer Kraken Gaming Headset', category: 'Electronics', brand: 'Razer', quality: 88 },
    { id: 155, sku: 'GAM345', name: 'SteelSeries Arctis Nova Pro Wireless', category: 'Electronics', brand: 'SteelSeries', quality: 95 },
    { id: 156, sku: 'GAM678', name: 'Logitech G923 Racing Wheel', category: 'Electronics', brand: 'Logitech', quality: 92 },
    { id: 157, sku: 'GAM901', name: 'Razer Wolverine V2 Pro Controller', category: 'Electronics', brand: 'Razer', quality: 90 },
    { id: 158, sku: 'GAM111', name: 'Meta Quest 3 VR Headset', category: 'Electronics', brand: 'Meta', quality: 94 },
    { id: 159, sku: 'GAM222', name: 'HyperX Cloud Alpha Wireless Headset', category: 'Electronics', brand: 'HyperX', quality: 91 },
    { id: 160, sku: 'GAM333', name: 'Secretlab Titan Evo Gaming Chair', category: 'Electronics', brand: 'Secretlab', quality: 95 },
    { id: 161, sku: 'GAM444', name: '8BitDo Pro 2 Controller', category: 'Electronics', brand: '8BitDo', quality: 87 },
    { id: 162, sku: 'GAM555', name: 'Thrustmaster T.Flight HOTAS One', category: 'Electronics', brand: 'Thrustmaster', quality: 86 },
    { id: 163, sku: 'GAM666', name: 'PlayStation VR2', category: 'Electronics', brand: 'Sony', quality: 93 },
    { id: 164, sku: 'GAM777', name: 'Corsair K70 RGB Gaming Keyboard', category: 'Electronics', brand: 'Corsair', quality: 90 },
    { id: 165, sku: 'GAM888', name: 'Razer Basilisk V3 Gaming Mouse', category: 'Electronics', brand: 'Razer', quality: 89 },
    { id: 166, sku: 'GAM999', name: 'Elgato Stream Deck', category: 'Electronics', brand: 'Elgato', quality: 92 },
    { id: 167, sku: 'GAM100', name: 'Nintendo Switch Pro Controller', category: 'Electronics', brand: 'Nintendo', quality: 90 },
    { id: 168, sku: 'GAM200', name: 'Razer Enki Gaming Chair', category: 'Electronics', brand: 'Razer', quality: 89 },
    { id: 169, sku: 'WAT123', name: 'Apple Watch Series 9', category: 'Electronics', brand: 'Apple', quality: 97 },
    { id: 170, sku: 'WAT456', name: 'Samsung Galaxy Watch 6', category: 'Electronics', brand: 'Samsung', quality: 93 },
    { id: 171, sku: 'WAT789', name: 'Fitbit Charge 6', category: 'Electronics', brand: 'Fitbit', quality: 89 },
    { id: 172, sku: 'WAT234', name: 'Garmin Forerunner 965', category: 'Electronics', brand: 'Garmin', quality: 95 },
    { id: 173, sku: 'WAT567', name: 'Amazfit GTR 4', category: 'Electronics', brand: 'Amazfit', quality: 87 },
    { id: 174, sku: 'WAT890', name: 'Fitbit Inspire 3', category: 'Electronics', brand: 'Fitbit', quality: 85 },
    { id: 175, sku: 'WAT111', name: 'Garmin Venu 3', category: 'Electronics', brand: 'Garmin', quality: 92 },
    { id: 176, sku: 'WAT222', name: 'Whoop 4.0', category: 'Electronics', brand: 'Whoop', quality: 90 },
    { id: 177, sku: 'WAT333', name: 'Oura Ring Gen 3', category: 'Electronics', brand: 'Oura', quality: 91 },
    { id: 178, sku: 'WAT444', name: 'Polar Vantage V3', category: 'Electronics', brand: 'Polar', quality: 93 },
    { id: 179, sku: 'WAT555', name: 'Xiaomi Mi Band 8', category: 'Electronics', brand: 'Xiaomi', quality: 82 },
    { id: 180, sku: 'WAT666', name: 'Apple Watch Ultra 2', category: 'Electronics', brand: 'Apple', quality: 98 },
    { id: 181, sku: 'WAT777', name: 'Garmin Fenix 7X', category: 'Electronics', brand: 'Garmin', quality: 96 },
    { id: 182, sku: 'WAT888', name: 'Withings ScanWatch', category: 'Electronics', brand: 'Withings', quality: 88 },
    { id: 183, sku: 'WAT999', name: 'Coros Pace 3', category: 'Electronics', brand: 'Coros', quality: 86 },
    { id: 184, sku: 'CAM123', name: 'Sony A7 IV Mirrorless Camera', category: 'Electronics', brand: 'Sony', quality: 96 },
    { id: 185, sku: 'CAM456', name: 'Canon EOS R6 Mark II', category: 'Electronics', brand: 'Canon', quality: 95 },
    { id: 186, sku: 'CAM890', name: 'GoPro HERO12 Black', category: 'Electronics', brand: 'GoPro', quality: 92 },
    { id: 187, sku: 'DRN445', name: 'DJI Mini 3 Pro Drone', category: 'Electronics', brand: 'DJI', quality: 93 },
    { id: 188, sku: 'DRN678', name: 'DJI Air 3 Drone', category: 'Electronics', brand: 'DJI', quality: 94 },
    { id: 189, sku: 'CAM234', name: 'Insta360 X3 Action Camera', category: 'Electronics', brand: 'Insta360', quality: 90 },
    { id: 190, sku: 'ACC789', name: 'Manfrotto Carbon Fiber Tripod', category: 'Electronics', brand: 'Manfrotto', quality: 91 },
    { id: 191, sku: 'ACC234', name: 'DJI RS 3 Pro Gimbal', category: 'Electronics', brand: 'DJI', quality: 93 },
    { id: 192, sku: 'DRN901', name: 'DJI Mavic 3 Classic', category: 'Electronics', brand: 'DJI', quality: 95 },
    { id: 193, sku: 'CAM567', name: 'Nikon Z8 Mirrorless Camera', category: 'Electronics', brand: 'Nikon', quality: 97 },
    { id: 194, sku: 'NET678', name: 'TP-Link AX6000 WiFi 6 Router', category: 'Electronics', brand: 'TP-Link', quality: 89 },
    { id: 195, sku: 'NET123', name: 'Netgear Orbi WiFi 6E Mesh System', category: 'Electronics', brand: 'Netgear', quality: 93 },
    { id: 196, sku: 'NET456', name: 'ASUS RT-AX88U Gaming Router', category: 'Electronics', brand: 'ASUS', quality: 91 },
    { id: 197, sku: 'NET789', name: 'TP-Link RE705X WiFi 6 Range Extender', category: 'Electronics', brand: 'TP-Link', quality: 85 },
    { id: 198, sku: 'NET234', name: 'Google Nest WiFi Pro 6E', category: 'Electronics', brand: 'Google', quality: 90 },
    { id: 199, sku: 'STO901', name: 'Samsung T7 2TB Portable SSD', category: 'Electronics', brand: 'Samsung', quality: 93 },
    { id: 200, sku: 'STO123', name: 'WD My Passport 4TB External HDD', category: 'Electronics', brand: 'Western Digital', quality: 87 }
  ];

  const additionalProducts: EnhancedAsset[] = additionalProductData.map(product => {
    const confidenceScore = 85 + Math.floor(product.quality / 7);
    
    return {
      id: product.id,
      sku: product.sku,
      name: product.name,
      
      appliedLadders: ['functional-emotional'],
      primaryLadder: 'functional-emotional',
      category: product.category,
      brand: product.brand,
      coreValueProposition: `Premium ${product.name} with advanced features`,
      primaryPersona: 'Tech-savvy Consumer',
      keyDifferentiator: 'Superior performance and value',
      contentApproach: 'Feature-benefit focused messaging',
      benefitLadder: { 
        levels: [{ 
          feature: 'Advanced technology', 
          functionalBenefit: 'Enhanced performance', 
          emotionalBenefit: 'Confidence in quality', 
          value: 'Reliable investment', 
          proof: 'Customer satisfaction' 
        }] 
      },
      personas: [{ 
        name: 'Primary User', 
        description: 'Target consumer', 
        demographics: 'Broad market', 
        psychographics: 'Quality-focused', 
        buyingMotivations: ['Quality', 'Value'], 
        painPoints: ['Cost concerns'], 
        decisionCriteria: ['Features', 'Price'], 
        messagingPreferences: 'Direct and clear', 
        matchScore: 85 
      }],
      messageHierarchy: {
        primaryMessage: `Premium ${product.name}`,
        supportingMessages: [
          { content: 'Advanced features', priority: 1, type: 'primary' as const, score: 85 },
          { content: 'Great value', priority: 2, type: 'supporting' as const, score: 80 }
        ],
        proofPoints: ['Customer reviews', 'Industry certifications']
      },
      reasonsToBuy: [
        { category: 'rational' as const, reason: 'Quality construction', supportingEvidence: 'Reviews', confidenceScore: 85 },
        { category: 'emotional' as const, reason: 'Confidence in brand', supportingEvidence: 'Brand reputation', confidenceScore: 80 }
      ],
      socialProof: {
        awards: ['Industry recognition'],
        certifications: ['CE', 'FCC'],
        expertEndorsements: ['Tech reviewers'],
        customerTestimonials: ['Positive feedback'],
        statisticalProof: ['4+ star rating'],
        mediaMentions: ['Featured in reviews']
      },
      positioning: { 
        positioningStatement: 'Premium quality at accessible price',
        competitiveAdvantages: [{ competitor: 'Competitors', advantage: 'Better value' }],
        differentiationStrategy: 'Quality-value balance',
        marketPosition: 'Mid-premium segment'
      },
      storytelling: { 
        hero: 'The consumer',
        problem: 'Finding quality products',
        solution: 'Our product',
        transformation: 'Satisfied customer',
        callToAction: 'Purchase now',
        emotionalArc: 'Discovery to satisfaction'
      },
      objections: [
        { 
          objection: 'Price concern', 
          counterArgument: 'Long-term value', 
          supportingEvidence: 'Cost per use analysis',
          toneRecommendation: 'Reassuring and factual'
        }
      ],
      conversionHeuristics: { 
        highImpactElements: ['Clear pricing', 'Reviews'],
        messageVariants: [{ variant: 'Value-focused', predictedLift: '+15%' }],
        abTestRecommendations: ['Test pricing display', 'Test CTA wording'],
        estimatedLift: '+20% conversion'
      },
      psychologyTriggers: [
        { 
          principle: 'Social proof', 
          application: 'Customer reviews', 
          implementation: 'Display ratings prominently'
        }
      ],
      contentBrief: {
        toneOfVoice: 'Professional and approachable',
        keyMessages: ['Quality', 'Value', 'Reliability'],
        personaTargeting: 'Tech-savvy consumers',
        requiredElements: ['Product images', 'Specifications', 'Reviews'],
        contentStructure: 'Hero section, features, testimonials, CTA',
        dos: ['Highlight key features', 'Show social proof'],
        donts: ['Avoid technical jargon', 'Don\'t oversell']
      },
      confidenceScore,
      personaMatchScore: 85,
      messageStrengthScore: 85,
      rtbCount: 3,
      status: 'Enhanced' as const
    };
  });

  return [...baseAssets, ...additionalProducts];
};
