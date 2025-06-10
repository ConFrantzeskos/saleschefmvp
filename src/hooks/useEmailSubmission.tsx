
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

    setIsSubmitting(true);
    
    // Only log in development mode without sensitive data
    if (import.meta.env.DEV) {
      console.log("Processing email submission...");
    }

    try {
      // Get webhook URL from secure storage
      const webhookUrl = secureStorage.getItem('zapier_webhook_url');
      
      if (webhookUrl) {
        // Validate webhook URL
        const sanitizedWebhookUrl = sanitizeInput(webhookUrl);
        const urlValidation = validateWebhookUrl(sanitizedWebhookUrl);
        
        if (urlValidation.isValid) {
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
            console.log("Email submitted to Zapier successfully");
          }
        } else {
          if (import.meta.env.DEV) {
            console.warn("Invalid webhook URL configuration");
          }
        }
      } else {
        if (import.meta.env.DEV) {
          console.log("No webhook URL configured, proceeding with demo flow");
        }
      }

      toast.success("Welcome to SalesChef! Let's get started with your upload.");
      setTimeout(() => {
        navigate('/upload');
      }, 1000);
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error("Error submitting email:", error);
      }
      // Still show success to user even if webhook fails
      toast.success("Welcome to SalesChef! Let's get started with your upload.");
      setTimeout(() => {
        navigate('/upload');
      }, 1000);
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
