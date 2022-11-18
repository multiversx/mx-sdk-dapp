import React from 'react';
import { ComponentIconToastPropsType } from '../../../customToast.types';
import { useToastComponentEvents } from '../helpers';
import { SharedToastFooter } from './SharedToastFooter';

export const ComponentToastFooter = (props: ComponentIconToastPropsType) => {
  useToastComponentEvents(props);

  console.log('in footer');

  return <SharedToastFooter {...props}></SharedToastFooter>;
};
