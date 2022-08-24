import BigNumber from 'bignumber.js';
import { DIGITS, DECIMALS, REFUNDED_GAS } from 'constants/index';
import { ServerTransactionType } from 'types/serverTransactions';
import { denominate } from 'utils/operations/denominate';

const getReceiptValue = (transaction: ServerTransactionType) => {
  if (!transaction.receipt?.value) {
    return '';
  }

  if (transaction.receipt?.data === REFUNDED_GAS) {
    const denominatedGas = denominate({
      input: transaction.receipt.value,
      denomination: DECIMALS,
      decimals: DIGITS,
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
