import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { useGetSignedTransactions, useHandleCustomToast } from 'hooks';
import { useSelector } from 'redux/DappProviderContext';
import { customToastsSelector } from 'redux/selectors';
import { CustomToastType } from 'redux/slices';

import { useGetPendingTransactions } from 'services';

import {
  getToastsIdsFromStorage,
  setToastsIdsToStorage
} from 'storage/session';

import { getGeneratedClasses } from 'utils';

import CustomToastComponent from './components/CustomToastComponent';
import TransactionToastComponent from './components/TransactionToastComponent';

import styles from './styles.scss';
import { TransactionsToastListPropsType } from './types';
import { SignedTransactionsType } from 'types';

interface ToastsType {
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
  const { removeToast } = useHandleCustomToast();

  const customToastsFromStore: CustomToastType[] | undefined =
    useSelector(customToastsSelector);

  const pendingTransactionsFromStore =
    useGetPendingTransactions().pendingTransactions;

  const signedTransactionsFromStore =
    useGetSignedTransactions().signedTransactions;

  const pendingTransactionsToRender =
    pendingTransactions || pendingTransactionsFromStore;

  const signedTransactionsToRender: SignedTransactionsType =
    signedTransactions || signedTransactionsFromStore;

  const handleDeleteCustomToast = (toastId: string): void => {
    removeToast(toastId);
    setToastsIds((toastsIds: ToastsType[]): ToastsType[] =>
      toastsIds.filter((toast: ToastsType) => toast.toastId !== toastId)
    );
  };

  const mappedToastsList = toastsIds?.map(
    ({ toastId, type, message, duration }: ToastsType) => {
      if (type === 'custom') {
        return (
          <CustomToastComponent
            {...{
              message: message || '',
              duration,
              onDelete: () => handleDeleteCustomToast(toastId)
            }}
          />
        );
      }

      if (type === 'transaction') {
        return (
          <TransactionToastComponent
            {...{
              toastId,
              signedTransactionsToRender,
              lifetimeAfterSuccess: successfulToastLifetime
            }}
          />
        );
      }

      return null;
    }
  );

  const removeToastDuplicates = (
    total: ToastsType[],
    toast: CustomToastType
  ): ToastsType[] => {
    if (total.find((item: ToastsType) => item.toastId === toast.toastId)) {
      return total;
    } else {
      return [...total, toast];
    }
  };

  const mapPendingSignedTransactions = (): void => {
    const newToasts = [...toastsIds];

    for (const sessionId in pendingTransactionsToRender) {
      const hasToast = toastsIds.find(
        (toast: ToastsType): boolean => toast.toastId === sessionId
      );

      if (!hasToast) {
        newToasts.push({ toastId: sessionId, type: 'transaction' });
      }
    }

    setToastsIds(newToasts);
  };

  const fetchSessionStorageToasts = (): void => {
    const sessionStorageToastsIds = getToastsIdsFromStorage();

    if (sessionStorageToastsIds) {
      const newToasts = [...toastsIds, ...sessionStorageToastsIds];

      setToastsIds(
        newToasts.map(
          (toastId: string): ToastsType => ({ toastId, type: 'transaction' })
        )
      );
    }
  };

  const saveSessionStorageToasts = (): void => {
    const shouldSaveLocalToasts = Boolean(toastsIds.length);
    if (!shouldSaveLocalToasts) {
      return;
    }

    setToastsIdsToStorage(
      toastsIds.map((toast: ToastsType): string => toast.toastId)
    );
  };

  useEffect((): (() => void) => {
    fetchSessionStorageToasts();

    return () => {
      saveSessionStorageToasts();
    };
  }, []);

  useEffect((): void => {
    mapPendingSignedTransactions();
  }, [pendingTransactionsToRender]);

  useEffect((): void => {
    if (!Array.isArray(customToastsFromStore)) {
      return;
    }

    setToastsIds((toastsIds: ToastsType[]): ToastsType[] =>
      customToastsFromStore.reduce(removeToastDuplicates, toastsIds)
    );
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
