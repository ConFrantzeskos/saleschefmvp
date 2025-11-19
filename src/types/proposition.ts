export interface Proposition {
  id: string;
  text: string;
  frameworkId: string;
  frameworkName: string;
  category: 'functional' | 'emotional' | 'trust' | 'value' | 'experience' | 'behavioral';
  ladderStep: string; // e.g., "Emotional Benefit", "Promise", "Payoff"
  strength: 'high' | 'medium' | 'low'; // based on confidence scores
  feature?: string; // Which feature this proposition is about
  featureConfidence?: number; // Confidence score for this feature
  featurePriority?: number; // 1 = hero, 2-7 = supporting
}

export interface PropositionsByCategory {
  name: string;
  category: 'functional' | 'emotional' | 'trust' | 'value' | 'experience' | 'behavioral';
  propositions: Proposition[];
}
