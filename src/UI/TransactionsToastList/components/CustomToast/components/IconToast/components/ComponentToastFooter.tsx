import React from 'react';
import { getRegisteredCustomIconComponents } from 'utils/toasts/customToastsActions';
import { ComponentIconToastPropsType } from '../../../customToast.types';
import { SharedToastFooter } from './SharedToastFooter';

export const ComponentToastFooter = (props: ComponentIconToastPropsType) => {
  const Component = getRegisteredCustomIconComponents(props.toastId);

  return (
    <SharedToastFooter {...props}>
      {Component && <Component />}
    </SharedToastFooter>
  );
};
