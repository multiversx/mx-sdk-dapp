import { addCustomToast, removeCustomToast } from 'reduxStore/slices';
import { store } from 'reduxStore/store';
import { CustomToastType } from '../../types/toasts.types';

export const addNewCustomToast = (props: CustomToastType) => {
  console.log({ props });

  return store.dispatch(addCustomToast(props)).payload;
};

export const deleteCustomToast = (toastId: string) =>
  store.dispatch(removeCustomToast(toastId));
