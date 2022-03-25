import React from 'react';
import { render } from '@testing-library/react';
import Denominate, { DenominateType } from '../index';

const renderComponent = (props: DenominateType) => {
  const methods = render(<Denominate {...props} egldLabel='EGLD' />);

  return methods.getByTestId('denominateComponent');
};

describe('Denominate component when decimals = 2', () => {
  it('should show 2 non zero decimals ', () => {
    const props = {
      value: '9999979999800000000000000',
      showLastNonZeroDecimal: false,
      showLabel: true,
      decimals: 2
    };

    const component = renderComponent(props);
    expect(component.getElementsByClassName('decimals')[0].textContent).toBe(
      '.99'
    );
  });

  it('should show 2 zero decimals', () => {
    const props = {
      value: '9000000000000000000000000',
      showLastNonZeroDecimal: false,
      showLabel: true,
      decimals: 2
    };

    const component = renderComponent(props);
    expect(component.getElementsByClassName('decimals')[0].textContent).toBe(
      '.00'
    );
  });

  it('should show all non zero decimals when showLastNonZeroDecimal = true', () => {
    const props = {
      value: '100000000000000',
      showLastNonZeroDecimal: true,
      showLabel: false,
      decimals: 2
    };

    const component = renderComponent(props);
    expect(component.getElementsByClassName('decimals')[0].textContent).toBe(
      '.0001'
    );
  });

  it('should not show decimals when value is 0', () => {
    const props = {
      value: '100000000000000',
      showLastNonZeroDecimal: false,
      showLabel: true,
      decimals: 2
    };

    const component = renderComponent(props);

    expect(component.getElementsByClassName('decimals').length).toBe(0);
  });

  it('should show symbol', () => {
    const props = {
      value: '9000000000000000000000000',
      showLastNonZeroDecimal: false,
      showLabel: true,
      decimals: 2
    };

    const component = renderComponent(props);
    expect(component.getElementsByClassName('symbol').length).toBe(1);
  });

  it('should not show symbol', () => {
    const props = {
      value: '9000000000000000000000000',
      showLastNonZeroDecimal: false,
      showLabel: false,
      decimals: 2
    };

    const component = renderComponent(props);
    expect(component.getElementsByClassName('symbol').length).toBe(0);
  });
});
