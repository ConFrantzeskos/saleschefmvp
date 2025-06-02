
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
    <div className={`flex items-center gap-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
      {/* Content */}
      <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-left`}>
        <div className="bg-card rounded-3xl p-8 shadow-soft border border-border hover:shadow-medium transition-all duration-300 group">
          <div className="flex items-center gap-4 mb-6 lg:justify-start justify-start">
            <div className={`w-12 h-12 ${step.color} text-white rounded-2xl flex items-center justify-center font-display font-bold text-sm shadow-soft group-hover:scale-105 transition-transform`}>
              {step.step}
            </div>
            <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
              <step.icon className="w-5 h-5 text-muted-foreground" />
            </div>
          </div>
          <h3 className="font-display font-bold text-xl mb-3 text-foreground">{step.title}</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">{step.desc}</p>
          
          {step.hasLogos && (
            <div className="mb-6">
              <div className="grid grid-cols-3 gap-3">
                {getLogosForType(step.logoType!).map((item, logoIndex) => (
                  <div key={logoIndex} className="flex flex-col items-center p-3 bg-background rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                    <span className="text-2xl mb-1">{item.logo}</span>
                    <span className="text-xs text-muted-foreground text-center">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {step.hasEmailInput && tryItEmail !== undefined && setTryItEmail && handleSubmitWithRedirect && (
            <form onSubmit={handleSubmitWithRedirect} className="flex gap-3 p-2 bg-background rounded-2xl border border-border">
              <Input
                type="email"
                placeholder="Enter your work email"
                value={tryItEmail}
                onChange={(e) => setTryItEmail(e.target.value)}
                className="flex-1 h-11 border-0 bg-transparent focus-visible:ring-0"
                required
              />
              <Button type="submit" size="default" className="h-11 px-6 bg-primary hover:bg-primary/90" disabled={!tryItEmail}>
                Start
              </Button>
            </form>
          )}
        </div>
      </div>
      
      {/* Center circle for larger screens */}
      <div className="hidden lg:flex w-16 h-16 bg-card border-2 border-primary/20 rounded-3xl items-center justify-center relative z-10 shadow-soft">
        <step.icon className="w-6 h-6 text-primary" />
      </div>
      
      {/* Spacer for alternating layout */}
      <div className="flex-1 hidden lg:block" />
    </div>
  );
};

export default StepCard;
