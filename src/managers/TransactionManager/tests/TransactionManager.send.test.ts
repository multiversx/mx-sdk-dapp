import axios from 'axios';
import { reconcileAccountNonce } from 'utils/account/reconcileAccountNonce';
import { TransactionManager } from '../TransactionManager';

jest.mock('axios');
jest.mock('utils/account/reconcileAccountNonce', () => ({
  reconcileAccountNonce: jest.fn().mockResolvedValue(undefined)
}));

const transaction = {
  toPlainObject: () => ({ nonce: 7 })
} as any;

describe('TransactionManager.send', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('reconciles the nonce and rethrows when sending fails', async () => {
    (axios.post as jest.Mock).mockRejectedValue({
      response: { data: { message: 'insufficient funds' } }
    });

    await expect(
      TransactionManager.getInstance().send([transaction])
    ).rejects.toBe('insufficient funds');

    expect(reconcileAccountNonce).toHaveBeenCalledTimes(1);
  });

  it('does not reconcile when sending succeeds', async () => {
    (axios.post as jest.Mock).mockResolvedValue({ data: { txHash: 'a' } });

    await TransactionManager.getInstance().send([transaction]);

    expect(reconcileAccountNonce).not.toHaveBeenCalled();
  });
});
