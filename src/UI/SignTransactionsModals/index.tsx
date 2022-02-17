import React from 'react';

import { Transaction } from '@elrondnetwork/erdjs';
import {
  useGetAccountProvider,
  useGetSignTransactionsError,
  useSignTransactions
} from 'hooks';
import { LoginMethodsEnum } from 'types';
import { getIsProviderEqualTo } from 'utils';
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
}

interface CustomConfirmScreensType {
  Ledger: (signProps: SignPropsType) => JSX.Element;
  Extension: (signProps: SignPropsType) => JSX.Element;
  WalletConnect: (signProps: SignPropsType) => JSX.Element;
  Extra: (signProps: SignPropsType) => JSX.Element;
}

interface SignTransactionsPropsType {
  className?: string;
  CustomConfirmScreens?: CustomConfirmScreensType;
}

function SignTransactionsModals({
  className,
  CustomConfirmScreens
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
    className
  };

  const LedgerConfirm = CustomConfirmScreens?.Ledger ? (
    <CustomConfirmScreens.Ledger {...signProps} />
  ) : (
    <SignWithLedgerModal {...signProps} />
  );
  const WalletconnectConfirm = CustomConfirmScreens?.WalletConnect ? (
    <CustomConfirmScreens.WalletConnect {...signProps} />
  ) : (
    <SignWithWalletConnectModal {...signProps} />
  );
  const ExtensionConfirm = CustomConfirmScreens?.Extension ? (
    <CustomConfirmScreens.Extension {...signProps} />
  ) : (
    <SignWithExtensionModal {...signProps} />
  );

  return signError || hasTransactions ? (
    <React.Fragment>
      {getIsProviderEqualTo(LoginMethodsEnum.ledger) && LedgerConfirm}

      {getIsProviderEqualTo(LoginMethodsEnum.walletconnect) &&
        WalletconnectConfirm}

      {getIsProviderEqualTo(LoginMethodsEnum.extension) && ExtensionConfirm}

      {getIsProviderEqualTo(LoginMethodsEnum.extra) && CustomConfirmScreens && (
        <CustomConfirmScreens.Extra {...signProps} />
      )}
    </React.Fragment>
  ) : null;
}

export default withClassNameWrapper(SignTransactionsModals);
