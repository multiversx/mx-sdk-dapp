import {
  clearAllSignedTransactions,
  clearAllTransactionsToSign,
  clearSignedTransaction
} from 'reduxStore/slices';
import { getStore } from 'reduxStore/store';

export function removeTransactionsToSign(sessionId: string) {
  getStore().dispatch(clearSignedTransaction(sessionId));
}
export function removeSignedTransaction(sessionId: string) {
  getStore().dispatch(clearSignedTransaction(sessionId));
}

export function removeAllSignedTransactions() {
  getStore().dispatch(clearAllSignedTransactions());
}

export function removeAllTransactionsToSign() {
  getStore().dispatch(clearAllTransactionsToSign());
}
