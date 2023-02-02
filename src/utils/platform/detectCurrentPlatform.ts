import { PlatformsEnum } from 'types/enums.types';

export const detectCurrentPlatform = () => {
  if ((window as any)?.ReactNativeWebView) {
    return PlatformsEnum.reactNative;
  }
  if ((window as any).webkit) {
    return PlatformsEnum.ios;
  }
  return PlatformsEnum.web;
};
