import {
  DecodeMethodEnum,
  DecodedDisplayType
} from 'types/serverTransactions.types';
import { getDecodedDataField } from 'utils';

export const getAllDecodedFormats = ({
  data,
  highlight,
  identifier
}: {
  data: string;
  highlight: string | null;
  identifier?: string;
}) => {
  const decodedFormats: Partial<Record<DecodeMethodEnum, DecodedDisplayType>> =
    {};

  Object.values(DecodeMethodEnum).forEach((decodeMethod) => {
    const decodedData = getDecodedDataField({
      data,
      identifier,
      decodeMethod,
      highlight
    });

    decodedFormats[decodeMethod] = decodedData;
  });

  return decodedFormats;
};
