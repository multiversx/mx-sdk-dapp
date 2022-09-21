import React from 'react';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { ZERO } from 'constants/index';
import { getUsdValue, UsdValueType } from 'utils/operations/getUsdValue';
import { WithClassnameType } from '../types';

export const UsdValue = (
  props: UsdValueType & {
    'data-testid'?: string;
  } & WithClassnameType
) => {
  const { amount, usd, decimals, addEqualSign, ...dataTestId } = props;
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
        props.className ?? 'dapp-usd-value'
      )}
      {...dataTestId}
    >
      {displayedValue}
    </small>
  );
};
