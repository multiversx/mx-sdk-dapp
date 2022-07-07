import React from 'react';
import { useGetLoginInfo } from 'hooks';
import {
  useGetAccountProvider,
  useGetSignTransactionsError,
  useSignTransactions
} from 'hooks';
import { LoginMethodsEnum } from 'types';
import { SignWithExtensionModal } from './SignWithExtensionModal';
import { SignWithLedgerModal } from './SignWithLedgerModal';
import { SignWithWalletConnectModal } from './SignWithWalletConnectModal';
import {
  CustomConfirmScreensType,
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
  const {
    callbackRoute,
    transactions,
    error,
    sessionId,
    onAbort,
    hasTransactions,
    cancelTransactionsMessage
  } = useSignTransactions();

  const { providerType } = useGetAccountProvider();
  const signTransactionsError = useGetSignTransactionsError();
  const { loginMethod } = useGetLoginInfo();

  const handleClose = () => {
    onAbort(sessionId);
  };

  const signError = error || signTransactionsError;

  const signProps: SignPropsType = {
    handleClose,
    error: signError,
    sessionId,
    transactions: transactions!,
    providerType,
    callbackRoute,
    className,
    verifyReceiverScam
  };

  const ConfirmScreens: CustomConfirmScreensType = {
    Ledger: CustomConfirmScreens?.Ledger ?? SignWithLedgerModal,
    WalletConnect:
      CustomConfirmScreens?.WalletConnect ?? SignWithWalletConnectModal,
    Extension: CustomConfirmScreens?.Extension ?? SignWithExtensionModal,
    Extra: CustomConfirmScreens?.Extra
  };

  const shouldShowTransactionStatusToast =
    Boolean(signError) || Boolean(cancelTransactionsMessage);

  const renderScreen = (Screen?: (signProps: SignPropsType) => JSX.Element) => {
    return (
      <ConfirmationScreen
        Screen={Screen}
        signProps={signProps}
        transactionStatusToastType={{
          signError,
          cancelTransactionsMessage,
          onDelete: handleClose
        }}
        shouldShowTransactionStatusToast={shouldShowTransactionStatusToast}
      />
    );
  };

  if (shouldShowTransactionStatusToast || hasTransactions) {
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
  }

  return null;
};
