import { useState, useEffect } from 'react';

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  width?: number;
  height?: number;
}

const ImageLoader = ({ 
  src, 
  alt, 
  className = '', 
  fallbackSrc = 'https://source.unsplash.com/random/800x600/?ghana,africa',
  width,
  height
}: ImageLoaderProps) => {
  const [imgSrc, setImgSrc] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
      setIsLoading(false);
      setError(false);
    };
    img.onerror = () => {
      if (fallbackSrc) {
        const fallbackImg = new Image();
        fallbackImg.src = fallbackSrc;
        fallbackImg.onload = () => {
          setImgSrc(fallbackSrc);
          setIsLoading(false);
          setError(false);
        };
        fallbackImg.onerror = () => {
          setError(true);
          setIsLoading(false);
        };
      } else {
        setError(true);
        setIsLoading(false);
      }
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, fallbackSrc]);

  return (
    <div className={`relative ${className} ${isLoading ? 'animate-pulse' : ''}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {!isLoading && !error && (
        <img
          src={imgSrc}
          alt={alt}
          width={width}
          height={height}
          className={`w-full h-full object-cover ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
          loading="lazy"
        />
      )}
      
      {error && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex flex-col items-center justify-center p-4 text-center">
          <span className="text-gray-500 dark:text-gray-400 text-sm">Image could not be loaded</span>
          <span className="text-gray-400 dark:text-gray-500 text-xs mt-2">{alt}</span>
        </div>
      )}
    </div>
  );
};

export default ImageLoader; 