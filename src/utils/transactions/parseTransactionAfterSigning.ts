import { TransactionServerStatusesEnum } from 'types/enums';
import { PlainSignedTransaction } from '@elrondnetwork/erdjs-web-wallet-provider/out/plainSignedTransaction';
import { SignedTransactionType } from '../../types';
import { newTransaction } from '../../models';

export function parseTransactionAfterSigning(
  signedTransaction: PlainSignedTransaction
) {
  const transaction = newTransaction(signedTransaction);

  const parsedTransaction: SignedTransactionType = {
    ...transaction.toPlainObject(),
    hash: transaction.getHash().hex(),
    status: TransactionServerStatusesEnum.pending
  };
  return parsedTransaction;
}

export default parseTransactionAfterSigning;
