import { UITransactionType } from './types';

export const getTransactionTokens = (transaction: UITransactionType) => {
  if (transaction.action) {
    return [
      ...(transaction.action.arguments?.token
        ? [transaction.action.arguments?.token]
        : []),
      ...(transaction.action.arguments?.token1
        ? [transaction.action.arguments?.token1]
        : []),
      ...(transaction.action.arguments?.token2
        ? [transaction.action.arguments?.token2]
        : []),
      ...(transaction.action.arguments?.transfers
        ? transaction.action.arguments?.transfers
        : [])
    ];
  }

  return [];
};
