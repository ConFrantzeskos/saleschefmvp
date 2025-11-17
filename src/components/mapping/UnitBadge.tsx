import { Badge } from '@/components/ui/badge';

interface UnitBadgeProps {
  system: 'imperial' | 'metric' | 'mixed' | 'none';
  unit?: string;
}

const UnitBadge = ({ system, unit }: UnitBadgeProps) => {
  if (system === 'none') return null;

  const variants = {
    imperial: 'default',
    metric: 'secondary',
    mixed: 'destructive'
  } as const;

  const labels = {
    imperial: unit ? `Imperial (${unit})` : 'Imperial',
    metric: unit ? `Metric (${unit})` : 'Metric',
    mixed: 'Mixed Units'
  };

  return (
    <Badge variant={variants[system]} className="text-xs">
      {labels[system]}
    </Badge>
  );
};

export default UnitBadge;
