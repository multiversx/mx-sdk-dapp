import { getTransactionTransferType } from '../getTransactionTransferType';
import { TransactionDirection, TransferType, TransferTypeEnum } from '../types';
import { baseTransactionMock } from './base-transaction-mock';

describe('getTransactionTransferType', () => {
  it(`returns "${TransactionDirection.INTERNAL}" when the transaction type is "${TransferTypeEnum.SmartContractResult}" `, () => {
    const transaction: TransferType = {
      ...baseTransactionMock,
      type: TransferTypeEnum.SmartContractResult
    };

    const result = getTransactionTransferType(
      'address-hash',
      transaction,
      'receiver-hash'
    );

    expect(result).toEqual(TransactionDirection.INTERNAL);
  });

  it(`returns "${TransactionDirection.SELF}" for self transfers`, () => {
    const sender = 'my-address-hash';

    const transaction: TransferType = {
      ...baseTransactionMock,
      sender
    };

    const result = getTransactionTransferType(sender, transaction, sender);

    expect(result).toEqual(TransactionDirection.SELF);
  });

  it(`returns "${TransactionDirection.IN}" when receive something from an address`, () => {
    const receiver = 'my-address-hash';

    const transaction: TransferType = {
      ...baseTransactionMock,
      receiver
    };

    const result = getTransactionTransferType(receiver, transaction, receiver);

    expect(result).toEqual(TransactionDirection.IN);
  });

  it(`returns "${TransactionDirection.OUT}" for when transfer something to an address`, () => {
    const sender = 'my-address-hash';

    const transaction: TransferType = {
      ...baseTransactionMock,
      sender
    };

    const result = getTransactionTransferType(
      sender,
      transaction,
      'receiver-hash'
    );

    expect(result).toEqual(TransactionDirection.OUT);
  });
});
