
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
      container: 'max-w-4xl',
      input: 'h-12 text-base',
      button: 'h-12 text-base px-8',
      icon: 'w-5 h-5',
      form: 'max-w-lg'
    },
    md: {
      section: 'section-spacing-md',
      container: 'max-w-5xl',
      input: 'h-14 text-lg',
      button: 'h-14 text-lg px-10',
      icon: 'w-6 h-6',
      form: 'max-w-xl'
    },
    lg: {
      section: 'section-spacing-lg',
      container: 'max-w-6xl',
      input: 'h-16 text-xl',
      button: 'h-16 text-xl px-12',
      icon: 'w-7 h-7',
      form: 'max-w-2xl'
    }
  };

  const variantClasses = {
    default: 'bg-background',
    gradient: 'bg-gradient-to-br from-muted to-muted/30',
    card: 'bg-gradient-to-br from-card to-card/30 border border-border/50 shadow-medium'
  };

  const containerClass = variant === 'card' 
    ? 'rounded-3xl p-8 lg:p-12' 
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
            className="mb-8"
          />
          
          {/* Horizontal form layout for wider appearance */}
          <form onSubmit={handleSubmit} className={cn("mx-auto", sizeClasses[size].form)}>
            <div className="flex flex-col sm:flex-row gap-4 items-stretch">
              <div className="form-container flex-1">
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
              
              <Button 
                type="submit" 
                className={cn(
                  sizeClasses[size].button,
                  'btn-accent font-semibold whitespace-nowrap sm:w-auto w-full'
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
    </PageSection>
  );
});

EmailCTA.displayName = 'EmailCTA';

export default EmailCTA;
