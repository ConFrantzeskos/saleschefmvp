
import React from 'react';
import { cn } from '@/lib/utils';

interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'muted' | 'gradient';
  padding?: 'sm' | 'md' | 'lg';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '6xl';
}

const PageSection = ({ 
  children, 
  className,
  background = 'default',
  padding = 'md',
  maxWidth = '6xl'
}: PageSectionProps) => {
  const backgroundClasses = {
    default: 'bg-background',
    muted: 'bg-muted/20',
    gradient: 'bg-gradient-to-b from-background to-muted/30'
  };

  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16'
  };

  const maxWidthClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'content-width',
    xl: 'max-w-6xl',
    '2xl': 'container-width',
    '6xl': 'max-w-6xl'
  };

  return (
    <section className={cn(
      backgroundClasses[background],
      paddingClasses[padding],
      'px-4 md:px-6',
      className
    )}>
      <div className={cn(maxWidthClasses[maxWidth], 'mx-auto')}>
        {children}
      </div>
    </section>
  );
};

export default PageSection;
