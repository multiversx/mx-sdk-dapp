import { addIconToast, removeIconToast } from 'reduxStore/slices';
import { store } from 'reduxStore/store';
import { IconToastType } from '../../types/toasts.types';

export const addNewIconToast = (props: IconToastType) => {
  console.log({ props });

  return store.dispatch(addIconToast(props)).payload;
};

export const deleteIconToast = (toastId: string) =>
  store.dispatch(removeIconToast(toastId));
