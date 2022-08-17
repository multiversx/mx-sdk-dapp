import platform from 'platform';

export function isMobileEnvironment() {
  return platform?.os?.family === 'iOS' || platform?.os?.family === 'Android';
}
