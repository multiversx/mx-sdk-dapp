import React, { useCallback } from 'react';
import { useGetLoginInfo } from 'hooks';
import { LoginMethodsEnum } from 'types';
import { SignWithExtensionModal } from './SignWithExtensionModal';
import { SignWithLedgerModal } from './SignWithLedgerModal';
import { SignWithWalletConnectModal } from './SignWithWalletConnectModal';
import {
  CustomConfirmScreensType,
  ScreenType,
  SignPropsType
} from './types/sign-transactions-modals';
import { ConfirmationScreen } from './components/ConfirmationScreen';

interface SignTransactionsPropsType {
  className?: string;
  CustomConfirmScreens?: CustomConfirmScreensType;
  verifyReceiverScam?: SignPropsType['verifyReceiverScam'];
}

export const SignTransactionsModals = ({
  className,
  CustomConfirmScreens,
  verifyReceiverScam = true
}: SignTransactionsPropsType) => {
  const { loginMethod } = useGetLoginInfo();

  const ConfirmScreens: CustomConfirmScreensType = {
    Ledger: CustomConfirmScreens?.Ledger ?? SignWithLedgerModal,
    WalletConnect:
      CustomConfirmScreens?.WalletConnect ?? SignWithWalletConnectModal,
    Extension: CustomConfirmScreens?.Extension ?? SignWithExtensionModal,
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
      return renderScreen(ConfirmScreens.WalletConnect);
    case LoginMethodsEnum.extension:
      return renderScreen(ConfirmScreens.Extension);
    case LoginMethodsEnum.extra:
      return renderScreen(ConfirmScreens.Extra);
    default:
      return null;
  }
};
