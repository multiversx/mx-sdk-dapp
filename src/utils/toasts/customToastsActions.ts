import { addCustomToast, removeCustomToast } from 'reduxStore/slices';
import { store } from 'reduxStore/store';
import { CustomToastType } from 'types/toasts';

export const addNewCustomToast = (args: CustomToastType) => {
  return store.dispatch(addCustomToast(args)).payload;
};

export const deleteCustomToast = (toastId: string) =>
  store.dispatch(removeCustomToast(toastId));
