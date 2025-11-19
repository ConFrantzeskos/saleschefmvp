
import { Globe, FileText, Image, Video, Mail, Printer, GraduationCap, HelpCircle, Instagram, MessageSquare, Camera, Edit3, Users, ShoppingBag, Megaphone, TrendingUp, AudioWaveform, Code, Monitor, Cpu, LucideIcon } from 'lucide-react';

export interface ContentTask {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  hasTemplate?: boolean;
  templateVariants?: number;
  templateLastUpdated?: Date;
}

export interface ContentCategory {
  title: string;
  tasks: ContentTask[];
}

export interface SpecificContentUnit {
  id: string;
  icon: LucideIcon;
  title: string;
  model: string;
  specs: {
    aspectRatio?: string;
    duration?: string;
    format?: string;
    resolution?: string;
  };
  category: 'image' | 'video' | 'audio';
}

export const specificContentUnits: SpecificContentUnit[] = [
  // Images
  {
    id: 'square-image',
    icon: Image,
    title: 'Square Image',
    model: 'Nano Banana',
    specs: {
      aspectRatio: '1:1',
      resolution: '1024×1024',
      format: 'PNG, JPEG, WebP'
    },
    category: 'image'
  },
  {
    id: 'landscape-image',
    icon: Monitor,
    title: 'Landscape Image',
    model: 'Midjourney V7',
    specs: {
      aspectRatio: '16:9',
      resolution: '1792×1024',
      format: 'PNG, JPEG'
    },
    category: 'image'
  },
  {
    id: 'portrait-image',
    icon: Image,
    title: 'Portrait Image',
    model: 'Nano Banana',
    specs: {
      aspectRatio: '9:16',
      resolution: '1024×1792',
      format: 'PNG, JPEG, WebP'
    },
    category: 'image'
  },
  {
    id: 'instagram-post',
    icon: Instagram,
    title: 'Instagram Post',
    model: 'Nano Banana',
    specs: {
      aspectRatio: '4:5',
      resolution: '1080×1350',
      format: 'PNG, JPEG'
    },
    category: 'image'
  },
  // Videos
  {
    id: 'short-landscape-video',
    icon: Video,
    title: 'Short Landscape Video',
    model: 'Sora 2 Pro',
    specs: {
      aspectRatio: '16:9',
      duration: '4-8 seconds',
      format: 'MP4'
    },
    category: 'video'
  },
  {
    id: 'short-portrait-video',
    icon: Video,
    title: 'Short Portrait Video',
    model: 'Sora 2 Pro',
    specs: {
      aspectRatio: '9:16',
      duration: '4-8 seconds',
      format: 'MP4'
    },
    category: 'video'
  },
  {
    id: 'medium-landscape-video',
    icon: Monitor,
    title: 'Medium Landscape Video',
    model: 'Runway Gen-3',
    specs: {
      aspectRatio: '16:9',
      duration: '10-12 seconds',
      format: 'MP4'
    },
    category: 'video'
  },
  {
    id: 'reel-tiktok-video',
    icon: Camera,
    title: 'Instagram Reel / TikTok',
    model: 'Sora 2 Pro',
    specs: {
      aspectRatio: '9:16',
      duration: '8-12 seconds',
      format: 'MP4'
    },
    category: 'video'
  },
  // Audio
  {
    id: 'audio-30s',
    icon: AudioWaveform,
    title: '30-Second Audio',
    model: 'ElevenLabs v3',
    specs: {
      duration: '30 seconds',
      format: 'MP3, WAV'
    },
    category: 'audio'
  },
  {
    id: 'audio-60s',
    icon: AudioWaveform,
    title: '1-Minute Audio',
    model: 'ElevenLabs v3',
    specs: {
      duration: '60 seconds',
      format: 'MP3, WAV'
    },
    category: 'audio'
  },
  {
    id: 'audio-longform',
    icon: AudioWaveform,
    title: 'Long-Form Voiceover',
    model: 'ElevenLabs Multilingual v2',
    specs: {
      duration: '2-5 minutes',
      format: 'MP3, WAV'
    },
    category: 'audio'
  }
];

export const generationCategories: ContentCategory[] = [
  {
    title: "Text Content",
    tasks: [
      {
        id: "pdp",
        icon: Globe,
        title: "PDP",
        description: "Creating comprehensive product detail pages",
        items: ["Hero sections", "Feature highlights", "Lifestyle content"],
        hasTemplate: true,
        templateVariants: 3
      },
      {
        id: "spec-sheet",
        icon: FileText,
        title: "Spec Sheet",
        description: "Technical specifications and details",
        items: ["Technical specs", "Compatibility info", "Performance metrics"],
        hasTemplate: false
      },
      {
        id: "sales-sheet",
        icon: Image,
        title: "Sales Sheet",
        description: "Sales-focused one-pagers",
        items: ["Key selling points", "Competitive advantages", "Pricing strategy"],
        hasTemplate: true,
        templateVariants: 1
      },
      {
        id: "blog-content",
        icon: Edit3,
        title: "Blog Content",
        description: "SEO-optimized blog posts and articles",
        items: ["Product features", "How-to guides", "Industry insights", "Buying guides"],
        hasTemplate: false
      },
      {
        id: "press-releases",
        icon: FileText,
        title: "Press Releases",
        description: "Professional PR and media content",
        items: ["Product launches", "Company news", "Partnership announcements", "Awards"],
        hasTemplate: false
      },
      {
        id: "newsletter",
        icon: Edit3,
        title: "Newsletter",
        description: "Email newsletter content",
        items: ["Product spotlights", "Seasonal campaigns", "Customer stories", "Exclusive offers"],
        hasTemplate: true,
        templateVariants: 2
      },
      {
        id: "seo-content",
        icon: Globe,
        title: "SEO Content",
        description: "Search-optimized content",
        items: ["Meta descriptions", "Title tags", "Schema markup"],
        hasTemplate: false
      },
      {
        id: "email-marketing",
        icon: Mail,
        title: "Email Marketing",
        description: "Campaign-ready email content",
        items: ["Subject lines", "Product announcements", "Promotional copy"],
        hasTemplate: false
      },
      {
        id: "faq",
        icon: HelpCircle,
        title: "FAQ",
        description: "Customer support content",
        items: ["Common questions", "Technical support", "Usage guidance"],
        hasTemplate: false
      }
    ]
  },
  {
    title: "Social Media",
    tasks: [
      {
        id: "instagram",
        icon: Instagram,
        title: "Instagram",
        description: "Visual-first Instagram content",
        items: ["Post captions", "Story templates", "Reel scripts", "Shopping tags"],
        hasTemplate: false
      },
      {
        id: "tiktok",
        icon: Video,
        title: "TikTok",
        description: "Short-form video content for TikTok",
        items: ["Video scripts", "Trending hashtags", "Hook ideas", "CTA overlays"],
        hasTemplate: false
      },
      {
        id: "youtube",
        icon: Video,
        title: "YouTube",
        description: "Long-form video content and optimization",
        items: ["Video descriptions", "Thumbnails copy", "End screen CTAs", "Shorts scripts"],
        hasTemplate: false
      },
      {
        id: "linkedin",
        icon: MessageSquare,
        title: "LinkedIn",
        description: "Professional social media content",
        items: ["Business posts", "Thought leadership", "Company updates", "B2B messaging"],
        hasTemplate: false
      },
      {
        id: "pinterest",
        icon: Camera,
        title: "Pinterest",
        description: "Visual discovery and shopping content",
        items: ["Pin descriptions", "Board titles", "Rich Pins", "Shopping catalogs"],
        hasTemplate: false
      },
      {
        id: "facebook",
        icon: MessageSquare,
        title: "Facebook",
        description: "Community-focused social content",
        items: ["Post copy", "Event descriptions", "Marketplace listings", "Ad creative"],
        hasTemplate: false
      }
    ]
  },
  {
    title: "Audio Content",
    tasks: [
      {
        id: "podcast-scripts",
        icon: AudioWaveform,
        title: "Podcast Scripts",
        description: "Audio content for podcasts and shows",
        items: ["Episode outlines", "Interview questions", "Sponsor reads", "Show notes"],
        hasTemplate: false
      },
      {
        id: "voice-ads",
        icon: AudioWaveform,
        title: "Voice Ads",
        description: "Audio advertising content",
        items: ["Radio spots", "Streaming ads", "Voice assistant ads", "Jingles"],
        hasTemplate: false
      },
      {
        id: "audio-books",
        icon: AudioWaveform,
        title: "Audio Books",
        description: "Narrated content for audio formats",
        items: ["Chapter scripts", "Narrator notes", "Sound cues", "Intro/outro"],
        hasTemplate: false
      }
    ]
  },
  {
    title: "Video Content",
    tasks: [
      {
        id: "product-videos",
        icon: Video,
        title: "Product Videos",
        description: "Visual product demonstrations",
        items: ["Demo scripts", "Unboxing videos", "Comparison videos", "How-to tutorials"],
        hasTemplate: false
      },
      {
        id: "brand-videos",
        icon: Video,
        title: "Brand Videos",
        description: "Company and brand storytelling",
        items: ["Brand stories", "Company culture", "Mission videos", "Behind-the-scenes"],
        hasTemplate: false
      },
      {
        id: "training-videos",
        icon: Video,
        title: "Training Videos",
        description: "Educational and instructional content",
        items: ["Product training", "Sales training", "Customer onboarding", "Safety videos"],
        hasTemplate: false
      },
      {
        id: "live-streams",
        icon: Video,
        title: "Live Streams",
        description: "Real-time interactive content",
        items: ["Event scripts", "Q&A formats", "Product launches", "Webinar content"],
        hasTemplate: false
      }
    ]
  },
  {
    title: "Visual Content",
    tasks: [
      {
        id: "infographics",
        icon: Image,
        title: "Infographics",
        description: "Data visualization and info graphics",
        items: ["Process flows", "Statistics", "Comparison charts", "Timeline graphics"],
        hasTemplate: false
      },
      {
        id: "display-ads",
        icon: Image,
        title: "Display Ads",
        description: "Visual advertising materials",
        items: ["Banner ads", "Social media ads", "Search ads", "Retargeting ads"],
        hasTemplate: false
      },
      {
        id: "print-collateral",
        icon: Printer,
        title: "Print Collateral",
        description: "Print-ready marketing materials",
        items: ["Brochures", "Data sheets", "Catalog entries", "Flyers"],
        hasTemplate: false
      },
      {
        id: "packaging-copy",
        icon: Image,
        title: "Packaging Copy",
        description: "Product packaging and labels",
        items: ["Package text", "Ingredient lists", "Instructions", "Legal disclaimers"],
        hasTemplate: false
      }
    ]
  },
  {
    title: "Software Content",
    tasks: [
      {
        id: "app-store-content",
        icon: Monitor,
        title: "App Store Content",
        description: "Mobile and web app descriptions",
        items: ["App descriptions", "Feature lists", "Screenshots text", "Update notes"],
        hasTemplate: false
      },
      {
        id: "api-documentation",
        icon: Code,
        title: "API Documentation",
        description: "Technical software documentation",
        items: ["API guides", "Code examples", "Integration docs", "SDKs"],
        hasTemplate: false
      },
      {
        id: "user-interfaces",
        icon: Monitor,
        title: "User Interfaces",
        description: "In-app content and microcopy",
        items: ["Button text", "Error messages", "Tooltips", "Onboarding flows"],
        hasTemplate: false
      },
      {
        id: "software-specs",
        icon: Code,
        title: "Software Specs",
        description: "Technical requirements and specifications",
        items: ["System requirements", "Compatibility lists", "Feature specs", "Release notes"],
        hasTemplate: false
      }
    ]
  },
  {
    title: "Hardware Content",
    tasks: [
      {
        id: "user-manuals",
        icon: Cpu,
        title: "User Manuals",
        description: "Hardware instruction guides",
        items: ["Setup guides", "Troubleshooting", "Safety instructions", "Warranty info"],
        hasTemplate: false
      },
      {
        id: "technical-datasheets",
        icon: Cpu,
        title: "Technical Datasheets",
        description: "Hardware specifications and data",
        items: ["Component specs", "Performance data", "Electrical ratings", "Dimensions"],
        hasTemplate: false
      },
      {
        id: "installation-guides",
        icon: Cpu,
        title: "Installation Guides",
        description: "Hardware installation instructions",
        items: ["Step-by-step guides", "Tool requirements", "Safety warnings", "Diagrams"],
        hasTemplate: false
      },
      {
        id: "compliance-docs",
        icon: Cpu,
        title: "Compliance Docs",
        description: "Regulatory and compliance documentation",
        items: ["Certifications", "Safety standards", "Environmental specs", "Regulatory info"],
        hasTemplate: false
      }
    ]
  },
  {
    title: "Retail & B2B",
    tasks: [
      {
        id: "supplier-content",
        icon: Users,
        title: "Supplier Content",
        description: "Content for retail partners and suppliers",
        items: ["Partner briefs", "Product onboarding", "Brand guidelines", "Co-op marketing"],
        hasTemplate: false
      },
      {
        id: "in-store-materials",
        icon: ShoppingBag,
        title: "In-Store Materials",
        description: "Physical retail environment content",
        items: ["Shelf talkers", "End cap displays", "Window graphics", "Point-of-sale"],
        hasTemplate: false
      },
      {
        id: "retail-media",
        icon: Megaphone,
        title: "Retail Media",
        description: "Retail media network advertising content",
        items: ["Sponsored product ads", "Display campaigns", "Video ads", "Search campaigns", "Banner creatives", "Product targeting"],
        hasTemplate: false
      },
      {
        id: "trade-marketing",
        icon: Megaphone,
        title: "Trade Marketing",
        description: "B2B marketing materials for retailers",
        items: ["Buyer presentations", "Trade show content", "Channel partner kits", "Merchandising guides"],
        hasTemplate: false
      },
      {
        id: "market-research",
        icon: TrendingUp,
        title: "Market Research",
        description: "Data-driven content and insights",
        items: ["Trend reports", "Competitor analysis", "Market positioning", "Consumer insights"],
        hasTemplate: false
      },
      {
        id: "internal-training",
        icon: GraduationCap,
        title: "Internal Training",
        description: "Sales team enablement materials",
        items: ["Feature guides", "Selling points", "Objection handlers", "Product knowledge"],
        hasTemplate: false
      }
    ]
  }
];
