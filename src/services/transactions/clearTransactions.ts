import {
  clearSignedTransaction,
  clearAllTransactionsToSign,
  clearAllSignedTransactions
} from 'reduxStore/slices';
import { store } from 'reduxStore/store';

export function removeTransactionsToSign(sessionId: string) {
  store.dispatch(clearSignedTransaction(sessionId));
}
export function removeSignedTransaction(sessionId: string) {
  store.dispatch(clearSignedTransaction(sessionId));
}

export function removeAllSignedTransactions() {
  store.dispatch(clearAllSignedTransactions());
}

export function removeAllTransactionsToSign() {
  store.dispatch(clearAllTransactionsToSign());
}
