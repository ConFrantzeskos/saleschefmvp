
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  centered?: boolean;
  className?: string;
}

const SectionHeader = ({ 
  title, 
  subtitle, 
  size = 'md', 
  centered = true,
  className 
}: SectionHeaderProps) => {
  const titleSizes = {
    sm: 'text-subsection-title',
    md: 'text-section-title',
    lg: 'text-hero'
  };

  return (
    <div className={cn(
      'space-elements-sm',
      centered && 'text-center',
      className
    )}>
      <h2 className={cn(
        'font-display font-bold tracking-tight',
        titleSizes[size]
      )}>
        {title}
      </h2>
      {subtitle && (
        <div className="text-body-large text-muted-foreground">
          {subtitle}
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
