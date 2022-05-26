import { PlainSignedTransaction } from '@elrondnetwork/erdjs-web-wallet-provider/out/plainSignedTransaction';
import { Transaction } from '@elrondnetwork/erdjs/out';
import { TransactionServerStatusesEnum } from 'types/enums';
import { newTransaction } from '../../models';
import { SignedTransactionType } from '../../types';

export function parseTransactionAfterSigning(
  signedTransaction: Transaction | PlainSignedTransaction
) {
  const isComplexTransactions =
    Object.getPrototypeOf(signedTransaction).toPlainObject != null;

  const transaction = isComplexTransactions
    ? (signedTransaction as Transaction)
    : newTransaction(signedTransaction as PlainSignedTransaction);

  const parsedTransaction: SignedTransactionType = {
    ...transaction.toPlainObject(),
    hash: transaction.getHash().hex(),
    status: TransactionServerStatusesEnum.pending
  };
  return parsedTransaction;
}

export default parseTransactionAfterSigning;
