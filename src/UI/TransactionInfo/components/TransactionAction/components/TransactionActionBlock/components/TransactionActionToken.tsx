import React from 'react';
import { ExplorerLink } from 'UI/ExplorerLink';
import {
  getTransactionActionTokenText,
  TransactionActionTokenType
} from 'utils/transactions/transactionInfoHelpers/index';

export const TransactionActionToken = (props: TransactionActionTokenType) => {
  const { token } = props;
  const {
    tokenExplorerLink,
    tokenFormattedAmount,
    tokenLinkText
  } = getTransactionActionTokenText(props);

  if (!token.token) {
    return null;
  }

  return (
    <>
      {tokenFormattedAmount != null && (
        <div className='mr-1 text-truncate'>{tokenFormattedAmount}</div>
      )}
      <ExplorerLink
        to={tokenExplorerLink}
        className={`d-flex ${token.svgUrl ? 'side-link' : ''}`}
      >
        <div className='d-flex align-items-center symbol'>
          {token.svgUrl && (
            <img
              src={token.svgUrl}
              alt={token.name}
              className='side-icon mr-1'
            />
          )}
          <span>{tokenLinkText}</span>
        </div>
      </ExplorerLink>
    </>
  );
};
