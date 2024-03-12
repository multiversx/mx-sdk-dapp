import { PlatformsEnum } from 'types/enums.types';

const safeWindow = typeof window !== 'undefined' ? (window as any) : {};

export const detectCurrentPlatform = () => {
  if (safeWindow.ReactNativeWebView) {
    return PlatformsEnum.reactNative;
  }
  if (safeWindow.webkit) {
    return PlatformsEnum.ios;
  }

  return PlatformsEnum.web;
};
