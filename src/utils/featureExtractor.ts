import { EnhancedAsset } from '@/types/enhancedAsset';

export interface ExtractedFeature {
  feature: string;
  description: string;
  confidence: number;
  priority: number;
  source: string;
}

/**
 * Extracts and prioritizes features from multiple data sources within an enhanced asset
 */
export const extractFeaturesFromAsset = (asset: EnhancedAsset): ExtractedFeature[] => {
  const featuresMap = new Map<string, ExtractedFeature>();
  
  // Source 1: Benefit Ladder levels (primary feature source)
  asset.benefitLadder?.levels?.forEach(level => {
    if (level.feature && level.proof) {
      const confidence = calculateConfidenceFromProof(level.proof);
      addOrMergeFeature(featuresMap, level.feature, {
        description: level.functionalBenefit,
        confidence,
        source: 'benefitLadder'
      });
    }
  });
  
  // Source 2: Reasons to Buy (rational category)
  asset.reasonsToBuy?.forEach(rtb => {
    if (rtb.category === 'rational' && rtb.confidenceScore > 75) {
      addOrMergeFeature(featuresMap, rtb.reason, {
        description: rtb.supportingEvidence,
        confidence: rtb.confidenceScore,
        source: 'reasonsToBuy'
      });
    }
  });
  
  // Source 3: Supporting Messages
  asset.messageHierarchy?.supportingMessages?.forEach(msg => {
    if (msg.type === 'supporting' && msg.score > 75) {
      addOrMergeFeature(featuresMap, msg.content, {
        description: msg.content,
        confidence: msg.score,
        source: 'messageHierarchy'
      });
    }
  });
  
  // Source 4: Key Differentiator (usually highest confidence)
  if (asset.keyDifferentiator) {
    addOrMergeFeature(featuresMap, asset.keyDifferentiator, {
      description: asset.keyDifferentiator,
      confidence: 96,
      source: 'keyDifferentiator'
    });
  }
  
  // Convert to array and rank by confidence
  const features = Array.from(featuresMap.values())
    .sort((a, b) => b.confidence - a.confidence)
    .slice(0, 7) // Top 7 features max
    .map((f, i) => ({ ...f, priority: i + 1 }));
  
  return features;
};

const addOrMergeFeature = (
  map: Map<string, ExtractedFeature>, 
  featureName: string, 
  data: { description: string; confidence: number; source: string }
) => {
  const normalized = normalizeFeatureName(featureName);
  const existing = map.get(normalized);
  
  if (existing) {
    // Merge: take highest confidence, combine sources
    existing.confidence = Math.max(existing.confidence, data.confidence);
    existing.source = existing.source.includes(data.source) 
      ? existing.source 
      : `${existing.source}, ${data.source}`;
    if (!existing.description || data.description.length > existing.description.length) {
      existing.description = data.description;
    }
  } else {
    map.set(normalized, {
      feature: featureName,
      description: data.description,
      confidence: data.confidence,
      priority: 0, // Will be set later
      source: data.source
    });
  }
};

const normalizeFeatureName = (name: string): string => {
  return name.toLowerCase().trim();
};

const calculateConfidenceFromProof = (proof: string): number => {
  // Extract percentage from proof strings like "91% of users..."
  const percentMatch = proof.match(/(\d+)%/);
  if (percentMatch) {
    return parseInt(percentMatch[1]);
  }
  
  // Look for high-confidence keywords
  if (proof.match(/verified|certified|tested|proven/i)) {
    return 90;
  }
  if (proof.match(/most|majority|significant/i)) {
    return 85;
  }
  
  return 80; // Default for features with proof
};
