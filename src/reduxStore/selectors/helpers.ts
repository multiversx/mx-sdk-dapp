import isEqual from 'lodash.isequal';
import { createSelectorCreator, defaultMemoize } from 'reselect';
import { LoginMethodsEnum } from 'types';

export const createDeepEqualSelector = createSelectorCreator(
  defaultMemoize,
  isEqual
);

export const deriveIsLoggedIn = (
  loginMethod: LoginMethodsEnum,
  address?: string
) => loginMethod != LoginMethodsEnum.none && Boolean(address);
