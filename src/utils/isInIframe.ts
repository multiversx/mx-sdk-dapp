export const isInIframe =
  typeof window !== 'undefined' && window.self !== window.top;
