import React, { useState, useMemo } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { parseISO, format, isSameDay, differenceInDays, startOfMonth, endOfMonth } from 'date-fns';
import { cn } from '@/lib/utils';
import { Calendar as CalendarIcon, TrendingUp, MapPin } from 'lucide-react';

// Import opportunity data
import { seasonalEvents } from '@/data/seasonalEventsData';
import { localEvents } from '@/data/localEventsData';

interface CombinedOpportunity {
  id: string;
  name: string;
  date: string;
  type: 'seasonal' | 'local';
  category: string;
  location?: string;
  radius?: string;
  contentRecommendation: string;
  strategicInsight: string;
  expectedImpact?: string;
  urgency: 'HIGH' | 'MEDIUM' | 'LOW';
  icon?: string;
}

const OpportunityCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedMonth, setSelectedMonth] = useState<Date>(new Date());

  // Combine and process all opportunities
  const allOpportunities = useMemo<CombinedOpportunity[]>(() => {
    const getUrgency = (dateString: string): 'HIGH' | 'MEDIUM' | 'LOW' => {
      const today = new Date();
      const eventDate = parseISO(dateString);
      const daysUntil = differenceInDays(eventDate, today);
      
      if (daysUntil < 7) return 'HIGH';
      if (daysUntil < 30) return 'MEDIUM';
      return 'LOW';
    };

    const seasonal = seasonalEvents.map(event => ({
      ...event,
      type: 'seasonal' as const,
      urgency: getUrgency(event.date)
    }));

    const local = localEvents.map(event => ({
      ...event,
      type: 'local' as const,
      urgency: getUrgency(event.date)
    }));

    return [...seasonal, ...local].sort((a, b) => 
      parseISO(a.date).getTime() - parseISO(b.date).getTime()
    );
  }, []);

  // Get opportunities for selected date
  const selectedDateOpportunities = useMemo(() => {
    if (!selectedDate) return [];
    return allOpportunities.filter(opp => 
      isSameDay(parseISO(opp.date), selectedDate)
    );
  }, [selectedDate, allOpportunities]);

  // Get opportunities for the selected month
  const monthOpportunities = useMemo(() => {
    const start = startOfMonth(selectedMonth);
    const end = endOfMonth(selectedMonth);
    
    return allOpportunities.filter(opp => {
      const oppDate = parseISO(opp.date);
      return oppDate >= start && oppDate <= end;
    });
  }, [selectedMonth, allOpportunities]);

  // Get dates with opportunities for calendar highlighting
  const datesWithOpportunities = useMemo(() => {
    const dates = new Map<string, CombinedOpportunity[]>();
    allOpportunities.forEach(opp => {
      const dateKey = format(parseISO(opp.date), 'yyyy-MM-dd');
      if (!dates.has(dateKey)) {
        dates.set(dateKey, []);
      }
      dates.get(dateKey)?.push(opp);
    });
    return dates;
  }, [allOpportunities]);

  const getUrgencyColor = (urgency: 'HIGH' | 'MEDIUM' | 'LOW') => {
    switch (urgency) {
      case 'HIGH':
        return 'bg-red-500 text-white border-red-600';
      case 'MEDIUM':
        return 'bg-orange-500 text-white border-orange-600';
      case 'LOW':
        return 'bg-blue-500 text-white border-blue-600';
    }
  };

  const getUrgencyBadgeColor = (urgency: 'HIGH' | 'MEDIUM' | 'LOW') => {
    switch (urgency) {
      case 'HIGH':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'MEDIUM':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'LOW':
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  const getImpactSize = (impact?: string): 'small' | 'medium' | 'large' => {
    if (!impact) return 'medium';
    const percentage = parseInt(impact.match(/\d+/)?.[0] || '0');
    if (percentage >= 200) return 'large';
    if (percentage >= 100) return 'medium';
    return 'small';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">Opportunity Calendar</h3>
          <p className="text-sm text-muted-foreground">
            Visual timeline of all upcoming seasonal and local opportunities with urgency and impact indicators
          </p>
        </div>
      </div>

      {/* Legend */}
      <Card className="p-4">
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-sm font-medium">HIGH Urgency</span>
            <span className="text-xs text-muted-foreground">({"<"}7 days)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <span className="text-sm font-medium">MEDIUM Urgency</span>
            <span className="text-xs text-muted-foreground">(7-30 days)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-sm font-medium">LOW Urgency</span>
            <span className="text-xs text-muted-foreground">(30+ days)</span>
          </div>
          <div className="h-6 w-px bg-border"></div>
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Seasonal Event</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">Local Event</span>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar View */}
        <Card className="lg:col-span-1 p-6">
          <div className="flex items-center gap-2 mb-4">
            <CalendarIcon className="w-5 h-5 text-primary" />
            <h4 className="font-semibold">Calendar View</h4>
          </div>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            month={selectedMonth}
            onMonthChange={setSelectedMonth}
            className={cn("rounded-md border pointer-events-auto")}
            modifiers={{
              hasOpportunity: (date) => {
                const dateKey = format(date, 'yyyy-MM-dd');
                return datesWithOpportunities.has(dateKey);
              }
            }}
            modifiersStyles={{
              hasOpportunity: {
                fontWeight: 'bold',
              }
            }}
            modifiersClassNames={{
              hasOpportunity: 'font-bold relative'
            }}
            formatters={{
              formatDay: (date) => {
                const dateKey = format(date, 'yyyy-MM-dd');
                const opps = datesWithOpportunities.get(dateKey);
                
                if (opps && opps.length > 0) {
                  const hasHigh = opps.some(o => o.urgency === 'HIGH');
                  const hasMedium = opps.some(o => o.urgency === 'MEDIUM');
                  const hasLow = opps.some(o => o.urgency === 'LOW');
                  
                  return (
                    <div className="relative">
                      {format(date, 'd')}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5">
                        {hasHigh && <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>}
                        {hasMedium && <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>}
                        {hasLow && <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>}
                      </div>
                    </div>
                  );
                }
                
                return format(date, 'd');
              }
            }}
          />
          
          <div className="mt-4 p-3 bg-muted rounded-lg">
            <p className="text-xs font-medium mb-2">
              {format(selectedMonth, 'MMMM yyyy')} Overview
            </p>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Opportunities:</span>
                <span className="font-semibold">{monthOpportunities.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">High Urgency:</span>
                <span className="font-semibold text-red-600">
                  {monthOpportunities.filter(o => o.urgency === 'HIGH').length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Medium Urgency:</span>
                <span className="font-semibold text-orange-600">
                  {monthOpportunities.filter(o => o.urgency === 'MEDIUM').length}
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Opportunities List */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="font-semibold">
                {selectedDate ? format(selectedDate, 'EEEE, MMMM d, yyyy') : 'Select a date'}
              </h4>
              <p className="text-sm text-muted-foreground mt-1">
                {selectedDateOpportunities.length === 0 
                  ? 'No opportunities scheduled for this date' 
                  : `${selectedDateOpportunities.length} opportunity${selectedDateOpportunities.length === 1 ? '' : 's'} scheduled`
                }
              </p>
            </div>
          </div>

          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
            {selectedDateOpportunities.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CalendarIcon className="w-12 h-12 text-muted-foreground mb-3" />
                <p className="text-sm text-muted-foreground">
                  No opportunities on this date
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Select a date with colored indicators to view opportunities
                </p>
              </div>
            ) : (
              selectedDateOpportunities.map((opp) => {
                const daysUntil = differenceInDays(parseISO(opp.date), new Date());
                const impactSize = getImpactSize(opp.expectedImpact);
                
                return (
                  <Card key={opp.id} className={cn(
                    "p-5 border-l-4 hover:shadow-md transition-shadow",
                    opp.urgency === 'HIGH' && "border-l-red-500",
                    opp.urgency === 'MEDIUM' && "border-l-orange-500",
                    opp.urgency === 'LOW' && "border-l-blue-500"
                  )}>
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {opp.type === 'seasonal' ? (
                              <CalendarIcon className="w-4 h-4 text-primary" />
                            ) : (
                              <MapPin className="w-4 h-4 text-secondary" />
                            )}
                            {opp.icon && <span className="text-xl">{opp.icon}</span>}
                            <h5 className="font-semibold">{opp.name}</h5>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="outline" className={getUrgencyBadgeColor(opp.urgency)}>
                              {opp.urgency}
                            </Badge>
                            <Badge variant="outline" className="bg-muted">
                              {opp.category}
                            </Badge>
                            {opp.type === 'local' && opp.location && (
                              <Badge variant="outline" className="text-xs">
                                📍 {opp.location}
                              </Badge>
                            )}
                            {opp.expectedImpact && (
                              <Badge 
                                variant="outline" 
                                className={cn(
                                  "gap-1",
                                  impactSize === 'large' && "bg-green-100 text-green-800 border-green-200",
                                  impactSize === 'medium' && "bg-blue-100 text-blue-800 border-blue-200",
                                  impactSize === 'small' && "bg-gray-100 text-gray-800 border-gray-200"
                                )}
                              >
                                <TrendingUp className="w-3 h-3" />
                                {opp.expectedImpact}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div>
                          <p className="text-sm font-semibold mb-1">SALESCHEF RECOMMENDS</p>
                          <p className="text-sm text-muted-foreground">
                            {opp.contentRecommendation}
                          </p>
                        </div>

                        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                          <p className="text-sm font-semibold text-blue-900 mb-1">💡 STRATEGIC INSIGHT</p>
                          <p className="text-sm text-blue-800">
                            {opp.strategicInsight}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs text-muted-foreground">
                          {daysUntil === 0 ? 'Today' : daysUntil === 1 ? 'Tomorrow' : `${daysUntil} days away`}
                        </span>
                        <Button size="sm" className={cn(
                          opp.urgency === 'HIGH' && "bg-red-600 hover:bg-red-700",
                          opp.urgency === 'MEDIUM' && "bg-orange-600 hover:bg-orange-700",
                          opp.urgency === 'LOW' && "bg-blue-600 hover:bg-blue-700"
                        )}>
                          {opp.urgency === 'HIGH' ? 'Optimize Now' : 'Schedule Optimization'}
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })
            )}
          </div>
        </Card>
      </div>

      {/* Upcoming Timeline Preview */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold">Upcoming Timeline (Next 30 Days)</h4>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
        <div className="space-y-2">
          {allOpportunities
            .filter(opp => {
              const daysUntil = differenceInDays(parseISO(opp.date), new Date());
              return daysUntil >= 0 && daysUntil <= 30;
            })
            .slice(0, 5)
            .map((opp) => {
              const daysUntil = differenceInDays(parseISO(opp.date), new Date());
              return (
                <div 
                  key={opp.id} 
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors"
                  onClick={() => setSelectedDate(parseISO(opp.date))}
                >
                  <div className={cn(
                    "w-2 h-2 rounded-full flex-shrink-0",
                    opp.urgency === 'HIGH' && "bg-red-500",
                    opp.urgency === 'MEDIUM' && "bg-orange-500",
                    opp.urgency === 'LOW' && "bg-blue-500"
                  )}></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{opp.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {format(parseISO(opp.date), 'MMM d')} • {daysUntil === 0 ? 'Today' : `${daysUntil} days`}
                      {opp.type === 'local' && opp.location && ` • ${opp.location}`}
                    </p>
                  </div>
                  {opp.expectedImpact && (
                    <Badge variant="outline" className="text-xs">
                      {opp.expectedImpact}
                    </Badge>
                  )}
                </div>
              );
            })}
        </div>
      </Card>
    </div>
  );
};

export default OpportunityCalendar;
