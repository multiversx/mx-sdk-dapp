import React from 'react';
import classNames from 'classnames';
import { DataTestIdsEnum } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { ExplorerLink } from 'UI/ExplorerLink';
import { FormatAmount } from 'UI/FormatAmount/FormatAmount';
import { TransactionActionNftReturnType } from 'utils/transactions/transactionInfoHelpers/getTransactionActionNftText';
import { NftBadge } from './NftBadge';

const TransactionActionNftComponent = ({
  badgeText,
  tokenFormattedAmount,
  tokenExplorerLink,
  tokenLinkText,
  token,
  showLastNonZeroDecimal,
  globalStyles,
  styles
}: TransactionActionNftReturnType & WithStylesImportType) => {
  if (!token.identifier) {
    return null;
  }

  return (
    <div className={styles?.transactionActionNft}>
      {badgeText != null && (
        <NftBadge
          text={badgeText}
          className={classNames(globalStyles?.mr1, globalStyles?.myAuto)}
        />
      )}

      {tokenFormattedAmount != null && (
        <div
          className={classNames(globalStyles?.mr1, {
            [globalStyles?.textTruncate ?? '']: token.svgUrl
          })}
        >
          <FormatAmount
            value={token.value}
            digits={2}
            showLabel={false}
            showLastNonZeroDecimal={showLastNonZeroDecimal}
            decimals={token.decimals}
            data-testid={DataTestIdsEnum.nftFormattedAmount}
          />
        </div>
      )}

      <ExplorerLink
        page={tokenExplorerLink}
        data-testid={DataTestIdsEnum.nftExplorerLink}
        className={classNames(styles?.explorer, {
          [globalStyles?.sideLink ?? '']: token.svgUrl,
          [globalStyles?.dFlex ?? '']: token.svgUrl,
          [globalStyles?.textTruncate ?? '']: !token.svgUrl
        })}
      >
        <div className={styles?.data}>
          {token.svgUrl && (
            <img
              src={token.svgUrl}
              alt={token.name}
              className={classNames(globalStyles?.sideIcon, globalStyles?.mr1)}
            />
          )}

          <span
            className={classNames({
              [styles?.truncate ?? '']: token.ticker === token.collection
            })}
          >
            {tokenLinkText}
          </span>
        </div>
      </ExplorerLink>
    </div>
  );
};

export const TransactionActionNft = withStyles(TransactionActionNftComponent, {
  ssrStyles: () =>
    import(
      'UI/TransactionInfo/components/TransactionAction/components/TransactionActionBlock/styles.scss'
    ),
  clientStyles: () =>
    require('UI/TransactionInfo/components/TransactionAction/components/TransactionActionBlock/styles.scss')
      .default
});
