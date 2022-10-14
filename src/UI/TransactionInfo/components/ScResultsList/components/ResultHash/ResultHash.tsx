import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Trim } from 'UI/Trim';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink';

import ResultWrapper from '../ResultWrapper/ResultWrapper';

import styles from './styles.scss';

export interface ResultHashPropsType {
  hash: string;
  page: string;
}

const ResultHash = ({ hash, page }: ResultHashPropsType) => (
  <div className={styles.scResultHash}>
    <ResultWrapper label='Hash'>
      <Trim text={hash} className={styles.hash} />

      <CopyButton text={hash} className={styles.copy} />

      <ExplorerLink className={styles.explorer} page={page}>
        <FontAwesomeIcon icon={faSearch} />
      </ExplorerLink>
    </ResultWrapper>
  </div>
);

export default ResultHash;
