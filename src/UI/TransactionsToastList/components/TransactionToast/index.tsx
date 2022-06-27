import React, { useMemo } from 'react';
import classNames from 'classnames';
import { useGetTransactionDisplayInfo } from 'hooks/transactions/useGetTransactionDisplayInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'reduxStore/DappProviderContext';
import { shardSelector } from 'reduxStore/selectors';
import {
  SignedTransactionsBodyType,
  SignedTransactionsType,
  SignedTransactionType,
  TransactionBatchStatusesEnum
} from 'types';
import { Progress } from 'UI/Progress';
import { TxDetails } from 'UI/TxDetails';

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
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const AVERAGE_TX_DURATION_MS = 6000;
const CROSS_SHARD_ROUNDS = 5;

export interface TransactionToastPropsType {
  title?: string;
  toastId: string;
  className?: string;
  errorMessage?: string;
  successMessage?: string;
  endTimeProgress?: number;
  processingMessage?: string;
  startTimestamp?: number;
  shouldRenderDefaultCss?: boolean;
  transactions?: SignedTransactionType[];
  status?: TransactionBatchStatusesEnum;
  signedTransactionsToRender: SignedTransactionsType;
  lifetimeAfterSuccess?: number;
  onDelete?: (toastId: string) => void;
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
  signedTransactionsToRender
}: TransactionToastPropsType) => {
  const transactionDisplayInfo = useGetTransactionDisplayInfo(toastId);
  const accountShard = useSelector(shardSelector);

  const currentTx: SignedTransactionsBodyType =
    signedTransactionsToRender[toastId];
  if (currentTx == null) {
    return null;
  }

  const { transactions, status } = currentTx;

  const invalidCurrentTx =
    currentTx?.transactions == null || currentTx?.status == null;

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

  if (invalidCurrentTx) {
    return null;
  }

  if (transactions === null) {
    return null;
  }

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

  const closeButton = !isPending ? (
    <button type='button' className={styles.close} onClick={handleDeleteToast}>
      <FontAwesomeIcon icon={faTimes} size='xs' />
    </button>
  ) : null;

  return (
    <div className={wrapperStyles.toastWrapper}>
      <Progress
        key={toastId}
        id={toastId}
        progress={progress}
        expiresIn={lifetimeAfterSuccess}
        done={!isPending || isTimedOut}
      >
        <div className={style.content}>
          <div className={style.left}>
            <div
              className={classNames(style.icon, toastDataState.iconClassName)}
            >
              <FontAwesomeIcon
                size='5x'
                icon={toastDataState.icon}
                className={style.svg}
              />
            </div>
          </div>

          <div className={style.right}>
            <div className={style.heading}>
              <h5 className={style.title}>{toastDataState.title}</h5>
              {closeButton}
            </div>

            <div className={style.footer}>
              <TxDetails
                {...{ transactions: transactions ?? [], title, isTimedOut }}
              />
            </div>
          </div>
        </div>
      </Progress>
    </div>
  );
};
