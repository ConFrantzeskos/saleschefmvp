export interface Proposition {
  id: string;
  text: string;
  frameworkId: string;
  frameworkName: string;
  category: 'functional' | 'emotional' | 'trust' | 'value' | 'experience' | 'behavioral';
  ladderStep: string; // e.g., "Emotional Benefit", "Promise", "Payoff"
  strength: 'high' | 'medium' | 'low'; // based on confidence scores
}

export interface PropositionsByCategory {
  name: string;
  category: 'functional' | 'emotional' | 'trust' | 'value' | 'experience' | 'behavioral';
  propositions: Proposition[];
}
