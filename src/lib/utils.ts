
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Enhanced debounce with memory optimization
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  options: { leading?: boolean; trailing?: boolean; maxWait?: number } = {}
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  let maxTimeout: NodeJS.Timeout | null = null;
  let lastCallTime = 0;
  let lastArgs: Parameters<T> | null = null;
  
  const { leading = false, trailing = true, maxWait } = options;

  const invokeFunc = () => {
    if (lastArgs) {
      func(...lastArgs);
      lastArgs = null;
    }
  };

  const clearTimeouts = () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    if (maxTimeout) {
      clearTimeout(maxTimeout);
      maxTimeout = null;
    }
  };

  return (...args: Parameters<T>) => {
    const callTime = Date.now();
    lastArgs = args;

    // Leading edge
    if (leading && callTime - lastCallTime >= wait) {
      invokeFunc();
      lastCallTime = callTime;
    }

    clearTimeouts();

    // Set up trailing edge
    if (trailing) {
      timeout = setTimeout(() => {
        invokeFunc();
        lastCallTime = Date.now();
        clearTimeouts();
      }, wait);
    }

    // Set up max wait
    if (maxWait && !maxTimeout) {
      maxTimeout = setTimeout(() => {
        invokeFunc();
        lastCallTime = Date.now();
        clearTimeouts();
      }, maxWait);
    }

    lastCallTime = callTime;
  };
}

// Enhanced throttle with better performance
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number,
  options: { leading?: boolean; trailing?: boolean } = {}
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  let lastFunc: NodeJS.Timeout | null = null;
  let lastRan = 0;
  
  const { leading = true, trailing = true } = options;

  return (...args: Parameters<T>) => {
    const now = Date.now();

    if (!inThrottle) {
      if (leading) {
        func(...args);
      }
      lastRan = now;
      inThrottle = true;
      
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    } else if (trailing) {
      if (lastFunc) clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (now - lastRan >= limit) {
          func(...args);
          lastRan = now;
        }
      }, limit - (now - lastRan));
    }
  };
}
