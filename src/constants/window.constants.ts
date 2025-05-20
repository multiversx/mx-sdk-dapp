export const safeWindow: Window =
  typeof window !== 'undefined' ? window : ({} as Window);
