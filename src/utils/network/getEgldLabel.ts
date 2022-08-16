import { egldLabelSelector } from 'reduxStore/selectors';
import { getStore } from 'reduxStore/store';

export function getEgldLabel() {
  return egldLabelSelector(getStore().getState());
}
