
import React from 'react';

interface SecurityBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface SecurityBoundaryProps {
  children: React.ReactNode;
}

class SecurityBoundary extends React.Component<SecurityBoundaryProps, SecurityBoundaryState> {
  constructor(props: SecurityBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): SecurityBoundaryState {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log security-related errors without exposing sensitive information
    if (import.meta.env.DEV) {
      console.error('Security boundary caught an error:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center space-y-4 p-8">
            <h2 className="text-2xl font-semibold text-foreground">
              Something went wrong
            </h2>
            <p className="text-muted-foreground">
              We've encountered an unexpected error. Please refresh the page to continue.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default SecurityBoundary;
