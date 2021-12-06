import { Transaction } from '@elrondnetwork/erdjs';

export default function useSendTransaction() {
  return ({
    transaction,
    callbackRoute
  }: {
    transaction: Transaction;
    callbackRoute: string;
  }) => {
    const customEvent = new CustomEvent('transaction', {
      detail: { transaction, callbackRoute }
    });
    document.dispatchEvent(customEvent);
  };
}
