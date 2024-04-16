import axios from 'axios';
import {
  addressSelector,
  apiAddressSelector,
  shardSelector
} from 'reduxStore/selectors';

import { setAccountShard } from 'reduxStore/slices';
import { store } from 'reduxStore/store';
import { AccountType } from 'types';

export async function getAccountShard() {
  const appState = store.getState();
  const apiAddress = apiAddressSelector(appState);
  const address = addressSelector(appState);
  const shard = shardSelector(appState);

  try {
    if (shard == null && address) {
      const { data: account } = await axios.get<AccountType>(
        `${apiAddress}/accounts/${address}`
      );
      store.dispatch(setAccountShard(Number(account.shard)));
      return account.shard;
    } else {
      return shard;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
}
