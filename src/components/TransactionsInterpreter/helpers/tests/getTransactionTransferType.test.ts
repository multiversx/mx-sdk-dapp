import {
  ServerTransactionType,
  TransferTypeEnum
} from 'types/serverTransactions';
import { getTransactionTransferType } from '../getTransactionTransferType';
import { TransactionDirectionEnum } from '../types';
import { baseTransactionMock } from './base-transaction-mock';

describe('getTransactionTransferType', () => {
  it(`returns "${TransactionDirectionEnum.INTERNAL}" when the transaction type is "${TransferTypeEnum.SmartContractResult}" `, () => {
    const transaction: ServerTransactionType = {
      ...baseTransactionMock,
      type: TransferTypeEnum.SmartContractResult
    };

    const result = getTransactionTransferType(
      'address-hash',
      transaction,
      'receiver-hash'
    );

    expect(result).toEqual(TransactionDirectionEnum.INTERNAL);
  });

  it(`returns "${TransactionDirectionEnum.SELF}" for self transfers`, () => {
    const sender = 'my-address-hash';

    const transaction: ServerTransactionType = {
      ...baseTransactionMock,
      sender
    };

    const result = getTransactionTransferType(sender, transaction, sender);

    expect(result).toEqual(TransactionDirectionEnum.SELF);
  });

  it(`returns "${TransactionDirectionEnum.IN}" when receive something from an address`, () => {
    const receiver = 'my-address-hash';

    const transaction: ServerTransactionType = {
      ...baseTransactionMock,
      receiver
    };

    const result = getTransactionTransferType(receiver, transaction, receiver);

    expect(result).toEqual(TransactionDirectionEnum.IN);
  });

  it(`returns "${TransactionDirectionEnum.OUT}" for when transfer something to an address`, () => {
    const sender = 'my-address-hash';

    const transaction: ServerTransactionType = {
      ...baseTransactionMock,
      sender
    };

    const result = getTransactionTransferType(
      sender,
      transaction,
      'receiver-hash'
    );

    expect(result).toEqual(TransactionDirectionEnum.OUT);
  });
});
