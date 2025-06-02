import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

const LiveTracker = () => {
  const [count, setCount] = useState(2847392);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 800 + Math.random() * 1200); // Random interval between 0.8-2 seconds (faster)
    
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div className="inline-flex items-center gap-4 px-8 py-6 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm rounded-3xl border border-border/50 shadow-medium hover:shadow-large transition-all duration-500">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center text-white">
            <Zap className="w-6 h-6" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse"></div>
        </div>
        <div className="text-left">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-foreground font-mono">
              {formatNumber(count)}
            </span>
            <span className="text-sm text-green-600 font-semibold">LIVE</span>
          </div>
          <p className="text-sm text-muted-foreground">content elements transformed</p>
        </div>
      </div>
      <div className="text-left border-l border-border/50 pl-4">
        <p className="font-semibold text-foreground">Join 100+ teams already transforming their content</p>
        <p className="text-sm text-muted-foreground">From startups to Fortune 500 companies</p>
      </div>
    </div>
  );
};

export default LiveTracker;
