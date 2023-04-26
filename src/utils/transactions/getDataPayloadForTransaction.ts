import { TransactionPayload } from '@multiversx/sdk-core/out';
import { hasEmoji, isStringBase64, isUtf8 } from '../decoders';
import { ESDTTransferTypes } from '../smartContracts';

/**
 * @description We need to check if the data field was already encoded, to prevent additional encoding
 *   It should prevent additional encoding for ESDT transfers, if data field is base64 encoded
 *   or if after decoding the data field from base64, it is a valid utf8 string or contains emoji
 * @param data - data field from transaction
 */
export const getDataPayloadForTransaction = (data?: string) => {
  const defaultData = data ?? '';
  const decoded = Buffer.from(defaultData, 'base64').toString();
  const isEsdtTransfer = ESDTTransferTypes.some((transferType) =>
    defaultData.includes(transferType)
  );

  const shouldDecode =
    !isEsdtTransfer &&
    (isStringBase64(defaultData) || isUtf8(decoded) || hasEmoji(decoded));

  return shouldDecode
    ? TransactionPayload.fromEncoded(data)
    : new TransactionPayload(data);
};
