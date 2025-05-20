import {
  ServerTransactionType,
  TokenArgumentType
} from 'types/serverTransactions.types';

export const getTransactionTokens = (
  transaction: ServerTransactionType
): TokenArgumentType[] => {
  if (transaction.action) {
    const merged = [
      transaction.action.arguments?.token,
      transaction.action.arguments?.token1,
      transaction.action.arguments?.token2,
      transaction.action.arguments?.transfers // array of tokens
    ].filter((x) => x != null);

    return [].concat(...merged);
  }

  return [];
};
