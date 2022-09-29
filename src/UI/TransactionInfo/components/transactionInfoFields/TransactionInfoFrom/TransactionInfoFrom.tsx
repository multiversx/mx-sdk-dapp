import React, { Fragment } from 'react';

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

import styles from './styles.scss';

interface TransactionInfoFromPropsTypes {
  transaction: InterpretedTransactionType;
}

export const TransactionInfoFrom = (props: TransactionInfoFromPropsTypes) => {
  const { transaction } = props;

  return (
    <DetailItem title='From' className={styles.from}>
      <div className={styles.wrapper}>
        <ScAddressIcon initiator={transaction.sender} />

        {addressIsValid(transaction.sender) ? (
          <Fragment>
            <ExplorerLink
              page={String(transaction.links.senderLink)}
              className={styles.explorer}
            >
              <AccountName
                address={transaction.sender}
                assets={transaction.senderAssets}
              />
            </ExplorerLink>

            <CopyButton className={styles.copy} text={transaction.sender} />

            <ExplorerLink
              page={String(transaction.links.senderShardLink)}
              className={styles.shard}
            >
              (<ShardSpan shard={transaction.senderShard} />)
            </ExplorerLink>
          </Fragment>
        ) : (
          <span className={styles.shard}>
            (<ShardSpan shard={transaction.sender} />)
          </span>
        )}
      </div>
    </DetailItem>
  );
};
