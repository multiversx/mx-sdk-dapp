import { safeWindow } from 'constants/window.constants';

export const getWindowParentOrigin = () => {
  if (!safeWindow) {
    return '';
  }

  try {
    const referrer = safeWindow.document?.referrer;

    if (!referrer) {
      return '';
    }

    return new URL(referrer).origin;
  } catch (e) {
    console.error(e);
    return '';
  }
};
