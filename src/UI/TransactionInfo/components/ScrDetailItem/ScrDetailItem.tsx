import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ResultType } from 'types';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink';
import { Trim } from 'UI/Trim';
import { explorerUrlBuilder } from 'utils/transactions/getInterpretedTransaction/helpers';
import { DetailItem } from '../DetailItem';

import styles from './styles.scss';

export interface ScrDetailItemPropsType {
  result: ResultType;
}

export const ScrDetailItem = ({ result }: ScrDetailItemPropsType) => (
  <DetailItem title='SC Result Hash' noBorder={true}>
    <div className={styles.contractDetailItem}>
      <Trim text={result.hash} />

      <CopyButton className={styles.copy} text={result.hash} />

      <ExplorerLink
        className={styles.explorer}
        page={explorerUrlBuilder.transactionDetails(
          `${result.originalTxHash}#${result.hash}`
        )}
      >
        <FontAwesomeIcon icon={faSearch} />
      </ExplorerLink>
    </div>
  </DetailItem>
);
