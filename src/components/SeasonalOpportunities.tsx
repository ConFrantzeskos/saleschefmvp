import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, TrendingUp, Flame, Zap, CalendarDays } from 'lucide-react';
import { differenceInDays, parseISO } from 'date-fns';

interface SeasonalEvent {
  id: string;
  name: string;
  date: string;
  category: 'Shopping Event' | 'National Holiday' | 'Seasonal' | 'Holiday Shopping' | 'Cultural Event' | 'Shopping Period';
  contentRecommendation: string;
  strategicInsight: string;
  region?: string;
  expectedImpact?: string;
}

const seasonalEvents: SeasonalEvent[] = [
  {
    id: 'black-friday-2025',
    name: 'Black Friday',
    date: '2025-11-28',
    category: 'Shopping Event',
    contentRecommendation: 'Update product descriptions with deal-focused language. Emphasize "limited time" and "biggest savings" messaging.',
    strategicInsight: 'Australian Black Friday has grown 287% since 2020. Early prep beats the noise.',
    expectedImpact: '+180% traffic'
  },
  {
    id: 'cyber-monday-2025',
    name: 'Cyber Monday',
    date: '2025-12-01',
    category: 'Shopping Event',
    contentRecommendation: 'Optimize for online-only deals. Add "digital exclusive" and "online savings" to titles.',
    strategicInsight: 'Online-first Australians spending peaks Monday-Tuesday after Black Friday weekend.',
    expectedImpact: '+140% conversion'
  },
  {
    id: 'summer-kickoff-2025',
    name: 'Summer Season Kickoff',
    date: '2025-12-01',
    category: 'Seasonal',
    contentRecommendation: 'Transition to summer lifestyle imagery and copy. Highlight outdoor, beach, and holiday themes.',
    strategicInsight: 'Australian summer = peak leisure spending. Position products for gifting, holidays, outdoor activities.',
    expectedImpact: '+65% engagement'
  },
  {
    id: 'christmas-peak-2025',
    name: 'Christmas Shopping Peak',
    date: '2025-12-10',
    category: 'Holiday Shopping',
    contentRecommendation: 'Add "perfect gift" and "arrives before Christmas" messaging. Update for gift-giving contexts.',
    strategicInsight: 'Peak Australian online shopping period. Last-minute shoppers dominate Dec 15-23.',
    expectedImpact: '+220% revenue'
  },
  {
    id: 'boxing-day-2025',
    name: 'Boxing Day Sales',
    date: '2025-12-26',
    category: 'Shopping Event',
    contentRecommendation: 'Prepare clearance and "new year refresh" content. Emphasize value and fresh-start positioning.',
    strategicInsight: "Australia's biggest retail event. Bigger than Black Friday for local retailers.",
    expectedImpact: '+250% traffic'
  },
  {
    id: 'nye-resolutions-2026',
    name: 'New Year Resolutions Period',
    date: '2026-01-01',
    category: 'Cultural Event',
    contentRecommendation: 'Position products for self-improvement, health, organization, and fresh-start goals.',
    strategicInsight: 'Resolution-driven purchases peak first two weeks of January. Wellness, fitness, home organization surge.',
    expectedImpact: '+95% fitness category'
  },
  {
    id: 'australia-day-2026',
    name: 'Australia Day',
    date: '2026-01-26',
    category: 'National Holiday',
    contentRecommendation: 'Add patriotic and "Australian-made" positioning where applicable. BBQ, outdoor, and celebration themes.',
    strategicInsight: 'Long weekend = increased leisure and outdoor product sales. National pride messaging resonates strongly.',
    region: 'National',
    expectedImpact: '+75% outdoor'
  },
  {
    id: 'back-to-school-2026',
    name: 'Back to School',
    date: '2026-01-28',
    category: 'Shopping Period',
    contentRecommendation: 'Highlight organization, productivity, and educational value. Target parents and students.',
    strategicInsight: 'Major Australian shopping event. Office supplies, tech, clothing, and home organization categories peak.',
    expectedImpact: '+160% stationery'
  },
  {
    id: 'valentines-2026',
    name: "Valentine's Day",
    date: '2026-02-14',
    category: 'Holiday Shopping',
    contentRecommendation: 'Add romantic gift positioning. Emphasize "thoughtful gift" and "show you care" messaging.',
    strategicInsight: 'Growing Australian commercial holiday. Jewelry, tech, experiences, and beauty categories spike.',
    expectedImpact: '+120% gift items'
  },
  {
    id: 'easter-2026',
    name: 'Easter',
    date: '2026-04-03',
    category: 'Holiday Shopping',
    contentRecommendation: 'Family, celebration, and "treat yourself" themes. Long weekend travel and leisure focus.',
    strategicInsight: 'Second-biggest holiday spending period. Easter Monday = major retail traffic day.',
    expectedImpact: '+110% family'
  },
  {
    id: 'mothers-day-2026',
    name: "Mother's Day",
    date: '2026-05-10',
    category: 'Holiday Shopping',
    contentRecommendation: 'Gift-focused content emphasizing appreciation, pampering, and thoughtfulness. Target adult children.',
    strategicInsight: "Australia's third-largest gifting occasion after Christmas and Valentine's. Beauty, jewelry, experiences lead.",
    expectedImpact: '+145% beauty'
  },
  {
    id: 'eofy-2026',
    name: 'EOFY Sales',
    date: '2026-06-01',
    category: 'Shopping Event',
    contentRecommendation: 'Emphasize "end of year savings" and "tax time deals". Business/professional products highlight tax deductibility.',
    strategicInsight: 'Massive Australian retail phenomenon. B2B and big-ticket purchases spike. Businesses looking for tax write-offs.',
    expectedImpact: '+190% B2B'
  },
  {
    id: 'tax-return-2026',
    name: 'Tax Return Season',
    date: '2026-07-01',
    category: 'Shopping Period',
    contentRecommendation: 'Position products as "smart ways to use your tax return". Highlight value and investment language.',
    strategicInsight: 'Australians receive $30+ billion in tax returns annually. Discretionary spending peaks July-August.',
    expectedImpact: '+85% big ticket'
  },
  {
    id: 'fathers-day-2026',
    name: "Father's Day",
    date: '2026-09-06',
    category: 'Holiday Shopping',
    contentRecommendation: 'Gift positioning for dads. Emphasize practical, hobby-related, and tech products.',
    strategicInsight: 'Note: Australian Father\'s Day is FIRST Sunday in September (not June like US). Tech, tools, sports peak.',
    region: 'National',
    expectedImpact: '+130% tech/tools'
  },
  {
    id: 'grand-finals-2026',
    name: 'Grand Finals Season',
    date: '2026-09-26',
    category: 'Cultural Event',
    contentRecommendation: 'Sports, entertainment, and celebration themes. AFL/NRL finals drive spending in entertainment categories.',
    strategicInsight: 'Major Australian cultural moment. TV, audio, party supplies, and sports merchandise spike.',
    expectedImpact: '+70% entertainment'
  },
  {
    id: 'melbourne-cup-2026',
    name: 'Melbourne Cup',
    date: '2026-11-03',
    category: 'Cultural Event',
    contentRecommendation: 'Fashion, celebration, and "race day" positioning. Particularly strong in VIC.',
    strategicInsight: '"The race that stops a nation" = fashion, entertainment, hospitality spending surge.',
    region: 'VIC (National interest)',
    expectedImpact: '+90% fashion'
  },
  {
    id: 'black-friday-2026',
    name: 'Black Friday 2026',
    date: '2026-11-27',
    category: 'Shopping Event',
    contentRecommendation: 'Prepare early for next year\'s cycle. Learn from this year\'s performance data.',
    strategicInsight: 'Annual planning begins now. Review 2025 performance to optimize 2026 strategy.',
    expectedImpact: 'Strategic planning'
  }
];

const SeasonalOpportunities = () => {
  const today = new Date();
  
  const eventsWithDays = seasonalEvents
    .map(event => ({
      ...event,
      daysUntil: differenceInDays(parseISO(event.date), today)
    }))
    .filter(event => event.daysUntil >= -7) // Show events up to 7 days in the past
    .sort((a, b) => a.daysUntil - b.daysUntil);

  const getUrgencyLevel = (days: number): 'HIGH' | 'MEDIUM' | 'LOW' => {
    if (days < 14) return 'HIGH';
    if (days < 60) return 'MEDIUM';
    return 'LOW';
  };

  const getUrgencyIcon = (urgency: string) => {
    switch (urgency) {
      case 'HIGH':
        return <Flame className="w-4 h-4" />;
      case 'MEDIUM':
        return <Zap className="w-4 h-4" />;
      default:
        return <CalendarDays className="w-4 h-4" />;
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'HIGH':
        return 'bg-red-500/10 text-red-600 border-red-500/20';
      case 'MEDIUM':
        return 'bg-orange-500/10 text-orange-600 border-orange-500/20';
      default:
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
    }
  };

  const getCategoryEmoji = (category: string) => {
    switch (category) {
      case 'Shopping Event':
        return '🛍️';
      case 'National Holiday':
        return '🇦🇺';
      case 'Seasonal':
        return '🌞';
      case 'Holiday Shopping':
        return '🎁';
      case 'Cultural Event':
        return '🎭';
      case 'Shopping Period':
        return '📅';
      default:
        return '📍';
    }
  };

  const formatDate = (dateString: string) => {
    const date = parseISO(dateString);
    return date.toLocaleDateString('en-AU', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-primary/10">
          <Calendar className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">Upcoming Opportunities</h2>
          <p className="text-muted-foreground">
            Strategic timing suggestions based on Australian market events, cultural moments, and seasonal trends
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {eventsWithDays.map(event => {
          const urgency = getUrgencyLevel(event.daysUntil);
          const daysText = event.daysUntil === 0 
            ? 'Today' 
            : event.daysUntil === 1 
            ? 'Tomorrow' 
            : event.daysUntil > 0 
            ? `${event.daysUntil} days away` 
            : `${Math.abs(event.daysUntil)} days ago`;

          return (
            <Card key={event.id} className="p-6 hover:shadow-lg transition-all duration-200 border-2">
              <div className="space-y-4">
                {/* Header */}
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-lg leading-tight">
                      <span className="mr-2">{getCategoryEmoji(event.category)}</span>
                      {event.name}
                    </h3>
                    <Badge 
                      variant="outline" 
                      className={`${getUrgencyColor(urgency)} border flex items-center gap-1 shrink-0`}
                    >
                      {getUrgencyIcon(urgency)}
                      {urgency}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{formatDate(event.date)}</span>
                    <span>•</span>
                    <span className="font-medium">{daysText}</span>
                  </div>
                  {event.region && (
                    <Badge variant="secondary" className="text-xs">
                      {event.region}
                    </Badge>
                  )}
                </div>

                {/* Category */}
                <Badge variant="outline" className="w-fit">
                  {event.category}
                </Badge>

                {/* Expected Impact */}
                {event.expectedImpact && (
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <TrendingUp className="w-4 h-4" />
                    <span>{event.expectedImpact}</span>
                  </div>
                )}

                {/* Content Recommendation */}
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    SalesChef Recommends
                  </p>
                  <p className="text-sm">
                    {event.contentRecommendation}
                  </p>
                </div>

                {/* Strategic Insight */}
                <div className="space-y-1 p-3 rounded-lg bg-muted/30">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Strategic Insight
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {event.strategicInsight}
                  </p>
                </div>

                {/* Action Button */}
                {urgency === 'HIGH' && (
                  <Button className="w-full" size="sm">
                    Optimize Content Now
                  </Button>
                )}
                {urgency === 'MEDIUM' && (
                  <Button variant="outline" className="w-full" size="sm">
                    Schedule Optimization
                  </Button>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      {eventsWithDays.length === 0 && (
        <Card className="p-12 text-center">
          <p className="text-muted-foreground">No upcoming events in the next 12 months</p>
        </Card>
      )}
    </div>
  );
};

export default SeasonalOpportunities;
