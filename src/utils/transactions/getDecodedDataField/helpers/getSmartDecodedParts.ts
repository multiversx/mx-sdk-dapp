import { TransactionTypesEnum } from 'types/enums.types';
import { DecodeMethodEnum } from 'types/serverTransactions.types';
import { decodeByMethod } from './decodeByMethod';

interface ISmartDecodedParts {
  parts: string[];
  decodedParts: string[];
  identifier?: string;
}

export const getSmartDecodedParts = ({
  parts,
  decodedParts,
  identifier
}: ISmartDecodedParts) => {
  const smartDecodedParts = [...decodedParts];

  if (parts[0] === TransactionTypesEnum.ESDTNFTTransfer && parts[2]) {
    smartDecodedParts[2] = decodeByMethod({
      data: parts[2],
      decodeMethod: DecodeMethodEnum.decimal
    });
  }

  if (identifier === TransactionTypesEnum.ESDTNFTTransfer && parts[1]) {
    const base64Buffer = Buffer.from(String(parts[1]), 'base64');
    smartDecodedParts[1] = decodeByMethod({
      data: base64Buffer.toString('hex'),
      decodeMethod: DecodeMethodEnum.decimal
    });
  }

  return smartDecodedParts;
};
