import {
  setCustomToasts,
  removeCustomToasts,
  CustomToastType
} from 'reduxStore/slices';
import { store } from 'reduxStore/store';

interface handleCustomToastsType {
  showToast: (args: CustomToastType) => void;
  removeToast: (toastId: string) => void;
}

export const handleCustomToasts = (): handleCustomToastsType => ({
  showToast: (args: CustomToastType) => store.dispatch(setCustomToasts(args)),
  removeToast: (toastId: string) => store.dispatch(removeCustomToasts(toastId))
});
