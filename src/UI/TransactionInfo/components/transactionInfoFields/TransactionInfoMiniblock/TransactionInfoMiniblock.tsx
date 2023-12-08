import React from 'react';
import { MINIBLOCKS_ENDPOINT } from 'apiCalls/endpoints';
import { N_A } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink/ExplorerLink';
import { Trim } from 'UI/Trim';
import {
  WithClassnameType,
  WithTransactionType
} from '../../../../../UI/types';
import { DetailItem } from '../../DetailItem';

const TransactionInfoMiniblockComponent = ({
  className,
  transaction,
  styles
}: WithTransactionType & WithClassnameType & WithStylesImportType) => (
  <DetailItem className={className} title='Miniblock'>
    <div className={styles?.miniblock}>
      {transaction.miniBlockHash ? (
        <>
          <ExplorerLink
            page={`/${MINIBLOCKS_ENDPOINT}/${transaction.miniBlockHash}`}
            className={styles?.explorer}
          >
            <Trim text={transaction.miniBlockHash} className={styles?.trim} />
          </ExplorerLink>

          <CopyButton
            text={transaction.miniBlockHash}
            className={styles?.copy}
          />
        </>
      ) : (
        <span className={styles?.void}>{N_A}</span>
      )}
    </div>
  </DetailItem>
);

export const TransactionInfoMiniblock = withStyles(
  TransactionInfoMiniblockComponent,
  {
    ssrStyles: () =>
      import(
        'UI/TransactionInfo/components/transactionInfoFields/TransactionInfoMiniblock/styles.scss'
      ),
    clientStyles: () =>
      require('UI/TransactionInfo/components/transactionInfoFields/TransactionInfoMiniblock/styles.scss')
        .default
  }
);
