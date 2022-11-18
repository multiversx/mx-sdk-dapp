import React from 'react';

import { IconToast, SimpleToast } from './components';
import { CustomToastPropsType } from './customToast.types';
import { useRemoveCustomToast } from './helpers';

export const CustomToast = (props: CustomToastPropsType) => {
  const { duration, onDelete } = props;
  useRemoveCustomToast({ duration, onDelete });

  return (
    <div id={props.toastId}>
      {props.icon ? <IconToast {...props} /> : <SimpleToast {...props} />}
    </div>
  );
};
