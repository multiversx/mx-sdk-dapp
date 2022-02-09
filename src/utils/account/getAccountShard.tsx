import {
  addressSelector,
  networkSelector,
  shardSelector
} from 'redux/selectors';

import { setAccountShard } from 'redux/slices';
import { store } from 'redux/store';

export default async function getAccountShard() {
  const appState = store.getState();
  const network = networkSelector(appState);
  const address = addressSelector(appState);
  const shard = shardSelector(appState);

  try {
    if (shard == null) {
      const account = await fetch(
        `${network.apiAddress}/accounts/${address}`
      ).then((response) => response.json());
      store.dispatch(setAccountShard(account.shard));
      return shard;
    } else {
      return shard;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
}
