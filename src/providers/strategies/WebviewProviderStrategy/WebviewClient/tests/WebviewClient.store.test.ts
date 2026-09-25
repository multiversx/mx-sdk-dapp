import { getStore } from 'store/store';
import { WebviewClient } from '../WebviewClient';

jest.mock('store/store', () => ({
  getStore: jest.fn()
}));

describe('WebviewClient store access', () => {
  it('does not read the store when it is created', () => {
    const client = new WebviewClient({
      onLoginCancelled: jest.fn().mockResolvedValue(undefined),
      allowedOrigins: []
    });

    expect(client).toBeInstanceOf(WebviewClient);
    expect(getStore).not.toHaveBeenCalled();
  });
});
