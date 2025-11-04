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
  it('should sign transactions', async () => {
    const transactionsPromise = signTransactions({
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
    const confirmCall = subscribed.mock.calls.find(([call]) =>
      call.includes('CONFIRM_SIGN_TRANSACTION')
    );

    console.log('confirmCall', confirmCall);

    const confirmHandler = confirmCall[1];
    await confirmHandler();

    const signedTransactions = await transactionsPromise;
    expect(signedTransactions.map((el) => el.toPlainObject())).toEqual(
      expect.arrayContaining([
        expect.objectContaining(mockPlainTransactionObject)
      ])
    );
  });
});
