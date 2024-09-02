import React, { useCallback } from 'react';

import { useGetLoginInfo } from 'hooks';
import { LoginMethodsEnum } from 'types';

import { ConfirmationScreen, DeviceConfirmationScreen } from './components';
import { SignWithCrossWindowWalletModal } from './SignWithCrossWindowWalletModal';
import { SignWithExtensionModal } from './SignWithExtensionModal';
import { SignWithExtraModal } from './SignWithExtraModal';
import { SignWithLedgerModal } from './SignWithLedgerModal';
import { SignWithMetamaskModal } from './SignWithMetamaskModal';
import { SignWithMetamaskProxyModal } from './SignWithMetamaskProxyModal';
import { SignWithOperaModal } from './SignWithOperaModal';
import { SignWithPasskeyModal } from './SignWithPasskeyModal';
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
  GuardianScreen?: SignPropsType['GuardianScreen'];
}

export const SignTransactionsModals = ({
  className,
  CustomConfirmScreens,
  GuardianScreen,
  verifyReceiverScam = true
}: SignTransactionsModalsPropsType) => {
  const { loginMethod } = useGetLoginInfo();

  const ConfirmScreens: CustomConfirmScreensType = {
    Ledger: CustomConfirmScreens?.Ledger ?? SignWithLedgerModal,
    WalletConnect:
      CustomConfirmScreens?.WalletConnect ?? SignWithWalletConnectModal,
    Extension: CustomConfirmScreens?.Extension ?? SignWithExtensionModal,
    Passkey: CustomConfirmScreens?.Passkey ?? SignWithPasskeyModal,
    Metamask: CustomConfirmScreens?.Metamask ?? SignWithMetamaskModal,
    MetamaskProxy:
      CustomConfirmScreens?.MetamaskProxy ?? SignWithMetamaskProxyModal,
    Opera: CustomConfirmScreens?.Opera ?? SignWithOperaModal,
    CrossWindow:
      CustomConfirmScreens?.CrossWindow ?? SignWithCrossWindowWalletModal,
    // The purpose of having this is to have a consistent flow of transaction signing.
    // The logic for redirecting to the web wallet is placed in the ConfirmationScreen component,
    // so we have to render that component when we are logged in with the web wallet provider
    Wallet: () => <></>,
    Extra: CustomConfirmScreens?.Extra ?? SignWithExtraModal
  };

  const renderScreen = useCallback(
    ({ Screen, isDevice }: { Screen?: ScreenType; isDevice?: boolean }) => {
      const ConfirmationScreenWrapper = isDevice
        ? DeviceConfirmationScreen
        : ConfirmationScreen;

      return (
        <ConfirmationScreenWrapper
          Screen={Screen}
          GuardianScreen={GuardianScreen}
          verifyReceiverScam={verifyReceiverScam}
          className={className}
        />
      );
    },
    [verifyReceiverScam, className]
  );
  switch (loginMethod) {
    case LoginMethodsEnum.ledger:
      return renderScreen({ Screen: ConfirmScreens.Ledger, isDevice: true });
    case LoginMethodsEnum.walletconnectv2:
      return renderScreen({ Screen: ConfirmScreens.WalletConnect });
    case LoginMethodsEnum.extension:
      return renderScreen({ Screen: ConfirmScreens.Extension });
    case LoginMethodsEnum.passkey:
      return renderScreen({ Screen: ConfirmScreens.Passkey });
    case LoginMethodsEnum.metamask:
      return renderScreen({ Screen: ConfirmScreens.Metamask, isDevice: true });
    case LoginMethodsEnum.opera:
      return renderScreen({ Screen: ConfirmScreens.Opera });
    case LoginMethodsEnum.crossWindow:
      return renderScreen({ Screen: ConfirmScreens.CrossWindow });
    case LoginMethodsEnum.metamaskProxy:
      return renderScreen({ Screen: ConfirmScreens.MetamaskProxy });
    case LoginMethodsEnum.wallet:
      return renderScreen({ Screen: ConfirmScreens.Wallet });
    case LoginMethodsEnum.extra:
      return renderScreen({ Screen: ConfirmScreens.Extra, isDevice: true });
    default:
      return null;
  }
};
