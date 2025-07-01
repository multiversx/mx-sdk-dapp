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
export declare function isStringBase64(str: string): boolean;
export declare function encodeToBase64(string: string): string;
export declare function decodeBase64(string: string): string;
//# sourceMappingURL=base64Utils.d.ts.map