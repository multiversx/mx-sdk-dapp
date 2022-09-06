import React from 'react';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';

import {
  InterpretedTransactionType,
  TransactionDirectionEnum
} from 'types/serverTransactions.types';
import { ExplorerLink } from 'UI/ExplorerLink';
import { addressIsValid } from 'utils/account/addressIsValid';
import { AccountName } from './AccountName';
import { LockedTokenAddressIcon } from './LockedTokenAddressIcon';
import { ScAddressIcon } from './ScAddressIcon';
import { ShardSpan } from './ShardSpan';

type TransactionSenderProps = {
  transaction: InterpretedTransactionType;
  showLockedAccounts?: boolean;
};

export const TransactionSender = ({
  transaction,
  showLockedAccounts
}: TransactionSenderProps) => {
  const directionOut =
    transaction.transactionDetails.direction === TransactionDirectionEnum.OUT;

  return (
    <div
      className={classNames(globalStyles.dFlex, globalStyles.alignItemsCenter)}
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
      ) : (
        <>
          {addressIsValid(transaction.sender) ? (
            <ExplorerLink
              to={transaction.links.senderLink ?? ''}
              data-testid='senderLink'
              className={globalStyles.trimWrapper}
            >
              <AccountName
                address={transaction.sender}
                assets={transaction.senderAssets}
              />
            </ExplorerLink>
          ) : (
            <ShardSpan shard={transaction.sender} />
          )}
        </>
      )}
    </div>
  );
};
