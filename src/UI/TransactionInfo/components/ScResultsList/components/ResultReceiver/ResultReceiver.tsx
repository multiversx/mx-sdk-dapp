import React from 'react';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { AssetType } from 'types';
import { CopyButton } from 'UI/CopyButton';
import { AccountName, ScAddressIcon } from 'UI/TransactionsTable/components';
import ResultWrapper from '../ResultWrapper/ResultWrapper';

export interface ResultReceiverPropsType {
  receiver: string;
  assets?: AssetType;
}

const ResultReceiverComponent = ({
  receiver,
  assets,
  styles
}: ResultReceiverPropsType & WithStylesImportType) => (
  <div className={styles?.scResultReceiver}>
    <ResultWrapper label='To'>
      <ScAddressIcon initiator={receiver} />

      <div className={styles?.address}>
        <AccountName address={receiver} assets={assets} />
      </div>

      <CopyButton text={receiver} className={styles?.copy} />
    </ResultWrapper>
  </div>
);

export const ResultReceiver = withStyles(ResultReceiverComponent, {
  local: () =>
    import(
      'UI/TransactionInfo/components/ScResultsList/components/ResultReceiver/styles.scss'
    )
});

export default ResultReceiver;
