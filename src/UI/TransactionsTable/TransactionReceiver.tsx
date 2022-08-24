import React from 'react';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import {
  ExtendedTransactionType,
  TransactionDirectionEnum
} from 'components/TransactionsInterpreter/helpers/types';
import { ExplorerLink } from '../ExplorerLink';
import { AccountName } from './AccountName';
import { LockedTokenAddressIcon } from './LockedTokenAddressIcon';
import { ScAddressIcon } from './ScAddressIcon';

type TransactionReceiverProps = {
  transaction: ExtendedTransactionType;
  showLockedAccounts?: boolean;
};

export const TransactionReceiver: React.FC<TransactionReceiverProps> = ({
  transaction,
  showLockedAccounts
}) => {
  const directionIn =
    transaction.transactionDetails.direction === TransactionDirectionEnum.IN;

  return (
    <div
      className={classNames(globalStyles.dFlex, globalStyles.alignItemsCenter)}
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
