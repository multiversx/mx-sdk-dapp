import React from 'react';
import classNames from 'classnames';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { TokenArgumentType } from 'types/serverTransactions.types';
import { ExplorerLink } from 'UI/ExplorerLink/ExplorerLink';
import { explorerUrlBuilder } from 'utils/transactions/getInterpretedTransaction/helpers/explorerUrlBuilder';

const TransactionActionCollectionComponent = ({
  token,
  globalStyles,
  styles
}: {
  token: TokenArgumentType;
} & WithStylesImportType) => {
  if (!token.collection) {
    return null;
  }

  return (
    <ExplorerLink
      page={explorerUrlBuilder.collectionDetails(token.collection)}
      className={classNames(styles?.transactionActionCollection)}
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

        <span>{token.ticker}</span>
      </div>
    </ExplorerLink>
  );
};

export const TransactionActionCollection = withStyles(
  TransactionActionCollectionComponent,
  {
    ssrStyles: () =>
      import(
        'UI/TransactionInfo/components/TransactionAction/components/TransactionActionBlock/styles.scss'
      ),
    clientStyles: () =>
      require('UI/TransactionInfo/components/TransactionAction/components/TransactionActionBlock/styles.scss')
        .default
  }
);
