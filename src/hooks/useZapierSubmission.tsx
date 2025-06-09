
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface UseZapierSubmissionProps {
  webhookUrl?: string;
}

export const useZapierSubmission = ({ webhookUrl }: UseZapierSubmissionProps = {}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent, customWebhookUrl?: string) => {
    e.preventDefault();
    if (!email) return;

    const finalWebhookUrl = customWebhookUrl || webhookUrl;
    
    if (!finalWebhookUrl) {
      toast.error("Zapier webhook URL is not configured");
      return;
    }

    setIsSubmitting(true);
    console.log("Sending email to Zapier:", email, "via webhook:", finalWebhookUrl);

    try {
      await fetch(finalWebhookUrl, {
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

      toast.success("Welcome to SalesChef! Let's get started with your upload.");
      setTimeout(() => {
        navigate('/upload');
      }, 1000);
    } catch (error) {
      console.error("Error sending to Zapier:", error);
      toast.error("Failed to submit email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetEmail = () => setEmail('');

  return {
    email,
    setEmail,
    handleSubmit,
    resetEmail,
    isSubmitting
  };
};
