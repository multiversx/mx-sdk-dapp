import {
  Address,
  Transaction,
  TransactionOptions,
  TransactionPayload,
  TransactionVersion
} from '@multiversx/sdk-core';
import { Signature } from '@multiversx/sdk-core/out/signature';
import { GAS_LIMIT, GAS_PRICE, VERSION } from 'constants/index';
import { RawTransactionType } from 'types';
import { isStringBase64 } from 'utils/decoders/base64Utils';

export function newTransaction(rawTransaction: RawTransactionType) {
  const { data } = rawTransaction;
  const dataPayload = isStringBase64(data ?? '')
    ? TransactionPayload.fromEncoded(data)
    : new TransactionPayload(data);

  const transaction = new Transaction({
    value: rawTransaction.value.valueOf(),
    data: dataPayload,
    nonce: rawTransaction.nonce.valueOf(),
    receiver: new Address(rawTransaction.receiver),
    sender: new Address(rawTransaction.sender),
    gasLimit: rawTransaction.gasLimit.valueOf() ?? GAS_LIMIT,
    gasPrice: rawTransaction.gasPrice.valueOf() ?? GAS_PRICE,
    chainID: rawTransaction.chainID.valueOf(),
    version: new TransactionVersion(rawTransaction.version ?? VERSION),
    ...(rawTransaction.options
      ? { options: new TransactionOptions(rawTransaction.options) }
      : {}),
    ...(rawTransaction.guardian
      ? { guardian: new Address(rawTransaction.guardian) }
      : {})
  });

  if (rawTransaction.guardianSignature) {
    transaction.applyGuardianSignature({
      hex: () => rawTransaction.guardianSignature || ''
    });
  }

  transaction.applySignature({
    hex: () => rawTransaction.signature || ''
  });
  transaction.applySignature(new Signature(rawTransaction.signature));

  return transaction;
}
