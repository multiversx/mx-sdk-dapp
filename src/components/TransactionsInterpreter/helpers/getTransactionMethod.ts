import {
  TxActionCategoryEnum,
  TxActionsEnum,
  UITransactionType
} from './types';

const getTransactionMethod = (transaction: UITransactionType) => {
  let transactionAction = 'Transaction';
  if (
    transaction.action &&
    transaction.action.name &&
    transaction.action.category
  ) {
    if (
      transaction.action.category === TxActionCategoryEnum.esdtNft &&
      transaction.action.name === TxActionsEnum.transfer
    ) {
      transactionAction = 'Transaction';
    } else {
      transactionAction = transaction.action.name;
    }

    if (transaction.action.arguments?.functionName) {
      transactionAction = transaction.action.arguments?.functionName;
    }
  }

  return transactionAction;
};

export default getTransactionMethod;
