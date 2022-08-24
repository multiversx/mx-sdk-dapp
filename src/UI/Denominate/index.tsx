import React from 'react';
import classNames from 'classnames';
import globalStyles from 'assets/sass/main.scss';
import { DIGITS, DECIMALS, mainnetEgldLabel } from 'constants/index';
import { DenominateType } from 'UI/types/denominate';
import { denominate } from 'utils/operations/denominate';
import { stringIsInteger } from 'utils/validation/stringIsInteger';
import styles from './denominate.scss';

const denominateInvalid = (props: DenominateType) => {
  return (
    <span
      data-testid={
        props['data-testid'] ? props['data-testid'] : 'denominateComponent'
      }
      className={props.className}
    >
      <span className={styles['int-amount']} data-testid='denominateIntAmount'>
        ...
      </span>
    </span>
  );
};

const denominateValid = (props: DenominateType, erdLabel: string) => {
  const { value, showLastNonZeroDecimal = false, showLabel = true } = props;
  const digits = props.decimals !== undefined ? props.decimals : DIGITS;
  const decimals =
    props.denomination !== undefined ? props.denomination : DECIMALS;

  const denominatedValue = denominate({
    input: value,
    denomination: decimals,
    decimals: digits,
    showLastNonZeroDecimal,
    addCommas: true
  });

  const valueParts = denominatedValue.split('.');
  const hasNoDecimals = valueParts.length === 1;
  const isNotZero = denominatedValue !== '0';

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
        props['data-testid'] ? props['data-testid'] : 'denominateComponent'
      }
      className={props.className}
    >
      <span className={styles['int-amount']} data-testid='denominateIntAmount'>
        {valueParts[0]}
      </span>
      {valueParts.length > 1 && (
        <span className={styles.decimals} data-testid='denominateDecimals'>
          .{valueParts[1]}
        </span>
      )}
      {showLabel && (
        <span
          className={classNames(
            styles.symbol,
            props.token && globalStyles.textMuted
          )}
          data-testid='denominateSymbol'
        >
          &nbsp;{props.token ? props.token : erdLabel}
        </span>
      )}
    </span>
  );
};

const DenominateComponent = (props: DenominateType) => {
  const { value } = props;

  return !stringIsInteger(value)
    ? denominateInvalid(props)
    : denominateValid(props, props.egldLabel || '');
};

/**
 * @param props.egldLabel  if not provided, will fallback on **EGLD**
 */
export const Denominate = (props: DenominateType) => {
  const egldLabel = props.egldLabel || mainnetEgldLabel;

  const denominateProps = { ...props, egldLabel };

  return <DenominateComponent {...denominateProps} />;
};
