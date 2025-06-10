
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
      section: 'py-6 sm:py-8',
      container: 'max-w-3xl',
      input: 'h-11 text-sm',
      button: 'h-11 text-sm px-6',
      icon: 'w-4 h-4',
      form: 'max-w-md',
      padding: 'p-6'
    },
    md: {
      section: 'py-8 sm:py-10',
      container: 'max-w-4xl',
      input: 'h-12 text-base',
      button: 'h-12 text-base px-8',
      icon: 'w-5 h-5',
      form: 'max-w-lg',
      padding: 'p-6 sm:p-8'
    },
    lg: {
      section: 'py-10 sm:py-12',
      container: 'max-w-5xl',
      input: 'h-14 text-lg',
      button: 'h-14 text-lg px-10',
      icon: 'w-6 h-6',
      form: 'max-w-xl',
      padding: 'p-8 sm:p-10'
    }
  };

  const variantClasses = {
    default: 'bg-muted/30',
    gradient: 'bg-gradient-to-br from-muted/40 to-background',
    card: 'bg-card border border-border/50 shadow-soft'
  };

  const containerClass = variant === 'card' 
    ? `rounded-2xl ${sizeClasses[size].padding}` 
    : '';

  return (
    <section className={cn(
      sizeClasses[size].section,
      'px-4 sm:px-6',
      className
    )}>
      <div className={cn(
        sizeClasses[size].container,
        'mx-auto'
      )}>
        <div className={cn(
          variantClasses[variant],
          containerClass,
          'text-center'
        )}>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                {headline}
              </h3>
              {subtitle && (
                <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
                  {subtitle}
                </p>
              )}
            </div>
            
            <form onSubmit={handleSubmit} className={cn("mx-auto", sizeClasses[size].form)}>
              <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                <div className="flex-1">
                  <div className="form-container">
                    <Input
                      type="email"
                      placeholder={placeholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={cn(
                        sizeClasses[size].input,
                        'border-0 bg-transparent focus-visible:ring-0 w-full'
                      )}
                      required
                      autoComplete="email"
                      disabled={isSubmitting}
                      aria-label="Email address"
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className={cn(
                    sizeClasses[size].button,
                    'btn-accent font-medium whitespace-nowrap flex-shrink-0'
                  )}
                  disabled={!email || isSubmitting}
                  aria-label={`${buttonText} - Submit email form`}
                >
                  {isSubmitting ? 'Submitting...' : buttonText}
                  {!isSubmitting && (
                    <ArrowRight className={cn('ml-2', sizeClasses[size].icon)} />
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

EmailCTA.displayName = 'EmailCTA';

export default EmailCTA;
