import React, { useState } from 'react';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import ReactDOM from 'react-dom';
import { getCustomToastFooterId } from 'UI/TransactionsToastList/components/CustomToast/components/IconToast/helpers/getCustomToastFooterId';
import { useCustomIconComponentActions } from 'utils/toasts/useCustomIconComponentActions';

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

  if (!element || !component) {
    return null;
  }

  const Component = component;

  return ReactDOM.createPortal(<Component />, element);
};

export const TransactionReceivedToast = () => {
  const [element, setElement] = useState({
    toastId: '',
    component: () => <></>
  });
  const customIconComponentActions = useCustomIconComponentActions();

  return (
    <>
      <button
        className='btn btn-warning btn-lg'
        onClick={() => {
          const id = customIconComponentActions.addNewCustomToast({
            toastId: Date.now().toString(),
            component: NewButton,
            duration: 100000000,
            type: 'custom',
            title: 'Container notification',
            icon: faArrowAltCircleDown,
            iconClassName: 'bg-success'
          });
          setTimeout(() => {
            setElement({
              toastId: String(id?.toastId),
              component: NewButton
            });
          });
        }}
      >
        ADD Notification1
      </button>

      {element.toastId && (
        <PortalButton id={element.toastId} component={element.component} />
      )}
    </>
  );
};
