import React from 'react';
import { TransactionStatus } from '@elrondnetwork/erdjs-network-providers/out';
import {
  faSpinner,
  faClock,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TransactionServerStatusesEnum } from 'types';
import {
  InterpretedTransactionType,
  TransactionActionCategoryEnum
} from 'types/serverTransactions.types';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink';
import { FormatAmount } from 'UI/FormatAmount';
import {
  TimeAgo,
  ScAddressIcon,
  AccountName,
  ShardSpan
} from 'UI/TransactionsTable/components';
import { Trim } from 'UI/Trim';
import { addressIsValid, isContract, getUsdValue } from 'utils';
import {
  getHumanReadableTimeFormat,
  getTransactionMethod
} from 'utils/transactions/getInterpretedTransaction/helpers';
import {
  DetailItem,
  TransactionAction,
  OperationsList,
  NonceMessage,
  ScResultsList
} from './components';
import DataField from './components/DataField';

const TransactionInfo = ({
  transaction
}: {
  transaction: InterpretedTransactionType;
}) => {
  return (
    <>
      <DetailItem title='Hash'>
        <div className='d-flex align-items-center text-break-all'>
          {transaction.txHash}
          <CopyButton text={transaction.txHash} />
        </div>
      </DetailItem>

      <DetailItem title='Status'>
        <div className='d-flex flex-wrap align-items-center'>
          <TransactionStatus transaction={transaction} />
        </div>
      </DetailItem>

      <DetailItem title='Age'>
        {transaction.timestamp !== undefined ? (
          <div className='d-flex flex-wrap align-items-center'>
            {pending ? (
              <FontAwesomeIcon
                icon={faSpinner}
                className='mr-2 text-secondary fa-spin slow-spin'
              />
            ) : (
              <FontAwesomeIcon icon={faClock} className='mr-2 text-secondary' />
            )}
            <TimeAgo value={transaction.timestamp} />
            &nbsp;
            <span className='text-secondary'>
              (
              {getHumanReadableTimeFormat({
                value: transaction.timestamp,
                utc: true
              })}
              )
            </span>
          </div>
        ) : (
          <span className='text-secondary'>N/A</span>
        )}
      </DetailItem>

      <DetailItem title='Miniblock'>
        <div className='d-flex align-items-center'>
          {transaction.miniBlockHash ? (
            <>
              <ExplorerLink
                to={`/miniblocks/${transaction.miniBlockHash}`}
                className='trim-wrapper'
              >
                <Trim text={transaction.miniBlockHash} />
              </ExplorerLink>
              <CopyButton text={transaction.miniBlockHash} />
            </>
          ) : (
            <span className='text-secondary'>N/A</span>
          )}
        </div>
      </DetailItem>

      <DetailItem title='From'>
        <div className='d-flex align-items-center'>
          <ScAddressIcon initiator={transaction.sender} />
          {addressIsValid(transaction.sender) ? (
            <>
              <ExplorerLink
                to={String(transaction.links.senderLink)}
                className='trim-wrapper'
              >
                <AccountName
                  address={transaction.sender}
                  assets={transaction.senderAssets}
                />
              </ExplorerLink>
              <CopyButton className='mr-2' text={transaction.sender} />
              <ExplorerLink
                to={String(transaction.links.senderShardLink)}
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

      <DetailItem title='To'>
        <div className='d-flex flex-column'>
          <div className='d-flex align-items-center'>
            {isContract(transaction.receiver) ? (
              <span className='mr-2'>Contract</span>
            ) : (
              ''
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

      <DetailItem title='Value'>
        {formattedTxValue} {egldLabel}{' '}
        <span className='text-secondary'>
          {transaction.price !== undefined ? (
            <>
              (
              {getUsdValue({
                amount: txValue,
                usd: transaction.price,
                decimals: 2
              })}
              )
            </>
          ) : (
            <>N/A</>
          )}
        </span>
      </DetailItem>

      {transaction.action && transaction.action.category && (
        <>
          <DetailItem title='Method'>
            {getTransactionMethod(transaction)}
          </DetailItem>
          {transaction.action.category !==
            TransactionActionCategoryEnum.scCall && (
            <DetailItem title='Transaction Action'>
              <TransactionAction transaction={transaction} />
            </DetailItem>
          )}
        </>
      )}

      {Boolean(visibleOperations.length) && (
        <DetailItem
          title={
            <>
              <span className='mr-2'>Token Operations</span>
              <span className='badge badge-secondary badge-pill font-weight-light'>
                {visibleOperations.length}
              </span>
            </>
          }
        >
          <OperationsList
            transaction={transaction}
            operations={visibleOperations}
          />
        </DetailItem>
      )}

      <DetailItem title='Transaction Fee'>
        {transaction.gasUsed !== undefined ? (
          <>
            {transactionFee} {egldLabel}{' '}
            <span className='text-secondary'>
              {transaction.price !== undefined ? (
                <>
                  (
                  {getUsdValue({
                    amount: transactionFee,
                    usd: transaction.price
                  })}
                  )
                </>
              ) : (
                <>N/A</>
              )}
            </span>
          </>
        ) : (
          <span className='text-secondary'>N/A</span>
        )}
      </DetailItem>

      <DetailItem title='EGLD Price'>
        {transaction.price !== undefined ? (
          <>
            {`$${Number(transaction.price).toLocaleString('en', {
              minimumFractionDigits: 2
            })}`}
          </>
        ) : (
          <span className='text-secondary'>N/A</span>
        )}
      </DetailItem>

      <DetailItem title='Gas Limit'>
        {transaction.gasLimit !== undefined ? (
          <>{transaction.gasLimit.toLocaleString('en')}</>
        ) : (
          <span className='text-secondary'>N/A</span>
        )}
      </DetailItem>

      <DetailItem title='Gas Used'>
        {transaction.gasUsed !== undefined ? (
          <>{transaction.gasUsed.toLocaleString('en')}</>
        ) : (
          <span className='text-secondary'>N/A</span>
        )}
      </DetailItem>

      <DetailItem title='Gas Price'>
        {transaction.gasPrice !== undefined ? (
          <FormatAmount
            value={transaction.gasPrice.toString()}
            showLastNonZeroDecimal
          />
        ) : (
          <span className='text-secondary'>N/A</span>
        )}
      </DetailItem>

      <DetailItem title='Nonce'>
        <>
          {transaction.nonce}
          <NonceMessage transaction={transaction} />
        </>
      </DetailItem>

      <DataField data={transaction.data} scamInfo={transaction.scamInfo} />

      {transaction.results && transaction.results?.length > 0 && (
        <DetailItem title='Smart&nbsp;Contract Results'>
          <ScResultsList results={transaction.results} />
        </DetailItem>
      )}
    </>
  );
};
export default TransactionInfo;
