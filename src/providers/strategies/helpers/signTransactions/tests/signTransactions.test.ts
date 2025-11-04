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
    const subscribeToEventBus = jest.fn((event, handler) => {
      callbacks.set(event, handler);
    });
    const instance: any = {
      openUI: jest.fn(async () => {}),
      closeUI: jest.fn(() => {}),
      subscribeToEventBus,
      notifyDataUpdate: jest.fn(() => {}),
      initializeGasPriceMap: jest.fn(() => {}),
      updateIsLoading: jest.fn(() => {}),
      updateGasPriceMap: jest.fn(({ nonce, gasPriceOption }) => {
        if (instance.getGasPriceOptionMap[nonce]) {
          instance.getGasPriceOptionMap[nonce].gasPriceOption = gasPriceOption;
        } else {
          instance.getGasPriceOptionMap[nonce] = {
            gasPriceOption,
            initialGasPrice: gasPriceOption
          };
        }
      }),
      getGasPriceOptionMap: {
        [1345]: {
          gasPriceOption: 1000000000,
          initialGasPrice: 1000000000
        }
      },
      updateTokenTransaction: jest.fn(() => {}),
      updateNonFungibleTransaction: jest.fn(() => {}),
      updateCommonData: jest.fn(() => {})
    };

    return {
      SignTransactionsStateManager: { getInstance: () => instance }
    };
  }
);

const mockHandleSign = jest.fn((txs) => Promise.resolve(txs));

describe('signTransactions tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    callbacks.clear();
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
