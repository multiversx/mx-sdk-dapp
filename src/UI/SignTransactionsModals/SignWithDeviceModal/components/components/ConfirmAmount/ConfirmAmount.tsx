import React from 'react';
import { DataTestIdsEnum } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { LoadingDots } from 'UI/LoadingDots';
import { TokenDetails } from 'UI/TokenDetails';
import { UsdValue } from 'UI/UsdValue';
import { TokenAvatar, TokenAvatarPropsType } from '../TokenAvatar';

export interface ConfirmAmountPropsType {
  token: string;
  formattedAmount: string;
  rawAmount: string;
  tokenAvatar?: string;
  tokenType: TokenAvatarPropsType['type'];
  tokenPrice?: number | null;
}

const ConfirmAmountComponent = ({
  token,
  tokenAvatar,
  tokenType,
  formattedAmount,
  rawAmount,
  tokenPrice,
  styles
}: ConfirmAmountPropsType & WithStylesImportType) => {
  const isValidTokenPrice = tokenPrice != null;
  const isLoadingTokenPrice = !isValidTokenPrice && tokenPrice !== null;

  return (
    <div className={styles?.amount}>
      <span className={styles?.label}>Amount</span>

      <div className={styles?.token}>
        <TokenAvatar type={tokenType} avatar={tokenAvatar} />

        <div
          className={styles?.value}
          data-testid={DataTestIdsEnum.confirmAmount}
        >
          {formattedAmount} <TokenDetails.Label token={token} />
        </div>
      </div>

      {isLoadingTokenPrice && <LoadingDots className={styles?.price} />}
      {isValidTokenPrice && (
        <UsdValue
          amount={rawAmount}
          usd={tokenPrice}
          data-testid={DataTestIdsEnum.confirmUsdValue}
          className={styles?.price}
        />
      )}
    </div>
  );
};

export const ConfirmAmount = withStyles(ConfirmAmountComponent, {
  local: () =>
    import(
      'UI/SignTransactionsModals/SignWithDeviceModal/components/components/ConfirmAmount/confirmAmountStyles.scss'
    )
});
