import React from 'react';

import { LoadingDots } from 'UI/LoadingDots';
import { TokenDetails } from 'UI/TokenDetails';
import { UsdValue } from 'UI/UsdValue';
import { TokenAvatar, TokenAvatarPropsType } from '../TokenAvatar';
import styles from './confirmAmountStyles.scss';

export interface ConfirmAmountPropsType {
  token: string;
  amount: string;
  tokenAvatar?: string;
  tokenType: TokenAvatarPropsType['type'];
  tokenPrice?: number | null;
}

export const ConfirmAmount = ({
  token,
  tokenAvatar,
  tokenType,
  amount,
  tokenPrice
}: ConfirmAmountPropsType) => (
  <div className={styles.amount}>
    <span className={styles.label}>Amount</span>

    <div className={styles.token}>
      <TokenAvatar type={tokenType} avatar={tokenAvatar} />

      <div className={styles.value}>
        {amount} <TokenDetails.Label token={token} />
      </div>
    </div>

    {tokenPrice === null ? null : tokenPrice ? (
      <UsdValue
        amount={amount}
        usd={tokenPrice}
        data-testid='confirmUsdValue'
        className={styles.price}
      />
    ) : (
      <LoadingDots className={styles.price} />
    )}
  </div>
);
