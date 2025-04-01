import React, { useState, useEffect } from 'react';

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc = 'https://source.unsplash.com/random/800x600/?ghana,africa',
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoading(false);
      setError(false);
      setImgSrc(src);
    };
    img.onerror = () => {
      setIsLoading(false);
      setError(true);
      setImgSrc(fallbackSrc);
    };
  }, [src, fallbackSrc]);

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