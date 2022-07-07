import { Transaction } from '@elrondnetwork/erdjs';
import { LoginMethodsEnum } from 'types';

export type SignPropsType = {
  handleClose: () => void;
  error: string | null;
  sessionId?: string;
  transactions: Transaction[];
  providerType: LoginMethodsEnum;
  callbackRoute: string;
  className?: string;
  verifyReceiverScam?: boolean;
};

export type CustomConfirmScreensType = {
  Ledger?: (signProps: SignPropsType) => JSX.Element;
  Extension?: (signProps: SignPropsType) => JSX.Element;
  WalletConnect?: (signProps: SignPropsType) => JSX.Element;
  Extra?: (signProps: SignPropsType) => JSX.Element;
};
