
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

// Default Zapier webhook URL - you can replace this with your actual webhook URL
const ZAPIER_WEBHOOK_URL = process.env.REACT_APP_ZAPIER_WEBHOOK_URL || '';

export const useEmailSubmission = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    console.log("Submitting email:", email);

    try {
      // Send to Zapier if webhook URL is configured
      if (ZAPIER_WEBHOOK_URL) {
        await fetch(ZAPIER_WEBHOOK_URL, {
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
        console.log("Email sent to Zapier webhook");
      }

      toast.success("Welcome to SalesChef! Let's get started with your upload.");
      setTimeout(() => {
        navigate('/upload');
      }, 1000);
    } catch (error) {
      console.error("Error submitting email:", error);
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
