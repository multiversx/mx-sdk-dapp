const PRIVATE_IPV4_PATTERNS = [
  /^127\./,
  /^10\./,
  /^192\.168\./,
  /^169\.254\./,
  /^172\.(1[6-9]|2\d|3[01])\./
];

const LOCAL_HOSTNAMES = new Set(['localhost', '[::1]', '::1', '0.0.0.0']);

/** Hosts whose origins legitimately receive signed payloads. */
const KNOWN_WALLET_HOST_SUFFIXES = ['.multiversx.com'];

export type NetworkUrlField =
  | 'apiAddress'
  | 'walletAddress'
  | 'iframeWalletAddress'
  | 'explorerAddress';

export const isPrivateHost = (hostname: string): boolean => {
  const host = hostname.toLowerCase();

  if (LOCAL_HOSTNAMES.has(host) || host.endsWith('.local')) {
    return true;
  }

  if (host.startsWith('[')) {
    return host === '[::1]' || host.startsWith('[fc') || host.startsWith('[fd');
  }

  return PRIVATE_IPV4_PATTERNS.some((pattern) => pattern.test(host));
};

export const isKnownWalletHost = (hostname: string): boolean => {
  const host = hostname.toLowerCase();

  return KNOWN_WALLET_HOST_SUFFIXES.some(
    (suffix) => host === suffix.slice(1) || host.endsWith(suffix)
  );
};

export const validateNetworkUrl = ({
  field,
  url,
  unsafeAllowCustomWalletHosts = false
}: {
  field: NetworkUrlField;
  url: string;
  unsafeAllowCustomWalletHosts?: boolean;
}): void => {
  let parsed: URL;

  try {
    parsed = new URL(url);
  } catch {
    throw new Error(`Invalid \`${field}\` in network config: "${url}"`);
  }

  if (parsed.protocol !== 'https:') {
    throw new Error(
      `\`${field}\` must use https, got "${parsed.protocol}//" in "${url}"`
    );
  }

  if (isPrivateHost(parsed.hostname)) {
    throw new Error(
      `\`${field}\` must not point at a loopback or private host: "${url}"`
    );
  }

  const isWalletField =
    field === 'walletAddress' || field === 'iframeWalletAddress';

  if (
    isWalletField &&
    !isKnownWalletHost(parsed.hostname) &&
    !unsafeAllowCustomWalletHosts
  ) {
    throw new Error(
      `\`${field}\` points at "${parsed.hostname}", which is not a known MultiversX wallet host. ` +
        'That origin receives transactions for signing. Set ' +
        '`security.unsafeAllowCustomWalletHosts: true` if this is intended.'
    );
  }
};

export const validateNetworkUrls = ({
  config,
  unsafeAllowCustomWalletHosts = false
}: {
  config: Partial<Record<NetworkUrlField, string | undefined>>;
  unsafeAllowCustomWalletHosts?: boolean;
}): void => {
  (
    [
      'apiAddress',
      'walletAddress',
      'iframeWalletAddress',
      'explorerAddress'
    ] as NetworkUrlField[]
  ).forEach((field) => {
    const url = config[field];

    if (url) {
      validateNetworkUrl({ field, url, unsafeAllowCustomWalletHosts });
    }
  });
};
