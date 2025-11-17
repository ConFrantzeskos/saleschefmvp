import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { parseISO, differenceInDays, format } from 'date-fns';

interface LocalEvent {
  id: string;
  name: string;
  date: string;
  category: 'Weather' | 'Local Event' | 'Sports' | 'Infrastructure' | 'School/University' | 'Hyper-Local' | 'Seasonal Regional' | 'Cultural';
  location: string;
  radius?: string;
  contentRecommendation: string;
  strategicInsight: string;
  expectedImpact?: string;
  targetAudience?: string;
  icon: string;
}

const localEvents: LocalEvent[] = [
  {
    id: 'sydney-heatwave',
    name: 'Sydney Heatwave Alert',
    date: '2025-11-21',
    category: 'Weather',
    location: 'Greater Sydney',
    radius: '50km radius',
    icon: '☀️',
    contentRecommendation: 'Highlight cooling products, hydration, sun protection. Add "beat the heat" messaging to product titles and descriptions.',
    strategicInsight: '5-day heatwave forecast 38-42°C. Historical data shows +145% spike in cooling product searches during extreme heat. Update content 48 hours before heatwave starts.',
    expectedImpact: '+145% cooling products',
    targetAudience: 'All demographics'
  },
  {
    id: 'bondi-farmers-market',
    name: 'Bondi Farmers Market',
    date: '2025-11-24',
    category: 'Local Event',
    location: 'Bondi, Sydney',
    radius: '10km radius (Eastern Suburbs)',
    icon: '🎪',
    contentRecommendation: 'Promote reusable shopping bags, food storage, picnic gear. Target eco-conscious shoppers with sustainability messaging.',
    strategicInsight: 'Weekly event attracts 5,000+ visitors. Premium demographic with high spending power. Eastern Suburbs shoppers prioritize quality and sustainability.',
    expectedImpact: '+80% reusable products',
    targetAudience: 'Eco-conscious, families'
  },
  {
    id: 'sydney-swans-finals',
    name: 'Sydney Swans Finals at SCG',
    date: '2025-11-23',
    category: 'Sports',
    location: 'Sydney Cricket Ground, Moore Park',
    radius: '15km radius',
    icon: '⚽',
    contentRecommendation: 'Push team merchandise, entertainment supplies, transportation products. "Game day ready" messaging resonates strongly.',
    strategicInsight: '45,000+ attendees expected. Surge in pre-game purchases 48 hours prior. Post-game celebration purchases spike if team wins.',
    expectedImpact: '+120% team merchandise',
    targetAudience: 'Sports fans, families'
  },
  {
    id: 'melbourne-cold-snap',
    name: 'Melbourne Cold Snap Incoming',
    date: '2025-11-22',
    category: 'Weather',
    location: 'Greater Melbourne',
    radius: '80km radius',
    icon: '❄️',
    contentRecommendation: 'Feature heating products, warm clothing, indoor entertainment. "Stay cozy" and "unexpected cold" messaging.',
    strategicInsight: 'Unexpected late-spring cold snap (8-12°C). Weather surprises drive impulse heating purchases. Emergency heater sales spike 300% during cold snaps.',
    expectedImpact: '+95% heating',
    targetAudience: 'All demographics'
  },
  {
    id: 'westfield-parramatta',
    name: 'Westfield Parramatta Expansion Opening',
    date: '2025-12-05',
    category: 'Infrastructure',
    location: 'Parramatta, Sydney',
    radius: '20km radius (Western Sydney)',
    icon: '🏗️',
    contentRecommendation: 'Leverage grand opening foot traffic. Premium product positioning for new shoppers discovering your brand.',
    strategicInsight: 'Major retail expansion bringing 10,000+ visitors daily. New demographic access to previously underserved Western Sydney market.',
    expectedImpact: '+200% local traffic',
    targetAudience: 'Western Sydney residents'
  },
  {
    id: 'nsw-school-holidays',
    name: 'NSW School Holidays Starting',
    date: '2025-12-21',
    category: 'School/University',
    location: 'NSW (Statewide)',
    icon: '🎓',
    contentRecommendation: 'Holiday entertainment, travel supplies, family activity products. "Keep kids entertained" angle drives parent purchases.',
    strategicInsight: 'NSW holidays start earlier than VIC. Pre-holiday shopping peaks 10 days prior. Parents seek entertainment and travel solutions.',
    expectedImpact: '+110% family products',
    targetAudience: 'Parents, families'
  },
  {
    id: 'newtown-festival',
    name: 'Newtown Festival',
    date: '2025-11-24',
    category: 'Hyper-Local',
    location: 'Newtown, Sydney',
    radius: '5km radius (Inner West)',
    icon: '🏘️',
    contentRecommendation: 'Street festival supplies, portable seating, sun protection, hydration. "Festival ready" messaging for young, hip demographic.',
    strategicInsight: 'Annual festival attracts 80,000+ visitors. Hip, young demographic with high purchasing intent. Inner West shoppers value local, unique products.',
    expectedImpact: '+160% outdoor products',
    targetAudience: 'Young adults, families'
  },
  {
    id: 'brisbane-storm-season',
    name: 'Brisbane Storm Season Alert',
    date: '2025-12-01',
    category: 'Weather',
    location: 'Brisbane & SE Queensland',
    radius: '100km radius',
    icon: '⛈️',
    contentRecommendation: 'Emergency preparedness, waterproof products, indoor entertainment, power backup solutions. Safety-first messaging.',
    strategicInsight: 'Summer storm season = insurance claims and preventive purchases spike. Queenslanders proactively prepare for storm season.',
    expectedImpact: '+70% emergency supplies',
    targetAudience: 'Homeowners, families'
  },
  {
    id: 'usyd-exams',
    name: 'University of Sydney Exam Period',
    date: '2025-11-18',
    category: 'School/University',
    location: 'Sydney inner suburbs (Camperdown, Newtown, Redfern)',
    radius: '8km radius',
    icon: '📚',
    contentRecommendation: 'Study supplies, focus aids, energy drinks, comfort food. "Exam survival" and "you got this" motivational messaging.',
    strategicInsight: '50,000+ students in exam mode. Stress purchases and late-night studying supplies spike. Students seek productivity and comfort.',
    expectedImpact: '+85% study supplies',
    targetAudience: 'University students'
  },
  {
    id: 'bondi-lifeguard-season',
    name: 'Bondi Beach Lifeguard Season Opens',
    date: '2025-12-01',
    category: 'Seasonal Regional',
    location: 'Bondi Beach, Eastern Suburbs',
    radius: '12km radius',
    icon: '🌱',
    contentRecommendation: 'Beach safety equipment, sun protection, surf gear. "Safe summer" and "official season" messaging builds trust.',
    strategicInsight: 'Official patrol season opening = summer beach season kickoff. Safety-conscious purchases surge. Iconic beach location drives tourism.',
    expectedImpact: '+110% beach gear',
    targetAudience: 'Beach-goers, tourists, families'
  },
  {
    id: 'adelaide-fringe',
    name: 'Adelaide Fringe Festival',
    date: '2026-02-13',
    category: 'Cultural',
    location: 'Adelaide CBD & surrounding',
    radius: '30km radius',
    icon: '🎭',
    contentRecommendation: 'Entertainment, hospitality, accommodation-related products. Target festival-goers and out-of-state visitors.',
    strategicInsight: "Australia's biggest arts festival. 1 million+ attendees over 4 weeks. Major tourism event with high-spending interstate visitors.",
    expectedImpact: '+190% arts/entertainment',
    targetAudience: 'Arts lovers, tourists'
  },
  {
    id: 'sydney-mardi-gras',
    name: 'Sydney Mardi Gras Parade',
    date: '2026-02-28',
    category: 'Cultural',
    location: 'Oxford St, Darlinghurst, Sydney',
    radius: '10km radius',
    icon: '🎭',
    contentRecommendation: 'Celebration supplies, fashion, pride merchandise. Inclusive, celebratory messaging. Authentic LGBTQ+ brand values resonate.',
    strategicInsight: '300,000+ attendees. Major international tourism event with high spending visitors. Month-long festival leading up to parade.',
    expectedImpact: '+205% celebration products',
    targetAudience: 'LGBTQ+ community, allies, tourists'
  },
  {
    id: 'barossa-vintage',
    name: 'Barossa Valley Vintage (Wine Harvest)',
    date: '2026-03-01',
    category: 'Seasonal Regional',
    location: 'Barossa Valley, SA',
    radius: '50km radius',
    icon: '🍇',
    contentRecommendation: 'Wine tourism products, accommodation, regional food products. "Experience the vintage" and premium quality positioning.',
    strategicInsight: 'Peak wine tourism season. Premium demographic visiting region. Wine enthusiasts have high spending power and seek authentic experiences.',
    expectedImpact: '+75% wine accessories',
    targetAudience: 'Wine enthusiasts, tourists'
  },
  {
    id: 'thredbo-opening',
    name: 'Thredbo Snow Season Opening',
    date: '2026-06-13',
    category: 'Seasonal Regional',
    location: 'Thredbo, NSW Snowy Mountains',
    radius: '40km radius',
    icon: '⛷️',
    contentRecommendation: 'Ski equipment, winter sports gear, accommodation booking tools. "First tracks" and "opening weekend" urgency messaging.',
    strategicInsight: "First major ski weekend. Equipment purchases peak 2 weeks prior. Queen's Birthday long weekend drives bookings.",
    expectedImpact: '+180% winter sports',
    targetAudience: 'Snow sports enthusiasts, families'
  },
  {
    id: 'darwin-mango-season',
    name: 'Darwin Mango Season Peak',
    date: '2025-12-01',
    category: 'Seasonal Regional',
    location: 'Darwin & NT',
    radius: 'Territory-wide',
    icon: '🥭',
    contentRecommendation: 'Tropical fruit equipment, preservation supplies, cooling products. Highlight Northern Territory premium quality produce.',
    strategicInsight: 'Peak tropical fruit season drives regional purchasing patterns. NT mangoes are premium export product. Local pride strong.',
    expectedImpact: '+60% food preservation',
    targetAudience: 'Local residents, food enthusiasts'
  },
  {
    id: 'melbourne-comedy-festival',
    name: 'Melbourne International Comedy Festival',
    date: '2026-03-26',
    category: 'Cultural',
    location: 'Melbourne CBD',
    radius: '25km radius',
    icon: '🎭',
    contentRecommendation: 'Entertainment, hospitality, accommodation products. Target comedy fans and interstate visitors with fun, upbeat messaging.',
    strategicInsight: 'Major international event. 700,000+ tickets sold annually. Month-long event drives sustained hospitality and entertainment spending.',
    expectedImpact: '+125% entertainment',
    targetAudience: 'Comedy fans, tourists'
  },
  {
    id: 'ekka-brisbane',
    name: 'Ekka (Brisbane Royal Show)',
    date: '2026-08-07',
    category: 'Cultural',
    location: 'Brisbane Showgrounds, Bowen Hills',
    radius: '30km radius',
    icon: '🎡',
    contentRecommendation: 'Family entertainment, agricultural products, show bags, outdoor gear. "Ekka excitement" and Queensland tradition messaging.',
    strategicInsight: "Queensland's biggest event. 400,000+ attendees. QLD public holiday Aug 14 = long weekend planning. Show bags nostalgia strong.",
    expectedImpact: '+150% family entertainment',
    targetAudience: 'Families, Queensland residents'
  },
  {
    id: 'perth-uv-alert',
    name: 'Perth Extreme UV Weekend',
    date: '2025-11-29',
    category: 'Weather',
    location: 'Perth & surrounding',
    radius: '60km radius',
    icon: '☀️',
    contentRecommendation: 'Sunscreen, hats, protective clothing, shade solutions. "Extreme UV" and skin safety messaging. Medical authority tone.',
    strategicInsight: 'Perth has highest UV levels in Australia. Sun safety compliance high. Weekend outdoor activities drive protection product purchases.',
    expectedImpact: '+130% sun protection',
    targetAudience: 'Outdoor enthusiasts, families, parents'
  },
  {
    id: 'manly-sea-eagles',
    name: 'Manly Sea Eagles Junior Finals',
    date: '2025-12-08',
    category: 'Sports',
    location: 'Manly, Northern Beaches',
    radius: '15km radius',
    icon: '⚽',
    contentRecommendation: 'Community pride merchandise, team colors, family celebration products. Local pride and grassroots support messaging.',
    strategicInsight: 'Junior sport creates intense community pride. Parents and families rally around local teams. Merchandise sales strongest in tight-knit suburbs.',
    expectedImpact: '+95% community merchandise',
    targetAudience: 'Local families, sports community'
  },
  {
    id: 'randwick-cleanup',
    name: 'Randwick Council Cleanup Weekend',
    date: '2025-12-07',
    category: 'Hyper-Local',
    location: 'Randwick, Eastern Suburbs',
    radius: '5km radius',
    icon: '🏘️',
    contentRecommendation: 'Cleaning supplies, outdoor gear, waste disposal products. Community participation and environmental responsibility messaging.',
    strategicInsight: 'Council cleanup events drive local participation. Residents seek to dispose of items and also purchase organization/storage solutions.',
    expectedImpact: '+50% cleaning/storage',
    targetAudience: 'Local residents, homeowners'
  }
];

const LocalOpportunities = () => {
  const getUrgency = (dateString: string): 'HIGH' | 'MEDIUM' | 'LOW' => {
    const today = new Date();
    const eventDate = parseISO(dateString);
    const daysUntil = differenceInDays(eventDate, today);
    
    if (daysUntil < 7) return 'HIGH';
    if (daysUntil < 30) return 'MEDIUM';
    return 'LOW';
  };

  const getUrgencyColor = (urgency: 'HIGH' | 'MEDIUM' | 'LOW') => {
    switch (urgency) {
      case 'HIGH':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'MEDIUM':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'LOW':
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  const getGeographicScope = (radius?: string): { label: string; color: string } => {
    if (!radius) return { label: 'State-Wide', color: 'bg-purple-100 text-purple-800' };
    
    const radiusLower = radius.toLowerCase();
    if (radiusLower.includes('5km') || radiusLower.includes('suburb')) {
      return { label: 'Hyper-Local', color: 'bg-green-100 text-green-800' };
    }
    if (radiusLower.includes('territory') || radiusLower.includes('statewide')) {
      return { label: 'State-Wide', color: 'bg-purple-100 text-purple-800' };
    }
    return { label: 'Regional', color: 'bg-blue-100 text-blue-800' };
  };

  const sortedEvents = [...localEvents].sort((a, b) => {
    const dateA = parseISO(a.date);
    const dateB = parseISO(b.date);
    return dateA.getTime() - dateB.getTime();
  });

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Local Area Marketing Opportunities</h3>
            <p className="text-sm text-muted-foreground">
              Hyper-local intelligence from regional weather patterns to suburb-level events. 
              Strategic timing at every geographic scale.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {sortedEvents.map((event) => {
            const urgency = getUrgency(event.date);
            const today = new Date();
            const eventDate = parseISO(event.date);
            const daysUntil = differenceInDays(eventDate, today);
            const isPast = daysUntil < 0;
            const geographicScope = getGeographicScope(event.radius);

            if (isPast) return null;

            return (
              <Card key={event.id} className="p-6 hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{event.icon}</span>
                        <h4 className="font-semibold text-lg">{event.name}</h4>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-3">
                        <span>{format(eventDate, 'EEEE d MMMM yyyy')}</span>
                        <span>•</span>
                        <span>{daysUntil === 0 ? 'Today' : daysUntil === 1 ? 'Tomorrow' : `${daysUntil} days away`}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline" className={getUrgencyColor(urgency)}>
                          {urgency}
                        </Badge>
                        <Badge variant="outline" className="bg-muted">
                          {event.category}
                        </Badge>
                        <Badge variant="outline" className={geographicScope.color}>
                          {geographicScope.label}
                        </Badge>
                      </div>
                      <div className="flex items-start gap-2 mb-4">
                        <span className="text-lg">📍</span>
                        <div>
                          <p className="text-sm font-medium">{event.location}</p>
                          {event.radius && (
                            <p className="text-xs text-muted-foreground">🌍 {event.radius}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold mb-1">SALESCHEF RECOMMENDS</p>
                      <p className="text-sm text-muted-foreground">
                        {event.contentRecommendation}
                      </p>
                    </div>

                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm font-semibold text-blue-900 mb-1">💡 STRATEGIC INSIGHT</p>
                      <p className="text-sm text-blue-800">
                        {event.strategicInsight}
                      </p>
                    </div>

                    {(event.expectedImpact || event.targetAudience) && (
                      <div className="flex flex-wrap gap-4 text-sm">
                        {event.expectedImpact && (
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">🎯 Expected Impact:</span>
                            <span className="text-muted-foreground">{event.expectedImpact}</span>
                          </div>
                        )}
                        {event.targetAudience && (
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">👥 Target:</span>
                            <span className="text-muted-foreground">{event.targetAudience}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div>
                    {urgency === 'HIGH' && (
                      <Button className="w-full">
                        Optimize Content Now
                      </Button>
                    )}
                    {urgency === 'MEDIUM' && (
                      <Button variant="outline" className="w-full">
                        Schedule Optimization
                      </Button>
                    )}
                    {urgency === 'LOW' && (
                      <Button variant="outline" className="w-full" size="sm">
                        Schedule Optimization
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default LocalOpportunities;
