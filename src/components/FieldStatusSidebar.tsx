
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, AlertTriangle, X, Save } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FieldStatus {
  key: string;
  label: string;
  status: 'good' | 'warning' | 'missing';
}

interface FieldStatusSidebarProps {
  requiredFields: FieldStatus[];
  onContinue: () => void;
}

const FieldStatusSidebar = ({ requiredFields, onContinue }: FieldStatusSidebarProps) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <Check className="w-4 h-4 text-green-600" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      case 'missing':
        return <X className="w-4 h-4 text-red-600" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'border-l-green-500';
      case 'warning':
        return 'border-l-yellow-500';
      case 'missing':
        return 'border-l-red-500';
      default:
        return 'border-l-gray-300';
    }
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Field Status</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {requiredFields.map((field) => (
            <div 
              key={field.key}
              className={cn(
                "flex items-center justify-between p-3 border-l-4 bg-muted/30 rounded-r",
                getStatusColor(field.status)
              )}
            >
              <span className="font-medium">{field.label}</span>
              {getStatusIcon(field.status)}
            </div>
          ))}
        </CardContent>
      </Card>

      <Button className="w-full" onClick={onContinue}>
        <Save className="w-4 h-4 mr-2" />
        Save & Continue
      </Button>
    </div>
  );
};

export default FieldStatusSidebar;
