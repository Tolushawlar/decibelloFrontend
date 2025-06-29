import React from 'react';
import { generateSrcSet, generateSizes } from '../utils/imageOptimization';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: Record<string, string>;
  loading?: 'lazy' | 'eager';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  sizes,
  loading = 'lazy',
  objectFit = 'cover',
  objectPosition = 'center'
}) => {
  const srcSet = generateSrcSet(src);
  const sizesAttr = sizes ? generateSizes(sizes) : undefined;
  
  const style: React.CSSProperties = {
    objectFit,
    objectPosition
  };

  return (
    <img
      src={src}
      alt={alt}
      srcSet={srcSet}
      sizes={sizesAttr}
      width={width}
      height={height}
      loading={loading}
      style={style}
      className={`max-w-full ${className}`}
    />
  );
};

export default ResponsiveImage;
