
import React, { memo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';
import { useEmailSubmission } from '@/hooks/useEmailSubmission';
import { cn } from '@/lib/utils';

interface EmailCTAProps {
  headline: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  variant?: 'default' | 'gradient' | 'card';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const EmailCTA = memo(({
  headline,
  subtitle,
  placeholder = "Enter your work email",
  buttonText = "Book a Demo",
  variant = 'default',
  size = 'md',
  className
}: EmailCTAProps) => {
  const { email, setEmail, handleSubmit, isSubmitting } = useEmailSubmission();

  const sizeClasses = {
    sm: {
      section: 'section-spacing-sm',
      container: 'max-w-sm',
      input: 'h-10 text-sm',
      button: 'h-10 text-sm px-6',
      icon: 'w-4 h-4'
    },
    md: {
      section: 'section-spacing-md',
      container: 'max-w-md',
      input: 'h-12 text-base',
      button: 'h-12 text-base px-8',
      icon: 'w-5 h-5'
    },
    lg: {
      section: 'section-spacing-lg',
      container: 'max-w-lg',
      input: 'h-14 text-lg',
      button: 'h-14 text-lg px-10',
      icon: 'w-6 h-6'
    }
  };

  const variantClasses = {
    default: 'bg-background',
    gradient: 'bg-gradient-to-br from-muted to-muted/50',
    card: 'bg-gradient-to-br from-card to-card/50 border border-border/50 shadow-medium'
  };

  const containerClass = variant === 'card' 
    ? 'rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12' 
    : '';

  return (
    <PageSection 
      background={variant === 'gradient' ? 'gradient' : 'default'}
      padding={size}
      className={className}
    >
      <div className="text-center">
        <div className={cn(
          variantClasses[variant],
          containerClass,
          sizeClasses[size].container,
          'mx-auto'
        )}>
          <SectionHeader
            title={headline}
            subtitle={subtitle}
            size={size === 'lg' ? 'lg' : size === 'sm' ? 'sm' : 'md'}
            centered={true}
            className="mb-6 sm:mb-8"
          />
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-container">
              <Input
                type="email"
                placeholder={placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={cn(
                  sizeClasses[size].input,
                  'border-0 bg-transparent focus-visible:ring-0 flex-1'
                )}
                required
                autoComplete="email"
                disabled={isSubmitting}
                aria-label="Email address"
              />
            </div>
            
            <Button 
              type="submit" 
              className={cn(
                sizeClasses[size].button,
                'w-full btn-accent font-semibold'
              )}
              disabled={!email || isSubmitting}
              aria-label={`${buttonText} - Submit email form`}
            >
              {isSubmitting ? 'Submitting...' : buttonText}
              {!isSubmitting && (
                <ArrowRight className={cn('ml-2', sizeClasses[size].icon)} />
              )}
            </Button>
          </form>
        </div>
      </div>
    </PageSection>
  );
});

EmailCTA.displayName = 'EmailCTA';

export default EmailCTA;
