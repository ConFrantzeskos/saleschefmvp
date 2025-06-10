
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
          const payload = {
            email: sanitizedEmail,
            timestamp: new Date().toISOString(),
            source: window.location.pathname,
            user_agent: navigator.userAgent,
            form_type: "email_capture"
          };

          if (import.meta.env.DEV) {
            console.log("Sending email to Zapier:", { email: sanitizedEmail, webhook: sanitizedWebhookUrl });
          }

          await fetch(sanitizedWebhookUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            mode: "no-cors",
            body: JSON.stringify(payload),
          });
          
          if (import.meta.env.DEV) {
            console.log("Email successfully sent to Zapier webhook");
          }
        } else {
          if (import.meta.env.DEV) {
            console.warn("Invalid webhook URL configuration:", urlValidation.error);
          }
        }
      } else {
        if (import.meta.env.DEV) {
          console.log("No webhook URL configured - email not sent to Zapier");
        }
      }

      // Always show success to user and navigate
      toast.success("Welcome to SalesChef! Let's get started with your upload.");
      
      // Small delay to let user see the success message
      setTimeout(() => {
        navigate('/upload');
      }, 1000);

    } catch (error) {
      if (import.meta.env.DEV) {
        console.error("Error submitting email to Zapier:", error);
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
