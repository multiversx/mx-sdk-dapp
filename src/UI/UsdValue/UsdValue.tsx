import React from 'react';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { getUsdValue, UsdValueType } from 'utils/operations/getUsdValue';
import { WithClassnameType } from '../types';

export const UsdValue = (
  props: UsdValueType & {
    'data-testid'?: string;
  } & WithClassnameType
) => {
  const { amount, usd, decimals, ...dataTestId } = props;
  const value = getUsdValue({ amount, usd, decimals });
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
      {`${amount}` === '0' ? '= $0' : value}
    </small>
  );
};
