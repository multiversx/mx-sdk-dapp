import React, { useEffect, useState } from 'react';
import uniqBy from 'lodash.uniqby';
import { createPortal } from 'react-dom';
import { useSelector } from 'reduxStore/DappProviderContext';
import { customToastsSelector } from 'reduxStore/selectors';
import {
  getToastsIdsFromStorage,
  setToastsIdsToStorage
} from 'storage/session';
import { useGetSignedTransactions } from 'hooks/transactions/useGetSignedTransactions';
import { getGeneratedClasses } from 'UI/utils/getGeneratedClasses';
import { ToastsEnum } from 'types';
import { handleCustomToasts } from 'utils/toasts';
import { SignedTransactionsType } from 'types';

import styles from './styles.scss';
import CustomToast from 'UI/TransactionsToastList/components/CustomToast';
import TransactionToast from 'UI/TransactionsToastList/components/TransactionToast';

export interface ToastsType {
  toastId: string;
  type: string;
  duration?: number | undefined;
  message?: string;
}

export interface TransactionsToastListPropsType {
  toastProps?: any;
  className?: string;
  withTxNonce?: boolean;
  shouldRenderDefaultCss?: boolean;
  signedTransactions?: SignedTransactionsType;
  successfulToastLifetime?: number;
  parentElement?: Element | DocumentFragment;
}

export const TransactionsToastList = ({
  shouldRenderDefaultCss = true,
  className = '',
  signedTransactions,
  successfulToastLifetime,
  parentElement
}: TransactionsToastListPropsType) => {
  const [toastsIds, setToastsIds] = useState<ToastsType[]>([]);
  const { removeToast } = handleCustomToasts();

  const customToastsFromStore = useSelector(customToastsSelector);

  const signedTransactionsFromStore = useGetSignedTransactions()
    .signedTransactions;

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
          <CustomToast
            key={toastId}
            {...{
              containerClassName: styles.toastWrapper,
              type,
              message: message ?? '',
              duration,
              onDelete: () => handleDeleteCustomToast(toastId)
            }}
          />
        );

      case ToastsEnum.transaction:
        return (
          <TransactionToast
            key={toastId}
            {...{
              type,
              containerClassName: styles.toastWrapper,

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
    for (const sessionId in signedTransactionsToRender) {
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
  }, [signedTransactionsToRender]);

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

  const style = getGeneratedClasses(className ?? '', !!shouldRenderDefaultCss, {
    ...styles
  });

  return createPortal(
    <div className={style.toasts}>{mappedToastsList}</div>,
    parentElement || document.body
  );
};
