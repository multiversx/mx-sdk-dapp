import { testAddress } from '__mocks__/accountConfig';
import { AccountSliceType } from 'store/slices/account/account.types';

export const account: AccountSliceType = {
  address: testAddress,
  websocketEvent: {
    timestamp: 1759393606037,
    message: 'transactionCompleted'
  },
  websocketBatchEvent: null,
  accounts: {
    [testAddress]: {
      address: testAddress,
      balance: '18998263560000000000',
      nonce: 18,
      timestamp: 0,
      shard: 0,
      developerReward: '0',
      isGuarded: false,
      txCount: 0,
      scrCount: 0,
      claimableRewards: '0'
    }
  },
  ledgerAccount: null,
  publicKey: '0e857bfcb560fa7c933a30e23509716a240967f70f9bfa1b3aab42457d04f26x',
  walletConnectAccount: null
};
