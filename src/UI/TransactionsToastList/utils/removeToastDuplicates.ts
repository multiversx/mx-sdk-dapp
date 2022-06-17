import { CustomToastType } from 'redux/slices';
import { ToastsType } from '../index';

const removeToastDuplicates = (
  total: ToastsType[],
  toast: CustomToastType
): ToastsType[] => {
  if (total.find((item: ToastsType) => item.toastId === toast.toastId)) {
    return total;
  } else {
    return [...total, toast];
  }
};

export default removeToastDuplicates;
