import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { addCustomToast } from 'reduxStore/slices';
import { store } from 'reduxStore/store';
import {
  getCustomToastFooterId,
  useRenderToastComponent
} from 'UI/TransactionsToastList/components/CustomToast/components/IconToast/helpers';
import { UseRenderToastComponentType } from 'UI/TransactionsToastList/components/CustomToast/customToast.types';
import { ComponentIconToastType } from '../../types/toasts.types';
import { deleteCustomToast } from './customToastsActions';

const NewButton = () => {
  const onClick = () => {
    console.log('this is my action');
  };
  return (
    <div className='btn btn-danger' onClick={onClick}>
      This is new buttonab
    </div>
  );
};

export const PortalButton = ({
  id,
  component
}: {
  id: string;
  component: () => JSX.Element;
}) => {
  const element = document.getElementById(getCustomToastFooterId(id));
  console.log(112, { element });

  if (!element || !component) {
    return null;
  }

  const Component = component;

  return ReactDOM.createPortal(<Component />, element);
};

export const useCustomIconComponentActions = () => {
  const render = useRenderToastComponent();
  const [state, setstate] = useState<UseRenderToastComponentType>({
    toastId: '',
    component: () => <></>
  });

  const addNewCustomToast = (props: ComponentIconToastType) => {
    const { component, ...rest } = props;
    if (component != null) {
      const toastData = store.dispatch(
        addCustomToast({
          ...rest,
          // do not send component to Redux
          component: null
        })
      ).payload;
      setstate({
        component,
        toastId: toastData.toastId
      });
      setTimeout(() => {
        PortalButton({ id: props.toastId, component: NewButton });
      });
      return toastData;
    }
    return null;
  };

  useEffect(() => {
    if (state.toastId == '12') {
      render(state);
    }
  }, [state]);

  return {
    addNewCustomToast,
    deleteCustomToast
  };
};
