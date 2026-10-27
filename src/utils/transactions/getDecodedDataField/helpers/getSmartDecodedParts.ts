import { ESDTTransferTypesEnum } from 'types/enums.types';
import { DecodeMethodEnum } from 'types/serverTransactions.types';
import { decodeByMethod } from './decodeByMethod';

interface ISmartDecodedParts {
  parts: string[];
  decodedParts: string[];
  identifier?: string;
}

const HEX_REGEX = /^[0-9a-f]+$/i;

const getNumericIndexes = (parts: string[]): number[] => {
  switch (parts[0]) {
    case ESDTTransferTypesEnum.ESDTTransfer:
    case ESDTTransferTypesEnum.ESDTLocalMint:
    case ESDTTransferTypesEnum.ESDTLocalBurn:
      return [2];
    case ESDTTransferTypesEnum.ESDTNFTTransfer:
    case ESDTTransferTypesEnum.ESDTNFTBurn:
    case ESDTTransferTypesEnum.ESDTNFTAddQuantity:
      return [2, 3];
    case ESDTTransferTypesEnum.MultiESDTNFTTransfer: {
      const indexes = [2];
      const count = parseInt(parts[2] ?? '', 16);

      if (!Number.isSafeInteger(count)) {
        return indexes;
      }

      for (let i = 0; i < count && 5 + 3 * i < parts.length; i++) {
        indexes.push(4 + 3 * i, 5 + 3 * i);
      }

      return indexes;
    }
    default:
      return [];
  }
};

export const getSmartDecodedParts = ({
  parts,
  decodedParts,
  identifier
}: ISmartDecodedParts) => {
  const smartDecodedParts = [...decodedParts];

  getNumericIndexes(parts).forEach((index) => {
    if (parts[index] && HEX_REGEX.test(parts[index])) {
      smartDecodedParts[index] = decodeByMethod({
        data: parts[index],
        decodeMethod: DecodeMethodEnum.decimal
      });
    }
  });

  if (identifier === ESDTTransferTypesEnum.ESDTNFTTransfer && parts[1]) {
    const base64Buffer = Buffer.from(String(parts[1]), 'base64');
    smartDecodedParts[1] = decodeByMethod({
      data: base64Buffer.toString('hex'),
      decodeMethod: DecodeMethodEnum.decimal
    });
  }

  return smartDecodedParts;
};
