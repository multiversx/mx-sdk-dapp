import { setAccountNonce } from '../redux/slices';
import { store } from '../redux/store';

//this is is needed to allow the users to set the nonce dynamically from outside the library
//without getting access to store.dispatch function
export default function setNonce(nonce: number) {
  store.dispatch(setAccountNonce(nonce));
}
