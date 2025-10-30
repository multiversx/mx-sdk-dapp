import { decodeBase64 } from 'utils/decoders';
import { decodePart } from 'utils/decoders/decodePart';

export const getScResultsDecodedData = (data: string) => {
  const parts = decodeBase64(data).split('@');

  if (parts.length >= 2) {
    if (parts[0].length > 0) {
      parts[0] = decodePart(parts[0]);
    } else {
      parts[1] = decodePart(parts[1]);
    }
  }

  return parts.join('@');
};
