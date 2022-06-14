import React, { useMemo, useRef, useState } from 'react';

import { useGetTransactionDisplayInfo } from 'hooks';

import icons from 'optionalPackages/fortawesome-free-solid-svg-icons';
import moment from 'optionalPackages/moment';
import ReactBootstrap from 'optionalPackages/react-bootstrap';
import ReactFontawesome from 'optionalPackages/react-fontawesome';
import { useSelector } from 'reduxStore/DappProviderContext';
import { shardSelector } from 'reduxStore/selectors';
import { isCrossShardTransaction } from 'services/transactions/isCrossShardTransaction';
import { SignedTransactionType } from 'types';
import IconState from 'UI/IconState';
import Progress from 'UI/Progress';
import TxDetails from 'UI/TxDetails';
import {
  getAddressFromDataField,
  getGeneratedClasses,
  getIsTransactionPending,
  getIsTransactionTimedOut
} from 'utils';

import { TransactionToastPropsType } from './types';

const averageTxDurationMs = 6000;
const crossShardRounds = 5;

const TransactionToast = ({
  toastId,
  title = '',
  shouldRenderDefaultCss = true,
  className = 'transaction-toast',
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
  const generatedClasses = getGeneratedClasses(
    className,
    shouldRenderDefaultCss,
    {
      toastFooter: 'mb-0 text-break',
      details: 'media-body flex-grow-1',
      toastContainer: 'w-100 media p-2',
      wrapper: 'toast-visible clickable',
      toastHeader: 'd-flex justify-content-between mb-1',
      iconContainer: 'align-self-center ml-2 mr-2 pr-1',
      title: 'm-0 font-weight-normal text-nowrap text-truncate',
      closeButton: 'close d-flex side-action align-items-center mx-2 outline-0'
    }
  );

  const [startTime, endTime] = useMemo(() => {
    const startTime = startTimeProgress || moment().unix();
    const endTime =
      endTimeProgress ||
      moment().add(Number(transactionDuration), 'milliseconds').unix();
    return [startTime, endTime];
  }, []);

  const progress = { startTime, endTime };

  const successToastData = {
    id: toastId,
    icon: icons.faCheck,
    expires: 30000,
    hasCloseButton: true,
    title: successMessage,
    iconClassName: 'bg-success'
  };

  const pendingToastData = {
    id: toastId,
    expires: false,
    icon: icons.faHourglass,
    hasCloseButton: false,
    title: processingMessage,
    iconClassName: 'bg-warning'
  };

  const failToastData = {
    id: toastId,
    icon: icons.faTimes,
    title: errorMessage,
    hasCloseButton: true,
    iconClassName: 'bg-danger'
  };

  const timedOutToastData = {
    id: toastId,
    icon: icons.faTimes,
    title: timedOutMessage,
    hasCloseButton: true,
    iconClassName: 'bg-warning'
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
    <ReactBootstrap.Toast
      ref={ref}
      className={generatedClasses.wrapper}
      key={toastId}
    >
      <Progress
        key={toastId}
        id={toastId}
        progress={progress}
        expiresIn={lifetimeAfterSuccess}
        done={!isPending || isTimedOut}
      >
        <div className={generatedClasses.toastContainer}>
          <div className={generatedClasses.iconContainer}>
            <IconState
              iconSize='2x'
              icon={toastDataState.icon}
              className={toastDataState.iconClassName}
            />
            {withTxNonce &&
              transactions.map((tx: any) => (
                <p key={tx.nonce.valueOf()}>{tx.nonce.valueOf()}</p>
              ))}
          </div>
          <div className={generatedClasses.details} style={{ minWidth: 0 }}>
            <div className={generatedClasses.toastHeader}>
              <h5 className={generatedClasses.title}>{toastDataState.title}</h5>
              {!isPending && (
                <button
                  type='button'
                  className={generatedClasses.closeButton}
                  onClick={handleDeleteToast}
                >
                  <ReactFontawesome.FontAwesomeIcon
                    icon={icons.faTimes}
                    size='xs'
                  />
                </button>
              )}
            </div>
            <div className={generatedClasses.toastFooter}>
              <TxDetails
                transactions={transactions}
                title={title}
                isTimedOut={isTimedOut}
              />
            </div>
          </div>
        </div>
      </Progress>
    </ReactBootstrap.Toast>
  );
};

export default TransactionToast;
