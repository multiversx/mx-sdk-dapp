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

export type ScreenType = (signProps: SignPropsType) => JSX.Element;

export type CustomConfirmScreensType = {
  Ledger?: ScreenType;
  Extension?: ScreenType;
  WalletConnect?: ScreenType;
  Extra?: ScreenType;
};
