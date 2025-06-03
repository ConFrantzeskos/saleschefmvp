
export interface EnrichmentAsset {
  id: number;
  sku: string;
  name: string;
  category: string;
  brand: string;
  status: 'Enriched' | 'Needs Review';
  quality: number;
  searchTrends: string;
  customerSentiment: string;
  socialMentions: string;
  competitorAnalysis: string;
  seoOpportunities: string;
  targetAudience: string;
  keyFeatures: string;
}
