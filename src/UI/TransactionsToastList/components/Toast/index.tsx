import React from 'react';
import { ToastsEnum } from 'types';

import CustomToast from './components/CustomToast';
import TransactionToast from './components/TransactionToast';

import styles from './styles.scss';

const toasts = (type = ToastsEnum.custom) =>
  ({
    [ToastsEnum.custom]: CustomToast,
    [ToastsEnum.transaction]: TransactionToast
  }[type]);

const Toast = (props: any) => {
  const { type = ToastsEnum.custom, ...args } = props;

  return <div className={styles.toast}>{toasts(type)(args)}</div>;
};

export default Toast;
