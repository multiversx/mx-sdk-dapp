import React from 'react';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { ZERO } from 'constants/index';
import { getUsdValue } from 'utils/operations/getUsdValue';
import { WithClassnameType } from '../types';

export interface UsdValueType {
  amount: string;
  usd: number;
  decimals?: number;
  addEqualSign?: boolean;
  'data-testid'?: string;
}

export const UsdValue = (props: UsdValueType & WithClassnameType) => {
  const {
    amount,
    usd,
    decimals,
    addEqualSign,
    className,
    ...dataTestId
  } = props;
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
