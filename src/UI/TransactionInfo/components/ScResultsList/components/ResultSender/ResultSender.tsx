import React from 'react';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { AssetType } from 'types';
import { CopyButton } from 'UI/CopyButton';
import { AccountName, ScAddressIcon } from 'UI/TransactionsTable/components';
import ResultWrapper from '../ResultWrapper/ResultWrapper';

export interface ResultSenderPropsType {
  sender: string;
  assets?: AssetType;
}

const ResultSenderComponent = ({
  sender,
  assets,
  styles
}: ResultSenderPropsType & WithStylesImportType) => (
  <div className={styles?.scResultSender}>
    <ResultWrapper label='From'>
      <ScAddressIcon initiator={sender} />

      <div className={styles?.address}>
        <AccountName address={sender} assets={assets} />
      </div>

      <CopyButton text={sender} className={styles?.copy} />
    </ResultWrapper>
  </div>
);

const ResultSender = withStyles(ResultSenderComponent, {
  ssrStyles: () =>
    import(
      'UI/TransactionInfo/components/ScResultsList/components/ResultSender/styles.scss'
    ),
  clientStyles: () =>
    require('UI/TransactionInfo/components/ScResultsList/components/ResultSender/styles.scss')
      .default
});

export default ResultSender;
