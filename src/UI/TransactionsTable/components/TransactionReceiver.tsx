import React from 'react';
import classNames from 'classnames';

import globalStyles from 'assets/sass/main.scss';
import { DataTestIdsEnum } from 'constants/index';
import { TransactionDirectionEnum } from 'types/serverTransactions.types';
import { ExplorerLink } from 'UI/ExplorerLink';

import { WithTransactionType } from 'UI/types';
import { AccountName } from './AccountName';
import { LockedTokenAddressIcon } from './LockedTokenAddressIcon';
import { ScAddressIcon } from './ScAddressIcon';

import styles from './transactionsTable.styles.scss';

export interface TransactionReceiverPropsType extends WithTransactionType {
  showLockedAccounts?: boolean;
}

export const TransactionReceiver = ({
  transaction,
  showLockedAccounts
}: TransactionReceiverPropsType) => {
  const directionIn =
    transaction.transactionDetails.direction === TransactionDirectionEnum.IN;

  return (
    <div
      className={classNames(
        globalStyles.dFlex,
        globalStyles.alignItemsCenter,
        styles.transactionCell
      )}
      data-testid={DataTestIdsEnum.transactionReceiver}
    >
      {showLockedAccounts && (
        <LockedTokenAddressIcon
          address={transaction.receiver}
          tokenId={transaction.tokenIdentifier ?? ''}
        />
      )}

      <ScAddressIcon initiator={transaction.receiver} />

      {directionIn ? (
        <div
          className={classNames(
            globalStyles.w100,
            styles.transactionCellMargin,
            styles.transactionCellOverflow
          )}
        >
          <AccountName
            address={transaction.sender}
            assets={transaction.senderAssets}
          />
        </div>
      ) : (
        <ExplorerLink
          page={transaction.links.receiverLink ?? ''}
          data-testid={DataTestIdsEnum.receiverLink}
          className={classNames(
            globalStyles.w100,
            styles.transactionCellMargin,
            styles.transactionCellOverflow,
            styles.transactionCellLink
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
