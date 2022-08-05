import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TransactionIcon } from './TransactionIcon';
import { TransactionMethod } from './TransactionMethod';
import { ExtendedTransactionType } from 'components/TransactionsInterpreter/helpers/types';
import { Trim } from '../Trim';
import { ExplorerLink } from '../ExplorerLink';
import { TimeAgo } from './TImeAgo';
import { ShardSpan } from './ShardSpan';
import { LockedTokenAddressIcon } from './LockedTokenAddressIcon';
import { ScAddressIcon } from './ScAddressIcon';
import { AccountName } from './AccountName';
import globalStyles from 'assets/sass/main.scss';
import { addressIsValid } from 'utils';
import classNames from 'classnames';
import styles from './transactions-table.scss';

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
  const directionOut = transaction.transactionDetails.direction === 'Out';
  const directionIn = transaction.transactionDetails.direction === 'In';

  return (
    <tr className={`${transaction.isNew ? 'new' : ''}`}>
      <td>
        <div
          className={classNames(
            globalStyles.dFlex,
            globalStyles.alignItemsCenter
          )}
        >
          <TransactionIcon transaction={transaction} />
          <ExplorerLink
            page={`/transactions/${
              transaction.originalTxHash
                ? `${transaction.originalTxHash}#${transaction.txHash}`
                : transaction.txHash
            }`}
            data-testid='transactionLink'
            className={globalStyles.trimWrapper}
          >
            <Trim text={transaction.txHash} />
          </ExplorerLink>
        </div>
      </td>
      <td>
        <TimeAgo value={transaction.timestamp} short tooltip />
      </td>
      <td>
        <div
          className={classNames(
            globalStyles.dFlex,
            globalStyles.alignItemsCenter
          )}
        >
          <ExplorerLink
            page={transaction.links.senderShardLink ?? ''}
            data-testid='shardFromLink'
          >
            <ShardSpan shard={transaction.senderShard} />
          </ExplorerLink>
          <FontAwesomeIcon
            icon={faArrowRight}
            className={classNames(globalStyles.textSecondary, globalStyles.mx2)}
          />
          <ExplorerLink
            page={transaction.links.receiverShardLink ?? ''}
            data-testid='shardToLink'
          >
            <ShardSpan shard={transaction.receiverShard} />
          </ExplorerLink>
        </div>
      </td>
      <td>
        <div
          className={classNames(
            globalStyles.dFlex,
            globalStyles.alignItemsCenter
          )}
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
      </td>
      {showDirectionCol && (
        <td>
          <div className={globalStyles.dFlex}>
            <span
              className={classNames(
                styles.directionBadge,
                transaction.transactionDetails.direction?.toLowerCase()
              )}
            >
              {transaction.transactionDetails.direction?.toUpperCase()}
            </span>
          </div>
        </td>
      )}

      <td>
        <div
          className={classNames(
            globalStyles.dFlex,
            globalStyles.alignItemsCenter
          )}
        >
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
              page={transaction.links.receiverLink ?? ''}
              data-testid='receiverLink'
              className={globalStyles.trimWrapper}
            >
              <AccountName
                address={receiver}
                assets={transaction.receiverAssets}
              />
            </ExplorerLink>
          )}
        </div>
      </td>
      <td className={styles.transactionFunction}>
        <TransactionMethod transaction={transaction} />
      </td>
      <td className={globalStyles.textLeft}>
        <span>{`${transaction.denomination.denominatedValue} ${transaction.tokenLabel}`}</span>
      </td>
    </tr>
  );
};
