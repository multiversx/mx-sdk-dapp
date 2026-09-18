import { getFlagsConfig } from 'methods/initApp/helpers/getFlagsConfig';
import {
  ICustomProvider,
  IProvider
} from 'providers/types/providerFactory.types';
import { isProviderShapeValid } from './validateCustomProviders';

export const CUSTOM_PROVIDER_TIMEOUT_MS = 5000;

const withTimeout = async <T>(promise: Promise<T>, ms: number): Promise<T> => {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  try {
    return await Promise.race([
      promise,
      new Promise<never>((_resolve, reject) => {
        timeoutId = setTimeout(
          () => reject(new Error(`Timed out after ${ms}ms`)),
          ms
        );
      })
    ]);
  } finally {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }
};

export const createCustomProvider = async ({
  customProvider,
  address,
  anchor
}: {
  customProvider: ICustomProvider;
  address?: string;
  anchor?: HTMLElement;
}): Promise<IProvider> => {
  let createdProvider: IProvider;

  try {
    createdProvider = await withTimeout(
      Promise.resolve(customProvider.constructor({ address, anchor })),
      CUSTOM_PROVIDER_TIMEOUT_MS
    );
  } catch (error) {
    throw new Error(
      `Custom provider "${customProvider.type}" failed to initialize: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }

  const { strictProviderRegistration } = getFlagsConfig();

  if (strictProviderRegistration && !isProviderShapeValid(createdProvider)) {
    throw new Error(
      `Custom provider "${customProvider.type}" did not return a valid provider`
    );
  }

  return createdProvider;
};
