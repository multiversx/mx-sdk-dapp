import React from 'react';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
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

type TransactionSenderProps = {
  transaction: ExtendedTransactionType;
  showLockedAccounts?: boolean;
};

export const TransactionSender: React.FC<TransactionSenderProps> = ({
  transaction,
  showLockedAccounts
}) => {
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
              page={transaction.links.senderLink ?? ''}
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
