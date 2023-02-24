import { TransactionServerStatusesEnum } from 'types';
import { useGetLastPendingTransactionHash } from '../useGetLastPendingTransactionHash';
import { useGetPendingTransactions } from '../useGetPendingTransactions';

jest.mock('../useGetPendingTransactions', () => ({
  useGetPendingTransactions: jest.fn(() => [])
}));

describe('useGetLastPendingTransactionHash tests', () => {
  it('should return the hash of the last pending transaction', () => {
    const pendingTransactions = {
      '1677691844255': {
        transactions: [
          {
            hash: '5996572de1fc5df2c456602467e8cc1a446b8145ae79df8f6c670e0732ab3b04',
            status: TransactionServerStatusesEnum.pending
          },
          {
            hash: '8970fe5f5548caa994e495798ee1874b07f4ac2156d6a3a9636f450211350784',
            status: TransactionServerStatusesEnum.fail
          },
          {
            hash: 'd4d84be4aa09cf5d45f79ffed87c971e5d883e7581d31e00d585f65b2da0564d',
            status: TransactionServerStatusesEnum.pending
          }
        ]
      },
      '1677691844355': {
        transactions: [
          {
            hash: '813b7314a27b5aa4fd7e7c9565a826eca12984b620f674c756b01595b74a7ced',
            status: TransactionServerStatusesEnum.pending
          },
          {
            hash: '96f70d60de9fd2b29ea42841a507fe8b8aa0de07e9ed877c9f0fa8ec1feccc51',
            status: TransactionServerStatusesEnum.pending
          },
          {
            hash: '6f570b2e75883df0a525786bbe69da141e0e4c4fc39accac17c9819162e77fbc',
            status: TransactionServerStatusesEnum.pending
          },
          {
            hash: 'd51a4d6c74f1ab359e01dd18148f01ef64ab49162570f0b325fa35103d9784fb',
            status: TransactionServerStatusesEnum.success
          }
        ]
      },
      '1677691844155': {
        transactions: [
          {
            hash: '5e32a3f1808e7909a25381784731d6fc247325cc0a2737595129e783d50a3065',
            status: TransactionServerStatusesEnum.pending
          }
        ]
      }
    };

    (useGetPendingTransactions as jest.Mock).mockReturnValueOnce({
      hasPendingTransactions: true,
      pendingTransactions
    });
    // Tue Nov 29 2022 09:00:00 GMT+0000
    const lastTransactionHash = useGetLastPendingTransactionHash();
    expect(useGetPendingTransactions).toHaveBeenCalled();
    expect(lastTransactionHash).toStrictEqual(
      '6f570b2e75883df0a525786bbe69da141e0e4c4fc39accac17c9819162e77fbc'
    );
  });

  it('should return empty string if there are no pending transactions', () => {
    (useGetPendingTransactions as jest.Mock).mockReturnValueOnce({});

    const lastTransactionHash = useGetLastPendingTransactionHash();
    expect(useGetPendingTransactions).toHaveBeenCalled();
    expect(lastTransactionHash).toStrictEqual('');
  });
});
