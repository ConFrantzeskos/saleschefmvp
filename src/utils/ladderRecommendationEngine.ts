import { ladderFrameworks } from '@/constants/ladderFrameworks';

export interface ProductContext {
  category: string;
  brand?: string;
  pricePoint?: 'budget' | 'mid' | 'premium' | 'luxury';
  industry?: string;
  targetPersona?: string;
  attributes?: string[];
  hasComplexSpecs?: boolean;
  requiresTrust?: boolean;
  isEmotionalPurchase?: boolean;
  hasMultipleVariants?: boolean;
}

export interface LadderRecommendation {
  ladderId: string;
  ladderName: string;
  confidence: number; // 0-100
  reasoning: string;
  priority: 'primary' | 'supporting' | 'complementary';
  synergiesWith?: string[]; // IDs of other ladders that work well with this one
}

// Industry-to-ladder mappings
const industryLadderAffinities: Record<string, Record<string, number>> = {
  'finance': {
    'asset-trust-ladder': 95,
    'risk-mitigation': 90,
    'price-value-roi': 85,
    'rtb': 80,
    'competitive-moats': 75,
    'functional-emotional': 70
  },
  'healthcare': {
    'asset-trust-ladder': 95,
    'risk-mitigation': 90,
    'rtb': 85,
    'functional-emotional': 80,
    'component-performance': 75,
    'purchase-barriers': 70
  },
  'retail': {
    'experience-ladder': 90,
    'conversion-mechanics': 88,
    'value-stack': 85,
    'behavioral-economics': 82,
    'functional-emotional': 80,
    'micro-feature-compounding': 75,
    'context-triggers': 72,
    'temporal-ladder': 70
  },
  'b2b': {
    'faai': 95,
    'price-value-roi': 90,
    'component-performance': 85,
    'rtb': 80,
    'competitive-moats': 75,
    'purchase-barriers': 70
  },
  'technology': {
    'value-stack': 90,
    'component-performance': 85,
    'experience-ladder': 80,
    'competitive-moats': 78,
    'functional-emotional': 75,
    'behavioral-economics': 70
  },
  'consumer-goods': {
    'memory-structures': 92,
    'category-entry-points': 88,
    'functional-emotional': 85,
    'context-triggers': 80,
    'persuasion-stack': 75
  },
  'ecommerce': {
    'conversion-mechanics': 95,
    'behavioral-economics': 90,
    'purchase-barriers': 85,
    'persuasion-stack': 80,
    'funnel-ladder': 75
  }
};

// Category-to-ladder mappings
const categoryLadderAffinities: Record<string, Record<string, number>> = {
  'electronics': {
    'component-performance': 90,
    'functional-emotional': 85,
    'value-stack': 80,
    'competitive-moats': 75
  },
  'software': {
    'value-stack': 95,
    'experience-ladder': 85,
    'price-value-roi': 80,
    'conversion-mechanics': 75,
    'competitive-moats': 72
  },
  'financial-services': {
    'asset-trust-ladder': 95,
    'risk-mitigation': 90,
    'price-value-roi': 85,
    'purchase-barriers': 80
  },
  'medical-devices': {
    'asset-trust-ladder': 95,
    'component-performance': 90,
    'rtb': 85,
    'purchase-barriers': 80
  },
  'luxury': {
    'experience-ladder': 95,
    'functional-emotional': 90,
    'rtb': 85,
    'memory-structures': 82,
    'persuasion-stack': 78
  },
  'consumer-packaged-goods': {
    'memory-structures': 95,
    'category-entry-points': 90,
    'context-triggers': 85,
    'behavioral-economics': 80
  }
};

// Persona-to-ladder mappings
const personaLadderAffinities: Record<string, Record<string, number>> = {
  'professional': {
    'price-value-roi': 90,
    'component-performance': 85,
    'faai': 80,
    'competitive-moats': 75
  },
  'consumer': {
    'functional-emotional': 90,
    'experience-ladder': 85,
    'value-stack': 75,
    'context-triggers': 72,
    'conversion-mechanics': 70
  },
  'enterprise': {
    'faai': 95,
    'price-value-roi': 90,
    'risk-mitigation': 85,
    'rtb': 80,
    'purchase-barriers': 75
  },
  'safety-conscious': {
    'risk-mitigation': 95,
    'asset-trust-ladder': 90,
    'functional-emotional': 75,
    'purchase-barriers': 72
  },
  'value-seeker': {
    'price-value-roi': 95,
    'value-stack': 90,
    'micro-feature-compounding': 80,
    'behavioral-economics': 75,
    'conversion-mechanics': 72
  },
  'brand-conscious': {
    'memory-structures': 95,
    'category-entry-points': 88,
    'experience-ladder': 85,
    'persuasion-stack': 80
  },
  'impulse-buyer': {
    'behavioral-economics': 95,
    'conversion-mechanics': 90,
    'persuasion-stack': 85,
    'context-triggers': 80
  }
};

// Ladder synergy matrix - which ladders work well together
const ladderSynergies: Record<string, string[]> = {
  'functional-emotional': ['rtb', 'experience-ladder', 'jtbd-outcome', 'persuasion-stack'],
  'rtb': ['functional-emotional', 'asset-trust-ladder', 'component-performance', 'purchase-barriers'],
  'jtbd-outcome': ['functional-emotional', 'experience-ladder', 'temporal-ladder', 'context-triggers'],
  'faai': ['component-performance', 'price-value-roi', 'rtb', 'competitive-moats'],
  'price-value-roi': ['faai', 'value-stack', 'compounding-ladder', 'behavioral-economics'],
  'risk-mitigation': ['asset-trust-ladder', 'rtb', 'functional-emotional', 'purchase-barriers'],
  'component-performance': ['faai', 'rtb', 'functional-emotional', 'competitive-moats'],
  'experience-ladder': ['functional-emotional', 'jtbd-outcome', 'temporal-ladder', 'memory-structures'],
  'value-stack': ['price-value-roi', 'micro-feature-compounding', 'experience-ladder', 'competitive-moats'],
  'asset-trust-ladder': ['risk-mitigation', 'rtb', 'component-performance', 'purchase-barriers'],
  'funnel-ladder': ['functional-emotional', 'jtbd-outcome', 'experience-ladder', 'conversion-mechanics'],
  'temporal-ladder': ['experience-ladder', 'jtbd-outcome', 'functional-emotional', 'context-triggers'],
  'micro-feature-compounding': ['value-stack', 'component-performance', 'functional-emotional', 'behavioral-economics'],
  'compounding-ladder': ['price-value-roi', 'value-stack', 'micro-feature-compounding'],
  'cabo': ['faai', 'component-performance', 'rtb', 'competitive-moats'],
  'category-entry-points': ['context-triggers', 'memory-structures', 'jtbd-outcome', 'behavioral-economics'],
  'purchase-barriers': ['risk-mitigation', 'asset-trust-ladder', 'rtb', 'conversion-mechanics'],
  'memory-structures': ['category-entry-points', 'experience-ladder', 'functional-emotional', 'persuasion-stack'],
  'behavioral-economics': ['conversion-mechanics', 'persuasion-stack', 'purchase-barriers', 'price-value-roi'],
  'competitive-moats': ['value-stack', 'component-performance', 'faai', 'cabo'],
  'conversion-mechanics': ['behavioral-economics', 'purchase-barriers', 'funnel-ladder', 'persuasion-stack'],
  'context-triggers': ['category-entry-points', 'jtbd-outcome', 'temporal-ladder', 'memory-structures'],
  'persuasion-stack': ['behavioral-economics', 'functional-emotional', 'conversion-mechanics', 'memory-structures']
};

export class LadderRecommendationEngine {
  /**
   * Generate ladder recommendations based on product context
   */
  static generateRecommendations(context: ProductContext): LadderRecommendation[] {
    const recommendations: LadderRecommendation[] = [];
    const scores: Record<string, number> = {};
    const reasonings: Record<string, string[]> = {};

    // Initialize scores and reasoning for all ladders
    ladderFrameworks.forEach(ladder => {
      scores[ladder.id] = 0;
      reasonings[ladder.id] = [];
    });

    // 1. Apply industry affinities (weight: 30%)
    if (context.industry) {
      const industryAffinities = industryLadderAffinities[context.industry.toLowerCase()] || {};
      Object.entries(industryAffinities).forEach(([ladderId, affinity]) => {
        if (reasonings[ladderId]) {
          scores[ladderId] += affinity * 0.3;
          reasonings[ladderId].push(`Strong fit for ${context.industry} industry`);
        }
      });
    }

    // 2. Apply category affinities (weight: 25%)
    if (context.category) {
      const categoryAffinities = categoryLadderAffinities[context.category.toLowerCase()] || {};
      Object.entries(categoryAffinities).forEach(([ladderId, affinity]) => {
        if (reasonings[ladderId]) {
          scores[ladderId] += affinity * 0.25;
          reasonings[ladderId].push(`Optimized for ${context.category} products`);
        }
      });
    }

    // 3. Apply persona affinities (weight: 25%)
    if (context.targetPersona) {
      const personaKey = this.extractPersonaKey(context.targetPersona);
      const personaAffinities = personaLadderAffinities[personaKey] || {};
      Object.entries(personaAffinities).forEach(([ladderId, affinity]) => {
        if (reasonings[ladderId]) {
          scores[ladderId] += affinity * 0.25;
          reasonings[ladderId].push(`Resonates with ${context.targetPersona} mindset`);
        }
      });
    }

    // 4. Apply attribute-based rules (weight: 20%)
    this.applyAttributeRules(context, scores, reasonings);

    // 5. Normalize scores to 0-100 range
    const maxScore = Math.max(...Object.values(scores));
    Object.keys(scores).forEach(ladderId => {
      scores[ladderId] = (scores[ladderId] / maxScore) * 100;
    });

    // 6. Create recommendations with priority tiers
    const sortedLadders = Object.entries(scores)
      .sort(([, a], [, b]) => b - a)
      .filter(([, score]) => score > 20); // Only include ladders with meaningful scores

    sortedLadders.forEach(([ladderId, confidence], index) => {
      const ladder = ladderFrameworks.find(l => l.id === ladderId);
      if (!ladder) return;

      let priority: 'primary' | 'supporting' | 'complementary';
      if (index === 0) priority = 'primary';
      else if (index <= 2) priority = 'supporting';
      else priority = 'complementary';

      recommendations.push({
        ladderId,
        ladderName: ladder.name,
        confidence: Math.round(confidence),
        reasoning: reasonings[ladderId].join('. ') || 'Good general-purpose framework',
        priority,
        synergiesWith: ladderSynergies[ladderId] || []
      });
    });

    return recommendations;
  }

  /**
   * Extract persona key from persona description
   */
  private static extractPersonaKey(persona: string): string {
    const lower = persona.toLowerCase();
    if (lower.includes('professional') || lower.includes('business')) return 'professional';
    if (lower.includes('enterprise') || lower.includes('b2b')) return 'enterprise';
    if (lower.includes('safety') || lower.includes('security')) return 'safety-conscious';
    if (lower.includes('value') || lower.includes('budget')) return 'value-seeker';
    return 'consumer';
  }

  /**
   * Apply attribute-based scoring rules
   */
  private static applyAttributeRules(
    context: ProductContext,
    scores: Record<string, number>,
    reasonings: Record<string, string[]>
  ): void {
    const boost = 20; // 20 points boost for matching attributes

    // Complex specs → component-performance, FAAI
    if (context.hasComplexSpecs) {
      if (reasonings['component-performance']) {
        scores['component-performance'] += boost;
        reasonings['component-performance'].push('Product has complex technical specifications');
      }
      if (reasonings['faai']) {
        scores['faai'] += boost;
        reasonings['faai'].push('Technical features benefit from structured breakdown');
      }
    }

    // Requires trust → asset-trust-ladder, risk-mitigation, rtb
    if (context.requiresTrust) {
      if (reasonings['asset-trust-ladder']) {
        scores['asset-trust-ladder'] += boost;
        reasonings['asset-trust-ladder'].push('Trust is critical for this product');
      }
      if (reasonings['risk-mitigation']) {
        scores['risk-mitigation'] += boost;
        reasonings['risk-mitigation'].push('Addressing concerns builds confidence');
      }
      if (reasonings['rtb']) {
        scores['rtb'] += boost;
        reasonings['rtb'].push('Credibility through proof points');
      }
    }

    // Emotional purchase → functional-emotional, experience-ladder
    if (context.isEmotionalPurchase) {
      if (reasonings['functional-emotional']) {
        scores['functional-emotional'] += boost;
        reasonings['functional-emotional'].push('Purchase driven by emotional benefits');
      }
      if (reasonings['experience-ladder']) {
        scores['experience-ladder'] += boost;
        reasonings['experience-ladder'].push('Experience and memory creation matter');
      }
    }

    // Multiple variants → CABO, value-stack
    if (context.hasMultipleVariants) {
      if (reasonings['cabo']) {
        scores['cabo'] += boost;
        reasonings['cabo'].push('Helps compare and position variants');
      }
      if (reasonings['value-stack']) {
        scores['value-stack'] += boost;
        reasonings['value-stack'].push('Shows escalating value across tiers');
      }
    }

    // Price point considerations
    if (context.pricePoint === 'premium' || context.pricePoint === 'luxury') {
      if (reasonings['experience-ladder']) {
        scores['experience-ladder'] += boost;
        reasonings['experience-ladder'].push('Premium positioning requires experiential narrative');
      }
      if (reasonings['functional-emotional']) {
        scores['functional-emotional'] += boost;
        reasonings['functional-emotional'].push('Justify premium price with emotional value');
      }
    }

    if (context.pricePoint === 'budget') {
      if (reasonings['price-value-roi']) {
        scores['price-value-roi'] += boost;
        reasonings['price-value-roi'].push('Value demonstration is crucial at this price point');
      }
      if (reasonings['value-stack']) {
        scores['value-stack'] += boost;
        reasonings['value-stack'].push('Show how features compound for exceptional value');
      }
    }
  }

  /**
   * Get recommended ladder combinations (sets that work well together)
   */
  static getOptimalCombinations(recommendations: LadderRecommendation[]): string[][] {
    const combinations: string[][] = [];
    
    // Find primary ladder
    const primary = recommendations.find(r => r.priority === 'primary');
    if (!primary) return combinations;

    // Combination 1: Primary + best synergistic supporting
    const synergisticSupporting = recommendations.filter(r => 
      r.priority === 'supporting' && 
      primary.synergiesWith?.includes(r.ladderId)
    );
    
    if (synergisticSupporting.length > 0) {
      combinations.push([
        primary.ladderId,
        synergisticSupporting[0].ladderId
      ]);
    }

    // Combination 2: Primary + top 2 supporting
    const topSupporting = recommendations
      .filter(r => r.priority === 'supporting')
      .slice(0, 2)
      .map(r => r.ladderId);
    
    if (topSupporting.length >= 2) {
      combinations.push([
        primary.ladderId,
        ...topSupporting
      ]);
    }

    return combinations;
  }

  /**
   * Explain why a specific ladder is recommended
   */
  static explainRecommendation(ladderId: string, context: ProductContext): string {
    const recommendations = this.generateRecommendations(context);
    const recommendation = recommendations.find(r => r.ladderId === ladderId);
    
    if (!recommendation) {
      return 'This ladder can work for a wide range of products.';
    }

    let explanation = `Confidence: ${recommendation.confidence}%\n\n`;
    explanation += `Priority: ${recommendation.priority.charAt(0).toUpperCase() + recommendation.priority.slice(1)}\n\n`;
    explanation += `Why: ${recommendation.reasoning}\n\n`;
    
    if (recommendation.synergiesWith && recommendation.synergiesWith.length > 0) {
      const synergyNames = recommendation.synergiesWith
        .map(id => ladderFrameworks.find(l => l.id === id)?.name)
        .filter(Boolean)
        .slice(0, 3);
      
      explanation += `Works well with: ${synergyNames.join(', ')}`;
    }

    return explanation;
  }
}
