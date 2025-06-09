
import { useState, useCallback } from 'react';
import { validateEmail, sanitizeInput } from '@/lib/validation';
import { logSecurityEvent } from '@/lib/security';
import { secureStorage, validateWebhookUrl } from '@/lib/secureStorage';

interface UseSecureFormProps {
  onSubmit?: (email: string) => void;
  rateLimitMs?: number;
  redirectPath?: string;
}

export const useSecureForm = ({ onSubmit, rateLimitMs = 3000, redirectPath = '/upload' }: UseSecureFormProps) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmit, setLastSubmit] = useState<number>(0);
  const [submitCount, setSubmitCount] = useState<number>(0);

  const handleEmailChange = useCallback((value: string) => {
    const sanitized = sanitizeInput(value);
    setEmail(sanitized);
    setError(null);
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Enhanced progressive rate limiting
    const now = Date.now();
    const timeSinceLastSubmit = now - lastSubmit;
    const dynamicRateLimit = Math.min(rateLimitMs * Math.pow(1.5, submitCount), 30000); // Max 30s
    
    if (timeSinceLastSubmit < dynamicRateLimit) {
      const waitTime = Math.ceil((dynamicRateLimit - timeSinceLastSubmit) / 1000);
      setError(`Please wait ${waitTime} seconds before submitting again`);
      logSecurityEvent('Progressive rate limit exceeded', { 
        submitCount,
        timeSinceLastSubmit,
        dynamicRateLimit 
      });
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    setSubmitCount(prev => prev + 1);

    try {
      const validation = validateEmail(email);
      if (!validation.isValid) {
        setError(validation.error || 'Invalid email');
        logSecurityEvent('Email validation failed', { 
          emailLength: email.length,
          hasDomain: email.includes('@') 
        });
        return;
      }

      // Get webhook URL from secure storage - NO DEFAULT FALLBACK
      const webhookUrl = secureStorage.getItem('zapier_webhook_url');
      
      if (!webhookUrl) {
        setError('Zapier webhook not configured. Please visit /zapier to set it up.');
        return;
      }
      
      // Validate webhook URL
      const urlValidation = validateWebhookUrl(webhookUrl);
      if (!urlValidation.isValid) {
        setError('Zapier webhook configuration is invalid');
        logSecurityEvent('Invalid webhook URL in secure form');
        return;
      }

      // Generate enhanced payload with security tokens
      const payload = {
        email: email,
        timestamp: new Date().toISOString(),
        source: window.location.pathname,
        user_agent: navigator.userAgent,
        csrf_token: crypto.randomUUID(),
        session_id: sessionStorage.getItem('session_id') || crypto.randomUUID(),
        form_type: 'secure_form',
      };

      // Send to Zapier webhook
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        mode: "no-cors",
        body: JSON.stringify(payload),
      });

      // Store session ID for tracking
      if (!sessionStorage.getItem('session_id')) {
        sessionStorage.setItem('session_id', crypto.randomUUID());
      }

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
      setSubmitCount(0); // Reset submit count on success
    } catch (err) {
      setError('Submission failed. Please try again.');
      // Only log errors in development mode
      if (import.meta.env.DEV) {
        console.error('Form submission error:', err);
      } else {
        logSecurityEvent('Form submission failed', { 
          source: 'secure_form',
          errorType: err instanceof Error ? err.name : 'unknown' 
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  }, [email, onSubmit, lastSubmit, rateLimitMs, redirectPath, submitCount]);

  return {
    email,
    error,
    isSubmitting,
    handleEmailChange,
    handleSubmit,
    isValid: validateEmail(email).isValid
  };
};
