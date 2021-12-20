// import Toast from 'components/TransactionSender/Toast';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { pendingSignedTransactionsSelector } from 'redux/selectors';
// import { ToastType } from 'types/toasts';
import TransactionToast from 'UI/TransactionToast';
import { getGeneratedClasses } from 'utils';

import { Props } from './types';

const TrasanactionsToastList = ({
  shouldRenderDefaultCss = true,
  className = 'transactions-toast-list'
}: Props) => {
  const [toastsIds, setToastsIds] = useState<any>([]);

  const pendingSignedTransactions = useSelector(
    pendingSignedTransactionsSelector
  );

  const generatedClasses = getGeneratedClasses(
    className,
    shouldRenderDefaultCss,
    {
      wrapper:
        'toast-messages d-flex flex-column align-items-center justify-content-sm-end',
      toast: ''
    }
  );

  const mappedToastsList = toastsIds?.map((toastId: string) => {

    const toastProps = {
      toastId: toastId,
      processingMessage: 'Processing transaction',
      successMessage: 'Transaction successful',
      errorMessage: 'Transaction failed',
      submittedMessage: 'Transaction submitted',
      startTime: moment().unix(),
      endTime: moment()
        .add(10000000, 'seconds')
        .unix(),
      className: generatedClasses.toastContainer
    };

    return <TransactionToast {...toastProps} key={toastId} />;
  });

  const mapPendingSignedTransactions = () => {
    const newToasts = [...toastsIds];

    for (const sessionId in pendingSignedTransactions) {
      const hasToast = toastsIds.includes(sessionId);

      if (!hasToast) {
        newToasts.push(sessionId);
      }
    }

    setToastsIds(newToasts);
  };

  useEffect(() => {
    const sessionStorageToastsIds = sessionStorage.getItem('toasts');

    if (sessionStorageToastsIds) {
      setToastsIds([...toastsIds, ...sessionStorageToastsIds]);
    }

    return () => {
      if (!toastsIds.length) {
        return;
      }

      sessionStorage.setItem('toasts', toastsIds);
    };
  }, []);

  useEffect(() => {
    mapPendingSignedTransactions();
  }, [pendingSignedTransactions]);

  return <div className={generatedClasses.wrapper}>{mappedToastsList}</div>;
};

export default TrasanactionsToastList;
