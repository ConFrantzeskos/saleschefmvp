
import { useState, useCallback, useRef } from 'react';
import { validateEmail, sanitizeInput } from '@/lib/validation';
import { usePerformanceMonitor } from './usePerformanceMonitor';

interface UseSecureFormProps {
  onSubmit: (email: string) => void;
  rateLimitMs?: number;
  maxRetries?: number;
}

export const useSecureForm = ({ 
  onSubmit, 
  rateLimitMs = 2000,
  maxRetries = 3 
}: UseSecureFormProps) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmit, setLastSubmit] = useState<number>(0);
  const [retryCount, setRetryCount] = useState(0);
  
  const { measureAsync } = usePerformanceMonitor('useSecureForm');
  const abortControllerRef = useRef<AbortController | null>(null);

  const handleEmailChange = useCallback((value: string) => {
    const sanitized = sanitizeInput(value);
    setEmail(sanitized);
    setError(null);
    setRetryCount(0); // Reset retry count on input change
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Cancel any pending request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Rate limiting with exponential backoff
    const now = Date.now();
    const timeSinceLastSubmit = now - lastSubmit;
    const dynamicRateLimit = rateLimitMs * Math.pow(2, retryCount);
    
    if (timeSinceLastSubmit < dynamicRateLimit) {
      setError(`Please wait ${Math.ceil((dynamicRateLimit - timeSinceLastSubmit) / 1000)} seconds before trying again`);
      return;
    }
    
    setIsSubmitting(true);
    setError(null);

    try {
      await measureAsync(async () => {
        const validation = validateEmail(email);
        if (!validation.isValid) {
          throw new Error(validation.error || 'Invalid email');
        }

        // Create new abort controller for this request
        abortControllerRef.current = new AbortController();
        
        setLastSubmit(now);
        await onSubmit(email);
        setEmail(''); // Clear form on success
        setRetryCount(0); // Reset retry count on success
      }, 'form-submission');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Submission failed';
      
      if (errorMessage.includes('abort')) {
        return; // Request was cancelled, don't show error
      }
      
      setRetryCount(prev => Math.min(prev + 1, maxRetries));
      
      if (retryCount >= maxRetries) {
        setError('Maximum retry attempts reached. Please try again later.');
      } else {
        setError(`${errorMessage}. Attempt ${retryCount + 1}/${maxRetries + 1}`);
      }
      
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
      abortControllerRef.current = null;
    }
  }, [email, onSubmit, lastSubmit, rateLimitMs, retryCount, maxRetries, measureAsync]);

  // Cleanup on unmount
  const cleanup = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  }, []);

  return {
    email,
    error,
    isSubmitting,
    retryCount,
    handleEmailChange,
    handleSubmit,
    cleanup,
    isValid: email ? validateEmail(email).isValid : false
  };
};
