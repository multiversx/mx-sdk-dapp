import { setAccountNonce } from 'reduxStore/slices';
import { store } from 'reduxStore/store';

// this is is needed to allow the users to set the nonce dynamically from outside the library
// without getting access to store.dispatch function
export function setNonce({
  nonce,
  address
}: {
  nonce: number;
  address: string;
}) {
  store.dispatch(setAccountNonce({ nonce, address }));
}
