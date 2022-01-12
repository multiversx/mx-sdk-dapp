import { egldLabelSelector } from 'redux/selectors';
import { store } from 'redux/store';

export function getEgldLabel() {
  return egldLabelSelector(store.getState());
}
