import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { getVisibleOperations } from 'utils/transactions/transactionInfoHelpers/getVisibleOperations';
import { getEgldValueData } from './getEgldValueData';

let warningLogged = false;

export function getValueFromOperations(
  transaction: InterpretedTransactionType
) {
  if (transaction.operations) {
    const [operation] = getVisibleOperations(transaction);
    return getEgldValueData(operation.value);
  } else {
    if (!warningLogged) {
      console.error(
        `Operations field missing for txHash: ${transaction.txHash}.
          Unable to compute value field.`
      );
      warningLogged = true;
    }
  }

  // fallback on transaction value
  return getEgldValueData(transaction.value);
}
