
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '@/components/ProgressIndicator';
import FieldStatusSidebar from '@/components/FieldStatusSidebar';
import FieldMappingPanel from '@/components/FieldMappingPanel';
import { generateFieldSuggestions, generateSampleData, FieldMatch } from '@/utils/fieldInference';

const SchemaMapping = () => {
  const navigate = useNavigate();
  const [mappings, setMappings] = useState<Record<string, string>>({});
  const [suggestions, setSuggestions] = useState<Record<string, FieldMatch | null>>({});
  const [sampleData] = useState(generateSampleData());

  const steps = [
    { id: 'upload', label: 'Upload', completed: true, current: false },
    { id: 'mapping', label: 'Map Fields', completed: false, current: true },
    { id: 'clean', label: 'Clean Data', completed: false, current: false },
    { id: 'enrich', label: 'Enrich', completed: false, current: false },
    { id: 'enhance', label: 'Enhance', completed: false, current: false },
    { id: 'generate', label: 'Generate', completed: false, current: false },
    { id: 'review', label: 'Review', completed: false, current: false },
    { id: 'deploy', label: 'Deploy', completed: false, current: false },
  ];

  const detectedFields = [
    'Product Title', 'Description', 'Price', 'SKU', 'Brand Name', 
    'Category Type', 
    'Weight (lbs)',      // Imperial
    'Weight_KG',         // Metric
    'Product Weight',    // Ambiguous
    'Dimensions',        // No unit
    'Size (inches)',     // Imperial
    'Height_CM',         // Metric
    'Package Dimensions (L x W x H)',  // Complex
    'Color', 'Material',
    // Identity & Compliance
    'UPC', 'GTIN', 'EAN Code', 'Barcode',
    'Manufacturer Name', 'Mfg', 'Supplier',
    'Model #', 'Model Number', 'Model_ID',
    'Warranty Info', 'Warranty_Period', 'Warranty (months)',
    'Origin Country', 'Made In', 'Country_of_Origin',
    'Certifications', 'Compliance', 'Safety_Certs', 'Quality_Certificates',
    // Media & SEO
    'Image_URL', 'Product Image', 'Main_Image', 'Product_Photo',
    'Product_Tags', 'Keywords', 'Tags',
    'SEO_Keywords', 'Search Terms', 'Search_Keywords',
    'Meta_Title', 'SEO Title', 'Page Title',
    'Meta_Description', 'SEO Description', 'Page Description',
    // Rich Product Content
    'Features', 'Product_Features', 'Key Features', 'Feature_List',
    'Benefits', 'Value Props', 'Key_Benefits', 'Product_Benefits',
    'Target Market', 'Audience', 'Customer_Profile', 'Intended_Audience',
    'Tech_Specs', 'Specifications', 'Technical Details', 'Spec_Sheet',
    'Bullet Points', 'Highlights', 'Product_Bullets', 'Key_Points',
    'Use_Cases', 'Applications', 'Usage Scenarios', 'How_to_Use',
    'Package_Contents', 'Whats Included', 'Box Contents', 'Contents',
    'Care_Instructions', 'Maintenance', 'How to Care', 'Care_Guide',
    'Competitive_Edge', 'Differentiators', 'Why Choose', 'Advantages',
    'Long_Description', 'Detailed Description', 'Extended_Desc', 'Full_Description'
  ];

  const requiredFields = [
    { key: 'productName', label: 'Product Name' },
    { key: 'description', label: 'Description' },
    { key: 'price', label: 'Price' },
    { key: 'sku', label: 'SKU' },
    { key: 'category', label: 'Category' },
    { key: 'brand', label: 'Brand' },
    { key: 'weight', label: 'Weight' },
    { key: 'dimensions', label: 'Dimensions' },
    { key: 'upc', label: 'UPC/EAN/GTIN' },
    { key: 'manufacturer', label: 'Manufacturer' },
    { key: 'modelNumber', label: 'Model Number' },
    { key: 'color', label: 'Color' },
    { key: 'size', label: 'Size' },
    { key: 'material', label: 'Material' },
    { key: 'warranty', label: 'Warranty Period' },
    { key: 'imageUrl', label: 'Product Image URL' },
    { key: 'tags', label: 'Tags' },
    { key: 'countryOfOrigin', label: 'Country of Origin' },
    { key: 'features', label: 'Product Features' },
    { key: 'keyBenefits', label: 'Key Benefits' },
    { key: 'targetAudience', label: 'Target Audience' },
    { key: 'technicalSpecs', label: 'Technical Specifications' },
    { key: 'productBullets', label: 'Product Bullets/Highlights' },
    { key: 'useCases', label: 'Use Cases/Applications' },
    { key: 'packageContents', label: 'Package Contents' },
    { key: 'careInstructions', label: 'Care Instructions' },
    { key: 'certifications', label: 'Certifications' },
    { key: 'competitiveAdvantage', label: 'Competitive Advantages' },
    { key: 'seoKeywords', label: 'SEO Keywords' },
    { key: 'metaTitle', label: 'Meta Title' },
    { key: 'metaDescription', label: 'Meta Description' },
    { key: 'longDescription', label: 'Long Description' },
  ];

  // Auto-generate AI-powered suggestions with clear confidence thresholds
  useEffect(() => {
    const newMappings: Record<string, string> = {};
    const newSuggestions: Record<string, FieldMatch | null> = {};

    requiredFields.forEach(field => {
      const suggestion = generateFieldSuggestions(field.label, detectedFields, sampleData);
      newSuggestions[field.key] = suggestion;
      
      // Auto-map ONLY high confidence matches (≥85%)
      if (suggestion && suggestion.confidence >= 0.85) {
        newMappings[field.key] = suggestion.sourceField;
      } else {
        newMappings[field.key] = '';
      }
    });

    setMappings(newMappings);
    setSuggestions(newSuggestions);
  }, []);

  const handleMappingChange = (fieldKey: string, value: string) => {
    setMappings(prev => ({ ...prev, [fieldKey]: value }));
  };

  const handleContinue = () => {
    navigate('/cleaning');
  };

  const getFieldStatus = (fieldKey: string) => {
    const mapping = mappings[fieldKey];
    const suggestion = suggestions[fieldKey];
    
    // Good: Field is mapped
    if (mapping && mapping !== 'not-mapped' && mapping !== '') return 'good';
    // Warning: Medium-High confidence suggestion available (≥70%)
    if (suggestion && suggestion.confidence >= 0.70) return 'warning';
    // Missing: No mapping and low/no confidence suggestion
    return 'missing';
  };

  const fieldsWithStatus = requiredFields.map(field => ({
    ...field,
    status: getFieldStatus(field.key) as 'good' | 'warning' | 'missing'
  }));

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
            requiredFields={fieldsWithStatus}
            onContinue={handleContinue}
          />
          
          <div className="lg:col-span-2 space-y-6">
            <FieldMappingPanel
              requiredFields={fieldsWithStatus}
              mappings={mappings}
              detectedFields={detectedFields}
              onMappingChange={handleMappingChange}
              suggestions={suggestions}
              sampleData={sampleData}
            />
          </div>
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
