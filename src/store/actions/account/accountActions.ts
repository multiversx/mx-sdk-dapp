import { LedgerAccountType } from 'store/slices/account/account.types';
import { emptyAccount } from 'store/slices/account/emptyAccount';
import { getStore } from 'store/store';
import { AccountType } from 'types/account.types';
import { BatchTransactionsWSResponseType } from 'types/websocket.types';

export const setAccount = (account: AccountType) => {
  getStore().setState(
    ({ account: state }) => {
      const isSameAddress = state.address === account.address;
      state.accounts = {
        [state.address]: isSameAddress ? account : emptyAccount
      };
    },
    false,
    'setAccount'
  );
};

export const setLedgerAccount = (ledgerAccount: LedgerAccountType | null) =>
  getStore().setState(
    ({ account: state }) => {
      state.ledgerAccount = ledgerAccount;
    },
    false,
    'setLedgerAccount'
  );

export const setWalletConnectAccount = (walletConnectAccount: string | null) =>
  getStore().setState(
    ({ account: state }) => {
      state.walletConnectAccount = walletConnectAccount;
    },
    false,
    'setWalletConnectAccount'
  );

export const setWebsocketEvent = (message: string) =>
  getStore().setState(
    ({ account: state }) => {
      state.websocketEvent = {
        timestamp: Date.now(),
        message
      };
    },
    false,
    'setWebsocketEvent'
  );

export const setWebsocketBatchEvent = (data: BatchTransactionsWSResponseType) =>
  getStore().setState(
    ({ account: state }) => {
      state.websocketBatchEvent = {
        timestamp: Date.now(),
        data
      };
    },
    false,
    'setWebsocketBatchEvent'
  );

export const setAccountNonce = (nonce: number) => {
  getStore().setState(
    ({ account: state }) => {
      state.accounts[state.address].nonce = nonce;
    },
    false,
    'setAccountNonce'
  );
};
