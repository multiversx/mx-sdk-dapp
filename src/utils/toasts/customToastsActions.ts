import {
  setCustomToasts,
  removeCustomToasts,
  CustomToastType
} from 'reduxStore/slices';
import { store } from 'reduxStore/store';

export const showCustomToast = (args: CustomToastType) =>
  store.dispatch(setCustomToasts(args));

export const removeCustomToast = (toastId: string) =>
  store.dispatch(removeCustomToasts(toastId));
