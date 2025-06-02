
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getLogosForType } from './constants/logoData';

interface StepCardProps {
  step: {
    step: string;
    title: string;
    desc: string;
    icon: LucideIcon;
    color: string;
    hasEmailInput?: boolean;
    hasLogos?: boolean;
    logoType?: string;
  };
  index: number;
  tryItEmail?: string;
  setTryItEmail?: (email: string) => void;
  handleSubmitWithRedirect?: (e: React.FormEvent) => void;
}

const StepCard = ({ step, index, tryItEmail, setTryItEmail, handleSubmitWithRedirect }: StepCardProps) => {
  return (
    <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} ${index > 0 ? '-mt-8' : ''}`}>
      {/* Content */}
      <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-left`}>
        <div className="bg-card rounded-xl p-4 shadow-soft border border-border hover:shadow-medium transition-all duration-300 group">
          <div className="flex items-center gap-2 mb-3 lg:justify-start justify-start">
            <div className={`w-8 h-8 ${step.color} text-white rounded-lg flex items-center justify-center font-display font-bold text-xs shadow-soft group-hover:scale-105 transition-transform`}>
              {step.step}
            </div>
            <h3 className="font-display font-bold text-base text-foreground">{step.title}</h3>
          </div>
          
          {step.hasLogos && (
            <div className="mb-3">
              <div className="grid grid-cols-3 gap-1.5">
                {getLogosForType(step.logoType!).map((item, logoIndex) => (
                  <div key={logoIndex} className="flex flex-col items-center p-1.5 bg-background rounded-md border border-border/50 hover:border-primary/30 transition-colors">
                    <span className="text-sm mb-0.5">{item.logo}</span>
                    <span className="text-xs text-muted-foreground text-center leading-tight">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {step.hasEmailInput && tryItEmail !== undefined && setTryItEmail && handleSubmitWithRedirect && (
            <form onSubmit={handleSubmitWithRedirect} className="flex gap-2 p-2 bg-background rounded-lg border border-border">
              <Input
                type="email"
                placeholder="Enter your work email"
                value={tryItEmail}
                onChange={(e) => setTryItEmail(e.target.value)}
                className="flex-1 h-8 border-0 bg-transparent focus-visible:ring-0 text-sm"
                required
              />
              <Button type="submit" size="sm" className="h-8 px-3 bg-primary hover:bg-primary/90 text-xs" disabled={!tryItEmail}>
                Start
              </Button>
            </form>
          )}
        </div>
      </div>
      
      {/* Center circle for larger screens */}
      <div className="hidden lg:flex w-8 h-8 bg-card border-2 border-primary/20 rounded-lg items-center justify-center relative z-10 shadow-soft">
        <step.icon className="w-4 h-4 text-primary" />
      </div>
      
      {/* Spacer for alternating layout */}
      <div className="flex-1 hidden lg:block" />
    </div>
  );
};

export default StepCard;
