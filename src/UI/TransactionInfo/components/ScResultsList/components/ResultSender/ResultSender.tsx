import React from 'react';

import { AssetType } from 'types';
import { CopyButton } from 'UI/CopyButton';
import { AccountName, ScAddressIcon } from 'UI/TransactionsTable/components';

import ResultWrapper from '../ResultWrapper/ResultWrapper';

import styles from './styles.scss';

export interface ResultSenderPropsType {
  sender: string;
  assets?: AssetType;
}

const ResultSender = ({ sender, assets }: ResultSenderPropsType) => (
  <div className={styles.scResultSender}>
    <ResultWrapper label='From'>
      <ScAddressIcon initiator={sender} />

      <div className={styles.address}>
        <AccountName address={sender} assets={assets} />
      </div>

      <CopyButton text={sender} className={styles.copy} />
    </ResultWrapper>
  </div>
);

export default ResultSender;
