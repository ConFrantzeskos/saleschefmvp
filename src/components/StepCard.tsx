
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
    <div className={`flex items-center gap-6 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} ${index > 0 ? '-mt-4' : ''} animate-slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
      {/* Content */}
      <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-left`}>
        <div className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-medium transition-all duration-300 group hover:border-primary/20">
          <div className="flex items-center gap-3 mb-4 lg:justify-start justify-start">
            <div className={`w-10 h-10 ${step.color} text-white rounded-xl flex items-center justify-center font-display font-bold text-sm shadow-soft group-hover:scale-110 transition-transform`}>
              {step.step}
            </div>
            <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">{step.title}</h3>
          </div>
          
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{step.desc}</p>
          
          {step.hasLogos && (
            <div className="mb-4">
              <div className="grid grid-cols-3 gap-2">
                {getLogosForType(step.logoType!).map((item, logoIndex) => (
                  <div key={logoIndex} className="flex flex-col items-center p-2 bg-background rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-200 hover:shadow-soft">
                    <span className="text-base mb-1">{item.logo}</span>
                    <span className="text-xs text-muted-foreground text-center leading-tight font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {step.hasEmailInput && tryItEmail !== undefined && setTryItEmail && handleSubmitWithRedirect && (
            <form onSubmit={handleSubmitWithRedirect} className="flex gap-2 p-3 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors">
              <Input
                type="email"
                placeholder="Enter your work email"
                value={tryItEmail}
                onChange={(e) => setTryItEmail(e.target.value)}
                className="flex-1 h-9 border-0 bg-transparent focus-visible:ring-0 text-sm"
                required
              />
              <Button type="submit" size="sm" className="h-9 px-4 btn-primary text-xs font-semibold" disabled={!tryItEmail}>
                Start
              </Button>
            </form>
          )}
        </div>
      </div>
      
      {/* Center circle for larger screens */}
      <div className="hidden lg:flex w-12 h-12 bg-card border-2 border-primary/30 rounded-xl items-center justify-center relative z-10 shadow-soft hover:shadow-medium hover:border-primary/50 transition-all group">
        <step.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
      </div>
      
      {/* Spacer for alternating layout */}
      <div className="flex-1 hidden lg:block" />
    </div>
  );
};

export default StepCard;
