import { InterpretedTransactionType } from 'types/serverTransactions.types';
import { getEgldValueData } from './getEgldValueData';
import { getVisibleOperations } from './getVisibleOperations';

let warningLogged = false;

const logError = (hash: string) => {
  if (!warningLogged) {
    console.error(
      `Operations field missing for txHash: ${hash}.
        Unable to compute value field.`
    );
    warningLogged = true;
  }
};

export function getValueFromOperations(
  transaction: InterpretedTransactionType
) {
  try {
    if (transaction.operations) {
      const [operation] = getVisibleOperations(transaction);
      return getEgldValueData(operation?.value);
    } else {
      logError(transaction.txHash);
    }
  } catch {
    logError(transaction.txHash);
  }
  return getEgldValueData(transaction.value);
}
