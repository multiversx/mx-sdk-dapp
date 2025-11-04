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
      updateGasPriceMap: jest.fn(() => {}),
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

  it('should sign a single transaction', async () => {
    const signPromise = signTransactions({
      ...mockSignTransactionsInputData,
      handleSign: mockHandleSign
    });
    const {
      SignTransactionsStateManager
    } = require('managers/internal/SignTransactionsStateManager/SignTransactionsStateManager');
    const subscribed = SignTransactionsStateManager.getInstance()
      .subscribeToEventBus as jest.Mock;

    // allow async setup to register subscriptions
    await new Promise((resolve) => setTimeout(resolve));

    expect(subscribed).toHaveBeenCalled();
    const [_confirmAction, confirmHandler] = subscribed.mock.calls.find(
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
    const signPromise = signTransactions({
      ...mockSignTransactionsInputData,
      handleSign: mockHandleSign
    });
    const {
      SignTransactionsStateManager
    } = require('managers/internal/SignTransactionsStateManager/SignTransactionsStateManager');

    const subscribed = SignTransactionsStateManager.getInstance()
      .subscribeToEventBus as jest.Mock;

    // allow async setup to register subscriptions
    await new Promise((resolve) => setTimeout(resolve));

    expect(subscribed).toHaveBeenCalled();

    const [_setGasPriceOptionAction, setGasPriceOptionHandler] =
      subscribed.mock.calls.find(([call]) =>
        call.includes('SET_GAS_PRICE_OPTION_SIGN_TRANSACTIONS')
      );

    await setGasPriceOptionHandler(1050000000);

    const [_confirmAction, confirmHandler] = subscribed.mock.calls.find(
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
});
