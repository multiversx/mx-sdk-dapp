import { DEFAULT_FLAGS_CONFIG } from 'methods/initApp/helpers/flagsConfig';
import { flagsConfigSelector } from 'store/selectors/configSelectors';
import { ResolvedFlagsConfig } from 'store/slices/config/config.types';
import { getState } from 'store/store';

export const getFlagsConfig = (): ResolvedFlagsConfig => {
  try {
    return flagsConfigSelector(getState()) ?? DEFAULT_FLAGS_CONFIG;
  } catch {
    return DEFAULT_FLAGS_CONFIG;
  }
};
