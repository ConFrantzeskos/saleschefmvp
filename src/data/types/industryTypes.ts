
export interface DetailedIndustryData {
  name: string;
  emoji: string;
  title: string;
  subtitle: string;
  
  // Problems section
  problems: string[];
  problemsTitle?: string;
  problemsDescription?: string;
  
  // Consequences section
  consequences: string[];
  consequencesTitle?: string;
  
  // Reality/complexity section
  realityPoints?: string[];
  realityTitle?: string;
  realityDescription?: string;
  
  // Recommended Persuasion Ladders
  recommendedLadders?: Array<{
    id: string;
    name: string;
    reason: string;
    example: string;
  }>;
  
  // Process steps
  ingestSources: string[];
  cleaningFeatures: string[];
  enrichmentFeatures: string[];
  outputChannels: string[];
  
  // Business outcomes
  businessOutcomes: Array<{
    metric: string;
    description: string;
  }>;
  
  // Why choose section
  whyChooseReasons: string[];
  whyChooseTitle?: string;
  
  // Use cases
  useCases: Array<{
    useCase: string;
    agents: string;
    value: string;
  }>;
  
  // Integrations
  integrations: string[];
  
  // Custom sections for flexibility
  customSections?: Array<{
    title: string;
    content: React.ReactNode;
    background?: 'default' | 'muted';
  }>;
}
