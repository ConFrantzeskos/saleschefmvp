// Comprehensive ladder framework types

export interface LadderFramework {
  id: string;
  name: string;
  description: string;
  explainer: string;
  bestUse: string;
  steps: string[];
  icon: any;
  category: 'functional' | 'emotional' | 'trust' | 'value' | 'experience';
  complexity: 'simple' | 'moderate' | 'advanced';
  exampleBrands: string[];
  realWorldExample: string;
}

export interface AppliedLadder {
  ladderId: string;
  ladderName: string;
  confidenceScore: number;
  keyInsight: string;
  progressionSteps: ProgressionStep[];
}

export interface ProgressionStep {
  level: string;
  content: string;
  proof: string;
  emotion?: string;
  impact?: string;
}

// Functional-Emotional Ladder (Classic)
export interface FunctionalEmotionalLadder {
  feature: string;
  functionalBenefit: string;
  emotionalBenefit: string;
  lifeOutcome: string;
  proof: string;
  realWorldExample: string;
}

// Ogilvy Reason-to-Believe → Promise → Payoff
export interface OgilvyRTBLadder {
  reasonToBelieve: string;
  promise: string;
  payoff: string;
  credibilitySource: string;
  realWorldExample: string;
}

// Jobs-to-Be-Done Outcome Ladder
export interface JTBDOutcomeLadder {
  jobToBeDone: string;
  desiredOutcome: string;
  constraintRemoved: string;
  progressMade: string;
  strugglingMoment: string;
  realWorldExample: string;
}

// Feature-Advantage-Application-Impact (B2B focused)
export interface FAAILadder {
  feature: string;
  advantage: string;
  application: string;
  businessImpact: string;
  proof: string;
  realWorldExample: string;
}

// Category-Attribute-Benefit-Outcome (Comparison focused)
export interface CABOLadder {
  category: string;
  keyAttribute: string;
  functionalBenefit: string;
  ultimateOutcome: string;
  competitiveContext: string;
  realWorldExample: string;
}

// Price-Cost-Value-ROI (Financial justification)
export interface PriceValueROILadder {
  price: string;
  trueCost: string;
  value: string;
  roi: string;
  financialProof: string;
  realWorldExample: string;
}

// Risk-Mitigation-Confidence-Action
export interface RiskMitigationLadder {
  risk: string;
  mitigation: string;
  confidence: string;
  action: string;
  trustSignal: string;
  realWorldExample: string;
}

// Component-Performance-Capability-Outcome (Technical)
export interface ComponentPerformanceLadder {
  component: string;
  performance: string;
  capability: string;
  outcome: string;
  technicalProof: string;
  realWorldExample: string;
}

// Experience Ladder (Product → Function → Experience → Memory)
export interface ExperienceLadder {
  product: string;
  function: string;
  experience: string;
  memory: string;
  emotionalResonance: string;
  realWorldExample: string;
}

// Value Stack (Utility → Multiplier → Ecosystem → Moat)
export interface ValueStackLadder {
  utility: string;
  multiplier: string;
  ecosystem: string;
  moat: string;
  compoundingEffect: string;
  realWorldExample: string;
}

// Awareness-Consideration-Conversion (Funnel-based)
export interface FunnelLadder {
  awarenessHook: string;
  considerationFactor: string;
  conversionTrigger: string;
  retentionDriver: string;
  funnelStageProof: string;
  realWorldExample: string;
}

// Before-During-After-Impact (Temporal progression)
export interface TemporalLadder {
  before: string;
  during: string;
  after: string;
  longTermImpact: string;
  transformationProof: string;
  realWorldExample: string;
}

// Micro-Feature-Micro-Benefit-Compounding (Accumulation)
export interface CompoundingLadder {
  microFeatures: string[];
  microBenefits: string[];
  compoundingValue: string;
  exponentialOutcome: string;
  densityProof: string;
  realWorldExample: string;
}

// Asset Trust Ladder (Coinbase-inspired)
export interface AssetTrustLadder {
  accuracy: string;
  reliability: string;
  predictability: string;
  confidence: string;
  action: string;
  trustMetrics: string;
  realWorldExample: string;
}

// Category Entry Points (CEPs)
export interface CategoryEntryPointsLadder {
  buyingSituation: string;
  categoryCue: string;
  brandAssociation: string;
  mentalAvailability: string;
  triggerMoment: string;
  realWorldExample: string;
}

// Purchase Barriers + Solutions
export interface PurchaseBarriersLadder {
  barrierIdentified: string;
  solutionOffered: string;
  objectionHandled: string;
  pathCleared: string;
  frictionPoint: string;
  realWorldExample: string;
}

// Distinctive Memory Structures
export interface MemoryStructuresLadder {
  distinctiveAsset: string;
  sensoryTrigger: string;
  memoryAssociation: string;
  instantRecognition: string;
  brandCode: string;
  realWorldExample: string;
}

// Behavioural Economics Arsenal
export interface BehavioralEconomicsLadder {
  biasIdentified: string;
  principleApplied: string;
  behaviorNudged: string;
  decisionMade: string;
  psychologicalMechanism: string;
  realWorldExample: string;
}

// Competitive Moats
export interface CompetitiveMoatsLadder {
  competitiveThreat: string;
  defensiveMoat: string;
  sustainableAdvantage: string;
  marketLeadership: string;
  barrierToEntry: string;
  realWorldExample: string;
}

// Conversion Mechanics
export interface ConversionMechanicsLadder {
  decisionPoint: string;
  frictionRemoved: string;
  incentiveApplied: string;
  conversionAchieved: string;
  optimizationTechnique: string;
  realWorldExample: string;
}

// Context Triggers
export interface ContextTriggersLadder {
  contextMoment: string;
  needActivated: string;
  brandRecalled: string;
  actionTriggered: string;
  relevanceTrigger: string;
  realWorldExample: string;
}

// The Persuasion Stack
export interface PersuasionStackLadder {
  foundationLogic: string;
  emotionLayer: string;
  socialProofLayer: string;
  urgencyPeak: string;
  compoundingEffect: string;
  realWorldExample: string;
}
