import { LoginHandlerType } from '../UnlockPanelManager.types';

/**
 * Checks if a login handler is a simple callback function or if it is a function that has arguments.
 * @param login - The login handler to check.
 * @returns True if the login handler is a simple callback function, false otherwise.
 */
export function getIsSimpleLoginCallback(
  login: LoginHandlerType
): login is () => void {
  const takesZeroArguments = login.length === 0;
  return takesZeroArguments;
}
