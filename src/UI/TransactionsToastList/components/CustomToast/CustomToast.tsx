import React from 'react';
import { IconToast, SimpleToast, CustomComponentToast } from './components';
import { CustomToastPropsType } from './customToast.types';
import { useRemoveCustomToast } from './helpers';
import { TransactionToast } from '../TransactionToast';
import { TransactionToastType } from 'types/toasts.types';

export const CustomToast = (props: CustomToastPropsType) => {
  const { duration, onDelete } = props;
  useRemoveCustomToast({ duration, onDelete });

  if (props.component) {
    return <CustomComponentToast {...props} />;
  }

  const customToastProps = props as unknown as TransactionToastType;

  if (customToastProps.transaction) {
    return (
      <TransactionToast
        {...customToastProps}
        status={customToastProps.transaction.status}
        transactions={[customToastProps.transaction]}
      />
    );
  }

  if (props.icon) {
    return <IconToast {...props} />;
  }

  return <SimpleToast {...props} />;
};
