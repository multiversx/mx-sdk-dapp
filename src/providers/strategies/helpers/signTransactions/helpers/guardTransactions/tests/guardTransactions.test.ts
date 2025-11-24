import { account, testAddress } from '__mocks__';
import { mockPendingTransaction } from '__mocks__/data/mockPendingTransaction';
import { network } from '__mocks__/data/storeData/network';
import { Transaction } from 'lib/sdkCore';
import { guardTransactions } from '../guardTransactions';

jest.mock('../getCrossWindowProvider', () => ({
  getCrossWindowProvider: jest.fn()
}));

jest.mock('../getTransactionsNeedGuardianSigning', () => ({
  getTransactionsNeedGuardianSigning: jest.fn()
}));

const { getCrossWindowProvider } = jest.requireMock(
  '../getCrossWindowProvider'
) as {
  getCrossWindowProvider: jest.Mock;
};

const { getTransactionsNeedGuardianSigning } = jest.requireMock(
  '../getTransactionsNeedGuardianSigning'
) as {
  getTransactionsNeedGuardianSigning: jest.Mock;
};

const mockedGetCrossWindowProvider =
  getCrossWindowProvider as jest.MockedFunction<typeof getCrossWindowProvider>;
const mockedGetTransactionsNeedGuardianSigning =
  getTransactionsNeedGuardianSigning as jest.MockedFunction<
    typeof getTransactionsNeedGuardianSigning
  >;

const { getCrossWindowProvider: actualGetCrossWindowProvider } =
  jest.requireActual('../getCrossWindowProvider');

const {
  getTransactionsNeedGuardianSigning: actualGetTransactionsNeedGuardianSigning
} = jest.requireActual('../getTransactionsNeedGuardianSigning');

jest.mock('methods/account/getAccount', () => ({
  getAccount: jest.fn()
}));

jest.mock('store/selectors/networkSelectors', () => ({
  networkSelector: jest.fn()
}));

jest.mock('store/store', () => ({
  getState: jest.fn()
}));

jest.mock('lib/sdkWebWalletCrossWindowProvider', () => ({
  CrossWindowProvider: {
    getInstance: jest.fn()
  }
}));

const { getAccount } = jest.requireMock('methods/account/getAccount') as {
  getAccount: jest.Mock;
};

const { networkSelector } = jest.requireMock(
  'store/selectors/networkSelectors'
) as {
  networkSelector: jest.Mock;
};

const { getState } = jest.requireMock('store/store') as { getState: jest.Mock };

const { CrossWindowProvider } = jest.requireMock(
  'lib/sdkWebWalletCrossWindowProvider'
) as { CrossWindowProvider: { getInstance: jest.Mock } };

const txUnsigned = Transaction.newFromPlainObject(mockPendingTransaction);
(txUnsigned as any).guardianSignature = { toString: () => '' };

const txSigned = Transaction.newFromPlainObject(mockPendingTransaction);
(txSigned as any).guardianSignature = { toString: () => 'sig' };

describe('guardTransactions helpers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockedGetCrossWindowProvider.mockReset();
    mockedGetTransactionsNeedGuardianSigning.mockReset();
    networkSelector.mockReturnValue(network);
    getState.mockReturnValue({ store: true });
    getAccount.mockReturnValue({ address: account.address, isGuarded: true });
  });

  describe('getTransactionsNeedGuardianSigning', () => {
    it('returns false when not guarded or no transactions', () => {
      expect(
        actualGetTransactionsNeedGuardianSigning({
          transactions: [],
          isGuarded: true
        })
      ).toBe(false);
      expect(
        actualGetTransactionsNeedGuardianSigning({
          transactions: [txSigned],
          isGuarded: false
        })
      ).toBe(false);
    });

    it('returns true when guarded and missing guardian signatures', () => {
      expect(
        actualGetTransactionsNeedGuardianSigning({
          transactions: [txUnsigned],
          isGuarded: true
        })
      ).toBe(true);
    });

    it('returns false when all transactions have guardian signatures', () => {
      expect(
        actualGetTransactionsNeedGuardianSigning({
          transactions: [txSigned],
          isGuarded: true
        })
      ).toBe(false);
    });
  });

  describe('getCrossWindowProvider', () => {
    it('returns provider when init succeeds', async () => {
      const setAddress = jest.fn(() => ({
        setWalletUrl: jest.fn().mockReturnThis()
      }));
      const providerMock = {
        init: jest.fn().mockResolvedValue(true),
        setAddress
      };
      CrossWindowProvider.getInstance.mockReturnValue(providerMock);

      const result = await actualGetCrossWindowProvider({
        address: testAddress,
        walletUrl: network.walletAddress
      });

      expect(providerMock.init).toHaveBeenCalled();
      expect(setAddress).toHaveBeenCalledWith(testAddress);
      expect(result).toBe(providerMock);
    });

    it('returns null and logs when init fails', async () => {
      const providerMock = {
        init: jest.fn().mockResolvedValue(false),
        setAddress: jest.fn(() => ({
          setWalletUrl: jest.fn().mockReturnThis()
        }))
      };
      CrossWindowProvider.getInstance.mockReturnValue(providerMock);
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

      const result = await actualGetCrossWindowProvider({
        address: testAddress,
        walletUrl: network.walletAddress
      });

      expect(providerMock.init).toHaveBeenCalled();
      expect(result).toBeNull();
      expect(consoleSpy).toHaveBeenCalledWith(
        'Could not initialize CrossWindowWallet Provider'
      );
      consoleSpy.mockRestore();
    });

    it('returns null when init throws', async () => {
      const error = new Error('init error');
      const providerMock = {
        init: jest.fn().mockRejectedValue(error),
        setAddress: jest.fn(() => ({
          setWalletUrl: jest.fn().mockReturnThis()
        }))
      };
      CrossWindowProvider.getInstance.mockReturnValue(providerMock);
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

      const result = await actualGetCrossWindowProvider({
        address: testAddress,
        walletUrl: network.walletAddress
      });

      expect(result).toBeNull();
      expect(consoleSpy).toHaveBeenCalledWith(
        'Unable to login to CrossWindowWallet Provider',
        error
      );
      consoleSpy.mockRestore();
    });
  });

  describe('guardTransactions', () => {
    it('returns transactions when no guardian signing is needed', async () => {
      mockedGetTransactionsNeedGuardianSigning.mockReturnValue(false);
      const result = await guardTransactions([txSigned]);
      expect(result).toEqual([txSigned]);
      expect(mockedGetCrossWindowProvider).not.toHaveBeenCalled();
    });

    it('guards transactions when guardian signing is required', async () => {
      mockedGetTransactionsNeedGuardianSigning.mockReturnValue(true);
      const guarded = [txSigned];
      const guardFn = jest.fn().mockResolvedValue(guarded);
      mockedGetCrossWindowProvider.mockResolvedValue({
        guardTransactions: guardFn
      });

      const result = await guardTransactions([txUnsigned]);

      expect(mockedGetCrossWindowProvider).toHaveBeenCalledWith({
        address: testAddress,
        walletUrl: network.walletAddress
      });
      expect(guardFn).toHaveBeenCalledWith([txUnsigned]);
      expect(result).toEqual(guarded);
    });
  });
});
