export const isWindowAvailable = () =>
  typeof window != 'undefined' && typeof window?.location != 'undefined';
