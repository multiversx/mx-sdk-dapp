import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';
import Progress from 'UI/Progress';

import { faCheck, faHourglass, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconState from 'UI/IconState';
// import ToastMessage from 'UI/ToastMessage';
import { getGeneratedClasses, isBatchTransactionPending } from 'utils';
import TxDetails from 'UI/TxDetails';
import { useSelector } from 'react-redux';
import { signedTransactionsSelector } from 'redux/selectors';
// import TransactionToastStatusUpdate from '../CustomToasts';

// interface Props {
//   data: any;
//   className?: string;
// }

const TransactionToast = ({
  toastId,
  startTime,
  endTime,
  successMessage,
  errorMessage,
  processingMessage,
  className = '',
  title,
  shouldRenderDefaultCss = true
}: any) => {
  const ref = React.useRef(null);
  const [shouldRender, setShouldRender] = useState(true);

  const generatedClasses = getGeneratedClasses(
    className,
    shouldRenderDefaultCss,
    {
      wrapper: 'toast-visible clickable'
    }
  );

  const signedTransactions = useSelector(signedTransactionsSelector);

  const currentTx: any = signedTransactions[toastId];

  const { transactions, status } = currentTx;

  const progress = { startTime, endTime };

  const successToastData = {
    id: toastId,
    title: successMessage,
    iconClassName: 'bg-success',
    icon: faCheck,
    expires: 30000,
    hasCloseButton: true
  };

  const pendingToastData = {
    id: toastId,
    title: processingMessage,
    iconClassName: 'bg-warning',
    icon: faHourglass,
    expires: false,
    hasCloseButton: false,
  };

  const failedToastData = {
    id: toastId,
    title: errorMessage,
    iconClassName: 'bg-danger',
    icon: faTimes,
    hasCloseButton: true
  };

  const isPending = isBatchTransactionPending(status);

  const toatsOptionsData = {
    signed: pendingToastData,
    cancelled: failedToastData,
    successful: successToastData,
    sent: pendingToastData,
    failed: failedToastData,
    timedOut: failedToastData,
  };

  const toastDataState = toatsOptionsData[status];
  
  const handleDeleteToast = () => {
    setShouldRender(false);
  };

  if(!shouldRender){
    return null;
  }

  return (
    <Toast ref={ref} className={generatedClasses.wrapper} key={toastId}>
      <Progress id={toastId} progress={progress} done={!isPending}>
        <div className='w-100 media p-2'>
          <div className='align-self-center ml-2 mr-2 pr-1'>
            <IconState iconSize='2x' icon={toastDataState.icon} className={className} />
          </div>
          <div className='media-body flex-grow-1' style={{ minWidth: 0 }}>
            <div className='d-flex justify-content-between mb-1'>
              <h5 className='m-0 font-weight-normal text-nowrap text-truncate'>
                {toastDataState.title}
              </h5>
              {!isPending && (
                <button
                  type='button'
                  className='close d-flex side-action align-items-center mx-2 outline-0'
                  onClick={handleDeleteToast}
                >
                  <FontAwesomeIcon icon={faTimes} size='xs' />
                </button>
              )}
            </div>
            <div className='mb-0 text-break'>
              <TxDetails
                transactions={transactions}
                title={title}
              />
            </div>
          </div>
        </div>
      </Progress>
    </Toast>
  );
};

export default TransactionToast;
