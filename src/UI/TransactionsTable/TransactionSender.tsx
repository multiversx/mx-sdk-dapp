import classNames from 'classnames';
import globalStyles from '../../assets/sass/main.scss';
import { ExplorerLink } from '../ExplorerLink';
import React from 'react';
import {
  ExtendedTransactionType,
  TransactionDirection
} from 'components/TransactionsInterpreter/helpers/types';
import { ShardSpan } from './ShardSpan';
import { LockedTokenAddressIcon } from './LockedTokenAddressIcon';
import { ScAddressIcon } from './ScAddressIcon';
import { AccountName } from './AccountName';
import { addressIsValid } from '../../utils';

type TransactionSenderProps = {
  transaction: ExtendedTransactionType;
  showLockedAccounts?: boolean;
};

export const TransactionSender: React.FC<TransactionSenderProps> = ({
  transaction,
  showLockedAccounts
}) => {
  const directionOut =
    transaction.transactionDetails.direction === TransactionDirection.OUT;

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
