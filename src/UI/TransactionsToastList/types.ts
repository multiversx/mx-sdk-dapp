import { SignedTransactionsType } from 'types';

export interface TransactionsToastListPropsType {
  toastProps?: any;
  className?: string;
  shouldRenderDefaultCss?: boolean;
  pendingTransactions?: SignedTransactionsType;
  signedTransactions?: SignedTransactionsType;
  successfulToastLifetime?: number;
  parentElement?: Element | DocumentFragment;
}
