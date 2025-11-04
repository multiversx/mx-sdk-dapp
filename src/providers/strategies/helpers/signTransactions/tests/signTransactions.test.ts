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
jest.mock(
  'managers/internal/SignTransactionsStateManager/SignTransactionsStateManager',
  () => {
    return jest.requireActual(
      'managers/internal/SignTransactionsStateManager/SignTransactionsStateManager'
    );
  }
);

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

    // ensure gas price map default (mutate getter value, do not reassign)
    const gasMap = instance.getGasPriceOptionMap;
    gasMap[1345] = gasMap[1345] || {
      gasPriceOption: 1000000000,
      initialGasPrice: 1000000000
    };

    // mutate gas price map on update
    jest
      .spyOn(instance, 'updateGasPriceMap')
      .mockImplementation((...args: unknown[]) => {
        const [{ nonce, gasPriceOption }] = args as [
          { nonce: number; gasPriceOption: number }
        ];
        const map = instance.getGasPriceOptionMap;
        map[nonce] = map[nonce] || {
          initialGasPrice: gasPriceOption,
          gasPriceOption
        };
        map[nonce].gasPriceOption = gasPriceOption;
      });

    // avoid UI side-effects
    jest.spyOn(instance, 'openUI').mockResolvedValue(undefined);
    jest.spyOn(instance, 'closeUI').mockImplementation(() => {});
  });

  const startAndGetSubscribed = async () => {
    const signPromise = signTransactions({
      ...mockSignTransactionsInputData,
      handleSign: mockHandleSign
    });
    const {
      SignTransactionsStateManager
    } = require('managers/internal/SignTransactionsStateManager/SignTransactionsStateManager');
    const subscriptions = SignTransactionsStateManager.getInstance()
      .subscribeToEventBus as jest.Mock;

    // allow async setup to register subscriptions
    await new Promise((resolve) => setTimeout(resolve));

    return { signPromise, subscriptions };
  };

  it('should sign a single transaction', async () => {
    const { signPromise, subscriptions } = await startAndGetSubscribed();

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
    const { signPromise, subscriptions } = await startAndGetSubscribed();

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
