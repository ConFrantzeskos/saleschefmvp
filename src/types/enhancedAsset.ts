export interface BenefitLadderLevel {
  feature: string;
  functionalBenefit: string;
  emotionalBenefit: string;
  value: string;
  proof: string;
}

export interface BenefitLadder {
  levels: BenefitLadderLevel[];
}

export interface TargetPersona {
  name: string;
  description: string;
  demographics: string;
  psychographics: string;
  buyingMotivations: string[];
  painPoints: string[];
  decisionCriteria: string[];
  messagingPreferences: string;
  matchScore: number;
}

export interface Message {
  content: string;
  priority: number;
  type: 'primary' | 'supporting' | 'proof';
  score: number;
}

export interface MessageHierarchy {
  primaryMessage: string;
  supportingMessages: Message[];
  proofPoints: string[];
}

export interface ReasonToBuy {
  category: 'rational' | 'emotional' | 'social' | 'urgency';
  reason: string;
  supportingEvidence: string;
  confidenceScore: number;
}

export interface SocialProof {
  awards: string[];
  certifications: string[];
  expertEndorsements: string[];
  customerTestimonials: string[];
  statisticalProof: string[];
  mediaMentions: string[];
}

export interface CompetitivePositioning {
  positioningStatement: string;
  competitiveAdvantages: { competitor: string; advantage: string }[];
  differentiationStrategy: string;
  marketPosition: string;
}

export interface StorytellingFramework {
  hero: string;
  problem: string;
  solution: string;
  transformation: string;
  callToAction: string;
  emotionalArc: string;
}

export interface ObjectionHandling {
  objection: string;
  counterArgument: string;
  supportingEvidence: string;
  toneRecommendation: string;
}

export interface ConversionHeuristics {
  highImpactElements: string[];
  messageVariants: { variant: string; predictedLift: string }[];
  abTestRecommendations: string[];
  estimatedLift: string;
}

export interface PsychologyTrigger {
  principle: string;
  application: string;
  implementation: string;
}

export interface ContentBrief {
  toneOfVoice: string;
  keyMessages: string[];
  personaTargeting: string;
  requiredElements: string[];
  contentStructure: string;
  dos: string[];
  donts: string[];
}

export interface EnhancedAsset {
  id: number;
  sku: string;
  name: string;
  category: string;
  brand: string;
  
  // Executive Summary
  coreValueProposition: string;
  primaryPersona: string;
  keyDifferentiator: string;
  contentApproach: string;
  
  // Strategic Components
  benefitLadder: BenefitLadder;
  personas: TargetPersona[];
  messageHierarchy: MessageHierarchy;
  reasonsToBuy: ReasonToBuy[];
  socialProof: SocialProof;
  positioning: CompetitivePositioning;
  storytelling: StorytellingFramework;
  objections: ObjectionHandling[];
  conversionHeuristics: ConversionHeuristics;
  psychologyTriggers: PsychologyTrigger[];
  contentBrief: ContentBrief;
  
  // Metrics
  confidenceScore: number;
  personaMatchScore: number;
  messageStrengthScore: number;
  rtbCount: number;
  status: 'Enhanced' | 'Needs Review';
}
