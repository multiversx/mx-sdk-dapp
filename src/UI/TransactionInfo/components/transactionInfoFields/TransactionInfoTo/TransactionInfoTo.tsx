import React from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames';
import { DataTestIdsEnum } from 'constants/index';
import { TransactionServerStatusesEnum } from 'types/enums.types';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink';

import { AccountName, ShardSpan } from 'UI/TransactionsTable/components';
import { WithClassnameType, WithTransactionType } from 'UI/types';
import { isContract } from 'utils/smartContracts';
import { getTransactionMessages } from 'utils/transactions/transactionInfoHelpers/getTransactionMessages';

import { DetailItem } from '../../DetailItem';

import styles from './styles.scss';

export const TransactionInfoTo = ({
  className,
  transaction
}: WithTransactionType & WithClassnameType) => {
  const transactionMessages = getTransactionMessages(transaction);
  const isReverted =
    transaction.status === TransactionServerStatusesEnum.rewardReverted;

  return (
    <DetailItem title='To' className={classNames(styles.to, className)}>
      <div
        className={styles.wrapper}
        data-testid={DataTestIdsEnum.transactionTo}
      >
        <div className={styles.content}>
          {isContract(transaction.receiver) && (
            <span
              className={styles.contract}
              data-testid={DataTestIdsEnum.transactionToContract}
            >
              Contract
            </span>
          )}

          <ExplorerLink
            page={String(transaction.links.receiverLink)}
            data-testid={DataTestIdsEnum.transactionToExplorerLink}
            className={styles.explorer}
          >
            <AccountName
              address={transaction.receiver}
              assets={transaction.receiverAssets}
              data-testid={DataTestIdsEnum.transactionToAccount}
            />
          </ExplorerLink>

          <CopyButton className={styles.copy} text={transaction.receiver} />

          {!isNaN(transaction.receiverShard) && (
            <ExplorerLink
              page={String(transaction.links.receiverShardLink)}
              className={styles.shard}
            >
              (
              <ShardSpan
                shard={transaction.receiverShard}
                data-testid={DataTestIdsEnum.transactionToShard}
              />
              )
            </ExplorerLink>
          )}
        </div>

        {transactionMessages.map((msg, messageIndex) => (
          <div
            data-testid={`message_${messageIndex}`}
            key={`tx-message-${messageIndex}`}
            className={styles.message}
          >
            <FontAwesomeIcon
              icon={faAngleDown}
              className={styles.icon}
              style={{ marginTop: '2px' }}
              transform={{ rotate: 45 }}
            />

            <small className={styles.text}>{msg}</small>
          </div>
        ))}

        {isReverted && (
          <div className={styles.message}>
            <FontAwesomeIcon
              icon={faAngleDown}
              className={styles.icon}
              style={{ marginTop: '2px' }}
              transform={{ rotate: 45 }}
            />

            <small className={styles.text}>Block Reverted</small>
          </div>
        )}
      </div>
    </DetailItem>
  );
};
