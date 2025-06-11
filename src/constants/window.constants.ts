export const safeWindow: Window =
  typeof window !== 'undefined' ? window : ({} as Window);

export const SDK_DAPP_VERSION = '__sdkDappVersion'; // will be replaced by the version of the sdk-dapp at build time by esbuild
