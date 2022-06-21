import React from 'react';
import globalStyles from 'assets/sass/main.scss';
import {
  denomination as configDenomination,
  decimals as configDecimals
} from 'constants/index';
import { denominate, getEgldLabel, stringIsInteger } from 'utils';
import styles from './styles/denominate.scss';
import classNames from 'classnames';

export interface DenominateType {
  value: string;
  showLastNonZeroDecimal?: boolean;
  showLabel?: boolean;
  token?: string;
  decimals?: number;
  denomination?: number;
  egldLabel?: string;
  'data-testid'?: string;
}

const denominateInvalid = (props: DenominateType) => {
  return (
    <span
      data-testid={
        props['data-testid'] ? props['data-testid'] : 'denominateComponent'
      }
    >
      <span className={styles.intAmount}>...</span>
    </span>
  );
};

const denominateValid = (props: DenominateType, erdLabel: string) => {
  const { value, showLastNonZeroDecimal = false, showLabel = true } = props;
  const decimals =
    props.decimals !== undefined ? props.decimals : configDecimals;
  const denomination =
    props.denomination !== undefined ? props.denomination : configDenomination;

  const denominatedValue = denominate({
    input: value,
    denomination,
    decimals,
    showLastNonZeroDecimal,
    addCommas: true
  });

  const valueParts = denominatedValue.split('.');
  const hasNoDecimals = valueParts.length === 1;
  const isNotZero = denominatedValue !== '0';

  if (decimals > 0 && hasNoDecimals && isNotZero) {
    let zeros = '';

    for (let i = 1; i <= decimals; i++) {
      zeros = zeros + '0';
    }

    valueParts.push(zeros);
  }

  return (
    <span
      data-testid={
        props['data-testid'] ? props['data-testid'] : 'denominateComponent'
      }
    >
      <span className={styles.intAmount}>{valueParts[0]}</span>
      {valueParts.length > 1 && (
        <span className={styles.decimals}>.{valueParts[1]}</span>
      )}
      {showLabel && (
        <span
          className={`${classNames(
            styles.symbol,
            props.token && globalStyles.textMuted
          )}`}
        >
          &nbsp;{props.token ? props.token : erdLabel}
        </span>
      )}
    </span>
  );
};

const Denominate = (props: DenominateType) => {
  const { value } = props;

  return !stringIsInteger(value)
    ? denominateInvalid(props)
    : denominateValid(props, props.egldLabel || '');
};

const DenominateWrapper = (props: DenominateType) => {
  const egldLabel = props.egldLabel || getEgldLabel();
  const denominateProps = { ...props, egldLabel };
  return <Denominate {...denominateProps} />;
};

export default DenominateWrapper;
