import React, { useCallback } from 'react';

import { useGetLoginInfo } from 'hooks';
import { LoginMethodsEnum } from 'types';

import { ConfirmationScreen } from './components/ConfirmationScreen';
import { SignWithExtensionModal } from './SignWithExtensionModal';
import { SignWithLedgerModal } from './SignWithLedgerModal';
import { SignWithWalletConnectModal } from './SignWithWalletConnectModal';
import {
  CustomConfirmScreensType,
  ScreenType,
  SignPropsType
} from './types/signTransactionsModals.types';

export interface SignTransactionsModalsPropsType {
  className?: string;
  CustomConfirmScreens?: CustomConfirmScreensType;
  verifyReceiverScam?: SignPropsType['verifyReceiverScam'];
}

export const SignTransactionsModals = ({
  className,
  CustomConfirmScreens,
  verifyReceiverScam = true
}: SignTransactionsModalsPropsType) => {
  const { loginMethod } = useGetLoginInfo();

  const ConfirmScreens: CustomConfirmScreensType = {
    Ledger: CustomConfirmScreens?.Ledger ?? SignWithLedgerModal,
    WalletConnect:
      CustomConfirmScreens?.WalletConnect ?? SignWithWalletConnectModal,
    Extension: CustomConfirmScreens?.Extension ?? SignWithExtensionModal,
    // The purpose of having this is to have a consistent flow of transaction signing.
    // The logic for redirecting to the web wallet is placed in the ConfirmationScreen component,
    // so we have to render that component when we are logged in with the web wallet provider
    Wallet: () => <></>,
    Extra: CustomConfirmScreens?.Extra
  };

  const renderScreen = useCallback(
    (Screen?: ScreenType) => {
      return (
        <ConfirmationScreen
          Screen={Screen}
          verifyReceiverScam={verifyReceiverScam}
          className={className}
        />
      );
    },
    [verifyReceiverScam, className]
  );

  switch (loginMethod) {
    case LoginMethodsEnum.ledger:
      return renderScreen(ConfirmScreens.Ledger);
    case LoginMethodsEnum.walletconnect:
    case LoginMethodsEnum.walletconnectv2:
      return renderScreen(ConfirmScreens.WalletConnect);
    case LoginMethodsEnum.extension:
      return renderScreen(ConfirmScreens.Extension);
    case LoginMethodsEnum.wallet:
      return renderScreen(ConfirmScreens.Wallet);
    case LoginMethodsEnum.extra:
      return renderScreen(ConfirmScreens.Extra);
    default:
      return null;
  }
};
