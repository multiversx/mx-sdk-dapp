import React, { Fragment } from 'react';
import classNames from 'classnames';

import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink';
import { AccountName } from 'UI/TransactionsTable/components';
import { addressIsValid } from 'utils/account/addressIsValid';
import { explorerUrlBuilder } from 'utils/transactions/getInterpretedTransaction/helpers';

import globalStyles from 'assets/sass/main.scss';
import styles from '../styles.scss';

interface OperationBlockPropsTypes {
  address: string;
  transaction: InterpretedTransactionType;
  action?: string;
  isFullSize?: boolean;
  direction?: string;
}

export const OperationBlock = (props: OperationBlockPropsTypes) => {
  const { address, transaction, action, isFullSize, direction } = props;
  let operationAssets;

  if (address === transaction.sender) {
    operationAssets = transaction.senderAssets;
  }

  if (address === transaction.receiver) {
    operationAssets = transaction.receiverAssets;
  }

  const directions = {
    Internal: 'int',
    In: 'in',
    Out: 'out',
    Self: 'self'
  };

  return (
    <div
      className={classNames(styles.operationBlock, {
        [globalStyles.col12]: isFullSize,
        [globalStyles.prXl0]: !isFullSize,
        [globalStyles.pl3]: !isFullSize && operationAssets,
        [globalStyles.colLg6]: !isFullSize && !operationAssets,
        [globalStyles.colXl4]: !isFullSize && !operationAssets
      })}
    >
      {direction && (
        <div
          className={classNames(
            styles.direction,
            styles[directions[direction]]
          )}
        >
          {directions[direction]}
        </div>
      )}

      {action && (
        <FontAwesomeIcon
          icon={faCaretRight}
          size='xs'
          className={classNames(globalStyles.textSecondary, globalStyles.mr2)}
        />
      )}

      <div className={classNames(globalStyles.textNowrap, globalStyles.mr2)}>
        {action || ''}
      </div>

      {addressIsValid(address) ? (
        <Fragment>
          <ExplorerLink
            page={explorerUrlBuilder.accountDetails(address)}
            className={styles.explorer}
          >
            <AccountName address={address} assets={operationAssets} />
          </ExplorerLink>

          <CopyButton text={address} className={styles.copy} />
        </Fragment>
      ) : (
        ''
      )}
    </div>
  );
};
