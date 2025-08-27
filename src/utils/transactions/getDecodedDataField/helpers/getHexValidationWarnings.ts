import { isHexValidCharacters, isHexValidLength } from 'utils/validation/hex';

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
