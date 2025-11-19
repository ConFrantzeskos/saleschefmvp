import { EnhancedAsset } from '@/types/enhancedAsset';
import { ExtractedFeature } from './featureExtractor';
import { ladderFrameworks } from '@/constants/ladderFrameworks';

interface LadderApplication {
  feature: string;
  featureConfidence: number;
  frameworkId: string;
  frameworkName: string;
  content: Record<string, any>;
}

/**
 * Generates ladder-specific content for each feature across all applied frameworks
 */
export const generateLadderApplications = (
  asset: EnhancedAsset, 
  features: ExtractedFeature[]
): LadderApplication[] => {
  const applications: LadderApplication[] = [];
  
  asset.appliedLadders?.forEach(ladderId => {
    const framework = ladderFrameworks.find(f => f.id === ladderId);
    if (!framework) return;
    
    features.forEach(feature => {
      // Check if this framework should apply to this feature
      if (!frameworkAppliesToFeature(framework.id, feature, asset)) return;
      
      // Generate framework-specific content
      const content = generateLadderContentForFeature(
        feature,
        ladderId,
        framework.name,
        asset
      );
      
      if (content && Object.keys(content).length > 0) {
        applications.push({
          feature: feature.feature,
          featureConfidence: feature.confidence,
          frameworkId: ladderId,
          frameworkName: framework.name,
          content
        });
      }
    });
  });
  
  return applications;
};

const frameworkAppliesToFeature = (
  frameworkId: string, 
  feature: ExtractedFeature,
  asset: EnhancedAsset
): boolean => {
  // Functional frameworks apply to tangible, high-confidence features
  if (['functional-emotional', 'faai'].includes(frameworkId)) {
    return feature.confidence > 75;
  }
  
  // Trust frameworks apply broadly
  if (['rtb', 'risk-mitigation'].includes(frameworkId)) {
    return feature.confidence > 80;
  }
  
  // Value frameworks for top features
  if (['price-value-roi'].includes(frameworkId)) {
    return feature.priority <= 3;
  }
  
  // Experience and JTBD for emotional/outcome features
  if (['jtbd-outcome', 'experience-ladder'].includes(frameworkId)) {
    return feature.confidence > 80;
  }
  
  return true;
};

const generateLadderContentForFeature = (
  feature: ExtractedFeature,
  frameworkId: string,
  frameworkName: string,
  asset: EnhancedAsset
): Record<string, any> | null => {
  
  switch (frameworkId) {
    case 'functional-emotional':
      return {
        feature: feature.feature,
        functionalBenefit: inferFunctionalBenefit(feature, asset),
        emotionalBenefit: inferEmotionalBenefit(feature, asset),
        lifeOutcome: inferLifeOutcome(feature, asset),
        proof: findProofForFeature(feature, asset),
        realWorldExample: findExampleForFeature(feature, asset)
      };
      
    case 'rtb':
      return {
        reasonToBelieve: findProofForFeature(feature, asset),
        promise: inferPromise(feature, asset),
        payoff: inferPayoff(feature, asset),
        credibilitySource: findCredibility(feature, asset)
      };
      
    case 'jtbd-outcome':
      return {
        jobToBeDone: inferJobToBeDone(feature, asset),
        desiredOutcome: inferDesiredOutcome(feature, asset),
        constraintRemoved: inferConstraintRemoved(feature, asset),
        progressMade: inferProgressMade(feature, asset)
      };
      
    case 'faai':
      return {
        feature: feature.feature,
        advantage: inferAdvantage(feature, asset),
        application: inferApplication(feature, asset),
        businessImpact: inferBusinessImpact(feature, asset)
      };
      
    case 'price-value-roi':
      return {
        price: inferPrice(feature, asset),
        value: inferValue(feature, asset),
        roi: inferROI(feature, asset)
      };
      
    case 'risk-mitigation':
      return {
        risk: inferRisk(feature, asset),
        confidence: inferConfidenceBuilder(feature, asset),
        action: inferAction(feature, asset)
      };
      
    default:
      return null;
  }
};

// Inference helpers
const inferFunctionalBenefit = (feature: ExtractedFeature, asset: EnhancedAsset): string => {
  const ladderLevel = asset.benefitLadder?.levels?.find(l => 
    l.feature.toLowerCase().includes(feature.feature.toLowerCase()) ||
    feature.feature.toLowerCase().includes(l.feature.toLowerCase())
  );
  return ladderLevel?.functionalBenefit || feature.description || `Use ${feature.feature} effectively`;
};

const inferEmotionalBenefit = (feature: ExtractedFeature, asset: EnhancedAsset): string => {
  const ladderLevel = asset.benefitLadder?.levels?.find(l => 
    l.feature.toLowerCase().includes(feature.feature.toLowerCase())
  );
  return ladderLevel?.emotionalBenefit || `Feel confident with ${feature.feature}`;
};

const inferLifeOutcome = (feature: ExtractedFeature, asset: EnhancedAsset): string => {
  return `Simplified lifestyle with reliable ${feature.feature}`;
};

const findProofForFeature = (feature: ExtractedFeature, asset: EnhancedAsset): string => {
  const ladderLevel = asset.benefitLadder?.levels?.find(l => 
    l.feature.toLowerCase().includes(feature.feature.toLowerCase())
  );
  return ladderLevel?.proof || `Tested and verified ${feature.feature}`;
};

const findExampleForFeature = (feature: ExtractedFeature, asset: EnhancedAsset): string => {
  return `Users love the ${feature.feature} for daily use`;
};

const inferPromise = (feature: ExtractedFeature, asset: EnhancedAsset): string => {
  return `Reliable ${feature.feature} that works when you need it`;
};

const inferPayoff = (feature: ExtractedFeature, asset: EnhancedAsset): string => {
  return `Stay focused and productive with ${feature.feature}`;
};

const findCredibility = (feature: ExtractedFeature, asset: EnhancedAsset): string => {
  return `Verified by independent testing and user reviews`;
};

const inferJobToBeDone = (feature: ExtractedFeature, asset: EnhancedAsset): string => {
  return `Maintain productivity throughout busy days`;
};

const inferDesiredOutcome = (feature: ExtractedFeature, asset: EnhancedAsset): string => {
  return `Use ${feature.feature} throughout full workdays without interruption`;
};

const inferConstraintRemoved = (feature: ExtractedFeature, asset: EnhancedAsset): string => {
  return `No more planning around limitations`;
};

const inferProgressMade = (feature: ExtractedFeature, asset: EnhancedAsset): string => {
  return `From constant monitoring to carefree use`;
};

const inferAdvantage = (feature: ExtractedFeature, asset: EnhancedAsset): string => {
  return `Outperforms alternatives in ${feature.feature}`;
};

const inferApplication = (feature: ExtractedFeature, asset: EnhancedAsset): string => {
  return `Use continuously throughout workday and travel`;
};

const inferBusinessImpact = (feature: ExtractedFeature, asset: EnhancedAsset): string => {
  return `Eliminates productivity interruptions and downtime`;
};

const inferPrice = (feature: ExtractedFeature, asset: EnhancedAsset): string => {
  return `Premium ${feature.feature} at accessible price point`;
};

const inferValue = (feature: ExtractedFeature, asset: EnhancedAsset): string => {
  return `Technology typically found in $250+ models`;
};

const inferROI = (feature: ExtractedFeature, asset: EnhancedAsset): string => {
  return `Saves hours annually with reliable ${feature.feature}`;
};

const inferRisk = (feature: ExtractedFeature, asset: EnhancedAsset): string => {
  return `Worry about ${feature.feature} not meeting expectations`;
};

const inferConfidenceBuilder = (feature: ExtractedFeature, asset: EnhancedAsset): string => {
  return `Full refund if ${feature.feature} doesn't exceed expectations`;
};

const inferAction = (feature: ExtractedFeature, asset: EnhancedAsset): string => {
  return `Buy with zero risk, test yourself, return if not satisfied`;
};
