import { testAddress } from '__mocks__';
import { account } from '__mocks__/data';
import { getPersistedTokenDetails } from 'apiCalls/tokens/getPersistedTokenDetails';
import { AssetType } from 'types/account.types';
import { TransactionServerStatusesEnum } from 'types/enums.types';
import {
  ServerTransactionType,
  TokenArgumentType,
  TransactionActionsEnum,
  TransactionActionType,
  TransactionDirectionEnum,
  TransferTypeEnum
} from 'types/serverTransactions.types';
import { NftEnumType } from 'types/tokens.types';
import { timeAgo } from 'utils/operations/timeRemaining';
import { getShardText } from 'utils/transactions/getInterpretedTransaction/helpers/getShardText';
import { TransactionsTableController } from '../TransactionsTableController';

jest.mock('apiCalls/tokens/getPersistedTokenDetails', () => ({
  getPersistedTokenDetails: jest.fn()
}));

jest.mock('utils/operations/timeRemaining', () => ({
  ...jest.requireActual('utils/operations/timeRemaining'),
  timeAgo: jest.fn()
}));

const mockTransactionBase: ServerTransactionType = {
  txHash: 'tx1',
  tokenIdentifier: 'TEST-123',
  sender: testAddress,
  receiver: account.address,
  senderShard: 0,
  receiverShard: 0,
  value: '1000000000000000000',
  data: '',
  timestamp: Math.floor(Date.now() / 1000) - 300,
  action: {
    name: TransactionActionsEnum.transfer,
    description: 'Token transfer',
    category: 'esdtNft',
    arguments: {}
  } as TransactionActionType,
  gasLimit: 50_000,
  gasPrice: 1_000_000_000,
  gasUsed: 45_000,
  miniBlockHash: 'miniBlockHash123',
  nonce: 1,
  round: 1,
  signature: 'signature123',
  status: TransactionServerStatusesEnum.success,
  price: 0,
  type: TransferTypeEnum.Transaction,
  fee: '1000000000',
  inTransit: false,
  results: [],
  operations: [],
  logs: {
    id: 'log1',
    address: 'erd1qqq...contract',
    events: []
  },
  scamInfo: undefined,
  pendingResults: false,
  receipt: {
    value: '0',
    sender: '',
    data: ''
  },
  senderAssets: {
    name: 'Sender',
    description: 'Test sender account'
  } as AssetType,
  receiverAssets: {
    name: 'Receiver',
    description: 'Test receiver account'
  } as AssetType
};

const mockParams = {
  address: 'erd1qqq...test',
  egldLabel: 'EGLD',
  explorerAddress: 'https://explorer.example.com',
  transactions: [mockTransactionBase]
};

describe('TransactionsTableController', () => {
  it('should handle locked accounts', async () => {
    (getPersistedTokenDetails as jest.Mock).mockResolvedValue({
      assets: {
        lockedAccounts: {
          senderLocked: testAddress,
          receiverLocked: account.address
        }
      }
    });

    const [result] =
      await TransactionsTableController.processTransactions(mockParams);

    expect(result.sender.isTokenLocked).toBe(true);
    expect(result.receiver.isTokenLocked).toBe(true);
  });

  it('should format transaction values correctly', async () => {
    const [result] =
      await TransactionsTableController.processTransactions(mockParams);

    expect(result.value.valueInteger).toBe('1');
    expect(result.value.valueDecimal).toBe('.00');
    expect(result.value.egldLabel).toBe('EGLD');
  });

  it('should generate proper shard text', async () => {
    const [result] =
      await TransactionsTableController.processTransactions(mockParams);

    expect(result.sender.shard).toBe(getShardText(0));
    expect(result.receiver.shard).toBe(getShardText(0));
  });

  it('should detect contract addresses', async () => {
    const contractAddress =
      'erd1qqqqqqqqqqqqqpgqv9gxgq8nurz754spjfck6rdwlg9etpcp0n4sjg2dhc';

    const transactions = [
      {
        ...mockTransactionBase,
        sender: contractAddress,
        receiver: contractAddress
      }
    ];

    const [result] = await TransactionsTableController.processTransactions({
      ...mockParams,
      transactions
    });

    expect(result.sender.isContract).toBe(true);
    expect(result.receiver.isContract).toBe(true);
  });

  it('should handle concurrent transaction processing', async () => {
    const transactions = Array(10)
      .fill(null)
      .map((_, i) => ({
        ...mockTransactionBase,
        txHash: `tx${i}`,
        tokenIdentifier: `TOKEN-${i}`
      }));

    (getPersistedTokenDetails as jest.Mock).mockImplementation(() =>
      Promise.resolve({
        assets: {
          lockedAccounts: {
            senderLocked: testAddress
          }
        }
      })
    );

    const results = await TransactionsTableController.processTransactions({
      ...mockParams,
      transactions
    });

    expect(results).toHaveLength(10);
    expect(results.every((tx) => tx.sender.isTokenLocked)).toBe(true);
  });

  it('should handle network failures when fetching token details', async () => {
    (getPersistedTokenDetails as jest.Mock).mockRejectedValue('Network error');

    await expect(
      TransactionsTableController.processTransactions(mockParams)
    ).resolves.not.toThrow();

    const [result] =
      await TransactionsTableController.processTransactions(mockParams);

    expect(result.sender.isTokenLocked).toBe(false);
  });

  it('should handle metachain shard IDs', async () => {
    const METACHAIN_SHARD_ID = 4294967295;
    const transactions = [
      {
        ...mockTransactionBase,
        senderShard: METACHAIN_SHARD_ID,
        receiverShard: METACHAIN_SHARD_ID
      }
    ];

    const [result] = await TransactionsTableController.processTransactions({
      ...mockParams,
      transactions
    });

    expect(result.sender.shard).toBe('Metachain');
    expect(result.receiver.shard).toBe('Metachain');
  });

  it('should handle zero-value transactions', async () => {
    const transactions = [
      {
        ...mockTransactionBase,
        value: '0'
      }
    ];

    const [result] = await TransactionsTableController.processTransactions({
      ...mockParams,
      transactions
    });

    expect(result.value.valueInteger).toBe('0');
    expect(result.value.valueDecimal).toBe('.00');
  });

  it('should handle different NFT types', async () => {
    const mockTokenArgument: TokenArgumentType = {
      type: NftEnumType.NonFungibleESDT,
      name: 'Elrond Apes',
      ticker: 'EAPES',
      collection: 'EAPES-123456',
      identifier: 'EAPES-123456-01',
      token: 'EAPES-123456-01',
      decimals: 0,
      value: '1',
      providerName: 'ElrondApes',
      providerAvatar: 'https://example.com/elrondapes-avatar.png',
      svgUrl: 'https://example.com/eapes/01.svg',
      valueUSD: '250.00'
    };

    const transactions: ServerTransactionType[] = [
      {
        ...mockTransactionBase,
        action: {
          ...mockTransactionBase.action,
          arguments: {
            token: mockTokenArgument
          }
        } as TransactionActionType
      }
    ];

    const [result] = await TransactionsTableController.processTransactions({
      ...mockParams,
      transactions
    });

    expect(result.value.badge).toBeDefined();
  });

  it('should handle malformed token details response', async () => {
    (getPersistedTokenDetails as jest.Mock).mockResolvedValue({
      invalid: 'response'
    });

    const [result] =
      await TransactionsTableController.processTransactions(mockParams);
    expect(result.sender.isTokenLocked).toBe(false);
  });

  it('should handle time-sensitive transactions near midnight', async () => {
    const timeAgoMock = {
      timeAgo: '13 days',
      tooltip: 'Feb 06, 2025 00:00:00 AM UTC'
    };

    (timeAgo as jest.Mock).mockReturnValue(timeAgoMock.timeAgo);

    const nearMidnightTransaction = {
      ...mockTransactionBase,
      timestamp: 1738800000 // Exact midnight in some timezone
    };

    const [result] = await TransactionsTableController.processTransactions({
      ...mockParams,
      transactions: [nearMidnightTransaction]
    });

    expect(result.age).toEqual(timeAgoMock);
  });

  it('should handle missing token ID', async () => {
    const transactions = [
      {
        ...mockTransactionBase,
        tokenIdentifier: undefined
      }
    ];

    const [result] = await TransactionsTableController.processTransactions({
      ...mockParams,
      transactions
    });

    expect(result.sender.isTokenLocked).toBe(false);
    expect(result.receiver.isTokenLocked).toBe(false);
  });

  it('should handle empty locked accounts', async () => {
    (getPersistedTokenDetails as jest.Mock).mockResolvedValue({
      assets: { lockedAccounts: null }
    });

    const [result] =
      await TransactionsTableController.processTransactions(mockParams);
    expect(result.sender.isTokenLocked).toBe(false);
    expect(result.receiver.isTokenLocked).toBe(false);
  });

  it('should handle different transaction directions', async () => {
    const testCases = [
      {
        sender: 'erd1qqq...test',
        receiver: 'erd1qqq...other',
        expectedDirection: TransactionDirectionEnum.OUT
      },
      {
        sender: 'erd1qqq...other',
        receiver: 'erd1qqq...test',
        expectedDirection: TransactionDirectionEnum.IN
      },
      {
        sender: 'erd1qqq...test',
        receiver: 'erd1qqq...test',
        expectedDirection: TransactionDirectionEnum.SELF
      }
    ];

    for (const { sender, receiver, expectedDirection } of testCases) {
      const transactions: ServerTransactionType[] = [
        {
          ...mockTransactionBase,
          sender,
          receiver
        }
      ];

      const [result] = await TransactionsTableController.processTransactions({
        ...mockParams,
        address: 'erd1qqq...test',
        transactions
      });

      expect(result.direction).toBe(expectedDirection);
    }
  });

  it('should handle MetaESDT tokens', async () => {
    (getPersistedTokenDetails as jest.Mock).mockResolvedValue({
      assets: {
        lockedAccounts: {},
        token: {
          type: NftEnumType.MetaESDT
        }
      }
    });

    const [result] =
      await TransactionsTableController.processTransactions(mockParams);
    expect(result.value.badge).toBeUndefined();
  });
});
