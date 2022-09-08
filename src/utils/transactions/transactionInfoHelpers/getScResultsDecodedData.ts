import { decodePart } from 'utils/decoders/decodePart';

export const getScResultsDecodedData = (data: string) => {
  const parts = Buffer.from(data, 'base64')
    .toString()
    .split('@');

  if (parts.length >= 2) {
    if (parts[0].length > 0) {
      parts[0] = decodePart(parts[0]);
    } else {
      parts[1] = decodePart(parts[1]);
    }
  }

  return parts.join('@');
};
