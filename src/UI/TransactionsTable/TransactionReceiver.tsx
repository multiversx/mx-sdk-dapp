import React from 'react';
import classNames from 'classnames';

import {
  ExtendedTransactionType,
  TransactionDirectionEnum
} from 'components/TransactionsInterpreter/helpers/types';

import { ExplorerLink } from '../ExplorerLink';
import { AccountName } from './AccountName';
import { LockedTokenAddressIcon } from './LockedTokenAddressIcon';
import { ScAddressIcon } from './ScAddressIcon';

import globalStyles from 'assets/sass/main.scss';
import styles from './transactionsTableStyles.scss';

export interface TransactionReceiverPropsTypes {
  transaction: ExtendedTransactionType;
  showLockedAccounts?: boolean;
}

export const TransactionReceiver = (props: TransactionReceiverPropsTypes) => {
  const { transaction, showLockedAccounts } = props;

  const directionIn =
    transaction.transactionDetails.direction === TransactionDirectionEnum.IN;

  return (
    <div
      className={classNames(
        globalStyles.dFlex,
        globalStyles.alignItemsCenter,
        styles.transactionCell
      )}
    >
      {showLockedAccounts && (
        <LockedTokenAddressIcon
          address={transaction.receiver}
          tokenId={transaction.tokenIdentifier ?? ''}
        />
      )}

      <ScAddressIcon initiator={transaction.receiver} />

      {directionIn ? (
        <AccountName
          address={transaction.receiver}
          assets={transaction.receiverAssets}
        />
      ) : (
        <ExplorerLink
          page={transaction.links.receiverLink ?? ''}
          data-testid='receiverLink'
          className={classNames(
            globalStyles.trimWrapper,
            styles.transactionCellMargin
          )}
        >
          <AccountName
            address={transaction.receiver}
            assets={transaction.receiverAssets}
          />
        </ExplorerLink>
      )}
    </div>
  );
};
