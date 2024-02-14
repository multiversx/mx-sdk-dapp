import { emptyAccount } from 'reduxStore/slices';
import { RootState } from 'reduxStore/store';
import { createDeepEqualSelector } from './helpers';

const privateAccountInfoSelector = (state: RootState) => state.account;

export const addressSelector = createDeepEqualSelector(
  privateAccountInfoSelector,
  (state) => state.address
);

export const accountSelector = createDeepEqualSelector(
  privateAccountInfoSelector,
  addressSelector,
  (state, address) =>
    address in state.accounts ? state.accounts[address] : emptyAccount
);

// accounts object will not be public
export const accountInfoSelector = createDeepEqualSelector(
  privateAccountInfoSelector,
  accountSelector,
  (state, account) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { accounts, ...info } = state;
    return { ...info, account };
  }
);

export const accountBalanceSelector = createDeepEqualSelector(
  accountSelector,
  (account) => account.balance
);

export const accountNonceSelector = createDeepEqualSelector(
  accountSelector,
  (state) => state?.nonce?.valueOf() || 0
);

export const shardSelector = createDeepEqualSelector(
  privateAccountInfoSelector,
  (state) => state.shard
);

export const ledgerAccountSelector = createDeepEqualSelector(
  privateAccountInfoSelector,
  (state) => state.ledgerAccount
);

export const walletConnectAccountSelector = createDeepEqualSelector(
  privateAccountInfoSelector,
  (state) => state.walletConnectAccount
);

export const isAccountLoadingSelector = createDeepEqualSelector(
  privateAccountInfoSelector,
  (state) => state.isAccountLoading
);

export const isAccountLoadingErrorSelector = createDeepEqualSelector(
  privateAccountInfoSelector,
  (state) => state.accountLoadingError
);

export const websocketEventSelector = createDeepEqualSelector(
  privateAccountInfoSelector,
  (state) => state.websocketEvent
);

export const websocketBatchEventSelector = createDeepEqualSelector(
  privateAccountInfoSelector,
  (state) => state.websocketBatchEvent
);
