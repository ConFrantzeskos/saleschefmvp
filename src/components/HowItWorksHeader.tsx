
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HowItWorksHeader = () => (
  <div className="bg-gradient-to-b from-primary/5 to-background py-12 px-4">
    <div className="max-w-6xl mx-auto">
      <Link to="/">
        <Button variant="outline" className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </Link>
      
      {/* Logo and Title Section */}
      <div className="flex items-center gap-6 mb-6">
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/0b8c5ffe-edc7-4ea5-af28-bc947207ee19.png" 
            alt="SalesChef Logo" 
            className="h-16 w-auto"
          />
          <div>
            <h1 className="text-4xl font-bold">How SalesChef Works</h1>
            <p className="text-xl text-muted-foreground mt-2">
              Meet the AI agents that transform your raw product data into sales-ready content
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HowItWorksHeader;
