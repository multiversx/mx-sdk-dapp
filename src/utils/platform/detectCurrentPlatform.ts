import { PlatformsEnum } from 'types/enums.types';

export function detectCurrentPlatform() {
  if ((window as any)?.ReactNativeWebView) {
    return PlatformsEnum.reactNative;
  }
  if ((window as any).webkit) {
    return PlatformsEnum.ios;
  }
  return PlatformsEnum.web;
}
