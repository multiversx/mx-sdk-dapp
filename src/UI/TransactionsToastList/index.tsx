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
import { SignedTransactionsType } from 'types';

import CustomToast from 'UI/TransactionsToastList/components/CustomToast';
import TransactionToast from 'UI/TransactionsToastList/components/TransactionToast';
import { removeCustomToast } from 'utils';

import styles from './styles.scss';
import { ToastsType } from 'types/toasts';

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
  className = 'transactions-toast-list',
  signedTransactions,
  successfulToastLifetime,
  parentElement
}: TransactionsToastListPropsType) => {
  const [renderedToasts, setRenderedToasts] = useState<ToastsType[]>([]);

  const customToastsFromStore = useSelector(customToastsSelector);

  const signedTransactionsFromStore =
    useGetSignedTransactions().signedTransactions;

  const signedTransactionsToRender =
    signedTransactions || signedTransactionsFromStore;

  const handleDeleteCustomToast = (toastId: string) => {
    removeCustomToast(toastId);
    setRenderedToasts((prevToasts: ToastsType[]): ToastsType[] =>
      prevToasts.filter((toast: ToastsType) => toast.toastId !== toastId)
    );
  };

  const handleSignedTransactionsListUpdate = () => {
    setRenderedToasts((prevToasts) => {
      const newToasts = [];
      for (const sessionId in signedTransactionsToRender) {
        const alreadyHasToastForThisTransaction = renderedToasts.some(
          (toast: ToastsType): boolean => toast.toastId === sessionId
        );

        if (!alreadyHasToastForThisTransaction) {
          newToasts.push({ toastId: sessionId, type: ToastsEnum.transaction });
        }
      }
      return [...prevToasts, ...newToasts];
    });
  };

  const handleCustomToastsChange = () => {
    if (!Array.isArray(customToastsFromStore)) {
      return;
    }

    setRenderedToasts((renderedToasts: ToastsType[]): ToastsType[] =>
      uniqBy(
        [...renderedToasts, ...customToastsFromStore],
        (toast: ToastsType) => toast.toastId
      )
    );
  };

  const handleSaveToastsToStorage = () => {
    const shouldSaveLocalToasts = Boolean(renderedToasts.length);
    if (!shouldSaveLocalToasts) {
      return;
    }

    setToastsIdsToStorage(
      renderedToasts.map((toast: ToastsType): string => toast.toastId)
    );
  };

  const handleRestoreToastsFromStorage = () => {
    const sessionStorageToastsIds = getToastsIdsFromStorage();

    if (sessionStorageToastsIds) {
      const newToasts = [...renderedToasts, ...sessionStorageToastsIds];

      setRenderedToasts(
        newToasts.map(
          (toastId: string): ToastsType => ({
            toastId,
            type: ToastsEnum.transaction
          })
        )
      );
    }
  };

  useEffect(() => {
    handleRestoreToastsFromStorage();

    return () => {
      handleSaveToastsToStorage();
    };
  }, []);

  useEffect(() => {
    handleSignedTransactionsListUpdate();
  }, [signedTransactionsToRender]);

  useEffect(() => {
    handleCustomToastsChange();
  }, [customToastsFromStore?.length]);

  const style = getGeneratedClasses(className ?? '', !!shouldRenderDefaultCss, {
    ...styles
  });

  const mappedToastsList = renderedToasts?.map((toast: ToastsType) => {
    const { toastId, type = ToastsEnum.transaction, message, duration } = toast;

    switch (type) {
      case ToastsEnum.custom:
        return (
          <CustomToast
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
          <TransactionToast
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

  return createPortal(
    <div className={style.toasts}>{mappedToastsList}</div>,
    parentElement || document.body
  );
};
