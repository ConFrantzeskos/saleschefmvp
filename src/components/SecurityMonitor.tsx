
import { useEffect } from 'react';
import { initializeSecurity, logSecurityEvent } from '@/lib/security';

const SecurityMonitor = () => {
  useEffect(() => {
    // Initialize security checks when the app loads
    initializeSecurity();
    
    // Enhanced security monitoring with anomaly detection
    let failedAttempts = 0;
    let rapidSubmissions = 0;
    let lastSubmissionTime = 0;
    const maxFailedAttempts = 5;
    const maxRapidSubmissions = 3;
    const resetTime = 300000; // 5 minutes
    const rapidSubmissionThreshold = 10000; // 10 seconds
    
    const handleSecurityEvent = (event: CustomEvent) => {
      const now = Date.now();
      const eventType = event.detail?.type;
      
      // Track validation failures
      if (eventType === 'validation_failed' || eventType === 'Email validation failed') {
        failedAttempts++;
        
        if (failedAttempts >= maxFailedAttempts) {
          logSecurityEvent('Security threshold exceeded', {
            type: 'validation_failures',
            count: failedAttempts,
            threshold: maxFailedAttempts
          });
          
          if (import.meta.env.DEV) {
            console.warn('🚨 Security Alert: Multiple validation failures detected');
          }
        }
        
        // Reset counter after timeout
        setTimeout(() => {
          failedAttempts = Math.max(0, failedAttempts - 1);
        }, resetTime);
      }
      
      // Track rapid submissions (potential bot activity)
      if (eventType === 'form_submission' || eventType?.includes('submission')) {
        if (now - lastSubmissionTime < rapidSubmissionThreshold) {
          rapidSubmissions++;
          
          if (rapidSubmissions >= maxRapidSubmissions) {
            logSecurityEvent('Rapid submission pattern detected', {
              submissions: rapidSubmissions,
              timeframe: now - lastSubmissionTime,
              threshold: rapidSubmissionThreshold
            });
            
            if (import.meta.env.DEV) {
              console.warn('🚨 Security Alert: Rapid submission pattern detected - possible bot');
            }
          }
        } else {
          rapidSubmissions = 0; // Reset if submissions are spaced out
        }
        
        lastSubmissionTime = now;
      }
      
      // Track rate limiting events
      if (eventType?.includes('rate limit')) {
        logSecurityEvent('Rate limiting active', {
          type: eventType,
          timestamp: now
        });
      }
      
      // Track configuration issues
      if (eventType?.includes('webhook') || eventType?.includes('configuration')) {
        logSecurityEvent('Configuration security event', {
          type: eventType,
          timestamp: now
        });
      }
    };
    
    // Browser fingerprinting for additional security context
    const generateFingerprint = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.textBaseline = 'top';
        ctx.font = '14px Arial';
        ctx.fillText('Security fingerprint', 2, 2);
      }
      
      const fingerprint = {
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        screenResolution: `${screen.width}x${screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        canvas: canvas.toDataURL(),
        cookieEnabled: navigator.cookieEnabled,
        onlineStatus: navigator.onLine
      };
      
      // Store fingerprint hash for session tracking
      const fingerprintString = JSON.stringify(fingerprint);
      const hash = btoa(fingerprintString).substring(0, 32);
      sessionStorage.setItem('fp_hash', hash);
      
      return hash;
    };
    
    // Generate and store fingerprint
    generateFingerprint();
    
    // Monitor for suspicious activities
    const monitorSuspiciousActivity = () => {
      // Monitor for rapid page navigation
      let pageViews = 0;
      const maxPageViews = 20;
      const pageViewWindow = 60000; // 1 minute
      
      const handleVisibilityChange = () => {
        if (document.visibilityState === 'visible') {
          pageViews++;
          
          if (pageViews > maxPageViews) {
            logSecurityEvent('Excessive page navigation detected', {
              pageViews,
              timeWindow: pageViewWindow
            });
          }
          
          setTimeout(() => {
            pageViews = Math.max(0, pageViews - 1);
          }, pageViewWindow);
        }
      };
      
      document.addEventListener('visibilitychange', handleVisibilityChange);
      
      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    };
    
    const cleanupSuspiciousMonitoring = monitorSuspiciousActivity();
    
    window.addEventListener('security-event', handleSecurityEvent as EventListener);
    
    return () => {
      window.removeEventListener('security-event', handleSecurityEvent as EventListener);
      cleanupSuspiciousMonitoring();
    };
  }, []);
  
  return null; // This component doesn't render anything
};

export default SecurityMonitor;
