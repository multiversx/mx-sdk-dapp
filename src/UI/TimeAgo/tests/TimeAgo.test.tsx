import React from 'react';
import { render } from '@testing-library/react';
import { TimeAgo } from '../TimeAgo';

describe('TransactionsRow tests', () => {
  beforeEach(() => {
    class MockDate extends Date {
      constructor() {
        super('2022-05-14T11:01:58.135Z');
      }
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    global.Date = MockDate;
  });
  it('should display short time', () => {
    const methods = render(<TimeAgo value={1640702304} short tooltip />);

    const timeAgo = methods.getByTestId('timeAgo-' + 1640702304);

    expect(timeAgo.textContent).toBe('0 sec');
    expect(timeAgo.getAttribute('title')).toBe('May 14, 2022 11:01:58 AM UTC');
  });
  it('should display long time', () => {
    const methods = render(<TimeAgo value={1640702304} />);

    const timeAgo = methods.getByTestId('timeAgo-' + 1640702304);

    expect(timeAgo.textContent).toBe('0 sec');
    expect(timeAgo.getAttribute('title')).toBe(null);
  });
});
