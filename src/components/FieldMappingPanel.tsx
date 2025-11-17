
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Check, AlertTriangle, X } from 'lucide-react';
import FieldSuggestion from './mapping/FieldSuggestion';
import DataPreview from './mapping/DataPreview';
import UnitBadge from './mapping/UnitBadge';
import { FieldMatch, detectUnits } from '@/utils/fieldInference';

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
  suggestions?: Record<string, FieldMatch | null>;
  sampleData?: Record<string, string[]>;
}

const FieldMappingPanel = ({ 
  requiredFields, 
  mappings, 
  detectedFields, 
  onMappingChange,
  suggestions = {},
  sampleData = {}
}: FieldMappingPanelProps) => {
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
          {requiredFields.map((field) => {
            const suggestion = suggestions[field.key];
            const currentMapping = mappings[field.key];
            const hasMapping = currentMapping && currentMapping !== 'not-mapped';
            
            return (
              <div key={field.key} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <label className="font-medium">{field.label}</label>
                  {getStatusIcon(field.status)}
                  {hasMapping && (() => {
                    const unitInfo = detectUnits(currentMapping);
                    return <UnitBadge system={unitInfo.system} unit={unitInfo.unit} />;
                  })()}
                </div>
                
                <Select 
                  value={mappings[field.key] || 'not-mapped'} 
                  onValueChange={(value) => onMappingChange(field.key, value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select source field" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="not-mapped">-- Not mapped --</SelectItem>
                    {detectedFields.map((detectedField) => {
                      const unitInfo = detectUnits(detectedField);
                      return (
                        <SelectItem key={detectedField} value={detectedField}>
                          <div className="flex items-center gap-2">
                            <span>{detectedField}</span>
                            {unitInfo.system !== 'none' && (
                              <UnitBadge system={unitInfo.system} unit={unitInfo.unit} />
                            )}
                          </div>
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
                
                {/* Show suggestion if field not mapped OR has medium/low confidence (<85%) */}
                {suggestion && (!hasMapping || suggestion.confidence < 0.85) && (
                  <FieldSuggestion suggestion={suggestion} />
                )}
                
                {/* Show data preview for mapped fields */}
                {hasMapping && sampleData[currentMapping] && (
                  <DataPreview 
                    fieldName={currentMapping} 
                    samples={sampleData[currentMapping]} 
                  />
                )}
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};

export default FieldMappingPanel;
