const BLOCK_HASH_REGEX = /^[0-9a-f]{64}$/i;

const encodeOrigin = (origin: string) =>
  Buffer.from(origin, 'utf8')
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');

export const isLoginTokenMessage = (message: string) => {
  if (typeof message !== 'string') {
    return false;
  }

  const parts = message.split('.');

  return parts.length === 4 && BLOCK_HASH_REGEX.test(parts[1]);
};

export const isLoginTokenMessageForOrigin = ({
  address,
  message,
  origin
}: {
  address: string;
  message: string;
  origin: string;
}) => {
  if (!isLoginTokenMessage(message)) {
    return false;
  }

  const [addressWithEncodedOrigin] = message.split('.');

  return addressWithEncodedOrigin === `${address}${encodeOrigin(origin)}`;
};
