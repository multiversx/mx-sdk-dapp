import React from 'react';

import {
  faCheck,
  faCircleNotch,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CopyButton from 'UI/CopyButton';
import ExplorerLink from 'UI/ExplorerLink';
import Trim from 'UI/Trim';
import { getGeneratedClasses } from 'UI/utils';
import { isServerTransactionPending } from 'utils';
import { Props } from './types';

const TxDetails = ({
  title,
  transactions,
  className = 'tx-details',
  isTimedOut = false,
  shouldRenderDefaultCss = true
}: Props) => {
  const generatedClasses = getGeneratedClasses(
    className,
    shouldRenderDefaultCss,
    {
      title: 'mb-0',
      statusTransactions: 'mb-2 mt-1',
      iconSuccess: 'mr-1 text-secondary',
      iconFailed: 'mr-1 text-secondary',
      trimContainer: 'text-nowrap trim-fs-sm mr-3',
      iconPending: 'mr-1 text-secondary fa-spin slow-spin',
      item: 'tx-description d-flex justify-content-start align-items-center'
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
    icon: faCircleNotch,
    classNames: generatedClasses.iconPending
  };

  const iconData: Record<string, typeof iconPendingData> = {
    pending: iconPendingData,
    success: iconSuccessData,
    fail: iconFailedData,
    invalid: iconFailedData,
    timedOut: iconFailedData
  };
  return (
    <React.Fragment>
      {title && <div className={generatedClasses.title}>{title}</div>}
      <div className={generatedClasses.statusTransactions}>
        {
          transactions.filter((tx) => !isServerTransactionPending(tx.status))
            .length
        }{' '}
        / {transactions.length} transactions processed
      </div>
      {transactions.map(({ hash, status }) => {
        const iconSrc = iconData[status];
        return (
          <div className={generatedClasses.item} key={hash}>
            {!isTimedOut && iconSrc != null && (
              <FontAwesomeIcon
                icon={iconSrc.icon}
                className={iconSrc.classNames}
              />
            )}
            <span
              className={generatedClasses.trimContainer}
              style={{ width: '10rem' }}
            >
              <Trim text={hash} />
            </span>
            <CopyButton text={hash} />
            {!isServerTransactionPending(status) && (
              <ExplorerLink page={`/transactions/${hash}`} className='ml-2' />
            )}
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default TxDetails;
