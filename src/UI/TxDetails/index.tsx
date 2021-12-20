import * as React from 'react';
import { faTimes, faSpinner, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CopyButton from 'UI/CopyButton';
import ExplorerLink from 'UI/ExplorerLink';
import Trim from 'UI/Trim';
import { getGeneratedClasses, isServerTransactionPending } from 'utils';

const TxDetails = ({
  title,
  className = 'tx-details',
  transactions,
  shouldRenderDefaultCss = true
}: {
  className?: string;
  title?: React.ReactNode;
  shouldRenderDefaultCss?: boolean;
  transactions: Array<any>;
}) => {
  const generatedClasses = getGeneratedClasses(
    className,
    shouldRenderDefaultCss,
    {
      iconSuccess: 'mr-1 text-secondary',
      iconFailed: 'mr-1 text-secondary',
      iconPending: 'mr-1 text-secondary fa-spin slow-spin'
    }
  );

  const iconSuccessData = {
    icon: faCheck,
    classNames: generatedClasses.iconSuccess
  };

  const iconFailedData = {
    icon: faTimes,
    classNames: generatedClasses.iconSuccess
  };

  const iconPendingData = {
    icon: faSpinner,
    classNames: generatedClasses.iconPending
  };

  const iconData = {
    pending: iconPendingData,
    success: iconSuccessData,
    executed: iconSuccessData,
    failed: iconFailedData,
    invalid: iconFailedData
  };

  return (
    <React.Fragment>
      {title && <div className='mb-0'>{title}</div>}
      <div className='mb-2 mt-1'>
        {
          transactions.filter((tx) => !isServerTransactionPending(tx.status))
            .length
        }{' '}
        / {transactions.length} transactions processed
      </div>
      {transactions.map(({ hash, status }) => (
        <div
          className='tx-description d-flex justify-content-start align-items-center'
          key={hash}
        >
          <FontAwesomeIcon
            icon={iconData[status].icon}
            className={iconData[status].classNames}
          />
          <span
            className='text-nowrap trim-fs-sm mr-3'
            data-testid='toastTxHash'
            style={{ width: '10rem' }}
          >
            <Trim text={hash} />
          </span>
          <CopyButton text={hash} />
          {!isServerTransactionPending(status) && (
            <ExplorerLink page={`/transactions/${hash}`} className='ml-2' />
          )}
        </div>
      ))}
    </React.Fragment>
  );
};

export default TxDetails;
