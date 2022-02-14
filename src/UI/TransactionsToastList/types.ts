import { SignedTransactionsType } from 'types';

export interface TransactionsToastListPropsType {
  toastProps?: any;
  className?: string;
  withTxNonce?: boolean;
  shouldRenderDefaultCss?: boolean;
  pendingTransactions?: SignedTransactionsType;
  signedTransactions?: SignedTransactionsType;
}
