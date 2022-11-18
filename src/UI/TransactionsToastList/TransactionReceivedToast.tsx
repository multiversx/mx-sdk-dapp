import React, { useEffect, useState } from 'react';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import ReactDOM from 'react-dom';
import { ComponentIconEventsEnum } from 'types/toasts.types';
import { getCustomToastFooterId } from 'UI/TransactionsToastList/components/CustomToast/components/IconToast/helpers/getCustomToastFooterId';
import {
  addNewCustomToast,
  getRegisteredCustomIconComponents
} from 'utils/toasts/customToastsActions';

const NewButton = ({ id }: { id: string }) => {
  const onClick = () => {
    console.log('this is my action');
  };
  return (
    <div className='btn btn-danger' onClick={onClick}>
      ID: {id}
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

  console.log(id, element);

  if (!element || !component) {
    return null;
  }

  const Component = component;

  return ReactDOM.createPortal(<Component />, element);
};

export const TransactionReceivedToast = () => {
  const [state, setState] = useState({
    toastId: '',
    component: () => <></>
  });

  const onEvent = (event: Event) => {
    const toastId = (event as CustomEvent)?.detail;
    // setTimeout(() => {
    setState({
      toastId,
      component: getRegisteredCustomIconComponents(toastId)
    });
    // });
  };

  useEffect(() => {
    document.addEventListener(ComponentIconEventsEnum.onMount, onEvent);
    return () => {
      document.removeEventListener(ComponentIconEventsEnum.onMount, onEvent);
    };
  }, []);

  return (
    <>
      <button
        className='btn btn-warning btn-lg'
        onClick={() => {
          const toastId = Date.now().toString();
          addNewCustomToast({
            toastId,
            component: () => <NewButton id={toastId} />,
            duration: 100000000,
            type: 'custom',
            title: 'Container notification ' + toastId,
            icon: faArrowAltCircleDown,
            iconClassName: 'bg-success'
          });
        }}
      >
        ADD Notification1
      </button>

      {state.toastId && (
        <PortalButton id={state.toastId} component={state.component} />
      )}
    </>
  );
};
