import React, { useMemo, useState } from 'react';
import classNames from 'classnames';
import { useGetTransactionDisplayInfo } from 'hooks/transactions/useGetTransactionDisplayInfo';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'reduxStore/DappProviderContext';
import { shardSelector } from 'reduxStore/selectors';
import { SignedTransactionsBodyType } from 'types';
import { Progress } from 'UI/Progress';
import { TxDetails } from 'UI/TxDetails';

import {
  getAreTransactionsOnSameShard,
  getIsTransactionPending,
  getIsTransactionTimedOut
} from 'utils/transactions';

import CloseButton from './components/CloseButton';
import { TransactionToastPropsType } from './types';
import { getGeneratedClasses } from 'UI/utils/getGeneratedClasses';
import { getToastDataStateByStatus } from './utils';
import styles from './styles.scss';
import wrapperStyles from 'UI/TransactionsToastList/styles.scss';

const AVERAGE_TX_DURATION_MS = 6000;
const CROSS_SHARD_ROUNDS = 5;

const TransactionToast = ({
  toastId,
  title = '',
  shouldRenderDefaultCss = true,
  className = 'transaction-toast',
  startTimeProgress,
  endTimeProgress,
  lifetimeAfterSuccess,
  signedTransactionsToRender
}: TransactionToastPropsType) => {
  const [shouldRender, setShouldRender] = useState(true);
  const transactionDisplayInfo = useGetTransactionDisplayInfo(toastId);
  const accountShard = useSelector(shardSelector);

  const currentTx: SignedTransactionsBodyType =
    signedTransactionsToRender[toastId];

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
    const startTime = startTimeProgress || moment().unix();
    const endTime =
      endTimeProgress ||
      moment().add(Number(transactionDuration), 'milliseconds').unix();
    return [startTime, endTime];
  }, []);

  if (invalidCurrentTx) {
    return null;
  }

  if (transactions === null || !shouldRender) {
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
    setShouldRender(false);
  };

  if (!shouldRender || transactions == null) {
    return null;
  }

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

              <CloseButton
                {...{ style, isPending, onDelete: handleDeleteToast }}
              />
            </div>

            <div className={style.footer}>
              <TxDetails {...{ transactions, title, isTimedOut }} />
            </div>
          </div>
        </div>
      </Progress>
    </div>
  );
};

export default TransactionToast;
