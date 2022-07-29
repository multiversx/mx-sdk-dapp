import BigNumber from 'bignumber.js';
import { decimals, denomination } from 'constants/index';
import { TransactionType } from './types';
import { denominate } from 'utils';

export const getReceiptValue = (transaction: TransactionType) => {
  if (transaction?.receipt?.value) {
    if (
      transaction?.receipt?.data &&
      transaction.receipt.data === 'refundedGas'
    ) {
      const denominatedGas = denominate({
        input: transaction.receipt.value,
        denomination,
        decimals,
        showLastNonZeroDecimal: true
      });
      const gasRefunded = new BigNumber(denominatedGas)
        .times(transaction.gasPrice)
        .times(100);

      return gasRefunded.toFixed();
    }

    return transaction.receipt.value;
  }

  return '';
};

export function getReceiptMessages(transaction: TransactionType) {
  if (transaction?.receipt?.data) {
    const message = transaction.receipt.data;
    const receiptValue = getReceiptValue(transaction);
    const value = receiptValue ? `: ${receiptValue}` : '';

    return [`${message}${value}`];
  } else {
    return [];
  }
}
