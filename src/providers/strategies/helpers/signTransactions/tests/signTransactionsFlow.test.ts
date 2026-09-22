import { EventBus } from '@multiversx/sdk-dapp-ui/utils/EventBus';
import { account, testNetwork } from '__mocks__';
import { getEconomics } from 'apiCalls/economics/getEconomics';
import { Address, Transaction } from 'lib/sdkCore';
import { SignTransactionsStateManager } from 'managers/internal/SignTransactionsStateManager';
import { SignEventsEnum } from 'managers/internal/SignTransactionsStateManager/types';
import { ProviderTypeEnum } from 'providers/types/providerFactory.types';
import { providerSettingsSelector } from 'store/selectors/configSelectors';
import { ComponentFactory } from 'utils/ComponentFactory';
import { getCommonData } from '../helpers/getCommonData/getCommonData';
import { signTransactions } from '../signTransactions';

jest.mock('methods/network/getEgldLabel', () => ({
  getEgldLabel: () => testNetwork.egldLabel
}));

jest.mock('methods/account/getAccount', () => ({
  getAccount: () => account
}));

jest.mock('store/selectors/networkSelectors', () => ({
  networkSelector: () => testNetwork
}));

jest.mock('store/selectors/configSelectors', () => ({
  providerSettingsSelector: jest.fn()
}));

jest.mock('apiCalls/economics/getEconomics', () => ({
  getEconomics: jest.fn().mockResolvedValue({ price: 30 })
}));

jest.mock('../helpers/getCommonData/getCommonData', () => ({
  getCommonData: jest.fn()
}));

jest.mock('providers/helpers/accountProvider', () => ({
  getAccountProvider: () => ({ getType: () => ProviderTypeEnum.extension })
}));

jest.spyOn(ComponentFactory, 'create').mockResolvedValue({
  getEventBus: async () => new EventBus()
});

const self = Address.newFromBech32(account.address);
const destination = Address.newFromHex('22'.repeat(32));

const createMultiTransfer = () =>
  new Transaction({
    nonce: 10n,
    value: 0n,
    sender: self,
    receiver: self,
    gasLimit: 2_000_000n,
    gasPrice: 1_000_000_000n,
    chainID: 'D',
    data: new Uint8Array(
      Buffer.from(
        `MultiESDTNFTTransfer@${destination.toHex()}@02@544f4b454e2d313233343536@@01@544f4b454e2d616263646566@@02`
      )
    )
  });

const handleSign = jest.fn(async (transactions: Transaction[]) => transactions);
const guardTransactions = jest.fn(async (transactions: Transaction[]) => [
  ...transactions
]);

describe('signTransactions flow', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns no transactions for an empty input without opening the panel', async () => {
    const openUI = jest.spyOn(
      SignTransactionsStateManager.getInstance(),
      'openUI'
    );

    await expect(
      signTransactions({ transactions: [], handleSign })
    ).resolves.toEqual([]);

    expect(openUI).not.toHaveBeenCalled();
    expect(handleSign).not.toHaveBeenCalled();
  });

  describe('with the signing panel disabled', () => {
    beforeEach(() => {
      (providerSettingsSelector as jest.Mock).mockReturnValue({
        isSigningUiEnabled: false
      });
    });

    it('signs a multi-transfer once', async () => {
      const transaction = createMultiTransfer();

      const signed = await signTransactions({
        transactions: [transaction],
        handleSign,
        guardTransactions
      });

      expect(handleSign).toHaveBeenCalledTimes(1);
      expect(signed).toEqual([transaction]);
    });

    it('runs the callback before guarding', async () => {
      const replacement = createMultiTransfer();
      const callback = jest.fn().mockResolvedValue([replacement]);

      const signed = await signTransactions({
        transactions: [createMultiTransfer()],
        handleSign,
        guardTransactions,
        options: { callback }
      });

      expect(callback).toHaveBeenCalledTimes(1);
      expect(guardTransactions).toHaveBeenCalledWith([replacement]);
      expect(signed).toEqual([replacement]);
    });

    it('skips guarding when asked to', async () => {
      await signTransactions({
        transactions: [createMultiTransfer()],
        handleSign,
        guardTransactions,
        options: { skipGuardian: true }
      });

      expect(guardTransactions).not.toHaveBeenCalled();
    });
  });

  describe('with the signing panel enabled', () => {
    beforeEach(() => {
      (providerSettingsSelector as jest.Mock).mockReturnValue(null);
    });

    it('rejects when the panel is closed before the first screen is ready', async () => {
      const manager = SignTransactionsStateManager.getInstance();
      let releaseEconomics: () => void = () => {};
      (getEconomics as jest.Mock).mockImplementationOnce(
        () => new Promise((resolve) => (releaseEconomics = () => resolve({})))
      );
      (getCommonData as jest.Mock).mockResolvedValue({
        commonData: { needsSigning: true }
      });

      const signPromise = signTransactions({
        transactions: [createMultiTransfer()],
        handleSign,
        guardTransactions
      });

      await new Promise(process.nextTick);
      manager
        .getEventHandlers(SignEventsEnum.CLOSE)
        .forEach((handler) => handler());

      await expect(signPromise).rejects.toThrow(
        'Transaction signing cancelled by user'
      );

      releaseEconomics();
    });

    it('rejects and closes the panel when the first screen cannot be loaded', async () => {
      const consoleSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(() => {});
      const manager = SignTransactionsStateManager.getInstance();
      const closeUI = jest.spyOn(manager, 'closeUI');
      (getCommonData as jest.Mock).mockRejectedValue(new Error('API down'));

      await expect(
        signTransactions({
          transactions: [createMultiTransfer()],
          handleSign,
          guardTransactions
        })
      ).rejects.toThrow('API down');

      expect(closeUI).toHaveBeenCalled();
      expect(handleSign).not.toHaveBeenCalled();

      consoleSpy.mockRestore();
    });
  });
});
