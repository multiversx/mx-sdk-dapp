import React from 'react';
import classNames from 'classnames';
import { TokenArgumentType } from 'types';
import { NftEnumType } from 'types/tokens.types';
import { ExplorerLink } from 'UI/ExplorerLink';
import { FormatAmount } from 'UI/FormatAmount';
import { explorerUrlBuilder } from 'utils/transactions/getInterpretedTransaction/helpers/explorerUrlBuilder';
import { NftBadge } from './NftBadge';

export interface TransactionActionNftType {
  token: TokenArgumentType;
  showBadge?: boolean;
  noValue?: boolean;
  showLastNonZeroDecimal?: boolean;
}

export const TransactionActionNft = ({
  token,
  showBadge,
  noValue,
  showLastNonZeroDecimal
}: TransactionActionNftType) => {
  if (!token.identifier) {
    return null;
  }

  const isBadgeVisible = showBadge && token.type !== NftEnumType.MetaESDT;
  const isTokenAmountVisible =
    !noValue && token.value && token.type !== NftEnumType.NonFungibleESDT;
  const canShowFormattedAmount = token.decimals != null;

  return (
    <>
      {isBadgeVisible && (
        <NftBadge type={token.type} className='mr-1 my-auto' />
      )}
      {isTokenAmountVisible && (
        <div className={`mr-1 ${token.svgUrl ? 'text-truncate' : ''}`}>
          {canShowFormattedAmount ? (
            <FormatAmount
              value={token.value}
              showLabel={false}
              decimals={token.decimals}
              showLastNonZeroDecimal={showLastNonZeroDecimal}
            />
          ) : (
            Number(token.value).toLocaleString('en')
          )}
        </div>
      )}
      <ExplorerLink
        to={explorerUrlBuilder.nftDetails(token.identifier)}
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
            {token.ticker === token.collection
              ? token.identifier
              : token.ticker}
          </span>
        </div>
      </ExplorerLink>
    </>
  );
};
