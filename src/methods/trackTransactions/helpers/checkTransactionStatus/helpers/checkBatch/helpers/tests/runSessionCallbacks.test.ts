import { getCallbacks } from 'managers/TransactionManager/helpers/sessionCallbacks';
import { TransactionBatchStatusesEnum } from 'types/enums.types';
import { runSessionCallbacks } from '../runSessionCallbacks';

jest.mock('managers/TransactionManager/helpers/sessionCallbacks');

const mockGetCallbacks = getCallbacks as jest.MockedFunction<
  typeof getCallbacks
>;

const sessionId = 'test-session-id';

describe('runSessionCallbacks tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call onSuccess callback when status is success', async () => {
    const mockOnSuccess = jest.fn().mockResolvedValue(undefined);
    mockGetCallbacks.mockReturnValue({
      onSuccess: mockOnSuccess
    });

    await runSessionCallbacks({
      sessionId,
      status: TransactionBatchStatusesEnum.success
    });

    expect(mockGetCallbacks).toHaveBeenCalledWith(sessionId);
    expect(mockOnSuccess).toHaveBeenCalledWith(sessionId);
  });
});
