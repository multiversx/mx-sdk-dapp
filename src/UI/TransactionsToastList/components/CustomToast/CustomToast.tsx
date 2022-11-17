import React from 'react';

import { IconToast, SimpleToast } from './components';
import { CustomToastPropsType } from './customToast.types';
import { useRemoveCustomToast } from './helpers';

export const CustomToast = (props: CustomToastPropsType) => {
  const { duration, onDelete } = props;
  useRemoveCustomToast({ duration, onDelete });

  if (props.icon) {
    return <IconToast {...props} />;
  }

  return <SimpleToast {...props} />;
};
