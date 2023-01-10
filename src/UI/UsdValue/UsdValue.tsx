import React from 'react';
import classNames from 'classnames';

import { ZERO } from 'constants/index';
import { getUsdValue } from 'utils/operations/getUsdValue';

import { WithClassnameType } from '../types';

import globalStyles from 'assets/sass/main.scss';

// TODO: Rename to "UsdValuePropsType" when mx-sdk-dapp@3.0.0
export interface UsdValueType extends WithClassnameType {
  amount: string;
  usd: number;
  decimals?: number;
  addEqualSign?: boolean;
  'data-testid'?: string;
}

export const UsdValue = ({
  amount,
  usd,
  decimals,
  addEqualSign,
  className,
  ...dataTestId
}: UsdValueType) => {
  const value = getUsdValue({
    amount,
    usd,
    decimals,
    addEqualSign: addEqualSign ?? true
  });
  const isAmountZero = `${amount}` === ZERO;
  const displayedValue = isAmountZero ? `= $${ZERO}` : value;

  return (
    <small
      className={classNames(
        globalStyles.formText,
        globalStyles.textSecondary,
        globalStyles.mt0,
        className ?? 'dapp-usd-value'
      )}
      {...dataTestId}
    >
      {displayedValue}
    </small>
  );
};
