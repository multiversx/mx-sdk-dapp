import React from 'react';
import classNames from 'classnames';

import MultiversXSymbol from 'assets/icons/mvx-icon-simple.svg';
import { WithStylesImportType } from 'hocs/useStyles';
import { withStyles } from 'hocs/withStyles';
import { WithClassnameType } from 'UI/types';

interface BalancePropsType extends WithClassnameType, WithStylesImportType {
  amount: string;
  addEqualSign?: boolean;
  displayAsUsd?: boolean;
  egldIcon?: boolean;
  showEgldLabel?: boolean;
  egldLabel?: string;
  showEgldLabelSup?: boolean;
}

export const BalanceComponent = ({
  amount,
  displayAsUsd,
  addEqualSign,
  egldIcon,
  className,
  showEgldLabel = true,
  styles,
  egldLabel,
  showEgldLabelSup
}: BalancePropsType) => {
  const [mainBalance, decimalBalance] = amount.split('.');
  const processedMainBalance =
    displayAsUsd && mainBalance.indexOf('$') < 0
      ? `$${mainBalance}`
      : mainBalance;

  return (
    <div className={classNames(styles?.balance, className)}>
      {egldIcon && !displayAsUsd && (
        <MultiversXSymbol className={styles?.balanceSymbol} />
      )}

      {addEqualSign && displayAsUsd && (
        <span className={styles?.balanceApproximation}>≈</span>
      )}

      <span className={styles?.balanceMain}>{processedMainBalance}</span>

      {decimalBalance && (
        <span className={styles?.balanceDecimals}>.{decimalBalance}</span>
      )}

      {!displayAsUsd && showEgldLabel && (
        <span
          className={classNames(styles?.balanceSuffix, {
            [styles?.balanceSuffixSup]: showEgldLabelSup
          })}
        >
          {egldLabel}
        </span>
      )}
    </div>
  );
};

export const Balance = withStyles(BalanceComponent, {
  ssrStyles: () => import('UI/Balance/balanceStyles.scss'),
  clientStyles: () => require('UI/Balance/balanceStyles.scss').default
});
