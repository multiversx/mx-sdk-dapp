import React from 'react';
import { ComponentIconToastPropsType } from 'UI/TransactionsToastList/components/CustomToast/customToast.types';
import { getRegisteredCustomIconComponents } from 'utils/toasts/customToastsActions';
import { SharedToastFooter } from './SharedToastFooter';

export const ComponentToastFooter = (props: ComponentIconToastPropsType) => {
  const Component = getRegisteredCustomIconComponents(props.toastId);

  return (
    <SharedToastFooter {...props}>
      {Component && <Component />}
    </SharedToastFooter>
  );
};
