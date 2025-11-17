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
      title: "Data Ingestion",
      description: "Processing multiple file formats (CSV, PDF, URLs, ERP, CMS)",
      issues: "3 different formats detected and ingested"
    },
    {
      title: "Data Parsing", 
      description: "Extracting structured data from various sources",
      issues: "847 product records parsed successfully"
    },
    {
      title: "Deduplication",
      description: "Identifying and merging duplicate entries",
      issues: "12 duplicate SKUs merged, 3 near-duplicates flagged"
    },
    {
      title: "Data Correction",
      description: "Fixing formatting issues and data inconsistencies",
      issues: "15 formatting errors corrected, 8 price inconsistencies fixed"
    },
    {
      title: "Multi-Level Categorization",
      description: "Assigning products to multiple categories and sub-categories",
      issues: "847 products assigned 1,523 category tags across 24 primary categories with 156 sub-categories"
    },
    {
      title: "Data Validation",
      description: "Checking data completeness and quality standards",
      issues: "Quality score: 92/100 - 5 incomplete entries flagged"
    },
    {
      title: "Final Processing",
      description: "Preparing clean, validated data for content generation",
      issues: "847 products ready for enhancement"
    }
  ];

  const correctedItems = [
    { id: 1, type: 'Multi-Category Assignment', item: 'Professional Blender BL-3000', change: 'Added: Kitchen Appliances → Small Appliances → Blenders + Home & Garden → Kitchen Tools', status: 'corrected' },
    { id: 2, type: 'Category Hierarchy', item: 'Smart Watch Series 8', change: 'Electronics → Wearables → Smart Watches + Health & Fitness → Activity Trackers', status: 'corrected' },
    { id: 3, type: 'Duplicate Merge', item: 'iPhone 15 Pro (Duplicate SKUs)', change: 'SKU-001 + SKU-001A → SKU-001', status: 'merged' },
    { id: 4, type: 'Format Fix', item: 'Gaming Laptop RTX4080', change: 'Description formatting corrected', status: 'corrected' },
    { id: 5, type: 'Extended Categorization', item: 'Wireless Coffee Maker Pro', change: 'Primary: Kitchen → Coffee Makers | Secondary: Smart Home → Connected Appliances', status: 'completed' }
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
