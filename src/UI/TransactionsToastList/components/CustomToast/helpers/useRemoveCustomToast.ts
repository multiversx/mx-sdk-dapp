import { useEffect } from 'react';
import { CustomToastPropsType } from '../customToast.types';

interface UseRemoveCustomToastType {
  duration: CustomToastPropsType['duration'];
  onDelete: CustomToastPropsType['onDelete'];
}

export const useRemoveCustomToast = ({
  duration,
  onDelete
}: UseRemoveCustomToastType) => {
  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    if (duration) {
      timeout = setTimeout(onDelete, duration);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [duration]);
};
