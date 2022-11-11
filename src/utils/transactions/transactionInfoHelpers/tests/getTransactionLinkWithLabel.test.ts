import { ServerTransactionType, TransactionDirectionEnum } from 'types';
import { getInterpretedTransaction } from 'utils/transactions/getInterpretedTransaction';
import { transactionMock } from '../../getInterpretedTransaction/tests/extended-transaction-mock';
import { getTransactionLinkWithLabel } from '../getTransactionLinkWithLabel';
const explorerAddress = 'https://testing.devnet.com';

describe('getTransactionLinkWithLabel tests', () => {
  const transaction: ServerTransactionType = {
    ...transactionMock,
    tokenIdentifier: 'token-id'
  };

  const interpretedTransaction = getInterpretedTransaction({
    transaction,
    address: 'erd1-my-address-hash',
    explorerAddress
  });

  const { link, label, address } = getTransactionLinkWithLabel({
    transaction: interpretedTransaction,
    direction: TransactionDirectionEnum.OUT
  });

  it('should return correct link', () => {
    expect(link).toStrictEqual(
      `${explorerAddress}/accounts/${transaction.receiver}`
    );

    expect(link).toStrictEqual(interpretedTransaction.links.receiverLink);
  });

  it('should return correct label', () => {
    expect(label).toStrictEqual('To:');
  });

  it('should return correct address', () => {
    expect(address).toStrictEqual(transaction.receiver);
  });
});
