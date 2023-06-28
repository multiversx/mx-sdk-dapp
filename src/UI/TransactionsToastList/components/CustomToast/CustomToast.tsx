import React from 'react';

import { IconToast, SimpleToast, ComponentToast } from './components';
import {
  // ComponentIconToastPropsType,
  CustomToastPropsType
} from './customToast.types';
import { useRemoveCustomToast } from './helpers';

export const CustomToast = (props: CustomToastPropsType) => {
  const { duration, onDelete } = props;
  useRemoveCustomToast({ duration, onDelete });

  if (props.component) {
    const Component = props.component;
    const newProps = {
      ...props,
      component: <Component />
    } as any;

    return <ComponentToast {...newProps} />;
  }

  if (props.icon) {
    return <IconToast {...props} />;
  }

  return <SimpleToast {...props} />;
};
