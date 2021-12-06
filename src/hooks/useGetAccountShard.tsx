import { useDispatch, useSelector } from 'react-redux';
import {
  addressSelector,
  shardSelector
} from '../redux/selectors/accountInfoSelectors';
import { networkSelector } from '../redux/selectors/networkConfigSelectors';

import { setAccountShard } from '../redux/slices/accountInfoSlice';

export default function useGetAccountShard() {
  const network = useSelector(networkSelector);
  const address = useSelector(addressSelector);
  const shard = useSelector(shardSelector);
  const dispatch = useDispatch();
  return (): Promise<number | undefined> =>
    new Promise((resolve) => {
      if (shard === undefined) {
        fetch(`${network.apiAddress}/accounts/${address}`)
          .then((response) => response.json())
          .then(({ shard }) => {
            dispatch(setAccountShard(shard));
            resolve(shard);
          })
          .catch((err) => {
            console.error(err);
            resolve(undefined);
          });
      } else {
        resolve(shard);
      }
    });
}
