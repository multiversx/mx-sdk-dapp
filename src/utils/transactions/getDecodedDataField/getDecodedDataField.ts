import { MAX_DECODE_TX_DATA_LENGTH } from 'constants/transactions.constants';
import {
  DecodeMethodEnum,
  DecodedDisplayType
} from 'types/serverTransactions.types';
import { decodeByMethod } from './helpers/decodeByMethod';
import { decodeHighlight } from './helpers/decodeHighlight';
import { getDecodedParts } from './helpers/getDecodedParts';
import { getDisplayValueAndValidationWarnings } from './helpers/getDisplayValueAndValidationWarnings';

interface IDecodedDataField {
  data: string;
  decodeMethod: DecodeMethodEnum;
  identifier?: string;
  highlight?: string | null;
}

export const getDecodedDataField = ({
  data,
  decodeMethod,
  identifier,
  highlight = null
}: IDecodedDataField): DecodedDisplayType => {
  const decodedData: DecodedDisplayType = {
    displayValue: '',
    validationWarnings: [],
    highlight
  };

  if (
    data.length > MAX_DECODE_TX_DATA_LENGTH &&
    [DecodeMethodEnum.decimal, DecodeMethodEnum.smart].includes(decodeMethod)
  ) {
    return {
      ...decodedData,
      displayValue: data
    };
  }

  const hasAt = data.includes('@');
  const hasNewLine = data.includes('\n');

  if (!hasAt && !hasNewLine) {
    return {
      ...decodedData,
      displayValue: decodeByMethod({ data, decodeMethod }),
      highlight: highlight
        ? decodeByMethod({ data: highlight, decodeMethod })
        : highlight
    };
  }

  if (hasAt) {
    const parts = data.split('@');
    const decodedParts = getDisplayValueAndValidationWarnings({
      parts,
      decodeMethod,
      identifier,
      decodedData
    });

    const decodedHighlight = highlight
      ? decodeHighlight({
          data: highlight,
          identifier,
          decodeMethod,
          delimiter: '@'
        })
      : null;

    return {
      ...decodedData,
      displayValue: decodedParts.join('@'),
      highlight: decodedHighlight
    };
  }

  if (hasNewLine) {
    const parts = data.split('\n');

    const initialDecodedParts = parts.map((part) => {
      if (decodeMethod === DecodeMethodEnum.raw) {
        return part;
      }

      return decodeByMethod({
        data: Buffer.from(part, 'base64').toString('hex'),
        decodeMethod
      });
    });

    const decodedParts = getDecodedParts({
      parts,
      initialDecodedParts,
      identifier,
      decodeMethod
    });

    const decodedHighlight = highlight
      ? decodeHighlight({
          data: highlight,
          identifier,
          decodeMethod,
          delimiter: '\n'
        })
      : null;

    return {
      ...decodedData,
      displayValue: decodedParts.join('\n'),
      highlight: decodedHighlight
    };
  }

  return decodedData;
};
