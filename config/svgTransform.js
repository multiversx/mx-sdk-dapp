const path = require('path');

/**
 * This function build module.
 *
 * Changes by https://github.com/ChromeQ:
 * - module.exports.default = ${functionName};
 * + module.exports.__esModule = true;
 * + module.exports.default = '${pathname}';
 *
 * Object props is a more extensible solution when we have a lot of props
 * @param {Object} props
 * @param {string} props.functionName
 * @param {string} props.pathname
 * @param {string} props.filename
 *
 * @function {(functionName, pathname, filename) => string} buildModule
 * @param {string} props
 * @return {string} string module
 */
const buildModule = (props) => {
  const { filename, functionName, pathname } = props;

  return {
    code: `
    const React = require('react');
    const ${functionName} = (props) =>
    {
    return React.createElement('svg', {
      ...props,
      'data-jest-file-name': '${pathname}',
      'data-jest-svg-name': '${filename}',
      'data-testid': '${filename}'
    });
    }
    module.exports.__esModule = true;
    module.exports.default = '${pathname}';
    module.exports.ReactComponent = ${functionName};
`
  };
};

/**
 * This function creates a function name
 * @function {(base) => string} createFunctionName
 * @param {string} base
 * @return {string} string module
 */
const createFunctionName = (base) => {
  const words = base.split(/\W+/);
  /* here I refactored the code a bit and replaced "substr" (Deprecated) with "substring" */
  return words.reduce(
    (identifier, word) =>
      identifier + word.substring(0, 1).toUpperCase() + word.substring(1),
    ''
  );
};

/**
 * This function process incoming svg data
 * @function {(contents, filename) => string} processSvg
 * @param {string} contents - your svg. String like "<svg viewBox="..."><path d="..."/></svg>"
 * @param {string} filename - full path of your file
 * @return {string} string module
 */
const processSvg = (contents, filename) => {
  const parts = path.parse(filename);
  if (parts.ext.toLowerCase() === '.svg') {
    const functionName = createFunctionName(parts.name);
    return buildModule({
      filename: parts.name,
      functionName,
      pathname: parts.base
    });
  }

  return contents;

  // for Jest28 it has to return an object with `code`
  // return { code: contents };
};

module.exports = { process: processSvg };
