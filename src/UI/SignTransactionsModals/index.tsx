import React from 'react';

import { Transaction } from '@elrondnetwork/erdjs';
import { useGetLoginInfo } from 'hooks';
import {
  useGetAccountProvider,
  useGetSignTransactionsError,
  useSignTransactions
} from 'hooks';
import { LoginMethodsEnum } from 'types';
import { withClassNameWrapper } from 'wrappers/withClassNameWrapper';
import SignWithExtensionModal from './SignWithExtensionModal';
import SignWithLedgerModal from './SignWithLedgerModal';
import SignWithWalletConnectModal from './SignWithWalletConnectModal';

interface SignPropsType {
  handleClose: () => void;
  error: string | null;
  sessionId?: string;
  transactions: Transaction[];
  providerType: LoginMethodsEnum;
  callbackRoute: string;
  className?: string;
  verifyReceiverScam?: boolean;
}

interface CustomConfirmScreensType {
  Ledger?: (signProps: SignPropsType) => JSX.Element;
  Extension?: (signProps: SignPropsType) => JSX.Element;
  WalletConnect?: (signProps: SignPropsType) => JSX.Element;
  Extra?: (signProps: SignPropsType) => JSX.Element;
}

interface SignTransactionsPropsType {
  className?: string;
  CustomConfirmScreens?: CustomConfirmScreensType;
  verifyReceiverScam?: SignPropsType['verifyReceiverScam'];
}

function SignTransactionsModals({
  className,
  CustomConfirmScreens,
  verifyReceiverScam = true
}: SignTransactionsPropsType) {
  const {
    callbackRoute,
    transactions,
    error,
    sessionId,
    onAbort,
    hasTransactions
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

  if (signError || hasTransactions) {
    switch (loginMethod) {
      case LoginMethodsEnum.ledger:
        return CustomConfirmScreens?.Ledger ? (
          <CustomConfirmScreens.Ledger {...signProps} />
        ) : (
          <SignWithLedgerModal {...signProps} />
        );

      case LoginMethodsEnum.walletconnect:
        return CustomConfirmScreens?.WalletConnect ? (
          <CustomConfirmScreens.WalletConnect {...signProps} />
        ) : (
          <SignWithWalletConnectModal {...signProps} />
        );

      case LoginMethodsEnum.extension:
        return CustomConfirmScreens?.Extension ? (
          <CustomConfirmScreens.Extension {...signProps} />
        ) : (
          <SignWithExtensionModal {...signProps} />
        );

      case LoginMethodsEnum.extra:
        return CustomConfirmScreens?.Extra ? (
          <CustomConfirmScreens.Extra {...signProps} />
        ) : null;

      default:
        return null;
    }
  }

  return null;
}

export default withClassNameWrapper(SignTransactionsModals);
