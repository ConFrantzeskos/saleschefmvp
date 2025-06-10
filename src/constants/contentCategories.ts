
import { Globe, FileText, Image, Video, Mail, Printer, GraduationCap, HelpCircle, Instagram, MessageSquare, Camera, Edit3, Users, ShoppingBag, Megaphone, TrendingUp, AudioWaveform, Code, Monitor, Cpu, LucideIcon } from 'lucide-react';

export interface ContentTask {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}

export interface ContentCategory {
  title: string;
  tasks: ContentTask[];
}

export const generationCategories: ContentCategory[] = [
  {
    title: "Text Content",
    tasks: [
      {
        icon: Globe,
        title: "PDP",
        description: "Creating comprehensive product detail pages",
        items: ["Hero sections", "Feature highlights", "Lifestyle content"]
      },
      {
        icon: FileText,
        title: "Spec Sheet",
        description: "Technical specifications and details",
        items: ["Technical specs", "Compatibility info", "Performance metrics"]
      },
      {
        icon: Image,
        title: "Sales Sheet",
        description: "Sales-focused one-pagers",
        items: ["Key selling points", "Competitive advantages", "Pricing strategy"]
      },
      {
        icon: Edit3,
        title: "Blog Content",
        description: "SEO-optimized blog posts and articles",
        items: ["Product features", "How-to guides", "Industry insights", "Buying guides"]
      },
      {
        icon: FileText,
        title: "Press Releases",
        description: "Professional PR and media content",
        items: ["Product launches", "Company news", "Partnership announcements", "Awards"]
      },
      {
        icon: Edit3,
        title: "Newsletter",
        description: "Email newsletter content",
        items: ["Product spotlights", "Seasonal campaigns", "Customer stories", "Exclusive offers"]
      },
      {
        icon: Globe,
        title: "SEO Content",
        description: "Search-optimized content",
        items: ["Meta descriptions", "Title tags", "Schema markup"]
      },
      {
        icon: Mail,
        title: "Email Marketing",
        description: "Campaign-ready email content",
        items: ["Subject lines", "Product announcements", "Promotional copy"]
      },
      {
        icon: HelpCircle,
        title: "FAQ",
        description: "Customer support content",
        items: ["Common questions", "Technical support", "Usage guidance"]
      }
    ]
  },
  {
    title: "Social Media",
    tasks: [
      {
        icon: Instagram,
        title: "Instagram",
        description: "Visual-first Instagram content",
        items: ["Post captions", "Story templates", "Reel scripts", "Shopping tags"]
      },
      {
        icon: Video,
        title: "TikTok",
        description: "Short-form video content for TikTok",
        items: ["Video scripts", "Trending hashtags", "Hook ideas", "CTA overlays"]
      },
      {
        icon: Video,
        title: "YouTube",
        description: "Long-form video content and optimization",
        items: ["Video descriptions", "Thumbnails copy", "End screen CTAs", "Shorts scripts"]
      },
      {
        icon: MessageSquare,
        title: "LinkedIn",
        description: "Professional social media content",
        items: ["Business posts", "Thought leadership", "Company updates", "B2B messaging"]
      },
      {
        icon: Camera,
        title: "Pinterest",
        description: "Visual discovery and shopping content",
        items: ["Pin descriptions", "Board titles", "Rich Pins", "Shopping catalogs"]
      },
      {
        icon: MessageSquare,
        title: "Facebook",
        description: "Community-focused social content",
        items: ["Post copy", "Event descriptions", "Marketplace listings", "Ad creative"]
      }
    ]
  },
  {
    title: "Audio Content",
    tasks: [
      {
        icon: AudioWaveform,
        title: "Podcast Scripts",
        description: "Audio content for podcasts and shows",
        items: ["Episode outlines", "Interview questions", "Sponsor reads", "Show notes"]
      },
      {
        icon: AudioWaveform,
        title: "Voice Ads",
        description: "Audio advertising content",
        items: ["Radio spots", "Streaming ads", "Voice assistant ads", "Jingles"]
      },
      {
        icon: AudioWaveform,
        title: "Audio Books",
        description: "Narrated content for audio formats",
        items: ["Chapter scripts", "Narrator notes", "Sound cues", "Intro/outro"]
      }
    ]
  },
  {
    title: "Video Content",
    tasks: [
      {
        icon: Video,
        title: "Product Videos",
        description: "Visual product demonstrations",
        items: ["Demo scripts", "Unboxing videos", "Comparison videos", "How-to tutorials"]
      },
      {
        icon: Video,
        title: "Brand Videos",
        description: "Company and brand storytelling",
        items: ["Brand stories", "Company culture", "Mission videos", "Behind-the-scenes"]
      },
      {
        icon: Video,
        title: "Training Videos",
        description: "Educational and instructional content",
        items: ["Product training", "Sales training", "Customer onboarding", "Safety videos"]
      },
      {
        icon: Video,
        title: "Live Streams",
        description: "Real-time interactive content",
        items: ["Event scripts", "Q&A formats", "Product launches", "Webinar content"]
      }
    ]
  },
  {
    title: "Visual Content",
    tasks: [
      {
        icon: Image,
        title: "Infographics",
        description: "Data visualization and info graphics",
        items: ["Process flows", "Statistics", "Comparison charts", "Timeline graphics"]
      },
      {
        icon: Image,
        title: "Display Ads",
        description: "Visual advertising materials",
        items: ["Banner ads", "Social media ads", "Search ads", "Retargeting ads"]
      },
      {
        icon: Printer,
        title: "Print Collateral",
        description: "Print-ready marketing materials",
        items: ["Brochures", "Data sheets", "Catalog entries", "Flyers"]
      },
      {
        icon: Image,
        title: "Packaging Copy",
        description: "Product packaging and labels",
        items: ["Package text", "Ingredient lists", "Instructions", "Legal disclaimers"]
      }
    ]
  },
  {
    title: "Software Content",
    tasks: [
      {
        icon: Monitor,
        title: "App Store Content",
        description: "Mobile and web app descriptions",
        items: ["App descriptions", "Feature lists", "Screenshots text", "Update notes"]
      },
      {
        icon: Code,
        title: "API Documentation",
        description: "Technical software documentation",
        items: ["API guides", "Code examples", "Integration docs", "SDKs"]
      },
      {
        icon: Monitor,
        title: "User Interfaces",
        description: "In-app content and microcopy",
        items: ["Button text", "Error messages", "Tooltips", "Onboarding flows"]
      },
      {
        icon: Code,
        title: "Software Specs",
        description: "Technical requirements and specifications",
        items: ["System requirements", "Compatibility lists", "Feature specs", "Release notes"]
      }
    ]
  },
  {
    title: "Hardware Content",
    tasks: [
      {
        icon: Cpu,
        title: "User Manuals",
        description: "Hardware instruction guides",
        items: ["Setup guides", "Troubleshooting", "Safety instructions", "Warranty info"]
      },
      {
        icon: Cpu,
        title: "Technical Datasheets",
        description: "Hardware specifications and data",
        items: ["Component specs", "Performance data", "Electrical ratings", "Dimensions"]
      },
      {
        icon: Cpu,
        title: "Installation Guides",
        description: "Hardware installation instructions",
        items: ["Step-by-step guides", "Tool requirements", "Safety warnings", "Diagrams"]
      },
      {
        icon: Cpu,
        title: "Compliance Docs",
        description: "Regulatory and compliance documentation",
        items: ["Certifications", "Safety standards", "Environmental specs", "Regulatory info"]
      }
    ]
  },
  {
    title: "Retail & B2B",
    tasks: [
      {
        icon: Users,
        title: "Supplier Content",
        description: "Content for retail partners and suppliers",
        items: ["Partner briefs", "Product onboarding", "Brand guidelines", "Co-op marketing"]
      },
      {
        icon: ShoppingBag,
        title: "In-Store Materials",
        description: "Physical retail environment content",
        items: ["Shelf talkers", "End cap displays", "Window graphics", "Point-of-sale"]
      },
      {
        icon: Megaphone,
        title: "Retail Media",
        description: "Retail media network advertising content",
        items: ["Sponsored product ads", "Display campaigns", "Video ads", "Search campaigns", "Banner creatives", "Product targeting"]
      },
      {
        icon: Megaphone,
        title: "Trade Marketing",
        description: "B2B marketing materials for retailers",
        items: ["Buyer presentations", "Trade show content", "Channel partner kits", "Merchandising guides"]
      },
      {
        icon: TrendingUp,
        title: "Market Research",
        description: "Data-driven content and insights",
        items: ["Trend reports", "Competitor analysis", "Market positioning", "Consumer insights"]
      },
      {
        icon: GraduationCap,
        title: "Internal Training",
        description: "Sales team enablement materials",
        items: ["Feature guides", "Selling points", "Objection handlers", "Product knowledge"]
      }
    ]
  }
];
