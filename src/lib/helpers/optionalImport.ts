export function optionalImport(path: string, initialObject = {}): any {
  let importedPkg: any = initialObject;
  try {
    console.log('trying import', path);
    importedPkg = require(path);
    console.log('ipm', path, importedPkg);
  } catch (err) {}
  return importedPkg;
}
