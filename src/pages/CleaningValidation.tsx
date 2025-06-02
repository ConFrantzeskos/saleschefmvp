
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '@/components/ProgressIndicator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, AlertCircle, Info } from 'lucide-react';

const CleaningValidation = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    { id: 'upload', label: 'Upload', completed: true, current: false },
    { id: 'mapping', label: 'Map Fields', completed: true, current: false },
    { id: 'clean', label: 'Clean Data', completed: false, current: true },
    { id: 'generate', label: 'Generate', completed: false, current: false },
    { id: 'review', label: 'Review', completed: false, current: false },
    { id: 'deploy', label: 'Deploy', completed: false, current: false },
  ];

  const cleaningSteps = [
    {
      title: "Data Validation",
      description: "Checking data types and formats",
      issues: "3 formatting issues corrected"
    },
    {
      title: "Duplicate Detection", 
      description: "Identifying duplicate entries",
      issues: "2 duplicate SKUs merged"
    },
    {
      title: "Missing Data Analysis",
      description: "Finding incomplete records",
      issues: "5 incomplete entries flagged"
    },
    {
      title: "Quality Scoring",
      description: "Assessing overall data quality", 
      issues: "Quality score: 87/100"
    },
    {
      title: "Final Validation",
      description: "Preparing data for enrichment",
      issues: "847 products ready for processing"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < cleaningSteps.length - 1) {
          setCompletedSteps(prevCompleted => [...prevCompleted, prev]);
          return prev + 1;
        } else {
          setCompletedSteps(prevCompleted => [...prevCompleted, prev]);
          setTimeout(() => navigate('/generation'), 1500);
          return prev;
        }
      });
    }, 1200);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background p-6">
      <ProgressIndicator steps={steps} />
      
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold mb-4">Cleaning & Validation</h1>
          <p className="text-lg text-muted-foreground">
            Ensuring your data is clean and ready for content generation
          </p>
        </div>

        <div className="space-y-4">
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

        {completedSteps.length === cleaningSteps.length && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 text-green-600 font-medium">
              <Check className="w-5 h-5" />
              <span>Data cleaning complete! Proceeding to content generation...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CleaningValidation;
