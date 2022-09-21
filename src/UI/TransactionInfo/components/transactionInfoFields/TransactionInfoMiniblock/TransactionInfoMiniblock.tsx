import React from 'react';
import { MINIBLOCKS_ENDPOINT } from 'apiCalls/endpoints';
import { N_A } from 'constants/index';

import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink/ExplorerLink';
import { Trim } from 'UI/Trim';
import { DetailItem } from '../../DetailItem';

export const TransactionInfoMiniblock = ({
  transaction
}: {
  transaction: InterpretedTransactionType;
}) => {
  return (
    <DetailItem title='Miniblock'>
      <div className='d-flex align-items-center'>
        {transaction.miniBlockHash ? (
          <>
            <ExplorerLink
              page={`/${MINIBLOCKS_ENDPOINT}/${transaction.miniBlockHash}`}
              className='trim-wrapper'
            >
              <Trim text={transaction.miniBlockHash} />
            </ExplorerLink>
            <CopyButton text={transaction.miniBlockHash} />
          </>
        ) : (
          <span className='text-secondary'>{N_A}</span>
        )}
      </div>
    </DetailItem>
  );
};
