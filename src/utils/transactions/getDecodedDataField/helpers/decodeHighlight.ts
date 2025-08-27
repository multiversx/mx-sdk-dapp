import { DecodeMethodEnum } from 'types/serverTransactions.types';
import { decodeByMethod } from './decodeByMethod';
import { getDecodedParts } from './getDecodedParts';

interface IDecodeHighlight {
  data: string;
  decodeMethod: DecodeMethodEnum;
  delimiter: string;
  identifier?: string;
}

export const decodeHighlight = ({
  data,
  decodeMethod,
  delimiter,
  identifier
}: IDecodeHighlight) => {
  const parts = data.split('@');

  const initialDecodedParts = parts.map((part) => {
    return decodeByMethod({ data: part, decodeMethod });
  });

  const decodedHighlight = getDecodedParts({
    parts,
    initialDecodedParts,
    identifier,
    decodeMethod
  });

  return decodedHighlight.join(delimiter);
};
