import { Proposition } from '@/types/proposition';
import { EnhancedAsset } from '@/types/enhancedAsset';
import { ladderFrameworks } from '@/constants/ladderFrameworks';

/**
 * Extracts strategic propositions from enhanced assets based on applied ladder frameworks
 * NEW: Prioritizes multi-feature ladder applications for diverse propositions
 */
export const extractPropositionsFromAsset = (asset: EnhancedAsset): Proposition[] => {
  const propositions: Proposition[] = [];
  
  // NEW PATH: Extract from multi-feature ladder applications
  if (asset.ladderApplications && asset.ladderApplications.length > 0) {
    asset.ladderApplications.forEach(app => {
      const framework = ladderFrameworks.find(f => f.id === app.frameworkId);
      if (!framework) return;
      
      const featurePriority = asset.featureAnalysis?.find(f => f.feature === app.feature)?.priority || 99;
      
      // Extract propositions based on framework type
      if (app.frameworkId === 'functional-emotional' && app.content) {
        propositions.push({
          id: `${asset.id}-${normalizeId(app.feature)}-fe-func`,
          text: app.content.functionalBenefit,
          frameworkId: app.frameworkId,
          frameworkName: app.frameworkName,
          category: 'functional',
          ladderStep: 'Functional Benefit',
          strength: app.featureConfidence > 90 ? 'high' : app.featureConfidence > 80 ? 'medium' : 'low',
          feature: app.feature,
          featureConfidence: app.featureConfidence,
          featurePriority
        });
        
        propositions.push({
          id: `${asset.id}-${normalizeId(app.feature)}-fe-emo`,
          text: app.content.emotionalBenefit,
          frameworkId: app.frameworkId,
          frameworkName: app.frameworkName,
          category: 'emotional',
          ladderStep: 'Emotional Benefit',
          strength: app.featureConfidence > 90 ? 'high' : app.featureConfidence > 80 ? 'medium' : 'low',
          feature: app.feature,
          featureConfidence: app.featureConfidence,
          featurePriority
        });
        
        propositions.push({
          id: `${asset.id}-${normalizeId(app.feature)}-fe-life`,
          text: app.content.lifeOutcome,
          frameworkId: app.frameworkId,
          frameworkName: app.frameworkName,
          category: 'emotional',
          ladderStep: 'Life Outcome',
          strength: app.featureConfidence > 85 ? 'medium' : 'low',
          feature: app.feature,
          featureConfidence: app.featureConfidence,
          featurePriority
        });
      }
      
      if (app.frameworkId === 'rtb' && app.content) {
        propositions.push({
          id: `${asset.id}-${normalizeId(app.feature)}-rtb-promise`,
          text: app.content.promise,
          frameworkId: app.frameworkId,
          frameworkName: app.frameworkName,
          category: 'trust',
          ladderStep: 'Promise',
          strength: app.featureConfidence > 90 ? 'high' : 'medium',
          feature: app.feature,
          featureConfidence: app.featureConfidence,
          featurePriority
        });
        
        propositions.push({
          id: `${asset.id}-${normalizeId(app.feature)}-rtb-payoff`,
          text: app.content.payoff,
          frameworkId: app.frameworkId,
          frameworkName: app.frameworkName,
          category: 'trust',
          ladderStep: 'Payoff',
          strength: app.featureConfidence > 90 ? 'high' : 'medium',
          feature: app.feature,
          featureConfidence: app.featureConfidence,
          featurePriority
        });
      }
      
      if (app.frameworkId === 'jtbd-outcome' && app.content) {
        propositions.push({
          id: `${asset.id}-${normalizeId(app.feature)}-jtbd-outcome`,
          text: app.content.desiredOutcome,
          frameworkId: app.frameworkId,
          frameworkName: app.frameworkName,
          category: 'functional',
          ladderStep: 'Desired Outcome',
          strength: app.featureConfidence > 85 ? 'high' : 'medium',
          feature: app.feature,
          featureConfidence: app.featureConfidence,
          featurePriority
        });
        
        propositions.push({
          id: `${asset.id}-${normalizeId(app.feature)}-jtbd-progress`,
          text: app.content.progressMade,
          frameworkId: app.frameworkId,
          frameworkName: app.frameworkName,
          category: 'functional',
          ladderStep: 'Progress Made',
          strength: 'medium',
          feature: app.feature,
          featureConfidence: app.featureConfidence,
          featurePriority
        });
      }
      
      if (app.frameworkId === 'faai' && app.content) {
        propositions.push({
          id: `${asset.id}-${normalizeId(app.feature)}-faai-app`,
          text: app.content.application,
          frameworkId: app.frameworkId,
          frameworkName: app.frameworkName,
          category: 'functional',
          ladderStep: 'Application',
          strength: app.featureConfidence > 85 ? 'high' : 'medium',
          feature: app.feature,
          featureConfidence: app.featureConfidence,
          featurePriority
        });
        
        propositions.push({
          id: `${asset.id}-${normalizeId(app.feature)}-faai-impact`,
          text: app.content.businessImpact,
          frameworkId: app.frameworkId,
          frameworkName: app.frameworkName,
          category: 'functional',
          ladderStep: 'Business Impact',
          strength: app.featureConfidence > 90 ? 'high' : 'medium',
          feature: app.feature,
          featureConfidence: app.featureConfidence,
          featurePriority
        });
      }
      
      if (app.frameworkId === 'price-value-roi' && app.content) {
        propositions.push({
          id: `${asset.id}-${normalizeId(app.feature)}-price-value`,
          text: app.content.value,
          frameworkId: app.frameworkId,
          frameworkName: app.frameworkName,
          category: 'value',
          ladderStep: 'Value',
          strength: app.featureConfidence > 90 ? 'high' : 'medium',
          feature: app.feature,
          featureConfidence: app.featureConfidence,
          featurePriority
        });
        
        propositions.push({
          id: `${asset.id}-${normalizeId(app.feature)}-price-roi`,
          text: app.content.roi,
          frameworkId: app.frameworkId,
          frameworkName: app.frameworkName,
          category: 'value',
          ladderStep: 'ROI',
          strength: 'medium',
          feature: app.feature,
          featureConfidence: app.featureConfidence,
          featurePriority
        });
      }
      
      if (app.frameworkId === 'risk-mitigation' && app.content) {
        propositions.push({
          id: `${asset.id}-${normalizeId(app.feature)}-risk-conf`,
          text: app.content.confidence,
          frameworkId: app.frameworkId,
          frameworkName: app.frameworkName,
          category: 'trust',
          ladderStep: 'Confidence',
          strength: app.featureConfidence > 85 ? 'high' : 'medium',
          feature: app.feature,
          featureConfidence: app.featureConfidence,
          featurePriority
        });
        
        propositions.push({
          id: `${asset.id}-${normalizeId(app.feature)}-risk-action`,
          text: app.content.action,
          frameworkId: app.frameworkId,
          frameworkName: app.frameworkName,
          category: 'trust',
          ladderStep: 'Action',
          strength: 'medium',
          feature: app.feature,
          featureConfidence: app.featureConfidence,
          featurePriority
        });
      }
    });
    
    return propositions;
  }
  
  // FALLBACK: Legacy single-ladder extraction for backward compatibility
  return extractLegacyPropositions(asset);
};

// Legacy extraction (existing code path)
const extractLegacyPropositions = (asset: EnhancedAsset): Proposition[] => {
  const propositions: Proposition[] = [];
  
  // Extract from each applied ladder
  asset.appliedLadders?.forEach(ladderId => {
    const framework = ladderFrameworks.find(f => f.id === ladderId);
    if (!framework) return;

    // Functional-Emotional Ladder
    if (ladderId === 'functional-emotional' && asset.functionalEmotionalLadder) {
      const ladder = asset.functionalEmotionalLadder;
      propositions.push({
        id: `${asset.id}-fe-func`,
        text: ladder.functionalBenefit,
        frameworkId: ladderId,
        frameworkName: framework.name,
        category: 'functional',
        ladderStep: 'Functional Benefit',
        strength: 'high'
      });
      propositions.push({
        id: `${asset.id}-fe-emo`,
        text: ladder.emotionalBenefit,
        frameworkId: ladderId,
        frameworkName: framework.name,
        category: 'emotional',
        ladderStep: 'Emotional Benefit',
        strength: 'high'
      });
      propositions.push({
        id: `${asset.id}-fe-life`,
        text: ladder.lifeOutcome,
        frameworkId: ladderId,
        frameworkName: framework.name,
        category: 'emotional',
        ladderStep: 'Life Outcome',
        strength: 'medium'
      });
    }

    // RTB Ladder
    if (ladderId === 'rtb' && asset.rtbLadder) {
      const ladder = asset.rtbLadder;
      propositions.push({
        id: `${asset.id}-rtb-promise`,
        text: ladder.promise,
        frameworkId: ladderId,
        frameworkName: framework.name,
        category: 'trust',
        ladderStep: 'Promise',
        strength: 'high'
      });
      propositions.push({
        id: `${asset.id}-rtb-payoff`,
        text: ladder.payoff,
        frameworkId: ladderId,
        frameworkName: framework.name,
        category: 'value',
        ladderStep: 'Payoff',
        strength: 'high'
      });
    }

    // JTBD Outcome Ladder
    if (ladderId === 'jtbd-outcome' && asset.jtbdOutcomeLadder) {
      const ladder = asset.jtbdOutcomeLadder;
      propositions.push({
        id: `${asset.id}-jtbd-outcome`,
        text: ladder.desiredOutcome,
        frameworkId: ladderId,
        frameworkName: framework.name,
        category: 'functional',
        ladderStep: 'Desired Outcome',
        strength: 'high'
      });
      propositions.push({
        id: `${asset.id}-jtbd-progress`,
        text: ladder.progressMade,
        frameworkId: ladderId,
        frameworkName: framework.name,
        category: 'value',
        ladderStep: 'Progress Made',
        strength: 'medium'
      });
    }

    // Experience Ladder
    if (ladderId === 'experience-ladder' && asset.experienceLadder) {
      const ladder = asset.experienceLadder;
      propositions.push({
        id: `${asset.id}-exp-exp`,
        text: ladder.experience,
        frameworkId: ladderId,
        frameworkName: framework.name,
        category: 'emotional',
        ladderStep: 'Experience',
        strength: 'high'
      });
      propositions.push({
        id: `${asset.id}-exp-memory`,
        text: ladder.memory,
        frameworkId: ladderId,
        frameworkName: framework.name,
        category: 'experience',
        ladderStep: 'Memory',
        strength: 'medium'
      });
    }

    // Risk Mitigation Ladder
    if (ladderId === 'risk-mitigation' && asset.riskMitigationLadder) {
      const ladder = asset.riskMitigationLadder;
      propositions.push({
        id: `${asset.id}-risk-conf`,
        text: ladder.confidence,
        frameworkId: ladderId,
        frameworkName: framework.name,
        category: 'trust',
        ladderStep: 'Confidence',
        strength: 'high'
      });
      propositions.push({
        id: `${asset.id}-risk-act`,
        text: ladder.action,
        frameworkId: ladderId,
        frameworkName: framework.name,
        category: 'behavioral',
        ladderStep: 'Action',
        strength: 'medium'
      });
    }

    // FAAI Ladder
    if (ladderId === 'faai' && asset.faaiLadder) {
      const ladder = asset.faaiLadder;
      propositions.push({
        id: `${asset.id}-faai-app`,
        text: ladder.application,
        frameworkId: ladderId,
        frameworkName: framework.name,
        category: 'functional',
        ladderStep: 'Application',
        strength: 'high'
      });
      propositions.push({
        id: `${asset.id}-faai-impact`,
        text: ladder.businessImpact,
        frameworkId: ladderId,
        frameworkName: framework.name,
        category: 'value',
        ladderStep: 'Business Impact',
        strength: 'high'
      });
    }

    // CABO Ladder
    if (ladderId === 'cabo' && asset.caboLadder) {
      const ladder = asset.caboLadder;
      propositions.push({
        id: `${asset.id}-cabo-benefit`,
        text: ladder.functionalBenefit,
        frameworkId: ladderId,
        frameworkName: framework.name,
        category: 'functional',
        ladderStep: 'Functional Benefit',
        strength: 'high'
      });
      propositions.push({
        id: `${asset.id}-cabo-outcome`,
        text: ladder.ultimateOutcome,
        frameworkId: ladderId,
        frameworkName: framework.name,
        category: 'value',
        ladderStep: 'Ultimate Outcome',
        strength: 'medium'
      });
    }

    // Price-Value-ROI Ladder
    if (ladderId === 'price-value-roi' && asset.priceValueROILadder) {
      const ladder = asset.priceValueROILadder;
      propositions.push({
        id: `${asset.id}-roi-value`,
        text: ladder.value,
        frameworkId: ladderId,
        frameworkName: framework.name,
        category: 'value',
        ladderStep: 'Value',
        strength: 'high'
      });
      propositions.push({
        id: `${asset.id}-roi-roi`,
        text: ladder.roi,
        frameworkId: ladderId,
        frameworkName: framework.name,
        category: 'value',
        ladderStep: 'ROI',
        strength: 'medium'
      });
    }
  });

  return propositions;
};

const normalizeId = (text: string): string => {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
};

/**
 * Groups propositions by category for organized display
 */
export const groupPropositionsByCategory = (propositions: Proposition[]) => {
  const categories = {
    functional: [] as Proposition[],
    emotional: [] as Proposition[],
    trust: [] as Proposition[],
    value: [] as Proposition[],
    experience: [] as Proposition[],
    behavioral: [] as Proposition[]
  };

  propositions.forEach(prop => {
    categories[prop.category].push(prop);
  });

  return [
    { name: 'Functional Value', category: 'functional' as const, propositions: categories.functional },
    { name: 'Emotional Appeal', category: 'emotional' as const, propositions: categories.emotional },
    { name: 'Trust & Credibility', category: 'trust' as const, propositions: categories.trust },
    { name: 'Value & ROI', category: 'value' as const, propositions: categories.value },
    { name: 'Experience & Journey', category: 'experience' as const, propositions: categories.experience },
    { name: 'Behavioral Insights', category: 'behavioral' as const, propositions: categories.behavioral }
  ].filter(cat => cat.propositions.length > 0);
};
