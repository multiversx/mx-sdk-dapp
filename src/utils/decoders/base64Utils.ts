const ONLY_LETTERS_REGEX = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
const ONLY_NUMBERS_REGEX = /^\d+(?: \d+)*$/;

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
 * - if the string contains only letters, only numbers or spaces, it is definitely not an encoded string
 * - if any conversion fails (atob(), btoa() or Buffer.from()), it is definitely not an encoded string
 * - if atob() conversion is equal to Buffer.from() conversion
 * or the string is equal to btoa() conversion of atob(), it is a regular base64 string
 *
 * @see The tests for this function are in src/utils/decoders/tests/base64Utils.test.ts
 * @param str
 */
export function isStringBase64(str: string) {
  if (ONLY_LETTERS_REGEX.test(str) || ONLY_NUMBERS_REGEX.test(str)) {
    // If the string contains only letters or only numbers
    // it is definitely not a base64 encoded string
    return false;
  }

  try {
    // Try to decode the string and encode it back to base64
    // If the result is equal to the initial string, it is a regular base64 string
    const atobDecoded = atob(str);
    const btoaEncoded = btoa(atobDecoded);

    if (str === btoaEncoded) {
      return true;
    }

    // Decode the string with Buffer.from() and compare it to the atob() conversion
    // If the result is equal, it is a regular base64 string
    const base64Decoded = Buffer.from(str, 'base64').toString();

    if (atobDecoded === base64Decoded) {
      return true;
    }
  } catch (e) {
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
