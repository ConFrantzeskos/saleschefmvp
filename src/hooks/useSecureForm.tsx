
import { useState, useCallback } from 'react';
import { validateEmail, sanitizeInput } from '@/lib/validation';
import { logSecurityEvent } from '@/lib/security';
import { secureStorage, validateWebhookUrl } from '@/lib/secureStorage';

interface UseSecureFormProps {
  onSubmit?: (email: string) => void;
  rateLimitMs?: number;
  redirectPath?: string;
}

export const useSecureForm = ({ onSubmit, rateLimitMs = 2000, redirectPath = '/upload' }: UseSecureFormProps) => {
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
      logSecurityEvent('Rate limit exceeded', { timestamp: now });
      return;
    }
    
    setIsSubmitting(true);
    setError(null);

    try {
      const validation = validateEmail(email);
      if (!validation.isValid) {
        setError(validation.error || 'Invalid email');
        logSecurityEvent('Email validation failed', { email: email.substring(0, 3) + '***' });
        return;
      }

      // Get webhook URL from secure storage
      const webhookUrl = secureStorage.getItem('zapier_webhook_url') || 'https://hooks.zapier.com/hooks/catch/2266471/uyt9ob0/';
      
      // Validate webhook URL
      const urlValidation = validateWebhookUrl(webhookUrl);
      if (!urlValidation.isValid) {
        setError('Zapier webhook not configured properly');
        return;
      }

      // Send to Zapier webhook
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          source: window.location.pathname,
          user_agent: navigator.userAgent,
        }),
      });

      setLastSubmit(now);
      
      // Call custom onSubmit if provided, otherwise use default behavior
      if (onSubmit) {
        await onSubmit(email);
      } else {
        // Default redirect behavior
        setTimeout(() => {
          window.location.href = redirectPath;
        }, 1000);
      }
      
      setEmail(''); // Clear form on success
    } catch (err) {
      setError('Submission failed. Please try again.');
      // Only log errors in development mode
      if (import.meta.env.DEV) {
        console.error('Form submission error:', err);
      } else {
        logSecurityEvent('Form submission failed');
      }
    } finally {
      setIsSubmitting(false);
    }
  }, [email, onSubmit, lastSubmit, rateLimitMs, redirectPath]);

  return {
    email,
    error,
    isSubmitting,
    handleEmailChange,
    handleSubmit,
    isValid: validateEmail(email).isValid
  };
};
