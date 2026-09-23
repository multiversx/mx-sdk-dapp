import { safeWindow } from 'constants/window.constants';
import {
  ICustomProvider,
  ProviderType,
  ProviderTypeEnum
} from 'providers/types/providerFactory.types';

const REQUIRED_PROVIDER_METHODS = [
  'init',
  'login',
  'logout',
  'signTransactions',
  'signMessage',
  'getType',
  'getAddress',
  'isInitialized',
  'setAccount'
] as const;

const builtInProviderTypes = new Set<string>(Object.values(ProviderTypeEnum));

const getIsIconUrlAllowed = (iconUrl: string) => {
  try {
    const url = new URL(iconUrl, safeWindow.location?.href);

    return (
      url.protocol === 'https:' ||
      (url.protocol === 'data:' && url.pathname.startsWith('image/')) ||
      url.origin === safeWindow.location?.origin
    );
  } catch {
    return false;
  }
};

export const validateCustomProviders = (
  providers: ICustomProvider[]
): ICustomProvider[] =>
  providers.filter((provider) => {
    const type = provider?.type as ProviderType | undefined;

    if (!provider || typeof provider !== 'object') {
      console.warn(
        '[sdk-dapp] Ignoring a custom provider that is not an object'
      );
      return false;
    }

    if (!type || typeof type !== 'string') {
      console.warn('[sdk-dapp] Ignoring a custom provider without a `type`');
      return false;
    }

    if (builtInProviderTypes.has(type)) {
      console.warn(
        `[sdk-dapp] Ignoring custom provider "${type}": the type collides with a built-in provider`
      );
      return false;
    }

    if (
      !Object.prototype.hasOwnProperty.call(provider, 'constructor') ||
      typeof provider.constructor !== 'function'
    ) {
      console.warn(
        `[sdk-dapp] Ignoring custom provider "${type}": \`constructor\` is not a function`
      );
      return false;
    }

    if (!provider.name || typeof provider.name !== 'string') {
      console.warn(
        `[sdk-dapp] Ignoring custom provider "${type}": \`name\` is required`
      );
      return false;
    }

    if (provider.iconUrl != null && !getIsIconUrlAllowed(provider.iconUrl)) {
      console.warn(
        `[sdk-dapp] Ignoring custom provider "${type}": \`iconUrl\` must be an https, same-origin or data:image url`
      );
      return false;
    }

    return true;
  });

export const isProviderShapeValid = (candidate: unknown): boolean => {
  if (!candidate || typeof candidate !== 'object') {
    return false;
  }

  return REQUIRED_PROVIDER_METHODS.every(
    (method) =>
      typeof (candidate as Record<string, unknown>)[method] === 'function'
  );
};
