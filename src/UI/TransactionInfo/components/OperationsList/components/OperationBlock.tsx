import * as React from 'react';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink';
import { AccountName } from 'UI/TransactionsTable/components';
import { addressIsValid } from 'utils/account/addressIsValid';
import { explorerUrlBuilder } from 'utils/transactions/getInterpretedTransaction/helpers';

export const OperationBlock = ({
  address,
  transaction,
  action,
  isFullSize,
  direction
}: {
  address: string;
  transaction: InterpretedTransactionType;
  action?: string;
  isFullSize?: boolean;
  direction?: string;
}) => {
  let operationAssets;
  if (address === transaction.sender) {
    operationAssets = transaction.senderAssets;
  }
  if (address === transaction.receiver) {
    operationAssets = transaction.receiverAssets;
  }
  return (
    <div
      className={`d-flex align-items-center ${
        isFullSize
          ? 'col-12'
          : ` pr-xl-0 ${
              operationAssets ? 'pl-3 mw-lg-6 mw-xl-3' : 'col-lg-6 col-xl-3'
            }`
      }`}
    >
      {direction && (
        <div className={`direction-badge mr-2 ${direction.toLowerCase()}`}>
          {direction.toUpperCase()}
        </div>
      )}
      {action && (
        <FontAwesomeIcon
          icon={faCaretRight}
          size='xs'
          className='text-secondary mr-2'
        />
      )}
      <div className='mr-2 text-nowrap'>{action ? action : ''}</div>
      {addressIsValid(address) ? (
        <>
          <ExplorerLink
            page={explorerUrlBuilder.accountDetails(address)}
            className='trim-wrapper'
          >
            <AccountName address={address} assets={operationAssets} />
          </ExplorerLink>
          <CopyButton text={address} className='side-action ml-2' />
        </>
      ) : (
        ''
      )}
    </div>
  );
};
