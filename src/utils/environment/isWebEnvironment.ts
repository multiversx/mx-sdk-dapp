export function isWebEnvironment() {
  return typeof sessionStorage !== 'undefined';
}
