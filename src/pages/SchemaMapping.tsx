
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ProgressIndicator from '@/components/ProgressIndicator';
import { Check, AlertTriangle, X, Save } from 'lucide-react';
import { cn } from '@/lib/utils';

const SchemaMapping = () => {
  const navigate = useNavigate();
  const [mappings, setMappings] = useState({
    productName: 'Product Title',
    description: 'Description',
    price: 'Price',
    sku: 'SKU',
    category: '',
    brand: 'Brand Name',
    weight: '',
    dimensions: ''
  });

  const steps = [
    { id: 'upload', label: 'Upload', completed: true, current: false },
    { id: 'mapping', label: 'Map Fields', completed: false, current: true },
    { id: 'clean', label: 'Clean Data', completed: false, current: false },
    { id: 'generate', label: 'Generate', completed: false, current: false },
    { id: 'review', label: 'Review', completed: false, current: false },
    { id: 'deploy', label: 'Deploy', completed: false, current: false },
  ];

  const detectedFields = [
    'Product Title', 'Description', 'Price', 'SKU', 'Brand Name', 
    'Category Type', 'Weight (lbs)', 'Dimensions', 'Color', 'Material'
  ];

  const requiredFields = [
    { key: 'productName', label: 'Product Name', status: 'good' },
    { key: 'description', label: 'Description', status: 'good' },
    { key: 'price', label: 'Price', status: 'good' },
    { key: 'sku', label: 'SKU', status: 'good' },
    { key: 'category', label: 'Category', status: 'warning' },
    { key: 'brand', label: 'Brand', status: 'good' },
    { key: 'weight', label: 'Weight', status: 'missing' },
    { key: 'dimensions', label: 'Dimensions', status: 'missing' },
  ];

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

  const handleMappingChange = (fieldKey: string, value: string) => {
    setMappings(prev => ({ ...prev, [fieldKey]: value }));
  };

  const handleContinue = () => {
    navigate('/cleaning');
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <ProgressIndicator steps={steps} />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold mb-4">Map Your Data Fields</h1>
          <p className="text-lg text-muted-foreground">
            We've auto-detected your data structure. Review and adjust if needed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar - Fields Status */}
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

            <Button className="w-full" onClick={handleContinue}>
              <Save className="w-4 h-4 mr-2" />
              Save & Continue
            </Button>
          </div>

          {/* Main Panel - Field Mapping */}
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
                      value={mappings[field.key as keyof typeof mappings]} 
                      onValueChange={(value) => handleMappingChange(field.key, value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select source field" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">-- Not mapped --</SelectItem>
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
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            This mapping will be saved for future uploads of similar data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchemaMapping;
