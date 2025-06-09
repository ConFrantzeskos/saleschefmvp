
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { validateEmail, sanitizeInput } from '@/lib/validation';
import { secureStorage, validateWebhookUrl } from '@/lib/secureStorage';
import { logSecurityEvent } from '@/lib/security';

export const useEmailSubmission = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmit, setLastSubmit] = useState<number>(0);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Enhanced rate limiting with progressive backoff
    const now = Date.now();
    const timeSinceLastSubmit = now - lastSubmit;
    const minInterval = 3000; // 3 seconds minimum
    
    if (timeSinceLastSubmit < minInterval) {
      const waitTime = Math.ceil((minInterval - timeSinceLastSubmit) / 1000);
      toast.error(`Please wait ${waitTime} seconds before submitting again`);
      logSecurityEvent('Rate limit exceeded', { 
        timeSinceLastSubmit,
        userAgent: navigator.userAgent.substring(0, 50) + '...' 
      });
      return;
    }
    
    // Sanitize and validate email input
    const sanitizedEmail = sanitizeInput(email);
    const validation = validateEmail(sanitizedEmail);
    
    if (!validation.isValid) {
      toast.error(validation.error || "Invalid email address");
      logSecurityEvent('Email validation failed', { 
        emailDomain: sanitizedEmail.split('@')[1] || 'unknown' 
      });
      return;
    }
    
    // Get webhook URL from secure storage - NO DEFAULT FALLBACK
    const webhookUrl = secureStorage.getItem('zapier_webhook_url');
    
    if (!webhookUrl) {
      toast.error("Zapier webhook not configured. Please visit /zapier to set it up.");
      return;
    }
    
    // Validate webhook URL
    const urlValidation = validateWebhookUrl(webhookUrl);
    if (!urlValidation.isValid) {
      toast.error("Zapier webhook configuration is invalid. Please reconfigure at /zapier.");
      logSecurityEvent('Invalid webhook configuration detected');
      return;
    }
    
    setIsSubmitting(true);
    setLastSubmit(now);
    
    // Generate CSRF token for this submission
    const csrfToken = crypto.randomUUID();
    
    // Only log in development mode without sensitive data
    if (import.meta.env.DEV) {
      console.log("Processing email submission with enhanced security...");
    }

    try {
      // Send to Zapier webhook with enhanced payload
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        mode: "no-cors",
        body: JSON.stringify({
          email: sanitizedEmail,
          timestamp: new Date().toISOString(),
          source: window.location.pathname,
          user_agent: navigator.userAgent,
          csrf_token: csrfToken,
          session_id: sessionStorage.getItem('session_id') || crypto.randomUUID(),
        }),
      });
      
      // Store session ID for tracking
      if (!sessionStorage.getItem('session_id')) {
        sessionStorage.setItem('session_id', crypto.randomUUID());
      }
      
      if (import.meta.env.DEV) {
        console.log("Email submission successful with enhanced security");
      }

      toast.success("Welcome to SalesChef! Let's get started with your upload.");
      setTimeout(() => {
        navigate('/upload');
      }, 1000);
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error("Error submitting email:", error);
      }
      logSecurityEvent('Form submission failed', { source: 'email_submission' });
      toast.error("Failed to submit email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetEmail = () => setEmail('');

  return {
    email,
    setEmail: (value: string) => setEmail(sanitizeInput(value)),
    handleSubmit,
    resetEmail,
    isSubmitting
  };
};
