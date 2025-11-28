import type { LedgerAccountType } from 'store/slices/account/account.types';
import { emptyAccount } from 'store/slices/account/emptyAccount';
import type { AccountType } from 'types/account.types';
import type { BatchTransactionsWSResponseType } from 'types/websocket.types';
import {
  setAccount,
  setAccountNonce,
  setLedgerAccount,
  setWalletConnectAccount,
  setWebsocketBatchEvent,
  setWebsocketEvent
} from '../accountActions';

const mockSetState = jest.fn();

jest.mock('store/store', () => ({
  getStore: () => ({
    setState: mockSetState
  })
}));

const baseAddress = 'erd1qtestaddress';

const createRootState = () =>
  ({
    account: {
      address: baseAddress,
      accounts: {
        [baseAddress]: {
          address: baseAddress,
          nonce: 0
        }
      },
      ledgerAccount: null,
      walletConnectAccount: null,
      websocketEvent: null,
      websocketBatchEvent: null
    }
  }) as any;

describe('accountActions', () => {
  let rootState: ReturnType<typeof createRootState>;

  beforeEach(() => {
    rootState = createRootState();
    mockSetState.mockImplementation(
      (updater: (state: typeof rootState) => void) => updater(rootState)
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('sets account data and resets when address differs', () => {
    const account = { address: baseAddress } as AccountType;
    const anotherAccount = { address: 'erd1qother' } as AccountType;

    setAccount(account);
    expect(rootState.account.accounts[baseAddress]).toBe(account);

    setAccount(anotherAccount);
    expect(rootState.account.accounts[baseAddress]).toBe(emptyAccount);
  });

  it('updates ledger, wallet connect and nonce values', () => {
    const ledgerAccount = { address: 'ledger', index: 0 } as LedgerAccountType;

    setLedgerAccount(ledgerAccount);
    expect(rootState.account.ledgerAccount).toBe(ledgerAccount);

    setWalletConnectAccount('wc-account');
    expect(rootState.account.walletConnectAccount).toBe('wc-account');

    setAccountNonce(7);
    expect(rootState.account.accounts[baseAddress].nonce).toBe(7);
  });

  it('stores websocket events with timestamp', () => {
    const timestamp = 123456789;
    const nowSpy = jest.spyOn(Date, 'now').mockReturnValue(timestamp);
    const batchData = {
      batchId: 'batch-1',
      txHashes: ['hash-1']
    } as BatchTransactionsWSResponseType;

    setWebsocketEvent('updated');
    expect(rootState.account.websocketEvent).toEqual({
      timestamp,
      message: 'updated'
    });

    setWebsocketBatchEvent(batchData);
    expect(rootState.account.websocketBatchEvent).toEqual({
      timestamp,
      data: batchData
    });

    nowSpy.mockRestore();
  });
});
