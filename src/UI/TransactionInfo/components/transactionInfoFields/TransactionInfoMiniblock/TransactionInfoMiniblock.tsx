import React from 'react';

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
              to={`/miniblocks/${transaction.miniBlockHash}`}
              className='trim-wrapper'
            >
              <Trim text={transaction.miniBlockHash} />
            </ExplorerLink>
            <CopyButton text={transaction.miniBlockHash} />
          </>
        ) : (
          <span className='text-secondary'>N/A</span>
        )}
      </div>
    </DetailItem>
  );
};
