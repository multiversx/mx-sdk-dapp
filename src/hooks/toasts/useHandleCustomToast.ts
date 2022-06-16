import {
  setCustomToasts,
  removeCustomToasts,
  CustomToastType
} from 'redux/slices';
import { store } from 'redux/store';

interface useHandleCustomToastType {
  showToast: (args: CustomToastType) => void;
  removeToast: (toastId: string) => void;
}

export const useHandleCustomToast = (): useHandleCustomToastType => ({
  showToast: (args: CustomToastType) => store.dispatch(setCustomToasts(args)),
  removeToast: (toastId: string) => store.dispatch(removeCustomToasts(toastId))
});
