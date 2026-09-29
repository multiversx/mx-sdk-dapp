import { isMultiversxHost } from 'utils/validation/multiversxHosts';

const PRIVATE_IPV4_PATTERNS = [
  /^0\./,
  /^127\./,
  /^10\./,
  /^192\.168\./,
  /^169\.254\./,
  /^172\.(1[6-9]|2\d|3[01])\./,
  /^100\.(6[4-9]|[7-9]\d|1[01]\d|12[0-7])\./
];

const LOCAL_HOSTNAME_SUFFIXES = ['localhost', 'local'];

export type NetworkUrlField =
  | 'apiAddress'
  | 'walletAddress'
  | 'iframeWalletAddress'
  | 'explorerAddress'
  | 'websocketUrl';

const NETWORK_URL_FIELDS: NetworkUrlField[] = [
  'apiAddress',
  'walletAddress',
  'iframeWalletAddress',
  'explorerAddress',
  'websocketUrl'
];

const getAllowedProtocols = (field: NetworkUrlField) =>
  field === 'websocketUrl' ? ['https:', 'wss:'] : ['https:'];

const isPrivateIpv4 = (host: string) =>
  PRIVATE_IPV4_PATTERNS.some((pattern) => pattern.test(host));

// `::ffff:7f00:1` and `::7f00:1` carry an IPv4 address in the last 32 bits
const getEmbeddedIpv4 = (ipv6: string) => {
  const dotted = /^::(?:ffff:)?(\d+\.\d+\.\d+\.\d+)$/.exec(ipv6);

  if (dotted) {
    return dotted[1];
  }

  const match = /^::(?:ffff:)?([0-9a-f]{1,4}):([0-9a-f]{1,4})$/.exec(ipv6);

  if (!match) {
    return null;
  }

  const [high, low] = [match[1], match[2]].map((group) => parseInt(group, 16));

  return [high >> 8, high & 0xff, low >> 8, low & 0xff].join('.');
};

const isPrivateIpv6 = (ipv6: string) => {
  if (ipv6 === '::' || ipv6 === '::1') {
    return true;
  }

  // unique local fc00::/7, link-local fe80::/10
  if (/^f[cd]/.test(ipv6) || /^fe[89ab]/.test(ipv6)) {
    return true;
  }

  const embeddedIpv4 = getEmbeddedIpv4(ipv6);

  return embeddedIpv4 != null && isPrivateIpv4(embeddedIpv4);
};

export const isPrivateHost = (hostname: string): boolean => {
  const host = hostname.toLowerCase().replace(/\.+$/, '');

  if (host.startsWith('[') && host.endsWith(']')) {
    return isPrivateIpv6(host.slice(1, -1));
  }

  if (host.includes(':')) {
    return isPrivateIpv6(host);
  }

  if (
    LOCAL_HOSTNAME_SUFFIXES.some(
      (suffix) => host === suffix || host.endsWith(`.${suffix}`)
    )
  ) {
    return true;
  }

  return isPrivateIpv4(host);
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

  const allowedProtocols = getAllowedProtocols(field);

  if (!allowedProtocols.includes(parsed.protocol)) {
    const expected = allowedProtocols
      .map((protocol) => protocol.slice(0, -1))
      .join(' or ');

    throw new Error(
      `\`${field}\` must use ${expected}, got "${parsed.protocol}//" in "${url}"`
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
    !isMultiversxHost(parsed.hostname) &&
    !unsafeAllowCustomWalletHosts
  ) {
    throw new Error(
      `\`${field}\` points at "${parsed.hostname}", which is not a MultiversX host. ` +
        'Set `flags.unsafeAllowCustomWalletHosts: true` if this is intended.'
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
  NETWORK_URL_FIELDS.forEach((field) => {
    const url = config[field];

    if (url) {
      validateNetworkUrl({ field, url, unsafeAllowCustomWalletHosts });
    }
  });
};
