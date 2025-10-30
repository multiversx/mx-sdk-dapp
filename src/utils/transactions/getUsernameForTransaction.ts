import { decodeBase64, isStringBase64 } from '../decoders';

export const getUsernameForTransaction = (username?: string) => {
  if (!username) {
    return;
  }

  const defaultData = username ?? '';

  return isStringBase64(defaultData) ? decodeBase64(defaultData) : defaultData;
};
