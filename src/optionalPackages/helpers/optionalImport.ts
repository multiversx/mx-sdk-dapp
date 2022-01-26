export const optionalImport = (path: any, initialObject = {}) => {
  let importedPkg: any = initialObject;
  try {
    console.log('trying import default', path);
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    importedPkg = require(path);
    console.log('ipm', path, importedPkg);
  } catch (err) {}
  return importedPkg;
};
