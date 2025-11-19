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
      estimatedTime: 2
    },
    {
      title: "Extract Product Information", 
      description: "Data parsing from various sources",
      issues: "3 product records parsed successfully",
      estimatedTime: 3
    },
    {
      title: "Remove Duplicates",
      description: "Deduplication and merging",
      issues: "12 duplicate SKUs merged, 3 near-duplicates flagged",
      estimatedTime: 4
    },
    {
      title: "Fix Formatting Issues",
      description: "Data correction and consistency checks",
      issues: "15 formatting errors corrected, 8 price inconsistencies fixed",
      estimatedTime: 3
    },
    {
      title: "Validate Data Types",
      description: "Ensure numbers, dates, and currencies are properly formatted",
      issues: "18 price values converted to standard format, 5 date formats standardized",
      estimatedTime: 2
    },
    {
      title: "Standardize Units & Measurements",
      description: "Convert dimensions, weights, and volumes to consistent units",
      issues: "Mixed imperial/metric detected: 8 weights converted to kg, 12 dimensions to cm",
      estimatedTime: 3
    },
    {
      title: "Perfect Spelling & Text",
      description: "Automated spelling and typo correction",
      issues: "23 typos corrected, 7 product names standardized",
      estimatedTime: 2
    },
    {
      title: "Normalize Brand Names",
      description: "Standardize manufacturer and brand naming",
      issues: "4 brand variations unified (e.g., 'Sony Corp' → 'Sony'), 2 manufacturer names corrected",
      estimatedTime: 2
    },
    {
      title: "Validate & Extract Images",
      description: "Check image URLs, file formats, and dimensions",
      issues: "15 product images verified, 3 broken URLs flagged, 2 low-resolution images detected",
      estimatedTime: 5
    },
    {
      title: "Extract Product Attributes",
      description: "Identify color, size, material from text",
      issues: "12 color variants extracted, 8 size specifications parsed, 5 material tags added",
      estimatedTime: 4
    },
    {
      title: "Link Related Products",
      description: "Find variants, bundles, and accessories",
      issues: "6 product variants linked, 4 accessory bundles detected, 2 cross-sell opportunities identified",
      estimatedTime: 3
    },
    {
      title: "Organize Into Categories",
      description: "Multi-level categorization",
      issues: "3 products assigned to primary categories with relevant sub-categories",
      estimatedTime: 3
    },
    {
      title: "Check Data Quality",
      description: "Data validation and completeness standards",
      issues: "Quality score: 92/100 - 5 incomplete entries flagged",
      estimatedTime: 2
    },
    {
      title: "Validate Against Standards",
      description: "Verify compliance with category requirements",
      issues: "All products meet category standards, 2 missing optional fields noted",
      estimatedTime: 2
    },
    {
      title: "Prepare for Enhancement",
      description: "Final processing and preparation",
      issues: "3 products ready for enrichment",
      estimatedTime: 1
    }
  ];

  const correctedItems = [
    { id: 1, type: 'Multi-Category Assignment', item: 'Sony 65" 4K OLED Smart TV', change: 'Electronics → Televisions → OLED TVs + Home Entertainment → Smart TVs + Gaming → Gaming Displays', status: 'corrected' },
    { id: 2, type: 'Category Hierarchy', item: 'Apple AirPods Pro (2nd Gen)', change: 'Electronics → Audio → Wireless Earbuds + Mobile Accessories → iPhone Accessories + Health & Fitness → Workout Audio', status: 'corrected' },
    { id: 3, type: 'Extended Categorization', item: 'Samsung Galaxy Tab S9 Ultra', change: 'Primary: Electronics → Tablets → Android Tablets | Secondary: Computers → Mobile Computing + Office → Business Tablets', status: 'corrected' },
    { id: 4, type: 'Multi-Category Assignment', item: 'Logitech MX Master 3S Mouse', change: 'Computers → Accessories → Mice + Office → Ergonomic Equipment + Gaming → PC Gaming Peripherals', status: 'corrected' },
    { id: 5, type: 'Category Hierarchy', item: 'Bose QuietComfort Ultra Headphones', change: 'Electronics → Audio → Over-Ear Headphones + Travel → Travel Accessories + Lifestyle → Premium Audio', status: 'corrected' },
    { id: 6, type: 'Extended Categorization', item: 'DJI Mini 3 Pro Drone', change: 'Primary: Electronics → Drones & Cameras → Consumer Drones | Secondary: Photography → Aerial Photography + Hobbies → RC Aircraft', status: 'corrected' },
    { id: 7, type: 'Multi-Category Assignment', item: 'Anker PowerCore 20000mAh', change: 'Mobile Accessories → Power Banks + Travel → Travel Tech + Outdoor → Camping Electronics', status: 'corrected' },
    { id: 8, type: 'Duplicate Merge', item: 'iPhone 15 Pro Max 256GB (Duplicate SKUs)', change: 'SKU-APL-15PM-256-BLK + SKU-APL15PROMAX256 → SKU-APL-15PM-256', status: 'merged' },
    { id: 9, type: 'Category Hierarchy', item: 'Sony WH-1000XM5 Noise Cancelling', change: 'Electronics → Audio → Headphones → Noise Cancelling + Business → Office Equipment + Travel → Travel Comfort', status: 'corrected' },
    { id: 10, type: 'Format Fix', item: 'ASUS ROG Strix RTX 4090', change: 'Product title standardized, specifications formatted', status: 'corrected' },
    { id: 11, type: 'Extended Categorization', item: 'GoPro HERO12 Black', change: 'Primary: Electronics → Cameras → Action Cameras | Secondary: Sports → Action Sports + Outdoor → Outdoor Recording + Travel → Travel Photography', status: 'corrected' },
    { id: 12, type: 'Multi-Category Assignment', item: 'Kindle Paperwhite Signature', change: 'Electronics → E-Readers + Books → Digital Reading + Travel → Travel Entertainment', status: 'corrected' },
    { id: 13, type: 'Category Hierarchy', item: 'PlayStation 5 Digital Edition', change: 'Electronics → Gaming → Consoles → PlayStation + Entertainment → Home Entertainment + Gifts → Tech Gifts', status: 'corrected' },
    { id: 14, type: 'Duplicate Merge', item: 'MacBook Pro 16" M3 (Duplicate entries)', change: 'SKU-MBP-16-M3-512 + SKU-MBPM3-16 → SKU-MBP-16-M3-512', status: 'merged' },
    { id: 15, type: 'Extended Categorization', item: 'Ring Video Doorbell Pro 2', change: 'Primary: Smart Home → Security → Video Doorbells | Secondary: Electronics → Home Security + Home Improvement → Door Hardware', status: 'corrected' }
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
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold mb-4">Data Processing & Validation</h1>
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
          
          <div className="space-y-4">
            {cleaningSteps.map((step, index) => {
              const isCompleted = completedSteps.includes(index);
              const isCurrent = index === currentStep;
              const isPending = index > currentStep;
              const progress = stepProgress[index] || 0;

              return (
                <Card 
                  key={index}
                  className={`transition-all duration-300 ${
                    isCurrent ? 'border-primary shadow-lg animate-scale-in' : 
                    isCompleted ? 'border-green-500/50 bg-green-500/5' : 
                    'border-border opacity-60'
                  }`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 rounded-full p-1.5 ${
                        isCompleted ? 'bg-green-500 text-white' :
                        isCurrent ? 'bg-primary text-primary-foreground animate-pulse' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {isCompleted ? (
                          <Check className="h-4 w-4" />
                        ) : isCurrent ? (
                          <AlertCircle className="h-4 w-4" />
                        ) : (
                          <Info className="h-4 w-4" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <CardTitle className="text-base font-semibold">
                            {step.title}
                          </CardTitle>
                          {isCurrent && !isCompleted && (
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              ~{Math.ceil(step.estimatedTime * (100 - progress) / 100)}s
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-3">
                    {isCurrent && !isCompleted && (
                      <Progress 
                        value={progress} 
                        className="h-1.5"
                      />
                    )}
                    <p className="text-sm">
                      {step.issues}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {processingComplete && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <AlertCircle className="w-5 h-5 text-orange-500" />
                    <span>Review Corrected Content</span>
                  </CardTitle>
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
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {correctedItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                      <Checkbox 
                        checked={checkedItems.includes(item.id)}
                        onCheckedChange={(checked) => handleItemCheck(item.id, checked as boolean)}
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-primary">{item.type}</span>
                          <span className="text-sm text-muted-foreground">•</span>
                          <span className="text-sm">{item.item}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{item.change}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center justify-between p-6 bg-muted/50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-600" />
                <span className="font-medium text-green-600">
                  Data processing complete! 
                  {checkedItems.length > 0 && ` (${checkedItems.length}/${correctedItems.length} items reviewed)`}
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
