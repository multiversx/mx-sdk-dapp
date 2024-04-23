import { safeWindow } from 'lib/sdkDappUtils';
import { PlatformsEnum } from 'types/enums.types';

export const detectCurrentPlatform = () => {
  if ((safeWindow as any)?.ReactNativeWebView) {
    return PlatformsEnum.reactNative;
  }
  if ((safeWindow as any)?.webkit) {
    return PlatformsEnum.ios;
  }

  return PlatformsEnum.web;
};
