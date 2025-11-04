import { account, testNetwork } from '__mocks__';
import { signTransactions } from '../signTransactions';
import {
  mockPlainTransactionObject,
  mockSignTransactionsInputData
} from './mocks';

jest.mock('methods/account/getAccountInfo', () => ({
  getAccountInfo: () => ({
    account: {
      address: account.address,
      shard: account.shard
    }
  })
}));

jest.mock('methods/network/getEgldLabel', () => ({
  getEgldLabel: () => testNetwork.egldLabel
}));

jest.mock('methods/account/getAccount', () => ({
  getAccount: () => account
}));

jest.mock('store/selectors/networkSelectors', () => ({
  networkSelector: () => testNetwork
}));

const callbacks = new Map();

const mockHandleSign = jest.fn((txs) => Promise.resolve(txs));

describe('signTransactions tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    callbacks.clear();
    const {
      SignTransactionsStateManager
    } = require('managers/internal/SignTransactionsStateManager/SignTransactionsStateManager');
    const instance = SignTransactionsStateManager.getInstance();

    // capture subscriptions
    jest
      .spyOn(instance, 'subscribeToEventBus')
      .mockImplementation((...args: unknown[]) => {
        const [event, handler] = args as [string, any];
        callbacks.set(event, handler);
      });

    // avoid UI side-effects
    jest.spyOn(instance, 'openUI').mockResolvedValue(undefined);
    jest.spyOn(instance, 'closeUI').mockImplementation(() => {});
  });

  const startSigning = async () => {
    const signPromise = signTransactions({
      ...mockSignTransactionsInputData,
      handleSign: mockHandleSign
    });
    const {
      SignTransactionsStateManager
    } = require('managers/internal/SignTransactionsStateManager/SignTransactionsStateManager');
    const manager = SignTransactionsStateManager.getInstance();
    const subscriptions = manager.subscribeToEventBus as jest.Mock;

    await new Promise((r) => setTimeout(r, 10));

    return { signPromise, subscriptions };
  };

  it('should sign a single transaction', async () => {
    const { signPromise, subscriptions } = await startSigning();

    expect(subscriptions).toHaveBeenCalled();
    const [_confirmAction, confirmHandler] = subscriptions.mock.calls.find(
      ([call]) => call.includes('CONFIRM_SIGN_TRANSACTIONS')
    );

    await confirmHandler();

    const signedTransactions = await signPromise;

    expect(signedTransactions.map((el) => el.toPlainObject())).toEqual(
      expect.arrayContaining([
        expect.objectContaining(mockPlainTransactionObject)
      ])
    );
  });
  it('should sign a single transaction with a faster gas price', async () => {
    const { signPromise, subscriptions } = await startSigning();

    const fastGasPrice = 1050000000;

    const [_setGasPriceOptionAction, setGasPriceOptionHandler] =
      subscriptions.mock.calls.find(([call]) =>
        call.includes('SET_GAS_PRICE_OPTION_SIGN_TRANSACTIONS')
      );

    await setGasPriceOptionHandler(fastGasPrice);

    const [_confirmAction, confirmHandler] = subscriptions.mock.calls.find(
      ([call]) => call.includes('CONFIRM_SIGN_TRANSACTIONS')
    );

    await confirmHandler();

    const signedTransactions = await signPromise;

    const plainSignedTransactions = signedTransactions.map((el) =>
      el.toPlainObject()
    );

    expect(plainSignedTransactions).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          ...mockPlainTransactionObject,
          gasPrice: fastGasPrice
        })
      ])
    );
  });
});
