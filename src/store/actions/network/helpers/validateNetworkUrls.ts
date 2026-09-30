import { isMultiversxHost } from 'utils/validation/multiversxHosts';

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

// `hostname` comes from `new URL`, which already writes IPv4 as a dotted quad
// and IPv6 in lowercase, `::`-compressed, in brackets
const isPrivateIpv4 = (hostname: string) => {
  if (!/^\d+(\.\d+){3}$/.test(hostname)) {
    return false;
  }

  const [a, b] = hostname.split('.').map(Number);

  return (
    a === 0 ||
    a === 10 ||
    a === 127 ||
    (a === 100 && b >= 64 && b <= 127) ||
    (a === 169 && b === 254) ||
    (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && b === 168)
  );
};

// `::…` (unspecified, loopback, IPv4-mapped), unique local fc00::/7, link-local fe80::/10
const PRIVATE_IPV6_PATTERN = /^\[(::|f[cd]|fe[89ab])/;

const LOCAL_HOSTNAME_PATTERN = /(^|\.)local(host)?\.?$/;

const isPrivateHost = (hostname: string) =>
  LOCAL_HOSTNAME_PATTERN.test(hostname) ||
  PRIVATE_IPV6_PATTERN.test(hostname) ||
  isPrivateIpv4(hostname);

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
