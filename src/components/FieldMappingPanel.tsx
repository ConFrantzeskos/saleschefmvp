
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Check, AlertTriangle, X } from 'lucide-react';

interface FieldStatus {
  key: string;
  label: string;
  status: 'good' | 'warning' | 'missing';
}

interface FieldMappingPanelProps {
  requiredFields: FieldStatus[];
  mappings: Record<string, string>;
  detectedFields: string[];
  onMappingChange: (fieldKey: string, value: string) => void;
}

const FieldMappingPanel = ({ requiredFields, mappings, detectedFields, onMappingChange }: FieldMappingPanelProps) => {
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

  return (
    <div className="lg:col-span-2">
      <Card>
        <CardHeader>
          <CardTitle>Field Mapping</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {requiredFields.map((field) => (
            <div key={field.key} className="space-y-2">
              <div className="flex items-center space-x-2">
                <label className="font-medium">{field.label}</label>
                {getStatusIcon(field.status)}
              </div>
              <Select 
                value={mappings[field.key]} 
                onValueChange={(value) => onMappingChange(field.key, value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select source field" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="not-mapped">-- Not mapped --</SelectItem>
                  {detectedFields.map((detectedField) => (
                    <SelectItem key={detectedField} value={detectedField}>
                      {detectedField}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default FieldMappingPanel;
