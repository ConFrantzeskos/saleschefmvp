
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, RefreshCw, Merge } from 'lucide-react';

const EnhanceAssets = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string>('');

  const enhancementOptions = [
    {
      id: 'new',
      title: 'Add New Products',
      description: 'Upload additional product data to expand your catalog',
      icon: Plus,
      action: 'Start New Upload'
    },
    {
      id: 'update',
      title: 'Update Existing Products', 
      description: 'Refresh content for products already in your catalog',
      icon: RefreshCw,
      action: 'Update Products'
    },
    {
      id: 'merge',
      title: 'Merge with Existing',
      description: 'Combine new data with existing product information',
      icon: Merge,
      action: 'Merge Data'
    }
  ];

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleContinue = () => {
    if (selectedOption === 'new') {
      navigate('/upload');
    } else {
      // For update/merge, go to a processing step
      navigate('/cleaning');
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold mb-4">Enhance Existing Assets</h1>
          <p className="text-lg text-muted-foreground">
            How would you like to handle your new upload?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {enhancementOptions.map((option) => {
            const Icon = option.icon;
            const isSelected = selectedOption === option.id;
            
            return (
              <Card 
                key={option.id}
                className={`cursor-pointer transition-all ${
                  isSelected ? 'border-primary shadow-lg scale-105' : 'hover:border-primary/50'
                }`}
                onClick={() => handleOptionSelect(option.id)}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-4 ${
                    isSelected ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg">{option.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">
                    {option.description}
                  </p>
                  <Button 
                    variant={isSelected ? 'default' : 'outline'} 
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOptionSelect(option.id);
                    }}
                  >
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            onClick={handleContinue}
            disabled={!selectedOption}
            className="px-8"
          >
            Continue with {enhancementOptions.find(opt => opt.id === selectedOption)?.title || 'Selection'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EnhanceAssets;
