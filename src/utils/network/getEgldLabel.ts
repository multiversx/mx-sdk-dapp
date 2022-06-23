import { egldLabelSelector } from 'reduxStore/selectors';
import { store } from 'reduxStore/store';

export function getEgldLabel() {
  return egldLabelSelector(store.getState());
}
