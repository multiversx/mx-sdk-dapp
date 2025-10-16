import {
  CANCEL_TRANSACTION_TOAST_DEFAULT_DURATION,
  CANCEL_TRANSACTION_TOAST_ID,
  ERROR_SIGNING_TOAST_ID
} from 'constants/transactions.constants';
import { createCustomToast } from 'store/actions';
import { IconNamesEnum, SigningErrorsEnum, SigningWarningsEnum } from 'types/enums.types';

const states = {
  error: {
    title: SigningErrorsEnum.errorSigning.toString(),
    iconClassName: 'danger',
    toastId: `${ERROR_SIGNING_TOAST_ID}-${Date.now()}`
  },
  warning: {
    title: SigningWarningsEnum.cancelled.toString(),
    iconClassName: 'warning',
    toastId: `${CANCEL_TRANSACTION_TOAST_ID}-${Date.now()}`
  }
};

const errorsMap = {
  extensionResponse: 'Unable to sign transactions', // extension
  'Transaction canceled': 'Transaction canceled', // web wallet
  'cancelled by user': 'Transaction signing cancelled by user', // custom
  'denied by the user': 'Transaction signing denied by the user' // ledger
};

const getUserError = (error: string) => {
  for (const [key, value] of Object.entries(errorsMap)) {
    if (error.includes(key)) {
      return value;
    }
  }
  return SigningErrorsEnum.errorSigning;
};

export function handleSignError(
  error: unknown,
  type: 'error' | 'warning' = 'error'
) {
  const originalError = (error as Error)?.message;
  const errorMessage = getUserError(originalError);

  const isKnownError = errorMessage !== SigningErrorsEnum.errorSigning;

  const errorType = isKnownError ? 'warning' : type;

  const state = Object.keys(states).includes(errorType)
    ? states[errorType]
    : states.error;

  const { toastId, iconClassName, title } = state;

  createCustomToast({
    toastId,
    duration: CANCEL_TRANSACTION_TOAST_DEFAULT_DURATION,
    icon: IconNamesEnum.close,
    iconClassName,
    message: errorMessage,
    title
  });

  return errorMessage;
}
