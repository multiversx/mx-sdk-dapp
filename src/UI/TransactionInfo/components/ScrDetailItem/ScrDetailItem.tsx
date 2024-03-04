import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { ResultType } from 'types';
import { CopyButton } from 'UI/CopyButton';
import { ExplorerLink } from 'UI/ExplorerLink';
import { Trim } from 'UI/Trim';
import { explorerUrlBuilder } from 'utils/transactions/getInterpretedTransaction/helpers';
import { DetailItem } from '../DetailItem';

const ScrDetailItemComponent = ({
  result,
  styles
}: { result: ResultType } & WithStylesImportType) => (
  <DetailItem title='SC Result Hash' noBorder>
    <div className={styles?.contractDetailItem}>
      <Trim text={result.hash} />

      <CopyButton className={styles?.copy} text={result.hash} />

      <ExplorerLink
        className={styles?.explorer}
        page={explorerUrlBuilder.transactionDetails(
          `${result.originalTxHash}#${result.hash}`
        )}
      >
        <FontAwesomeIcon icon={faSearch} />
      </ExplorerLink>
    </div>
  </DetailItem>
);

export const ScrDetailItem = withStyles(ScrDetailItemComponent, {
  ssrStyles: () =>
    import('UI/TransactionInfo/components/ScrDetailItem/styles.scss'),
  clientStyles: () =>
    require('UI/TransactionInfo/components/ScrDetailItem/styles.scss').default
});
