import React, { useEffect, useState, Fragment } from 'react';
import { createPortal } from 'react-dom';

import { useGetSignedTransactions, useHandleCustomToast } from 'hooks';
import { useGetCustomToasts } from 'hooks/toasts';

import icons from 'optionalPackages/fortawesome-free-solid-svg-icons';
import ReactFontawesome from 'optionalPackages/react-fontawesome';

import { useGetPendingTransactions } from 'services';

import {
  getToastsIdsFromStorage,
  setToastsIdsToStorage
} from 'storage/session';

import { SignedTransactionsBodyType } from 'types';
import TransactionToast from 'UI/TransactionToast';

import { getGeneratedClasses } from 'utils';

import styles from './styles.scss';
import { TransactionsToastListPropsType } from './types';

const CustomToastComponent = ({
  onDelete,
  message,
  duration
}: {
  onDelete: () => void;
  message: string;
  duration?: number;
}) => {
  useEffect(() => {
    if (duration) {
      setTimeout(onDelete, duration);
    }
  }, []);

  return (
    <div className={styles.toast}>
      <button type='button' className={styles.close} onClick={onDelete}>
        <ReactFontawesome.FontAwesomeIcon icon={icons.faTimes} size='xs' />
      </button>

      {message}
    </div>
  );
};

interface TransactionToastComponentType {
  signedTransactionsToRender: any;
  lifetimeAfterSuccess?: number;
  withTxNonce?: boolean;
  toastId: string;
}

const TransactionToastComponent = ({
  signedTransactionsToRender,
  toastId,
  ...props
}: TransactionToastComponentType) => {
  const [shouldRender, setShouldRender] = useState(true);
  const currentTx: SignedTransactionsBodyType =
    signedTransactionsToRender[toastId];

  if (
    currentTx == null ||
    currentTx?.transactions == null ||
    currentTx?.status == null
  ) {
    return null;
  }

  const { transactions, status } = currentTx;

  if (transactions === null || !shouldRender) {
    return null;
  }

  return (
    <div className={styles.toast}>
      <TransactionToast
        {...{
          ...props,
          status,
          transactions,
          toastId,
          onClose: () => setShouldRender(false)
        }}
      />
    </div>
  );
};

const TransactionsToastList = ({
  shouldRenderDefaultCss = true,
  withTxNonce = false,
  className = '',
  pendingTransactions,
  signedTransactions,
  successfulToastLifetime,
  parentElement
}: TransactionsToastListPropsType) => {
  const [toastsIds, setToastsIds] = useState<any>([]);
  const { removeToast } = useHandleCustomToast();

  const customToastsFromStore = useGetCustomToasts().customToasts;

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
    setToastsIds((toastsIds: any[]) =>
      toastsIds.filter((toast: any) => toast.toastId !== toastId)
    );
  };

  const mappedToastsList = toastsIds?.map(
    ({
      toastId,
      type,
      message = '',
      duration
    }: {
      toastId: string;
      type: string;
      message: string;
      duration?: number;
    }) => {
      const types = ['custom', 'transaction'];

      if (!types.includes(type)) {
        return null;
      }

      return (
        <Fragment key={toastId}>
          {type === 'custom' && (
            <CustomToastComponent
              {...{
                message,
                duration,
                onDelete: () => handleDeleteCustomToast(toastId)
              }}
            />
          )}

          {type === 'transaction' && (
            <TransactionToastComponent
              {...{
                toastId,
                withTxNonce,
                signedTransactionsToRender,
                lifetimeAfterSuccess: successfulToastLifetime
              }}
            />
          )}
        </Fragment>
      );
    }
  );

  const removeToastDuplicates = (total: any[], toast: any) => {
    if (total.find((item: any) => item.toastId === toast.toastId)) {
      return total;
    } else {
      return [...total, toast];
    }
  };

  const mapPendingSignedTransactions = () => {
    const newToasts = [...toastsIds];

    for (const sessionId in pendingTransactionsToRender) {
      const hasToast = toastsIds.includes(sessionId);

      if (!hasToast) {
        newToasts.push({ toastId: sessionId, type: 'transaction' });
      }
    }

    setToastsIds(newToasts);
  };

  const fetchSessionStorageToasts = () => {
    const sessionStorageToastsIds = getToastsIdsFromStorage();

    if (sessionStorageToastsIds) {
      const newToasts = [
        ...toastsIds,
        ...sessionStorageToastsIds.map((toastId: string) => ({
          toastId,
          type: 'transaction'
        }))
      ];

      setToastsIds(
        newToasts.map((toastId) => ({ toastId, type: 'transaction' }))
      );
    }
  };

  const saveSessionStorageToasts = () => {
    const shouldSaveLocalToasts = Boolean(toastsIds.length);
    if (!shouldSaveLocalToasts) {
      return;
    }

    setToastsIdsToStorage(toastsIds);
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

    setToastsIds((toastsIds: any[]) =>
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
