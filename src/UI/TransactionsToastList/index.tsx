import React, { useEffect, useState } from 'react';
import uniqBy from 'lodash.uniqby';
import { createPortal } from 'react-dom';

import { useGetSignedTransactions } from 'hooks';
import { useSelector } from 'redux/DappProviderContext';
import { customToastsSelector } from 'redux/selectors';

import { useGetPendingTransactions } from 'services';

import {
  getToastsIdsFromStorage,
  setToastsIdsToStorage
} from 'storage/session';

import { ToastsEnum } from 'types';
import { getGeneratedClasses } from 'utils';
import { handleCustomToasts } from 'utils/toasts';

import Toast from './components/Toast';

import styles from './styles.scss';
import { TransactionsToastListPropsType } from './types';

export interface ToastsType {
  toastId: string;
  type: string;
  duration?: number | undefined;
  message?: string;
}

const TransactionsToastList = ({
  shouldRenderDefaultCss = true,
  className = '',
  pendingTransactions,
  signedTransactions,
  successfulToastLifetime,
  parentElement
}: TransactionsToastListPropsType) => {
  const [toastsIds, setToastsIds] = useState<ToastsType[]>([]);
  const { removeToast } = handleCustomToasts();

  const customToastsFromStore = useSelector(customToastsSelector);

  const pendingTransactionsFromStore =
    useGetPendingTransactions().pendingTransactions;

  const signedTransactionsFromStore =
    useGetSignedTransactions().signedTransactions;

  const pendingTransactionsToRender =
    pendingTransactions || pendingTransactionsFromStore;

  const signedTransactionsToRender =
    signedTransactions || signedTransactionsFromStore;

  const handleDeleteCustomToast = (toastId: string) => {
    removeToast(toastId);
    setToastsIds((toastsIds: ToastsType[]): ToastsType[] =>
      toastsIds.filter((toast: ToastsType) => toast.toastId !== toastId)
    );
  };

  const mappedToastsList = toastsIds?.map((props: ToastsType) => {
    const { toastId, type = ToastsEnum.transaction, message, duration } = props;

    switch (type) {
      case ToastsEnum.custom:
        return (
          <Toast
            key={toastId}
            {...{
              type,
              message: message ?? '',
              duration,
              onDelete: () => handleDeleteCustomToast(toastId)
            }}
          />
        );

      case ToastsEnum.transaction:
        return (
          <Toast
            key={toastId}
            {...{
              type,
              toastId,
              signedTransactionsToRender,
              lifetimeAfterSuccess: successfulToastLifetime
            }}
          />
        );

      default:
        return null;
    }
  });

  const mapPendingSignedTransactions = () => {
    const newToasts = [...toastsIds];

    for (const sessionId in pendingTransactionsToRender) {
      const hasToast = toastsIds.some(
        (toast: ToastsType): boolean => toast.toastId === sessionId
      );

      if (!hasToast) {
        newToasts.push({ toastId: sessionId, type: ToastsEnum.transaction });
      }
    }

    setToastsIds(newToasts);
  };

  const fetchSessionStorageToasts = () => {
    const sessionStorageToastsIds = getToastsIdsFromStorage();

    if (sessionStorageToastsIds) {
      const newToasts = [...toastsIds, ...sessionStorageToastsIds];

      setToastsIds(
        newToasts.map(
          (toastId: string): ToastsType => ({
            toastId,
            type: ToastsEnum.transaction
          })
        )
      );
    }
  };

  const saveSessionStorageToasts = () => {
    const shouldSaveLocalToasts = Boolean(toastsIds.length);
    if (!shouldSaveLocalToasts) {
      return;
    }

    setToastsIdsToStorage(
      toastsIds.map((toast: ToastsType): string => toast.toastId)
    );
  };

  useEffect(() => {
    fetchSessionStorageToasts();

    return () => {
      saveSessionStorageToasts();
    };
  }, []);

  useEffect(() => {
    mapPendingSignedTransactions();
  }, [pendingTransactionsToRender]);

  useEffect(() => {
    if (!Array.isArray(customToastsFromStore)) {
      return;
    }

    const newToasts = (toastsIds: ToastsType[]): ToastsType[] =>
      uniqBy(
        [...toastsIds, ...customToastsFromStore],
        (toast: ToastsType) => toast.toastId
      );

    setToastsIds(newToasts);
  }, [customToastsFromStore?.length]);

  const style = getGeneratedClasses(className, shouldRenderDefaultCss, {
    ...styles
  });

  return createPortal(
    <div className={style.toasts}>{mappedToastsList}</div>,
    parentElement || document.body
  );
};

export default TransactionsToastList;
