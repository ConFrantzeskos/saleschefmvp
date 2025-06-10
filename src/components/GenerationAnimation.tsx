
import React, { useState, useEffect } from 'react';
import { ChefHat, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface GenerationAnimationProps {
  onComplete: () => void;
}

const GenerationAnimation = ({ onComplete }: GenerationAnimationProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [dots, setDots] = useState('');

  const steps = [
    "Preheating the content oven...",
    "Chopping up your data ingredients...",
    "Seasoning with brand guidelines...",
    "Mixing in some creative flair...",
    "Letting it simmer to perfection...",
    "Plating your content masterpiece...",
    "Bon appétit! Your content feast is ready!"
  ];

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(stepInterval);
          setTimeout(onComplete, 1500); // Wait a bit before navigating
          return prev;
        }
      });
    }, 2000);

    return () => clearInterval(stepInterval);
  }, [onComplete]);

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => clearInterval(dotInterval);
  }, []);

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
      <Card className="w-96 shadow-lg">
        <CardContent className="p-8 text-center">
          <div className="mb-6 relative">
            <div className="relative inline-block">
              <ChefHat className="w-16 h-16 text-primary mx-auto animate-bounce" />
              <Sparkles className="w-6 h-6 text-yellow-500 absolute -top-2 -right-2 animate-pulse" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Cooking up your content...
            </h2>
            
            <div className="h-16 flex items-center justify-center">
              <p className="text-lg text-muted-foreground">
                {steps[currentStep]}{currentStep < steps.length - 1 ? dots : ''}
              </p>
            </div>
            
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-2000 ease-out"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
            
            <p className="text-sm text-muted-foreground">
              Step {currentStep + 1} of {steps.length}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GenerationAnimation;
