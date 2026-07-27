import React, { useState, useEffect } from 'react';
import { cn } from '../../../utils/cn';

const DEFAULT_FALLBACK = "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1200";

/**
 * Reusable Image Wrapper Component
 * Supports lazy loading, aspect ratio presets, rounded corners, gradient overlays, and automatic onError fallback.
 */
const ImageWrapper = ({
  src,
  alt,
  aspectRatio = 'auto',
  rounded = '2xl',
  overlay = false,
  shadow = true,
  className = '',
  imgClassName = '',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(src || DEFAULT_FALLBACK);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src || DEFAULT_FALLBACK);
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(DEFAULT_FALLBACK);
      setIsLoaded(true);
    }
  };

  const aspectMap = {
    auto: 'aspect-auto',
    square: 'aspect-square',
    video: 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '16/9': 'aspect-[16/9]'
  };

  const roundedMap = {
    none: 'rounded-none',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    xl: 'rounded-[20px]',
    '2xl': 'rounded-3xl'
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-slate-100',
        aspectMap[aspectRatio],
        roundedMap[rounded],
        shadow && 'shadow-md',
        className
      )}
      {...props}
    >
      {/* Skeleton loader state */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse z-10" />
      )}

      <img
        src={imgSrc}
        alt={alt || 'Pavna International School'}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        className={cn(
          'w-full h-full object-cover transition-opacity duration-500',
          isLoaded ? 'opacity-100' : 'opacity-0',
          imgClassName
        )}
      />

      {/* Optional Gradient Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
      )}
    </div>
  );
};

export default ImageWrapper;
