import BigNumber from 'bignumber.js';
import { decimals, denomination, REFUNDED_GAS } from 'constants/index';
import { ServerTransactionType } from 'types/server-transactions';
import { denominate } from 'utils/operations/denominate';

const getReceiptValue = (transaction: ServerTransactionType) => {
  if (!transaction.receipt?.value) {
    return '';
  }

  if (transaction.receipt?.data === REFUNDED_GAS) {
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

export function getReceiptMessage(transaction: ServerTransactionType) {
  const message = transaction.receipt?.data;

  if (!message) {
    return '';
  }

  const receiptValue = getReceiptValue(transaction);
  const value = receiptValue ? `: ${receiptValue}` : '';

  return `${message}${value}`;
}
