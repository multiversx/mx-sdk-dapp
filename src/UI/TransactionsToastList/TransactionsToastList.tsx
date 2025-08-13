import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import classNames from 'classnames';
import { createPortal } from 'react-dom';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { useGetSignedTransactions } from 'hooks/transactions/useGetSignedTransactions';
import { useDispatch, useSelector } from 'reduxStore/DappProviderContext';
import {
  customToastsSelector,
  transactionToastsSelector
} from 'reduxStore/selectors/toastsSelectors';
import { addTransactionToast, removeTransactionToast } from 'reduxStore/slices';
import { store } from 'reduxStore/store';
import { removeSignedTransaction } from 'services';
import {
  SignedTransactionsBodyType,
  SignedTransactionsType,
  TransactionBatchStatusesEnum
} from 'types';
import { CustomToastType, TransactionToastType } from 'types/toasts.types';

import {
  deleteCustomToast,
  getRegisteredCustomIconComponents,
  getRegisteredToastCloseHandler
} from 'utils/toasts/customToastsActions';
import { getIsTransactionPending } from 'utils/transactions/transactionStateByStatus';

import { WithClassnameType } from '../types';
import {
  CustomToast,
  TransactionToastGuard,
  TransactionToastGuardPropsType
} from './components';

export interface TransactionsToastListPropsType extends WithClassnameType {
  toastProps?: any;
  withTxNonce?: boolean;
  signedTransactions?: SignedTransactionsType;
  successfulToastLifetime?: number;
  parentElement?: Element | DocumentFragment;
  transactionToastClassName?: string;
  customToastClassName?: string;
  children?: React.ReactNode;
}

export const TransactionsToastListComponent = ({
  className = 'transactions-toast-list',
  transactionToastClassName,
  customToastClassName,
  signedTransactions,
  successfulToastLifetime,
  parentElement,
  children,
  styles
}: TransactionsToastListPropsType & WithStylesImportType) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const customToasts = useSelector(customToastsSelector) as CustomToastType[];
  const transactionsToasts = useSelector(
    transactionToastsSelector
  ) as TransactionToastType[];
  const dispatch = useDispatch();

  const { signedTransactions: signedTransactionsFromStore } =
    useGetSignedTransactions();

  const signedTransactionsToRender =
    signedTransactions || signedTransactionsFromStore;

  const signedTransactionsToRenderRef = useRef(signedTransactionsToRender);

  useEffect(() => {
    signedTransactionsToRenderRef.current = signedTransactionsToRender;
  }, [signedTransactionsToRender]);

  const handleDeleteCustomToast = (toastId: string) => {
    deleteCustomToast(toastId);
  };

  const handleDeleteTransactionToast = (toastId: string) => {
    dispatch(removeTransactionToast(toastId));
    removeSignedTransaction(toastId);
  };

  const handleSignedTransactionsListUpdate = useCallback(() => {
    for (const sessionId in signedTransactionsToRender) {
      const session = signedTransactionsToRender[sessionId];
      const skipSending =
        session?.customTransactionInformation?.signWithoutSending;

      if (skipSending) {
        continue;
      }

      const alreadyHasToastForThisSession = transactionsToasts.some(
        (toast: TransactionToastType): boolean =>
          `${toast.toastId}` === `${sessionId}`
      );

      if (!alreadyHasToastForThisSession) {
        dispatch(addTransactionToast(sessionId));
      }
    }
  }, [dispatch, signedTransactionsToRender, transactionsToasts]);

  useEffect(() => {
    handleSignedTransactionsListUpdate();
  }, [signedTransactionsToRender, handleSignedTransactionsListUpdate]);

  const MemoizedTransactionsToastsList = useMemo(
    () =>
      transactionsToasts.map(
        (
          { toastId, type, startTimestamp }: TransactionToastType,
          i: number
        ) => {
          const transactionToastGuardProps: TransactionToastGuardPropsType = {
            signedTransactionsToRender,
            toastId,
            type,
            startTimestamp,
            successfulToastLifetime,
            handleDeleteTransactionToast,
            className: transactionToastClassName
          };
          return (
            <TransactionToastGuard
              {...transactionToastGuardProps}
              key={startTimestamp + i}
            />
          );
        }
      ),
    [
      transactionsToasts,
      signedTransactionsToRender,
      successfulToastLifetime,
      handleDeleteTransactionToast,
      transactionToastClassName
    ]
  );

  const customToastsList = customToasts.map((props) => {
    const CustomComponent =
      getRegisteredCustomIconComponents(props.toastId) ?? null;
    const onCloseHandler = getRegisteredToastCloseHandler(props.toastId);

    return (
      <CustomToast
        key={props.toastId}
        {...props}
        component={CustomComponent as never}
        onDelete={() => {
          handleDeleteCustomToast(props.toastId);
          onCloseHandler?.();
        }}
        className={customToastClassName}
      />
    );
  });

  const clearNotPendingTransactionsFromStorage = () => {
    const toasts = transactionToastsSelector(store.getState());

    toasts.forEach((transactionToast: TransactionToastType) => {
      const currentTx: SignedTransactionsBodyType =
        signedTransactionsToRenderRef.current[transactionToast.toastId];

      if (!currentTx) {
        return;
      }

      const { status } = currentTx;
      const isPending = getIsTransactionPending(status);
      const isSigned = status === TransactionBatchStatusesEnum.signed;

      if (!isPending && !isSigned) {
        handleDeleteTransactionToast(transactionToast.toastId);
      }
    });
  };

  useEffect(() => {
    setIsBrowser(true);

    window?.addEventListener(
      'beforeunload',
      clearNotPendingTransactionsFromStorage
    );

    return () => {
      window?.removeEventListener(
        'beforeunload',
        clearNotPendingTransactionsFromStorage
      );
    };
  }, []);

  return (
    <>
      {isBrowser &&
        createPortal(
          <div className={classNames(styles?.toasts, className)}>
            {customToastsList}
            {MemoizedTransactionsToastsList}
            {children}
          </div>,
          parentElement || document?.body
        )}
    </>
  );
};

export const TransactionsToastList = withStyles(
  TransactionsToastListComponent,
  {
    ssrStyles: () =>
      import('UI/TransactionsToastList/transactionsToastList.styles.scss'),
    clientStyles: () =>
      require('UI/TransactionsToastList/transactionsToastList.styles.scss')
        .default
  }
);
