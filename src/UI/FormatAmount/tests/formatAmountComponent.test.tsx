import React from 'react';
import { render } from '@testing-library/react';
import { MAINNET_EGLD_LABEL } from 'constants/network';
import { FormatAmountType } from 'UI/types/denominate.types';
import { FormatAmount } from '../FormatAmount';

const renderComponent = (props: FormatAmountType) => {
  const methods = render(<FormatAmount {...props} egldLabel='EGLD' />);

  return methods.getByTestId('formatAmountComponent');
};

const decimalsSelector = (component: HTMLElement) =>
  component.querySelectorAll('span[data-testid=formatAmountDecimals]')[0]
    ?.textContent;

const symbolSelector = (component: HTMLElement) =>
  component.querySelectorAll('span[data-testid=formatAmountSymbol]').length;

describe('Format amount component when digits = 2', () => {
  it('should show 2 non zero decimals ', () => {
    const props = {
      value: '9999979999800000000000000',
      showLastNonZeroDecimal: false,
      showLabel: true,
      decimals: 2,
      egldLabel: MAINNET_EGLD_LABEL
    };

    const component = renderComponent(props);

    expect(decimalsSelector(component)).toBe('.99');
  });

  it('should show 2 zero decimals', () => {
    const props = {
      value: '9000000000000000000000000',
      showLastNonZeroDecimal: false,
      showLabel: true,
      decimals: 2,
      egldLabel: MAINNET_EGLD_LABEL
    };

    const component = renderComponent(props);

    expect(decimalsSelector(component)).toBe('.00');
  });

  it('should show all non zero decimals when showLastNonZeroDecimal = true', () => {
    const props = {
      value: '100000000000000',
      showLastNonZeroDecimal: true,
      showLabel: false,
      decimals: 2,
      egldLabel: MAINNET_EGLD_LABEL
    };

    const component = renderComponent(props);
    expect(decimalsSelector(component)).toBe('.0001');
  });

  it('should not show decimals when value is 0', () => {
    const props = {
      value: '100000000000000',
      showLastNonZeroDecimal: false,
      showLabel: true,
      decimals: 2,
      egldLabel: MAINNET_EGLD_LABEL
    };

    const component = renderComponent(props);

    expect(decimalsSelector(component)).toBe(undefined);
  });

  it('should show symbol', () => {
    const props = {
      value: '9000000000000000000000000',
      showLastNonZeroDecimal: false,
      showLabel: true,
      decimals: 2,
      egldLabel: MAINNET_EGLD_LABEL
    };

    const component = renderComponent(props);
    expect(symbolSelector(component)).toBe(1);
  });

  it('should not show symbol', () => {
    const props = {
      value: '9000000000000000000000000',
      showLastNonZeroDecimal: false,
      showLabel: false,
      decimals: 2,
      egldLabel: MAINNET_EGLD_LABEL
    };

    const component = renderComponent(props);
    expect(symbolSelector(component)).toBe(0);
  });
});
