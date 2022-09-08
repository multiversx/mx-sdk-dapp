import { TransactionTypesEnum } from 'types/enums.types';
import { decodeByMethod } from './decodeByMethod';

export const getSmartDecodedParts = ({
  parts,
  decodedParts,
  identifier
}: {
  parts: string[];
  decodedParts: string[];
  identifier?: string;
}) => {
  const updatedParts = [...decodedParts];

  if (parts[0] === TransactionTypesEnum.ESDTNFTTransfer && parts[2]) {
    updatedParts[2] = decodeByMethod(parts[2], 'decimal');
  }
  if (identifier === TransactionTypesEnum.ESDTNFTTransfer && parts[1]) {
    const base64Buffer = Buffer.from(String(parts[1]), 'base64');
    updatedParts[1] = decodeByMethod(base64Buffer.toString('hex'), 'decimal');
  }

  return updatedParts;
};
