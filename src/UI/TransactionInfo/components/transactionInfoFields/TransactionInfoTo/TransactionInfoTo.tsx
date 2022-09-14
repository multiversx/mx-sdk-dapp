import React from 'react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TransactionServerStatusesEnum } from 'types/enums.types';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink';
import { AccountName, ShardSpan } from 'UI/TransactionsTable/components';
import { isContract } from 'utils/smartContracts';
import { getTransactionMessages } from 'utils/transactions/transactionInfoHelpers/getTransactionMessages';
import { DetailItem } from '../../DetailItem';
export const TransactionInfoTo = ({
  transaction
}: {
  transaction: InterpretedTransactionType;
}) => {
  const transactionMessages = getTransactionMessages(transaction);

  return (
    <DetailItem title='To'>
      <div className='d-flex flex-column'>
        <div className='d-flex align-items-center'>
          {isContract(transaction.receiver) && (
            <span className='mr-2'>Contract</span>
          )}
          <ExplorerLink
            to={String(transaction.links.receiverLink)}
            className='trim-wrapper'
          >
            <AccountName
              address={transaction.receiver}
              assets={transaction.receiverAssets}
            />
          </ExplorerLink>
          <CopyButton className='mr-2' text={transaction.receiver} />
          {!isNaN(transaction.receiverShard) && (
            <ExplorerLink
              to={String(transaction.links.receiverShardLink)}
              className='flex-shrink-0'
            >
              (<ShardSpan shard={transaction.receiverShard} />)
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
              className='text-secondary'
              style={{ marginTop: '2px' }}
              transform={{ rotate: 45 }}
            />
            &nbsp;
            <small className='text-danger ml-1'> {msg}</small>
          </div>
        ))}
        {transaction.status ===
          TransactionServerStatusesEnum.rewardReverted && (
          <div className='d-flex ml-1 text-break-all'>
            <FontAwesomeIcon
              icon={faAngleDown}
              className='text-secondary'
              style={{ marginTop: '2px' }}
              transform={{ rotate: 45 }}
            />
            &nbsp;
            <small className='text-danger ml-1'> Block Reverted</small>
          </div>
        )}
      </div>
    </DetailItem>
  );
};
