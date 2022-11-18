import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { ComponentIconEventsEnum } from 'types/toasts.types';
import { UseRenderToastComponentType } from '../../../customToast.types';
import { getCustomToastFooterId } from './getCustomToastFooterId';

const NewButton = () => {
  const onClick = () => {
    console.log('this is my action');
  };
  return (
    <div className='btn btn-danger' onClick={onClick}>
      This is new button
    </div>
  );
};

export const makeComponentPortal = ({
  toastId,
  component
}: UseRenderToastComponentType) => {
  const element = document.getElementById(getCustomToastFooterId(toastId));
  console.log(113, { element });

  if (!element || !component) {
    return null;
  }

  console.log('render', { component });

  return ReactDOM.createPortal(<NewButton />, element);
};

export const useRenderToastComponent = () => {
  const toastIdRef = useRef();

  const onEvent = (event: Event) => {
    toastIdRef.current = (event as CustomEvent)?.detail;
  };

  useEffect(() => {
    document.addEventListener(ComponentIconEventsEnum.onMount, onEvent);
    return () => {
      document.removeEventListener(ComponentIconEventsEnum.onMount, onEvent);
    };
  }, []);

  return (props: UseRenderToastComponentType) => {
    const isSameToastId = toastIdRef.current === props.toastId;

    if (isSameToastId) {
      console.log('rendering');

      setTimeout(() => {
        console.log('making');

        makeComponentPortal(props);
      }, 1000);
    }
  };
};
