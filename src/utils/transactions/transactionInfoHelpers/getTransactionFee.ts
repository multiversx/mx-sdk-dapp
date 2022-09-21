import BigNumber from 'bignumber.js';
import { InterpretedTransactionType } from 'types';

const getFee = (transaction: InterpretedTransactionType) => {
  const bNgasPrice = new BigNumber(transaction.gasPrice);
  const bNgasUsed = new BigNumber(transaction.gasUsed);
  const output = bNgasPrice.times(bNgasUsed).toString();

  return output;
};

export function getTransactionFee(transaction: InterpretedTransactionType) {
  if (transaction.fee) {
    return transaction.fee;
  }

  if (transaction.gasUsed === undefined) {
    return null;
  }

  return getFee(transaction);
}
