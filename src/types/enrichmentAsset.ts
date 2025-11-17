
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
  seoKeywordVolume: string;
  reasonsToBuy: string;
  categoryEntryPoints: string;
  favouriteFeatures: string;
  missingFeatures: string;
  keyCompetitors: string;
  relativeStrengths: string;
  verbatimQuotes: string;
  relatedSearchTerms: string;
  searchOpportunities: string;
  
  // Cultural & Regional Intelligence
  culturalInsights: string;
  regionalPreferences: string;
  complianceData: string;
  
  // Forums & Community Intelligence
  forumDiscussions: string;
  communityInsights: string;
  
  // Influencer & Creator Intelligence
  influencerReviews: string;
  creatorContent: string;
  videoSentiment: string;
  
  // Technical Specifications
  technicalSpecs: string;
  performanceBenchmarks: string;
  
  // Sustainability & Ethics
  sustainabilityScore: string;
  environmentalImpact: string;
  
  // Cross-Category & Ecosystem
  compatibleProducts: string;
  ecosystemFit: string;
  
  // Pricing & Value Intelligence
  priceHistory: string;
  valuePositioning: string;
  
  // Enhanced Customer Voice
  criticalReviews: string;
  featureRequests: string;
  qaInsights: string;
  
  // Enhanced Market Intelligence
  categoryUseCases: string;
  retailerIntelligence: string;
  visualPerformance: string;
  
  // Enhanced Competitive Intelligence
  expertReviewComparisons: string;
  innovationGaps: string;
}
