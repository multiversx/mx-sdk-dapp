import { useEffect } from 'react';
import { ComponentIconEventsEnum } from 'types/toasts.types';
import { UseRenderToastComponentType } from '../../../customToast.types';

export const useToastComponentEvents = ({
  toastId
}: UseRenderToastComponentType) => {
  useEffect(() => {
    const event = new CustomEvent(ComponentIconEventsEnum.onMount, {
      detail: toastId
    });
    document.dispatchEvent(event);
    return () => {
      const event = new CustomEvent(ComponentIconEventsEnum.onUnmount, {
        detail: toastId
      });
      document.dispatchEvent(event);
    };
  }, []);
};
