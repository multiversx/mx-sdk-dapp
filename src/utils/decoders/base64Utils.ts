/**
 * @description Checks if a string is base64 encoded
 * The detection difficulty stands in the format of an encoded string that initially had non-ASCII characters
 *
 * Usually, when decoding a base64 string, if the result has non-ASCII characters,
 * it means that the string was encoded, however, this is not always the case
 *
 * @example If we encode a string with non-ASCII characters like "👋wxyz{|}~���" to base64
 * the decoded result will also contain non-ASCII characters, but the strings is valid
 * For the scenarios above, the Buffer.from() conversion is not equal to the atob() conversion
 * and, the encoded string format is also different from a regular base64 string (e.g. "GamRHHZiaUR3bjVtQQ==")
 *
 * Solution:
 * - if any conversion fails (atob(), btoa() or Buffer.from()), it is definitely not an encoded string
 * - if the string is equal
 *
 * @see The tests for this function are in src/utils/decoders/tests/base64Utils.test.ts
 * @param str
 */
export function isStringBase64(str: string) {
  try {
    // Try to decode the string and encode it back using base64 functions
    const atobDecoded = atob(str);
    const btoaEncoded = btoa(atobDecoded);
    const bufferFromDecoded = Buffer.from(str, 'base64').toString();
    const bufferFromEncoded = Buffer.from(bufferFromDecoded).toString('base64');

    // If the result is equal to the initial string
    const isBtoaEqual = str === btoaEncoded || btoaEncoded.startsWith(str);
    const isBufferFromBase64Equal =
      str === bufferFromEncoded || bufferFromEncoded.startsWith(str);
    const isEqualToInitialString = isBtoaEqual && isBufferFromBase64Equal;

    if (isEqualToInitialString) {
      // it is a regular base64 string
      return true;
    }
  } catch (_e) {
    return false;
  }

  return false;
}

export function encodeToBase64(string: string) {
  return btoa(string);
}

export function decodeBase64(string: string) {
  if (!isStringBase64(string)) {
    return string;
  }

  return atob(string);
}
