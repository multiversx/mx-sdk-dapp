import { TransactionDirectionEnum } from 'types/serverTransactions.types';
import {
  ServerTransactionType,
  TransferTypeEnum
} from 'types/serverTransactions.types';
import { getTransactionTransferType } from '../getTransactionTransferType';
import { baseTransactionMock } from './baseTransactionMock';

describe('getTransactionTransferType', () => {
  it(`returns "${TransactionDirectionEnum.INTERNAL}" when the transaction type is "${TransferTypeEnum.SmartContractResult}" `, () => {
    const transaction: ServerTransactionType = {
      ...baseTransactionMock,
      type: TransferTypeEnum.SmartContractResult
    };

    const result = getTransactionTransferType({
      address: 'address-hash',
      transaction,
      receiver: 'receiver-hash'
    });

    expect(result).toEqual(TransactionDirectionEnum.INTERNAL);
  });

  it(`returns "${TransactionDirectionEnum.SELF}" for self transfers`, () => {
    const sender = 'my-address-hash';

    const transaction: ServerTransactionType = {
      ...baseTransactionMock,
      sender
    };

    const result = getTransactionTransferType({
      address: sender,
      transaction,
      receiver: sender
    });

    expect(result).toEqual(TransactionDirectionEnum.SELF);
  });

  it(`returns "${TransactionDirectionEnum.IN}" when receive something from an address`, () => {
    const receiver = 'my-address-hash';

    const transaction: ServerTransactionType = {
      ...baseTransactionMock,
      receiver
    };

    const result = getTransactionTransferType({
      address: receiver,
      transaction,
      receiver
    });

    expect(result).toEqual(TransactionDirectionEnum.IN);
  });

  it(`returns "${TransactionDirectionEnum.OUT}" for when transfer something to an address`, () => {
    const sender = 'my-address-hash';

    const transaction: ServerTransactionType = {
      ...baseTransactionMock,
      sender
    };

    const result = getTransactionTransferType({
      address: sender,
      transaction,
      receiver: 'receiver-hash'
    });

    expect(result).toEqual(TransactionDirectionEnum.OUT);
  });
});
