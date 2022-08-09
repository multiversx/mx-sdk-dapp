import BigNumber from 'bignumber.js';
import { decimals, denomination, REFUNDED_GAS } from 'constants/index';
import { TransactionType } from './types';
import { denominate } from 'utils';

export const getReceiptValue = (transaction: TransactionType) => {
  if (!transaction?.receipt?.value) {
    return '';
  }

  if (transaction?.receipt?.data === REFUNDED_GAS) {
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
};

export function getReceiptMessages(transaction: TransactionType) {
  const message = transaction?.receipt?.data;

  if (!message) {
    return [];
  }

  const receiptValue = getReceiptValue(transaction);
  const value = receiptValue ? `: ${receiptValue}` : '';

  return [`${message}${value}`];
}
