import React, { useState, useEffect } from 'react';

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

const normalizePath = (path: string): string => {
  // If it's already an HTTP URL or data URL, return as is
  if (path.startsWith('http') || path.startsWith('data:')) {
    return path;
  }
  
  // For production builds with base path
  const isProd = import.meta.env.MODE === 'production';
  if (isProd && path.startsWith('/')) {
    // Remove leading slash to make path relative in production
    return `.${path}`;
  }
  
  return path;
};

const ImageLoader: React.FC<ImageLoaderProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc = 'https://source.unsplash.com/random/800x600/?ghana,africa',
}) => {
  const normalizedSrc = normalizePath(src);
  const normalizedFallbackSrc = normalizePath(fallbackSrc);
  
  const [imgSrc, setImgSrc] = useState(normalizedSrc);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = normalizedSrc;
    img.onload = () => {
      setIsLoading(false);
      setError(false);
      setImgSrc(normalizedSrc);
    };
    img.onerror = () => {
      setIsLoading(false);
      setError(true);
      setImgSrc(normalizedFallbackSrc);
    };
  }, [normalizedSrc, normalizedFallbackSrc]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${error ? 'grayscale' : ''}`}
        loading="lazy"
      />
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <span className="text-white text-sm">Image not available</span>
        </div>
      )}
    </div>
  );
};

export default ImageLoader; 