export type ContentCompetition = 'low' | 'medium' | 'high';
export type ContentIntent = 'informational' | 'commercial' | 'transactional';
export type ContentFormat = 'landing-page' | 'blog-post' | 'comparison' | 'guide' | 'video-script';
export type ConversionPotential = 'Low' | 'Medium' | 'Medium-High' | 'High';

export interface ContentOpportunity {
  id: string;
  title: string;
  useCase: string;
  searchVolume: number;
  competition: ContentCompetition;
  intent: ContentIntent;
  
  // Enrichment evidence
  dataSource: string;
  rawData: string;
  
  // Strategic fit
  relevantFeatures: string[];
  matchScore: number;
  
  // Content recommendation
  recommendedFormat: ContentFormat;
  estimatedTraffic: number;
  estimatedConversions: ConversionPotential;
  
  // Priority
  priority: 'high' | 'medium' | 'low';
}
