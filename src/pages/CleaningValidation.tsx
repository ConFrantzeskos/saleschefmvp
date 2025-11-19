import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '@/components/ProgressIndicator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Check, AlertCircle, Info, Eye, ArrowRight } from 'lucide-react';

const CleaningValidation = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [processingComplete, setProcessingComplete] = useState(false);
  const [allItemsChecked, setAllItemsChecked] = useState(false);

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
      issues: "3 different formats detected and ingested"
    },
    {
      title: "Extract Product Information", 
      description: "Data parsing from various sources",
      issues: "3 product records parsed successfully"
    },
    {
      title: "Remove Duplicates",
      description: "Deduplication and merging",
      issues: "12 duplicate SKUs merged, 3 near-duplicates flagged"
    },
    {
      title: "Fix Formatting Issues",
      description: "Data correction and consistency checks",
      issues: "15 formatting errors corrected, 8 price inconsistencies fixed"
    },
    {
      title: "Validate Data Types",
      description: "Ensure numbers, dates, and currencies are properly formatted",
      issues: "18 price values converted to standard format, 5 date formats standardized"
    },
    {
      title: "Standardize Units & Measurements",
      description: "Convert dimensions, weights, and volumes to consistent units",
      issues: "Mixed imperial/metric detected: 8 weights converted to kg, 12 dimensions to cm"
    },
    {
      title: "Perfect Spelling & Text",
      description: "Automated spelling and typo correction",
      issues: "23 typos corrected, 7 product names standardized"
    },
    {
      title: "Normalize Brand Names",
      description: "Standardize manufacturer and brand naming",
      issues: "4 brand variations unified (e.g., 'Sony Corp' → 'Sony'), 2 manufacturer names corrected"
    },
    {
      title: "Validate & Extract Images",
      description: "Check image URLs, file formats, and dimensions",
      issues: "15 product images verified, 3 broken URLs flagged, 2 low-resolution images detected"
    },
    {
      title: "Extract Product Attributes",
      description: "Identify color, size, material from text",
      issues: "12 color variants extracted, 8 size specifications parsed, 5 material tags added"
    },
    {
      title: "Link Related Products",
      description: "Find variants, bundles, and accessories",
      issues: "6 product variants linked, 4 accessory bundles detected, 2 cross-sell opportunities identified"
    },
    {
      title: "Organize Into Categories",
      description: "Multi-level categorization",
      issues: "3 products assigned to primary categories with relevant sub-categories"
    },
    {
      title: "Check Data Quality",
      description: "Data validation and completeness standards",
      issues: "Quality score: 92/100 - 5 incomplete entries flagged"
    },
    {
      title: "Validate Against Standards",
      description: "Verify compliance with category requirements",
      issues: "All products meet category standards, 2 missing optional fields noted"
    },
    {
      title: "Prepare for Enhancement",
      description: "Final processing and preparation",
      issues: "3 products ready for enrichment"
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
    const timer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < cleaningSteps.length - 1) {
          setCompletedSteps(prevCompleted => [...prevCompleted, prev]);
          return prev + 1;
        } else {
          setCompletedSteps(prevCompleted => [...prevCompleted, prev]);
          setProcessingComplete(true);
          return prev;
        }
      });
    }, 1200);

    return () => clearInterval(timer);
  }, []);

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
      <ProgressIndicator steps={steps} />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold mb-4">Data Processing & Validation</h1>
          <p className="text-lg text-muted-foreground">
            Ingesting, parsing, deduplicating, correcting, categorizing and validating your product data
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {cleaningSteps.map((step, index) => (
            <Card 
              key={index}
              className={`transition-all duration-300 ${
                index === currentStep 
                  ? 'border-primary shadow-lg' 
                  : completedSteps.includes(index)
                    ? 'border-green-500'
                    : 'border-muted'
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      completedSteps.includes(index)
                        ? 'bg-green-500 text-white'
                        : index === currentStep
                          ? 'bg-primary text-primary-foreground animate-pulse'
                          : 'bg-muted text-muted-foreground'
                    }`}>
                      {completedSteps.includes(index) ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <span className="text-sm">{index + 1}</span>
                      )}
                    </div>
                    <span>{step.title}</span>
                  </CardTitle>
                  
                  {index === currentStep && (
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-2">{step.description}</p>
                {(completedSteps.includes(index) || index === currentStep) && (
                  <div className="flex items-center space-x-2 text-sm">
                    <Info className="w-4 h-4 text-blue-500" />
                    <span className="text-blue-600">{step.issues}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
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
