import React, { Fragment } from 'react';

import { MINIBLOCKS_ENDPOINT } from 'apiCalls/endpoints';
import { N_A } from 'constants/index';

import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink/ExplorerLink';
import { Trim } from 'UI/Trim';
import { DetailItem } from '../../DetailItem';

import styles from './styles.scss';

interface TransactionInfoMiniblockPropsTypes {
  transaction: InterpretedTransactionType;
}

export const TransactionInfoMiniblock = (
  props: TransactionInfoMiniblockPropsTypes
) => {
  const { transaction } = props;

  return (
    <DetailItem title='Miniblock'>
      <div className={styles.miniblock}>
        {transaction.miniBlockHash ? (
          <Fragment>
            <ExplorerLink
              page={`/${MINIBLOCKS_ENDPOINT}/${transaction.miniBlockHash}`}
              className={styles.explorer}
            >
              <Trim text={transaction.miniBlockHash} className={styles.trim} />
            </ExplorerLink>

            <CopyButton
              text={transaction.miniBlockHash}
              className={styles.copy}
            />
          </Fragment>
        ) : (
          <span className={styles.void}>{N_A}</span>
        )}
      </div>
    </DetailItem>
  );
};
