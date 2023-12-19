import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink';
import { Trim } from 'UI/Trim';
import ResultWrapper from '../ResultWrapper/ResultWrapper';

export interface ResultHashPropsType {
  hash: string;
  page: string;
}

const ResultHashComponent = ({
  hash,
  page,
  styles
}: ResultHashPropsType & WithStylesImportType) => (
  <div className={styles?.scResultHash}>
    <ResultWrapper label='Hash'>
      <Trim text={hash} className={styles?.hash} />

      <CopyButton text={hash} className={styles?.copy} />

      <ExplorerLink className={styles?.explorer} page={page}>
        <FontAwesomeIcon icon={faSearch} />
      </ExplorerLink>
    </ResultWrapper>
  </div>
);

const ResultHash = withStyles(ResultHashComponent, {
  ssrStyles: () => import('UI/LoadingDots/loadingDotsStyle.scss'),
  clientStyles: () => require('UI/LoadingDots/loadingDotsStyle.scss').default
});

export default ResultHash;
