import {
  setCustomToasts,
  removeCustomToasts,
  CustomToastType
} from 'redux/slices';
import { store } from 'redux/store';

interface handleCustomToastsType {
  showToast: (args: CustomToastType) => void;
  removeToast: (toastId: string) => void;
}

export const handleCustomToasts = (): handleCustomToastsType => ({
  showToast: (args: CustomToastType) => store.dispatch(setCustomToasts(args)),
  removeToast: (toastId: string) => store.dispatch(removeCustomToasts(toastId))
});
