import { TransactionDataTokenType } from 'types/transactions.types';

export const getHighlight = (txInfoToken?: TransactionDataTokenType) => {
  if (!txInfoToken?.multiTxData) {
    return null;
  }

  return txInfoToken.multiTxData;
};
