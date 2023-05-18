import React from 'react';

import { useGetEgldPrice } from 'hooks';
import { TokenDetails } from 'UI/TokenDetails';
import { UsdValue } from 'UI/UsdValue';
import { TokenAvatar } from '../TokenAvatar';
import styles from './confirmAmountStyles.scss';

export interface ConfirmAmountPropsType {
  token: string;
  amount: string;
  tokenAvatar?: string;
  tokenType: string;
}

export const ConfirmAmount = ({
  token,
  tokenAvatar,
  tokenType,
  amount
}: ConfirmAmountPropsType) => {
  const { price } = useGetEgldPrice();

  return (
    <div className={styles.amount}>
      <span className={styles.label}>Amount</span>

      <div className={styles.token}>
        <TokenAvatar type={tokenType} avatar={tokenAvatar} />

        <div className={styles.value}>
          {amount} <TokenDetails.Label token={token} />
        </div>
      </div>

      {price && (
        <UsdValue
          amount={amount}
          usd={price}
          data-testid='confirmUsdValue'
          className={styles.price}
        />
      )}
    </div>
  );
};
