import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ResultType } from 'types';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink';
import { Trim } from 'UI/Trim';
import { explorerUrlBuilder } from 'utils/transactions/getInterpretedTransaction/helpers';
import { DetailItem } from '../DetailItem';

export const ScrDetailItem = ({ result }: { result: ResultType }) => (
  <DetailItem title='SC Result Hash' noBorder>
    <div className='d-flex align-items-center'>
      <Trim text={result.hash} />
      <CopyButton className='ml-2' text={result.hash} />
      <ExplorerLink
        page={explorerUrlBuilder.transactionDetails(
          `${result.originalTxHash}#${result.hash}`
        )}
        className='side-action ml-2'
      >
        <FontAwesomeIcon icon={faSearch} />
      </ExplorerLink>
    </div>
  </DetailItem>
);
