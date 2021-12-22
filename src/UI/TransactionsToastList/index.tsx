import React, { useEffect, useState } from 'react';
import moment from 'moment';
// import { useSelector } from 'react-redux';
// import { pendingSignedTransactionsSelector } from 'redux/selectors';
import TransactionToast from 'UI/TransactionToast';
import { getGeneratedClasses } from 'utils';

import { Props } from './types';

const TransactionsToastList = ({
  shouldRenderDefaultCss = true,
  className = 'transactions-toast-list'
}: Props) => {
  const [toastsIds, setToastsIds] = useState<any>([]);

  // const pendingSignedTransactions = useSelector(
  //   pendingSignedTransactionsSelector
  // );
  const pendingSignedTransactions = {
    '1640175834704': {
      status: 'failed',
      transactions: [
        {
          nonce: 102,
          value: '1000000000000000000',
          receiver:
            'erd1qqqqqqqqqqqqqpgquvt728n40ssd8n2qns9jrlqpwq2jc4rj4cysfuj3ad',
          sender:
            'erd1z4nvnr9m72a9w0z9tadh952dfm0mvl7tauur6vg755gjcq8r35hqcldgsp',
          gasPrice: 1000000000,
          gasLimit: 60000000,
          data: 'cGluZw==',
          chainID: 'D',
          version: 1,
          signature:
            'c01b978bfbcef2c534b191f3d31c70438fcc2cc812e2a46cf39e47f78b745c77201795bc480afc3e311a459431748dc54836cc3ddb0f612a2431f307e7416207',
          hash: 'b71410220728a7ba7f7dad0e52c07ec2b9ef204edcb3fcb8e7b401be06cbd713',
          status: 'failed',
          errorMessage: 'Already pinged'
        }
      ],
      errorMessage: 'Already pinged'
    }
  };

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
      endTime: moment().add(10000000, 'seconds').unix(),
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

export default TransactionsToastList;
