import { getWindowParentOrigin } from './getWindowParentOrigin';
import { isWindowAvailable } from './isWindowAvailable';

export const getIsInIframe = (): boolean => {
  try {
    if (!isWindowAvailable()) {
      return false;
    }

    const parentOrigin = getWindowParentOrigin();

    if (!parentOrigin) {
      return false;
    }

    // Check if window.self is different from window.top
    // This is a standard way to detect if we're in an iframe
    return window.self !== window.top;
  } catch (_error) {
    // If we get a security error when trying to access window.top,
    // it means we're in a cross-origin iframe
    return true;
  }
};
