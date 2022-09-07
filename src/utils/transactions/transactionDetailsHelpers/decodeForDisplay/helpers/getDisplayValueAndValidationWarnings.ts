import { DecodeMethodEnum } from 'types/serverTransactions.types';
import { decodeByMethod } from './decodeByMethod';
import { getHexValidationWarnings } from './getHexValidationWarnings';
import { getSmartDecodedParts } from './getSmartDecodedParts';

export const getDisplayValueAndValidationWarnings = ({
  parts,
  decodeMethod,
  identifier
}: {
  parts: string[];
  decodeMethod: DecodeMethodEnum;
  identifier?: string;
}) => {
  let validationWarnings: string[] = [];
  const initialDecodedParts = parts.map((part, index) => {
    if (
      parts.length >= 2 &&
      ((index === 0 && part.length < 64) || (index === 1 && !parts[0]))
    ) {
      const encodedDisplayValue = /[^a-z0-9]/gi.test(part);
      if (encodedDisplayValue) {
        return decodeByMethod(part, decodeMethod);
      } else {
        return part;
      }
    } else {
      const hexValidationWarnings = getHexValidationWarnings(part);
      if (hexValidationWarnings.length) {
        validationWarnings = hexValidationWarnings;
      }

      return decodeByMethod(part, decodeMethod);
    }
  });

  const decodedParts =
    decodeMethod === DecodeMethodEnum.smart
      ? getSmartDecodedParts({
          parts,
          decodedParts: initialDecodedParts,
          identifier
        })
      : initialDecodedParts;

  return { displayValue: decodedParts.join('@'), validationWarnings };
};
