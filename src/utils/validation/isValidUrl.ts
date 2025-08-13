/**
 * Validates if a string is a valid URL
 * @param url - The URL string to validate
 * @returns true if the URL is valid, false otherwise
 */
export const isValidUrl = (url: string): boolean => {
  if (!url || typeof url !== 'string') {
    return false;
  }

  const trimmedUrl = url.trim();

  if (trimmedUrl === '') {
    return false;
  }

  try {
    // Basic URL validation - check if it can be parsed as a URL
    new URL(trimmedUrl);
    return true;
  } catch {
    return false;
  }
};
