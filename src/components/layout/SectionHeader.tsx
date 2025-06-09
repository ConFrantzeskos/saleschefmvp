
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
    sm: 'text-xl sm:text-2xl md:text-3xl',
    md: 'text-2xl sm:text-3xl md:text-4xl',
    lg: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
  };

  return (
    <div className={cn(
      'mb-8',
      centered && 'text-center',
      className
    )}>
      <h2 className={cn(
        'font-display font-bold tracking-tight mb-3',
        titleSizes[size]
      )}>
        {title}
      </h2>
      {subtitle && (
        <div className="text-lg text-muted-foreground">
          {subtitle}
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
