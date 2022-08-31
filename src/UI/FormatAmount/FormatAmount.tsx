import React from 'react';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { DECIMALS, DIGITS, MAINNET_EGLD_LABEL } from 'constants/index';
import { formatAmount } from 'utils/operations/formatAmount';
import { stringIsInteger } from 'utils/validation/stringIsInteger';
import { FormatAmountPropsType } from './formatAmount.types';
import styles from './formatAmountStyles.scss';

const formatAmountInvalid = (props: FormatAmountPropsType) => {
  return (
    <span
      data-testid={
        props['data-testid'] ? props['data-testid'] : 'formatAmountComponent'
      }
      className={props.className}
    >
      <span className={styles['int-amount']} data-testid='formatAmountInt'>
        ...
      </span>
    </span>
  );
};

const formatAmountValid = (props: FormatAmountPropsType, erdLabel: string) => {
  const { value, showLastNonZeroDecimal = false, showLabel = true } = props;
  const digits = props.digits != null ? props.digits : DIGITS;
  const decimals = props.decimals != null ? props.decimals : DECIMALS;

  const formattedValue = formatAmount({
    input: value,
    decimals,
    digits,
    showLastNonZeroDecimal,
    addCommas: true
  });

  const valueParts = formattedValue.split('.');
  const hasNoDecimals = valueParts.length === 1;
  const isNotZero = formattedValue !== '0';

  if (digits > 0 && hasNoDecimals && isNotZero) {
    let zeros = '';

    for (let i = 1; i <= digits; i++) {
      zeros = zeros + '0';
    }

    valueParts.push(zeros);
  }

  return (
    <span
      data-testid={
        props['data-testid'] ? props['data-testid'] : 'formatAmountComponent'
      }
      className={props.className}
    >
      <span className={styles['int-amount']} data-testid='formatAmountInt'>
        {valueParts[0]}
      </span>
      {valueParts.length > 1 && (
        <span className={styles.decimals} data-testid='formatAmountDecimals'>
          .{valueParts[1]}
        </span>
      )}
      {showLabel && (
        <span
          className={classNames(
            styles.symbol,
            props.token && globalStyles.textMuted
          )}
          data-testid='formatAmountSymbol'
        >
          &nbsp;{props.token ? props.token : erdLabel}
        </span>
      )}
    </span>
  );
};

const FormatAmountComponent = (props: FormatAmountPropsType) => {
  const { value } = props;

  return !stringIsInteger(value)
    ? formatAmountInvalid(props)
    : formatAmountValid(props, props.egldLabel || '');
};

/**
 * @param props.egldLabel  if not provided, will fallback on **EGLD**
 */
export const FormatAmount = (props: FormatAmountPropsType) => {
  const egldLabel = props.egldLabel || MAINNET_EGLD_LABEL;

  const formatAmountProps = { ...props, egldLabel };

  return <FormatAmountComponent {...formatAmountProps} />;
};
