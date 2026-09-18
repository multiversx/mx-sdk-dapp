import { StoreType } from 'store/store.types';
import { reconcileAccountNonce } from 'utils/account/reconcileAccountNonce';
import { nonceMiddleware } from '../nonceMiddleware';

jest.mock('utils/account/reconcileAccountNonce', () => ({
  reconcileAccountNonce: jest.fn().mockResolvedValue(undefined)
}));

const withSessions = (sessions: Record<string, { status: string }>) =>
  ({ transactions: sessions }) as unknown as StoreType;

const flushLazyImport = () => new Promise((resolve) => setTimeout(resolve, 0));

describe('nonceMiddleware', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it.each(['fail', 'invalid', 'timedOut', 'cancelled'])(
    'reconciles the nonce when a session ends as %s',
    async (status) => {
      nonceMiddleware(
        withSessions({ 1: { status } }),
        withSessions({ 1: { status: 'sent' } })
      );
      await flushLazyImport();

      expect(reconcileAccountNonce).toHaveBeenCalledTimes(1);
    }
  );

  it('does not reconcile when a session succeeds', async () => {
    nonceMiddleware(
      withSessions({ 1: { status: 'success' } }),
      withSessions({ 1: { status: 'sent' } })
    );
    await flushLazyImport();

    expect(reconcileAccountNonce).not.toHaveBeenCalled();
  });

  it('does not reconcile again for a session that already ended', async () => {
    const state = withSessions({ 1: { status: 'fail' } });

    nonceMiddleware(
      { ...state, transactions: { ...state.transactions } },
      state
    );
    await flushLazyImport();

    expect(reconcileAccountNonce).not.toHaveBeenCalled();
  });
});
