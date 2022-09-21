import React from 'react';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';

import {
  InterpretedTransactionType,
  TransactionDirectionEnum
} from 'types/serverTransactions.types';
import { ExplorerLink } from 'UI/ExplorerLink';
import { AccountName } from './AccountName';
import { LockedTokenAddressIcon } from './LockedTokenAddressIcon';
import { ScAddressIcon } from './ScAddressIcon';

type TransactionReceiverProps = {
  transaction: InterpretedTransactionType;
  showLockedAccounts?: boolean;
};

export const TransactionReceiver = ({
  transaction,
  showLockedAccounts
}: TransactionReceiverProps) => {
  const directionIn =
    transaction.transactionDetails.direction === TransactionDirectionEnum.IN;

  return (
    <div
      className={classNames(globalStyles.dFlex, globalStyles.alignItemsCenter)}
      data-testid='transactionReceiver'
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
          className={globalStyles.trimWrapper}
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
