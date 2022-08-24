import { ServerTransactionType } from 'types/serverTransactions';

export const getTransactionTokens = (transaction: ServerTransactionType) => {
  if (transaction.action) {
    return [
      transaction.action.arguments?.token,
      transaction.action.arguments?.token1,
      transaction.action.arguments?.token2,
      transaction.action.arguments?.transfers
    ].filter((x) => x != null);
  }

  return [];
};
