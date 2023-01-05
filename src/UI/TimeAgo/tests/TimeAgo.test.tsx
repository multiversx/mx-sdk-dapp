import React from 'react';
import { render } from '@testing-library/react';
import { TimeAgo } from '../TimeAgo';

describe('TransactionsRow tests', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(2022, 5, 14));
  });
  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
  it('should display short time', () => {
    const methods = render(<TimeAgo value={1640702304} short tooltip />);

    const timeAgo = methods.getByTestId('timeAgo-' + 1640702304);

    expect(timeAgo.textContent).toBe('167 days');
    expect(timeAgo.getAttribute('title')).toBe('Dec 28, 2021 14:38:24 PM UTC');
  });
  // it('should display long time', () => {
  //   const methods = render(<TimeAgo value={1640702304} />);

  //   const timeAgo = methods.getByTestId('timeAgo-' + 1640702304);

  //   expect(timeAgo.textContent).toBe('167 days 6 hrs');
  //   expect(timeAgo.getAttribute('title')).toBe(null);
  // });
});
