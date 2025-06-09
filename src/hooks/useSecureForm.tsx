
import { useState, useCallback } from 'react';
import { validateEmail, sanitizeInput } from '@/lib/validation';

interface UseSecureFormProps {
  onSubmit: (email: string) => void;
  rateLimitMs?: number;
}

export const useSecureForm = ({ onSubmit, rateLimitMs = 2000 }: UseSecureFormProps) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmit, setLastSubmit] = useState<number>(0);

  const handleEmailChange = useCallback((value: string) => {
    const sanitized = sanitizeInput(value);
    setEmail(sanitized);
    setError(null);
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting
    const now = Date.now();
    if (now - lastSubmit < rateLimitMs) {
      setError('Please wait before submitting again');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);

    try {
      const validation = validateEmail(email);
      if (!validation.isValid) {
        setError(validation.error || 'Invalid email');
        return;
      }

      setLastSubmit(now);
      await onSubmit(email);
      setEmail(''); // Clear form on success
    } catch (err) {
      setError('Submission failed. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  }, [email, onSubmit, lastSubmit, rateLimitMs]);

  return {
    email,
    error,
    isSubmitting,
    handleEmailChange,
    handleSubmit,
    isValid: validateEmail(email).isValid
  };
};
