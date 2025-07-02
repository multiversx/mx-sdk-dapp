export const safeWindow: Window =
  typeof window !== 'undefined' ? window : ({} as Window);

export const version = '__sdkDappVersion'; // will be replaced at build time
