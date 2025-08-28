import { DecodeMethodEnum } from 'types/serverTransactions.types';
import { getSmartDecodedParts } from './getSmartDecodedParts';

interface IGetDecodedParts {
  parts: string[];
  decodeMethod: DecodeMethodEnum;
  initialDecodedParts: string[];
  identifier?: string;
}

export const getDecodedParts = ({
  parts,
  decodeMethod,
  identifier,
  initialDecodedParts
}: IGetDecodedParts) => {
  if (decodeMethod === DecodeMethodEnum.smart) {
    return getSmartDecodedParts({
      parts,
      decodedParts: initialDecodedParts,
      identifier
    });
  }

  return initialDecodedParts;
};
