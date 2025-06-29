/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Utility functions for image optimization
 */

/**
 * Get responsive image URL with appropriate size based on viewport
 * @param baseUrl Base URL of the image
 * @param width Desired width
 * @param _quality Image quality (1-100)
 * @returns Optimized image URL
 */
export const getResponsiveImageUrl = (baseUrl: string, width: number, _quality: number = 80): string => {
  // For placeholder images (picsum)
  if (baseUrl.includes('picsum.photos')) {
    return baseUrl.replace(/\/\d+\/\d+/, `/${width}/${Math.round(width * 0.75)}`);
  }
  
  // For real implementation, you would use your image CDN's URL parameters
  // Example for Cloudinary:
  // return `https://res.cloudinary.com/your-cloud-name/image/fetch/q_${quality},w_${width}/${baseUrl}`;
  
  return baseUrl;
};

/**
 * Generate srcset attribute for responsive images
 * @param baseUrl Base URL of the image
 * @param sizes Array of widths to include in srcset
 * @param quality Image quality (1-100)
 * @returns srcset attribute string
 */
export const generateSrcSet = (baseUrl: string, sizes: number[] = [320, 640, 960, 1280, 1920], quality: number = 80): string => {
  return sizes
    .map(size => `${getResponsiveImageUrl(baseUrl, size, quality)} ${size}w`)
    .join(', ');
};

/**
 * Generate sizes attribute for responsive images
 * @param breakpoints Object with breakpoints and corresponding sizes
 * @returns sizes attribute string
 */
export const generateSizes = (breakpoints: Record<string, string> = {
  '(max-width: 640px)': '100vw',
  '(max-width: 1024px)': '50vw',
  'default': '33vw'
}): string => {
  const entries = Object.entries(breakpoints);
  const defaultSize = entries.find(([key]) => key === 'default')?.[1] || '100vw';
  
  return entries
    .filter(([key]) => key !== 'default')
    .map(([breakpoint, size]) => `${breakpoint} ${size}`)
    .concat([defaultSize])
    .join(', ');
};

/**
 * Calculate aspect ratio for image placeholder
 * @param width Original width
 * @param height Original height
 * @returns CSS padding-top value for maintaining aspect ratio
 */
export const calculateAspectRatio = (width: number, height: number): string => {
  return `${(height / width) * 100}%`;
};
