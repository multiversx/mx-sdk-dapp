import BigNumber from 'bignumber.js';
import { REFUNDED_GAS } from 'constants/index';
import { DECIMALS, DIGITS, formatAmount } from 'lib/sdkDappUtils';
import { ServerTransactionType } from 'types/serverTransactions.types';

const getReceiptValue = (transaction: ServerTransactionType) => {
  if (!transaction.receipt?.value) {
    return '';
  }

  if (transaction.receipt?.data === REFUNDED_GAS) {
    const formattedGas = formatAmount({
      input: transaction.receipt.value,
      decimals: DECIMALS,
      digits: DIGITS,
      showLastNonZeroDecimal: true
    });

    const gasRefunded = new BigNumber(formattedGas)
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
