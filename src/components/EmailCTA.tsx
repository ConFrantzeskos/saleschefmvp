
import React, { memo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
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
      section: 'py-8',
      container: 'max-w-2xl',
      input: 'h-11 text-sm',
      button: 'h-11 text-sm px-6',
      icon: 'w-4 h-4',
      form: 'max-w-lg'
    },
    md: {
      section: 'py-10',
      container: 'max-w-3xl',
      input: 'h-12 text-base',
      button: 'h-12 text-base px-8',
      icon: 'w-4 h-4',
      form: 'max-w-xl'
    },
    lg: {
      section: 'py-12',
      container: 'max-w-4xl',
      input: 'h-14 text-lg',
      button: 'h-14 text-lg px-10',
      icon: 'w-5 h-5',
      form: 'max-w-2xl'
    }
  };

  const variantClasses = {
    default: 'bg-muted/30',
    gradient: 'bg-gradient-to-br from-muted/30 to-background',
    card: 'bg-card border border-border/50 shadow-soft'
  };

  return (
    <section className={cn(
      sizeClasses[size].section,
      variantClasses[variant],
      'px-4 sm:px-6',
      className
    )}>
      <div className={cn(
        sizeClasses[size].container,
        'mx-auto text-center'
      )}>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
              {headline}
            </h3>
            {subtitle && (
              <p className="text-sm sm:text-base text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className={cn("mx-auto", sizeClasses[size].form)}>
            <div className="flex flex-col sm:flex-row gap-3 items-stretch">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder={placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={cn(
                    sizeClasses[size].input,
                    'w-full bg-background border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/25'
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
                  'bg-primary hover:bg-primary/90 text-white font-medium whitespace-nowrap flex-shrink-0'
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
    </section>
  );
});

EmailCTA.displayName = 'EmailCTA';

export default EmailCTA;
