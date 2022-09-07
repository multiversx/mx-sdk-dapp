import { DecodeMethodEnum } from 'types/serverTransactions.types';
import { decodeByMethod } from './helpers/decodeByMethod';
import { getDisplayValueAndValidationWarnings } from './helpers/getDisplayValueAndValidationWarnings';
import { getSmartDecodedParts } from './helpers/getSmartDecodedParts';

export const decodeForDisplay = ({
  input,
  decodeMethod,
  identifier
}: {
  input: string;
  decodeMethod: DecodeMethodEnum;
  identifier?: string;
}) => {
  let display: {
    displayValue: string;
    validationWarnings: string[];
  } = {
    displayValue: '',
    validationWarnings: []
  };

  const mustBedecoded = input.includes('@') || input.includes('\n');

  if (!mustBedecoded) {
    display.displayValue = decodeByMethod(input, decodeMethod);
    return display;
  }

  if (input.includes('@')) {
    const parts = input.split('@');
    display = getDisplayValueAndValidationWarnings({
      parts,
      decodeMethod,
      identifier
    });
  }

  if (input.includes('\n')) {
    const parts = input.split('\n');
    const initialDecodedParts = parts.map((part) => {
      const base64Buffer = Buffer.from(String(part), 'base64');
      if (decodeMethod === DecodeMethodEnum.raw) {
        return part;
      } else {
        return decodeByMethod(base64Buffer.toString('hex'), decodeMethod);
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

    display.displayValue = decodedParts.join('\n');
  }

  return display;
};
