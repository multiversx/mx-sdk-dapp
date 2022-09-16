import React from 'react';
import classNames from 'classnames';

import {
  ExtendedTransactionType,
  TransactionDirectionEnum
} from 'components/TransactionsInterpreter/helpers/types';
import { addressIsValid } from 'utils';

import { ExplorerLink } from '../ExplorerLink';
import { AccountName } from './AccountName';
import { LockedTokenAddressIcon } from './LockedTokenAddressIcon';
import { ScAddressIcon } from './ScAddressIcon';
import { ShardSpan } from './ShardSpan';

import globalStyles from 'assets/sass/main.scss';
import styles from './transactionsTableStyles.scss';

export interface TransactionSenderPropsTypes {
  transaction: ExtendedTransactionType;
  showLockedAccounts?: boolean;
}

export const TransactionSender = (props: TransactionSenderPropsTypes) => {
  const { transaction, showLockedAccounts } = props;
  const directionOut =
    transaction.transactionDetails.direction === TransactionDirectionEnum.OUT;

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
          address={transaction.sender}
          tokenId={transaction.tokenIdentifier ?? ''}
        />
      )}

      <ScAddressIcon initiator={transaction.sender} />

      {directionOut ? (
        <AccountName
          address={transaction.sender}
          assets={transaction.senderAssets}
        />
      ) : addressIsValid(transaction.sender) ? (
        <ExplorerLink
          page={transaction.links.senderLink ?? ''}
          data-testid='senderLink'
          className={classNames(
            globalStyles.trimWrapper,
            styles.transactionCellMargin
          )}
        >
          <AccountName
            address={transaction.sender}
            assets={transaction.senderAssets}
          />
        </ExplorerLink>
      ) : (
        <ShardSpan shard={transaction.sender} />
      )}
    </div>
  );
};
