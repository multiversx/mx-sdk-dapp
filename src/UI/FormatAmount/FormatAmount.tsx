import React from 'react';
import classNames from 'classnames';
import { DataTestIdsEnum, DECIMALS, DIGITS, ZERO } from 'constants/index';
import { withStyles, WithStylesImportType } from 'hocs/withStyles';
import { getEgldLabel } from 'utils/network/getEgldLabel';
import { formatAmount } from 'utils/operations/formatAmount';
import { stringIsInteger } from 'utils/validation/stringIsInteger';
import { FormatAmountPropsType } from './formatAmount.types';

const formatAmountInvalid = (
  props: FormatAmountPropsType & WithStylesImportType
) => {
  const styles = props.styles ?? {};

  return (
    <span
      data-testid={
        props['data-testid'] || DataTestIdsEnum.formatAmountComponent
      }
      className={props.className}
    >
      <span
        className={styles['int-amount']}
        data-testid={DataTestIdsEnum.formatAmountInt}
      >
        ...
      </span>
    </span>
  );
};

const formatAmountValid = (
  props: FormatAmountPropsType & WithStylesImportType,
  erdLabel: string
) => {
  const { value, showLastNonZeroDecimal = false, showLabel = true } = props;
  const digits = props.digits != null ? props.digits : DIGITS;
  const decimals = props.decimals != null ? props.decimals : DECIMALS;
  const styles = props.styles ?? {};
  const globalStyles = props.globalStyles ?? {};

  const formattedValue = formatAmount({
    input: value,
    decimals,
    digits,
    showLastNonZeroDecimal,
    addCommas: true
  });

  const valueParts = formattedValue.split('.');
  const hasNoDecimals = valueParts.length === 1;
  const isNotZero = formattedValue !== ZERO;

  // fill in zeros to match specific formatting
  // example: if DIGITS are 2, `0.1` will be turned into `0.10`
  // to take up the same amount of space in a right-aligned table cell
  if (digits > 0 && hasNoDecimals && isNotZero) {
    let zeros = '';

    for (let i = 1; i <= digits; i++) {
      zeros = zeros + ZERO;
    }

    valueParts.push(zeros);
  }

  return (
    <span
      data-testid={
        props['data-testid'] || DataTestIdsEnum.formatAmountComponent
      }
      className={props.className}
    >
      <span
        className={styles['int-amount']}
        data-testid={DataTestIdsEnum.formatAmountInt}
      >
        {valueParts[0]}
      </span>
      {valueParts.length > 1 && (
        <span
          className={styles.decimals}
          data-testid={DataTestIdsEnum.formatAmountDecimals}
        >
          .{valueParts[1]}
        </span>
      )}
      {showLabel && (
        <span
          className={classNames(
            styles.symbol,
            props.token && globalStyles.textMuted
          )}
          data-testid={DataTestIdsEnum.formatAmountSymbol}
        >
          {` ${props.token ?? erdLabel}`}
        </span>
      )}
    </span>
  );
};

const FormatAmountComponent = (
  props: FormatAmountPropsType & WithStylesImportType
) => {
  const { value } = props;

  return !stringIsInteger(value)
    ? formatAmountInvalid(props)
    : formatAmountValid(props, props.egldLabel || '');
};

/**
 * @param props.egldLabel  if not provided, will fallback on **EGLD**
 */
const FormatAmountWrapper = (
  props: FormatAmountPropsType & WithStylesImportType
) => {
  const egldLabel = props.egldLabel || getEgldLabel();

  const formatAmountProps = { ...props, egldLabel };

  return <FormatAmountComponent {...formatAmountProps} />;
};

export const FormatAmount = withStyles(FormatAmountWrapper, {
  ssrStyles: () => import('UI/FormatAmount/formatAmountStyles.scss'),
  clientStyles: () => require('UI/FormatAmount/formatAmountStyles.scss').default
});
