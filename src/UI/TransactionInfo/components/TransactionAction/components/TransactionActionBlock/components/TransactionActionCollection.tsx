import React from 'react';
import { TokenArgumentType } from 'types/serverTransactions.types';
import { ExplorerLink } from 'UI/ExplorerLink/ExplorerLink';
import { explorerUrlBuilder } from 'utils/transactions/getInterpretedTransaction/helpers/explorerUrlBuilder';

export const TransactionActionCollection = ({
  token
}: {
  token: TokenArgumentType;
}) => {
  if (!token.collection) {
    return null;
  }

  return (
    <ExplorerLink
      to={explorerUrlBuilder.collectionDetails(token.collection)}
      className={`d-flex ${token.svgUrl ? 'side-link' : ''}`}
    >
      <div className='d-flex align-items-center symbol'>
        {token.svgUrl && (
          <img src={token.svgUrl} alt={token.name} className='side-icon mr-1' />
        )}
        <span>{token.ticker}</span>
      </div>
    </ExplorerLink>
  );
};
