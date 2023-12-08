import React from 'react';
import classNames from 'classnames';
import { ZERO } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { getUsdValue } from 'utils/operations/getUsdValue';
import { WithClassnameType } from '../types';

// TODO: Rename to "UsdValuePropsType" when sdk-dapp@3.0.0
export interface UsdValueType extends WithClassnameType {
  amount: string;
  usd: number;
  decimals?: number;
  addEqualSign?: boolean;
  'data-testid'?: string;
}

const UsdValueComponent = ({
  amount,
  usd,
  decimals,
  addEqualSign,
  className,
  globalStyles,
  ...dataTestId
}: UsdValueType & WithStylesImportType) => {
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
        globalStyles?.formText,
        globalStyles?.textSecondary,
        globalStyles?.mt0,
        className ?? 'dapp-usd-value'
      )}
      {...dataTestId}
    >
      {displayedValue}
    </small>
  );
};

export const UsdValue = withStyles(UsdValueComponent, {});
