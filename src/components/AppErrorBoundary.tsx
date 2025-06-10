
import { useEffect } from 'react';

interface AppErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const AppErrorFallback = ({ error, resetErrorBoundary }: AppErrorFallbackProps) => {
  useEffect(() => {
    console.error('App Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong</h1>
        <p className="text-muted-foreground mb-6">
          {import.meta.env.DEV 
            ? `Error: ${error.message}` 
            : "We're experiencing technical difficulties. Please try again."
          }
        </p>
        <div className="space-x-4">
          <button
            onClick={resetErrorBoundary}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Try Again
          </button>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppErrorFallback;
