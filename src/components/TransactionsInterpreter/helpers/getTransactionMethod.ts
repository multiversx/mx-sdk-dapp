import {
  TxActionCategoryEnum,
  TxActionsEnum,
  UITransactionType
} from './types';

export const getTransactionMethod = (transaction: UITransactionType) => {
  let transactionAction = 'Transaction';
  const transactionHasAction =
    transaction.action?.name && transaction.action?.category;

  if (transactionHasAction) {
    if (
      transaction.action?.category === TxActionCategoryEnum.esdtNft &&
      transaction.action?.name === TxActionsEnum.transfer
    ) {
      transactionAction = 'Transaction';
    } else if (transaction.action) {
      transactionAction = transaction.action.name;
    }

    if (transaction.action?.arguments?.functionName) {
      transactionAction = transaction.action.arguments.functionName;
    }
  }

  return transactionAction;
};
