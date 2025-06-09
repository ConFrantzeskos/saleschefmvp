
import { useEffect } from 'react';
import { initializeSecurity } from '@/lib/security';

const SecurityMonitor = () => {
  useEffect(() => {
    // Initialize security checks when the app loads
    initializeSecurity();
    
    // Monitor for suspicious activity patterns
    let failedAttempts = 0;
    const maxFailedAttempts = 5;
    const resetTime = 300000; // 5 minutes
    
    const handleSecurityEvent = (event: CustomEvent) => {
      if (event.detail?.type === 'validation_failed') {
        failedAttempts++;
        
        if (failedAttempts >= maxFailedAttempts) {
          if (import.meta.env.DEV) {
            console.warn('🚨 Security Alert: Multiple validation failures detected');
          }
          // In production, this could trigger additional security measures
        }
        
        // Reset counter after timeout
        setTimeout(() => {
          failedAttempts = Math.max(0, failedAttempts - 1);
        }, resetTime);
      }
    };
    
    window.addEventListener('security-event', handleSecurityEvent as EventListener);
    
    return () => {
      window.removeEventListener('security-event', handleSecurityEvent as EventListener);
    };
  }, []);
  
  return null; // This component doesn't render anything
};

export default SecurityMonitor;
