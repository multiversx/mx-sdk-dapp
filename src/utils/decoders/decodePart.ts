import { isUtf8 } from './isUtf8';

export function decodePart(part: string) {
  let decodedPart = part;

  try {
    const hexPart = Buffer.from(part, 'hex').toString();

    if (isUtf8(hexPart) && hexPart.length > 1) {
      decodedPart = hexPart;
    }
  } catch (_error) {
    /* empty */
  }

  return decodedPart;
}
