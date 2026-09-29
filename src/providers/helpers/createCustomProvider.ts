import { getFlagsConfig } from 'methods/initApp/helpers/getFlagsConfig';
import { isProviderShapeValid } from 'providers/helpers/validateCustomProviders';
import {
  ICustomProvider,
  IProvider
} from 'providers/types/providerFactory.types';

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
  const { strictProviderRegistration } = getFlagsConfig();

  let createdProvider: IProvider;

  try {
    const provider = Promise.resolve(
      customProvider.constructor({ address, anchor })
    );

    createdProvider = strictProviderRegistration
      ? await withTimeout(provider, CUSTOM_PROVIDER_TIMEOUT_MS)
      : await provider;
  } catch (error) {
    throw new Error(
      `Custom provider "${customProvider.type}" failed to initialize: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }

  if (strictProviderRegistration && !isProviderShapeValid(createdProvider)) {
    throw new Error(
      `Custom provider "${customProvider.type}" did not return a valid provider`
    );
  }

  return createdProvider;
};
