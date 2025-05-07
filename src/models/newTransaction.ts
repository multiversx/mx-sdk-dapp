import { Address, Transaction } from '@multiversx/sdk-core';
import { GAS_LIMIT, GAS_PRICE, VERSION } from 'constants/index';
import { RawTransactionType } from 'types';
import { getDataPayloadForTransaction } from 'utils/transactions/getDataPayloadForTransaction';
import { isGuardianTx } from 'utils/transactions/isGuardianTx';

export function newTransaction(rawTransaction: RawTransactionType) {
  const rawTx = { ...rawTransaction };

  // TODO: Remove when the protocol supports usernames for guardian transactions
  if (isGuardianTx({ data: rawTx.data, onlySetGuardian: true })) {
    delete rawTx.senderUsername;
    delete rawTx.receiverUsername;
  }

  const transaction = new Transaction({
    value: BigInt(rawTx.value.valueOf()),
    data: getDataPayloadForTransaction(rawTx.data),
    nonce: BigInt(rawTx.nonce.valueOf()),
    receiver: new Address(rawTx.receiver),
    ...(rawTx.receiverUsername
      ? { receiverUsername: rawTx.receiverUsername }
      : {}),
    ...(rawTx.relayer ? { relayer: new Address(rawTx.relayer) } : {}),
    sender: new Address(rawTx.sender),
    ...(rawTx.senderUsername ? { senderUsername: rawTx.senderUsername } : {}),
    gasLimit: BigInt(rawTx.gasLimit.valueOf() ?? GAS_LIMIT),
    gasPrice: BigInt(rawTx.gasPrice.valueOf() ?? GAS_PRICE),
    chainID: rawTx.chainID.valueOf(),
    version: rawTx.version ?? VERSION,
    ...(rawTx.options ? { options: rawTx.options } : {}),
    ...(rawTx.guardian ? { guardian: new Address(rawTx.guardian) } : {})
  });

  if (rawTx.relayerSignature) {
    transaction.relayerSignature = Buffer.from(rawTx.relayerSignature, 'hex');
  }

  if (rawTx.guardianSignature) {
    transaction.guardianSignature = Buffer.from(rawTx.guardianSignature, 'hex');
  }

  if (rawTx.signature) {
    transaction.signature = Buffer.from(rawTx.signature, 'hex');
  }

  return transaction;
}
