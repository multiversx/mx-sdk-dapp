import {
  DecodeMethodEnum,
  DecodedDisplayType
} from 'types/serverTransactions.types';
import { decodeByMethod } from './decodeByMethod';
import { getHexValidationWarnings } from './getHexValidationWarnings';
import { getSmartDecodedParts } from './getSmartDecodedParts';

interface IGetDisplayValueAndValidationWarnings {
  parts: string[];
  decodeMethod: DecodeMethodEnum;
  decodedData: DecodedDisplayType;
  identifier?: string;
}

export const getDisplayValueAndValidationWarnings = ({
  parts,
  decodeMethod,
  decodedData,
  identifier
}: IGetDisplayValueAndValidationWarnings) => {
  const initialDecodedParts = parts.map((part, index) => {
    if (
      parts.length >= 2 &&
      ((index === 0 && part.length < 64) || (index === 1 && !parts[0]))
    ) {
      const encodedDisplayValue = /[^a-z0-9]/gi.test(part);

      if (encodedDisplayValue) {
        return decodeByMethod({ data: part, decodeMethod });
      }

      return part;
    }

    const hexValidationWarnings = getHexValidationWarnings(part);

    if (hexValidationWarnings?.length) {
      decodedData.validationWarnings = Array.from(
        new Set([...decodedData.validationWarnings, ...hexValidationWarnings])
      );
    }

    return decodeByMethod({ data: part, decodeMethod });
  });

  const decodedParts =
    decodeMethod === DecodeMethodEnum.smart
      ? getSmartDecodedParts({
          parts,
          decodedParts: initialDecodedParts,
          identifier
        })
      : initialDecodedParts;

  return decodedParts;
};
