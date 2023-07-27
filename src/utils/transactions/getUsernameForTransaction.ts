import { isStringBase64 } from '../decoders';

export const getUsernameForTransaction = (username?: string) => {
  if (!username) {
    return;
  }

  const defaultData = username ?? '';

  return isStringBase64(defaultData)
    ? defaultData
    : Buffer.from(defaultData, 'base64').toString();
};
