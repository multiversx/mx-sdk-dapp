import React from 'react';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink';
import {
  ScAddressIcon,
  AccountName,
  ShardSpan
} from 'UI/TransactionsTable/components';
import { addressIsValid } from 'utils/account/addressIsValid';
import {
  WithClassnameType,
  WithTransactionType
} from '../../../../../UI/types';
import { DetailItem } from '../../DetailItem';

const TransactionInfoFromComponent = ({
  className,
  transaction,
  styles
}: WithTransactionType & WithClassnameType & WithStylesImportType) => (
  <DetailItem title='From' className={classNames(styles?.from, className)}>
    <div className={styles?.wrapper}>
      <ScAddressIcon initiator={transaction.sender} />

      {addressIsValid(transaction.sender) ? (
        <>
          <ExplorerLink
            page={String(transaction.links.senderLink)}
            className={styles?.explorer}
          >
            <AccountName
              address={transaction.sender}
              assets={transaction.senderAssets}
            />
          </ExplorerLink>

          <CopyButton className={styles?.copy} text={transaction.sender} />

          <ExplorerLink
            page={String(transaction.links.senderShardLink)}
            className={styles?.shard}
          >
            (<ShardSpan shard={transaction.senderShard} />)
          </ExplorerLink>
        </>
      ) : (
        <span className={styles?.shard}>
          (<ShardSpan shard={transaction.sender} />)
        </span>
      )}
    </div>
  </DetailItem>
);

export const TransactionInfoFrom = withStyles(TransactionInfoFromComponent, {
  ssrStyles: () =>
    import(
      'UI/TransactionInfo/components/transactionInfoFields/TransactionInfoFrom/styles.scss'
    ),
  clientStyles: () =>
    require('UI/TransactionInfo/components/transactionInfoFields/TransactionInfoFrom/styles.scss')
      .default
});
