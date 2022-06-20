import * as React from 'react';
import globalStyles from 'assets/sass/main.scss';
import { getUsdValue } from 'utils/operations';

const UsdValue = (props: {
  amount: string;
  usd: number;
  'data-testid'?: string;
}) => {
  const { amount, usd, ...dataTestId } = props;
  const value = `≈ $${getUsdValue({ amount, usd })}`;
  return (
    <small
      className={`${globalStyles.formText} ${globalStyles.textSecondary} ${globalStyles.mt0}`}
      {...dataTestId}
    >
      {`${amount}` === '0' ? '= $0' : value}
    </small>
  );
};

export default UsdValue;
