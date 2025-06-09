
import { useEffect, useCallback } from 'react';
import { debounce } from '@/lib/utils';

interface PerformanceMetrics {
  renderTime: number;
  componentMount: number;
  memoryUsage?: number;
}

export const usePerformanceMonitor = (componentName: string) => {
  const logMetrics = useCallback(
    debounce((metrics: PerformanceMetrics) => {
      if (import.meta.env.DEV) {
        console.log(`[Performance] ${componentName}:`, metrics);
      }
    }, 1000),
    [componentName]
  );

  useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      
      // Get memory usage if available
      const memoryUsage = (performance as any).memory?.usedJSHeapSize;
      
      logMetrics({
        renderTime,
        componentMount: startTime,
        memoryUsage
      });
    };
  }, [logMetrics]);

  // Performance optimization utility
  const measureAsync = useCallback(async <T,>(
    operation: () => Promise<T>,
    operationName: string
  ): Promise<T> => {
    const start = performance.now();
    try {
      const result = await operation();
      const duration = performance.now() - start;
      
      if (import.meta.env.DEV && duration > 100) {
        console.warn(`[Performance] Slow operation "${operationName}": ${duration.toFixed(2)}ms`);
      }
      
      return result;
    } catch (error) {
      const duration = performance.now() - start;
      console.error(`[Performance] Failed operation "${operationName}" after ${duration.toFixed(2)}ms:`, error);
      throw error;
    }
  }, []);

  return { measureAsync };
};
