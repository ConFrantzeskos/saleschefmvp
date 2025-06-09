
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

// Enhanced intersection observer with cleanup
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
): IntersectionObserver | null => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }
  
  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  });
};

// Memory-efficient event listener manager
export class EventManager {
  private listeners = new Map<string, { element: Element; listener: EventListener; options?: boolean | AddEventListenerOptions }[]>();

  add(element: Element, event: string, listener: EventListener, options?: boolean | AddEventListenerOptions) {
    element.addEventListener(event, listener, options);
    
    const key = `${event}`;
    if (!this.listeners.has(key)) {
      this.listeners.set(key, []);
    }
    this.listeners.get(key)!.push({ element, listener, options });
  }

  remove(element: Element, event: string, listener: EventListener) {
    element.removeEventListener(event, listener);
    
    const key = `${event}`;
    const eventListeners = this.listeners.get(key);
    if (eventListeners) {
      const index = eventListeners.findIndex(
        item => item.element === element && item.listener === listener
      );
      if (index > -1) {
        eventListeners.splice(index, 1);
      }
    }
  }

  cleanup() {
    for (const [event, listeners] of this.listeners.entries()) {
      for (const { element, listener } of listeners) {
        element.removeEventListener(event, listener);
      }
    }
    this.listeners.clear();
  }
}

// Optimized image preloader
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Batch image preloader with concurrency control
export const preloadImages = async (
  urls: string[], 
  maxConcurrent = 3
): Promise<void> => {
  const chunks = [];
  for (let i = 0; i < urls.length; i += maxConcurrent) {
    chunks.push(urls.slice(i, i + maxConcurrent));
  }

  for (const chunk of chunks) {
    await Promise.allSettled(chunk.map(preloadImage));
  }
};

// Performance measurement utility
export const measurePerformance = async <T>(
  operation: () => Promise<T> | T,
  name: string
): Promise<T> => {
  const start = performance.now();
  try {
    const result = await operation();
    const duration = performance.now() - start;
    
    if (import.meta.env.DEV) {
      console.log(`[Performance] ${name}: ${duration.toFixed(2)}ms`);
    }
    
    return result;
  } catch (error) {
    const duration = performance.now() - start;
    console.error(`[Performance] ${name} failed after ${duration.toFixed(2)}ms:`, error);
    throw error;
  }
};

// Memory usage tracker
export const trackMemoryUsage = () => {
  if (typeof window !== 'undefined' && 'performance' in window && 'memory' in (performance as any)) {
    const memory = (performance as any).memory;
    return {
      used: Math.round(memory.usedJSHeapSize / 1024 / 1024 * 100) / 100,
      total: Math.round(memory.totalJSHeapSize / 1024 / 1024 * 100) / 100,
      limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024 * 100) / 100,
    };
  }
  return null;
};
