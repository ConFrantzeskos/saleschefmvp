
import React, { useState, useEffect, useCallback } from 'react';
import { Zap } from 'lucide-react';

const LiveTracker = () => {
  const [count, setCount] = useState(() => {
    // Initialize from localStorage or default value
    const stored = localStorage.getItem('salesChefCounter');
    return stored ? parseInt(stored) : 2847392;
  });
  
  // Debounced localStorage save
  const saveToStorage = useCallback(() => {
    localStorage.setItem('salesChefCounter', count.toString());
  }, [count]);

  useEffect(() => {
    // Debounce localStorage writes - only save every 5 seconds
    const saveTimer = setTimeout(saveToStorage, 5000);
    return () => clearTimeout(saveTimer);
  }, [count, saveToStorage]);
  
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    const createBurstPattern = () => {
      // Reduced burst size (1-4 increments instead of 1-8)
      const burstSize = Math.floor(Math.random() * 4) + 1;
      let burstCount = 0;
      
      intervalId = setInterval(() => {
        setCount(prev => prev + Math.floor(Math.random() * 3) + 1);
        burstCount++;
        
        if (burstCount >= burstSize) {
          clearInterval(intervalId);
          // Longer pause between bursts (1-3 seconds instead of 0.2-1.5s)
          setTimeout(createBurstPattern, 1000 + Math.random() * 2000);
        }
      }, 500 + Math.random() * 1000); // Slower increments (500ms-1.5s instead of 100-300ms)
    };
    
    createBurstPattern();
    
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div className="absolute top-6 right-6 z-30 animate-pulse-slow">
      {/* Simplified starburst background */}
      <div className="relative">
        {/* Reduced starburst rays and slower animation */}
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '30s' }}>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-6 bg-gradient-to-t from-primary/20 to-transparent"
              style={{
                left: '50%',
                top: '50%',
                transformOrigin: '0 0',
                transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-20px)`,
              }}
            />
          ))}
        </div>
        
        {/* Main content */}
        <div className="relative bg-gradient-to-br from-primary to-secondary p-4 rounded-full shadow-brand hover:shadow-large transition-all duration-300 min-w-[120px]">
          <div className="text-center text-white">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-bold tracking-wider">LIVE</span>
            </div>
            <div className="text-lg font-mono font-bold leading-none">
              {formatNumber(count)}
            </div>
            <div className="text-xs opacity-90 leading-tight mt-1">
              specs transformed
            </div>
          </div>
          
          {/* Simplified pulsing indicator */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
        </div>
      </div>
    </div>
  );
};

export default LiveTracker;
