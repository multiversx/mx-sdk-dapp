import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TransactionIcon } from './TransactionIcon';
import { TransactionMethod } from './TransactionMethod';
import { ExtendedTransactionType } from 'components/TransactionsInterpreter/helpers/types';
import { addressIsBech32 } from 'utils/addressIsBech32';
import { Trim } from '../Trim';
import { ExplorerLink } from '../ExplorerLink';
import { TimeAgo } from './TImeAgo';
import { ShardSpan } from './ShardSpan';
import { LockedTokenAddressIcon } from './LockedTokenAddressIcon';
import { ScAddressIcon } from './ScAddressIcon';
import { AccountName } from './AccountName';
import globalStyles from 'assets/sass/main.scss';

export interface TransactionRowType {
  transaction: ExtendedTransactionType;
  showDirectionCol?: boolean;
  showLockedAccounts?: boolean;
}

export const TransactionRow = ({
  transaction,
  showDirectionCol,
  showLockedAccounts
}: TransactionRowType) => {
  let receiver = transaction.receiver;
  if (transaction.action && transaction.action.arguments?.receiver) {
    receiver = transaction.action.arguments.receiver;
  }
  const directionOut = transaction.direction === 'Out';
  const directionIn = transaction.direction === 'In';

  return (
    <tr
      className={`animated-row trim-size-sm ${transaction.isNew ? 'new' : ''}`}
    >
      <td>
        <div className='d-flex align-items-center'>
          <TransactionIcon transaction={transaction} />
          <ExplorerLink
            page={`/transactions/${
              transaction.originalTxHash
                ? `${transaction.originalTxHash}#${transaction.txHash}`
                : transaction.txHash
            }`}
            data-testid='transactionLink'
            className='trim-wrapper'
          >
            <Trim text={transaction.txHash} />
          </ExplorerLink>
        </div>
      </td>
      <td>
        <TimeAgo value={transaction.timestamp} short tooltip />
      </td>
      <td>
        <div className='d-flex align-items-center'>
          <ExplorerLink
            page={transaction.senderShardLink ?? ''}
            data-testid='shardFromLink'
          >
            <ShardSpan shard={transaction.senderShard} />
          </ExplorerLink>
          <FontAwesomeIcon
            icon={faArrowRight}
            className='text-secondary mx-2'
          />
          <ExplorerLink
            page={transaction.receiverShardLink ?? ''}
            data-testid='shardToLink'
          >
            <ShardSpan shard={transaction.receiverShard} />
          </ExplorerLink>
        </div>
      </td>
      <td>
        <div className='d-flex align-items-center'>
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
              {addressIsBech32(transaction.sender) ? (
                <ExplorerLink
                  page={transaction.senderLink ?? ''}
                  data-testid='senderLink'
                  className='trim-wrapper'
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
      </td>
      {showDirectionCol && (
        <td>
          <div className='d-flex'>
            <span
              className={`direction-badge ${transaction.direction?.toLowerCase()}`}
            >
              {transaction.direction?.toUpperCase()}
            </span>
          </div>
        </td>
      )}

      <td>
        <div className='d-flex align-items-center'>
          {showLockedAccounts && (
            <LockedTokenAddressIcon
              address={receiver}
              tokenId={transaction.tokenIdentifier ?? ''}
            />
          )}
          <ScAddressIcon initiator={receiver} />
          {directionIn ? (
            <AccountName
              address={receiver}
              assets={transaction.receiverAssets}
            />
          ) : (
            <ExplorerLink
              page={transaction.receiverLink ?? ''}
              data-testid='receiverLink'
              className='trim-wrapper'
            >
              <AccountName
                address={receiver}
                assets={transaction.receiverAssets}
              />
            </ExplorerLink>
          )}
        </div>
      </td>
      <td className='transaction-function'>
        <TransactionMethod transaction={transaction} />
      </td>
      <td className={globalStyles.textLeft}>
        <span>{transaction.denominatedValue}</span>
      </td>
    </tr>
  );
};
