import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '@/components/ProgressIndicator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Check, AlertCircle, Info, Eye, ArrowRight, Clock } from 'lucide-react';

const CleaningValidation = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [processingComplete, setProcessingComplete] = useState(false);
  const [allItemsChecked, setAllItemsChecked] = useState(false);
  const [stepProgress, setStepProgress] = useState<Record<number, number>>({});
  const [estimatedTimeRemaining, setEstimatedTimeRemaining] = useState<number>(0);

  const steps = [
    { id: 'upload', label: 'Upload', completed: true, current: false },
    { id: 'mapping', label: 'Map Fields', completed: true, current: false },
    { id: 'clean', label: 'Clean Data', completed: false, current: true },
    { id: 'enrich', label: 'Enrich', completed: false, current: false },
    { id: 'generate', label: 'Generate', completed: false, current: false },
    { id: 'review', label: 'Review', completed: false, current: false },
    { id: 'deploy', label: 'Deploy', completed: false, current: false },
  ];

  const cleaningSteps = [
    {
      title: "Accept Any File Format",
      description: "Data ingestion from CSV, PDF, URLs, ERP, CMS",
      issues: "3 different formats detected and ingested",
      estimatedTime: 2,
      icon: "📁"
    },
    {
      title: "Extract Product Information", 
      description: "Data parsing from various sources",
      issues: "3 product records parsed successfully",
      estimatedTime: 3,
      icon: "🔍"
    },
    {
      title: "Remove Duplicates",
      description: "Deduplication and merging",
      issues: "12 duplicate SKUs merged, 3 near-duplicates flagged",
      estimatedTime: 4,
      icon: "🔗"
    },
    {
      title: "Fix Formatting Issues",
      description: "Data correction and consistency checks",
      issues: "15 formatting errors corrected, 8 price inconsistencies fixed",
      estimatedTime: 3,
      icon: "✨"
    },
    {
      title: "Validate Data Types",
      description: "Ensure numbers, dates, and currencies are properly formatted",
      issues: "18 price values converted to standard format, 5 date formats standardized",
      estimatedTime: 2,
      icon: "🔢"
    },
    {
      title: "Standardize Units & Measurements",
      description: "Convert dimensions, weights, and volumes to consistent units",
      issues: "Mixed imperial/metric detected: 8 weights converted to kg, 12 dimensions to cm",
      estimatedTime: 3,
      icon: "📏"
    },
    {
      title: "Perfect Spelling & Text",
      description: "Automated spelling and typo correction",
      issues: "23 typos corrected, 7 product names standardized",
      estimatedTime: 2,
      icon: "✍️"
    },
    {
      title: "Normalize Brand Names",
      description: "Standardize manufacturer and brand naming",
      issues: "4 brand variations unified (e.g., 'Sony Corp' → 'Sony'), 2 manufacturer names corrected",
      estimatedTime: 2,
      icon: "🏢"
    },
    {
      title: "Validate & Extract Images",
      description: "Check image URLs, file formats, and dimensions",
      issues: "15 product images verified, 3 broken URLs flagged, 2 low-resolution images detected",
      estimatedTime: 5,
      icon: "🖼️"
    },
    {
      title: "Extract Product Attributes",
      description: "Identify color, size, material from text",
      issues: "12 color variants extracted, 8 size specifications parsed, 5 material tags added",
      estimatedTime: 4,
      icon: "🎨"
    },
    {
      title: "Link Related Products",
      description: "Find variants, bundles, and accessories",
      issues: "6 product variants linked, 4 accessory bundles detected, 2 cross-sell opportunities identified",
      estimatedTime: 3,
      icon: "🔄"
    },
    {
      title: "Organize Into Categories",
      description: "Multi-level categorization",
      issues: "3 products assigned to primary categories with relevant sub-categories",
      estimatedTime: 3,
      icon: "📂"
    },
    {
      title: "Check Data Quality",
      description: "Data validation and completeness standards",
      issues: "Quality score: 92/100 - 5 incomplete entries flagged",
      estimatedTime: 2,
      icon: "✅"
    },
    {
      title: "Validate Against Standards",
      description: "Verify compliance with category requirements",
      issues: "All products meet category standards, 2 missing optional fields noted",
      estimatedTime: 2,
      icon: "🛡️"
    },
    {
      title: "Prepare for Enrichment",
      description: "Setting up data fields and structure for enrichment pipeline",
      issues: "3 products formatted with 24 fields ready for AI enrichment",
      estimatedTime: 1,
      icon: "🚀"
    }
  ];

  const correctedItems = [
    // File Format Detection
    { id: 1, type: 'File Format Detection', step: 'Accept Any File Format', item: 'Product_Catalog_2024.csv', change: 'CSV format detected with UTF-8 encoding, 3 products extracted', status: 'ingested' },
    { id: 2, type: 'File Format Detection', step: 'Accept Any File Format', item: 'Supplier_Data.xlsx', change: 'Excel format detected, parsed 2 sheets, extracted 8 additional products', status: 'ingested' },
    
    // Product Information Extraction
    { id: 3, type: 'Data Parsing', step: 'Extract Product Information', item: 'Sony WH-1000XM5 Headphones', change: 'Extracted: SKU, Name, Price ($399.99), Category, Brand, Specifications (30hr battery, ANC)', status: 'parsed' },
    { id: 4, type: 'Data Parsing', step: 'Extract Product Information', item: 'Samsung 65" QLED 4K TV', change: 'Extracted: Model Number (QN65QN90C), Price, Dimensions, Weight, Features array', status: 'parsed' },
    { id: 5, type: 'Data Parsing', step: 'Extract Product Information', item: 'Apple MacBook Pro 16" M3', change: 'Extracted: Complete specs including chip type, RAM (36GB), Storage (1TB SSD)', status: 'parsed' },
    
    // Duplicate Removal
    { id: 6, type: 'Duplicate Merge', step: 'Remove Duplicates', item: 'iPhone 15 Pro Max 256GB', change: 'SKU-APL-15PM-256-BLK + SKU-APL15PROMAX256 + iPhone15ProMax_256 → SKU-APL-15PM-256', status: 'merged' },
    { id: 7, type: 'Duplicate Merge', step: 'Remove Duplicates', item: 'Sony WH1000XM5', change: 'Found 2 identical entries with different SKUs, merged inventory counts', status: 'merged' },
    { id: 8, type: 'Near-Duplicate Flag', step: 'Remove Duplicates', item: 'Samsung Galaxy Buds2 Pro vs Galaxy Buds 2 Pro', change: 'Flagged as potential duplicate (98% similarity) for manual review', status: 'flagged' },
    
    // Formatting Fixes
    { id: 9, type: 'Format Fix', step: 'Fix Formatting Issues', item: 'Sony 65" 4K TV Price', change: '$1,899.99 → 1899.99 (removed currency symbol and commas)', status: 'corrected' },
    { id: 10, type: 'Format Fix', step: 'Fix Formatting Issues', item: 'MacBook Pro Storage', change: '512 GB → 512GB (standardized spacing)', status: 'corrected' },
    { id: 11, type: 'Format Fix', step: 'Fix Formatting Issues', item: 'Product Titles', change: 'Removed trailing spaces, standardized quotation marks in screen sizes', status: 'corrected' },
    
    // Data Type Validation
    { id: 12, type: 'Data Type Fix', step: 'Validate Data Types', item: 'Price Fields', change: 'Converted "399 dollars" → 399.00, "$1,899.99" → 1899.99', status: 'standardized' },
    { id: 13, type: 'Data Type Fix', step: 'Validate Data Types', item: 'Date Fields', change: 'Release dates: "Q4 2023" → 2023-10-01, "Nov 2023" → 2023-11-01', status: 'standardized' },
    { id: 14, type: 'Data Type Fix', step: 'Validate Data Types', item: 'Boolean Values', change: 'In Stock: "yes"/"Y"/"available" → true, "no"/"N" → false', status: 'standardized' },
    
    // Unit Standardization
    { id: 15, type: 'Unit Conversion', step: 'Standardize Units & Measurements', item: 'TV Screen Size', change: '65 inches → 165.1 cm (added metric)', status: 'converted' },
    { id: 16, type: 'Unit Conversion', step: 'Standardize Units & Measurements', item: 'Laptop Weight', change: '4.7 lbs → 2.13 kg', status: 'converted' },
    { id: 17, type: 'Unit Conversion', step: 'Standardize Units & Measurements', item: 'Phone Dimensions', change: '6.1" × 2.8" × 0.31" → 15.5cm × 7.1cm × 0.79cm', status: 'converted' },
    { id: 18, type: 'Unit Detection', step: 'Standardize Units & Measurements', item: 'Battery Capacity', change: 'Detected mAh unit, standardized to 20000mAh format', status: 'standardized' },
    
    // Spelling & Text Correction
    { id: 19, type: 'Spelling Fix', step: 'Perfect Spelling & Text', item: 'Sony WH-1000XM5', change: 'Fixed: "Wireles Noice Canceling" → "Wireless Noise Canceling"', status: 'corrected' },
    { id: 20, type: 'Spelling Fix', step: 'Perfect Spelling & Text', item: 'Product Descriptions', change: 'Fixed 12 typos: "Bluetooth" (was "Bluetoth"), "premium" (was "preminum")', status: 'corrected' },
    { id: 21, type: 'Text Standardization', step: 'Perfect Spelling & Text', item: 'Model Names', change: 'Standardized: "iphone" → "iPhone", "macbook" → "MacBook"', status: 'corrected' },
    
    // Brand Normalization
    { id: 22, type: 'Brand Unification', step: 'Normalize Brand Names', item: 'Sony Corporation Entries', change: '"Sony Corp." + "SONY" + "Sony Inc" → "Sony"', status: 'unified' },
    { id: 23, type: 'Brand Correction', step: 'Normalize Brand Names', item: 'Samsung Electronics', change: '"Samsung Electronics Co Ltd" → "Samsung"', status: 'corrected' },
    { id: 24, type: 'Manufacturer Fix', step: 'Normalize Brand Names', item: 'Apple Products', change: 'Standardized all Apple Inc. variations to "Apple"', status: 'corrected' },
    
    // Image Validation
    { id: 25, type: 'Image URL Check', step: 'Validate & Extract Images', item: 'Sony TV Product Image', change: 'URL validated, image format: JPEG, dimensions: 2000×2000px', status: 'verified' },
    { id: 26, type: 'Broken Link', step: 'Validate & Extract Images', item: 'MacBook Pro Image', change: 'URL returns 404, flagged for replacement', status: 'flagged' },
    { id: 27, type: 'Low Resolution', step: 'Validate & Extract Images', item: 'AirPods Product Photo', change: 'Image found but only 400×400px, recommended minimum: 1000×1000px', status: 'flagged' },
    { id: 28, type: 'Image Format', step: 'Validate & Extract Images', item: 'Samsung TV Gallery', change: 'Found 5 images: 3 JPEG, 2 PNG, all validated and extracted', status: 'verified' },
    
    // Attribute Extraction
    { id: 29, type: 'Color Detection', step: 'Extract Product Attributes', item: 'iPhone 15 Pro Max', change: 'Extracted colors from description: Natural Titanium, Blue Titanium, Black Titanium', status: 'extracted' },
    { id: 30, type: 'Size Parsing', step: 'Extract Product Attributes', item: 'MacBook Pro', change: 'Extracted size variants: 14-inch, 16-inch from product name', status: 'parsed' },
    { id: 31, type: 'Material Tags', step: 'Extract Product Attributes', item: 'Apple Watch Ultra 2', change: 'Materials detected: Titanium case, Sapphire crystal, Aluminum', status: 'tagged' },
    { id: 32, type: 'Specification Parse', step: 'Extract Product Attributes', item: 'Sony Headphones', change: 'Extracted: Battery life (30hr), Driver size (30mm), Weight (250g)', status: 'parsed' },
    
    // Product Linking
    { id: 33, type: 'Variant Linking', step: 'Link Related Products', item: 'iPhone 15 Pro Family', change: 'Linked 4 storage variants: 128GB, 256GB, 512GB, 1TB', status: 'linked' },
    { id: 34, type: 'Bundle Detection', step: 'Link Related Products', item: 'MacBook Pro + AppleCare+', change: 'Detected bundle opportunity, linked protection plan', status: 'linked' },
    { id: 35, type: 'Accessory Match', step: 'Link Related Products', item: 'Sony WH-1000XM5', change: 'Found compatible accessories: Replacement earpads, carrying case', status: 'linked' },
    { id: 36, type: 'Cross-sell', step: 'Link Related Products', item: 'Samsung TV → Soundbar', change: 'Identified cross-sell: Samsung Q-Series Soundbar', status: 'identified' },
    
    // Categorization
    { id: 37, type: 'Multi-Category', step: 'Organize Into Categories', item: 'Sony WH-1000XM5', change: 'Electronics → Audio → Headphones + Travel → Travel Accessories + Business → Office Equipment', status: 'categorized' },
    { id: 38, type: 'Category Hierarchy', step: 'Organize Into Categories', item: 'MacBook Pro 16"', change: 'Primary: Computers → Laptops → Professional | Secondary: Business → Professional Workstations', status: 'categorized' },
    { id: 39, type: 'Sub-category', step: 'Organize Into Categories', item: 'iPhone 15 Pro Max', change: 'Mobile Phones → Smartphones → Premium → Apple iPhone → Pro Series', status: 'categorized' },
    
    // Quality Check
    { id: 40, type: 'Completeness Check', step: 'Check Data Quality', item: 'Sony WH-1000XM5', change: 'Score: 95/100 - Has all required fields, missing optional warranty info', status: 'validated' },
    { id: 41, type: 'Completeness Check', step: 'Check Data Quality', item: 'Samsung 65" TV', change: 'Score: 88/100 - Missing detailed specifications for HDR formats', status: 'flagged' },
    { id: 42, type: 'Required Fields', step: 'Check Data Quality', item: 'MacBook Pro', change: 'All 18 required fields present: Name, SKU, Price, Brand, Category, Images, Specs', status: 'passed' },
    
    // Standards Validation
    { id: 43, type: 'Category Standards', step: 'Validate Against Standards', item: 'Electronics Category', change: 'Verified all products have required fields: Power consumption, Warranty, Certifications', status: 'compliant' },
    { id: 44, type: 'Industry Standards', step: 'Validate Against Standards', item: 'TV Products', change: 'Checked against TV category requirements: Screen size, Resolution, HDR support', status: 'compliant' },
    { id: 45, type: 'Optional Fields', step: 'Validate Against Standards', item: 'Laptop Products', change: 'Missing optional: Environmental certifications (EPEAT), Energy Star rating', status: 'noted' },
    
    // Enrichment Preparation
    { id: 46, type: 'Field Mapping', step: 'Prepare for Enrichment', item: 'Sony WH-1000XM5', change: 'Mapped 24 fields to enrichment schema, ready for AI processing', status: 'ready' },
    { id: 47, type: 'Schema Validation', step: 'Prepare for Enrichment', item: 'All Products', change: 'Validated data structure, all 3 products compatible with enrichment pipeline', status: 'validated' },
    { id: 48, type: 'Priority Queue', step: 'Prepare for Enrichment', item: 'Processing Order', change: 'Products queued by completeness score: MacBook Pro → Sony Headphones → Samsung TV', status: 'queued' }
  ];

  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  useEffect(() => {
    if (currentStep < cleaningSteps.length) {
      const stepTime = cleaningSteps[currentStep].estimatedTime * 1000;
      const progressInterval = 50;
      const progressIncrement = 100 / (stepTime / progressInterval);
      
      // Update progress for current step
      const progressTimer = setInterval(() => {
        setStepProgress(prev => {
          const currentProgress = prev[currentStep] || 0;
          if (currentProgress >= 100) {
            clearInterval(progressTimer);
            return prev;
          }
          return { ...prev, [currentStep]: Math.min(currentProgress + progressIncrement, 100) };
        });
      }, progressInterval);

      // Calculate remaining time
      const timeTimer = setInterval(() => {
        const remainingSteps = cleaningSteps.slice(currentStep);
        const totalRemaining = remainingSteps.reduce((sum, step, idx) => {
          if (idx === 0) {
            const currentProgress = stepProgress[currentStep] || 0;
            return sum + (step.estimatedTime * (100 - currentProgress) / 100);
          }
          return sum + step.estimatedTime;
        }, 0);
        setEstimatedTimeRemaining(Math.ceil(totalRemaining));
      }, 500);

      // Complete the step
      const stepTimer = setTimeout(() => {
        setCompletedSteps(prev => [...prev, currentStep]);
        setStepProgress(prev => ({ ...prev, [currentStep]: 100 }));
        setCurrentStep(prev => prev + 1);
      }, stepTime);

      return () => {
        clearTimeout(stepTimer);
        clearInterval(progressTimer);
        clearInterval(timeTimer);
      };
    } else {
      setProcessingComplete(true);
      setEstimatedTimeRemaining(0);
    }
  }, [currentStep, stepProgress]);

  const handleItemCheck = (itemId: number, checked: boolean) => {
    if (checked) {
      setCheckedItems(prev => [...prev, itemId]);
    } else {
      setCheckedItems(prev => prev.filter(id => id !== itemId));
      setAllItemsChecked(false);
    }
  };

  const handleBulkCheck = () => {
    if (allItemsChecked) {
      setCheckedItems([]);
      setAllItemsChecked(false);
    } else {
      setCheckedItems(correctedItems.map(item => item.id));
      setAllItemsChecked(true);
    }
  };

  const handleProceedToEnrichment = () => {
    navigate('/enrichment');
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold mb-4">Data Cleaning & Validation</h1>
          <p className="text-lg text-muted-foreground">
            Ingesting, parsing, deduplicating, correcting, categorizing and validating your product data
          </p>
        </div>

        <div className="space-y-6">
          <ProgressIndicator steps={steps} />
          
          {!processingComplete && (
            <Card className="border-primary/50 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Overall Progress</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Step {currentStep + 1} of {cleaningSteps.length} • Estimated time remaining: {estimatedTimeRemaining}s
                    </p>
                  </div>
                </div>
                <Progress 
                  value={(currentStep / cleaningSteps.length) * 100} 
                  className="h-2"
                />
              </CardContent>
            </Card>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cleaningSteps.map((step, index) => {
              const isCompleted = completedSteps.includes(index);
              const isCurrent = index === currentStep;
              const isPending = index > currentStep;
              const progress = stepProgress[index] || 0;

              return (
                <Card 
                  key={index}
                  className={`transition-all duration-300 ${
                    isCurrent ? 'border-primary shadow-lg animate-scale-in ring-2 ring-primary/20' : 
                    isCompleted ? 'border-green-500/50 bg-green-500/5' : 
                    'border-border opacity-60'
                  }`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl mt-0.5">{step.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <CardTitle className="text-sm font-semibold truncate">
                            {step.title}
                          </CardTitle>
                          <div className={`ml-2 rounded-full p-1 flex-shrink-0 ${
                            isCompleted ? 'bg-green-500 text-white' :
                            isCurrent ? 'bg-primary text-primary-foreground animate-pulse' :
                            'bg-muted text-muted-foreground'
                          }`}>
                            {isCompleted ? (
                              <Check className="h-3 w-3" />
                            ) : isCurrent ? (
                              <AlertCircle className="h-3 w-3" />
                            ) : (
                              <Info className="h-3 w-3" />
                            )}
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-2">
                    {isCurrent && !isCompleted && (
                      <div className="space-y-1">
                        <Progress 
                          value={progress} 
                          className="h-1"
                        />
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            {Math.round(progress)}%
                          </span>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            ~{Math.ceil(step.estimatedTime * (100 - progress) / 100)}s
                          </span>
                        </div>
                      </div>
                    )}
                    {isCompleted && (
                      <p className="text-xs text-foreground">
                        {step.issues}
                      </p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {processingComplete && (
          <div className="mt-8 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Review Cleaning Results</span>
                  </CardTitle>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">
                      {checkedItems.length}/{correctedItems.length} reviewed
                    </span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={handleBulkCheck}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox 
                        checked={allItemsChecked}
                        className="pointer-events-none"
                      />
                      <span>{allItemsChecked ? 'Uncheck All' : 'Check All'}</span>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Group items by step */}
                {cleaningSteps.map((step, stepIndex) => {
                  const stepItems = correctedItems.filter(item => item.step === step.title);
                  if (stepItems.length === 0) return null;
                  
                  return (
                    <div key={stepIndex} className="mb-6 last:mb-0">
                      <div className="flex items-center gap-2 mb-3 pb-2 border-b">
                        <span className="text-xl">{step.icon}</span>
                        <h3 className="font-semibold text-sm">{step.title}</h3>
                        <span className="text-xs text-muted-foreground">({stepItems.length} changes)</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {stepItems.map((item) => (
                          <div 
                            key={item.id} 
                            className={`flex items-start space-x-3 p-3 border rounded-lg transition-colors ${
                              checkedItems.includes(item.id) ? 'bg-green-50 border-green-300 dark:bg-green-950 dark:border-green-800' : ''
                            }`}
                          >
                            <Checkbox 
                              checked={checkedItems.includes(item.id)}
                              onCheckedChange={(checked) => handleItemCheck(item.id, checked as boolean)}
                              className="mt-1"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2 mb-1">
                                <span className="text-xs font-medium text-primary">{item.type}</span>
                                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                  <Eye className="w-3 h-3" />
                                </Button>
                              </div>
                              <p className="text-sm font-medium mb-1 truncate">{item.item}</p>
                              <p className="text-xs text-muted-foreground line-clamp-2">{item.change}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            <div className="flex items-center justify-between p-6 bg-muted/50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-600" />
                <span className="font-medium text-green-600">
                  Cleaning complete! Ready for enrichment phase
                </span>
              </div>
              <Button 
                onClick={handleProceedToEnrichment}
                className="flex items-center space-x-2"
                disabled={checkedItems.length === 0}
              >
                <span>Proceed to Enrichment</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CleaningValidation;
