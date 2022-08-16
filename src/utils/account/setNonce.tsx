import { setAccountNonce } from 'reduxStore/slices';
import { getStore } from 'reduxStore/store';

// this is needed to allow the users to set the nonce dynamically from outside the library
// without getting access to store.dispatch function
export function setNonce(nonce: number) {
  getStore().dispatch(setAccountNonce(nonce));
}
