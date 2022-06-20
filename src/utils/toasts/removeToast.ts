import { removeCustomToasts } from 'redux/slices';
import { store } from 'redux/store';

export const removeToast = (toastId: string) =>
  store.dispatch(removeCustomToasts(toastId));
