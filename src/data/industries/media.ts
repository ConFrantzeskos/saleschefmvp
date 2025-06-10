
import { DetailedIndustryData } from '../types/industryTypes';

export const mediaData: DetailedIndustryData = {
  name: "Media & Entertainment",
  emoji: "🎬",
  title: "🎬 SalesChef for Media & Entertainment",
  subtitle: "Transform your fragmented media assets into revenue-driving, advertiser-ready intelligence. Unstructured archive in. Insight-rich, monetisable media out.",
  
  problemsTitle: "Why media content & metadata are broken — and why SalesChef fixes it",
  problemsDescription: "In today's media ecosystem, content alone is no longer enough. To drive advertising, subscriptions, syndication and licensing revenue, you need structured, searchable, monetisable metadata. But what do most media businesses have today?",
  problems: [
    '🗄️ Archives scattered across DAMs, NAS drives, legacy MAMs',
    '🏷️ Poorly tagged video & image content',
    '📋 Inconsistent rights & clearance records',
    '🔗 Disconnected text, image, audio and video assets',
    '📂 No unified taxonomy — every department tags differently',
    '📺 No ready-to-syndicate FAST/CTV/OTT feeds',
    '✋ Manual enrichment for new platforms → slow, costly, error-prone',
    '🤖 Inability to scale content packaging for AI agents & smart surfaces'
  ],
  
  consequences: [
    'Lost syndication and licensing revenue (archive not fully monetised)',
    'Manual, expensive packaging for advertisers & sponsors',
    'Delayed content onboarding → lost market opportunities',
    'Inconsistent audience targeting → lower CPMs',
    'Missed FAST/CTV monetisation windows',
    'Poor SEO → under-leveraged owned channels',
    'Legal & rights risk → incorrect or missing usage metadata',
    'Inability to feed AI agents / LLM search experiences'
  ],
  
  realityTitle: "SalesChef: Built for the complexity of modern media",
  realityDescription: "SalesChef was designed for industries where content complexity meets revenue pressure — and media is ground zero.",
  realityPoints: [
    '20 years of mixed-format archives',
    'No consistent metadata schema',
    'Rights data in a spreadsheet last updated 6 years ago',
    'New channels launching monthly — FAST, TikTok, Instagram Video, AI voice, CTV marketplaces',
    'Advertisers demanding rich context & brand-safety alignment',
    'AI search engines driving new audience discovery paths'
  ],
  
  ingestSources: [
    'Legacy MAMs (Dalet, Avid, Viz One, CatDV, IPV, Cantemo)',
    'DAM platforms (Bynder, Cloudinary, Adobe Experience Manager, FotoWare, Brandfolder)',
    'NAS & cold storage (S3, GCP, Azure, Glacier, on-prem drives)',
    'CMS & archives (Drupal, WordPress, headless CMSs)',
    'Raw video & image archives',
    'Rights & clearance databases (custom & vendor-provided)',
    'OTT packaging systems',
    'Third-party syndication partners',
    'Social platforms (YouTube, TikTok, Instagram)'
  ],
  
  cleaningFeatures: [
    'Taxonomy alignment across departments (news, sport, lifestyle, entertainment)',
    'Entity recognition (people, places, events, brands)',
    'Genre & mood classification',
    'Language & region tagging',
    'Rights & clearance metadata enrichment',
    'Image & video quality validation (resolution, duration, compliance)',
    'Contextual signals for brand safety & targeting',
    'SEO optimisation for text-based archives (headlines, captions, descriptions)',
    'Transcript generation for audio & video',
    'Multimodal linkage (text ↔ image ↔ video ↔ audio)',
    'Accessibility tagging (subtitles, alt-text, captions)'
  ],
  
  enrichmentFeatures: [
    'Social sentiment & trending topic correlation',
    'Competitive content benchmarking',
    'Audience engagement signals (CTR, completion, shareability)',
    'Advertiser & sponsor alignment signals (suitability for campaigns)',
    'Event-driven content packaging (Olympics, elections, festivals, seasonal)',
    'Multilingual auto-translation & localisation',
    'Emerging channel compliance (FAST metadata, AI/LLM surfacing)'
  ],
  
  outputChannels: [
    'FAST channels (Pluto TV, Samsung TV+, LG Channels, Roku)',
    'CTV apps',
    'OTT platforms (SVOD, AVOD, TVOD)',
    'Owned & operated web & mobile',
    'Social platforms (TikTok, YouTube, Meta, Snap)',
    'Affiliate & syndication partners',
    'Licensing & archive marketplaces',
    'Podcast & audio platforms',
    'Smart speaker & AI assistant surfaces (Google, Amazon, Meta AI)',
    'Programmatic ad platforms (contextual targeting feeds)'
  ],
  
  businessOutcomes: [
    { metric: '🔓 Unlock', description: 'new revenue from archives → faster packaging & syndication' },
    { metric: '💰 Higher', description: 'CPMs → better contextual & audience signals' },
    { metric: '🚀 Faster', description: 'advertiser onboarding → automated brand-suitable packaging' },
    { metric: '⚡ Faster', description: 'time-to-market for new channels' },
    { metric: '📉 Reduced', description: 'manual metadata ops cost' },
    { metric: '⚖️ Improved', description: 'legal & rights governance' },
    { metric: '🤖 More', description: 'content surfaced in AI & smart search' },
    { metric: '🔍 Better', description: 'SEO → higher organic audience reach' }
  ],
  
  whyChooseTitle: "Why leading media companies are moving to SalesChef",
  whyChooseReasons: [
    'Designed for the real-world mess of media archives',
    'Knows the modern stack: FAST, OTT, CTV, AI surfacing, programmatic',
    'Automates painful, high-cost manual enrichment',
    'Makes archives monetisable at scale',
    'Improves audience targeting and brand safety',
    'Unlocks SEO and AI discoverability',
    'Adapts to your taxonomy — doesn\'t force you into a new one',
    'Stateless architecture → works with your existing DAM/MAM ecosystem',
    'Continuous learning → gets smarter as your content evolves'
  ],
  
  useCases: [
    {
      useCase: 'Archive monetisation & syndication',
      agents: 'Drop, Clean, Define, Deploy',
      value: 'Drives new licensing & FAST revenue'
    },
    {
      useCase: 'Advertiser-ready contextual packaging',
      agents: 'Distil, Draft, Deploy',
      value: 'Higher CPMs and faster campaign activation'
    },
    {
      useCase: 'SEO-optimised publishing for owned channels',
      agents: 'Discover.Search, Draft',
      value: 'Organic traffic growth & audience acquisition'
    },
    {
      useCase: 'AI/LLM surfacing prep',
      agents: 'Document, Discover, Draft',
      value: 'Content ready for next-gen search surfaces'
    },
    {
      useCase: 'Rights & compliance validation',
      agents: 'Diligence, QA Validator',
      value: 'Lower legal exposure'
    },
    {
      useCase: 'Dynamic packaging for social & video',
      agents: 'Director, Draw, Draft',
      value: 'Increased engagement & monetisation'
    }
  ],
  
  integrations: [
    'MAM/DAM platforms: Dalet, Avid, VizRT, Bynder, Cloudinary, AEM, CatDV, etc.',
    'CMS: WordPress, Drupal, Contentful, Sanity, Prismic',
    'FAST/CTV packaging systems: Amagi, Wurl, Frequency, Gracenote',
    'OTT apps: Brightcove, JWPlayer, Vimeo OTT',
    'Ad platforms: Google Ad Manager, Xandr, Freewheel',
    'Programmatic platforms: Magnite, PubMatic, The Trade Desk',
    'SEO platforms: Conductor, Botify, BrightEdge',
    'Social APIs: TikTok, Meta, YouTube',
    'Rights management systems',
    'Data warehouses & CDPs'
  ]
};
