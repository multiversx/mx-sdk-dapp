import { safeWindow } from 'constants/window.constants';

export const getWindowParentOrigin = () => {
  if (!safeWindow) {
    return '';
  }

  try {
    const referrer = safeWindow.document?.referrer;

    if (referrer) {
      return new URL(referrer).origin;
    }

    // Check ancestorOrigins when referrer is not available
    const ancestorOrigins = safeWindow.location?.ancestorOrigins;
    if (ancestorOrigins && ancestorOrigins.length > 0) {
      // Return the last ancestor origin (immediate parent)
      return ancestorOrigins[ancestorOrigins.length - 1];
    }

    return '';
  } catch (e) {
    console.error(e);
    return '';
  }
};
