import React from 'react';
import { DECIMALS } from 'constants/index';
import { TokenArgumentType } from 'types/serverTransactions.types';
import { ExplorerLink } from 'UI/ExplorerLink';
import { FormatAmount } from 'UI/FormatAmount';
import { explorerUrlBuilder } from 'utils/transactions/getInterpretedTransaction/helpers/explorerUrlBuilder';

export const TransactionActionToken = ({
  token,
  noValue,
  showLastNonZeroDecimal
}: {
  token: TokenArgumentType;
  noValue?: boolean;
  showLastNonZeroDecimal?: boolean;
}) => {
  const decimals = token.decimals != null ? token.decimals : DECIMALS;

  if (!token.token) {
    return null;
  }

  return (
    <>
      {!noValue && token.value && (
        <div className='mr-1 text-truncate'>
          <FormatAmount
            value={token.value}
            showLabel={false}
            decimals={decimals}
            showLastNonZeroDecimal={showLastNonZeroDecimal}
          />
        </div>
      )}
      <ExplorerLink
        to={explorerUrlBuilder.tokenDetails(token.token)}
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
          <span>{token.ticker}</span>
        </div>
      </ExplorerLink>
    </>
  );
};
