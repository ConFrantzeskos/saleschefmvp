
import { Search, MessageSquare, Users, TrendingUp, Globe, Hash, Brain, BarChart3, ShoppingCart, MapPin, Heart, AlertTriangle, Zap, Target, Quote } from 'lucide-react';

export const enrichmentFields = [
  {
    key: 'searchTrends',
    title: 'Search Intelligence',
    icon: Search,
    description: 'Popular search terms and volume data',
  },
  {
    key: 'seoKeywordVolume',
    title: 'SEO Keyword Volume',
    icon: BarChart3,
    description: 'Search volume data for targeted keywords',
  },
  {
    key: 'customerSentiment',
    title: 'Customer Sentiment Analysis',
    icon: MessageSquare,
    description: 'Insights from customer reviews and feedback',
  },
  {
    key: 'reasonsToBuy',
    title: 'Reasons to Buy',
    icon: ShoppingCart,
    description: 'Aggregated purchase motivators ranked by confidence',
  },
  {
    key: 'socialMentions',
    title: 'Social Media Intelligence',
    icon: Users,
    description: 'Social platform mentions and sentiment',
  },
  {
    key: 'verbatimQuotes',
    title: 'Verbatim Quotes & Reviews',
    icon: Quote,
    description: 'Direct quotes from social media and review sites with sources',
  },
  {
    key: 'categoryEntryPoints',
    title: 'Category Entry Points',
    icon: MapPin,
    description: 'Consumer buying situations and triggers that prompt consideration',
  },
  {
    key: 'favouriteFeatures',
    title: 'Favourite Features',
    icon: Heart,
    description: 'Most valued features ranked by confidence percentage',
  },
  {
    key: 'missingFeatures',
    title: 'Missing Features',
    icon: AlertTriangle,
    description: 'Identified feature gaps ranked by confidence percentage',
  },
  {
    key: 'competitorAnalysis',
    title: 'Competitive Landscape',
    icon: TrendingUp,
    description: 'Direct competitor analysis and positioning',
  },
  {
    key: 'keyCompetitors',
    title: 'Key Competitors',
    icon: Target,
    description: 'Primary competing products and their positioning',
  },
  {
    key: 'relativeStrengths',
    title: 'Relative Strengths',
    icon: Zap,
    description: 'Competitive advantages vs key competitors',
  },
  {
    key: 'seoOpportunities',
    title: 'SEO Opportunities',
    icon: Globe,
    description: 'High-value keyword opportunities',
  },
  {
    key: 'targetAudience',
    title: 'Target Audience Intelligence',
    icon: Hash,
    description: 'Data-driven audience segmentation',
  },
  {
    key: 'keyFeatures',
    title: 'Feature Priority Intelligence',
    icon: Brain,
    description: 'Intelligence-driven feature importance ranking',
  },
] as const;
