import React, { useMemo, useRef, useState } from 'react';
import classNames from 'classnames';

import { useGetTransactionDisplayInfo } from 'hooks';

import icons from 'optionalPackages/fortawesome-free-solid-svg-icons';
import moment from 'optionalPackages/moment';
import ReactFontawesome from 'optionalPackages/react-fontawesome';
import { useSelector } from 'redux/DappProviderContext';
import { shardSelector } from 'redux/selectors';
import { isCrossShardTransaction } from 'services/transactions/isCrossShardTransaction';
import { SignedTransactionType } from 'types';

import Progress from 'UI/Progress';
import TxDetails from 'UI/TxDetails';

import {
  getAddressFromDataField,
  getIsTransactionPending,
  getIsTransactionTimedOut,
  getGeneratedClasses
} from 'utils';

import styles from './styles.scss';
import { TransactionToastPropsType } from './types';

const averageTxDurationMs = 6000;
const crossShardRounds = 5;

const TransactionToast = ({
  toastId,
  title = '',
  shouldRenderDefaultCss = true,
  className = '',
  withTxNonce = false,
  transactions,
  status,
  onClose,
  startTimeProgress,
  endTimeProgress,
  lifetimeAfterSuccess
}: TransactionToastPropsType) => {
  const ref = useRef(null);
  const [shouldRender, setShouldRender] = useState(true);
  const transactionDisplayInfo = useGetTransactionDisplayInfo(toastId);
  const accountShard = useSelector(shardSelector);

  const {
    errorMessage = 'Transaction failed',
    timedOutMessage = 'Transaction timed out',
    successMessage = 'Transaction successful',
    processingMessage = 'Processing transaction'
  } = transactionDisplayInfo;

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

  const progress = { startTime, endTime };
  const style = getGeneratedClasses(className, shouldRenderDefaultCss, {
    ...styles
  });

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

  const isPending = getIsTransactionPending(status);
  const isTimedOut = getIsTransactionTimedOut(status);

  const toatsOptionsData = {
    signed: pendingToastData,
    sent: pendingToastData,
    pending: pendingToastData,
    success: successToastData,
    cancelled: failToastData,
    fail: failToastData,
    timedOut: timedOutToastData
  };

  const toastDataState = toatsOptionsData[status!];

  const handleDeleteToast = () => {
    setShouldRender(false);
    onClose?.(toastId);
  };

  if (!shouldRender || transactions == null) {
    return null;
  }

  return (
    <div ref={ref} className={style.toast} key={toastId}>
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
              <ReactFontawesome.FontAwesomeIcon
                iconSize='5x'
                icon={toastDataState.icon}
                className={style.svg}
              />
            </div>

            {withTxNonce &&
              transactions.map((tx: any) => (
                <p className={style.nonce} key={tx.nonce.valueOf()}>
                  {tx.nonce.valueOf()}
                </p>
              ))}
          </div>

          <div className={style.right}>
            <div className={style.heading}>
              <h5 className={style.title}>{toastDataState.title}</h5>

              {true && (
                <button
                  type='button'
                  className={style.close}
                  onClick={handleDeleteToast}
                >
                  <ReactFontawesome.FontAwesomeIcon
                    icon={icons.faTimes}
                    size='xs'
                  />
                </button>
              )}
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
