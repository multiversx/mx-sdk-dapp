import React from 'react';
import { ComponentIconToastPropsType } from '../../../customToast.types';
import { SharedToastFooter } from './SharedToastFooter';

export const ComponentToastFooter = (props: ComponentIconToastPropsType) => {
  // TODO check here
  return <SharedToastFooter {...props}></SharedToastFooter>;
};
