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
    contentRecommendation: 'Feature doorbusters on TVs, laptops, gaming consoles, smart home devices. Emphasize "biggest tech savings of the year" and "doorbuster deals" messaging. Stack offers and bundles.',
    strategicInsight: 'Australian Black Friday has grown 287% since 2020. Electronics dominate sales: TVs (+290%), laptops (+245%), gaming (+310%). Early prep beats the noise. Bundles drive basket size.',
    expectedImpact: '+290% electronics traffic'
  },
  {
    id: 'cyber-monday-2025',
    name: 'Cyber Monday',
    date: '2025-12-01',
    category: 'Shopping Event',
    contentRecommendation: 'Online-exclusive tech deals on laptops, tablets, smart home packages, accessories. "Digital doorbusters" and "online-only pricing" drive urgency. Free shipping sweetens deal.',
    strategicInsight: 'Online-first Australians spending peaks Monday-Tuesday after Black Friday. Electronics buyers comparison shop over weekend, purchase Monday. Online convenience + better selection beats in-store.',
    expectedImpact: '+240% online electronics'
  },
  {
    id: 'summer-kickoff-2025',
    name: 'Summer Season Kickoff',
    date: '2025-12-01',
    category: 'Seasonal',
    contentRecommendation: 'Promote portable speakers, action cameras, waterproof electronics, outdoor projectors, solar chargers. "Summer adventure tech" positioning for outdoor Australian lifestyle.',
    strategicInsight: 'Australian summer = peak outdoor tech spending. Portable audio (+185%), action cameras (+155%), solar power banks (+140%). Position for beach, camping, BBQs, holidays.',
    expectedImpact: '+185% portable electronics'
  },
  {
    id: 'christmas-peak-2025',
    name: 'Christmas Shopping Peak',
    date: '2025-12-10',
    category: 'Holiday Shopping',
    contentRecommendation: 'Gift tech bundles: headphones, smart watches, tablets, gaming consoles, smart home devices. "Perfect tech gift" + "arrives before Christmas" urgency messaging critical.',
    strategicInsight: 'Peak Australian online shopping period. Electronics = #1 gift category. Last-minute shoppers dominate Dec 15-23. Gift guides drive 40% of sales. Bundle positioning increases basket size 65%.',
    expectedImpact: '+320% gift electronics'
  },
  {
    id: 'boxing-day-2025',
    name: 'Boxing Day Sales',
    date: '2025-12-26',
    category: 'Shopping Event',
    contentRecommendation: 'Clearance pricing on TVs, laptops, last-gen devices. "New year upgrade" and "biggest clearance" messaging. Make room for new models arriving February.',
    strategicInsight: "Australia's biggest retail event. Bigger than Black Friday for local retailers. Electronics clearance drives foot traffic. TVs (+350%), computing (+280%), home appliances (+240%). Bargain hunters expect aggressive pricing.",
    expectedImpact: '+350% electronics clearance'
  },
  {
    id: 'nye-resolutions-2026',
    name: 'New Year Resolutions Period',
    date: '2026-01-01',
    category: 'Cultural Event',
    contentRecommendation: 'Fitness tech (smartwatches, fitness trackers), smart home organization devices, productivity laptops/tablets. "New year, better tech" and self-improvement positioning.',
    strategicInsight: 'Resolution-driven purchases peak first two weeks of January. Fitness wearables (+210%), smart home (+165%), productivity tech (+145%). Self-improvement mindset = premium willingness.',
    expectedImpact: '+210% fitness tech'
  },
  {
    id: 'australia-day-2026',
    name: 'Australia Day',
    date: '2026-01-26',
    category: 'National Holiday',
    contentRecommendation: 'Outdoor entertainment packages: portable projectors, Bluetooth speakers, outdoor TVs, BBQ entertainment systems. "Aussie entertaining" and "long weekend setup" messaging.',
    strategicInsight: 'Long weekend = increased outdoor entertainment electronics. Portable audio (+140%), outdoor projectors (+120%), TV upgrades for cricket/Triple J Hottest 100 (+95%). National pride = "Australian-made tech" resonates.',
    region: 'National',
    expectedImpact: '+140% outdoor entertainment'
  },
  {
    id: 'back-to-school-2026',
    name: 'Back to School',
    date: '2026-01-28',
    category: 'Shopping Period',
    contentRecommendation: 'Student laptops, tablets, Chromebooks, study headphones, ergonomic accessories. "Student tech essentials" and educational productivity positioning. Bundle deals on laptop + accessories.',
    strategicInsight: 'Major Australian shopping event. Student tech dominates: laptops (+280%), tablets (+195%), headphones (+165%). Parents invest in quality tech for educational success. Educational pricing drives premium purchases.',
    expectedImpact: '+280% student tech'
  },
  {
    id: 'valentines-2026',
    name: "Valentine's Day",
    date: '2026-02-14',
    category: 'Holiday Shopping',
    contentRecommendation: 'Tech gift ideas: smartwatches, wireless earbuds, digital photo frames, couples\' tech accessories. "Gifts they\'ll actually use" practical romance positioning.',
    strategicInsight: 'Growing Australian commercial holiday. Tech now beats traditional gifts - smartwatches (+175%), wireless earbuds (+145%), streaming devices (+95%). Men = primary tech gift buyers. Practical > sentimental.',
    expectedImpact: '+175% gift tech'
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
                {urgency === 'LOW' && (
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
