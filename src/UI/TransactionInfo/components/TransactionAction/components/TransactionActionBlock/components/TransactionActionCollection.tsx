import React from 'react';
import classNames from 'classnames';

import { TokenArgumentType } from 'types/serverTransactions.types';
import { ExplorerLink } from 'UI/ExplorerLink/ExplorerLink';
import { explorerUrlBuilder } from 'utils/transactions/getInterpretedTransaction/helpers/explorerUrlBuilder';

import globalStyles from 'assets/sass/main.scss';
import styles from '../styles.scss';

export interface TransactionActionCollectionPropsTypes {
  token: TokenArgumentType;
}

export const TransactionActionCollection = (
  props: TransactionActionCollectionPropsTypes
) => {
  const { token } = props;

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
