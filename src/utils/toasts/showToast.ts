import { setCustomToasts, CustomToastType } from 'redux/slices';
import { store } from 'redux/store';

export const showToast = (args: CustomToastType) =>
  store.dispatch(setCustomToasts(args));
