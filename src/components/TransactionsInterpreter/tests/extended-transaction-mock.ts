import {
  ServerTransactionType,
  TransactionOperationActionTypeEnum,
  TxActionCategoryEnum,
  TxActionsEnum,
  VisibleTransactionOperationType
} from 'types/server-transactions';
import { baseTransactionMock } from '../helpers/tests/base-transaction-mock';

export const transactionMock: ServerTransactionType = {
  ...baseTransactionMock,
  action: {
    name: TxActionsEnum.transfer,
    category: TxActionCategoryEnum.scCall,
    arguments: {
      token: 'token',
      token1: 'token1',
      token2: 'token2',
      transfers: 'transfers',
      null: null,
      undefined: undefined
    }
  },
  receiverAssets: {
    name: 'john doe',
    description: 'description',
    iconPng: 'icon.png',
    iconSvg: 'icon.svg',
    tags: ['@tag1', '@tag2']
  },
  operations: [
    {
      name: 'send',
      type: VisibleTransactionOperationType.egld,
      action: TransactionOperationActionTypeEnum.transfer,
      esdtType: 'FungibleESDT',
      receiver:
        'erd1qqqqqqqqqqqqqpgq4gdcg0k83u7lpv4s4532w3au9y9h0vm70eqq6m8qk2',
      sender: 'erd1wh9c0sjr2xn8hzf02lwwcr4jk2s84tat9ud2kaq6zr7xzpvl9l5q8awmex',
      value: '1',
      decimals: 4,
      identifier: 'EGLD',
      message: 'message 0'
    },
    {
      name: 'send',
      type: VisibleTransactionOperationType.egld,
      action: TransactionOperationActionTypeEnum.transfer,
      esdtType: 'FungibleESDT',
      receiver:
        'erd1qqqqqqqqqqqqqpgq4gdcg0k83u7lpv4s4532w3au9y9h0vm70eqq6m8qk2',
      sender: 'erd1wh9c0sjr2xn8hzf02lwwcr4jk2s84tat9ud2kaq6zr7xzpvl9l5q8awmex',
      value: '1',
      decimals: 4,
      identifier: 'EGLD',
      message: 'message 1'
    }
  ],
  results: [
    {
      callType: '',
      value: '1',
      gasLimit: 100,
      gasPrice: 0.001,
      hash: 'tx-hash',
      nonce: 0,
      sender: 'sender-hash',
      originalTxHash: 'original-tx-hash',
      prevTxHash: 'prev-tx-hash',
      returnMessage: 'message 0'
    },
    {
      callType: '',
      value: '1',
      gasLimit: 100,
      gasPrice: 0.001,
      hash: 'tx-hash',
      nonce: 0,
      sender: 'sender-hash',
      originalTxHash: 'original-tx-hash',
      prevTxHash: 'prev-tx-hash',
      returnMessage: 'message 1'
    }
  ],
  receipt: {
    data: '@some-data',
    value: '1000',
    sender: 'sender-hash'
  }
};
