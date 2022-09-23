import React from 'react';
import classNames from 'classnames';

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

import globalStyles from 'assets/sass/main.scss';

interface TransactionInfoFromPropsTypes {
  transaction: InterpretedTransactionType;
}

export const TransactionInfoFrom = (props: TransactionInfoFromPropsTypes) => {
  const { transaction } = props;

  return (
    <DetailItem title='From'>
      <div
        className={classNames(
          globalStyles.dFlex,
          globalStyles.alignItemsCenter
        )}
      >
        <ScAddressIcon initiator={transaction.sender} />

        {addressIsValid(transaction.sender) ? (
          <>
            <ExplorerLink
              page={String(transaction.links.senderLink)}
              className={globalStyles.trimWrapper}
            >
              <AccountName
                address={transaction.sender}
                assets={transaction.senderAssets}
              />
            </ExplorerLink>

            <CopyButton
              className={globalStyles.mr2}
              text={transaction.sender}
            />

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
