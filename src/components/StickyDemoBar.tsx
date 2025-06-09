
import React, { useState, useEffect, memo } from 'react';
import { Button } from '@/components/ui/button';
import { Play, X } from 'lucide-react';

interface StickyDemoBarProps {
  onBookDemo: () => void;
}

const StickyDemoBar = memo(({ onBookDemo }: StickyDemoBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 600;
      setIsVisible(scrolled && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-white shadow-2xl border-t border-primary-foreground/20 animate-slide-up">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-semibold">Ready to transform your product content?</span>
          <Button 
            onClick={onBookDemo}
            variant="secondary"
            size="sm"
            className="bg-white text-primary hover:bg-white/90 font-semibold"
          >
            <Play className="mr-2 w-4 h-4" />
            Book a Demo
          </Button>
        </div>
        
        <button 
          onClick={() => setIsDismissed(true)}
          className="p-1 hover:bg-white/10 rounded-md transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
});

StickyDemoBar.displayName = 'StickyDemoBar';

export default StickyDemoBar;
