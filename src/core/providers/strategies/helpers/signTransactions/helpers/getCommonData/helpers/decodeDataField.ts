import { Address } from '@multiversx/sdk-core';
import BigNumber from 'bignumber.js';
import { TransactionTypesEnum } from 'types/enums.types';
import {
  DecodeMethodEnum,
  TransactionTokensType,
  DecodedDisplayType
} from 'types/serverTransactions.types';
import { isUtf8 } from 'utils/decoders';
import { addressIsValid } from 'utils/validation/addressIsValid';
import { isHexValidCharacters, isHexValidLength } from 'utils/validation/hex';

interface IGetDecodedParts {
  parts: string[];
  decodeMethod: DecodeMethodEnum;
  identifier?: string;
  decodedData: DecodedDisplayType;
}

interface ISmartDecodedParts {
  parts: string[];
  decodedParts: string[];
  identifier?: string;
}

const getHexValidationWarnings = (str: string) => {
  const warnings = [];

  if (str && !isHexValidCharacters(str)) {
    warnings.push(`Invalid Hex characters on argument @${str}`);
  }

  if (str && !isHexValidLength(str)) {
    warnings.push(`Odd number of Hex characters on argument @${str}`);
  }

  return warnings;
};

const decodeByMethod = (
  part: string,
  decodeMethod: DecodeMethodEnum | string,
  transactionTokens?: TransactionTokensType
) => {
  switch (decodeMethod) {
    case DecodeMethodEnum.text:
      try {
        return Buffer.from(part, 'hex').toString('utf8');
      } catch {
        return part;
      }

    case DecodeMethodEnum.decimal:
      return part !== '' ? new BigNumber(part, 16).toString(10) : '';
    case DecodeMethodEnum.smart:
      try {
        const bech32Encoded = Address.newFromHex(part).toString();

        if (addressIsValid(bech32Encoded)) {
          return bech32Encoded;
        }
      } catch {
        // skip
      }

      try {
        const decoded = Buffer.from(part, 'hex').toString('utf8');

        if (!isUtf8(decoded)) {
          if (transactionTokens) {
            const tokens = [
              ...transactionTokens.esdts,
              ...transactionTokens.nfts
            ];

            if (tokens.some((token) => decoded.includes(token))) {
              return decoded;
            }
          }

          const bigNumber = new BigNumber(part, 16);

          return bigNumber.isFinite() ? bigNumber.toString(10) : part;
        } else {
          return decoded;
        }
      } catch {
        return part;
      }

    case DecodeMethodEnum.raw:
    default:
      return part;
  }
};

const getSmartDecodedParts = ({
  parts,
  decodedParts,
  identifier
}: ISmartDecodedParts) => {
  const smartDecodedParts = [...decodedParts];

  if (parts[0] === TransactionTypesEnum.ESDTNFTTransfer && parts[2]) {
    smartDecodedParts[2] = decodeByMethod(parts[2], DecodeMethodEnum.decimal);
  }

  if (identifier === TransactionTypesEnum.ESDTNFTTransfer && parts[1]) {
    const base64Buffer = Buffer.from(String(parts[1]), 'base64');
    smartDecodedParts[1] = decodeByMethod(
      base64Buffer.toString('hex'),
      DecodeMethodEnum.decimal
    );
  }

  return smartDecodedParts;
};

const getDisplayValueAndValidationWarnings = ({
  parts,
  decodeMethod,
  identifier,
  decodedData
}: IGetDecodedParts) => {
  const initialDecodedParts = parts.map((part, index) => {
    if (
      parts.length >= 2 &&
      ((index === 0 && part.length < 64) || (index === 1 && !parts[0]))
    ) {
      const encodedDisplayValue = /[^a-z0-9]/gi.test(part);

      if (encodedDisplayValue) {
        return decodeByMethod(part, decodeMethod);
      }

      return part;
    }

    const hexValidationWarnings = getHexValidationWarnings(part);

    if (hexValidationWarnings?.length) {
      decodedData.validationWarnings = Array.from(
        new Set([...decodedData.validationWarnings, ...hexValidationWarnings])
      );
    }

    return decodeByMethod(part, decodeMethod);
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

const getDecodedParts = ({
  parts,
  decodeMethod,
  identifier,
  initialDecodedParts
}: {
  parts: string[];
  decodeMethod: DecodeMethodEnum;
  identifier?: string;
  initialDecodedParts: string[];
}) => {
  if (decodeMethod === DecodeMethodEnum.smart) {
    return getSmartDecodedParts({
      parts,
      decodedParts: initialDecodedParts,
      identifier
    });
  }

  return initialDecodedParts;
};

const decodeHighlight = ({
  data,
  identifier,
  decodeMethod,
  delimiter
}: {
  data: string;
  identifier?: string;
  decodeMethod: DecodeMethodEnum;
  delimiter: string;
}) => {
  const parts = data.split('@');

  const initialDecodedParts = parts.map((part) => {
    return decodeByMethod(part, decodeMethod);
  });

  const decodedHighlight = getDecodedParts({
    parts,
    initialDecodedParts,
    identifier,
    decodeMethod
  });

  return decodedHighlight.join(delimiter);
};

const decodeDataField = ({
  data,
  identifier,
  decodeMethod,
  highlight
}: {
  data: string;
  identifier?: string;
  decodeMethod: DecodeMethodEnum;
  highlight: string | null;
}): DecodedDisplayType => {
  const decodedData: DecodedDisplayType = {
    displayValue: '',
    validationWarnings: [],
    highlight
  };

  const hasAt = data.includes('@');
  const hasNewLine = data.includes('\n');

  if (!hasAt && !hasNewLine) {
    return {
      ...decodedData,
      displayValue: decodeByMethod(data, decodeMethod),
      highlight: highlight ? decodeByMethod(highlight, decodeMethod) : highlight
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

      return decodeByMethod(
        Buffer.from(part, 'base64').toString('hex'),
        decodeMethod
      );
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
    const decodedData = decodeDataField({
      data,
      identifier,
      decodeMethod,
      highlight
    });

    decodedFormats[decodeMethod] = decodedData;
  });

  return decodedFormats;
};
