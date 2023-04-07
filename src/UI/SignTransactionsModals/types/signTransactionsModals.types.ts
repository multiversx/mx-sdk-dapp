import { Transaction } from '@multiversx/sdk-core';
import GenericGuardianProvider from '@multiversx/sdk-guardians-provider/out/genericGuardianProvider';

import { LoginMethodsEnum } from 'types';

export interface SignPropsType {
  handleClose: () => void;
  error: string | null;
  sessionId?: string;
  transactions: Transaction[];
  providerType: LoginMethodsEnum;
  callbackRoute: string;
  className?: string;
  verifyReceiverScam?: boolean;
  guardianProvider?: GenericGuardianProvider;
}

export type ScreenType = (signProps: SignPropsType) => JSX.Element;

export interface CustomConfirmScreensType {
  Ledger?: ScreenType;
  Extension?: ScreenType;
  Opera?: ScreenType;
  WalletConnect?: ScreenType;
  Wallet?: ScreenType;
  Extra?: ScreenType;
}
