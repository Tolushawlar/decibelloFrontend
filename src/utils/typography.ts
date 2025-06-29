/**
 * Typography utility functions
 */

/**
 * Truncate text to a specific number of lines with ellipsis
 * @param text The text to truncate
 * @param lines Number of lines to show
 * @returns Truncated text with ellipsis
 */
export const truncateText = (text: string, lines: number = 3): string => {
  const words = text.split(' ');
  const averageWordsPerLine = 10; // Approximate
  const maxWords = lines * averageWordsPerLine;
  
  if (words.length <= maxWords) {
    return text;
  }
  
  return words.slice(0, maxWords).join(' ') + '...';
};

/**
 * Format a date string in a readable format
 * @param dateString Date string to format
 * @param locale Locale for formatting (default: 'en-US')
 * @returns Formatted date string
 */
export const formatDate = (dateString: string, locale: string = 'en-US'): string => {
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return dateString;
  }
};

/**
 * Calculate reading time for text content
 * @param text Content to calculate reading time for
 * @param wordsPerMinute Average reading speed (default: 200)
 * @returns Reading time in minutes
 */
export const calculateReadingTime = (text: string, wordsPerMinute: number = 200): string => {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

/**
 * Format a number with proper separators
 * @param number Number to format
 * @param locale Locale for formatting (default: 'en-US')
 * @returns Formatted number string
 */
export const formatNumber = (number: number, locale: string = 'en-US'): string => {
  return new Intl.NumberFormat(locale).format(number);
};
