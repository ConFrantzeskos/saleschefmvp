import { Proposition } from '@/types/proposition';

/**
 * Filters propositions based on audience segment and content type
 */
export function filterPropositions(
  propositions: Proposition[],
  audienceFilter: string,
  contentTypeFilter: string
): Proposition[] {
  let filtered = [...propositions];

  // Filter by audience
  if (audienceFilter !== 'all') {
    filtered = filtered.filter(prop => {
      const text = prop.text.toLowerCase();
      const feature = prop.feature?.toLowerCase() || '';
      
      switch (audienceFilter) {
        case 'business':
          // Business travelers care about battery, portability, calls
          return (
            feature.includes('battery') ||
            feature.includes('fold') ||
            feature.includes('portable') ||
            text.includes('travel') ||
            text.includes('professional') ||
            text.includes('business') ||
            text.includes('calls') ||
            text.includes('workday')
          );
        
        case 'gamers':
          // Gamers care about audio quality, battery, connectivity
          return (
            feature.includes('audio') ||
            feature.includes('sound') ||
            feature.includes('battery') ||
            feature.includes('bluetooth') ||
            text.includes('audio') ||
            text.includes('music') ||
            text.includes('entertainment') ||
            text.includes('gaming')
          );
        
        case 'budget':
          // Budget shoppers care about value, price, essentials
          return (
            prop.category === 'value' ||
            text.includes('price') ||
            text.includes('value') ||
            text.includes('save') ||
            text.includes('cost') ||
            text.includes('roi') ||
            text.includes('essential')
          );
        
        case 'professionals':
          // Remote workers care about calls, battery, reliability
          return (
            text.includes('work') ||
            text.includes('call') ||
            text.includes('meeting') ||
            text.includes('professional') ||
            text.includes('productive') ||
            feature.includes('battery') ||
            feature.includes('bluetooth')
          );
        
        case 'commuters':
          // Commuters care about portability, battery, quick charge
          return (
            feature.includes('fold') ||
            feature.includes('portable') ||
            feature.includes('battery') ||
            feature.includes('charge') ||
            text.includes('commute') ||
            text.includes('travel') ||
            text.includes('on-the-go') ||
            text.includes('portable')
          );
        
        default:
          return true;
      }
    });
  }

  // Filter by content type
  if (contentTypeFilter !== 'all') {
    filtered = filtered.filter(prop => {
      switch (contentTypeFilter) {
        case 'product':
          // Product pages: functional benefits, specs, all categories
          return (
            prop.category === 'functional' ||
            prop.category === 'trust' ||
            prop.ladderStep.includes('Benefit') ||
            prop.ladderStep.includes('Application')
          );
        
        case 'ads':
          // Ads: emotional, high-impact, clear value
          return (
            prop.strength === 'high' ||
            prop.category === 'emotional' ||
            prop.category === 'value' ||
            prop.ladderStep.includes('Outcome') ||
            prop.ladderStep.includes('Payoff')
          );
        
        case 'email':
          // Email: conversational, emotional benefits, value
          return (
            prop.category === 'emotional' ||
            prop.category === 'value' ||
            prop.category === 'trust' ||
            prop.ladderStep.includes('Emotional') ||
            prop.ladderStep.includes('Promise')
          );
        
        case 'social':
          // Social: short, punchy, emotional, lifestyle
          return (
            prop.category === 'emotional' ||
            prop.category === 'experience' ||
            prop.ladderStep.includes('Outcome') ||
            prop.ladderStep.includes('Emotional') ||
            prop.text.length < 100 // Shorter messages for social
          );
        
        case 'sales':
          // Sales collateral: trust, value, competitive, proof
          return (
            prop.category === 'trust' ||
            prop.category === 'value' ||
            prop.ladderStep.includes('Promise') ||
            prop.ladderStep.includes('ROI') ||
            prop.ladderStep.includes('Impact')
          );
        
        default:
          return true;
      }
    });
  }

  return filtered;
}

/**
 * Gets a description of what the filter emphasizes
 */
export function getFilterDescription(
  audienceFilter: string,
  contentTypeFilter: string
): string | null {
  const parts: string[] = [];

  if (audienceFilter !== 'all') {
    const audienceDescriptions: Record<string, string> = {
      business: 'Emphasizing travel, productivity, and professional use cases',
      gamers: 'Highlighting audio quality, entertainment, and immersive experiences',
      budget: 'Focusing on value, savings, and essential features',
      professionals: 'Prioritizing work calls, reliability, and productivity',
      commuters: 'Featuring portability, battery life, and on-the-go convenience'
    };
    parts.push(audienceDescriptions[audienceFilter]);
  }

  if (contentTypeFilter !== 'all') {
    const contentDescriptions: Record<string, string> = {
      product: 'Best for detailed product descriptions with specs and benefits',
      ads: 'Optimized for high-impact paid advertising campaigns',
      email: 'Tailored for conversational email marketing tone',
      social: 'Short, engaging messages perfect for social posts',
      sales: 'Focused on trust-building and competitive positioning'
    };
    if (parts.length > 0) {
      parts.push(`formatted for ${contentDescriptions[contentTypeFilter].toLowerCase()}`);
    } else {
      parts.push(contentDescriptions[contentTypeFilter]);
    }
  }

  return parts.length > 0 ? parts.join(', ') : null;
}
