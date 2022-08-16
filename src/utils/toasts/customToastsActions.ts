import { addCustomToast, removeCustomToast } from 'reduxStore/slices';
import { getStore } from 'reduxStore/store';
import { CustomToastType } from 'types/toasts';

export const addNewCustomToast = (args: CustomToastType) => {
  return getStore().dispatch(addCustomToast(args));
};

export const deleteCustomToast = (toastId: string) =>
  getStore().dispatch(removeCustomToast(toastId));
