import React, { Fragment } from 'react';
import classNames from 'classnames';

import { MINIBLOCKS_ENDPOINT } from 'apiCalls/endpoints';
import { N_A } from 'constants/index';

import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink/ExplorerLink';
import { Trim } from 'UI/Trim';
import { DetailItem } from '../../DetailItem';

import globalStyles from 'assets/sass/main.scss';
import styles from './styles.scss';

interface TransactionInfoMiniblockPropsTypes {
  transaction: InterpretedTransactionType;
}

export const TransactionInfoMiniblock = (
  props: TransactionInfoMiniblockPropsTypes
) => {
  const { transaction } = props;

  return (
    <DetailItem title='Miniblock' className={styles.miniblock}>
      <div
        className={classNames(
          globalStyles.dFlex,
          globalStyles.alignItemsCenter
        )}
      >
        {transaction.miniBlockHash ? (
          <Fragment>
            <ExplorerLink
              page={`/${MINIBLOCKS_ENDPOINT}/${transaction.miniBlockHash}`}
              className={styles.explorer}
            >
              <Trim text={transaction.miniBlockHash} />
            </ExplorerLink>

            <CopyButton
              text={transaction.miniBlockHash}
              className={globalStyles.ml2}
            />
          </Fragment>
        ) : (
          <span className={globalStyles.textSecondary}>{N_A}</span>
        )}
      </div>
    </DetailItem>
  );
};
