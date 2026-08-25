import { checkTransactionStatus } from '../checkTransactionStatus';
import { createWebsocketHashResolver } from '../resolveWebsocketHashes';

jest.mock('../checkTransactionStatus');

const mockCheckTransactionStatus =
  checkTransactionStatus as jest.MockedFunction<typeof checkTransactionStatus>;

describe('createWebsocketHashResolver tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockCheckTransactionStatus.mockResolvedValue(undefined);
  });

  it('resolves the given hashes through checkTransactionStatus', async () => {
    const { resolve } = createWebsocketHashResolver();

    await expect(resolve(['hash-1', 'hash-2'])).resolves.toEqual([
      'hash-1',
      'hash-2'
    ]);

    expect(mockCheckTransactionStatus).toHaveBeenCalledWith({
      hashes: ['hash-1', 'hash-2']
    });
  });

  it('skips hashes already in flight', async () => {
    let releaseCheck: () => void = () => undefined;
    mockCheckTransactionStatus.mockImplementation(
      () =>
        new Promise<void>((resolvePromise) => {
          releaseCheck = resolvePromise;
        })
    );

    const { resolve } = createWebsocketHashResolver();

    const first = resolve(['hash-1']);
    const second = resolve(['hash-1']);

    await expect(second).resolves.toEqual([]);
    expect(mockCheckTransactionStatus).toHaveBeenCalledTimes(1);

    releaseCheck();
    await first;
  });

  it('resolves only the hashes that are not in flight', async () => {
    const releaseChecks: Array<() => void> = [];
    mockCheckTransactionStatus.mockImplementation(
      () =>
        new Promise<void>((resolvePromise) => {
          releaseChecks.push(resolvePromise);
        })
    );

    const { resolve } = createWebsocketHashResolver();

    const first = resolve(['hash-1']);
    const second = resolve(['hash-1', 'hash-2']);

    expect(mockCheckTransactionStatus).toHaveBeenLastCalledWith({
      hashes: ['hash-2']
    });

    releaseChecks.forEach((releaseCheck) => releaseCheck());
    await Promise.all([first, second]);
  });

  it('lets a hash be resolved again once it is no longer in flight', async () => {
    const { resolve } = createWebsocketHashResolver();

    await resolve(['hash-1']);
    await resolve(['hash-1']);

    // A hash seen while still pending must stay resolvable, so a later
    // transactionCompleted can settle it.
    expect(mockCheckTransactionStatus).toHaveBeenCalledTimes(2);
  });

  it('releases the in-flight hash when the check fails', async () => {
    mockCheckTransactionStatus.mockRejectedValueOnce(new Error('boom'));

    const { resolve } = createWebsocketHashResolver();

    await expect(resolve(['hash-1'])).rejects.toThrow('boom');

    await resolve(['hash-1']);
    expect(mockCheckTransactionStatus).toHaveBeenCalledTimes(2);
  });

  it('ignores empty input', async () => {
    const { resolve } = createWebsocketHashResolver();

    await expect(resolve([])).resolves.toEqual([]);
    await expect(resolve([''])).resolves.toEqual([]);

    expect(mockCheckTransactionStatus).not.toHaveBeenCalled();
  });
});
