import React, { useEffect, useMemo } from 'react';
import classNames from 'classnames';
import { useGetTransactionDisplayInfo } from 'hooks/transactions/useGetTransactionDisplayInfo';
import { useSelector } from 'reduxStore/DappProviderContext';
import { shardSelector } from 'reduxStore/selectors';
import { SignedTransactionType, TransactionBatchStatusesEnum } from 'types';
import { Progress } from 'UI/Progress';
import {
  getAreTransactionsOnSameShard,
  getIsTransactionPending,
  getIsTransactionTimedOut
} from 'utils/transactions';
import { getGeneratedClasses } from 'UI/utils/getGeneratedClasses';
import { getToastDataStateByStatus } from './utils';
import styles from './styles.scss';
import wrapperStyles from 'UI/TransactionsToastList/styles.scss';
import {
  getUnixTimestampWithAddedMilliseconds,
  getUnixTimestamp
} from 'utils/dateTime';
import { TransactionToastContent } from './TransactionToastContent';
import { TransactionToastWrapper } from './TransactionToastWrapper';
import { TransactionToastCustomizationProps } from './types';

const AVERAGE_TX_DURATION_MS = 6000;
const CROSS_SHARD_ROUNDS = 5;

export interface TransactionToastPropsType {
  title?: string | React.ReactNode;
  toastId: string;
  className?: string;
  endTimeProgress?: number;
  startTimestamp?: number;
  shouldRenderDefaultCss?: boolean;
  transactions?: SignedTransactionType[];
  status?: TransactionBatchStatusesEnum;
  lifetimeAfterSuccess?: number;
  onDelete?: (toastId: string) => void;
  children?: React.ReactNode;
  customization?: TransactionToastCustomizationProps;
}

export const TransactionToast = ({
  toastId,
  title = '',
  shouldRenderDefaultCss = true,
  className = 'transaction-toast',
  onDelete,
  startTimestamp,
  endTimeProgress,
  lifetimeAfterSuccess,
  status,
  transactions,
  customization,
  children
}: TransactionToastPropsType) => {
  const transactionDisplayInfo = useGetTransactionDisplayInfo(toastId);
  const accountShard = useSelector(shardSelector);

  const areSameShardTransactions = useMemo(
    () => getAreTransactionsOnSameShard(transactions, accountShard),
    [transactions, accountShard]
  );

  const shardAdjustedDuration = areSameShardTransactions
    ? AVERAGE_TX_DURATION_MS
    : CROSS_SHARD_ROUNDS * AVERAGE_TX_DURATION_MS;

  const transactionDuration =
    transactionDisplayInfo?.transactionDuration || shardAdjustedDuration;

  const [startTime, endTime] = useMemo(() => {
    const startTime = startTimestamp || getUnixTimestamp();
    const endTime =
      endTimeProgress ||
      getUnixTimestampWithAddedMilliseconds(transactionDuration);

    return [startTime, endTime];
  }, []);

  const progress = { startTime, endTime };
  const style = getGeneratedClasses(className, shouldRenderDefaultCss, {
    ...styles
  });

  const isPending = getIsTransactionPending(status);
  const isTimedOut = getIsTransactionTimedOut(status);

  const toastDataState = getToastDataStateByStatus({
    status,
    toastId,
    style,
    transactionDisplayInfo
  });

  const handleDeleteToast = () => {
    onDelete?.(toastId);
  };

  useEffect(() => {
    if (status !== 'success' || !lifetimeAfterSuccess) {
      return;
    }

    const timeout = setTimeout(() => {
      handleDeleteToast();
    }, lifetimeAfterSuccess);

    return () => {
      clearTimeout(timeout);
    };
  }, [lifetimeAfterSuccess, status]);

  return (
    <TransactionToastWrapper
      className={classNames(
        className,
        wrapperStyles.toasts,
        wrapperStyles.toastWrapper
      )}
    >
      <Progress
        key={toastId}
        id={toastId}
        progress={progress}
        expiresIn={lifetimeAfterSuccess}
        done={!isPending || isTimedOut}
        customization={customization?.Progress}
      >
        {children ?? (
          <TransactionToastContent
            style={style}
            toastDataState={toastDataState}
            transactions={transactions ?? []}
            toastTitle={title}
            isTimedOut={isTimedOut}
            showCloseButton={!isPending}
            onDeleteToast={handleDeleteToast}
            customization={customization?.TransactionToastContent}
          />
        )}
      </Progress>
    </TransactionToastWrapper>
  );
};
