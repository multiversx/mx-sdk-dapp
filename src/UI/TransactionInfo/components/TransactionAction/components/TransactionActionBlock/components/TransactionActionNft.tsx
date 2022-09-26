import React, { Fragment } from 'react';
import classNames from 'classnames';

import { ExplorerLink } from 'UI/ExplorerLink';
import { FormatAmount } from 'UI/FormatAmount/FormatAmount';
import { TransactionActionNftReturnType } from 'utils/transactions/transactionInfoHelpers/getTransactionActionNftText';
import { NftBadge } from './NftBadge';

import globalStyles from 'assets/sass/main.scss';

export const TransactionActionNft = (props: TransactionActionNftReturnType) => {
  const {
    badgeText,
    tokenFormattedAmount,
    tokenExplorerLink,
    tokenLinkText,
    token,
    showLastNonZeroDecimal
  } = props;

  if (!token.identifier) {
    return null;
  }

  return (
    <Fragment>
      {badgeText != null && (
        <NftBadge text={badgeText} className='mr-1 my-auto' />
      )}

      {tokenFormattedAmount != null && (
        <div
          className={classNames(globalStyles.mr1, {
            [globalStyles.textTruncate]: token.svgUrl
          })}
        >
          <FormatAmount
            value={token.value}
            digits={2}
            showLabel={false}
            showLastNonZeroDecimal={showLastNonZeroDecimal}
            decimals={token.decimals}
            data-testid='nftFormattedAmount'
          />
        </div>
      )}

      <ExplorerLink
        page={tokenExplorerLink}
        data-testid='nftExplorerLink'
        className={classNames({
          [globalStyles.sideLink]: token.svgUrl,
          [globalStyles.dFlex]: token.svgUrl,
          [globalStyles.textTruncate]: !token.svgUrl
        })}
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
              [globalStyles.mr1]: token.ticker === token.collection,
              [globalStyles.textTruncate]: token.ticker === token.collection
            })}
          >
            {tokenLinkText}
          </span>
        </div>
      </ExplorerLink>
    </Fragment>
  );
};
