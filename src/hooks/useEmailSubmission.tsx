
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { validateEmail, sanitizeInput } from '@/lib/validation';
import { secureStorage, validateWebhookUrl } from '@/lib/secureStorage';

export const useEmailSubmission = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Sanitize and validate email input
    const sanitizedEmail = sanitizeInput(email);
    const validation = validateEmail(sanitizedEmail);
    
    if (!validation.isValid) {
      toast.error(validation.error || "Invalid email address");
      return;
    }

    // Get webhook URL from secure storage
    const webhookUrl = secureStorage.getItem('zapier_webhook_url');
    
    if (!webhookUrl) {
      toast.error("Webhook URL is not configured. Please configure it in settings first.", {
        action: {
          label: "Configure Now",
          onClick: () => navigate('/zapier')
        }
      });
      return;
    }

    // Validate webhook URL
    const sanitizedWebhookUrl = sanitizeInput(webhookUrl);
    const urlValidation = validateWebhookUrl(sanitizedWebhookUrl);
    
    if (!urlValidation.isValid) {
      toast.error("Invalid webhook configuration. Please check settings.", {
        action: {
          label: "Fix Settings",
          onClick: () => navigate('/zapier')
        }
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Only log in development mode without sensitive data
    if (import.meta.env.DEV) {
      console.log("Processing email submission...");
    }

    try {
      // Send to Zapier webhook
      await fetch(sanitizedWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          email: sanitizedEmail,
          timestamp: new Date().toISOString(),
          source: window.location.pathname,
          user_agent: navigator.userAgent,
        }),
      });
      
      if (import.meta.env.DEV) {
        console.log("Email submission successful");
      }

      toast.success("Welcome to SalesChef! Let's get started with your upload.");
      setTimeout(() => {
        navigate('/upload');
      }, 1000);
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error("Error submitting email:", error);
      }
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
