import React from 'react';
import classNames from 'classnames';

import globalStyles from 'assets/sass/main.scss';
import { TokenArgumentType } from 'types/serverTransactions.types';
import { ExplorerLink } from 'UI/ExplorerLink/ExplorerLink';
import { explorerUrlBuilder } from 'utils/transactions/getInterpretedTransaction/helpers/explorerUrlBuilder';

import styles from '../styles.scss';

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
      page={explorerUrlBuilder.collectionDetails(token.collection)}
      className={classNames(styles.transactionActionCollection)}
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
