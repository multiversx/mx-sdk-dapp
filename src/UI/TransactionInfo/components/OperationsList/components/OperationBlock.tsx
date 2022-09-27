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

  return (
    <div
      className={classNames(globalStyles.dFlex, globalStyles.alignItemsCenter, {
        [globalStyles.col12]: isFullSize,
        [globalStyles.prXl0]: !isFullSize,
        [globalStyles.pl3]: !isFullSize && operationAssets,
        [globalStyles.colLg6]: !isFullSize && !operationAssets,
        [globalStyles.colXl3]: !isFullSize && !operationAssets
      })}
    >
      {direction && (
        <div className={globalStyles.mr2}>{direction.toUpperCase()}</div>
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
          <ExplorerLink page={explorerUrlBuilder.accountDetails(address)}>
            <AccountName address={address} assets={operationAssets} />
          </ExplorerLink>

          <CopyButton text={address} className={globalStyles.ml2} />
        </Fragment>
      ) : (
        ''
      )}
    </div>
  );
};
