import React from 'react';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { ExplorerLink } from 'UI/ExplorerLink';
import { FormatAmount } from 'UI/FormatAmount/FormatAmount';
import { TransactionActionNftReturnType } from 'utils/transactions/transactionInfoHelpers/getTransactionActionNftText';
import { NftBadge } from './NftBadge';

export const TransactionActionNft = ({
  badgeText,
  tokenFormattedAmount,
  tokenExplorerLink,
  tokenLinkText,
  token,
  showLastNonZeroDecimal
}: TransactionActionNftReturnType) => {
  if (!token.identifier) {
    return null;
  }

  return (
    <>
      {badgeText != null && (
        <NftBadge text={badgeText} className='mr-1 my-auto' />
      )}
      {tokenFormattedAmount != null && (
        <div className={`mr-1 ${token.svgUrl ? 'text-truncate' : ''}`}>
          <FormatAmount
            value={token.value}
            digits={2}
            showLabel={false}
            showLastNonZeroDecimal={showLastNonZeroDecimal}
            decimals={token.decimals}
          />
        </div>
      )}
      <ExplorerLink
        page={tokenExplorerLink}
        className={`${token.svgUrl ? 'd-flex side-link' : 'text-truncate'}`}
      >
        <div className='d-flex align-items-center symbol'>
          {token.svgUrl && (
            <img
              src={token.svgUrl}
              alt={token.name}
              className={classNames(globalStyles.sideIcon, globalStyles.mr1)}
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
