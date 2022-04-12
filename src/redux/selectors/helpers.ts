import isEqual from 'lodash.isequal';
import { createSelectorCreator, defaultMemoize } from 'reselect';

export const createDeepEqualSelector = createSelectorCreator(
  defaultMemoize,
  isEqual
);
