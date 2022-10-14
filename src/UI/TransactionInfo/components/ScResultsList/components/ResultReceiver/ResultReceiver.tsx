import React from 'react';

import { AccountName, ScAddressIcon } from 'UI/TransactionsTable/components';
import { CopyButton } from 'UI/CopyButton';

import ResultWrapper from '../ResultWrapper/ResultWrapper';

import styles from './styles.scss';
import { AssetType } from 'types';

export interface ResultReceiverPropsType {
  receiver: string;
  assets?: AssetType;
}

const ResultReceiver = ({ receiver, assets }: ResultReceiverPropsType) => (
  <div className={styles.scResultReceiver}>
    <ResultWrapper label='To'>
      <ScAddressIcon initiator={receiver} />

      <div className={styles.address}>
        <AccountName address={receiver} assets={assets} />
      </div>

      <CopyButton text={receiver} className={styles.copy} />
    </ResultWrapper>
  </div>
);

export default ResultReceiver;
