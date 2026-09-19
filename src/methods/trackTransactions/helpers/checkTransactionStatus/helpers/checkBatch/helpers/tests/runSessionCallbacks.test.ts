import { registerCallbacks } from 'managers/TransactionManager/helpers/sessionCallbacks';
import { TransactionBatchStatusesEnum } from 'types/enums.types';
import { runSessionCallbacks } from '../runSessionCallbacks';

let sessionCounter = 0;
const nextSessionId = () => `test-session-${++sessionCounter}`;

describe('runSessionCallbacks tests', () => {
  it('should call onSuccess callback when status is success', async () => {
    const sessionId = nextSessionId();
    const onSuccess = jest.fn().mockResolvedValue(undefined);
    registerCallbacks({ onSuccess, sessionId });

    await runSessionCallbacks({
      sessionId,
      status: TransactionBatchStatusesEnum.success
    });

    expect(onSuccess).toHaveBeenCalledWith(sessionId);
  });

  it('runs the callbacks of a session only once', async () => {
    const sessionId = nextSessionId();
    const onFail = jest.fn().mockResolvedValue(undefined);
    registerCallbacks({ onFail, sessionId });

    await runSessionCallbacks({
      sessionId,
      status: TransactionBatchStatusesEnum.fail
    });
    await runSessionCallbacks({
      sessionId,
      status: TransactionBatchStatusesEnum.fail
    });
    await runSessionCallbacks({
      sessionId,
      status: TransactionBatchStatusesEnum.timedOut
    });

    expect(onFail).toHaveBeenCalledTimes(1);
  });

  it('does not run callbacks for a non-terminal status', async () => {
    const sessionId = nextSessionId();
    const onSuccess = jest.fn().mockResolvedValue(undefined);
    registerCallbacks({ onSuccess, sessionId });

    await runSessionCallbacks({
      sessionId,
      status: TransactionBatchStatusesEnum.sent
    });
    await runSessionCallbacks({
      sessionId,
      status: TransactionBatchStatusesEnum.success
    });

    expect(onSuccess).toHaveBeenCalledTimes(1);
  });

  it('falls back to the global callback the session did not override', async () => {
    const sessionId = nextSessionId();
    const globalOnFail = jest.fn().mockResolvedValue(undefined);
    const sessionOnSuccess = jest.fn().mockResolvedValue(undefined);
    registerCallbacks({ onFail: globalOnFail });
    registerCallbacks({ onSuccess: sessionOnSuccess, sessionId });

    await runSessionCallbacks({
      sessionId,
      status: TransactionBatchStatusesEnum.fail
    });

    expect(globalOnFail).toHaveBeenCalledWith(sessionId);
    expect(sessionOnSuccess).not.toHaveBeenCalled();
  });

  it('does not propagate an error thrown by the callback', async () => {
    const sessionId = nextSessionId();
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    const onSuccess = jest.fn().mockRejectedValue(new Error('consumer error'));
    registerCallbacks({ onSuccess, sessionId });

    await expect(
      runSessionCallbacks({
        sessionId,
        status: TransactionBatchStatusesEnum.success
      })
    ).resolves.toBeUndefined();

    expect(onSuccess).toHaveBeenCalledTimes(1);
    consoleSpy.mockRestore();
  });
});
