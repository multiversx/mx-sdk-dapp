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
      className={`d-flex align-items-center ${
        isFullSize
          ? 'col-12'
          : ` pr-xl-0 ${
              operationAssets ? 'pl-3 mw-lg-6 mw-xl-3' : 'col-lg-6 col-xl-3'
            }`
      }`}
    >
      {direction && (
        <div className={`direction-badge mr-2 ${direction.toLowerCase()}`}>
          {direction.toUpperCase()}
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
        {action ? action : ''}
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
