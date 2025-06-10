
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
  variant?: 'default' | 'gradient' | 'card' | 'brand';
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
      container: 'max-w-2xl',
      input: 'h-11 text-sm',
      button: 'h-11 text-sm',
      form: 'max-w-lg',
      title: 'text-xl sm:text-2xl',
      subtitle: 'text-sm sm:text-base'
    },
    md: {
      section: 'section-spacing-md',
      container: 'max-w-3xl',
      input: 'h-12 text-base',
      button: 'h-12 text-base',
      form: 'max-w-xl',
      title: 'text-2xl sm:text-3xl',
      subtitle: 'text-base sm:text-lg'
    },
    lg: {
      section: 'section-spacing-lg',
      container: 'max-w-4xl',
      input: 'h-14 text-lg',
      button: 'h-14 text-lg',
      form: 'max-w-2xl',
      title: 'text-3xl sm:text-4xl',
      subtitle: 'text-lg sm:text-xl'
    }
  };

  const variantClasses = {
    default: 'section-alt',
    gradient: 'section-brand',
    card: 'bg-background',
    brand: 'section-hero'
  };

  return (
    <section className={cn(
      sizeClasses[size].section,
      variantClasses[variant],
      'content-padding',
      className
    )}>
      <div className={cn(
        sizeClasses[size].container,
        'mx-auto text-center'
      )}>
        <div className="space-elements-md">
          <div className="space-elements-sm">
            <h3 className={cn(
              sizeClasses[size].title,
              'font-display font-bold text-foreground text-balance'
            )}>
              {headline}
            </h3>
            {subtitle && (
              <p className={cn(
                sizeClasses[size].subtitle,
                'text-muted-foreground leading-relaxed'
              )}>
                {subtitle}
              </p>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className={cn("mx-auto", sizeClasses[size].form)}>
            <div className="form-container space-elements-sm">
              <Input
                type="email"
                placeholder={placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={cn(
                  'form-input',
                  sizeClasses[size].input
                )}
                required
                autoComplete="email"
                disabled={isSubmitting}
                aria-label="Email address"
              />
              
              <Button 
                type="submit" 
                className={cn(
                  'btn-primary w-full',
                  sizeClasses[size].button
                )}
                disabled={!email || isSubmitting}
                aria-label={`${buttonText} - Submit email form`}
              >
                {isSubmitting ? 'Submitting...' : buttonText}
                {!isSubmitting && (
                  <ArrowRight className="ml-2 w-4 h-4" />
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
