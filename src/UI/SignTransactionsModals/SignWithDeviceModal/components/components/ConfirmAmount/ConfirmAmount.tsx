import React from 'react';

import { TokenDetails } from 'UI/TokenDetails';
import { TokenAvatar } from '../TokenAvatar';
import styles from './confirmAmountStyles.scss';

export interface ConfirmAmountPropsType {
  token: string;
  amount: string;
  tokenAvatar?: string;
}

export const ConfirmAmount = (props: ConfirmAmountPropsType) => {
  const { token, tokenAvatar, amount } = props;

  return (
    <div className={styles.amount}>
      <span className={styles.label}>Amount</span>

      <div className={styles.token}>
        <TokenAvatar type={''} avatar={tokenAvatar} />

        <div className={styles.value}>
          {amount} <TokenDetails.Label token={token} />
        </div>
      </div>
    </div>
  );
};
