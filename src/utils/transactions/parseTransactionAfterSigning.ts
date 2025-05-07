import { Transaction, TransactionComputer } from '@multiversx/sdk-core';
import { PlainSignedTransaction } from '@multiversx/sdk-web-wallet-provider/out/plainSignedTransaction';
import { newTransaction } from 'models';
import { SignedTransactionType } from 'types';
import { TransactionServerStatusesEnum } from 'types/enums.types';
import { isGuardianTx } from './isGuardianTx';

export function parseTransactionAfterSigning(
  signedTransaction: Transaction | PlainSignedTransaction
) {
  const isComplexTransaction =
    Object.getPrototypeOf(signedTransaction).toPlainObject != null;

  const transaction = isComplexTransaction
    ? (signedTransaction as Transaction)
    : newTransaction(signedTransaction as PlainSignedTransaction);

  const transactionComputer = new TransactionComputer();

  const parsedTransaction: SignedTransactionType = {
    ...transaction.toPlainObject(),
    hash: transactionComputer.computeTransactionHash(transaction),
    senderUsername: transaction.senderUsername,
    receiverUsername: transaction.receiverUsername,
    status: TransactionServerStatusesEnum.pending
  };

  // TODO: Remove when the protocol supports usernames for guardian transactions
  if (isGuardianTx({ data: parsedTransaction.data, onlySetGuardian: true })) {
    delete parsedTransaction.senderUsername;
    delete parsedTransaction.receiverUsername;
  }

  return parsedTransaction;
}
