import { setAccountNonce } from '../redux/slices/accountInfoSlice';
import { store } from '../redux/store';

export default function setNonce(nonce: number) {
  store.dispatch(setAccountNonce(nonce));
}
