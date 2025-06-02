
import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

const LiveTracker = () => {
  const [count, setCount] = useState(2847392);
  
  useEffect(() => {
    const createBurstPattern = () => {
      // Random burst size (1-8 increments)
      const burstSize = Math.floor(Math.random() * 8) + 1;
      let burstCount = 0;
      
      const burstInterval = setInterval(() => {
        setCount(prev => prev + Math.floor(Math.random() * 5) + 1);
        burstCount++;
        
        if (burstCount >= burstSize) {
          clearInterval(burstInterval);
          // Random pause between bursts (200ms to 1.5s)
          setTimeout(createBurstPattern, 200 + Math.random() * 1300);
        }
      }, 100 + Math.random() * 200); // Very fast increments during burst
    };
    
    createBurstPattern();
    
    return () => {}; // Cleanup handled by individual intervals
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div className="fixed top-6 right-6 z-50 animate-pulse-slow">
      {/* Starburst background */}
      <div className="relative">
        {/* Starburst rays */}
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-8 bg-gradient-to-t from-primary/30 to-transparent"
              style={{
                left: '50%',
                top: '50%',
                transformOrigin: '0 0',
                transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-24px)`,
              }}
            />
          ))}
        </div>
        
        {/* Main content */}
        <div className="relative bg-gradient-to-br from-primary to-secondary p-4 rounded-full shadow-brand hover:shadow-large transition-all duration-300 min-w-[120px]">
          <div className="text-center text-white">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Zap className="w-4 h-4 animate-pulse" />
              <span className="text-xs font-bold tracking-wider">LIVE</span>
            </div>
            <div className="text-lg font-mono font-bold leading-none">
              {formatNumber(count)}
            </div>
            <div className="text-xs opacity-90 leading-tight mt-1">
              specs transformed
            </div>
          </div>
          
          {/* Pulsing indicator */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse border-2 border-white"></div>
        </div>
      </div>
    </div>
  );
};

export default LiveTracker;
