import React, { useState, useCallback, memo } from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

interface LogoImageProps {
  src?: string;
  alt: string;
  fallbackEmoji?: string;
  className?: string;
  priority?: boolean;
}

const LogoImage = memo(({
  src,
  alt,
  fallbackEmoji,
  className = "w-6 h-6",
  priority = false,
}: LogoImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(!!src);
  const [hasError, setHasError] = useState(false);

  // Adjust logo URL for dark mode if needed
  const getAdjustedLogoUrl = useCallback((url: string) => {
    if (!url) return url;
    
    // Detect if we're in dark mode
    const isDark = document.documentElement.classList.contains('dark');
    
    // For Simple Icons CDN, adjust color for dark mode
    if (isDark && url.includes('cdn.simpleicons.org')) {
      // Replace black colors with white for dark mode
      return url.replace(/\/000000$/, '/FFFFFF').replace(/\/black$/, '/white');
    }
    
    return url;
  }, []);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    setHasError(false);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoading(false);
  }, []);

  // If no src provided or error occurred, show emoji fallback
  if (!src || hasError) {
    return fallbackEmoji ? (
      <span className={cn("flex items-center justify-center", className)}>
        {fallbackEmoji}
      </span>
    ) : null;
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && (
        <Skeleton className="absolute inset-0" />
      )}
      <img
        src={getAdjustedLogoUrl(imgSrc || src)}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          "w-full h-full object-contain transition-opacity duration-200",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        decoding="async"
      />
    </div>
  );
}, (prevProps, nextProps) => {
  return (
    prevProps.src === nextProps.src &&
    prevProps.alt === nextProps.alt &&
    prevProps.fallbackEmoji === nextProps.fallbackEmoji &&
    prevProps.className === nextProps.className &&
    prevProps.priority === nextProps.priority
  );
});

LogoImage.displayName = 'LogoImage';

export default LogoImage;
