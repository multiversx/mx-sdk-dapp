import React, { useMemo } from 'react';
import { ToastsEnum } from 'types';

import Custom from './components/Custom';
import Transaction from './components/Transaction';

import styles from './styles.scss';

const Toast = (props: any) => {
  const { type = ToastsEnum.custom, ...args } = props;

  const toast = useMemo(
    () =>
      ({
        [ToastsEnum.custom]: Custom,
        [ToastsEnum.transaction]: Transaction
      }[type as string]),
    []
  );

  return <div className={styles.toast}>{toast ? toast(args) : null}</div>;
};

export default Toast;
