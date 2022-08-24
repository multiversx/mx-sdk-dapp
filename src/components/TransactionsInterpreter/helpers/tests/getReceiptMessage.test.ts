import BigNumber from 'bignumber.js';
import { DIGITS, DENOMINATION, REFUNDED_GAS } from 'constants/index';
import { denominate } from 'utils/operations/denominate';
import { getReceiptMessage } from '../getReceiptMessage';
import { baseTransactionMock } from './base-transaction-mock';

describe('getReceiptMessage', () => {
  it('returns empty string if no data exists on the transaction receipt field', () => {
    const transaction = {
      ...baseTransactionMock,
      receipt: undefined
    };
    const result = getReceiptMessage(transaction);

    expect(result).toEqual('');
  });

  it(`returns a message that contains the refunded gas value if the receipt data field contains ${REFUNDED_GAS}`, () => {
    const transaction = {
      ...baseTransactionMock,
      receipt: {
        data: REFUNDED_GAS,
        value: '1000',
        sender: ''
      }
    };
    const result = getReceiptMessage(transaction);
    const denominatedGas = denominate({
      input: transaction.receipt.value,
      denomination: DENOMINATION,
      decimals: DIGITS,
      showLastNonZeroDecimal: true
    });
    const gasRefunded = new BigNumber(denominatedGas)
      .times(transaction.gasPrice)
      .times(100);

    expect(result).toEqual(`${transaction.receipt.data}: ${gasRefunded}`);
  });

  it(`returns a message that contains the receipt data field value and the receipt value if the receipt data field does not contains ${REFUNDED_GAS}`, () => {
    const transaction = {
      ...baseTransactionMock,
      receipt: {
        data: '@some-data',
        value: '1000',
        sender: 'sender-hash'
      }
    };
    const result = getReceiptMessage(transaction);

    expect(result).toEqual(
      `${transaction.receipt.data}: ${transaction.receipt.value}`
    );
  });
});
