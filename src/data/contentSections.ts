
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
        content: "CD1234 24 Hour Charge Wireless Headphones | Bluetooth 5.0 | Foldable | Mic",
        metadata: {
          enrichmentSources: ["High search volume: '24 hour wireless headphones'", "Top keyword: 'Bluetooth 5.0'"],
          frameworks: ["SEO Opportunities"]
        }
      },
      {
        label: "Hero Introduction (Ladder of Benefits)",
        content: "Never worry about battery life again. The CD1234 delivers 24 hours of uninterrupted listening — making you feel confident in back-to-back meetings and look professional to colleagues. Perfect for the modern professional who values reliability and portability.",
        metadata: {
          frameworks: ["Ladder of Benefits"],
          enrichmentSources: ["Customer sentiment: Battery life = Top feature (4.8/5)", "Search trends: 'long battery headphones'"],
          behavioralTriggers: ["Loss Aversion: 'Never worry'"]
        }
      },
      {
        label: "Feature Bullets (Benefit Ladder Applied)",
        content: "• 24 hours battery life — Never miss a beat in your workday\n• Bluetooth 5.0 connectivity — Stay seamlessly connected without technical frustration\n• Foldable design — Feel organized and prepared for any journey\n• Built-in microphone — Sound professional and confident in every call\n• Premium comfort — Focus on your work, not your headphones",
        metadata: {
          frameworks: ["Ladder of Benefits"],
          enrichmentSources: ["Customer reviews: Comfort rated 4.6/5", "Top features mentioned: Battery, Foldability"]
        }
      },
      {
        label: "Lifestyle Section (Jobs to Be Done)",
        content: "Designed for professionals who hire headphones to:\n• Transform boring commutes into productive time\n• Stay reliably connected during back-to-back video calls\n• Signal 'focused professional' in open office environments\n• Travel light without sacrificing audio quality",
        metadata: {
          frameworks: ["Jobs to Be Done"],
          enrichmentSources: ["Target audience: Remote workers & frequent travelers", "Use cases: Commuting, video calls, travel"]
        }
      },
      {
        label: "When to Use (Category Entry Points)",
        content: "Perfect for every moment:\n• Morning commute — Start your day with focus music\n• 2:30pm energy slump — Power through with energizing podcasts\n• Long flights — Create your own peaceful space\n• Back-to-back Zoom calls — Sound professional every time\n• Gym sessions — Stay motivated with your favorite playlists",
        metadata: {
          frameworks: ["Category Entry Points"],
          enrichmentSources: ["Category use cases: Commuting, meetings, travel, fitness"]
        }
      },
      {
        label: "Performance Section (Reasons to Believe)",
        content: "Proven performance you can trust:\n• 24-hour battery verified by independent testing\n• Bluetooth 5.0 certified — 99.9% connection stability\n• 40mm drivers deliver studio-quality sound\n• 10,000+ fold cycle durability testing\n• 2-year warranty — We stand behind our quality",
        metadata: {
          frameworks: ["Reasons to Believe"],
          enrichmentSources: ["Technical specs: 40mm drivers, BT 5.0", "Performance benchmarks: 24hr battery tested"]
        }
      },
      {
        label: "Purchase CTA (Behavioral Economics)",
        content: "🔥 Only 3 left in stock at this price\n👥 12 people viewing right now\n✅ Free returns — Risk-free 30-day trial\n🎁 2-year warranty included — Premium protection at no extra cost\n⚡ Order within 2 hours for next-day delivery",
        metadata: {
          frameworks: ["Behavioral Economics Arsenal"],
          behavioralTriggers: ["Scarcity", "Social Proof", "Loss Aversion", "Reciprocity", "Urgency"]
        }
      },
      {
        label: "Customer Reviews (Social Proof + Distinctive Memory)",
        content: "★★★★★ \"Battery life is incredible — lasted my entire 8-hour workday plus evening run. Game changer!\"\n★★★★★ \"Best investment for remote work. My colleagues actually compliment how clear I sound on Zoom.\"\n★★★★★ \"Folds so small for travel. Fits in my laptop bag perfectly. Professional quality audio.\"\n★★★★★ \"Switched from Beats Studio — same quality, better battery, half the price. No regrets.\"",
        metadata: {
          frameworks: ["Social Proof", "Competitive Positioning"],
          enrichmentSources: ["Customer sentiment: 4.6/5 average rating", "Competitor analysis: vs Beats Studio3"],
          behavioralTriggers: ["Social Proof", "Authority (testimonials)"]
        }
      },
      {
        label: "FAQ Section (Barrier Removal)",
        content: "Q: How long does the battery really last?\nA: Verified 24 hours — tested with continuous playback at 50% volume.\n\nQ: Will they work for professional Zoom calls?\nA: Yes — optimised microphone for crystal-clear voice. Rated 4.8/5 by remote workers.\n\nQ: Are they comfortable for all-day wear?\nA: Lightweight 250g design with premium protein leather cushions. Tested for 8+ hour comfort.\n\nQ: How do they compare to expensive brands?\nA: Same manufacturers as luxury brands. Professional quality without the markup.\n\nQ: What if I'm not satisfied?\nA: 30-day risk-free returns + 2-year warranty. We've got you covered.",
        metadata: {
          frameworks: ["Purchase Barriers + Solutions"],
          enrichmentSources: ["Common customer questions from reviews", "Competitor pricing data"]
        }
      }
    ]
  },
  {
    icon: FileText,
    title: "Spec Sheet",
    description: "Technical specifications and compatibility details",
    items: [
      {
        label: "Technical Specifications (Reasons to Believe)",
        content: "• Driver Size: 40mm dynamic drivers with neodymium magnets — Studio-grade audio\n• Frequency Response: 20Hz - 20kHz (Hi-Res Audio certified)\n• Bluetooth Version: 5.0 with A2DP, AVRCP, HFP profiles — Latest standard\n• Battery Life: 24 hours continuous playback (independently verified)\n• Charging Time: 2 hours full charge | 15 min = 3 hours playback (Quick charge)\n• Weight: 250g ultra-lightweight — Comfortable for all-day wear\n• Impedance: 32Ω | Sensitivity: 102dB SPL",
        metadata: {
          frameworks: ["Reasons to Believe"],
          enrichmentSources: ["Technical specs from factory data", "Performance benchmarks"]
        }
      },
      {
        label: "Compatibility Information",
        content: "Works seamlessly with:\n• All Bluetooth 5.0 devices (backward compatible with 4.2+)\n• Video conferencing: Zoom, Teams, Google Meet, Skype\n• Operating systems: Windows, macOS, iOS, Android, Linux\n• Audio platforms: Spotify, Apple Music, YouTube, podcasts\n• Gaming consoles: PS5, Xbox Series X/S (with adapter)",
        metadata: {
          frameworks: ["Purchase Barriers + Solutions"],
          enrichmentSources: ["Compatibility data from technical specs"]
        }
      },
      {
        label: "What's in the Box",
        content: "• CD1234 Wireless Headphones\n• USB-C fast charging cable\n• 3.5mm backup audio cable (for wired use)\n• Premium carrying pouch\n• Quick start guide\n• 2-year warranty card",
        metadata: {
          behavioralTriggers: ["Reciprocity: 'Premium included accessories'"]
        }
      }
    ]
  },
  {
    icon: Image,
    title: "Social Media",
    description: "Engaging social media content",
    items: [
      {
        label: "Instagram Caption (Context Triggers)",
        content: "📱 Remote workers, this one's for you.\n\nNever worry about your headphones dying mid-Zoom call again. 24 hours of battery = Freedom to focus on what matters. 🎧\n\n✨ Fold. Pack. Go. Travel-ready design that fits your lifestyle.\n\n💼 Sound professional. Feel confident. Look the part.\n\n#RemoteWork #TechEssentials #ProductivityTools #DigitalNomad #WorkFromAnywhere #ProfessionalAudio",
        metadata: {
          frameworks: ["Context Triggers", "Ladder of Benefits"],
          enrichmentSources: ["Target audience: Remote workers", "Social mentions: Productivity tools trending"]
        }
      },
      {
        label: "LinkedIn Post (Jobs to Be Done)",
        content: "The reality of remote work: Your audio setup matters more than you think.\n\nYour colleagues judge call quality. Clients notice poor audio. Your productivity suffers when tech fails.\n\nCD1234 headphones solve the job of sounding professional:\n✓ 24-hour battery — Never lose connection mid-presentation\n✓ Crystal-clear mic — Your voice, your credibility\n✓ Foldable design — Professional at home, on the road, anywhere\n\nWhat job are you hiring your headphones to do?\n\n#RemoteWork #ProfessionalDevelopment #ProductivityHacks #WorkTech",
        metadata: {
          frameworks: ["Jobs to Be Done", "Social Benefit"],
          enrichmentSources: ["Target audience: Professionals", "Category entry point: Professional meetings"]
        }
      },
      {
        label: "Twitter/X Post (Behavioral Economics)",
        content: "Hot take: Spending £150 on headphones that die by 2pm costs you more than £80 headphones that last 24 hours.\n\nCD1234: 24hr battery | BT 5.0 | Foldable | £79.99\n\nOnly 3 left at launch price 🔥\n\n[Product image]\n\n#TechDeals #RemoteWork",
        metadata: {
          frameworks: ["Behavioral Economics Arsenal", "Value Positioning"],
          behavioralTriggers: ["Scarcity", "Loss Aversion", "Price Anchoring"],
          enrichmentSources: ["Price history: Launch promotion", "Competitor pricing: Beats £150"]
        }
      }
    ]
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Persuasive email campaigns",
    items: [
      {
        label: "Launch Email (Persuasion Stack - Product Aware)",
        content: "Subject: Your next Zoom call sounds better already ✨\n\nHi [Name],\n\nRemember that awkward moment when your headphones die mid-presentation?\n\nNever again.\n\nIntroducing CD1234: 24 hours of wireless freedom.\n\n• Battery anxiety? Gone. (24-hour verified battery)\n• Unprofessional audio? Fixed. (Studio-quality mic)\n• Bulky travel gear? Solved. (Folds to half size)\n\nEarly bird special: £79.99 (Regular £99.99)\nOnly 48 hours. Limited stock.\n\n[Shop Now Button]\n\nP.S. 30-day returns. 2-year warranty. Zero risk.\n\n- The TechSound Team",
        metadata: {
          frameworks: ["Persuasion Stack", "Behavioral Economics Arsenal", "Purchase Barriers + Solutions"],
          behavioralTriggers: ["Scarcity", "Urgency", "Loss Aversion", "Reciprocity"],
          enrichmentSources: ["Customer pain points: Battery anxiety", "Price positioning: Value segment"]
        }
      },
      {
        label: "Cart Abandonment (Conversion Mechanics)",
        content: "Subject: Still thinking about CD1234? Here's why others bought...\n\nHi [Name],\n\nYou left CD1234 headphones in your cart. We get it — big decisions take time.\n\nHere's what convinced 127 people to buy this week:\n\n✓ \"Battery actually lasts 24 hours\" - Sarah M.\n✓ \"Folds small for my laptop bag\" - James K.\n✓ \"Best Zoom audio I've had\" - Priya S.\n\n🎁 Here's £10 off your order: CODE: COMEBACK10\n\n⏰ Expires in 24 hours | Only 2 left in stock\n\n[Complete Purchase Button]\n\nQuestions? Reply to this email — real human here.\n\nRisk-free returns | 2-year warranty",
        metadata: {
          frameworks: ["Conversion Mechanics", "Behavioral Economics Arsenal"],
          behavioralTriggers: ["Social Proof", "Scarcity", "Loss Aversion", "Reciprocity"],
          enrichmentSources: ["Customer testimonials", "Conversion data: Cart abandonment triggers"]
        }
      }
    ]
  },
  {
    icon: Printer,
    title: "Print Materials",
    description: "Physical marketing collateral",
    items: [
      {
        label: "Retail Packaging Copy (Distinctive Memory Structures)",
        content: "FRONT PANEL:\n24 HOURS OF FREEDOM\nCD1234 Wireless Headphones\n\nBACK PANEL:\n✓ Never Charge Mid-Day\n✓ Folds for Easy Travel  \n✓ Professional Audio Quality\n✓ Bluetooth 5.0\n✓ 2-Year Warranty\n\nSIDE PANEL:\n\"Best battery life in class\"\n\"Perfect for remote work\"\n\nMade for professionals who demand reliability.",
        metadata: {
          frameworks: ["Distinctive Memory Structures", "Ladder of Benefits"],
          enrichmentSources: ["Packaging requirements from factory", "Brand positioning: Professional reliability"]
        }
      },
      {
        label: "Retail Display Sign (Category Entry Points)",
        content: "PERFECT FOR:\n\n🏃 Morning Commutes\n💼 All-Day Office Wear\n✈️ Long Flights\n🎮 Gaming Sessions\n🏋️ Gym Workouts\n\n24-HOUR BATTERY | FOLDS SMALL | £79.99\n\nTry them on →",
        metadata: {
          frameworks: ["Category Entry Points", "Context Triggers"],
          enrichmentSources: ["Category use cases from enrichment data"]
        }
      }
    ]
  },
  {
    icon: GraduationCap,
    title: "Training Materials",
    description: "Sales team enablement content",
    items: [
      {
        label: "Sales Script (Objection Handling)",
        content: "QUALIFYING QUESTIONS:\n\"What frustrates you about your current headphones?\"\n\"How many hours per day do you use them?\"\n\"Do you travel for work or commute?\"\n\nKEY SELLING POINTS:\n1. Battery life eliminates mid-day charging\n2. Foldable design = travel convenience\n3. Professional audio quality = credibility on calls\n\nOBJECTION HANDLING:\n\n\"Too expensive\" → \"At £79.99, you're paying £3.33 per month over 2 years. What's your time worth when headphones die mid-meeting?\"\n\n\"Will battery really last?\" → \"Independently verified 24 hours. Here's the test report. Plus 2-year warranty.\"\n\n\"Not sure about quality\" → \"Same manufacturer as £150 brands. Try them 30 days risk-free.\"\n\nCLOSING:\n\"Want to take them for a test run today? 30-day returns if they're not perfect.\"",
        metadata: {
          frameworks: ["Objection Handling", "Purchase Barriers + Solutions", "Value Positioning"],
          enrichmentSources: ["Common objections from customer feedback", "Competitor pricing data"]
        }
      }
    ]
  },
  {
    icon: HelpCircle,
    title: "Customer Support",
    description: "Support documentation and FAQs",
    items: [
      {
        label: "Comprehensive FAQ (Barrier Removal)",
        content: "SETUP & CONNECTION\n\nQ: How do I pair with my device?\nA: 1) Press power button for 3 seconds. 2) Blue LED flashes. 3) Select 'CD1234' from Bluetooth menu. Connected!\n\nPERFORMANCE\n\nQ: Battery not lasting 24 hours?\nA: 24 hours tested at 50% volume. Higher volume reduces battery life. Also check for firmware updates.\n\nQ: Audio cutting out?\nA: Ensure clear line of sight within 10 meters. Remove obstacles. Update device Bluetooth drivers.\n\nWARRANTY & RETURNS\n\nQ: What does the warranty cover?\nA: Manufacturing defects, battery degradation beyond normal wear, hardware failure. 2 years from purchase.\n\nQ: How do I return them?\nA: 30-day return window. Original packaging required. Full refund, no questions asked. Email support@techsound.com",
        metadata: {
          frameworks: ["Purchase Barriers + Solutions"],
          enrichmentSources: ["Common customer questions from reviews", "Support ticket analysis"]
        }
      }
    ]
  },
  {
    icon: Search,
    title: "SEO Content",
    description: "Search-optimized content for organic discovery",
    items: [
      {
        label: "Blog Post Title & Intro (SEO Opportunities)",
        content: "TITLE: Best Long Battery Wireless Headphones for Remote Work 2024 | CD1234 Review\n\nINTRO:\nLooking for wireless headphones that won't die during your workday? The CD1234 delivers 24 hours of battery life — perfect for remote workers, frequent travelers, and anyone tired of charging anxiety.\n\nIn this review, we test battery life, call quality, comfort, and value to answer: Are CD1234 headphones worth it for professional use?\n\n✓ 24-hour verified battery\n✓ Bluetooth 5.0 connectivity  \n✓ Foldable travel design\n✓ Under £80\n\nLet's dive in...",
        metadata: {
          frameworks: ["SEO Opportunities", "Jobs to Be Done"],
          enrichmentSources: ["High volume keywords: 'long battery wireless headphones'", "Search intent: Remote work equipment", "Related searches: 'best headphones for zoom calls'"]
        }
      }
    ]
  }
];
