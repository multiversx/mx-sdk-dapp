import {
  IFlagsConfig,
  ResolvedFlagsConfig
} from 'store/slices/config/config.types';

/**
 * 5.x defaults preserve the existing behaviour. They flip in v6.
 */
export const DEFAULT_FLAGS_CONFIG: ResolvedFlagsConfig = {
  strictProviderRegistration: false,
  persistTokenLogin: true,
  strictLogout: false,
  enforceSessionExpiry: false,
  validateNetworkUrls: false,
  unsafeAllowCustomWalletHosts: false
};

export const resolveFlagsConfig = (
  flags?: IFlagsConfig | null
): ResolvedFlagsConfig => ({
  ...DEFAULT_FLAGS_CONFIG,
  ...(flags ?? {})
});

const warned = new Set<string>();

/**
 * Warns once per process that an opt-in hardening flag is off. Kept to a single
 * emission so that a per-request or per-render code path does not flood the
 * console.
 */
export const warnInsecureDefault = (
  flag: keyof IFlagsConfig,
  message: string
) => {
  if (warned.has(flag)) {
    return;
  }

  warned.add(flag);

  console.warn(
    `[sdk-dapp] ${message}\n` +
      `Set \`dAppConfig.flags.${flag}: ${!DEFAULT_FLAGS_CONFIG[flag]}\` in initApp to opt in. ` +
      'This becomes the default in v6.'
  );
};

export const resetInsecureDefaultWarnings = () => warned.clear();
