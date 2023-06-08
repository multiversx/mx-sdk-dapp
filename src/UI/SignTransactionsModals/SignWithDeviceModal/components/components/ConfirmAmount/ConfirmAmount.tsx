import React from 'react';

import { LoadingDots } from 'UI/LoadingDots';
import { TokenDetails } from 'UI/TokenDetails';
import { UsdValue } from 'UI/UsdValue';
import { TokenAvatar, TokenAvatarPropsType } from '../TokenAvatar';
import styles from './confirmAmountStyles.scss';

export interface ConfirmAmountPropsType {
  token: string;
  formattedAmount: string;
  rawAmount: string;
  tokenAvatar?: string;
  tokenType: TokenAvatarPropsType['type'];
  tokenPrice?: number | null;
}

export const ConfirmAmount = ({
  token,
  tokenAvatar,
  tokenType,
  formattedAmount,
  rawAmount,
  tokenPrice
}: ConfirmAmountPropsType) => {
  const isValidTokenPrice = tokenPrice != null;
  const isLoadingTokenPrice = !isValidTokenPrice && tokenPrice !== null;

  return (
    <div className={styles.amount}>
      <span className={styles.label}>Amount</span>

      <div className={styles.token}>
        <TokenAvatar type={tokenType} avatar={tokenAvatar} />

        <div className={styles.value} data-testid='confirmAmount'>
          {formattedAmount} <TokenDetails.Label token={token} />
        </div>
      </div>

      {isLoadingTokenPrice && <LoadingDots className={styles.price} />}
      {isValidTokenPrice && (
        <UsdValue
          amount={rawAmount}
          usd={tokenPrice}
          data-testid='confirmUsdValue'
          className={styles.price}
        />
      )}
    </div>
  );
};
