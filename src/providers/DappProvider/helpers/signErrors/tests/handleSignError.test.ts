import {
  CANCEL_TRANSACTION_TOAST_DEFAULT_DURATION,
  CANCEL_TRANSACTION_TOAST_ID,
  ERROR_SIGNING_TOAST_ID
} from 'constants/transactions.constants';
import { IconNamesEnum, SigningErrorsEnum } from 'types/enums.types';
import { handleSignError } from '../handleSignError';

jest.mock('store/actions/toasts/toastsActions', () => ({
  createCustomToast: jest.fn()
}));

const { createCustomToast: mockCreateCustomToast } = jest.requireMock(
  'store/actions/toasts/toastsActions'
) as {
  createCustomToast: jest.Mock;
};

describe('handleSignError tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('handles known error and uses warning type', () => {
    const error = new Error('Transaction canceled by user');
    const result = handleSignError(error, 'error');

    expect(result).toBe('Transaction canceled');
    expect(mockCreateCustomToast).toHaveBeenCalledWith(
      expect.objectContaining({
        toastId: expect.stringMatching(
          new RegExp(`^${CANCEL_TRANSACTION_TOAST_ID}-\\d+$`)
        ),
        duration: CANCEL_TRANSACTION_TOAST_DEFAULT_DURATION,
        icon: IconNamesEnum.close,
        iconClassName: 'warning',
        message: 'Transaction canceled',
        title: 'Signing canceled'
      })
    );
  });

  it('handles unknown error and uses provided type', () => {
    const error = new Error('Some unknown error');
    const result = handleSignError(error, 'error');

    expect(result).toBe(SigningErrorsEnum.errorSigning);
    expect(mockCreateCustomToast).toHaveBeenCalledWith(
      expect.objectContaining({
        toastId: expect.stringMatching(
          new RegExp(`^${ERROR_SIGNING_TOAST_ID}-\\d+$`)
        ),
        duration: CANCEL_TRANSACTION_TOAST_DEFAULT_DURATION,
        icon: IconNamesEnum.close,
        iconClassName: 'danger',
        message: SigningErrorsEnum.errorSigning,
        title: SigningErrorsEnum.errorSigning
      })
    );
  });

  it('handles known error with extensionResponse key', () => {
    const error = new Error('extensionResponse failed');
    const result = handleSignError(error);

    expect(result).toBe('Unable to sign transactions');
    expect(mockCreateCustomToast).toHaveBeenCalledWith(
      expect.objectContaining({
        iconClassName: 'warning',
        message: 'Unable to sign transactions'
      })
    );
  });

  it('handles error with empty message', () => {
    const error = new Error('');
    const result = handleSignError(error);

    expect(result).toBe(SigningErrorsEnum.errorSigning);
    expect(mockCreateCustomToast).toHaveBeenCalledWith(
      expect.objectContaining({
        iconClassName: 'danger',
        message: SigningErrorsEnum.errorSigning
      })
    );
  });
});
