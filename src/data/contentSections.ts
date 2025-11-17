
import { Globe, FileText, Image, Mail, Printer, GraduationCap, HelpCircle, Search } from 'lucide-react';

export interface ContentItemMetadata {
  frameworks?: string[];
  enrichmentSources?: string[];
  behavioralTriggers?: string[];
}

export interface ContentItem {
  label: string;
  content: string;
  metadata?: ContentItemMetadata;
}

export interface ContentSection {
  icon: any;
  title: string;
  description: string;
  items: ContentItem[];
}

export const contentSections: ContentSection[] = [
  {
    icon: Globe,
    title: "PDP Content",
    description: "Comprehensive product detail page content",
    items: [
      {
        label: "Meta Title H1 (SEO Optimized)",
        content: "CD1234 Wireless Headphones — 24 Hours That Actually Last | Bluetooth 5.0 | Foldable Pro Design",
        metadata: {
          enrichmentSources: ["High search volume: '24 hour wireless headphones'", "Top keyword: 'Bluetooth 5.0'"],
          frameworks: ["SEO Opportunities"]
        }
      },
      {
        label: "Hero Introduction",
        content: "You're 6 hours into your workday. Back-to-back Zoom calls. Your Beats died at 3pm again.\n\nNot the CD1234.\n\nTwenty-four hours of verified, uninterrupted audio means you show up confident in every meeting, prepared for every flight, and focused through every deadline. Your colleagues hear crystal clarity. You feel the difference that reliable tech makes.\n\nBecause professionals don't have time for charging anxiety.",
        metadata: {
          frameworks: ["Ladder of Benefits: Feature → Feature Benefit → Consumer Benefit → Emotional/Social"],
          enrichmentSources: ["Customer sentiment: Battery life = Top feature (4.8/5)", "Search trends: 'long battery headphones'"],
          behavioralTriggers: ["Loss Aversion: 'Never worry'"]
        }
      },
      {
        label: "Feature Bullets",
        content: "• 24-hour verified battery — Tested at 65% volume with music, podcasts, and calls. Your full workday. Your evening workout. Your morning commute. One charge.\n\n• Bluetooth 5.0 with 99.9% stability — Seamless switching between your MacBook, iPhone, and iPad. Zero dropouts. Zero frustration. Zero \"can you hear me now?\"\n\n• Folds to half-size — From your daily carry to your overnight bag in one motion. 250g that disappear into your life, not dominate it.\n\n• Studio-grade microphone — Clients don't know you're calling from your kitchen. That's the point. Crystal clarity that protects your professional reputation.\n\n• All-day comfort verified — 8+ hours tested by remote workers who actually wear them. Protein leather that breathes. Pressure distribution that works.",
        metadata: {
          frameworks: ["Ladder of Benefits: 4 discrete ladders for battery, Bluetooth, foldable, audio features"],
          enrichmentSources: ["Customer reviews: Comfort rated 4.6/5", "Top features mentioned: Battery, Foldability"]
        }
      },
      {
        label: "Lifestyle Section (Jobs to Be Done)",
        content: "**Hire CD1234 for the job of:**\n\n**✈️ Surviving Red-Eyes Without the Chaos**\nThat 11pm departure to Singapore. Crying baby in 14C. You need sleep, not noise. The CD1234 creates your 30,000-foot sanctuary — passive isolation that blocks engine drone, battery that lasts the entire flight, foldable design that fits your already-packed carry-on. Land refreshed, not wrecked.\n\n**💪 Powering Through When Motivation Quits**\nMile 4 of 6. Your playlist is the only thing between you and stopping. The CD1234 stays secure through burpees, survives your sweat, and never dies mid-set. Because quitting should be your choice, not your tech's.\n\n**💼 Sounding Like You're Worth What You Charge**\nYour 2pm client call. They're deciding between you and someone cheaper. Then they hear your audio quality — crisp, professional, zero echo. They hear confidence. The CD1234's studio-grade mic doesn't just transmit your voice. It transmits your credibility.\n\n**🎯 Building Your Focus Fortress**\nOpen office. Slack notifications. Someone microwaving fish. You need deep work, not distractions. The CD1234 is your invisible \"Do Not Disturb\" sign. Passive isolation. All-day comfort. The two hours of flow state that make your week.\n\n**📚 Turning Dead Time into Advantage**\n90 minutes daily on the train. That's 7.5 hours weekly. 390 hours yearly. The CD1234 turns your commute into your MBA — audiobooks, podcasts, language learning. Arrive smarter than you left.",
        metadata: {
          frameworks: ["Jobs to Be Done: 5 discrete jobs"],
          enrichmentSources: ["Target audience: Remote workers & frequent travelers", "Use cases: Sleep, fitness, calls, focus, learning"]
        }
      },
      {
        label: "Performance Section",
        content: "**Performance That Stands Scrutiny:**\n\n✓ **24 hours verified by TechReview Labs** — Not marketing hours. Actual hours. Continuous playback at 65% volume with mixed content. Tested until dead. Measured with precision equipment. The number you can trust.\n\n✓ **Bluetooth 5.0 certified — 99.9% connection stability** — Tested across 10,000 connection cycles. Compared to industry average of 94.2%. Seamless switching between devices. No dropouts during calls. No packet loss during music. The invisible technology that just works.\n\n✓ **40mm neodymium drivers** — The same components used in headphones costing £300+. Studio-grade frequency response. Manufactured by the same facilities that supply premium brands. Professional audio without the premium markup.\n\n✓ **10,000 fold cycles tested** — Double the industry standard of 5,000 cycles. Stress-tested in accelerated aging chambers. Hinges that survive your daily routine for years, not months.\n\n✓ **2-year warranty** — We stand behind the engineering. Most competitors offer 1 year. We offer double because we've seen the durability data.",
        metadata: {
          frameworks: ["Reasons to Believe"],
          enrichmentSources: ["Lab test data: 24hr battery verified", "Durability testing: 10,000 fold cycles"]
        }
      },
      {
        label: "Purchase CTA",
        content: "**Decision Time:**\n\n🔥 3 units remaining at launch price of £79.99\n(Regular £99.99 — This price expires Sunday)\n\n👥 17 people viewing right now\n127 units sold this week\n\n✅ **Risk-free 30-day trial**\n98.4% of customers keep them. You'll see why.\n\n🎁 **2-year warranty included** (£29 value)\nPremium protection. Zero extra cost.\n\n⚡ **Order before 8pm for next-day delivery**\nTomorrow morning. Your desk. Problem solved.\n\n💳 **Or 4 interest-free payments of £20**\nPremium tech. Flexible terms.\n\n---\n\n**4.6/5 stars** from 2,847 verified buyers\n\"Worth every penny\" appears in 412 reviews",
        metadata: {
          frameworks: ["Behavioral Economics"],
          behavioralTriggers: ["Scarcity", "Social Proof", "Risk Reversal", "Urgency"]
        }
      },
      {
        label: "Customer Reviews",
        content: "**★★★★★** \"I'm a data analyst — I measure everything. Battery lasted 26 hours at 60% volume with podcasts and music. The CD1234 under-promises and over-delivers. First time that's happened with tech.\"\n— **James K., Data Analyst** (Verified Purchase, 3 months ago)\n\n**★★★★★** \"My team used to ask 'can you get closer to your mic?' Now they compliment my audio. The difference is night and day. I sound like I'm calling from a studio, not my kitchen.\"\n— **Priya S., Product Manager** (Verified Purchase, 2 months ago)\n\n**★★★★★** \"I fly 2x monthly for consulting work. These fold into my laptop bag's side pocket — something my old Sony WH-1000XM4s ($349!) couldn't do. Sound quality is identical. Price is half. I'm genuinely confused why I spent $349.\"\n— **Chen W., Strategy Consultant** (Verified Purchase, 4 months ago)\n\n**★★★★★** \"Switched from Beats Studio3 after they died (again) at 2pm. The CD1234 actually lasts 24 hours. My workday is 9 hours. My evening workout is 1.5 hours. My commute is 2 hours. One charge handles it all. Beats never did.\"\n— **Sarah M., Creative Director** (Verified Purchase, 1 month ago)\n\n---\n\n**Most Mentioned in 2,847 Reviews:**\n- \"Battery actually lasts\" — 89% positive mentions\n- \"Comfortable all day\" — 84% positive mentions\n- \"Worth the price\" — 92% positive mentions\n- \"Zoom call quality\" — 81% positive mentions",
        metadata: {
          frameworks: ["Social Proof", "Distinctive Memory Structures"],
          enrichmentSources: ["Review analysis: Battery = most mentioned benefit", "Sentiment analysis: 4.6/5 average"]
        }
      },
      {
        label: "FAQ Section",
        content: "**Q: Be honest — does the battery really last 24 hours?**\n\nA: Yes. Verified by TechReview Labs with continuous playback at 65% volume. Here's the detail: Mixed content (music, podcasts, calls). Bluetooth 5.0 connection. Result: 24 hours and 17 minutes until complete depletion.\n\nReal-world average from 2,847 users: 23.7 hours.\n\nComparison: Beats Studio3 (22 hours), Sony WH-1000XM4 (30 hours at $349), Bose QC45 (24 hours at $329).\n\nThe CD1234 delivers premium battery at half the price.\n\n---\n\n**Q: Will they actually work for professional Zoom calls?**\n\nA: Better than most dedicated headsets. The omnidirectional microphone is optimized for voice frequency ranges (80Hz-15kHz). Rated 4.8/5 by 847 remote workers.\n\nReal customer feedback: \"My colleagues complimented my audio\" (Priya S., Product Manager).\n\nCompatible with: Zoom, Teams, Google Meet, Skype, Slack, Discord. Works with noise suppression features in all platforms.\n\n---\n\n**Q: Are they actually comfortable for 8+ hours?**\n\nA: Tested by remote workers who wear them for full workdays. Result: 4.2/5 comfort rating after 8+ hours.\n\nWhy they work: 250g ultra-lightweight (lighter than Sony WH-1000XM4 at 254g). Protein leather ear cushions that breathe. Pressure distribution across the headband (not concentrated at the top).\n\n30-day return rate for \"comfort issues\": 1.2% (industry average: 8.4%).\n\n---\n\n**Q: How do they compare to £300+ brands?**\n\nA: Same manufacturer. Same components. Different branding strategy.\n\nThe CD1234 uses 40mm neodymium drivers from the same facility that supplies Bose, Sony, and Beats. Audio quality tested against: Beats Studio3 ($349), Bose QC45 ($329), Sony WH-1000XM4 ($349).\n\nBlind listening test result: 8.2/10 rated CD1234 as equal or better audio quality.\n\nPrice difference: You save £180-£200.\n\nWhy? No celebrity endorsements. No Super Bowl ads. No luxury packaging. Just premium components at fair pricing.\n\n---\n\n**Q: What if I'm not satisfied?**\n\nA: 30-day risk-free returns. No questions asked. Full refund.\n\nThen: 2-year warranty (double the industry standard of 1 year).\n\nCustomer satisfaction data: 98.4% keep their headphones. 4.6/5 average rating from 2,847 verified buyers.\n\nWe stand behind the product because we've seen the durability data.",
        metadata: {
          frameworks: ["Barrier Removal"],
          enrichmentSources: ["Common objections from sales data", "Competitor comparison: Beats, Bose, Sony"]
        }
      }
    ]
  },
  // ... keep existing code for remaining sections (Spec Sheet, Social Media, Email Marketing, Print Materials, Training Materials, Customer Support, SEO Content)
];
