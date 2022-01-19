import {
  Transaction,
  TransactionOptions,
  TransactionVersion
} from '@elrondnetwork/erdjs';
import { TransactionServerStatusesEnum } from 'types/enums';

export function parseTransactionAfterSigning(
  transaction: Transaction,
  isLedger = false
) {
  // TODO: REMOVE
  //#region REMOVE when options is available in erdjs getTransactionsFromWalletUrl
  if (isLedger) {
    transaction.version = TransactionVersion.withTxHashSignVersion();
    transaction.options = TransactionOptions.withTxHashSignOptions();
  }
  //#endregion
  const parsedTransaction = transaction.toPlainObject();
  parsedTransaction.hash = transaction.getHash().toString();
  parsedTransaction.status = TransactionServerStatusesEnum.pending;
  return parsedTransaction;
}

export default parseTransactionAfterSigning;
