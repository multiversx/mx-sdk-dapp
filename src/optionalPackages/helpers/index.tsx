import { optionalImport } from './optionalImport';
function moduleExists(name: string) {
  try {
    return require.resolve(name);
  } catch (e) {
    return false;
  }
}
export function exportLibrary<U>(name: string, mock: U): U {
  const library = optionalImport(name);
  return moduleExists(name) ? library : mock;
}
