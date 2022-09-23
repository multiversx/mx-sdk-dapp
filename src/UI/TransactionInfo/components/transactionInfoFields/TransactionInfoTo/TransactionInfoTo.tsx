import React from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { TransactionServerStatusesEnum } from 'types/enums.types';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink';
import { AccountName, ShardSpan } from 'UI/TransactionsTable/components';
import { isContract } from 'utils/smartContracts';
import { getTransactionMessages } from 'utils/transactions/transactionInfoHelpers/getTransactionMessages';
import { DetailItem } from '../../DetailItem';

import globalStyles from 'assets/sass/main.scss';

interface TransactionInfoToPropsTypes {
  transaction: InterpretedTransactionType;
}

export const TransactionInfoTo = (props: TransactionInfoToPropsTypes) => {
  const { transaction } = props;
  const transactionMessages = getTransactionMessages(transaction);

  return (
    <DetailItem title='To'>
      <div
        className={classNames(globalStyles.dFlex, globalStyles.flexColumn)}
        data-testid='transactionTo'
      >
        <div
          className={classNames(
            globalStyles.dFlex,
            globalStyles.alignItemsCenter
          )}
        >
          {isContract(transaction.receiver) && (
            <span
              className={globalStyles.mr2}
              data-testid='transactionToContract'
            >
              Contract
            </span>
          )}

          <ExplorerLink
            page={String(transaction.links.receiverLink)}
            className={globalStyles.trimWrapper}
            data-testid='transactionToExplorerLink'
          >
            <AccountName
              address={transaction.receiver}
              assets={transaction.receiverAssets}
              data-testid='transactionToAccount'
            />
          </ExplorerLink>

          <CopyButton
            className={globalStyles.mr2}
            text={transaction.receiver}
          />
          {!isNaN(transaction.receiverShard) && (
            <ExplorerLink
              page={String(transaction.links.receiverShardLink)}
              className='flex-shrink-0'
            >
              (
              <ShardSpan
                shard={transaction.receiverShard}
                data-testid='transactionToShard'
              />
              )
            </ExplorerLink>
          )}
        </div>

        {transactionMessages.map((msg, messageIndex) => (
          <div
            data-testid={`message_${messageIndex}`}
            key={`tx-message-${messageIndex}`}
            className='d-flex ml-1 text-break-all align-items-center'
          >
            <FontAwesomeIcon
              icon={faAngleDown}
              className={globalStyles.textSecondary}
              style={{ marginTop: '2px' }}
              transform={{ rotate: 45 }}
            />
            &nbsp;
            <small
              className={classNames(globalStyles.ml1, globalStyles.textDanger)}
            >
              {' '}
              {msg}
            </small>
          </div>
        ))}

        {transaction.status ===
          TransactionServerStatusesEnum.rewardReverted && (
          <div className='d-flex ml-1 text-break-all'>
            <FontAwesomeIcon
              icon={faAngleDown}
              className={globalStyles.textSecondary}
              style={{ marginTop: '2px' }}
              transform={{ rotate: 45 }}
            />
            &nbsp;
            <small
              className={classNames(globalStyles.ml1, globalStyles.textDanger)}
            >
              {' '}
              Block Reverted
            </small>
          </div>
        )}
      </div>
    </DetailItem>
  );
};
