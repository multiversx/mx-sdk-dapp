import React from 'react';

import { Transaction } from '@elrondnetwork/erdjs';
import { useGetAccountProvider, useSignTransactions } from 'hooks';
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
  Ledger: (signProps: SignPropsType) => React.ReactNode;
  Extension: (signProps: SignPropsType) => React.ReactNode;
  WalletConnect: (signProps: SignPropsType) => React.ReactNode;
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

  const handleClose = () => {
    onAbort(sessionId);
  };

  const signProps: SignPropsType = {
    handleClose,
    error,
    sessionId,
    transactions: transactions!,
    providerType,
    callbackRoute: callbackRoute!,
    className
  };

  return error || hasTransactions ? (
    <React.Fragment>
      {getIsProviderEqualTo(LoginMethodsEnum.ledger) &&
        (CustomConfirmScreens?.Ledger?.(signProps) || (
          <SignWithLedgerModal {...signProps} />
        ))}
      {getIsProviderEqualTo(LoginMethodsEnum.walletconnect) &&
        (CustomConfirmScreens?.WalletConnect?.(signProps) || (
          <SignWithWalletConnectModal {...signProps} />
        ))}
      {getIsProviderEqualTo(LoginMethodsEnum.extension) &&
        (CustomConfirmScreens?.Extension?.(signProps) || (
          <SignWithExtensionModal {...signProps} />
        ))}
    </React.Fragment>
  ) : null;
}

export default withClassNameWrapper(SignTransactionsModals);
