import React from 'react';
import classNames from 'classnames';

import MultiversXSymbol from 'assets/icons/mvx-icon-simple.svg';
import { withStyles } from 'hocs/withStyles';
import { WithClassnameType } from 'UI/types';

import { WithStylesImportType } from '../../hocs/useStyles';

interface BalancePropsType extends WithClassnameType, WithStylesImportType {
  amount: string;
  addEqualSign?: boolean;
  displayAsUsd?: boolean;
  egldIcon?: boolean;
  showTokenLabel?: boolean;
  tokenLabel?: string;
  showTokenLabelSup?: boolean;
}

export const BalanceComponent = ({
  amount,
  displayAsUsd,
  addEqualSign,
  egldIcon,
  className,
  showTokenLabel = true,
  styles,
  tokenLabel,
  showTokenLabelSup,
  'data-testid': dataTestId
}: BalancePropsType) => {
  const [mainBalance, decimalBalance] = amount.split('.');
  const processedMainBalance =
    displayAsUsd && mainBalance.indexOf('$') < 0
      ? `$${mainBalance}`
      : mainBalance;

  const getBalancePayload = () => {
    const balancePayload: Record<string, string> = {};

    if (addEqualSign && displayAsUsd) {
      Object.assign(balancePayload, { approximation: '≈' });
    }

    if (processedMainBalance) {
      Object.assign(balancePayload, { processedMainBalance });
    }

    if (decimalBalance) {
      Object.assign(balancePayload, { decimalBalance: `.${decimalBalance}` });
    }

    if (!displayAsUsd && showTokenLabel) {
      Object.assign(balancePayload, { tokenLabel: ` ${tokenLabel}` });
    }

    return balancePayload;
  };

  const balancePayload = getBalancePayload();
  const dataBalanceValue = Object.values(balancePayload).reduce(
    (totalBalanceValue, currentBalanceValue) =>
      totalBalanceValue.concat(currentBalanceValue),
    ''
  );

  return (
    <div
      className={classNames(styles?.balance, className)}
      data-testid={dataTestId}
      data-value={dataBalanceValue}
    >
      {egldIcon && !displayAsUsd && (
        <MultiversXSymbol className={styles?.balanceSymbol} />
      )}

      {balancePayload.approximation && (
        <span className={styles?.balanceApproximation}>
          {balancePayload.approximation}
        </span>
      )}

      {balancePayload.processedMainBalance && (
        <span className={styles?.balanceMain}>{processedMainBalance}</span>
      )}

      {balancePayload.decimalBalance && (
        <span className={styles?.balanceDecimals}>
          {balancePayload.decimalBalance}
        </span>
      )}

      {balancePayload.tokenLabel && (
        <sup
          className={classNames(styles?.balanceSuffix, {
            [styles?.balanceSuffixSup]: showTokenLabelSup
          })}
        >
          {balancePayload.tokenLabel}
        </sup>
      )}
    </div>
  );
};

export const Balance = withStyles(BalanceComponent, {
  ssrStyles: () => import('UI/Balance/balanceStyles.scss'),
  clientStyles: () => require('UI/Balance/balanceStyles.scss').default
});
