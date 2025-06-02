
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '@/components/ProgressIndicator';
import FieldStatusSidebar from '@/components/FieldStatusSidebar';
import FieldMappingPanel from '@/components/FieldMappingPanel';

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
    { key: 'productName', label: 'Product Name', status: 'good' as const },
    { key: 'description', label: 'Description', status: 'good' as const },
    { key: 'price', label: 'Price', status: 'good' as const },
    { key: 'sku', label: 'SKU', status: 'good' as const },
    { key: 'category', label: 'Category', status: 'warning' as const },
    { key: 'brand', label: 'Brand', status: 'good' as const },
    { key: 'weight', label: 'Weight', status: 'missing' as const },
    { key: 'dimensions', label: 'Dimensions', status: 'missing' as const },
  ];

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
          <h1 className="text-3xl font-display font-semibold mb-4 text-foreground">Map Your Data Fields</h1>
          <p className="text-lg text-muted-foreground font-sans">
            We've auto-detected your data structure. Review and adjust if needed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <FieldStatusSidebar 
            requiredFields={requiredFields}
            onContinue={handleContinue}
          />
          
          <FieldMappingPanel
            requiredFields={requiredFields}
            mappings={mappings}
            detectedFields={detectedFields}
            onMappingChange={handleMappingChange}
          />
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground font-sans">
            This mapping will be saved for future uploads of similar data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchemaMapping;
