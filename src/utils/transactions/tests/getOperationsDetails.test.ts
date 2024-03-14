import { testAddress, testReceiver } from '__mocks__';
import {
  HiddenTransactionOperationType,
  InterpretedTransactionType,
  TransactionActionsEnum,
  TransactionOperationActionTypeEnum,
  VisibleTransactionOperationType
} from 'types';
import { NftEnumType } from 'types/tokens.types';
import { getOperationsDetails } from '../getOperationsDetails';

const TRANSACTION: InterpretedTransactionType = {
  txHash: 'f6e4f89f693ba8da573b448ea89a295aa4f2db8f3160019a7b3e25b852bdfcf0',
  gasLimit: 62800000,
  gasPrice: 1000000000,
  gasUsed: 41562941,
  miniBlockHash:
    'e701717634203ff12f98ec5449974f9a27591d35a717aa1bc084f7deab9af5ff',
  nonce: 34,
  receiver: testReceiver,
  receiverShard: 1,
  round: 2419148,
  sender: testAddress,
  senderShard: 1,
  signature:
    'c9b5d9156f22bfa370d66374f4508e5b987b5f94487df6e81083e608f89d37f31b1f3bfa3a6b41ff7e2d8b21c69737d31bef3f26c17dd3b4efe9afecea349205',
  status: 'success',
  value: '0',
  fee: '582444410000000',
  timestamp: 1708514888,
  data: 'YnV5Q2FyZHNAMDFAMDFANTQwYTc3ODE4ODcxMDQyZDU1MDE5YzE3NTMwMjZkM2U3MTQzNDJhNDE1YjA2ZjYwMTFmMGU4MDgzNDI3ZjA1Nw==',
  function: 'buyCards',
  action: {
    category: 'scCall',
    name: TransactionActionsEnum.transfer
  },
  results: [
    {
      hash: '69fb01546ef00577bd2fa3aa07be315f1c52bd975a77bc343f23ab6eb7f5bbcb',
      timestamp: 1708514888,
      nonce: 35,
      gasLimit: 0,
      gasPrice: 1000000000,
      value: '212370590000000',
      sender: testAddress,
      receiver: testReceiver,
      data: 'QDZmNmJAMDAwMDAwMDEwMDAwMDAwZDQ3NDU0ZTJkMzAzNzYyNjYzNzY2MmQzMzM0MDAwMDAwMDAwMDAwMDBhOTAwMDAwMDI0MzE2NTY1NjQzMDYxMzkzNjJkMzczODMyMzUyZDM2MzgzMzMwMmQzOTYzMzMzNjJkNjUzOTM0MzY2MTM5Mzg2NjY2MzEzODM0MDAwMDAwMDc0YzY5NmQ2OTc0NjU2NDAwMDAwMDAwNjVkNWRlNDgwMDAwMDAwMTAwMDAwMDA1MDAwMDAwMGQ0NzQ1NGUyZDMwMzc2MjY2Mzc2NjJkMzMzNTAwMDAwMDAwMDAwMDAwN2QwMDAwMDAyNDMxNjU2NTY0MzA2MTM5MzYyZDM3MzgzMjM1MmQzNjM4MzMzMDJkMzk2MzMzMzYyZDY1MzkzNDM2NjEzOTM4NjY2NjMxMzgzNDAwMDAwMDA3NGM2OTZkNjk3NDY1NjQwMDAwMDAwMDY1ZDVkZTQ4MDAwMDAwMGQ0NzQ1NGUyZDMwMzc2MjY2Mzc2NjJkMzMzNjAwMDAwMDAwMDAwMDAwZDEwMDAwMDAyNDMxNjU2NTY0MzA2MTM5MzYyZDM3MzgzMjM1MmQzNjM4MzMzMDJkMzk2MzMzMzYyZDY1MzkzNDM2NjEzOTM4NjY2NjMxMzgzNDAwMDAwMDA3NGM2OTZkNjk3NDY1NjQwMDAwMDAwMDY1ZDVkZTQ4MDAwMDAwMGQ0NzQ1NGUyZDMwMzc2MjY2Mzc2NjJkMzMzNzAwMDAwMDAwMDAwMDAwMmQwMDAwMDAyNDMxNjU2NTY0MzA2MTM5MzYyZDM3MzgzMjM1MmQzNjM4MzMzMDJkMzk2MzMzMzYyZDY1MzkzNDM2NjEzOTM4NjY2NjMxMzgzNDAwMDAwMDA3NGM2OTZkNjk3NDY1NjQwMDAwMDAwMDY1ZDVkZTQ4MDAwMDAwMGQ0NzQ1NGUyZDMwMzc2MjY2Mzc2NjJkMzMzODAwMDAwMDAwMDAwMDAwMTMwMDAwMDAyNDMxNjU2NTY0MzA2MTM5MzYyZDM3MzgzMjM1MmQzNjM4MzMzMDJkMzk2MzMzMzYyZDY1MzkzNDM2NjEzOTM4NjY2NjMxMzgzNDAwMDAwMDA0NTI2MTcyNjUwMDAwMDAwMDY1ZDVkZTQ4MDAwMDAwMGQ0NzQ1NGUyZDMwMzc2MjY2Mzc2NjJkMzMzOTAwMDAwMDAwMDAwMDAwYWEwMDAwMDAyNDMxNjU2NTY0MzA2MTM5MzYyZDM3MzgzMjM1MmQzNjM4MzMzMDJkMzk2MzMzMzYyZDY1MzkzNDM2NjEzOTM4NjY2NjMxMzgzNDAwMDAwMDA0NTI2MTcyNjUwMDAwMDAwMDY1ZDVkZTQ4MDAwMDAwOGM2ODc0NzQ3MDczM2EyZjJmNjM2OTM0MzMzMTMwMzAyZDY0NmY2Mzc1NmQ2NTZlNzQyZDczNjU3Mjc2Njk2MzY1MmQ2NzY1NmU2NTdhNzk3MzJkNjQ2ZjYzNzU2ZDY1NmU3NDczMmQ2Mjc1NjM2YjY1NzQyZTczMzMyZTY1NzUyZDc3NjU3Mzc0MmQzMzJlNjE2ZDYxN2E2ZjZlNjE3NzczMmU2MzZmNmQyZjMxNjU2NTY0MzA2MTM5MzcyZDMwMzIzNDM5MmQzNjM0MzgzMDJkMzQzNjMzMzgyZDMwMzYzNDM1NjQzMzM2MzQ2MjM5MzkzMDJmNDM2MTcyNjQ0ZDY1NzQ2MTY0NjE3NDYxNDk2ZDYxNjc2NTJmMDAwMDAwOGI2ODc0NzQ3MDczM2EyZjJmNjM2OTM0MzMzMTMwMzAyZDY0NmY2Mzc1NmQ2NTZlNzQyZDczNjU3Mjc2Njk2MzY1MmQ2NzY1NmU2NTdhNzk3MzJkNjQ2ZjYzNzU2ZDY1NmU3NDczMmQ2Mjc1NjM2YjY1NzQyZTczMzMyZTY1NzUyZDc3NjU3Mzc0MmQzMzJlNjE2ZDYxN2E2ZjZlNjE3NzczMmU2MzZmNmQyZjMxNjU2NTY0MzA2MTM5MzcyZDMwMzIzNDM5MmQzNjM0MzgzMDJkMzQzNjMzMzgyZDMwMzYzNDM1NjQzMzM2MzQ2MjM5MzkzMDJmNDM2MTcyNjQ0ZDY1NzQ2MTY0NjE3NDYxNGE3MzZmNmUyZg==',
      prevTxHash:
        'f6e4f89f693ba8da573b448ea89a295aa4f2db8f3160019a7b3e25b852bdfcf0',
      originalTxHash:
        'f6e4f89f693ba8da573b448ea89a295aa4f2db8f3160019a7b3e25b852bdfcf0',
      callType: '0',
      miniBlockHash:
        'f02e34e2a2e90990141ddf8c3e9fc478f37368d90248931a7e7213f3000a1807',
      function: 'transfer'
    },
    {
      hash: 'b7abcad8ab36164730affb48bdacf6c737ce5232494ea8b8ca96aaf1d9fa9fb9',
      timestamp: 1708514888,
      nonce: 1,
      gasLimit: 0,
      gasPrice: 1000000000,
      value: '0',
      sender: testAddress,
      receiver: testReceiver,
      data: 'TXVsdGlFU0RUTkZUVHJhbnNmZXJANTQwYTc3ODE4ODcxMDQyZDU1MDE5YzE3NTMwMjZkM2U3MTQzNDJhNDE1YjA2ZjYwMTFmMGU4MDgzNDI3ZjA1N0AwNUA0NzQ1NGUyZDMwMzc2MjY2Mzc2NkAzNUAwMUA0NzQ1NGUyZDMwMzc2MjY2Mzc2NkAzNkAwMUA0NzQ1NGUyZDMwMzc2MjY2Mzc2NkAzN0AwMUA0NzQ1NGUyZDMwMzc2MjY2Mzc2NkAzOEAwMUA0NzQ1NGUyZDMwMzc2MjY2Mzc2NkAzOUAwMQ==',
      prevTxHash:
        'f6e4f89f693ba8da573b448ea89a295aa4f2db8f3160019a7b3e25b852bdfcf0',
      originalTxHash:
        'f6e4f89f693ba8da573b448ea89a295aa4f2db8f3160019a7b3e25b852bdfcf0',
      callType: '0',
      miniBlockHash:
        'f02e34e2a2e90990141ddf8c3e9fc478f37368d90248931a7e7213f3000a1807',
      function: 'MultiESDTNFTTransfer'
    },
    {
      hash: '62688728fd2f3bcb6ae6b96e63edf2789ab7dbbbfe46bb226d280c31899c538d',
      timestamp: 1708514888,
      nonce: 0,
      gasLimit: 0,
      gasPrice: 1000000000,
      value: '0',
      sender: testAddress,
      receiver: testReceiver,
      data: 'RVNEVE5GVFRyYW5zZmVyQDQ3NDU0ZTJkMzAzNzYyNjYzNzY2QDM0QDAxQDU0MGE3NzgxODg3MTA0MmQ1NTAxOWMxNzUzMDI2ZDNlNzE0MzQyYTQxNWIwNmY2MDExZjBlODA4MzQyN2YwNTc=',
      prevTxHash:
        'f6e4f89f693ba8da573b448ea89a295aa4f2db8f3160019a7b3e25b852bdfcf0',
      originalTxHash:
        'f6e4f89f693ba8da573b448ea89a295aa4f2db8f3160019a7b3e25b852bdfcf0',
      callType: '0',
      miniBlockHash:
        'f02e34e2a2e90990141ddf8c3e9fc478f37368d90248931a7e7213f3000a1807',
      function: 'ESDTNFTTransfer'
    }
  ],
  price: 57.31,
  logs: {
    id: 'f6e4f89f693ba8da573b448ea89a295aa4f2db8f3160019a7b3e25b852bdfcf0',
    address: testAddress,
    events: []
  },
  operations: [
    {
      id: 'f6e4f89f693ba8da573b448ea89a295aa4f2db8f3160019a7b3e25b852bdfcf0',
      action: TransactionOperationActionTypeEnum.create,
      type: VisibleTransactionOperationType.nft,
      esdtType: NftEnumType.NonFungibleESDT,
      collection: 'GEN-07bf7f',
      identifier: 'GEN-07bf7f-34',
      ticker: 'GEN-07bf7f',
      name: 'col 1 #52',
      sender: testAddress,
      receiver: testAddress,
      value: '1'
    },
    {
      id: 'f6e4f89f693ba8da573b448ea89a295aa4f2db8f3160019a7b3e25b852bdfcf0',
      action: TransactionOperationActionTypeEnum.transfer,
      type: VisibleTransactionOperationType.nft,
      esdtType: NftEnumType.NonFungibleESDT,
      collection: 'GEN-07bf7f',
      identifier: 'GEN-07bf7f-34',
      ticker: 'GEN-07bf7f',
      name: 'col 1 #52',
      sender: testAddress,
      receiver: testReceiver,
      value: '1'
    },
    {
      id: 'f6e4f89f693ba8da573b448ea89a295aa4f2db8f3160019a7b3e25b852bdfcf0',
      action: TransactionOperationActionTypeEnum.create,
      type: VisibleTransactionOperationType.nft,
      esdtType: NftEnumType.NonFungibleESDT,
      collection: 'GEN-07bf7f',
      identifier: 'GEN-07bf7f-35',
      ticker: 'GEN-07bf7f',
      name: 'col 1 #53',
      sender: testAddress,
      receiver: testAddress,
      value: '1'
    },
    {
      id: 'f6e4f89f693ba8da573b448ea89a295aa4f2db8f3160019a7b3e25b852bdfcf0',
      action: TransactionOperationActionTypeEnum.create,
      type: VisibleTransactionOperationType.nft,
      esdtType: NftEnumType.NonFungibleESDT,
      collection: 'GEN-07bf7f',
      identifier: 'GEN-07bf7f-36',
      ticker: 'GEN-07bf7f',
      name: 'col 1 #54',
      sender: testAddress,
      receiver: testAddress,
      value: '1'
    },
    {
      id: '6b9cd262f250c0197c679582daca50a86a552df717dabc1733fc203cd62b204f',
      action: TransactionOperationActionTypeEnum.writeLog,
      type: HiddenTransactionOperationType.log,
      sender: testAddress,
      receiver: testReceiver,
      senderAssets: {
        description: 'test transaction',
        name: 'test.elrond',
        tags: ['dns', 'username']
      },
      value: '1',
      data: '@ff2b'
    }
  ],
  transactionDetails: {
    direction: undefined,
    method: '',
    transactionTokens: [],
    isContract: undefined
  },
  links: {
    senderLink: undefined,
    receiverLink: undefined,
    senderShardLink: undefined,
    receiverShardLink: undefined,
    transactionLink: undefined
  }
};

describe('getOperationsDetails tests', () => {
  test('returns operations without hidden operation type', () => {
    expect(getOperationsDetails({ transaction: TRANSACTION }).length).toBe(4);
  });

  test('returns operations without hidden operation type and with create action type', () => {
    expect(
      getOperationsDetails({
        transaction: TRANSACTION,
        filterBy: {
          action: TransactionOperationActionTypeEnum.create
        }
      }).length
    ).toBe(3);
  });

  test('returns operations without hidden operation type and with transfer action type', () => {
    expect(
      getOperationsDetails({
        transaction: TRANSACTION,
        filterBy: {
          action: TransactionOperationActionTypeEnum.transfer
        }
      }).length
    ).toBe(1);
  });

  test('returns operations without hidden operation type and with transfer action type', () => {
    expect(
      getOperationsDetails({
        transaction: TRANSACTION,
        filterBy: {
          action: TransactionOperationActionTypeEnum.transfer,
          receiver: testReceiver
        }
      }).length
    ).toBe(1);
  });

  test('returns operations without hidden operation type and with create action type', () => {
    expect(
      getOperationsDetails({
        transaction: TRANSACTION,
        filterBy: {
          action: TransactionOperationActionTypeEnum.create,
          receiver: testReceiver
        }
      }).length
    ).toBe(0);
  });

  test('returns operations without hidden operation type and with create action type, sender and receiver', () => {
    expect(
      getOperationsDetails({
        transaction: TRANSACTION,
        filterBy: {
          action: TransactionOperationActionTypeEnum.create,
          sender: testAddress,
          receiver: testAddress
        }
      }).length
    ).toBe(3);
  });
});
