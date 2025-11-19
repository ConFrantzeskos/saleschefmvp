import { EnrichmentAsset } from '@/types/enrichmentAsset';
import { ContentOpportunity, ContentCompetition, ContentIntent, ContentFormat, ConversionPotential } from '@/types/contentOpportunity';

interface SearchTerm {
  term: string;
  volume: number;
  difficulty: number;
}

interface UseCase {
  scenario: string;
  relevance: number;
  features: string[];
}

/**
 * Detects high-value content opportunities from enrichment data
 */
export function detectContentOpportunities(asset: EnrichmentAsset): ContentOpportunity[] {
  const opportunities: ContentOpportunity[] = [];
  
  // Extract opportunities from different data sources
  const searchTermOpportunities = extractFromSearchTerms(asset);
  const useCaseOpportunities = extractFromUseCases(asset);
  const questionOpportunities = extractFromQuestions(asset);
  const forumOpportunities = extractFromForums(asset);
  
  opportunities.push(...searchTermOpportunities);
  opportunities.push(...useCaseOpportunities);
  opportunities.push(...questionOpportunities);
  opportunities.push(...forumOpportunities);
  
  // Score and prioritize
  const scoredOpportunities = opportunities.map(opp => ({
    ...opp,
    priority: calculatePriority(opp)
  }));
  
  // Sort by match score and return top opportunities
  return scoredOpportunities
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 12); // Top 12 opportunities per product
}

/**
 * Extract opportunities from related search terms
 */
function extractFromSearchTerms(asset: EnrichmentAsset): ContentOpportunity[] {
  const opportunities: ContentOpportunity[] = [];
  const searchData = asset.relatedSearchTerms || '';
  
  if (!searchData) return opportunities;
  
  // Parse search terms (e.g., "headphones for sleeping travel (12.4K searches/month, 35 difficulty)")
  const terms = parseSearchTerms(searchData);
  
  terms.forEach((term, index) => {
    const features = inferRelevantFeatures(term.term, asset);
    const matchScore = calculateMatchScore(term.volume, term.difficulty, features.length);
    
    opportunities.push({
      id: `search-${asset.id}-${index}`,
      title: generateTitle(term.term, asset.category),
      useCase: term.term,
      searchVolume: term.volume,
      competition: mapDifficultyToCompetition(term.difficulty),
      intent: inferIntent(term.term),
      dataSource: 'relatedSearchTerms',
      rawData: `${term.term} (${formatVolume(term.volume)} searches/month, ${term.difficulty} difficulty)`,
      relevantFeatures: features,
      matchScore,
      recommendedFormat: inferContentFormat(term.term),
      estimatedTraffic: estimateTraffic(term.volume, term.difficulty),
      estimatedConversions: estimateConversions(inferIntent(term.term), matchScore),
      priority: 'medium'
    });
  });
  
  return opportunities;
}

/**
 * Extract opportunities from category use cases
 */
function extractFromUseCases(asset: EnrichmentAsset): ContentOpportunity[] {
  const opportunities: ContentOpportunity[] = [];
  const useCaseData = asset.categoryUseCases || '';
  
  if (!useCaseData) return opportunities;
  
  const useCases = parseUseCases(useCaseData);
  
  useCases.forEach((useCase, index) => {
    const features = useCase.features;
    const estimatedVolume = estimateVolumeFromRelevance(useCase.relevance);
    const matchScore = useCase.relevance;
    
    opportunities.push({
      id: `usecase-${asset.id}-${index}`,
      title: generateTitle(useCase.scenario, asset.category),
      useCase: useCase.scenario,
      searchVolume: estimatedVolume,
      competition: 'medium',
      intent: 'commercial',
      dataSource: 'categoryUseCases',
      rawData: `${useCase.scenario} (${useCase.relevance}% target audience relevance)`,
      relevantFeatures: features,
      matchScore,
      recommendedFormat: 'guide',
      estimatedTraffic: estimateTraffic(estimatedVolume, 50),
      estimatedConversions: 'Medium-High',
      priority: 'medium'
    });
  });
  
  return opportunities;
}

/**
 * Extract opportunities from Q&A insights
 */
function extractFromQuestions(asset: EnrichmentAsset): ContentOpportunity[] {
  const opportunities: ContentOpportunity[] = [];
  const qaData = asset.qaInsights || '';
  
  if (!qaData) return opportunities;
  
  const questions = parseQuestions(qaData);
  
  questions.forEach((question, index) => {
    const features = inferRelevantFeatures(question, asset);
    const estimatedVolume = 3000 + Math.floor(Math.random() * 5000);
    const matchScore = calculateMatchScore(estimatedVolume, 40, features.length);
    
    opportunities.push({
      id: `qa-${asset.id}-${index}`,
      title: question,
      useCase: extractUseCaseFromQuestion(question),
      searchVolume: estimatedVolume,
      competition: 'low',
      intent: 'informational',
      dataSource: 'qaInsights',
      rawData: question,
      relevantFeatures: features,
      matchScore,
      recommendedFormat: 'blog-post',
      estimatedTraffic: estimateTraffic(estimatedVolume, 40),
      estimatedConversions: 'Medium',
      priority: 'medium'
    });
  });
  
  return opportunities.slice(0, 3); // Top 3 questions
}

/**
 * Extract opportunities from forum discussions
 */
function extractFromForums(asset: EnrichmentAsset): ContentOpportunity[] {
  const opportunities: ContentOpportunity[] = [];
  const forumData = asset.forumDiscussions || '';
  
  if (!forumData) return opportunities;
  
  const topics = parseForumTopics(forumData);
  
  topics.forEach((topic, index) => {
    const features = inferRelevantFeatures(topic, asset);
    const estimatedVolume = 2000 + Math.floor(Math.random() * 4000);
    const matchScore = calculateMatchScore(estimatedVolume, 35, features.length);
    
    opportunities.push({
      id: `forum-${asset.id}-${index}`,
      title: generateTitle(topic, asset.category),
      useCase: topic,
      searchVolume: estimatedVolume,
      competition: 'low',
      intent: 'informational',
      dataSource: 'forumDiscussions',
      rawData: topic,
      relevantFeatures: features,
      matchScore,
      recommendedFormat: 'blog-post',
      estimatedTraffic: estimateTraffic(estimatedVolume, 35),
      estimatedConversions: 'Medium',
      priority: 'medium'
    });
  });
  
  return opportunities.slice(0, 2); // Top 2 forum topics
}

/**
 * Parse search terms from enrichment data
 */
function parseSearchTerms(data: string): SearchTerm[] {
  const terms: SearchTerm[] = [];
  
  // Look for patterns like "term (X searches/month, Y difficulty)"
  const patterns = [
    /([^(]+)\s*\((\d+\.?\d*[KM]?)\s*searches?\/month,\s*(\d+)\s*difficulty\)/gi,
    /([^:]+):\s*(\d+\.?\d*[KM]?)\s*monthly\s*searches/gi,
  ];
  
  patterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(data)) !== null) {
      terms.push({
        term: match[1].trim(),
        volume: parseVolume(match[2]),
        difficulty: parseInt(match[3] || '50')
      });
    }
  });
  
  return terms;
}

/**
 * Parse use cases from enrichment data
 */
function parseUseCases(data: string): UseCase[] {
  const useCases: UseCase[] = [];
  
  // Look for patterns indicating use cases
  const scenarios = [
    'business travel', 'sleeping on plane', 'gaming', 'working from home',
    'commuting', 'exercise', 'studying', 'conference calls', 'travel',
    'outdoor activities', 'long flights', 'office work'
  ];
  
  scenarios.forEach(scenario => {
    if (data.toLowerCase().includes(scenario)) {
      const relevance = 70 + Math.floor(Math.random() * 25);
      useCases.push({
        scenario,
        relevance,
        features: inferRelevantFeatures(scenario, {} as EnrichmentAsset)
      });
    }
  });
  
  return useCases;
}

/**
 * Parse questions from Q&A data
 */
function parseQuestions(data: string): string[] {
  const questions: string[] = [];
  
  // Look for question patterns
  const questionMarkers = ['?', 'how to', 'can i', 'will it', 'does it', 'what is', 'which'];
  
  data.split(/[.;]/).forEach(sentence => {
    const lower = sentence.toLowerCase();
    if (questionMarkers.some(marker => lower.includes(marker))) {
      const cleaned = sentence.trim();
      if (cleaned.length > 10 && cleaned.length < 100) {
        questions.push(cleaned.endsWith('?') ? cleaned : cleaned + '?');
      }
    }
  });
  
  return questions.slice(0, 5);
}

/**
 * Parse forum topics
 */
function parseForumTopics(data: string): string[] {
  const topics: string[] = [];
  
  // Extract key phrases from forum data
  const keyPhrases = [
    'best for', 'recommended for', 'use case', 'perfect for',
    'ideal for', 'great for', 'works well'
  ];
  
  keyPhrases.forEach(phrase => {
    const regex = new RegExp(`${phrase}\\s+([^.,;]+)`, 'gi');
    let match;
    while ((match = regex.exec(data)) !== null) {
      topics.push(match[1].trim());
    }
  });
  
  return topics.slice(0, 5);
}

/**
 * Infer relevant features based on use case
 */
function inferRelevantFeatures(useCase: string, asset: Partial<EnrichmentAsset>): string[] {
  const features: string[] = [];
  const lower = useCase.toLowerCase();
  
  // Feature mapping based on keywords
  const featureMap: Record<string, string[]> = {
    'sleep': ['comfortable fit', '24-hour battery', 'soft cushions'],
    'travel': ['foldable design', '24-hour battery', 'portable case'],
    'plane': ['24-hour battery', 'foldable design', 'comfortable fit'],
    'business': ['quick charge', 'professional design', '24-hour battery'],
    'gaming': ['premium audio quality', 'comfortable fit', 'long battery'],
    'work': ['clear audio', 'comfortable fit', 'long battery'],
    'exercise': ['sweat resistant', 'secure fit', 'wireless'],
    'commute': ['portable', 'battery life', 'comfortable'],
  };
  
  Object.entries(featureMap).forEach(([keyword, feats]) => {
    if (lower.includes(keyword)) {
      features.push(...feats);
    }
  });
  
  return [...new Set(features)].slice(0, 4); // Remove duplicates, limit to 4
}

/**
 * Generate a content title from use case
 */
function generateTitle(useCase: string, category: string): string {
  const lower = useCase.toLowerCase().trim();
  
  // If it's already a question or title-like, use it
  if (lower.includes('?') || lower.includes('best') || lower.includes('how')) {
    return useCase.charAt(0).toUpperCase() + useCase.slice(1);
  }
  
  // Generate a title based on use case
  if (lower.includes('sleep') && lower.includes('plane')) {
    return `Best ${category} for Sleeping on Planes`;
  }
  if (lower.includes('business') && lower.includes('travel')) {
    return `Business Travel Tech Essentials 2025`;
  }
  if (lower.includes('gaming')) {
    return `Best ${category} for Gaming`;
  }
  
  // Generic format
  return `Best ${category} for ${useCase.charAt(0).toUpperCase() + useCase.slice(1)}`;
}

/**
 * Calculate match score (0-100)
 */
function calculateMatchScore(volume: number, difficulty: number, featureCount: number): number {
  // Higher volume = better (max 40 points)
  const volumeScore = Math.min((volume / 15000) * 40, 40);
  
  // Lower difficulty = better (max 35 points)
  const difficultyScore = Math.max(35 - (difficulty / 100) * 35, 0);
  
  // More matching features = better (max 25 points)
  const featureScore = Math.min(featureCount * 6, 25);
  
  return Math.round(volumeScore + difficultyScore + featureScore);
}

/**
 * Calculate priority level
 */
function calculatePriority(opportunity: ContentOpportunity): 'high' | 'medium' | 'low' {
  if (opportunity.matchScore >= 80 && opportunity.searchVolume >= 8000) {
    return 'high';
  }
  if (opportunity.matchScore >= 65 && opportunity.searchVolume >= 4000) {
    return 'medium';
  }
  return 'low';
}

/**
 * Map difficulty score to competition level
 */
function mapDifficultyToCompetition(difficulty: number): ContentCompetition {
  if (difficulty < 40) return 'low';
  if (difficulty < 65) return 'medium';
  return 'high';
}

/**
 * Infer search intent from query
 */
function inferIntent(query: string): ContentIntent {
  const lower = query.toLowerCase();
  
  if (lower.includes('buy') || lower.includes('best') || lower.includes('price') || 
      lower.includes('review') || lower.includes('vs') || lower.includes('comparison')) {
    return 'commercial';
  }
  
  if (lower.includes('how') || lower.includes('what') || lower.includes('why') || 
      lower.includes('guide') || lower.includes('tutorial')) {
    return 'informational';
  }
  
  if (lower.includes('order') || lower.includes('purchase') || lower.includes('deal')) {
    return 'transactional';
  }
  
  return 'commercial';
}

/**
 * Infer content format from query
 */
function inferContentFormat(query: string): ContentFormat {
  const lower = query.toLowerCase();
  
  if (lower.includes('vs') || lower.includes('comparison')) {
    return 'comparison';
  }
  
  if (lower.includes('how') || lower.includes('guide') || lower.includes('tutorial')) {
    return 'guide';
  }
  
  if (lower.includes('best') || lower.includes('review')) {
    return 'landing-page';
  }
  
  if (lower.includes('video') || lower.includes('watch')) {
    return 'video-script';
  }
  
  return 'blog-post';
}

/**
 * Estimate traffic potential
 */
function estimateTraffic(volume: number, difficulty: number): number {
  // Assume ranking #2-3 gets 20-30% of search volume
  const clickRate = difficulty < 40 ? 0.3 : difficulty < 65 ? 0.25 : 0.2;
  return Math.round(volume * clickRate);
}

/**
 * Estimate conversion potential
 */
function estimateConversions(intent: ContentIntent, matchScore: number): ConversionPotential {
  if (intent === 'transactional') {
    return matchScore >= 80 ? 'High' : 'Medium-High';
  }
  
  if (intent === 'commercial') {
    return matchScore >= 85 ? 'High' : matchScore >= 70 ? 'Medium-High' : 'Medium';
  }
  
  return matchScore >= 80 ? 'Medium-High' : 'Medium';
}

/**
 * Extract use case from question
 */
function extractUseCaseFromQuestion(question: string): string {
  // Remove question words and clean up
  return question
    .toLowerCase()
    .replace(/^(how|what|why|when|where|which|can|will|does|is|are)\s+/i, '')
    .replace(/\?$/, '')
    .trim();
}

/**
 * Parse volume string (e.g., "12.4K" -> 12400)
 */
function parseVolume(volumeStr: string): number {
  const cleaned = volumeStr.toUpperCase().trim();
  
  if (cleaned.includes('K')) {
    return Math.round(parseFloat(cleaned.replace('K', '')) * 1000);
  }
  if (cleaned.includes('M')) {
    return Math.round(parseFloat(cleaned.replace('M', '')) * 1000000);
  }
  
  return parseInt(cleaned) || 0;
}

/**
 * Format volume for display
 */
function formatVolume(volume: number): string {
  if (volume >= 1000000) {
    return `${(volume / 1000000).toFixed(1)}M`;
  }
  if (volume >= 1000) {
    return `${(volume / 1000).toFixed(1)}K`;
  }
  return volume.toString();
}

/**
 * Estimate volume from relevance percentage
 */
function estimateVolumeFromRelevance(relevance: number): number {
  // Higher relevance suggests higher search volume
  return Math.round(relevance * 150);
}
