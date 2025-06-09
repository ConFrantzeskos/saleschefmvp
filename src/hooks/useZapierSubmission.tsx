
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { validateEmail, sanitizeInput } from '@/lib/validation';
import { validateWebhookUrl } from '@/lib/secureStorage';

interface UseZapierSubmissionProps {
  webhookUrl?: string;
}

export const useZapierSubmission = ({ webhookUrl }: UseZapierSubmissionProps = {}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent, customWebhookUrl?: string) => {
    e.preventDefault();
    
    // Sanitize and validate email
    const sanitizedEmail = sanitizeInput(email);
    const emailValidation = validateEmail(sanitizedEmail);
    
    if (!emailValidation.isValid) {
      toast.error(emailValidation.error || "Invalid email address");
      return;
    }

    const finalWebhookUrl = customWebhookUrl || webhookUrl;
    
    if (!finalWebhookUrl) {
      toast.error("Zapier webhook URL is not configured");
      return;
    }

    // Validate webhook URL
    const sanitizedWebhookUrl = sanitizeInput(finalWebhookUrl);
    const urlValidation = validateWebhookUrl(sanitizedWebhookUrl);
    
    if (!urlValidation.isValid) {
      toast.error("Invalid webhook configuration");
      return;
    }

    setIsSubmitting(true);
    
    if (import.meta.env.DEV) {
      console.log("Processing Zapier submission...");
    }

    try {
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

      toast.success("Welcome to SalesChef! Let's get started with your upload.");
      setTimeout(() => {
        navigate('/upload');
      }, 1000);
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error("Error sending to Zapier:", error);
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
