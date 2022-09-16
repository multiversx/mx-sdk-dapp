import React from 'react';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { DECIMALS } from 'constants/index';
import { ExplorerLink } from 'UI/ExplorerLink';
import { FormatAmount } from 'UI/FormatAmount';
import { TransactionActionTokenReturnType } from 'utils/transactions/transactionInfoHelpers/getTransactionActionTokenText';

export const TransactionActionToken = ({
  tokenExplorerLink,
  showFormattedAmount,
  tokenLinkText,
  token
}: TransactionActionTokenReturnType) => {
  if (!token.token) {
    return null;
  }

  return (
    <>
      {showFormattedAmount && (
        <div className='mr-1 text-truncate'>
          <FormatAmount
            value={token.value}
            digits={2}
            decimals={token.decimals ?? DECIMALS}
            showLastNonZeroDecimal
          />
        </div>
      )}
      <ExplorerLink
        page={tokenExplorerLink}
        className={`d-flex ${token.svgUrl ? 'side-link' : ''}`}
      >
        <div className='d-flex align-items-center symbol'>
          {token.svgUrl && (
            <img
              src={token.svgUrl}
              alt={token.name}
              className={classNames(globalStyles.sideIcon, globalStyles.mr1)}
            />
          )}
          <span>{tokenLinkText}</span>
        </div>
      </ExplorerLink>
    </>
  );
};
