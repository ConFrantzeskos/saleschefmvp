import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';
import UnitBadge from './UnitBadge';

interface UnitConflict {
  field: string;
  units: Array<{ unit: string; system: 'imperial' | 'metric' | 'none'; field: string }>;
}

interface UnitConflictAlertProps {
  conflicts: UnitConflict[];
  onStandardize?: () => void;
}

const UnitConflictAlert = ({ conflicts, onStandardize }: UnitConflictAlertProps) => {
  if (conflicts.length === 0) return null;

  return (
    <Alert className="border-yellow-500/50 bg-yellow-500/10">
      <AlertTriangle className="h-4 w-4 text-yellow-600" />
      <AlertTitle>Mixed Unit Systems Detected</AlertTitle>
      <AlertDescription className="space-y-3">
        <p className="text-sm">
          We found fields using different measurement systems. This may cause inconsistencies.
        </p>
        {conflicts.map((conflict, idx) => (
          <div key={idx} className="space-y-1">
            <p className="text-sm font-medium capitalize">{conflict.field} fields:</p>
            <div className="flex flex-wrap gap-2">
              {conflict.units.map((unit, unitIdx) => (
                <div key={unitIdx} className="flex items-center gap-2 text-xs">
                  <span className="text-muted-foreground">{unit.field}</span>
                  <UnitBadge system={unit.system} unit={unit.unit} />
                </div>
              ))}
            </div>
          </div>
        ))}
        {onStandardize && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onStandardize}
            className="mt-2"
          >
            Standardize Units
          </Button>
        )}
      </AlertDescription>
    </Alert>
  );
};

export default UnitConflictAlert;
