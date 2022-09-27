import React from 'react';
import classNames from 'classnames';

import { TokenArgumentType } from 'types/serverTransactions.types';
import { ExplorerLink } from 'UI/ExplorerLink/ExplorerLink';
import { explorerUrlBuilder } from 'utils/transactions/getInterpretedTransaction/helpers/explorerUrlBuilder';

import globalStyles from 'assets/sass/main.scss';

interface TransactionActionCollection {
  token: TokenArgumentType;
}

export const TransactionActionCollection = (
  props: TransactionActionCollection
) => {
  const { token } = props;

  if (!token.collection) {
    return null;
  }

  return (
    <ExplorerLink
      page={explorerUrlBuilder.collectionDetails(token.collection)}
      className={classNames(globalStyles.dFlex, {
        [globalStyles.sideLink]: token.svgUrl
      })}
    >
      <div
        className={classNames(
          globalStyles.dFlex,
          globalStyles.alignItemsCenter
        )}
      >
        {token.svgUrl && (
          <img
            src={token.svgUrl}
            alt={token.name}
            className={classNames(globalStyles.sideIcon, globalStyles.mr1)}
          />
        )}

        <span>{token.ticker}</span>
      </div>
    </ExplorerLink>
  );
};
