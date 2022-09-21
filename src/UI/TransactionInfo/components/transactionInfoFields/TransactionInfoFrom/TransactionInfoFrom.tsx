import React from 'react';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink';
import {
  ScAddressIcon,
  AccountName,
  ShardSpan
} from 'UI/TransactionsTable/components';
import { addressIsValid } from 'utils/account/addressIsValid';
import { DetailItem } from '../../DetailItem';

export const TransactionInfoFrom = ({
  transaction
}: {
  transaction: InterpretedTransactionType;
}) => {
  return (
    <DetailItem title='From'>
      <div className='d-flex align-items-center'>
        <ScAddressIcon initiator={transaction.sender} />
        {addressIsValid(transaction.sender) ? (
          <>
            <ExplorerLink
              page={String(transaction.links.senderLink)}
              className='trim-wrapper'
            >
              <AccountName
                address={transaction.sender}
                assets={transaction.senderAssets}
              />
            </ExplorerLink>
            <CopyButton className='mr-2' text={transaction.sender} />
            <ExplorerLink
              page={String(transaction.links.senderShardLink)}
              className='flex-shrink-0'
            >
              (<ShardSpan shard={transaction.senderShard} />)
            </ExplorerLink>
          </>
        ) : (
          <ShardSpan shard={transaction.sender} />
        )}
      </div>
    </DetailItem>
  );
};
