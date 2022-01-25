export function optionalImport(path: string): any {
  let importedPkg = {};
  try {
    importedPkg = require(path);
  } catch (err) {}

  return importedPkg;
}
