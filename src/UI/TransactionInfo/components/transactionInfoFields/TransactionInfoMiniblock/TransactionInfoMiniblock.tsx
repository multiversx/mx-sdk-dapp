import React from 'react';

import { MINIBLOCKS_ENDPOINT } from 'apiCalls/endpoints';
import { N_A } from 'constants/index';

import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink/ExplorerLink';
import { Trim } from 'UI/Trim';

import { WithTransactionType } from '../../../../../UI/types';
import { DetailItem } from '../../DetailItem';

import styles from './styles.scss';

export const TransactionInfoMiniblock = ({
  transaction
}: WithTransactionType) => (
  <DetailItem title='Miniblock'>
    <div className={styles.miniblock}>
      {transaction.miniBlockHash ? (
        <>
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
        </>
      ) : (
        <span className={styles.void}>{N_A}</span>
      )}
    </div>
  </DetailItem>
);
