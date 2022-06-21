import React, { useMemo, useState } from 'react';
import classNames from 'classnames';

import { useGetTransactionDisplayInfo } from 'hooks';

import icons from 'optionalPackages/fortawesome-free-solid-svg-icons';
import moment from 'optionalPackages/moment';
import ReactFontawesome from 'optionalPackages/react-fontawesome';

import { useSelector } from 'redux/DappProviderContext';
import { shardSelector } from 'redux/selectors';
import { isCrossShardTransaction } from 'services/transactions/isCrossShardTransaction';
import { SignedTransactionType, SignedTransactionsBodyType } from 'types';

import Progress from 'UI/Progress';
import TxDetails from 'UI/TxDetails';

import {
  getAddressFromDataField,
  getIsTransactionPending,
  getIsTransactionTimedOut,
  getGeneratedClasses
} from 'utils';

import CloseButton from './components/CloseButton';
import styles from './styles.scss';
import { TransactionToastPropsType } from './types';

const averageTxDurationMs = 6000;
const crossShardRounds = 5;

const getToastsOptionsData = (
  toastId: string,
  style: any,
  transactionDisplayInfo: any
) => {
  const {
    errorMessage = 'Transaction failed',
    timedOutMessage = 'Transaction timed out',
    successMessage = 'Transaction successful',
    processingMessage = 'Processing transaction'
  } = transactionDisplayInfo;

  const successToastData = {
    id: toastId,
    icon: icons.faCheck,
    expires: 30000,
    hasCloseButton: true,
    title: successMessage,
    iconClassName: style.success
  };

  const pendingToastData = {
    id: toastId,
    expires: false,
    icon: icons.faHourglass,
    hasCloseButton: false,
    title: processingMessage,
    iconClassName: style.warning
  };

  const failToastData = {
    id: toastId,
    icon: icons.faTimes,
    title: errorMessage,
    hasCloseButton: true,
    iconClassName: style.danger
  };

  const timedOutToastData = {
    id: toastId,
    icon: icons.faTimes,
    title: timedOutMessage,
    hasCloseButton: true,
    iconClassName: style.warning
  };

  return {
    signed: pendingToastData,
    sent: pendingToastData,
    pending: pendingToastData,
    success: successToastData,
    cancelled: failToastData,
    fail: failToastData,
    timedOut: timedOutToastData
  };
};

const TransactionToast = ({
  toastId,
  title = '',
  shouldRenderDefaultCss = true,
  className = '',
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

  const isSameShard = useMemo(
    () =>
      transactions!.reduce(
        (
          prevTxIsSameShard: boolean,
          { receiver, data }: SignedTransactionType
        ) => {
          const receiverAddress = getAddressFromDataField({
            receiver,
            data: data ?? ''
          });
          if (receiverAddress == null) {
            return prevTxIsSameShard;
          }
          return (
            prevTxIsSameShard &&
            isCrossShardTransaction({
              receiverAddress,
              senderShard: accountShard
            })
          );
        },
        true
      ),
    [transactions, accountShard]
  );

  const shardAdjustedDuration = isSameShard
    ? averageTxDurationMs
    : crossShardRounds * averageTxDurationMs;

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

  const toastsOptionsData = getToastsOptionsData(
    toastId,
    style,
    transactionDisplayInfo
  );

  const toastDataState = toastsOptionsData[status!];

  const handleDeleteToast = () => {
    setShouldRender(false);
  };

  if (!shouldRender || transactions == null) {
    return null;
  }

  return (
    <Progress
      key={toastId}
      id={toastId}
      progress={progress}
      expiresIn={lifetimeAfterSuccess}
      done={!isPending || isTimedOut}
    >
      <div className={style.content}>
        <div className={style.left}>
          <div className={classNames(style.icon, toastDataState.iconClassName)}>
            <ReactFontawesome.FontAwesomeIcon
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
  );
};

export default TransactionToast;
