import { getSafeWindow } from './getSafeWindow';

export const isMobileWebview = () => {
  const safeWindow = getSafeWindow();
  return safeWindow.ReactNativeWebView || safeWindow.webkit;
};
