import { safeWindow } from 'constants/window.constants';

export function getWindowParentOrigin() {
  if (!safeWindow) {
    return '';
  }

  try {
    if (safeWindow.document.referrer) {
      return new URL(safeWindow.document.referrer).origin;
    }

    const ancestorOrigins = safeWindow.location.ancestorOrigins;

    if (ancestorOrigins.length < 1) {
      return '';
    }

    return new URL(ancestorOrigins[ancestorOrigins.length - 1]).origin;
  } catch (e) {
    console.error(e);
    return '';
  }
}
