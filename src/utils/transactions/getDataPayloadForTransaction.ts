import { decodeBase64, isStringBase64 } from '../decoders';

/**
 * @description We need to check if the data field was already encoded and to prevent additional encoding
 * The TransactionPayload is used in the context of the Transaction class
 * which must always have a non-encoded data field
 *
 * @see The tests for this function are in src/utils/transactions/tests/getDataPayloadForTransaction.test.ts
 * @param data - data field from transaction
 */
export const getDataPayloadForTransaction = (data?: string): Buffer => {
  const defaultData = data ?? '';

  const parsedData = isStringBase64(defaultData)
    ? decodeBase64(defaultData.trim())
    : defaultData.trim();

  return Buffer.from(parsedData);
};
