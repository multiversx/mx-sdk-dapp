export const isHexValidCharacters = (str: string) => {
  return str.toLowerCase().match(/^[0-9a-f]+$/i);
};

export const isHexValidLength = (str: string) => {
  return str.length % 2 === 0;
};

export const getHexValidationWarnings = (str: string) => {
  const warnings = [];

  if (str && !isHexValidCharacters(str)) {
    warnings.push(`Invalid Hex characters on argument @${str}`);
  }

  if (str && !isHexValidLength(str)) {
    warnings.push(`Odd number of Hex characters on argument @${str}`);
  }

  return warnings;
};
