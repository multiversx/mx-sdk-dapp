import React from 'react';

import { AssetType } from 'types';
import { CopyButton } from 'UI/CopyButton';
import { AccountName, ScAddressIcon } from 'UI/TransactionsTable/components';

import ResultWrapper from '../ResultWrapper/ResultWrapper';

import styles from './styles.scss';

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
