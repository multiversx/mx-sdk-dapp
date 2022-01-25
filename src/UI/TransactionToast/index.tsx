import React, { useMemo, useRef, useState } from 'react';

import { useGetSignedTransactions, useGetTransactionDisplayInfo } from 'hooks';
import { optionalImport } from 'lib';
import IconState from 'UI/IconState';
import Progress from 'UI/Progress';
import TxDetails from 'UI/TxDetails';
import { getGeneratedClasses, isBatchTransactionPending } from 'utils';

import { TransactionToastPropsType } from './types';

const { FontAwesomeIcon } = optionalImport('@fortawesome/react-fontawesome');
const { faCheck, faHourglass, faTimes } = optionalImport(
  '@fortawesome/free-solid-svg-icons'
);
const moment = optionalImport('moment');
const { Toast } = optionalImport('react-bootstrap');

export const TransactionToast = ({
  toastId,
  title = '',
  shouldRenderDefaultCss = true,
  className = 'transaction-toast'
}: TransactionToastPropsType) => {
  const ref = useRef(null);
  const [shouldRender, setShouldRender] = useState(true);
  const transactionDisplayInfo = useGetTransactionDisplayInfo(toastId);
  const signedTransactions = useGetSignedTransactions();
  const {
    errorMessage = 'Transaction failed',
    successMessage = 'Transaction successful',
    processingMessage = 'Processing transaction',
    transactionDuration = 10000
  } = transactionDisplayInfo;

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
    const startTime = moment().unix();
    const endTime = moment()
      .add(Number(transactionDuration), 'milliseconds')
      .unix();
    return [startTime, endTime];
  }, []);

  const progress = { startTime, endTime };

  const currentTx: any = signedTransactions[toastId];
  if (currentTx == null) {
    return null;
  }

  const { transactions, status } = currentTx;

  const successToastData = {
    id: toastId,
    icon: faCheck,
    expires: 30000,
    hasCloseButton: true,
    title: successMessage,
    iconClassName: 'bg-success'
  };

  const pendingToastData = {
    id: toastId,
    expires: false,
    icon: faHourglass,
    hasCloseButton: false,
    title: processingMessage,
    iconClassName: 'bg-warning'
  };

  const failedToastData = {
    id: toastId,
    icon: faTimes,
    title: errorMessage,
    hasCloseButton: true,
    iconClassName: 'bg-danger'
  };

  const isPending = isBatchTransactionPending(status);

  const toatsOptionsData = {
    signed: pendingToastData,
    cancelled: failedToastData,
    successful: successToastData,
    sent: pendingToastData,
    failed: failedToastData,
    timedOut: failedToastData
  };

  const toastDataState = toatsOptionsData[status];

  const handleDeleteToast = () => {
    setShouldRender(false);
  };

  if (!shouldRender) {
    return null;
  }

  return (
    <Toast ref={ref} className={generatedClasses.wrapper} key={toastId}>
      <Progress
        key={toastId}
        id={toastId}
        progress={progress}
        done={!isPending}
      >
        <div className={generatedClasses.toastContainer}>
          <div className={generatedClasses.iconContainer}>
            <IconState
              iconSize='2x'
              icon={toastDataState.icon}
              className={toastDataState.iconClassName}
            />
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
                  <FontAwesomeIcon icon={faTimes} size='xs' />
                </button>
              )}
            </div>
            <div className={generatedClasses.toastFooter}>
              <TxDetails transactions={transactions} title={title} />
            </div>
          </div>
        </div>
      </Progress>
    </Toast>
  );
};

export default TransactionToast;
