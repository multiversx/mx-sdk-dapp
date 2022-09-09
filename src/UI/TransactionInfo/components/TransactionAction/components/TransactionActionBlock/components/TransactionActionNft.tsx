import React from 'react';
import classNames from 'classnames';
import { ExplorerLink } from 'UI/ExplorerLink';
import {
  getTransactionActionNftText,
  TransactionActionNftType
} from 'utils/transactions/transactionInfoHelpers/getTransactionActionNftText';
import { NftBadge } from './NftBadge';

export const TransactionActionNft = (props: TransactionActionNftType) => {
  const { token } = props;

  if (!token.identifier) {
    return null;
  }

  const {
    badgeText,
    tokenFormattedAmount,
    tokenExplorerLink,
    tokenLinkText
  } = getTransactionActionNftText(props);

  return (
    <>
      {badgeText != null && (
        <NftBadge text={badgeText} className='mr-1 my-auto' />
      )}
      {tokenFormattedAmount != null && (
        <div className={`mr-1 ${token.svgUrl ? 'text-truncate' : ''}`}>
          {tokenFormattedAmount}
        </div>
      )}
      <ExplorerLink
        to={tokenExplorerLink}
        className={`${token.svgUrl ? 'd-flex side-link' : 'text-truncate'}`}
      >
        <div className='d-flex align-items-center symbol'>
          {token.svgUrl && (
            <img
              src={token.svgUrl}
              alt={token.name}
              className='side-icon mr-1'
            />
          )}
          <span
            className={classNames({
              'text-truncate mr-1': token.ticker === token.collection
            })}
          >
            {tokenLinkText}
          </span>
        </div>
      </ExplorerLink>
    </>
  );
};
