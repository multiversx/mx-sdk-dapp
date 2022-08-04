import React from 'react';
import classNames from 'classnames';
import { getUsdValue } from 'utils/operations/getUsdValue';
import { WithClassname } from 'UI/types/with-classname';
import globalStyles from 'assets/sass/main.scss';

export const UsdValue = (
  props: {
    amount: string;
    usd: number;
    'data-testid'?: string;
  } & WithClassname
) => {
  const { amount, usd, ...dataTestId } = props;
  const value = `≈ $${getUsdValue({ amount, usd })}`;
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
