import React from 'react';
import { getUsdValue } from 'utils/operations';

export const UsdValue = (props: {
  amount: string;
  usd: number;
  'data-testid'?: string;
}) => {
  const { amount, usd, ...dataTestId } = props;
  const value = `≈ $${getUsdValue({ amount, usd })}`;
  return (
    <small className='form-text text-secondary mt-0' {...dataTestId}>
      {`${amount}` === '0' ? '= $0' : value}
    </small>
  );
};
