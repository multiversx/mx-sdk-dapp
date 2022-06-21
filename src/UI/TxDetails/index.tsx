import React from 'react';
import globalStyles from 'assets/sass/main.scss';
import icons from 'optionalPackages/fortawesome-free-solid-svg-icons';
import ReactFontawesome from 'optionalPackages/react-fontawesome';
import CopyButton from 'UI/CopyButton';
import ExplorerLink from 'UI/ExplorerLink';
import Trim from 'UI/Trim';
import { getGeneratedClasses, isServerTransactionPending } from 'utils';
import styles from './tx-details.scss';

import {
  faCheck,
  faCircleNotch,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink';
import { Trim } from 'UI/Trim';
import { getGeneratedClasses } from 'UI/utils';
import { isServerTransactionPending } from 'utils';
import { Props } from './types';

export const TxDetails = ({
  title,
  transactions,
  className = styles.txDetails,
  isTimedOut = false,
  shouldRenderDefaultCss = true
}: Props) => {
  const generatedClasses = getGeneratedClasses(
    className,
    shouldRenderDefaultCss,
    {
      title: globalStyles.mb0,
      statusTransactions: `${globalStyles.mb2} ${globalStyles.mt1}`,
      iconSuccess: `${globalStyles.mr1} ${globalStyles.textSecondary}`,
      iconFailed: `${globalStyles.mr1} ${globalStyles.textSecondary}`,
      trimContainer: `${globalStyles.textNowrap} ${globalStyles.trimFsSm} ${globalStyles.mr3}`,
      iconPending: `${globalStyles.mr1} ${globalStyles.textSecondary} fa-spin slow-spin`,
      item: `${globalStyles.toastMessages} ${globalStyles.dFlex} ${globalStyles.justifyContentStart} ${globalStyles.alignItemsCenter}`
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
    <>
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
              <ExplorerLink
                page={`/transactions/${hash}`}
                className={globalStyles.ml2}
              />
            )}
          </div>
        );
      })}
    </>
  );
};
