import React from 'react';
import { Transaction } from '@elrondnetwork/erdjs';
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
import { TransactionStatusToast } from '../../components/TransactionStatusToast/TransactionStatusToast';

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

  const ConfirmScreens = {
    Ledger: CustomConfirmScreens?.Ledger ?? SignWithLedgerModal,
    WalletConnect:
      CustomConfirmScreens?.WalletConnect ?? SignWithWalletConnectModal,
    Extension: CustomConfirmScreens?.Extension ?? SignWithExtensionModal,
    Extra: CustomConfirmScreens?.Extra ?? null
  };

  const renderTransactionStatusToast = () => {
    if (signError) {
      return (
        <TransactionStatusToast
          show={Boolean(signError)}
          message={signError}
          type={'error'}
          onDelete={() => onAbort(sessionId)}
        />
      );
    } else if (cancelTransactionsMessage) {
      return (
        <TransactionStatusToast
          show={Boolean(cancelTransactionsMessage)}
          message={cancelTransactionsMessage}
          type={'warning'}
          onDelete={() => onAbort(sessionId)}
        />
      );
    }

    console.log('renderTransactionStatusToast - null');
    return null;
  };

  console.log('signError', signError);
  console.log('cancelTransactionsMessage', cancelTransactionsMessage);
  console.log('hasTransactions', hasTransactions);

  const shouldShowTransactionStatusToast =
    Boolean(signError) || Boolean(cancelTransactionsMessage);

  console.log(
    'shouldShowTransactionStatusToast',
    shouldShowTransactionStatusToast
  );

  if (shouldShowTransactionStatusToast || hasTransactions) {
    switch (loginMethod) {
      case LoginMethodsEnum.ledger:
        return shouldShowTransactionStatusToast ? (
          renderTransactionStatusToast()
        ) : (
          <ConfirmScreens.Ledger {...signProps} />
        );

      case LoginMethodsEnum.walletconnect:
        return shouldShowTransactionStatusToast ? (
          renderTransactionStatusToast()
        ) : (
          <ConfirmScreens.WalletConnect {...signProps} />
        );

      case LoginMethodsEnum.extension:
        return shouldShowTransactionStatusToast ? (
          renderTransactionStatusToast()
        ) : (
          <ConfirmScreens.Extension {...signProps} />
        );

      case LoginMethodsEnum.extra:
        return ConfirmScreens?.Extra ? (
          shouldShowTransactionStatusToast ? (
            renderTransactionStatusToast()
          ) : (
            <ConfirmScreens.Extra {...signProps} />
          )
        ) : null;

      default:
        return null;
    }
  }

  return null;
};
