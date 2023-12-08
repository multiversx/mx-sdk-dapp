import React from 'react';
import classNames from 'classnames';
import { DataTestIdsEnum, DECIMALS } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { ExplorerLink } from 'UI/ExplorerLink';
import { FormatAmount } from 'UI/FormatAmount';
import { TransactionActionTokenReturnType } from 'utils/transactions/transactionInfoHelpers/getTransactionActionTokenText';

const TransactionActionTokenComponent = ({
  tokenExplorerLink,
  showFormattedAmount,
  tokenLinkText,
  token,
  showLastNonZeroDecimal,
  globalStyles
}: TransactionActionTokenReturnType & WithStylesImportType) => {
  if (!token.token) {
    return null;
  }

  return (
    <>
      {showFormattedAmount && (
        <div className={globalStyles?.textTruncate}>
          <FormatAmount
            value={token.value}
            digits={2}
            showLabel={false}
            decimals={token.decimals ?? DECIMALS}
            showLastNonZeroDecimal={showLastNonZeroDecimal}
            data-testid={DataTestIdsEnum.tokenFormattedAmount}
          />
        </div>
      )}

      <ExplorerLink
        page={tokenExplorerLink}
        data-testid={DataTestIdsEnum.tokenExplorerLink}
        className={classNames(globalStyles?.dFlex, {
          [globalStyles?.sideLink ?? '']: token.svgUrl
        })}
      >
        <div
          className={classNames(
            globalStyles?.dFlex,
            globalStyles?.alignItemsCenter
          )}
        >
          {token.svgUrl && (
            <img
              src={token.svgUrl}
              alt={token.name}
              className={classNames(globalStyles?.sideIcon, globalStyles?.mr1)}
            />
          )}
          <span>{tokenLinkText}</span>
        </div>
      </ExplorerLink>
    </>
  );
};

export const TransactionActionToken = withStyles(
  TransactionActionTokenComponent,
  {}
);
