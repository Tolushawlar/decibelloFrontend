import React from 'react';
import ResponsiveImage from './ResponsiveImage';

interface ImageWithOverlayProps {
  src: string;
  alt: string;
  className?: string;
  overlayClassName?: string;
  aspectRatio?: string;
  children?: React.ReactNode;
}

const ImageWithOverlay: React.FC<ImageWithOverlayProps> = ({
  src,
  alt,
  className = '',
  overlayClassName = 'bg-gradient-to-t from-dark/50 to-transparent',
  aspectRatio = '56.25%', // 16:9 by default
  children
}) => {
  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ paddingTop: aspectRatio }}
    >
      <ResponsiveImage
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full"
        objectFit="cover"
      />
      <div className={`absolute inset-0 ${overlayClassName}`}></div>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
};

export default ImageWithOverlay;
